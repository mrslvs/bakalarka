var Om = Object.defineProperty;
var Tm = (t, e, n) =>
    e in t ? Om(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var B = (t, e, n) => (Tm(t, typeof e != 'symbol' ? e + '' : e, n), n);
(function () {
    const e = document.createElement('link').relList;
    if (e && e.supports && e.supports('modulepreload')) return;
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
function Lm(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var T = { exports: {} },
    j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = Symbol.for('react.element'),
    Dm = Symbol.for('react.portal'),
    Rm = Symbol.for('react.fragment'),
    Nm = Symbol.for('react.strict_mode'),
    Am = Symbol.for('react.profiler'),
    zm = Symbol.for('react.provider'),
    Im = Symbol.for('react.context'),
    Fm = Symbol.for('react.forward_ref'),
    Hm = Symbol.for('react.suspense'),
    Bm = Symbol.for('react.memo'),
    jm = Symbol.for('react.lazy'),
    Lc = Symbol.iterator;
function Vm(t) {
    return t === null || typeof t != 'object'
        ? null
        : ((t = (Lc && t[Lc]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var ah = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    uh = Object.assign,
    ch = {};
function $i(t, e, n) {
    (this.props = t), (this.context = e), (this.refs = ch), (this.updater = n || ah);
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function (t, e) {
    if (typeof t != 'object' && typeof t != 'function' && t != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, t, e, 'setState');
};
$i.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function fh() {}
fh.prototype = $i.prototype;
function lu(t, e, n) {
    (this.props = t), (this.context = e), (this.refs = ch), (this.updater = n || ah);
}
var au = (lu.prototype = new fh());
au.constructor = lu;
uh(au, $i.prototype);
au.isPureReactComponent = !0;
var Dc = Array.isArray,
    dh = Object.prototype.hasOwnProperty,
    uu = { current: null },
    hh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ph(t, e, n) {
    var i,
        r = {},
        s = null,
        o = null;
    if (e != null)
        for (i in (e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = '' + e.key), e))
            dh.call(e, i) && !hh.hasOwnProperty(i) && (r[i] = e[i]);
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    if (t && t.defaultProps) for (i in ((l = t.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
    return { $$typeof: ss, type: t, key: s, ref: o, props: r, _owner: uu.current };
}
function Wm(t, e) {
    return { $$typeof: ss, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function cu(t) {
    return typeof t == 'object' && t !== null && t.$$typeof === ss;
}
function Um(t) {
    var e = { '=': '=0', ':': '=2' };
    return (
        '$' +
        t.replace(/[=:]/g, function (n) {
            return e[n];
        })
    );
}
var Rc = /\/+/g;
function yl(t, e) {
    return typeof t == 'object' && t !== null && t.key != null ? Um('' + t.key) : e.toString(36);
}
function Gs(t, e, n, i, r) {
    var s = typeof t;
    (s === 'undefined' || s === 'boolean') && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else
        switch (s) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (t.$$typeof) {
                    case ss:
                    case Dm:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = t),
            (r = r(o)),
            (t = i === '' ? '.' + yl(o, 0) : i),
            Dc(r)
                ? ((n = ''),
                  t != null && (n = t.replace(Rc, '$&/') + '/'),
                  Gs(r, e, n, '', function (u) {
                      return u;
                  }))
                : r != null &&
                  (cu(r) &&
                      (r = Wm(
                          r,
                          n +
                              (!r.key || (o && o.key === r.key)
                                  ? ''
                                  : ('' + r.key).replace(Rc, '$&/') + '/') +
                              t
                      )),
                  e.push(r)),
            1
        );
    if (((o = 0), (i = i === '' ? '.' : i + ':'), Dc(t)))
        for (var l = 0; l < t.length; l++) {
            s = t[l];
            var a = i + yl(s, l);
            o += Gs(s, e, n, a, r);
        }
    else if (((a = Vm(t)), typeof a == 'function'))
        for (t = a.call(t), l = 0; !(s = t.next()).done; )
            (s = s.value), (a = i + yl(s, l++)), (o += Gs(s, e, n, a, r));
    else if (s === 'object')
        throw (
            ((e = String(t)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (e === '[object Object]'
                        ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                        : e) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        );
    return o;
}
function ys(t, e, n) {
    if (t == null) return t;
    var i = [],
        r = 0;
    return (
        Gs(t, i, '', '', function (s) {
            return e.call(n, s, r++);
        }),
        i
    );
}
function $m(t) {
    if (t._status === -1) {
        var e = t._result;
        (e = e()),
            e.then(
                function (n) {
                    (t._status === 0 || t._status === -1) && ((t._status = 1), (t._result = n));
                },
                function (n) {
                    (t._status === 0 || t._status === -1) && ((t._status = 2), (t._result = n));
                }
            ),
            t._status === -1 && ((t._status = 0), (t._result = e));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
}
var He = { current: null },
    Zs = { transition: null },
    Ym = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: Zs, ReactCurrentOwner: uu };
j.Children = {
    map: ys,
    forEach: function (t, e, n) {
        ys(
            t,
            function () {
                e.apply(this, arguments);
            },
            n
        );
    },
    count: function (t) {
        var e = 0;
        return (
            ys(t, function () {
                e++;
            }),
            e
        );
    },
    toArray: function (t) {
        return (
            ys(t, function (e) {
                return e;
            }) || []
        );
    },
    only: function (t) {
        if (!cu(t))
            throw Error('React.Children.only expected to receive a single React element child.');
        return t;
    },
};
j.Component = $i;
j.Fragment = Rm;
j.Profiler = Am;
j.PureComponent = lu;
j.StrictMode = Nm;
j.Suspense = Hm;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym;
j.cloneElement = function (t, e, n) {
    if (t == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                t +
                '.'
        );
    var i = uh({}, t.props),
        r = t.key,
        s = t.ref,
        o = t._owner;
    if (e != null) {
        if (
            (e.ref !== void 0 && ((s = e.ref), (o = uu.current)),
            e.key !== void 0 && (r = '' + e.key),
            t.type && t.type.defaultProps)
        )
            var l = t.type.defaultProps;
        for (a in e)
            dh.call(e, a) &&
                !hh.hasOwnProperty(a) &&
                (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l;
    }
    return { $$typeof: ss, type: t.type, key: r, ref: s, props: i, _owner: o };
};
j.createContext = function (t) {
    return (
        (t = {
            $$typeof: Im,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (t.Provider = { $$typeof: zm, _context: t }),
        (t.Consumer = t)
    );
};
j.createElement = ph;
j.createFactory = function (t) {
    var e = ph.bind(null, t);
    return (e.type = t), e;
};
j.createRef = function () {
    return { current: null };
};
j.forwardRef = function (t) {
    return { $$typeof: Fm, render: t };
};
j.isValidElement = cu;
j.lazy = function (t) {
    return { $$typeof: jm, _payload: { _status: -1, _result: t }, _init: $m };
};
j.memo = function (t, e) {
    return { $$typeof: Bm, type: t, compare: e === void 0 ? null : e };
};
j.startTransition = function (t) {
    var e = Zs.transition;
    Zs.transition = {};
    try {
        t();
    } finally {
        Zs.transition = e;
    }
};
j.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
j.useCallback = function (t, e) {
    return He.current.useCallback(t, e);
};
j.useContext = function (t) {
    return He.current.useContext(t);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (t) {
    return He.current.useDeferredValue(t);
};
j.useEffect = function (t, e) {
    return He.current.useEffect(t, e);
};
j.useId = function () {
    return He.current.useId();
};
j.useImperativeHandle = function (t, e, n) {
    return He.current.useImperativeHandle(t, e, n);
};
j.useInsertionEffect = function (t, e) {
    return He.current.useInsertionEffect(t, e);
};
j.useLayoutEffect = function (t, e) {
    return He.current.useLayoutEffect(t, e);
};
j.useMemo = function (t, e) {
    return He.current.useMemo(t, e);
};
j.useReducer = function (t, e, n) {
    return He.current.useReducer(t, e, n);
};
j.useRef = function (t) {
    return He.current.useRef(t);
};
j.useState = function (t) {
    return He.current.useState(t);
};
j.useSyncExternalStore = function (t, e, n) {
    return He.current.useSyncExternalStore(t, e, n);
};
j.useTransition = function () {
    return He.current.useTransition();
};
j.version = '18.2.0';
(function (t) {
    t.exports = j;
})(T);
const ea = Lm(T.exports);
var ta = {},
    gh = { exports: {} },
    tt = {},
    mh = { exports: {} },
    vh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
    function e(O, D) {
        var A = O.length;
        O.push(D);
        e: for (; 0 < A; ) {
            var $ = (A - 1) >>> 1,
                K = O[$];
            if (0 < r(K, D)) (O[$] = D), (O[A] = K), (A = $);
            else break e;
        }
    }
    function n(O) {
        return O.length === 0 ? null : O[0];
    }
    function i(O) {
        if (O.length === 0) return null;
        var D = O[0],
            A = O.pop();
        if (A !== D) {
            O[0] = A;
            e: for (var $ = 0, K = O.length, ee = K >>> 1; $ < ee; ) {
                var pe = 2 * ($ + 1) - 1,
                    Ee = O[pe],
                    oe = pe + 1,
                    it = O[oe];
                if (0 > r(Ee, A))
                    oe < K && 0 > r(it, Ee)
                        ? ((O[$] = it), (O[oe] = A), ($ = oe))
                        : ((O[$] = Ee), (O[pe] = A), ($ = pe));
                else if (oe < K && 0 > r(it, A)) (O[$] = it), (O[oe] = A), ($ = oe);
                else break e;
            }
        }
        return D;
    }
    function r(O, D) {
        var A = O.sortIndex - D.sortIndex;
        return A !== 0 ? A : O.id - D.id;
    }
    if (typeof performance == 'object' && typeof performance.now == 'function') {
        var s = performance;
        t.unstable_now = function () {
            return s.now();
        };
    } else {
        var o = Date,
            l = o.now();
        t.unstable_now = function () {
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
        v = !1,
        x = typeof setTimeout == 'function' ? setTimeout : null,
        g = typeof clearTimeout == 'function' ? clearTimeout : null,
        p = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(O) {
        for (var D = n(u); D !== null; ) {
            if (D.callback === null) i(u);
            else if (D.startTime <= O) i(u), (D.sortIndex = D.expirationTime), e(a, D);
            else break;
            D = n(u);
        }
    }
    function _(O) {
        if (((v = !1), y(O), !m))
            if (n(a) !== null) (m = !0), W(w);
            else {
                var D = n(u);
                D !== null && H(_, D.startTime - O);
            }
    }
    function w(O, D) {
        (m = !1), v && ((v = !1), g(C), (C = -1)), (h = !0);
        var A = d;
        try {
            for (y(D), f = n(a); f !== null && (!(f.expirationTime > D) || (O && !R())); ) {
                var $ = f.callback;
                if (typeof $ == 'function') {
                    (f.callback = null), (d = f.priorityLevel);
                    var K = $(f.expirationTime <= D);
                    (D = t.unstable_now()),
                        typeof K == 'function' ? (f.callback = K) : f === n(a) && i(a),
                        y(D);
                } else i(a);
                f = n(a);
            }
            if (f !== null) var ee = !0;
            else {
                var pe = n(u);
                pe !== null && H(_, pe.startTime - D), (ee = !1);
            }
            return ee;
        } finally {
            (f = null), (d = A), (h = !1);
        }
    }
    var S = !1,
        k = null,
        C = -1,
        E = 5,
        M = -1;
    function R() {
        return !(t.unstable_now() - M < E);
    }
    function z() {
        if (k !== null) {
            var O = t.unstable_now();
            M = O;
            var D = !0;
            try {
                D = k(!0, O);
            } finally {
                D ? Y() : ((S = !1), (k = null));
            }
        } else S = !1;
    }
    var Y;
    if (typeof p == 'function')
        Y = function () {
            p(z);
        };
    else if (typeof MessageChannel < 'u') {
        var X = new MessageChannel(),
            I = X.port2;
        (X.port1.onmessage = z),
            (Y = function () {
                I.postMessage(null);
            });
    } else
        Y = function () {
            x(z, 0);
        };
    function W(O) {
        (k = O), S || ((S = !0), Y());
    }
    function H(O, D) {
        C = x(function () {
            O(t.unstable_now());
        }, D);
    }
    (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (O) {
            O.callback = null;
        }),
        (t.unstable_continueExecution = function () {
            m || h || ((m = !0), W(w));
        }),
        (t.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (E = 0 < O ? Math.floor(1e3 / O) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (t.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (t.unstable_next = function (O) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var D = 3;
                    break;
                default:
                    D = d;
            }
            var A = d;
            d = D;
            try {
                return O();
            } finally {
                d = A;
            }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (O, D) {
            switch (O) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    O = 3;
            }
            var A = d;
            d = O;
            try {
                return D();
            } finally {
                d = A;
            }
        }),
        (t.unstable_scheduleCallback = function (O, D, A) {
            var $ = t.unstable_now();
            switch (
                (typeof A == 'object' && A !== null
                    ? ((A = A.delay), (A = typeof A == 'number' && 0 < A ? $ + A : $))
                    : (A = $),
                O)
            ) {
                case 1:
                    var K = -1;
                    break;
                case 2:
                    K = 250;
                    break;
                case 5:
                    K = 1073741823;
                    break;
                case 4:
                    K = 1e4;
                    break;
                default:
                    K = 5e3;
            }
            return (
                (K = A + K),
                (O = {
                    id: c++,
                    callback: D,
                    priorityLevel: O,
                    startTime: A,
                    expirationTime: K,
                    sortIndex: -1,
                }),
                A > $
                    ? ((O.sortIndex = A),
                      e(u, O),
                      n(a) === null && O === n(u) && (v ? (g(C), (C = -1)) : (v = !0), H(_, A - $)))
                    : ((O.sortIndex = K), e(a, O), m || h || ((m = !0), W(w))),
                O
            );
        }),
        (t.unstable_shouldYield = R),
        (t.unstable_wrapCallback = function (O) {
            var D = d;
            return function () {
                var A = d;
                d = D;
                try {
                    return O.apply(this, arguments);
                } finally {
                    d = A;
                }
            };
        });
})(vh);
(function (t) {
    t.exports = vh;
})(mh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yh = T.exports,
    et = mh.exports;
function P(t) {
    for (
        var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
        n < arguments.length;
        n++
    )
        e += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        t +
        '; visit ' +
        e +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var xh = new Set(),
    zr = {};
function ni(t, e) {
    Ai(t, e), Ai(t + 'Capture', e);
}
function Ai(t, e) {
    for (zr[t] = e, t = 0; t < e.length; t++) xh.add(e[t]);
}
var $t = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    na = Object.prototype.hasOwnProperty,
    Km =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Nc = {},
    Ac = {};
function Qm(t) {
    return na.call(Ac, t)
        ? !0
        : na.call(Nc, t)
        ? !1
        : Km.test(t)
        ? (Ac[t] = !0)
        : ((Nc[t] = !0), !1);
}
function Xm(t, e, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return i
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
        default:
            return !1;
    }
}
function Gm(t, e, n, i) {
    if (e === null || typeof e > 'u' || Xm(t, e, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !e;
            case 4:
                return e === !1;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e;
        }
    return !1;
}
function Be(t, e, n, i, r, s, o) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
        (this.attributeName = i),
        (this.attributeNamespace = r),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = s),
        (this.removeEmptyString = o);
}
var Te = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (t) {
        Te[t] = new Be(t, 0, !1, t, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (t) {
    var e = t[0];
    Te[e] = new Be(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
    Te[t] = new Be(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (t) {
    Te[t] = new Be(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (t) {
        Te[t] = new Be(t, 3, !1, t.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
    Te[t] = new Be(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
    Te[t] = new Be(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
    Te[t] = new Be(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
    Te[t] = new Be(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var fu = /[\-:]([a-z])/g;
function du(t) {
    return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (t) {
        var e = t.replace(fu, du);
        Te[e] = new Be(e, 1, !1, t, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (t) {
        var e = t.replace(fu, du);
        Te[e] = new Be(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
    var e = t.replace(fu, du);
    Te[e] = new Be(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
    Te[t] = new Be(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Be('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
    Te[t] = new Be(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function hu(t, e, n, i) {
    var r = Te.hasOwnProperty(e) ? Te[e] : null;
    (r !== null
        ? r.type !== 0
        : i ||
          !(2 < e.length) ||
          (e[0] !== 'o' && e[0] !== 'O') ||
          (e[1] !== 'n' && e[1] !== 'N')) &&
        (Gm(e, n, r, i) && (n = null),
        i || r === null
            ? Qm(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
            : r.mustUseProperty
            ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : '') : n)
            : ((e = r.attributeName),
              (i = r.attributeNamespace),
              n === null
                  ? t.removeAttribute(e)
                  : ((r = r.type),
                    (n = r === 3 || (r === 4 && n === !0) ? '' : '' + n),
                    i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var Gt = yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    xs = Symbol.for('react.element'),
    pi = Symbol.for('react.portal'),
    gi = Symbol.for('react.fragment'),
    pu = Symbol.for('react.strict_mode'),
    ia = Symbol.for('react.profiler'),
    _h = Symbol.for('react.provider'),
    wh = Symbol.for('react.context'),
    gu = Symbol.for('react.forward_ref'),
    ra = Symbol.for('react.suspense'),
    sa = Symbol.for('react.suspense_list'),
    mu = Symbol.for('react.memo'),
    tn = Symbol.for('react.lazy'),
    Sh = Symbol.for('react.offscreen'),
    zc = Symbol.iterator;
function er(t) {
    return t === null || typeof t != 'object'
        ? null
        : ((t = (zc && t[zc]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var fe = Object.assign,
    xl;
function hr(t) {
    if (xl === void 0)
        try {
            throw Error();
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            xl = (e && e[1]) || '';
        }
    return (
        `
` +
        xl +
        t
    );
}
var _l = !1;
function wl(t, e) {
    if (!t || _l) return '';
    _l = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (
                ((e = function () {
                    throw Error();
                }),
                Object.defineProperty(e.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(e, []);
                } catch (u) {
                    var i = u;
                }
                Reflect.construct(t, [], e);
            } else {
                try {
                    e.call();
                } catch (u) {
                    i = u;
                }
                t.call(e.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                i = u;
            }
            t();
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
                                    t.displayName &&
                                        a.includes('<anonymous>') &&
                                        (a = a.replace('<anonymous>', t.displayName)),
                                    a
                                );
                            }
                        while (1 <= o && 0 <= l);
                    break;
                }
        }
    } finally {
        (_l = !1), (Error.prepareStackTrace = n);
    }
    return (t = t ? t.displayName || t.name : '') ? hr(t) : '';
}
function Zm(t) {
    switch (t.tag) {
        case 5:
            return hr(t.type);
        case 16:
            return hr('Lazy');
        case 13:
            return hr('Suspense');
        case 19:
            return hr('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (t = wl(t.type, !1)), t;
        case 11:
            return (t = wl(t.type.render, !1)), t;
        case 1:
            return (t = wl(t.type, !0)), t;
        default:
            return '';
    }
}
function oa(t) {
    if (t == null) return null;
    if (typeof t == 'function') return t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
        case gi:
            return 'Fragment';
        case pi:
            return 'Portal';
        case ia:
            return 'Profiler';
        case pu:
            return 'StrictMode';
        case ra:
            return 'Suspense';
        case sa:
            return 'SuspenseList';
    }
    if (typeof t == 'object')
        switch (t.$$typeof) {
            case wh:
                return (t.displayName || 'Context') + '.Consumer';
            case _h:
                return (t._context.displayName || 'Context') + '.Provider';
            case gu:
                var e = t.render;
                return (
                    (t = t.displayName),
                    t ||
                        ((t = e.displayName || e.name || ''),
                        (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
                    t
                );
            case mu:
                return (e = t.displayName || null), e !== null ? e : oa(t.type) || 'Memo';
            case tn:
                (e = t._payload), (t = t._init);
                try {
                    return oa(t(e));
                } catch {}
        }
    return null;
}
function qm(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (e.displayName || 'Context') + '.Consumer';
        case 10:
            return (e._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (t = e.render),
                (t = t.displayName || t.name || ''),
                e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return e;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return oa(e);
        case 8:
            return e === pu ? 'StrictMode' : 'Mode';
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
            if (typeof e == 'function') return e.displayName || e.name || null;
            if (typeof e == 'string') return e;
    }
    return null;
}
function Sn(t) {
    switch (typeof t) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return t;
        case 'object':
            return t;
        default:
            return '';
    }
}
function kh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
}
function Jm(t) {
    var e = kh(t) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        i = '' + t[e];
    if (
        !t.hasOwnProperty(e) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var r = n.get,
            s = n.set;
        return (
            Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                    return r.call(this);
                },
                set: function (o) {
                    (i = '' + o), s.call(this, o);
                },
            }),
            Object.defineProperty(t, e, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return i;
                },
                setValue: function (o) {
                    i = '' + o;
                },
                stopTracking: function () {
                    (t._valueTracker = null), delete t[e];
                },
            }
        );
    }
}
function _s(t) {
    t._valueTracker || (t._valueTracker = Jm(t));
}
function Ch(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        i = '';
    return (
        t && (i = kh(t) ? (t.checked ? 'true' : 'false') : t.value),
        (t = i),
        t !== n ? (e.setValue(t), !0) : !1
    );
}
function ho(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
    try {
        return t.activeElement || t.body;
    } catch {
        return t.body;
    }
}
function la(t, e) {
    var n = e.checked;
    return fe({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : t._wrapperState.initialChecked,
    });
}
function Ic(t, e) {
    var n = e.defaultValue == null ? '' : e.defaultValue,
        i = e.checked != null ? e.checked : e.defaultChecked;
    (n = Sn(e.value != null ? e.value : n)),
        (t._wrapperState = {
            initialChecked: i,
            initialValue: n,
            controlled:
                e.type === 'checkbox' || e.type === 'radio' ? e.checked != null : e.value != null,
        });
}
function bh(t, e) {
    (e = e.checked), e != null && hu(t, 'checked', e, !1);
}
function aa(t, e) {
    bh(t, e);
    var n = Sn(e.value),
        i = e.type;
    if (n != null)
        i === 'number'
            ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
            : t.value !== '' + n && (t.value = '' + n);
    else if (i === 'submit' || i === 'reset') {
        t.removeAttribute('value');
        return;
    }
    e.hasOwnProperty('value')
        ? ua(t, e.type, n)
        : e.hasOwnProperty('defaultValue') && ua(t, e.type, Sn(e.defaultValue)),
        e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function Fc(t, e, n) {
    if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
        var i = e.type;
        if (!((i !== 'submit' && i !== 'reset') || (e.value !== void 0 && e.value !== null)))
            return;
        (e = '' + t._wrapperState.initialValue),
            n || e === t.value || (t.value = e),
            (t.defaultValue = e);
    }
    (n = t.name),
        n !== '' && (t.name = ''),
        (t.defaultChecked = !!t._wrapperState.initialChecked),
        n !== '' && (t.name = n);
}
function ua(t, e, n) {
    (e !== 'number' || ho(t.ownerDocument) !== t) &&
        (n == null
            ? (t.defaultValue = '' + t._wrapperState.initialValue)
            : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var pr = Array.isArray;
function Ei(t, e, n, i) {
    if (((t = t.options), e)) {
        e = {};
        for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0;
        for (n = 0; n < t.length; n++)
            (r = e.hasOwnProperty('$' + t[n].value)),
                t[n].selected !== r && (t[n].selected = r),
                r && i && (t[n].defaultSelected = !0);
    } else {
        for (n = '' + Sn(n), e = null, r = 0; r < t.length; r++) {
            if (t[r].value === n) {
                (t[r].selected = !0), i && (t[r].defaultSelected = !0);
                return;
            }
            e !== null || t[r].disabled || (e = t[r]);
        }
        e !== null && (e.selected = !0);
    }
}
function ca(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(P(91));
    return fe({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: '' + t._wrapperState.initialValue,
    });
}
function Hc(t, e) {
    var n = e.value;
    if (n == null) {
        if (((n = e.children), (e = e.defaultValue), n != null)) {
            if (e != null) throw Error(P(92));
            if (pr(n)) {
                if (1 < n.length) throw Error(P(93));
                n = n[0];
            }
            e = n;
        }
        e == null && (e = ''), (n = e);
    }
    t._wrapperState = { initialValue: Sn(n) };
}
function Mh(t, e) {
    var n = Sn(e.value),
        i = Sn(e.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== t.value && (t.value = n),
        e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
        i != null && (t.defaultValue = '' + i);
}
function Bc(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function Eh(t) {
    switch (t) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function fa(t, e) {
    return t == null || t === 'http://www.w3.org/1999/xhtml'
        ? Eh(e)
        : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : t;
}
var ws,
    Ph = (function (t) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (e, n, i, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return t(e, n, i, r);
                  });
              }
            : t;
    })(function (t, e) {
        if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t) t.innerHTML = e;
        else {
            for (
                ws = ws || document.createElement('div'),
                    ws.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
                    e = ws.firstChild;
                t.firstChild;

            )
                t.removeChild(t.firstChild);
            for (; e.firstChild; ) t.appendChild(e.firstChild);
        }
    });
function Ir(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return;
        }
    }
    t.textContent = e;
}
var Sr = {
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
    e0 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Sr).forEach(function (t) {
    e0.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Sr[e] = Sr[t]);
    });
});
function Oh(t, e, n) {
    return e == null || typeof e == 'boolean' || e === ''
        ? ''
        : n || typeof e != 'number' || e === 0 || (Sr.hasOwnProperty(t) && Sr[t])
        ? ('' + e).trim()
        : e + 'px';
}
function Th(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = n.indexOf('--') === 0,
                r = Oh(n, e[n], i);
            n === 'float' && (n = 'cssFloat'), i ? t.setProperty(n, r) : (t[n] = r);
        }
}
var t0 = fe(
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
function da(t, e) {
    if (e) {
        if (t0[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(P(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(P(60));
            if (
                typeof e.dangerouslySetInnerHTML != 'object' ||
                !('__html' in e.dangerouslySetInnerHTML)
            )
                throw Error(P(61));
        }
        if (e.style != null && typeof e.style != 'object') throw Error(P(62));
    }
}
function ha(t, e) {
    if (t.indexOf('-') === -1) return typeof e.is == 'string';
    switch (t) {
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
var pa = null;
function vu(t) {
    return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    );
}
var ga = null,
    Pi = null,
    Oi = null;
function jc(t) {
    if ((t = as(t))) {
        if (typeof ga != 'function') throw Error(P(280));
        var e = t.stateNode;
        e && ((e = qo(e)), ga(t.stateNode, t.type, e));
    }
}
function Lh(t) {
    Pi ? (Oi ? Oi.push(t) : (Oi = [t])) : (Pi = t);
}
function Dh() {
    if (Pi) {
        var t = Pi,
            e = Oi;
        if (((Oi = Pi = null), jc(t), e)) for (t = 0; t < e.length; t++) jc(e[t]);
    }
}
function Rh(t, e) {
    return t(e);
}
function Nh() {}
var Sl = !1;
function Ah(t, e, n) {
    if (Sl) return t(e, n);
    Sl = !0;
    try {
        return Rh(t, e, n);
    } finally {
        (Sl = !1), (Pi !== null || Oi !== null) && (Nh(), Dh());
    }
}
function Fr(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = qo(n);
    if (i === null) return null;
    n = i[e];
    e: switch (e) {
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
                ((t = t.type),
                (i = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
                (t = !i);
            break e;
        default:
            t = !1;
    }
    if (t) return null;
    if (n && typeof n != 'function') throw Error(P(231, e, typeof n));
    return n;
}
var ma = !1;
if ($t)
    try {
        var tr = {};
        Object.defineProperty(tr, 'passive', {
            get: function () {
                ma = !0;
            },
        }),
            window.addEventListener('test', tr, tr),
            window.removeEventListener('test', tr, tr);
    } catch {
        ma = !1;
    }
function n0(t, e, n, i, r, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var kr = !1,
    po = null,
    go = !1,
    va = null,
    i0 = {
        onError: function (t) {
            (kr = !0), (po = t);
        },
    };
function r0(t, e, n, i, r, s, o, l, a) {
    (kr = !1), (po = null), n0.apply(i0, arguments);
}
function s0(t, e, n, i, r, s, o, l, a) {
    if ((r0.apply(this, arguments), kr)) {
        if (kr) {
            var u = po;
            (kr = !1), (po = null);
        } else throw Error(P(198));
        go || ((go = !0), (va = u));
    }
}
function ii(t) {
    var e = t,
        n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
        t = e;
        do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
        while (t);
    }
    return e.tag === 3 ? n : null;
}
function zh(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
            return e.dehydrated;
    }
    return null;
}
function Vc(t) {
    if (ii(t) !== t) throw Error(P(188));
}
function o0(t) {
    var e = t.alternate;
    if (!e) {
        if (((e = ii(t)), e === null)) throw Error(P(188));
        return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
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
                if (s === n) return Vc(r), t;
                if (s === i) return Vc(r), e;
                s = s.sibling;
            }
            throw Error(P(188));
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
                if (!o) throw Error(P(189));
            }
        }
        if (n.alternate !== i) throw Error(P(190));
    }
    if (n.tag !== 3) throw Error(P(188));
    return n.stateNode.current === n ? t : e;
}
function Ih(t) {
    return (t = o0(t)), t !== null ? Fh(t) : null;
}
function Fh(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
        var e = Fh(t);
        if (e !== null) return e;
        t = t.sibling;
    }
    return null;
}
var Hh = et.unstable_scheduleCallback,
    Wc = et.unstable_cancelCallback,
    l0 = et.unstable_shouldYield,
    a0 = et.unstable_requestPaint,
    ge = et.unstable_now,
    u0 = et.unstable_getCurrentPriorityLevel,
    yu = et.unstable_ImmediatePriority,
    Bh = et.unstable_UserBlockingPriority,
    mo = et.unstable_NormalPriority,
    c0 = et.unstable_LowPriority,
    jh = et.unstable_IdlePriority,
    Qo = null,
    Nt = null;
function f0(t) {
    if (Nt && typeof Nt.onCommitFiberRoot == 'function')
        try {
            Nt.onCommitFiberRoot(Qo, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
}
var wt = Math.clz32 ? Math.clz32 : p0,
    d0 = Math.log,
    h0 = Math.LN2;
function p0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((d0(t) / h0) | 0)) | 0;
}
var Ss = 64,
    ks = 4194304;
function gr(t) {
    switch (t & -t) {
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
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t;
    }
}
function vo(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
        r = t.suspendedLanes,
        s = t.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var l = o & ~r;
        l !== 0 ? (i = gr(l)) : ((s &= o), s !== 0 && (i = gr(s)));
    } else (o = n & ~r), o !== 0 ? (i = gr(o)) : s !== 0 && (i = gr(s));
    if (i === 0) return 0;
    if (
        e !== 0 &&
        e !== i &&
        (e & r) === 0 &&
        ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
    )
        return e;
    if (((i & 4) !== 0 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
        for (t = t.entanglements, e &= i; 0 < e; )
            (n = 31 - wt(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
    return i;
}
function g0(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
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
            return e + 5e3;
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
function m0(t, e) {
    for (
        var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes;
        0 < s;

    ) {
        var o = 31 - wt(s),
            l = 1 << o,
            a = r[o];
        a === -1
            ? ((l & n) === 0 || (l & i) !== 0) && (r[o] = g0(l, e))
            : a <= e && (t.expiredLanes |= l),
            (s &= ~l);
    }
}
function ya(t) {
    return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function Vh() {
    var t = Ss;
    return (Ss <<= 1), (Ss & 4194240) === 0 && (Ss = 64), t;
}
function kl(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
}
function os(t, e, n) {
    (t.pendingLanes |= e),
        e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
        (t = t.eventTimes),
        (e = 31 - wt(e)),
        (t[e] = n);
}
function v0(t, e) {
    var n = t.pendingLanes & ~e;
    (t.pendingLanes = e),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.expiredLanes &= e),
        (t.mutableReadLanes &= e),
        (t.entangledLanes &= e),
        (e = t.entanglements);
    var i = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var r = 31 - wt(n),
            s = 1 << r;
        (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
    }
}
function xu(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
        var i = 31 - wt(n),
            r = 1 << i;
        (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
    }
}
var q = 0;
function Wh(t) {
    return (t &= -t), 1 < t ? (4 < t ? ((t & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
}
var Uh,
    _u,
    $h,
    Yh,
    Kh,
    xa = !1,
    Cs = [],
    dn = null,
    hn = null,
    pn = null,
    Hr = new Map(),
    Br = new Map(),
    rn = [],
    y0 =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function Uc(t, e) {
    switch (t) {
        case 'focusin':
        case 'focusout':
            dn = null;
            break;
        case 'dragenter':
        case 'dragleave':
            hn = null;
            break;
        case 'mouseover':
        case 'mouseout':
            pn = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Hr.delete(e.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Br.delete(e.pointerId);
    }
}
function nr(t, e, n, i, r, s) {
    return t === null || t.nativeEvent !== s
        ? ((t = {
              blockedOn: e,
              domEventName: n,
              eventSystemFlags: i,
              nativeEvent: s,
              targetContainers: [r],
          }),
          e !== null && ((e = as(e)), e !== null && _u(e)),
          t)
        : ((t.eventSystemFlags |= i),
          (e = t.targetContainers),
          r !== null && e.indexOf(r) === -1 && e.push(r),
          t);
}
function x0(t, e, n, i, r) {
    switch (e) {
        case 'focusin':
            return (dn = nr(dn, t, e, n, i, r)), !0;
        case 'dragenter':
            return (hn = nr(hn, t, e, n, i, r)), !0;
        case 'mouseover':
            return (pn = nr(pn, t, e, n, i, r)), !0;
        case 'pointerover':
            var s = r.pointerId;
            return Hr.set(s, nr(Hr.get(s) || null, t, e, n, i, r)), !0;
        case 'gotpointercapture':
            return (s = r.pointerId), Br.set(s, nr(Br.get(s) || null, t, e, n, i, r)), !0;
    }
    return !1;
}
function Qh(t) {
    var e = Vn(t.target);
    if (e !== null) {
        var n = ii(e);
        if (n !== null) {
            if (((e = n.tag), e === 13)) {
                if (((e = zh(n)), e !== null)) {
                    (t.blockedOn = e),
                        Kh(t.priority, function () {
                            $h(n);
                        });
                    return;
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    t.blockedOn = null;
}
function qs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = _a(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type, n);
            (pa = i), n.target.dispatchEvent(i), (pa = null);
        } else return (e = as(n)), e !== null && _u(e), (t.blockedOn = n), !1;
        e.shift();
    }
    return !0;
}
function $c(t, e, n) {
    qs(t) && n.delete(e);
}
function _0() {
    (xa = !1),
        dn !== null && qs(dn) && (dn = null),
        hn !== null && qs(hn) && (hn = null),
        pn !== null && qs(pn) && (pn = null),
        Hr.forEach($c),
        Br.forEach($c);
}
function ir(t, e) {
    t.blockedOn === e &&
        ((t.blockedOn = null),
        xa || ((xa = !0), et.unstable_scheduleCallback(et.unstable_NormalPriority, _0)));
}
function jr(t) {
    function e(r) {
        return ir(r, t);
    }
    if (0 < Cs.length) {
        ir(Cs[0], t);
        for (var n = 1; n < Cs.length; n++) {
            var i = Cs[n];
            i.blockedOn === t && (i.blockedOn = null);
        }
    }
    for (
        dn !== null && ir(dn, t),
            hn !== null && ir(hn, t),
            pn !== null && ir(pn, t),
            Hr.forEach(e),
            Br.forEach(e),
            n = 0;
        n < rn.length;
        n++
    )
        (i = rn[n]), i.blockedOn === t && (i.blockedOn = null);
    for (; 0 < rn.length && ((n = rn[0]), n.blockedOn === null); )
        Qh(n), n.blockedOn === null && rn.shift();
}
var Ti = Gt.ReactCurrentBatchConfig,
    yo = !0;
function w0(t, e, n, i) {
    var r = q,
        s = Ti.transition;
    Ti.transition = null;
    try {
        (q = 1), wu(t, e, n, i);
    } finally {
        (q = r), (Ti.transition = s);
    }
}
function S0(t, e, n, i) {
    var r = q,
        s = Ti.transition;
    Ti.transition = null;
    try {
        (q = 4), wu(t, e, n, i);
    } finally {
        (q = r), (Ti.transition = s);
    }
}
function wu(t, e, n, i) {
    if (yo) {
        var r = _a(t, e, n, i);
        if (r === null) Rl(t, e, i, xo, n), Uc(t, i);
        else if (x0(r, t, e, n, i)) i.stopPropagation();
        else if ((Uc(t, i), e & 4 && -1 < y0.indexOf(t))) {
            for (; r !== null; ) {
                var s = as(r);
                if (
                    (s !== null && Uh(s),
                    (s = _a(t, e, n, i)),
                    s === null && Rl(t, e, i, xo, n),
                    s === r)
                )
                    break;
                r = s;
            }
            r !== null && i.stopPropagation();
        } else Rl(t, e, i, null, n);
    }
}
var xo = null;
function _a(t, e, n, i) {
    if (((xo = null), (t = vu(i)), (t = Vn(t)), t !== null))
        if (((e = ii(t)), e === null)) t = null;
        else if (((n = e.tag), n === 13)) {
            if (((t = zh(e)), t !== null)) return t;
            t = null;
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
        } else e !== t && (t = null);
    return (xo = t), null;
}
function Xh(t) {
    switch (t) {
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
            switch (u0()) {
                case yu:
                    return 1;
                case Bh:
                    return 4;
                case mo:
                case c0:
                    return 16;
                case jh:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var on = null,
    Su = null,
    Js = null;
function Gh() {
    if (Js) return Js;
    var t,
        e = Su,
        n = e.length,
        i,
        r = 'value' in on ? on.value : on.textContent,
        s = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var o = n - t;
    for (i = 1; i <= o && e[n - i] === r[s - i]; i++);
    return (Js = r.slice(t, 1 < i ? 1 - i : void 0));
}
function eo(t) {
    var e = t.keyCode;
    return (
        'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    );
}
function bs() {
    return !0;
}
function Yc() {
    return !1;
}
function nt(t) {
    function e(n, i, r, s, o) {
        (this._reactName = n),
            (this._targetInst = r),
            (this.type = i),
            (this.nativeEvent = s),
            (this.target = o),
            (this.currentTarget = null);
        for (var l in t) t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
        return (
            (this.isDefaultPrevented = (
                s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
            )
                ? bs
                : Yc),
            (this.isPropagationStopped = Yc),
            this
        );
    }
    return (
        fe(e.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
                    (this.isDefaultPrevented = bs));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
                    (this.isPropagationStopped = bs));
            },
            persist: function () {},
            isPersistent: bs,
        }),
        e
    );
}
var Yi = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
            return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    ku = nt(Yi),
    ls = fe({}, Yi, { view: 0, detail: 0 }),
    k0 = nt(ls),
    Cl,
    bl,
    rr,
    Xo = fe({}, ls, {
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
        getModifierState: Cu,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0
                ? t.fromElement === t.srcElement
                    ? t.toElement
                    : t.fromElement
                : t.relatedTarget;
        },
        movementX: function (t) {
            return 'movementX' in t
                ? t.movementX
                : (t !== rr &&
                      (rr && t.type === 'mousemove'
                          ? ((Cl = t.screenX - rr.screenX), (bl = t.screenY - rr.screenY))
                          : (bl = Cl = 0),
                      (rr = t)),
                  Cl);
        },
        movementY: function (t) {
            return 'movementY' in t ? t.movementY : bl;
        },
    }),
    Kc = nt(Xo),
    C0 = fe({}, Xo, { dataTransfer: 0 }),
    b0 = nt(C0),
    M0 = fe({}, ls, { relatedTarget: 0 }),
    Ml = nt(M0),
    E0 = fe({}, Yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    P0 = nt(E0),
    O0 = fe({}, Yi, {
        clipboardData: function (t) {
            return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
        },
    }),
    T0 = nt(O0),
    L0 = fe({}, Yi, { data: 0 }),
    Qc = nt(L0),
    D0 = {
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
    R0 = {
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
    N0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function A0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = N0[t]) ? !!e[t] : !1;
}
function Cu() {
    return A0;
}
var z0 = fe({}, ls, {
        key: function (t) {
            if (t.key) {
                var e = D0[t.key] || t.key;
                if (e !== 'Unidentified') return e;
            }
            return t.type === 'keypress'
                ? ((t = eo(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
                : t.type === 'keydown' || t.type === 'keyup'
                ? R0[t.keyCode] || 'Unidentified'
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
        getModifierState: Cu,
        charCode: function (t) {
            return t.type === 'keypress' ? eo(t) : 0;
        },
        keyCode: function (t) {
            return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
        },
        which: function (t) {
            return t.type === 'keypress'
                ? eo(t)
                : t.type === 'keydown' || t.type === 'keyup'
                ? t.keyCode
                : 0;
        },
    }),
    I0 = nt(z0),
    F0 = fe({}, Xo, {
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
    Xc = nt(F0),
    H0 = fe({}, ls, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Cu,
    }),
    B0 = nt(H0),
    j0 = fe({}, Yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V0 = nt(j0),
    W0 = fe({}, Xo, {
        deltaX: function (t) {
            return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
        },
        deltaY: function (t) {
            return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                ? -t.wheelDeltaY
                : 'wheelDelta' in t
                ? -t.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    U0 = nt(W0),
    $0 = [9, 13, 27, 32],
    bu = $t && 'CompositionEvent' in window,
    Cr = null;
$t && 'documentMode' in document && (Cr = document.documentMode);
var Y0 = $t && 'TextEvent' in window && !Cr,
    Zh = $t && (!bu || (Cr && 8 < Cr && 11 >= Cr)),
    Gc = String.fromCharCode(32),
    Zc = !1;
function qh(t, e) {
    switch (t) {
        case 'keyup':
            return $0.indexOf(e.keyCode) !== -1;
        case 'keydown':
            return e.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function Jh(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var mi = !1;
function K0(t, e) {
    switch (t) {
        case 'compositionend':
            return Jh(e);
        case 'keypress':
            return e.which !== 32 ? null : ((Zc = !0), Gc);
        case 'textInput':
            return (t = e.data), t === Gc && Zc ? null : t;
        default:
            return null;
    }
}
function Q0(t, e) {
    if (mi)
        return t === 'compositionend' || (!bu && qh(t, e))
            ? ((t = Gh()), (Js = Su = on = null), (mi = !1), t)
            : null;
    switch (t) {
        case 'paste':
            return null;
        case 'keypress':
            if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which);
            }
            return null;
        case 'compositionend':
            return Zh && e.locale !== 'ko' ? null : e.data;
        default:
            return null;
    }
}
var X0 = {
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
function qc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!X0[t.type] : e === 'textarea';
}
function ep(t, e, n, i) {
    Lh(i),
        (e = _o(e, 'onChange')),
        0 < e.length &&
            ((n = new ku('onChange', 'change', null, n, i)), t.push({ event: n, listeners: e }));
}
var br = null,
    Vr = null;
function G0(t) {
    fp(t, 0);
}
function Go(t) {
    var e = xi(t);
    if (Ch(e)) return t;
}
function Z0(t, e) {
    if (t === 'change') return e;
}
var tp = !1;
if ($t) {
    var El;
    if ($t) {
        var Pl = 'oninput' in document;
        if (!Pl) {
            var Jc = document.createElement('div');
            Jc.setAttribute('oninput', 'return;'), (Pl = typeof Jc.oninput == 'function');
        }
        El = Pl;
    } else El = !1;
    tp = El && (!document.documentMode || 9 < document.documentMode);
}
function ef() {
    br && (br.detachEvent('onpropertychange', np), (Vr = br = null));
}
function np(t) {
    if (t.propertyName === 'value' && Go(Vr)) {
        var e = [];
        ep(e, Vr, t, vu(t)), Ah(G0, e);
    }
}
function q0(t, e, n) {
    t === 'focusin'
        ? (ef(), (br = e), (Vr = n), br.attachEvent('onpropertychange', np))
        : t === 'focusout' && ef();
}
function J0(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Go(Vr);
}
function e1(t, e) {
    if (t === 'click') return Go(e);
}
function t1(t, e) {
    if (t === 'input' || t === 'change') return Go(e);
}
function n1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var kt = typeof Object.is == 'function' ? Object.is : n1;
function Wr(t, e) {
    if (kt(t, e)) return !0;
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
    var n = Object.keys(t),
        i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!na.call(e, r) || !kt(t[r], e[r])) return !1;
    }
    return !0;
}
function tf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
}
function nf(t, e) {
    var n = tf(t);
    t = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (((i = t + n.textContent.length), t <= e && i >= e))
                return { node: n, offset: e - t };
            t = i;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = tf(n);
    }
}
function ip(t, e) {
    return t && e
        ? t === e
            ? !0
            : t && t.nodeType === 3
            ? !1
            : e && e.nodeType === 3
            ? ip(t, e.parentNode)
            : 'contains' in t
            ? t.contains(e)
            : t.compareDocumentPosition
            ? !!(t.compareDocumentPosition(e) & 16)
            : !1
        : !1;
}
function rp() {
    for (var t = window, e = ho(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) t = e.contentWindow;
        else break;
        e = ho(t.document);
    }
    return e;
}
function Mu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
        e &&
        ((e === 'input' &&
            (t.type === 'text' ||
                t.type === 'search' ||
                t.type === 'tel' ||
                t.type === 'url' ||
                t.type === 'password')) ||
            e === 'textarea' ||
            t.contentEditable === 'true')
    );
}
function i1(t) {
    var e = rp(),
        n = t.focusedElem,
        i = t.selectionRange;
    if (e !== n && n && n.ownerDocument && ip(n.ownerDocument.documentElement, n)) {
        if (i !== null && Mu(n)) {
            if (((e = i.start), (t = i.end), t === void 0 && (t = e), 'selectionStart' in n))
                (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
            else if (
                ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
                t.getSelection)
            ) {
                t = t.getSelection();
                var r = n.textContent.length,
                    s = Math.min(i.start, r);
                (i = i.end === void 0 ? s : Math.min(i.end, r)),
                    !t.extend && s > i && ((r = i), (i = s), (s = r)),
                    (r = nf(n, s));
                var o = nf(n, i);
                r &&
                    o &&
                    (t.rangeCount !== 1 ||
                        t.anchorNode !== r.node ||
                        t.anchorOffset !== r.offset ||
                        t.focusNode !== o.node ||
                        t.focusOffset !== o.offset) &&
                    ((e = e.createRange()),
                    e.setStart(r.node, r.offset),
                    t.removeAllRanges(),
                    s > i
                        ? (t.addRange(e), t.extend(o.node, o.offset))
                        : (e.setEnd(o.node, o.offset), t.addRange(e)));
            }
        }
        for (e = [], t = n; (t = t.parentNode); )
            t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
        for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
            (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top);
    }
}
var r1 = $t && 'documentMode' in document && 11 >= document.documentMode,
    vi = null,
    wa = null,
    Mr = null,
    Sa = !1;
function rf(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Sa ||
        vi == null ||
        vi !== ho(i) ||
        ((i = vi),
        'selectionStart' in i && Mu(i)
            ? (i = { start: i.selectionStart, end: i.selectionEnd })
            : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
              (i = {
                  anchorNode: i.anchorNode,
                  anchorOffset: i.anchorOffset,
                  focusNode: i.focusNode,
                  focusOffset: i.focusOffset,
              })),
        (Mr && Wr(Mr, i)) ||
            ((Mr = i),
            (i = _o(wa, 'onSelect')),
            0 < i.length &&
                ((e = new ku('onSelect', 'select', null, e, n)),
                t.push({ event: e, listeners: i }),
                (e.target = vi))));
}
function Ms(t, e) {
    var n = {};
    return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n['Webkit' + t] = 'webkit' + e),
        (n['Moz' + t] = 'moz' + e),
        n
    );
}
var yi = {
        animationend: Ms('Animation', 'AnimationEnd'),
        animationiteration: Ms('Animation', 'AnimationIteration'),
        animationstart: Ms('Animation', 'AnimationStart'),
        transitionend: Ms('Transition', 'TransitionEnd'),
    },
    Ol = {},
    sp = {};
$t &&
    ((sp = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete yi.animationend.animation,
        delete yi.animationiteration.animation,
        delete yi.animationstart.animation),
    'TransitionEvent' in window || delete yi.transitionend.transition);
function Zo(t) {
    if (Ol[t]) return Ol[t];
    if (!yi[t]) return t;
    var e = yi[t],
        n;
    for (n in e) if (e.hasOwnProperty(n) && n in sp) return (Ol[t] = e[n]);
    return t;
}
var op = Zo('animationend'),
    lp = Zo('animationiteration'),
    ap = Zo('animationstart'),
    up = Zo('transitionend'),
    cp = new Map(),
    sf =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function Mn(t, e) {
    cp.set(t, e), ni(e, [t]);
}
for (var Tl = 0; Tl < sf.length; Tl++) {
    var Ll = sf[Tl],
        s1 = Ll.toLowerCase(),
        o1 = Ll[0].toUpperCase() + Ll.slice(1);
    Mn(s1, 'on' + o1);
}
Mn(op, 'onAnimationEnd');
Mn(lp, 'onAnimationIteration');
Mn(ap, 'onAnimationStart');
Mn('dblclick', 'onDoubleClick');
Mn('focusin', 'onFocus');
Mn('focusout', 'onBlur');
Mn(up, 'onTransitionEnd');
Ai('onMouseEnter', ['mouseout', 'mouseover']);
Ai('onMouseLeave', ['mouseout', 'mouseover']);
Ai('onPointerEnter', ['pointerout', 'pointerover']);
Ai('onPointerLeave', ['pointerout', 'pointerover']);
ni('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
ni(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
ni('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ni('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
ni('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
ni('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var mr =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    l1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(mr));
function of(t, e, n) {
    var i = t.type || 'unknown-event';
    (t.currentTarget = n), s0(i, e, void 0, t), (t.currentTarget = null);
}
function fp(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n],
            r = i.event;
        i = i.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var l = i[o],
                        a = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), a !== s && r.isPropagationStopped())) break e;
                    of(r, l, u), (s = a);
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
                        break e;
                    of(r, l, u), (s = a);
                }
        }
    }
    if (go) throw ((t = va), (go = !1), (va = null), t);
}
function ie(t, e) {
    var n = e[Ea];
    n === void 0 && (n = e[Ea] = new Set());
    var i = t + '__bubble';
    n.has(i) || (dp(e, t, 2, !1), n.add(i));
}
function Dl(t, e, n) {
    var i = 0;
    e && (i |= 4), dp(n, t, i, e);
}
var Es = '_reactListening' + Math.random().toString(36).slice(2);
function Ur(t) {
    if (!t[Es]) {
        (t[Es] = !0),
            xh.forEach(function (n) {
                n !== 'selectionchange' && (l1.has(n) || Dl(n, !1, t), Dl(n, !0, t));
            });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Es] || ((e[Es] = !0), Dl('selectionchange', !1, e));
    }
}
function dp(t, e, n, i) {
    switch (Xh(e)) {
        case 1:
            var r = w0;
            break;
        case 4:
            r = S0;
            break;
        default:
            r = wu;
    }
    (n = r.bind(null, e, n, t)),
        (r = void 0),
        !ma || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (r = !0),
        i
            ? r !== void 0
                ? t.addEventListener(e, n, { capture: !0, passive: r })
                : t.addEventListener(e, n, !0)
            : r !== void 0
            ? t.addEventListener(e, n, { passive: r })
            : t.addEventListener(e, n, !1);
}
function Rl(t, e, n, i, r) {
    var s = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
        e: for (;;) {
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
                    if (((o = Vn(l)), o === null)) return;
                    if (((a = o.tag), a === 5 || a === 6)) {
                        i = s = o;
                        continue e;
                    }
                    l = l.parentNode;
                }
            }
            i = i.return;
        }
    Ah(function () {
        var u = s,
            c = vu(n),
            f = [];
        e: {
            var d = cp.get(t);
            if (d !== void 0) {
                var h = ku,
                    m = t;
                switch (t) {
                    case 'keypress':
                        if (eo(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        h = I0;
                        break;
                    case 'focusin':
                        (m = 'focus'), (h = Ml);
                        break;
                    case 'focusout':
                        (m = 'blur'), (h = Ml);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        h = Ml;
                        break;
                    case 'click':
                        if (n.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        h = Kc;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        h = b0;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        h = B0;
                        break;
                    case op:
                    case lp:
                    case ap:
                        h = P0;
                        break;
                    case up:
                        h = V0;
                        break;
                    case 'scroll':
                        h = k0;
                        break;
                    case 'wheel':
                        h = U0;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        h = T0;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        h = Xc;
                }
                var v = (e & 4) !== 0,
                    x = !v && t === 'scroll',
                    g = v ? (d !== null ? d + 'Capture' : null) : d;
                v = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var _ = y.stateNode;
                    if (
                        (y.tag === 5 &&
                            _ !== null &&
                            ((y = _),
                            g !== null && ((_ = Fr(p, g)), _ != null && v.push($r(p, _, y)))),
                        x)
                    )
                        break;
                    p = p.return;
                }
                0 < v.length && ((d = new h(d, m, null, n, c)), f.push({ event: d, listeners: v }));
            }
        }
        if ((e & 7) === 0) {
            e: {
                if (
                    ((d = t === 'mouseover' || t === 'pointerover'),
                    (h = t === 'mouseout' || t === 'pointerout'),
                    d && n !== pa && (m = n.relatedTarget || n.fromElement) && (Vn(m) || m[Yt]))
                )
                    break e;
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
                          (m = m ? Vn(m) : null),
                          m !== null &&
                              ((x = ii(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) &&
                              (m = null))
                        : ((h = null), (m = u)),
                    h !== m)
                ) {
                    if (
                        ((v = Kc),
                        (_ = 'onMouseLeave'),
                        (g = 'onMouseEnter'),
                        (p = 'mouse'),
                        (t === 'pointerout' || t === 'pointerover') &&
                            ((v = Xc),
                            (_ = 'onPointerLeave'),
                            (g = 'onPointerEnter'),
                            (p = 'pointer')),
                        (x = h == null ? d : xi(h)),
                        (y = m == null ? d : xi(m)),
                        (d = new v(_, p + 'leave', h, n, c)),
                        (d.target = x),
                        (d.relatedTarget = y),
                        (_ = null),
                        Vn(c) === u &&
                            ((v = new v(g, p + 'enter', m, n, c)),
                            (v.target = y),
                            (v.relatedTarget = x),
                            (_ = v)),
                        (x = _),
                        h && m)
                    )
                        t: {
                            for (v = h, g = m, p = 0, y = v; y; y = fi(y)) p++;
                            for (y = 0, _ = g; _; _ = fi(_)) y++;
                            for (; 0 < p - y; ) (v = fi(v)), p--;
                            for (; 0 < y - p; ) (g = fi(g)), y--;
                            for (; p--; ) {
                                if (v === g || (g !== null && v === g.alternate)) break t;
                                (v = fi(v)), (g = fi(g));
                            }
                            v = null;
                        }
                    else v = null;
                    h !== null && lf(f, d, h, v, !1),
                        m !== null && x !== null && lf(f, x, m, v, !0);
                }
            }
            e: {
                if (
                    ((d = u ? xi(u) : window),
                    (h = d.nodeName && d.nodeName.toLowerCase()),
                    h === 'select' || (h === 'input' && d.type === 'file'))
                )
                    var w = Z0;
                else if (qc(d))
                    if (tp) w = t1;
                    else {
                        w = J0;
                        var S = q0;
                    }
                else
                    (h = d.nodeName) &&
                        h.toLowerCase() === 'input' &&
                        (d.type === 'checkbox' || d.type === 'radio') &&
                        (w = e1);
                if (w && (w = w(t, u))) {
                    ep(f, w, n, c);
                    break e;
                }
                S && S(t, d, u),
                    t === 'focusout' &&
                        (S = d._wrapperState) &&
                        S.controlled &&
                        d.type === 'number' &&
                        ua(d, 'number', d.value);
            }
            switch (((S = u ? xi(u) : window), t)) {
                case 'focusin':
                    (qc(S) || S.contentEditable === 'true') && ((vi = S), (wa = u), (Mr = null));
                    break;
                case 'focusout':
                    Mr = wa = vi = null;
                    break;
                case 'mousedown':
                    Sa = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Sa = !1), rf(f, n, c);
                    break;
                case 'selectionchange':
                    if (r1) break;
                case 'keydown':
                case 'keyup':
                    rf(f, n, c);
            }
            var k;
            if (bu)
                e: {
                    switch (t) {
                        case 'compositionstart':
                            var C = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            C = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            C = 'onCompositionUpdate';
                            break e;
                    }
                    C = void 0;
                }
            else
                mi
                    ? qh(t, n) && (C = 'onCompositionEnd')
                    : t === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
            C &&
                (Zh &&
                    n.locale !== 'ko' &&
                    (mi || C !== 'onCompositionStart'
                        ? C === 'onCompositionEnd' && mi && (k = Gh())
                        : ((on = c), (Su = 'value' in on ? on.value : on.textContent), (mi = !0))),
                (S = _o(u, C)),
                0 < S.length &&
                    ((C = new Qc(C, t, null, n, c)),
                    f.push({ event: C, listeners: S }),
                    k ? (C.data = k) : ((k = Jh(n)), k !== null && (C.data = k)))),
                (k = Y0 ? K0(t, n) : Q0(t, n)) &&
                    ((u = _o(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((c = new Qc('onBeforeInput', 'beforeinput', null, n, c)),
                        f.push({ event: c, listeners: u }),
                        (c.data = k)));
        }
        fp(f, e);
    });
}
function $r(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
}
function _o(t, e) {
    for (var n = e + 'Capture', i = []; t !== null; ) {
        var r = t,
            s = r.stateNode;
        r.tag === 5 &&
            s !== null &&
            ((r = s),
            (s = Fr(t, n)),
            s != null && i.unshift($r(t, s, r)),
            (s = Fr(t, e)),
            s != null && i.push($r(t, s, r))),
            (t = t.return);
    }
    return i;
}
function fi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
}
function lf(t, e, n, i, r) {
    for (var s = e._reactName, o = []; n !== null && n !== i; ) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === i) break;
        l.tag === 5 &&
            u !== null &&
            ((l = u),
            r
                ? ((a = Fr(n, s)), a != null && o.unshift($r(n, a, l)))
                : r || ((a = Fr(n, s)), a != null && o.push($r(n, a, l)))),
            (n = n.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
}
var a1 = /\r\n?/g,
    u1 = /\u0000|\uFFFD/g;
function af(t) {
    return (typeof t == 'string' ? t : '' + t)
        .replace(
            a1,
            `
`
        )
        .replace(u1, '');
}
function Ps(t, e, n) {
    if (((e = af(e)), af(t) !== e && n)) throw Error(P(425));
}
function wo() {}
var ka = null,
    Ca = null;
function ba(t, e) {
    return (
        t === 'textarea' ||
        t === 'noscript' ||
        typeof e.children == 'string' ||
        typeof e.children == 'number' ||
        (typeof e.dangerouslySetInnerHTML == 'object' &&
            e.dangerouslySetInnerHTML !== null &&
            e.dangerouslySetInnerHTML.__html != null)
    );
}
var Ma = typeof setTimeout == 'function' ? setTimeout : void 0,
    c1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    uf = typeof Promise == 'function' ? Promise : void 0,
    f1 =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof uf < 'u'
            ? function (t) {
                  return uf.resolve(null).then(t).catch(d1);
              }
            : Ma;
function d1(t) {
    setTimeout(function () {
        throw t;
    });
}
function Nl(t, e) {
    var n = e,
        i = 0;
    do {
        var r = n.nextSibling;
        if ((t.removeChild(n), r && r.nodeType === 8))
            if (((n = r.data), n === '/$')) {
                if (i === 0) {
                    t.removeChild(r), jr(e);
                    return;
                }
                i--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || i++;
        n = r;
    } while (n);
    jr(e);
}
function gn(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break;
            if (e === '/$') return null;
        }
    }
    return t;
}
function cf(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (e === 0) return t;
                e--;
            } else n === '/$' && e++;
        }
        t = t.previousSibling;
    }
    return null;
}
var Ki = Math.random().toString(36).slice(2),
    Dt = '__reactFiber$' + Ki,
    Yr = '__reactProps$' + Ki,
    Yt = '__reactContainer$' + Ki,
    Ea = '__reactEvents$' + Ki,
    h1 = '__reactListeners$' + Ki,
    p1 = '__reactHandles$' + Ki;
function Vn(t) {
    var e = t[Dt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
        if ((e = n[Yt] || n[Dt])) {
            if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
                for (t = cf(t); t !== null; ) {
                    if ((n = t[Dt])) return n;
                    t = cf(t);
                }
            return e;
        }
        (t = n), (n = t.parentNode);
    }
    return null;
}
function as(t) {
    return (
        (t = t[Dt] || t[Yt]),
        !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
    );
}
function xi(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(P(33));
}
function qo(t) {
    return t[Yr] || null;
}
var Pa = [],
    _i = -1;
function En(t) {
    return { current: t };
}
function se(t) {
    0 > _i || ((t.current = Pa[_i]), (Pa[_i] = null), _i--);
}
function ne(t, e) {
    _i++, (Pa[_i] = t.current), (t.current = e);
}
var kn = {},
    Ae = En(kn),
    Ye = En(!1),
    Xn = kn;
function zi(t, e) {
    var n = t.type.contextTypes;
    if (!n) return kn;
    var i = t.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {},
        s;
    for (s in n) r[s] = e[s];
    return (
        i &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = e),
            (t.__reactInternalMemoizedMaskedChildContext = r)),
        r
    );
}
function Ke(t) {
    return (t = t.childContextTypes), t != null;
}
function So() {
    se(Ye), se(Ae);
}
function ff(t, e, n) {
    if (Ae.current !== kn) throw Error(P(168));
    ne(Ae, e), ne(Ye, n);
}
function hp(t, e, n) {
    var i = t.stateNode;
    if (((e = e.childContextTypes), typeof i.getChildContext != 'function')) return n;
    i = i.getChildContext();
    for (var r in i) if (!(r in e)) throw Error(P(108, qm(t) || 'Unknown', r));
    return fe({}, n, i);
}
function ko(t) {
    return (
        (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || kn),
        (Xn = Ae.current),
        ne(Ae, t),
        ne(Ye, Ye.current),
        !0
    );
}
function df(t, e, n) {
    var i = t.stateNode;
    if (!i) throw Error(P(169));
    n
        ? ((t = hp(t, e, Xn)),
          (i.__reactInternalMemoizedMergedChildContext = t),
          se(Ye),
          se(Ae),
          ne(Ae, t))
        : se(Ye),
        ne(Ye, n);
}
var Bt = null,
    Jo = !1,
    Al = !1;
function pp(t) {
    Bt === null ? (Bt = [t]) : Bt.push(t);
}
function g1(t) {
    (Jo = !0), pp(t);
}
function Pn() {
    if (!Al && Bt !== null) {
        Al = !0;
        var t = 0,
            e = q;
        try {
            var n = Bt;
            for (q = 1; t < n.length; t++) {
                var i = n[t];
                do i = i(!0);
                while (i !== null);
            }
            (Bt = null), (Jo = !1);
        } catch (r) {
            throw (Bt !== null && (Bt = Bt.slice(t + 1)), Hh(yu, Pn), r);
        } finally {
            (q = e), (Al = !1);
        }
    }
    return null;
}
var wi = [],
    Si = 0,
    Co = null,
    bo = 0,
    ot = [],
    lt = 0,
    Gn = null,
    Vt = 1,
    Wt = '';
function Fn(t, e) {
    (wi[Si++] = bo), (wi[Si++] = Co), (Co = t), (bo = e);
}
function gp(t, e, n) {
    (ot[lt++] = Vt), (ot[lt++] = Wt), (ot[lt++] = Gn), (Gn = t);
    var i = Vt;
    t = Wt;
    var r = 32 - wt(i) - 1;
    (i &= ~(1 << r)), (n += 1);
    var s = 32 - wt(e) + r;
    if (30 < s) {
        var o = r - (r % 5);
        (s = (i & ((1 << o) - 1)).toString(32)),
            (i >>= o),
            (r -= o),
            (Vt = (1 << (32 - wt(e) + r)) | (n << r) | i),
            (Wt = s + t);
    } else (Vt = (1 << s) | (n << r) | i), (Wt = t);
}
function Eu(t) {
    t.return !== null && (Fn(t, 1), gp(t, 1, 0));
}
function Pu(t) {
    for (; t === Co; ) (Co = wi[--Si]), (wi[Si] = null), (bo = wi[--Si]), (wi[Si] = null);
    for (; t === Gn; )
        (Gn = ot[--lt]),
            (ot[lt] = null),
            (Wt = ot[--lt]),
            (ot[lt] = null),
            (Vt = ot[--lt]),
            (ot[lt] = null);
}
var Je = null,
    qe = null,
    le = !1,
    xt = null;
function mp(t, e) {
    var n = at(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = e),
        (n.return = t),
        (e = t.deletions),
        e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function hf(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return (
                (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
                e !== null ? ((t.stateNode = e), (Je = t), (qe = gn(e.firstChild)), !0) : !1
            );
        case 6:
            return (
                (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
                e !== null ? ((t.stateNode = e), (Je = t), (qe = null), !0) : !1
            );
        case 13:
            return (
                (e = e.nodeType !== 8 ? null : e),
                e !== null
                    ? ((n = Gn !== null ? { id: Vt, overflow: Wt } : null),
                      (t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }),
                      (n = at(18, null, null, 0)),
                      (n.stateNode = e),
                      (n.return = t),
                      (t.child = n),
                      (Je = t),
                      (qe = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Oa(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Ta(t) {
    if (le) {
        var e = qe;
        if (e) {
            var n = e;
            if (!hf(t, e)) {
                if (Oa(t)) throw Error(P(418));
                e = gn(n.nextSibling);
                var i = Je;
                e && hf(t, e) ? mp(i, n) : ((t.flags = (t.flags & -4097) | 2), (le = !1), (Je = t));
            }
        } else {
            if (Oa(t)) throw Error(P(418));
            (t.flags = (t.flags & -4097) | 2), (le = !1), (Je = t);
        }
    }
}
function pf(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    Je = t;
}
function Os(t) {
    if (t !== Je) return !1;
    if (!le) return pf(t), (le = !0), !1;
    var e;
    if (
        ((e = t.tag !== 3) &&
            !(e = t.tag !== 5) &&
            ((e = t.type), (e = e !== 'head' && e !== 'body' && !ba(t.type, t.memoizedProps))),
        e && (e = qe))
    ) {
        if (Oa(t)) throw (vp(), Error(P(418)));
        for (; e; ) mp(t, e), (e = gn(e.nextSibling));
    }
    if ((pf(t), t.tag === 13)) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
            throw Error(P(317));
        e: {
            for (t = t.nextSibling, e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === '/$') {
                        if (e === 0) {
                            qe = gn(t.nextSibling);
                            break e;
                        }
                        e--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
                }
                t = t.nextSibling;
            }
            qe = null;
        }
    } else qe = Je ? gn(t.stateNode.nextSibling) : null;
    return !0;
}
function vp() {
    for (var t = qe; t; ) t = gn(t.nextSibling);
}
function Ii() {
    (qe = Je = null), (le = !1);
}
function Ou(t) {
    xt === null ? (xt = [t]) : xt.push(t);
}
var m1 = Gt.ReactCurrentBatchConfig;
function mt(t, e) {
    if (t && t.defaultProps) {
        (e = fe({}, e)), (t = t.defaultProps);
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e;
    }
    return e;
}
var Mo = En(null),
    Eo = null,
    ki = null,
    Tu = null;
function Lu() {
    Tu = ki = Eo = null;
}
function Du(t) {
    var e = Mo.current;
    se(Mo), (t._currentValue = e);
}
function La(t, e, n) {
    for (; t !== null; ) {
        var i = t.alternate;
        if (
            ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
                : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
            t === n)
        )
            break;
        t = t.return;
    }
}
function Li(t, e) {
    (Eo = t),
        (Tu = ki = null),
        (t = t.dependencies),
        t !== null &&
            t.firstContext !== null &&
            ((t.lanes & e) !== 0 && (Ue = !0), (t.firstContext = null));
}
function ht(t) {
    var e = t._currentValue;
    if (Tu !== t)
        if (((t = { context: t, memoizedValue: e, next: null }), ki === null)) {
            if (Eo === null) throw Error(P(308));
            (ki = t), (Eo.dependencies = { lanes: 0, firstContext: t });
        } else ki = ki.next = t;
    return e;
}
var Wn = null;
function Ru(t) {
    Wn === null ? (Wn = [t]) : Wn.push(t);
}
function yp(t, e, n, i) {
    var r = e.interleaved;
    return (
        r === null ? ((n.next = n), Ru(e)) : ((n.next = r.next), (r.next = n)),
        (e.interleaved = n),
        Kt(t, i)
    );
}
function Kt(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
        (t.childLanes |= e),
            (n = t.alternate),
            n !== null && (n.childLanes |= e),
            (n = t),
            (t = t.return);
    return n.tag === 3 ? n.stateNode : null;
}
var nn = !1;
function Nu(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function xp(t, e) {
    (t = t.updateQueue),
        e.updateQueue === t &&
            (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
            });
}
function Ut(t, e) {
    return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function mn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (U & 2) !== 0)) {
        var r = i.pending;
        return (
            r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)), (i.pending = e), Kt(t, n)
        );
    }
    return (
        (r = i.interleaved),
        r === null ? ((e.next = e), Ru(i)) : ((e.next = r.next), (r.next = e)),
        (i.interleaved = e),
        Kt(t, n)
    );
}
function to(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
        var i = e.lanes;
        (i &= t.pendingLanes), (n |= i), (e.lanes = n), xu(t, n);
    }
}
function gf(t, e) {
    var n = t.updateQueue,
        i = t.alternate;
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
            s === null ? (r = s = e) : (s = s.next = e);
        } else r = s = e;
        (n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: s,
            shared: i.shared,
            effects: i.effects,
        }),
            (t.updateQueue = n);
        return;
    }
    (t = n.lastBaseUpdate),
        t === null ? (n.firstBaseUpdate = e) : (t.next = e),
        (n.lastBaseUpdate = e);
}
function Po(t, e, n, i) {
    var r = t.updateQueue;
    nn = !1;
    var s = r.firstBaseUpdate,
        o = r.lastBaseUpdate,
        l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var a = l,
            u = a.next;
        (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
        var c = t.alternate;
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
                e: {
                    var m = t,
                        v = l;
                    switch (((d = e), (h = n), v.tag)) {
                        case 1:
                            if (((m = v.payload), typeof m == 'function')) {
                                f = m.call(h, f, d);
                                break e;
                            }
                            f = m;
                            break e;
                        case 3:
                            m.flags = (m.flags & -65537) | 128;
                        case 0:
                            if (
                                ((m = v.payload),
                                (d = typeof m == 'function' ? m.call(h, f, d) : m),
                                d == null)
                            )
                                break e;
                            f = fe({}, f, d);
                            break e;
                        case 2:
                            nn = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((t.flags |= 64), (d = r.effects), d === null ? (r.effects = [l]) : d.push(l));
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
            (e = r.shared.interleaved),
            e !== null)
        ) {
            r = e;
            do (o |= r.lane), (r = r.next);
            while (r !== e);
        } else s === null && (r.shared.lanes = 0);
        (qn |= o), (t.lanes = o), (t.memoizedState = f);
    }
}
function mf(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
        for (e = 0; e < t.length; e++) {
            var i = t[e],
                r = i.callback;
            if (r !== null) {
                if (((i.callback = null), (i = n), typeof r != 'function')) throw Error(P(191, r));
                r.call(i);
            }
        }
}
var _p = new yh.Component().refs;
function Da(t, e, n, i) {
    (e = t.memoizedState),
        (n = n(i, e)),
        (n = n == null ? e : fe({}, e, n)),
        (t.memoizedState = n),
        t.lanes === 0 && (t.updateQueue.baseState = n);
}
var el = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? ii(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var i = Fe(),
            r = yn(t),
            s = Ut(i, r);
        (s.payload = e),
            n != null && (s.callback = n),
            (e = mn(t, s, r)),
            e !== null && (St(e, t, r, i), to(e, t, r));
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var i = Fe(),
            r = yn(t),
            s = Ut(i, r);
        (s.tag = 1),
            (s.payload = e),
            n != null && (s.callback = n),
            (e = mn(t, s, r)),
            e !== null && (St(e, t, r, i), to(e, t, r));
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = Fe(),
            i = yn(t),
            r = Ut(n, i);
        (r.tag = 2),
            e != null && (r.callback = e),
            (e = mn(t, r, i)),
            e !== null && (St(e, t, i, n), to(e, t, i));
    },
};
function vf(t, e, n, i, r, s, o) {
    return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == 'function'
            ? t.shouldComponentUpdate(i, s, o)
            : e.prototype && e.prototype.isPureReactComponent
            ? !Wr(n, i) || !Wr(r, s)
            : !0
    );
}
function wp(t, e, n) {
    var i = !1,
        r = kn,
        s = e.contextType;
    return (
        typeof s == 'object' && s !== null
            ? (s = ht(s))
            : ((r = Ke(e) ? Xn : Ae.current),
              (i = e.contextTypes),
              (s = (i = i != null) ? zi(t, r) : kn)),
        (e = new e(n, s)),
        (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
        (e.updater = el),
        (t.stateNode = e),
        (e._reactInternals = t),
        i &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = r),
            (t.__reactInternalMemoizedMaskedChildContext = s)),
        e
    );
}
function yf(t, e, n, i) {
    (t = e.state),
        typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, i),
        typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
            e.UNSAFE_componentWillReceiveProps(n, i),
        e.state !== t && el.enqueueReplaceState(e, e.state, null);
}
function Ra(t, e, n, i) {
    var r = t.stateNode;
    (r.props = n), (r.state = t.memoizedState), (r.refs = _p), Nu(t);
    var s = e.contextType;
    typeof s == 'object' && s !== null
        ? (r.context = ht(s))
        : ((s = Ke(e) ? Xn : Ae.current), (r.context = zi(t, s))),
        (r.state = t.memoizedState),
        (s = e.getDerivedStateFromProps),
        typeof s == 'function' && (Da(t, e, s, n), (r.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == 'function' ||
            typeof r.getSnapshotBeforeUpdate == 'function' ||
            (typeof r.UNSAFE_componentWillMount != 'function' &&
                typeof r.componentWillMount != 'function') ||
            ((e = r.state),
            typeof r.componentWillMount == 'function' && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == 'function' && r.UNSAFE_componentWillMount(),
            e !== r.state && el.enqueueReplaceState(r, r.state, null),
            Po(t, n, r, i),
            (r.state = t.memoizedState)),
        typeof r.componentDidMount == 'function' && (t.flags |= 4194308);
}
function sr(t, e, n) {
    if (((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(P(309));
                var i = n.stateNode;
            }
            if (!i) throw Error(P(147, t));
            var r = i,
                s = '' + t;
            return e !== null &&
                e.ref !== null &&
                typeof e.ref == 'function' &&
                e.ref._stringRef === s
                ? e.ref
                : ((e = function (o) {
                      var l = r.refs;
                      l === _p && (l = r.refs = {}), o === null ? delete l[s] : (l[s] = o);
                  }),
                  (e._stringRef = s),
                  e);
        }
        if (typeof t != 'string') throw Error(P(284));
        if (!n._owner) throw Error(P(290, t));
    }
    return t;
}
function Ts(t, e) {
    throw (
        ((t = Object.prototype.toString.call(e)),
        Error(
            P(
                31,
                t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t
            )
        ))
    );
}
function xf(t) {
    var e = t._init;
    return e(t._payload);
}
function Sp(t) {
    function e(g, p) {
        if (t) {
            var y = g.deletions;
            y === null ? ((g.deletions = [p]), (g.flags |= 16)) : y.push(p);
        }
    }
    function n(g, p) {
        if (!t) return null;
        for (; p !== null; ) e(g, p), (p = p.sibling);
        return null;
    }
    function i(g, p) {
        for (g = new Map(); p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
        return g;
    }
    function r(g, p) {
        return (g = xn(g, p)), (g.index = 0), (g.sibling = null), g;
    }
    function s(g, p, y) {
        return (
            (g.index = y),
            t
                ? ((y = g.alternate),
                  y !== null
                      ? ((y = y.index), y < p ? ((g.flags |= 2), p) : y)
                      : ((g.flags |= 2), p))
                : ((g.flags |= 1048576), p)
        );
    }
    function o(g) {
        return t && g.alternate === null && (g.flags |= 2), g;
    }
    function l(g, p, y, _) {
        return p === null || p.tag !== 6
            ? ((p = Vl(y, g.mode, _)), (p.return = g), p)
            : ((p = r(p, y)), (p.return = g), p);
    }
    function a(g, p, y, _) {
        var w = y.type;
        return w === gi
            ? c(g, p, y.props.children, _, y.key)
            : p !== null &&
              (p.elementType === w ||
                  (typeof w == 'object' && w !== null && w.$$typeof === tn && xf(w) === p.type))
            ? ((_ = r(p, y.props)), (_.ref = sr(g, p, y)), (_.return = g), _)
            : ((_ = lo(y.type, y.key, y.props, null, g.mode, _)),
              (_.ref = sr(g, p, y)),
              (_.return = g),
              _);
    }
    function u(g, p, y, _) {
        return p === null ||
            p.tag !== 4 ||
            p.stateNode.containerInfo !== y.containerInfo ||
            p.stateNode.implementation !== y.implementation
            ? ((p = Wl(y, g.mode, _)), (p.return = g), p)
            : ((p = r(p, y.children || [])), (p.return = g), p);
    }
    function c(g, p, y, _, w) {
        return p === null || p.tag !== 7
            ? ((p = Kn(y, g.mode, _, w)), (p.return = g), p)
            : ((p = r(p, y)), (p.return = g), p);
    }
    function f(g, p, y) {
        if ((typeof p == 'string' && p !== '') || typeof p == 'number')
            return (p = Vl('' + p, g.mode, y)), (p.return = g), p;
        if (typeof p == 'object' && p !== null) {
            switch (p.$$typeof) {
                case xs:
                    return (
                        (y = lo(p.type, p.key, p.props, null, g.mode, y)),
                        (y.ref = sr(g, null, p)),
                        (y.return = g),
                        y
                    );
                case pi:
                    return (p = Wl(p, g.mode, y)), (p.return = g), p;
                case tn:
                    var _ = p._init;
                    return f(g, _(p._payload), y);
            }
            if (pr(p) || er(p)) return (p = Kn(p, g.mode, y, null)), (p.return = g), p;
            Ts(g, p);
        }
        return null;
    }
    function d(g, p, y, _) {
        var w = p !== null ? p.key : null;
        if ((typeof y == 'string' && y !== '') || typeof y == 'number')
            return w !== null ? null : l(g, p, '' + y, _);
        if (typeof y == 'object' && y !== null) {
            switch (y.$$typeof) {
                case xs:
                    return y.key === w ? a(g, p, y, _) : null;
                case pi:
                    return y.key === w ? u(g, p, y, _) : null;
                case tn:
                    return (w = y._init), d(g, p, w(y._payload), _);
            }
            if (pr(y) || er(y)) return w !== null ? null : c(g, p, y, _, null);
            Ts(g, y);
        }
        return null;
    }
    function h(g, p, y, _, w) {
        if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
            return (g = g.get(y) || null), l(p, g, '' + _, w);
        if (typeof _ == 'object' && _ !== null) {
            switch (_.$$typeof) {
                case xs:
                    return (g = g.get(_.key === null ? y : _.key) || null), a(p, g, _, w);
                case pi:
                    return (g = g.get(_.key === null ? y : _.key) || null), u(p, g, _, w);
                case tn:
                    var S = _._init;
                    return h(g, p, y, S(_._payload), w);
            }
            if (pr(_) || er(_)) return (g = g.get(y) || null), c(p, g, _, w, null);
            Ts(p, _);
        }
        return null;
    }
    function m(g, p, y, _) {
        for (
            var w = null, S = null, k = p, C = (p = 0), E = null;
            k !== null && C < y.length;
            C++
        ) {
            k.index > C ? ((E = k), (k = null)) : (E = k.sibling);
            var M = d(g, k, y[C], _);
            if (M === null) {
                k === null && (k = E);
                break;
            }
            t && k && M.alternate === null && e(g, k),
                (p = s(M, p, C)),
                S === null ? (w = M) : (S.sibling = M),
                (S = M),
                (k = E);
        }
        if (C === y.length) return n(g, k), le && Fn(g, C), w;
        if (k === null) {
            for (; C < y.length; C++)
                (k = f(g, y[C], _)),
                    k !== null &&
                        ((p = s(k, p, C)), S === null ? (w = k) : (S.sibling = k), (S = k));
            return le && Fn(g, C), w;
        }
        for (k = i(g, k); C < y.length; C++)
            (E = h(k, g, C, y[C], _)),
                E !== null &&
                    (t && E.alternate !== null && k.delete(E.key === null ? C : E.key),
                    (p = s(E, p, C)),
                    S === null ? (w = E) : (S.sibling = E),
                    (S = E));
        return (
            t &&
                k.forEach(function (R) {
                    return e(g, R);
                }),
            le && Fn(g, C),
            w
        );
    }
    function v(g, p, y, _) {
        var w = er(y);
        if (typeof w != 'function') throw Error(P(150));
        if (((y = w.call(y)), y == null)) throw Error(P(151));
        for (
            var S = (w = null), k = p, C = (p = 0), E = null, M = y.next();
            k !== null && !M.done;
            C++, M = y.next()
        ) {
            k.index > C ? ((E = k), (k = null)) : (E = k.sibling);
            var R = d(g, k, M.value, _);
            if (R === null) {
                k === null && (k = E);
                break;
            }
            t && k && R.alternate === null && e(g, k),
                (p = s(R, p, C)),
                S === null ? (w = R) : (S.sibling = R),
                (S = R),
                (k = E);
        }
        if (M.done) return n(g, k), le && Fn(g, C), w;
        if (k === null) {
            for (; !M.done; C++, M = y.next())
                (M = f(g, M.value, _)),
                    M !== null &&
                        ((p = s(M, p, C)), S === null ? (w = M) : (S.sibling = M), (S = M));
            return le && Fn(g, C), w;
        }
        for (k = i(g, k); !M.done; C++, M = y.next())
            (M = h(k, g, C, M.value, _)),
                M !== null &&
                    (t && M.alternate !== null && k.delete(M.key === null ? C : M.key),
                    (p = s(M, p, C)),
                    S === null ? (w = M) : (S.sibling = M),
                    (S = M));
        return (
            t &&
                k.forEach(function (z) {
                    return e(g, z);
                }),
            le && Fn(g, C),
            w
        );
    }
    function x(g, p, y, _) {
        if (
            (typeof y == 'object' &&
                y !== null &&
                y.type === gi &&
                y.key === null &&
                (y = y.props.children),
            typeof y == 'object' && y !== null)
        ) {
            switch (y.$$typeof) {
                case xs:
                    e: {
                        for (var w = y.key, S = p; S !== null; ) {
                            if (S.key === w) {
                                if (((w = y.type), w === gi)) {
                                    if (S.tag === 7) {
                                        n(g, S.sibling),
                                            (p = r(S, y.props.children)),
                                            (p.return = g),
                                            (g = p);
                                        break e;
                                    }
                                } else if (
                                    S.elementType === w ||
                                    (typeof w == 'object' &&
                                        w !== null &&
                                        w.$$typeof === tn &&
                                        xf(w) === S.type)
                                ) {
                                    n(g, S.sibling),
                                        (p = r(S, y.props)),
                                        (p.ref = sr(g, S, y)),
                                        (p.return = g),
                                        (g = p);
                                    break e;
                                }
                                n(g, S);
                                break;
                            } else e(g, S);
                            S = S.sibling;
                        }
                        y.type === gi
                            ? ((p = Kn(y.props.children, g.mode, _, y.key)),
                              (p.return = g),
                              (g = p))
                            : ((_ = lo(y.type, y.key, y.props, null, g.mode, _)),
                              (_.ref = sr(g, p, y)),
                              (_.return = g),
                              (g = _));
                    }
                    return o(g);
                case pi:
                    e: {
                        for (S = y.key; p !== null; ) {
                            if (p.key === S)
                                if (
                                    p.tag === 4 &&
                                    p.stateNode.containerInfo === y.containerInfo &&
                                    p.stateNode.implementation === y.implementation
                                ) {
                                    n(g, p.sibling),
                                        (p = r(p, y.children || [])),
                                        (p.return = g),
                                        (g = p);
                                    break e;
                                } else {
                                    n(g, p);
                                    break;
                                }
                            else e(g, p);
                            p = p.sibling;
                        }
                        (p = Wl(y, g.mode, _)), (p.return = g), (g = p);
                    }
                    return o(g);
                case tn:
                    return (S = y._init), x(g, p, S(y._payload), _);
            }
            if (pr(y)) return m(g, p, y, _);
            if (er(y)) return v(g, p, y, _);
            Ts(g, y);
        }
        return (typeof y == 'string' && y !== '') || typeof y == 'number'
            ? ((y = '' + y),
              p !== null && p.tag === 6
                  ? (n(g, p.sibling), (p = r(p, y)), (p.return = g), (g = p))
                  : (n(g, p), (p = Vl(y, g.mode, _)), (p.return = g), (g = p)),
              o(g))
            : n(g, p);
    }
    return x;
}
var Fi = Sp(!0),
    kp = Sp(!1),
    us = {},
    At = En(us),
    Kr = En(us),
    Qr = En(us);
function Un(t) {
    if (t === us) throw Error(P(174));
    return t;
}
function Au(t, e) {
    switch ((ne(Qr, e), ne(Kr, t), ne(At, us), (t = e.nodeType), t)) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : fa(null, '');
            break;
        default:
            (t = t === 8 ? e.parentNode : e),
                (e = t.namespaceURI || null),
                (t = t.tagName),
                (e = fa(e, t));
    }
    se(At), ne(At, e);
}
function Hi() {
    se(At), se(Kr), se(Qr);
}
function Cp(t) {
    Un(Qr.current);
    var e = Un(At.current),
        n = fa(e, t.type);
    e !== n && (ne(Kr, t), ne(At, n));
}
function zu(t) {
    Kr.current === t && (se(At), se(Kr));
}
var ae = En(0);
function Oo(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
            )
                return e;
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return null;
            e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
}
var zl = [];
function Iu() {
    for (var t = 0; t < zl.length; t++) zl[t]._workInProgressVersionPrimary = null;
    zl.length = 0;
}
var no = Gt.ReactCurrentDispatcher,
    Il = Gt.ReactCurrentBatchConfig,
    Zn = 0,
    ce = null,
    xe = null,
    Ce = null,
    To = !1,
    Er = !1,
    Xr = 0,
    v1 = 0;
function Le() {
    throw Error(P(321));
}
function Fu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!kt(t[n], e[n])) return !1;
    return !0;
}
function Hu(t, e, n, i, r, s) {
    if (
        ((Zn = s),
        (ce = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (no.current = t === null || t.memoizedState === null ? w1 : S1),
        (t = n(i, r)),
        Er)
    ) {
        s = 0;
        do {
            if (((Er = !1), (Xr = 0), 25 <= s)) throw Error(P(301));
            (s += 1), (Ce = xe = null), (e.updateQueue = null), (no.current = k1), (t = n(i, r));
        } while (Er);
    }
    if (
        ((no.current = Lo),
        (e = xe !== null && xe.next !== null),
        (Zn = 0),
        (Ce = xe = ce = null),
        (To = !1),
        e)
    )
        throw Error(P(300));
    return t;
}
function Bu() {
    var t = Xr !== 0;
    return (Xr = 0), t;
}
function Ot() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ce === null ? (ce.memoizedState = Ce = t) : (Ce = Ce.next = t), Ce;
}
function pt() {
    if (xe === null) {
        var t = ce.alternate;
        t = t !== null ? t.memoizedState : null;
    } else t = xe.next;
    var e = Ce === null ? ce.memoizedState : Ce.next;
    if (e !== null) (Ce = e), (xe = t);
    else {
        if (t === null) throw Error(P(310));
        (xe = t),
            (t = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null,
            }),
            Ce === null ? (ce.memoizedState = Ce = t) : (Ce = Ce.next = t);
    }
    return Ce;
}
function Gr(t, e) {
    return typeof e == 'function' ? e(t) : e;
}
function Fl(t) {
    var e = pt(),
        n = e.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = t;
    var i = xe,
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
            if ((Zn & c) === c)
                a !== null &&
                    (a = a.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (i = u.hasEagerState ? u.eagerState : t(i, u.action));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                a === null ? ((l = a = f), (o = i)) : (a = a.next = f), (ce.lanes |= c), (qn |= c);
            }
            u = u.next;
        } while (u !== null && u !== s);
        a === null ? (o = i) : (a.next = l),
            kt(i, e.memoizedState) || (Ue = !0),
            (e.memoizedState = i),
            (e.baseState = o),
            (e.baseQueue = a),
            (n.lastRenderedState = i);
    }
    if (((t = n.interleaved), t !== null)) {
        r = t;
        do (s = r.lane), (ce.lanes |= s), (qn |= s), (r = r.next);
        while (r !== t);
    } else r === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch];
}
function Hl(t) {
    var e = pt(),
        n = e.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
        r = n.pending,
        s = e.memoizedState;
    if (r !== null) {
        n.pending = null;
        var o = (r = r.next);
        do (s = t(s, o.action)), (o = o.next);
        while (o !== r);
        kt(s, e.memoizedState) || (Ue = !0),
            (e.memoizedState = s),
            e.baseQueue === null && (e.baseState = s),
            (n.lastRenderedState = s);
    }
    return [s, i];
}
function bp() {}
function Mp(t, e) {
    var n = ce,
        i = pt(),
        r = e(),
        s = !kt(i.memoizedState, r);
    if (
        (s && ((i.memoizedState = r), (Ue = !0)),
        (i = i.queue),
        ju(Op.bind(null, n, i, t), [t]),
        i.getSnapshot !== e || s || (Ce !== null && Ce.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), Zr(9, Pp.bind(null, n, i, r, e), void 0, null), Me === null))
            throw Error(P(349));
        (Zn & 30) !== 0 || Ep(n, e, r);
    }
    return r;
}
function Ep(t, e, n) {
    (t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        (e = ce.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }), (ce.updateQueue = e), (e.stores = [t]))
            : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Pp(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), Tp(e) && Lp(t);
}
function Op(t, e, n) {
    return n(function () {
        Tp(e) && Lp(t);
    });
}
function Tp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !kt(t, n);
    } catch {
        return !0;
    }
}
function Lp(t) {
    var e = Kt(t, 1);
    e !== null && St(e, t, 1, -1);
}
function _f(t) {
    var e = Ot();
    return (
        typeof t == 'function' && (t = t()),
        (e.memoizedState = e.baseState = t),
        (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Gr,
            lastRenderedState: t,
        }),
        (e.queue = t),
        (t = t.dispatch = _1.bind(null, ce, t)),
        [e.memoizedState, t]
    );
}
function Zr(t, e, n, i) {
    return (
        (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
        (e = ce.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }),
              (ce.updateQueue = e),
              (e.lastEffect = t.next = t))
            : ((n = e.lastEffect),
              n === null
                  ? (e.lastEffect = t.next = t)
                  : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
        t
    );
}
function Dp() {
    return pt().memoizedState;
}
function io(t, e, n, i) {
    var r = Ot();
    (ce.flags |= t), (r.memoizedState = Zr(1 | e, n, void 0, i === void 0 ? null : i));
}
function tl(t, e, n, i) {
    var r = pt();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (xe !== null) {
        var o = xe.memoizedState;
        if (((s = o.destroy), i !== null && Fu(i, o.deps))) {
            r.memoizedState = Zr(e, n, s, i);
            return;
        }
    }
    (ce.flags |= t), (r.memoizedState = Zr(1 | e, n, s, i));
}
function wf(t, e) {
    return io(8390656, 8, t, e);
}
function ju(t, e) {
    return tl(2048, 8, t, e);
}
function Rp(t, e) {
    return tl(4, 2, t, e);
}
function Np(t, e) {
    return tl(4, 4, t, e);
}
function Ap(t, e) {
    if (typeof e == 'function')
        return (
            (t = t()),
            e(t),
            function () {
                e(null);
            }
        );
    if (e != null)
        return (
            (t = t()),
            (e.current = t),
            function () {
                e.current = null;
            }
        );
}
function zp(t, e, n) {
    return (n = n != null ? n.concat([t]) : null), tl(4, 4, Ap.bind(null, e, t), n);
}
function Vu() {}
function Ip(t, e) {
    var n = pt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Fu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
}
function Fp(t, e) {
    var n = pt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Fu(e, i[1])
        ? i[0]
        : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Hp(t, e, n) {
    return (Zn & 21) === 0
        ? (t.baseState && ((t.baseState = !1), (Ue = !0)), (t.memoizedState = n))
        : (kt(n, e) || ((n = Vh()), (ce.lanes |= n), (qn |= n), (t.baseState = !0)), e);
}
function y1(t, e) {
    var n = q;
    (q = n !== 0 && 4 > n ? n : 4), t(!0);
    var i = Il.transition;
    Il.transition = {};
    try {
        t(!1), e();
    } finally {
        (q = n), (Il.transition = i);
    }
}
function Bp() {
    return pt().memoizedState;
}
function x1(t, e, n) {
    var i = yn(t);
    if (((n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }), jp(t)))
        Vp(e, n);
    else if (((n = yp(t, e, n, i)), n !== null)) {
        var r = Fe();
        St(n, t, i, r), Wp(n, e, i);
    }
}
function _1(t, e, n) {
    var i = yn(t),
        r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (jp(t)) Vp(e, r);
    else {
        var s = t.alternate;
        if (
            t.lanes === 0 &&
            (s === null || s.lanes === 0) &&
            ((s = e.lastRenderedReducer), s !== null)
        )
            try {
                var o = e.lastRenderedState,
                    l = s(o, n);
                if (((r.hasEagerState = !0), (r.eagerState = l), kt(l, o))) {
                    var a = e.interleaved;
                    a === null ? ((r.next = r), Ru(e)) : ((r.next = a.next), (a.next = r)),
                        (e.interleaved = r);
                    return;
                }
            } catch {
            } finally {
            }
        (n = yp(t, e, r, i)), n !== null && ((r = Fe()), St(n, t, i, r), Wp(n, e, i));
    }
}
function jp(t) {
    var e = t.alternate;
    return t === ce || (e !== null && e === ce);
}
function Vp(t, e) {
    Er = To = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
}
function Wp(t, e, n) {
    if ((n & 4194240) !== 0) {
        var i = e.lanes;
        (i &= t.pendingLanes), (n |= i), (e.lanes = n), xu(t, n);
    }
}
var Lo = {
        readContext: ht,
        useCallback: Le,
        useContext: Le,
        useEffect: Le,
        useImperativeHandle: Le,
        useInsertionEffect: Le,
        useLayoutEffect: Le,
        useMemo: Le,
        useReducer: Le,
        useRef: Le,
        useState: Le,
        useDebugValue: Le,
        useDeferredValue: Le,
        useTransition: Le,
        useMutableSource: Le,
        useSyncExternalStore: Le,
        useId: Le,
        unstable_isNewReconciler: !1,
    },
    w1 = {
        readContext: ht,
        useCallback: function (t, e) {
            return (Ot().memoizedState = [t, e === void 0 ? null : e]), t;
        },
        useContext: ht,
        useEffect: wf,
        useImperativeHandle: function (t, e, n) {
            return (n = n != null ? n.concat([t]) : null), io(4194308, 4, Ap.bind(null, e, t), n);
        },
        useLayoutEffect: function (t, e) {
            return io(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
            return io(4, 2, t, e);
        },
        useMemo: function (t, e) {
            var n = Ot();
            return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
        },
        useReducer: function (t, e, n) {
            var i = Ot();
            return (
                (e = n !== void 0 ? n(e) : e),
                (i.memoizedState = i.baseState = e),
                (t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e,
                }),
                (i.queue = t),
                (t = t.dispatch = x1.bind(null, ce, t)),
                [i.memoizedState, t]
            );
        },
        useRef: function (t) {
            var e = Ot();
            return (t = { current: t }), (e.memoizedState = t);
        },
        useState: _f,
        useDebugValue: Vu,
        useDeferredValue: function (t) {
            return (Ot().memoizedState = t);
        },
        useTransition: function () {
            var t = _f(!1),
                e = t[0];
            return (t = y1.bind(null, t[1])), (Ot().memoizedState = t), [e, t];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (t, e, n) {
            var i = ce,
                r = Ot();
            if (le) {
                if (n === void 0) throw Error(P(407));
                n = n();
            } else {
                if (((n = e()), Me === null)) throw Error(P(349));
                (Zn & 30) !== 0 || Ep(i, e, n);
            }
            r.memoizedState = n;
            var s = { value: n, getSnapshot: e };
            return (
                (r.queue = s),
                wf(Op.bind(null, i, s, t), [t]),
                (i.flags |= 2048),
                Zr(9, Pp.bind(null, i, s, n, e), void 0, null),
                n
            );
        },
        useId: function () {
            var t = Ot(),
                e = Me.identifierPrefix;
            if (le) {
                var n = Wt,
                    i = Vt;
                (n = (i & ~(1 << (32 - wt(i) - 1))).toString(32) + n),
                    (e = ':' + e + 'R' + n),
                    (n = Xr++),
                    0 < n && (e += 'H' + n.toString(32)),
                    (e += ':');
            } else (n = v1++), (e = ':' + e + 'r' + n.toString(32) + ':');
            return (t.memoizedState = e);
        },
        unstable_isNewReconciler: !1,
    },
    S1 = {
        readContext: ht,
        useCallback: Ip,
        useContext: ht,
        useEffect: ju,
        useImperativeHandle: zp,
        useInsertionEffect: Rp,
        useLayoutEffect: Np,
        useMemo: Fp,
        useReducer: Fl,
        useRef: Dp,
        useState: function () {
            return Fl(Gr);
        },
        useDebugValue: Vu,
        useDeferredValue: function (t) {
            var e = pt();
            return Hp(e, xe.memoizedState, t);
        },
        useTransition: function () {
            var t = Fl(Gr)[0],
                e = pt().memoizedState;
            return [t, e];
        },
        useMutableSource: bp,
        useSyncExternalStore: Mp,
        useId: Bp,
        unstable_isNewReconciler: !1,
    },
    k1 = {
        readContext: ht,
        useCallback: Ip,
        useContext: ht,
        useEffect: ju,
        useImperativeHandle: zp,
        useInsertionEffect: Rp,
        useLayoutEffect: Np,
        useMemo: Fp,
        useReducer: Hl,
        useRef: Dp,
        useState: function () {
            return Hl(Gr);
        },
        useDebugValue: Vu,
        useDeferredValue: function (t) {
            var e = pt();
            return xe === null ? (e.memoizedState = t) : Hp(e, xe.memoizedState, t);
        },
        useTransition: function () {
            var t = Hl(Gr)[0],
                e = pt().memoizedState;
            return [t, e];
        },
        useMutableSource: bp,
        useSyncExternalStore: Mp,
        useId: Bp,
        unstable_isNewReconciler: !1,
    };
function Bi(t, e) {
    try {
        var n = '',
            i = e;
        do (n += Zm(i)), (i = i.return);
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
    return { value: t, source: e, stack: r, digest: null };
}
function Bl(t, e, n) {
    return { value: t, source: null, stack: n != null ? n : null, digest: e != null ? e : null };
}
function Na(t, e) {
    try {
        console.error(e.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var C1 = typeof WeakMap == 'function' ? WeakMap : Map;
function Up(t, e, n) {
    (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var i = e.value;
    return (
        (n.callback = function () {
            Ro || ((Ro = !0), (Ua = i)), Na(t, e);
        }),
        n
    );
}
function $p(t, e, n) {
    (n = Ut(-1, n)), (n.tag = 3);
    var i = t.type.getDerivedStateFromError;
    if (typeof i == 'function') {
        var r = e.value;
        (n.payload = function () {
            return i(r);
        }),
            (n.callback = function () {
                Na(t, e);
            });
    }
    var s = t.stateNode;
    return (
        s !== null &&
            typeof s.componentDidCatch == 'function' &&
            (n.callback = function () {
                Na(t, e),
                    typeof i != 'function' && (vn === null ? (vn = new Set([this])) : vn.add(this));
                var o = e.stack;
                this.componentDidCatch(e.value, { componentStack: o !== null ? o : '' });
            }),
        n
    );
}
function Sf(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new C1();
        var r = new Set();
        i.set(e, r);
    } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
    r.has(n) || (r.add(n), (t = F1.bind(null, t, e, n)), e.then(t, t));
}
function kf(t) {
    do {
        var e;
        if (
            ((e = t.tag === 13) &&
                ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
            e)
        )
            return t;
        t = t.return;
    } while (t !== null);
    return null;
}
function Cf(t, e, n, i, r) {
    return (t.mode & 1) === 0
        ? (t === e
              ? (t.flags |= 65536)
              : ((t.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((e = Ut(-1, 1)), (e.tag = 2), mn(n, e, 1))),
                (n.lanes |= 1)),
          t)
        : ((t.flags |= 65536), (t.lanes = r), t);
}
var b1 = Gt.ReactCurrentOwner,
    Ue = !1;
function Ie(t, e, n, i) {
    e.child = t === null ? kp(e, null, n, i) : Fi(e, t.child, n, i);
}
function bf(t, e, n, i, r) {
    n = n.render;
    var s = e.ref;
    return (
        Li(e, r),
        (i = Hu(t, e, n, i, s, r)),
        (n = Bu()),
        t !== null && !Ue
            ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), Qt(t, e, r))
            : (le && n && Eu(e), (e.flags |= 1), Ie(t, e, i, r), e.child)
    );
}
function Mf(t, e, n, i, r) {
    if (t === null) {
        var s = n.type;
        return typeof s == 'function' &&
            !Gu(s) &&
            s.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((e.tag = 15), (e.type = s), Yp(t, e, s, i, r))
            : ((t = lo(n.type, null, i, e, e.mode, r)),
              (t.ref = e.ref),
              (t.return = e),
              (e.child = t));
    }
    if (((s = t.child), (t.lanes & r) === 0)) {
        var o = s.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : Wr), n(o, i) && t.ref === e.ref))
            return Qt(t, e, r);
    }
    return (e.flags |= 1), (t = xn(s, i)), (t.ref = e.ref), (t.return = e), (e.child = t);
}
function Yp(t, e, n, i, r) {
    if (t !== null) {
        var s = t.memoizedProps;
        if (Wr(s, i) && t.ref === e.ref)
            if (((Ue = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0))
                (t.flags & 131072) !== 0 && (Ue = !0);
            else return (e.lanes = t.lanes), Qt(t, e, r);
    }
    return Aa(t, e, n, i, r);
}
function Kp(t, e, n) {
    var i = e.pendingProps,
        r = i.children,
        s = t !== null ? t.memoizedState : null;
    if (i.mode === 'hidden')
        if ((e.mode & 1) === 0)
            (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                ne(bi, Ge),
                (Ge |= n);
        else {
            if ((n & 1073741824) === 0)
                return (
                    (t = s !== null ? s.baseLanes | n : n),
                    (e.lanes = e.childLanes = 1073741824),
                    (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
                    (e.updateQueue = null),
                    ne(bi, Ge),
                    (Ge |= t),
                    null
                );
            (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (i = s !== null ? s.baseLanes : n),
                ne(bi, Ge),
                (Ge |= i);
        }
    else
        s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n),
            ne(bi, Ge),
            (Ge |= i);
    return Ie(t, e, r, n), e.child;
}
function Qp(t, e) {
    var n = e.ref;
    ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
        ((e.flags |= 512), (e.flags |= 2097152));
}
function Aa(t, e, n, i, r) {
    var s = Ke(n) ? Xn : Ae.current;
    return (
        (s = zi(e, s)),
        Li(e, r),
        (n = Hu(t, e, n, i, s, r)),
        (i = Bu()),
        t !== null && !Ue
            ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), Qt(t, e, r))
            : (le && i && Eu(e), (e.flags |= 1), Ie(t, e, n, r), e.child)
    );
}
function Ef(t, e, n, i, r) {
    if (Ke(n)) {
        var s = !0;
        ko(e);
    } else s = !1;
    if ((Li(e, r), e.stateNode === null)) ro(t, e), wp(e, n, i), Ra(e, n, i, r), (i = !0);
    else if (t === null) {
        var o = e.stateNode,
            l = e.memoizedProps;
        o.props = l;
        var a = o.context,
            u = n.contextType;
        typeof u == 'object' && u !== null
            ? (u = ht(u))
            : ((u = Ke(n) ? Xn : Ae.current), (u = zi(e, u)));
        var c = n.getDerivedStateFromProps,
            f = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
        f ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((l !== i || a !== u) && yf(e, o, i, u)),
            (nn = !1);
        var d = e.memoizedState;
        (o.state = d),
            Po(e, i, o, r),
            (a = e.memoizedState),
            l !== i || d !== a || Ye.current || nn
                ? (typeof c == 'function' && (Da(e, n, c, i), (a = e.memoizedState)),
                  (l = nn || vf(e, n, l, i, d, a, u))
                      ? (f ||
                            (typeof o.UNSAFE_componentWillMount != 'function' &&
                                typeof o.componentWillMount != 'function') ||
                            (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == 'function' &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == 'function' && (e.flags |= 4194308))
                      : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308),
                        (e.memoizedProps = i),
                        (e.memoizedState = a)),
                  (o.props = i),
                  (o.state = a),
                  (o.context = u),
                  (i = l))
                : (typeof o.componentDidMount == 'function' && (e.flags |= 4194308), (i = !1));
    } else {
        (o = e.stateNode),
            xp(t, e),
            (l = e.memoizedProps),
            (u = e.type === e.elementType ? l : mt(e.type, l)),
            (o.props = u),
            (f = e.pendingProps),
            (d = o.context),
            (a = n.contextType),
            typeof a == 'object' && a !== null
                ? (a = ht(a))
                : ((a = Ke(n) ? Xn : Ae.current), (a = zi(e, a)));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((l !== f || d !== a) && yf(e, o, i, a)),
            (nn = !1),
            (d = e.memoizedState),
            (o.state = d),
            Po(e, i, o, r);
        var m = e.memoizedState;
        l !== f || d !== m || Ye.current || nn
            ? (typeof h == 'function' && (Da(e, n, h, i), (m = e.memoizedState)),
              (u = nn || vf(e, n, u, i, d, m, a) || !1)
                  ? (c ||
                        (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                            typeof o.componentWillUpdate != 'function') ||
                        (typeof o.componentWillUpdate == 'function' &&
                            o.componentWillUpdate(i, m, a),
                        typeof o.UNSAFE_componentWillUpdate == 'function' &&
                            o.UNSAFE_componentWillUpdate(i, m, a)),
                    typeof o.componentDidUpdate == 'function' && (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
                  : (typeof o.componentDidUpdate != 'function' ||
                        (l === t.memoizedProps && d === t.memoizedState) ||
                        (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != 'function' ||
                        (l === t.memoizedProps && d === t.memoizedState) ||
                        (e.flags |= 1024),
                    (e.memoizedProps = i),
                    (e.memoizedState = m)),
              (o.props = i),
              (o.state = m),
              (o.context = a),
              (i = u))
            : (typeof o.componentDidUpdate != 'function' ||
                  (l === t.memoizedProps && d === t.memoizedState) ||
                  (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                  (l === t.memoizedProps && d === t.memoizedState) ||
                  (e.flags |= 1024),
              (i = !1));
    }
    return za(t, e, n, i, s, r);
}
function za(t, e, n, i, r, s) {
    Qp(t, e);
    var o = (e.flags & 128) !== 0;
    if (!i && !o) return r && df(e, n, !1), Qt(t, e, s);
    (i = e.stateNode), (b1.current = e);
    var l = o && typeof n.getDerivedStateFromError != 'function' ? null : i.render();
    return (
        (e.flags |= 1),
        t !== null && o
            ? ((e.child = Fi(e, t.child, null, s)), (e.child = Fi(e, null, l, s)))
            : Ie(t, e, l, s),
        (e.memoizedState = i.state),
        r && df(e, n, !0),
        e.child
    );
}
function Xp(t) {
    var e = t.stateNode;
    e.pendingContext
        ? ff(t, e.pendingContext, e.pendingContext !== e.context)
        : e.context && ff(t, e.context, !1),
        Au(t, e.containerInfo);
}
function Pf(t, e, n, i, r) {
    return Ii(), Ou(r), (e.flags |= 256), Ie(t, e, n, i), e.child;
}
var Ia = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fa(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
}
function Gp(t, e, n) {
    var i = e.pendingProps,
        r = ae.current,
        s = !1,
        o = (e.flags & 128) !== 0,
        l;
    if (
        ((l = o) || (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
        l ? ((s = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (r |= 1),
        ne(ae, r & 1),
        t === null)
    )
        return (
            Ta(e),
            (t = e.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null)
                ? ((e.mode & 1) === 0
                      ? (e.lanes = 1)
                      : t.data === '$!'
                      ? (e.lanes = 8)
                      : (e.lanes = 1073741824),
                  null)
                : ((o = i.children),
                  (t = i.fallback),
                  s
                      ? ((i = e.mode),
                        (s = e.child),
                        (o = { mode: 'hidden', children: o }),
                        (i & 1) === 0 && s !== null
                            ? ((s.childLanes = 0), (s.pendingProps = o))
                            : (s = rl(o, i, 0, null)),
                        (t = Kn(t, i, n, null)),
                        (s.return = e),
                        (t.return = e),
                        (s.sibling = t),
                        (e.child = s),
                        (e.child.memoizedState = Fa(n)),
                        (e.memoizedState = Ia),
                        t)
                      : Wu(e, o))
        );
    if (((r = t.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
        return M1(t, e, o, i, l, r, n);
    if (s) {
        (s = i.fallback), (o = e.mode), (r = t.child), (l = r.sibling);
        var a = { mode: 'hidden', children: i.children };
        return (
            (o & 1) === 0 && e.child !== r
                ? ((i = e.child), (i.childLanes = 0), (i.pendingProps = a), (e.deletions = null))
                : ((i = xn(r, a)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
            l !== null ? (s = xn(l, s)) : ((s = Kn(s, o, n, null)), (s.flags |= 2)),
            (s.return = e),
            (i.return = e),
            (i.sibling = s),
            (e.child = i),
            (i = s),
            (s = e.child),
            (o = t.child.memoizedState),
            (o =
                o === null
                    ? Fa(n)
                    : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
            (s.memoizedState = o),
            (s.childLanes = t.childLanes & ~n),
            (e.memoizedState = Ia),
            i
        );
    }
    return (
        (s = t.child),
        (t = s.sibling),
        (i = xn(s, { mode: 'visible', children: i.children })),
        (e.mode & 1) === 0 && (i.lanes = n),
        (i.return = e),
        (i.sibling = null),
        t !== null &&
            ((n = e.deletions), n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
        (e.child = i),
        (e.memoizedState = null),
        i
    );
}
function Wu(t, e) {
    return (
        (e = rl({ mode: 'visible', children: e }, t.mode, 0, null)), (e.return = t), (t.child = e)
    );
}
function Ls(t, e, n, i) {
    return (
        i !== null && Ou(i),
        Fi(e, t.child, null, n),
        (t = Wu(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
    );
}
function M1(t, e, n, i, r, s, o) {
    if (n)
        return e.flags & 256
            ? ((e.flags &= -257), (i = Bl(Error(P(422)))), Ls(t, e, o, i))
            : e.memoizedState !== null
            ? ((e.child = t.child), (e.flags |= 128), null)
            : ((s = i.fallback),
              (r = e.mode),
              (i = rl({ mode: 'visible', children: i.children }, r, 0, null)),
              (s = Kn(s, r, o, null)),
              (s.flags |= 2),
              (i.return = e),
              (s.return = e),
              (i.sibling = s),
              (e.child = i),
              (e.mode & 1) !== 0 && Fi(e, t.child, null, o),
              (e.child.memoizedState = Fa(o)),
              (e.memoizedState = Ia),
              s);
    if ((e.mode & 1) === 0) return Ls(t, e, o, null);
    if (r.data === '$!') {
        if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
        return (i = l), (s = Error(P(419))), (i = Bl(s, i, void 0)), Ls(t, e, o, i);
    }
    if (((l = (o & t.childLanes) !== 0), Ue || l)) {
        if (((i = Me), i !== null)) {
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
                r !== 0 && r !== s.retryLane && ((s.retryLane = r), Kt(t, r), St(i, t, r, -1));
        }
        return Xu(), (i = Bl(Error(P(421)))), Ls(t, e, o, i);
    }
    return r.data === '$?'
        ? ((e.flags |= 128), (e.child = t.child), (e = H1.bind(null, t)), (r._reactRetry = e), null)
        : ((t = s.treeContext),
          (qe = gn(r.nextSibling)),
          (Je = e),
          (le = !0),
          (xt = null),
          t !== null &&
              ((ot[lt++] = Vt),
              (ot[lt++] = Wt),
              (ot[lt++] = Gn),
              (Vt = t.id),
              (Wt = t.overflow),
              (Gn = e)),
          (e = Wu(e, i.children)),
          (e.flags |= 4096),
          e);
}
function Of(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), La(t.return, e, n);
}
function jl(t, e, n, i, r) {
    var s = t.memoizedState;
    s === null
        ? (t.memoizedState = {
              isBackwards: e,
              rendering: null,
              renderingStartTime: 0,
              last: i,
              tail: n,
              tailMode: r,
          })
        : ((s.isBackwards = e),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = i),
          (s.tail = n),
          (s.tailMode = r));
}
function Zp(t, e, n) {
    var i = e.pendingProps,
        r = i.revealOrder,
        s = i.tail;
    if ((Ie(t, e, i.children, n), (i = ae.current), (i & 2) !== 0))
        (i = (i & 1) | 2), (e.flags |= 128);
    else {
        if (t !== null && (t.flags & 128) !== 0)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13) t.memoizedState !== null && Of(t, n, e);
                else if (t.tag === 19) Of(t, n, e);
                else if (t.child !== null) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) break e;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        i &= 1;
    }
    if ((ne(ae, i), (e.mode & 1) === 0)) e.memoizedState = null;
    else
        switch (r) {
            case 'forwards':
                for (n = e.child, r = null; n !== null; )
                    (t = n.alternate), t !== null && Oo(t) === null && (r = n), (n = n.sibling);
                (n = r),
                    n === null
                        ? ((r = e.child), (e.child = null))
                        : ((r = n.sibling), (n.sibling = null)),
                    jl(e, !1, r, n, s);
                break;
            case 'backwards':
                for (n = null, r = e.child, e.child = null; r !== null; ) {
                    if (((t = r.alternate), t !== null && Oo(t) === null)) {
                        e.child = r;
                        break;
                    }
                    (t = r.sibling), (r.sibling = n), (n = r), (r = t);
                }
                jl(e, !0, n, null, s);
                break;
            case 'together':
                jl(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
    return e.child;
}
function ro(t, e) {
    (e.mode & 1) === 0 &&
        t !== null &&
        ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Qt(t, e, n) {
    if (
        (t !== null && (e.dependencies = t.dependencies), (qn |= e.lanes), (n & e.childLanes) === 0)
    )
        return null;
    if (t !== null && e.child !== t.child) throw Error(P(153));
    if (e.child !== null) {
        for (
            t = e.child, n = xn(t, t.pendingProps), e.child = n, n.return = e;
            t.sibling !== null;

        )
            (t = t.sibling), (n = n.sibling = xn(t, t.pendingProps)), (n.return = e);
        n.sibling = null;
    }
    return e.child;
}
function E1(t, e, n) {
    switch (e.tag) {
        case 3:
            Xp(e), Ii();
            break;
        case 5:
            Cp(e);
            break;
        case 1:
            Ke(e.type) && ko(e);
            break;
        case 4:
            Au(e, e.stateNode.containerInfo);
            break;
        case 10:
            var i = e.type._context,
                r = e.memoizedProps.value;
            ne(Mo, i._currentValue), (i._currentValue = r);
            break;
        case 13:
            if (((i = e.memoizedState), i !== null))
                return i.dehydrated !== null
                    ? (ne(ae, ae.current & 1), (e.flags |= 128), null)
                    : (n & e.child.childLanes) !== 0
                    ? Gp(t, e, n)
                    : (ne(ae, ae.current & 1), (t = Qt(t, e, n)), t !== null ? t.sibling : null);
            ne(ae, ae.current & 1);
            break;
        case 19:
            if (((i = (n & e.childLanes) !== 0), (t.flags & 128) !== 0)) {
                if (i) return Zp(t, e, n);
                e.flags |= 128;
            }
            if (
                ((r = e.memoizedState),
                r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
                ne(ae, ae.current),
                i)
            )
                break;
            return null;
        case 22:
        case 23:
            return (e.lanes = 0), Kp(t, e, n);
    }
    return Qt(t, e, n);
}
var qp, Ha, Jp, eg;
qp = function (t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Ha = function () {};
Jp = function (t, e, n, i) {
    var r = t.memoizedProps;
    if (r !== i) {
        (t = e.stateNode), Un(At.current);
        var s = null;
        switch (n) {
            case 'input':
                (r = la(t, r)), (i = la(t, i)), (s = []);
                break;
            case 'select':
                (r = fe({}, r, { value: void 0 })), (i = fe({}, i, { value: void 0 })), (s = []);
                break;
            case 'textarea':
                (r = ca(t, r)), (i = ca(t, i)), (s = []);
                break;
            default:
                typeof r.onClick != 'function' &&
                    typeof i.onClick == 'function' &&
                    (t.onclick = wo);
        }
        da(n, i);
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
                        (zr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
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
                          (zr.hasOwnProperty(u)
                              ? (a != null && u === 'onScroll' && ie('scroll', t),
                                s || l === a || (s = []))
                              : (s = s || []).push(u, a));
        }
        n && (s = s || []).push('style', n);
        var u = s;
        (e.updateQueue = u) && (e.flags |= 4);
    }
};
eg = function (t, e, n, i) {
    n !== i && (e.flags |= 4);
};
function or(t, e) {
    if (!le)
        switch (t.tailMode) {
            case 'hidden':
                e = t.tail;
                for (var n = null; e !== null; ) e.alternate !== null && (n = e), (e = e.sibling);
                n === null ? (t.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = t.tail;
                for (var i = null; n !== null; ) n.alternate !== null && (i = n), (n = n.sibling);
                i === null
                    ? e || t.tail === null
                        ? (t.tail = null)
                        : (t.tail.sibling = null)
                    : (i.sibling = null);
        }
}
function De(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        i = 0;
    if (e)
        for (var r = t.child; r !== null; )
            (n |= r.lanes | r.childLanes),
                (i |= r.subtreeFlags & 14680064),
                (i |= r.flags & 14680064),
                (r.return = t),
                (r = r.sibling);
    else
        for (r = t.child; r !== null; )
            (n |= r.lanes | r.childLanes),
                (i |= r.subtreeFlags),
                (i |= r.flags),
                (r.return = t),
                (r = r.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function P1(t, e, n) {
    var i = e.pendingProps;
    switch ((Pu(e), e.tag)) {
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
            return De(e), null;
        case 1:
            return Ke(e.type) && So(), De(e), null;
        case 3:
            return (
                (i = e.stateNode),
                Hi(),
                se(Ye),
                se(Ae),
                Iu(),
                i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
                (t === null || t.child === null) &&
                    (Os(e)
                        ? (e.flags |= 4)
                        : t === null ||
                          (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                          ((e.flags |= 1024), xt !== null && (Ka(xt), (xt = null)))),
                Ha(t, e),
                De(e),
                null
            );
        case 5:
            zu(e);
            var r = Un(Qr.current);
            if (((n = e.type), t !== null && e.stateNode != null))
                Jp(t, e, n, i, r), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
            else {
                if (!i) {
                    if (e.stateNode === null) throw Error(P(166));
                    return De(e), null;
                }
                if (((t = Un(At.current)), Os(e))) {
                    (i = e.stateNode), (n = e.type);
                    var s = e.memoizedProps;
                    switch (((i[Dt] = e), (i[Yr] = s), (t = (e.mode & 1) !== 0), n)) {
                        case 'dialog':
                            ie('cancel', i), ie('close', i);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            ie('load', i);
                            break;
                        case 'video':
                        case 'audio':
                            for (r = 0; r < mr.length; r++) ie(mr[r], i);
                            break;
                        case 'source':
                            ie('error', i);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            ie('error', i), ie('load', i);
                            break;
                        case 'details':
                            ie('toggle', i);
                            break;
                        case 'input':
                            Ic(i, s), ie('invalid', i);
                            break;
                        case 'select':
                            (i._wrapperState = { wasMultiple: !!s.multiple }), ie('invalid', i);
                            break;
                        case 'textarea':
                            Hc(i, s), ie('invalid', i);
                    }
                    da(n, s), (r = null);
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === 'children'
                                ? typeof l == 'string'
                                    ? i.textContent !== l &&
                                      (s.suppressHydrationWarning !== !0 && Ps(i.textContent, l, t),
                                      (r = ['children', l]))
                                    : typeof l == 'number' &&
                                      i.textContent !== '' + l &&
                                      (s.suppressHydrationWarning !== !0 && Ps(i.textContent, l, t),
                                      (r = ['children', '' + l]))
                                : zr.hasOwnProperty(o) &&
                                  l != null &&
                                  o === 'onScroll' &&
                                  ie('scroll', i);
                        }
                    switch (n) {
                        case 'input':
                            _s(i), Fc(i, s, !0);
                            break;
                        case 'textarea':
                            _s(i), Bc(i);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof s.onClick == 'function' && (i.onclick = wo);
                    }
                    (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
                } else {
                    (o = r.nodeType === 9 ? r : r.ownerDocument),
                        t === 'http://www.w3.org/1999/xhtml' && (t = Eh(n)),
                        t === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((t = o.createElement('div')),
                                  (t.innerHTML = '<script></script>'),
                                  (t = t.removeChild(t.firstChild)))
                                : typeof i.is == 'string'
                                ? (t = o.createElement(n, { is: i.is }))
                                : ((t = o.createElement(n)),
                                  n === 'select' &&
                                      ((o = t),
                                      i.multiple ? (o.multiple = !0) : i.size && (o.size = i.size)))
                            : (t = o.createElementNS(t, n)),
                        (t[Dt] = e),
                        (t[Yr] = i),
                        qp(t, e, !1, !1),
                        (e.stateNode = t);
                    e: {
                        switch (((o = ha(n, i)), n)) {
                            case 'dialog':
                                ie('cancel', t), ie('close', t), (r = i);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                ie('load', t), (r = i);
                                break;
                            case 'video':
                            case 'audio':
                                for (r = 0; r < mr.length; r++) ie(mr[r], t);
                                r = i;
                                break;
                            case 'source':
                                ie('error', t), (r = i);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                ie('error', t), ie('load', t), (r = i);
                                break;
                            case 'details':
                                ie('toggle', t), (r = i);
                                break;
                            case 'input':
                                Ic(t, i), (r = la(t, i)), ie('invalid', t);
                                break;
                            case 'option':
                                r = i;
                                break;
                            case 'select':
                                (t._wrapperState = { wasMultiple: !!i.multiple }),
                                    (r = fe({}, i, { value: void 0 })),
                                    ie('invalid', t);
                                break;
                            case 'textarea':
                                Hc(t, i), (r = ca(t, i)), ie('invalid', t);
                                break;
                            default:
                                r = i;
                        }
                        da(n, r), (l = r);
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var a = l[s];
                                s === 'style'
                                    ? Th(t, a)
                                    : s === 'dangerouslySetInnerHTML'
                                    ? ((a = a ? a.__html : void 0), a != null && Ph(t, a))
                                    : s === 'children'
                                    ? typeof a == 'string'
                                        ? (n !== 'textarea' || a !== '') && Ir(t, a)
                                        : typeof a == 'number' && Ir(t, '' + a)
                                    : s !== 'suppressContentEditableWarning' &&
                                      s !== 'suppressHydrationWarning' &&
                                      s !== 'autoFocus' &&
                                      (zr.hasOwnProperty(s)
                                          ? a != null && s === 'onScroll' && ie('scroll', t)
                                          : a != null && hu(t, s, a, o));
                            }
                        switch (n) {
                            case 'input':
                                _s(t), Fc(t, i, !1);
                                break;
                            case 'textarea':
                                _s(t), Bc(t);
                                break;
                            case 'option':
                                i.value != null && t.setAttribute('value', '' + Sn(i.value));
                                break;
                            case 'select':
                                (t.multiple = !!i.multiple),
                                    (s = i.value),
                                    s != null
                                        ? Ei(t, !!i.multiple, s, !1)
                                        : i.defaultValue != null &&
                                          Ei(t, !!i.multiple, i.defaultValue, !0);
                                break;
                            default:
                                typeof r.onClick == 'function' && (t.onclick = wo);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                i = !!i.autoFocus;
                                break e;
                            case 'img':
                                i = !0;
                                break e;
                            default:
                                i = !1;
                        }
                    }
                    i && (e.flags |= 4);
                }
                e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
            }
            return De(e), null;
        case 6:
            if (t && e.stateNode != null) eg(t, e, t.memoizedProps, i);
            else {
                if (typeof i != 'string' && e.stateNode === null) throw Error(P(166));
                if (((n = Un(Qr.current)), Un(At.current), Os(e))) {
                    if (
                        ((i = e.stateNode),
                        (n = e.memoizedProps),
                        (i[Dt] = e),
                        (s = i.nodeValue !== n) && ((t = Je), t !== null))
                    )
                        switch (t.tag) {
                            case 3:
                                Ps(i.nodeValue, n, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Ps(i.nodeValue, n, (t.mode & 1) !== 0);
                        }
                    s && (e.flags |= 4);
                } else
                    (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
                        (i[Dt] = e),
                        (e.stateNode = i);
            }
            return De(e), null;
        case 13:
            if (
                (se(ae),
                (i = e.memoizedState),
                t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
            ) {
                if (le && qe !== null && (e.mode & 1) !== 0 && (e.flags & 128) === 0)
                    vp(), Ii(), (e.flags |= 98560), (s = !1);
                else if (((s = Os(e)), i !== null && i.dehydrated !== null)) {
                    if (t === null) {
                        if (!s) throw Error(P(318));
                        if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                            throw Error(P(317));
                        s[Dt] = e;
                    } else Ii(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4);
                    De(e), (s = !1);
                } else xt !== null && (Ka(xt), (xt = null)), (s = !0);
                if (!s) return e.flags & 65536 ? e : null;
            }
            return (e.flags & 128) !== 0
                ? ((e.lanes = n), e)
                : ((i = i !== null),
                  i !== (t !== null && t.memoizedState !== null) &&
                      i &&
                      ((e.child.flags |= 8192),
                      (e.mode & 1) !== 0 &&
                          (t === null || (ae.current & 1) !== 0 ? _e === 0 && (_e = 3) : Xu())),
                  e.updateQueue !== null && (e.flags |= 4),
                  De(e),
                  null);
        case 4:
            return Hi(), Ha(t, e), t === null && Ur(e.stateNode.containerInfo), De(e), null;
        case 10:
            return Du(e.type._context), De(e), null;
        case 17:
            return Ke(e.type) && So(), De(e), null;
        case 19:
            if ((se(ae), (s = e.memoizedState), s === null)) return De(e), null;
            if (((i = (e.flags & 128) !== 0), (o = s.rendering), o === null))
                if (i) or(s, !1);
                else {
                    if (_e !== 0 || (t !== null && (t.flags & 128) !== 0))
                        for (t = e.child; t !== null; ) {
                            if (((o = Oo(t)), o !== null)) {
                                for (
                                    e.flags |= 128,
                                        or(s, !1),
                                        i = o.updateQueue,
                                        i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                                        e.subtreeFlags = 0,
                                        i = n,
                                        n = e.child;
                                    n !== null;

                                )
                                    (s = n),
                                        (t = i),
                                        (s.flags &= 14680066),
                                        (o = s.alternate),
                                        o === null
                                            ? ((s.childLanes = 0),
                                              (s.lanes = t),
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
                                              (t = o.dependencies),
                                              (s.dependencies =
                                                  t === null
                                                      ? null
                                                      : {
                                                            lanes: t.lanes,
                                                            firstContext: t.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return ne(ae, (ae.current & 1) | 2), e.child;
                            }
                            t = t.sibling;
                        }
                    s.tail !== null &&
                        ge() > ji &&
                        ((e.flags |= 128), (i = !0), or(s, !1), (e.lanes = 4194304));
                }
            else {
                if (!i)
                    if (((t = Oo(o)), t !== null)) {
                        if (
                            ((e.flags |= 128),
                            (i = !0),
                            (n = t.updateQueue),
                            n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                            or(s, !0),
                            s.tail === null && s.tailMode === 'hidden' && !o.alternate && !le)
                        )
                            return De(e), null;
                    } else
                        2 * ge() - s.renderingStartTime > ji &&
                            n !== 1073741824 &&
                            ((e.flags |= 128), (i = !0), or(s, !1), (e.lanes = 4194304));
                s.isBackwards
                    ? ((o.sibling = e.child), (e.child = o))
                    : ((n = s.last), n !== null ? (n.sibling = o) : (e.child = o), (s.last = o));
            }
            return s.tail !== null
                ? ((e = s.tail),
                  (s.rendering = e),
                  (s.tail = e.sibling),
                  (s.renderingStartTime = ge()),
                  (e.sibling = null),
                  (n = ae.current),
                  ne(ae, i ? (n & 1) | 2 : n & 1),
                  e)
                : (De(e), null);
        case 22:
        case 23:
            return (
                Qu(),
                (i = e.memoizedState !== null),
                t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
                i && (e.mode & 1) !== 0
                    ? (Ge & 1073741824) !== 0 && (De(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                    : De(e),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(P(156, e.tag));
}
function O1(t, e) {
    switch ((Pu(e), e.tag)) {
        case 1:
            return (
                Ke(e.type) && So(),
                (t = e.flags),
                t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 3:
            return (
                Hi(),
                se(Ye),
                se(Ae),
                Iu(),
                (t = e.flags),
                (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 5:
            return zu(e), null;
        case 13:
            if ((se(ae), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
                if (e.alternate === null) throw Error(P(340));
                Ii();
            }
            return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
        case 19:
            return se(ae), null;
        case 4:
            return Hi(), null;
        case 10:
            return Du(e.type._context), null;
        case 22:
        case 23:
            return Qu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Ds = !1,
    Ne = !1,
    T1 = typeof WeakSet == 'function' ? WeakSet : Set,
    L = null;
function Ci(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (i) {
                he(t, e, i);
            }
        else n.current = null;
}
function Ba(t, e, n) {
    try {
        n();
    } catch (i) {
        he(t, e, i);
    }
}
var Tf = !1;
function L1(t, e) {
    if (((ka = yo), (t = rp()), Mu(t))) {
        if ('selectionStart' in t) var n = { start: t.selectionStart, end: t.selectionEnd };
        else
            e: {
                n = ((n = t.ownerDocument) && n.defaultView) || window;
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
                        break e;
                    }
                    var o = 0,
                        l = -1,
                        a = -1,
                        u = 0,
                        c = 0,
                        f = t,
                        d = null;
                    t: for (;;) {
                        for (
                            var h;
                            f !== n || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                                f !== s || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                                f.nodeType === 3 && (o += f.nodeValue.length),
                                (h = f.firstChild) !== null;

                        )
                            (d = f), (f = h);
                        for (;;) {
                            if (f === t) break t;
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
    for (Ca = { focusedElem: t, selectionRange: n }, yo = !1, L = e; L !== null; )
        if (((e = L), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
            (t.return = e), (L = t);
        else
            for (; L !== null; ) {
                e = L;
                try {
                    var m = e.alternate;
                    if ((e.flags & 1024) !== 0)
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (m !== null) {
                                    var v = m.memoizedProps,
                                        x = m.memoizedState,
                                        g = e.stateNode,
                                        p = g.getSnapshotBeforeUpdate(
                                            e.elementType === e.type ? v : mt(e.type, v),
                                            x
                                        );
                                    g.__reactInternalSnapshotBeforeUpdate = p;
                                }
                                break;
                            case 3:
                                var y = e.stateNode.containerInfo;
                                y.nodeType === 1
                                    ? (y.textContent = '')
                                    : y.nodeType === 9 &&
                                      y.documentElement &&
                                      y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(P(163));
                        }
                } catch (_) {
                    he(e, e.return, _);
                }
                if (((t = e.sibling), t !== null)) {
                    (t.return = e.return), (L = t);
                    break;
                }
                L = e.return;
            }
    return (m = Tf), (Tf = !1), m;
}
function Pr(t, e, n) {
    var i = e.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
        var r = (i = i.next);
        do {
            if ((r.tag & t) === t) {
                var s = r.destroy;
                (r.destroy = void 0), s !== void 0 && Ba(e, n, s);
            }
            r = r.next;
        } while (r !== i);
    }
}
function nl(t, e) {
    if (((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)) {
        var n = (e = e.next);
        do {
            if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i();
            }
            n = n.next;
        } while (n !== e);
    }
}
function ja(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n;
        }
        typeof e == 'function' ? e(t) : (e.current = t);
    }
}
function tg(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), tg(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 &&
            ((e = t.stateNode),
            e !== null && (delete e[Dt], delete e[Yr], delete e[Ea], delete e[h1], delete e[p1])),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
}
function ng(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Lf(t) {
    e: for (;;) {
        for (; t.sibling === null; ) {
            if (t.return === null || ng(t.return)) return null;
            t = t.return;
        }
        for (
            t.sibling.return = t.return, t = t.sibling;
            t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

        ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            (t.child.return = t), (t = t.child);
        }
        if (!(t.flags & 2)) return t.stateNode;
    }
}
function Va(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        (t = t.stateNode),
            e
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(t, e)
                    : n.insertBefore(t, e)
                : (n.nodeType === 8
                      ? ((e = n.parentNode), e.insertBefore(t, n))
                      : ((e = n), e.appendChild(t)),
                  (n = n._reactRootContainer),
                  n != null || e.onclick !== null || (e.onclick = wo));
    else if (i !== 4 && ((t = t.child), t !== null))
        for (Va(t, e, n), t = t.sibling; t !== null; ) Va(t, e, n), (t = t.sibling);
}
function Wa(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && ((t = t.child), t !== null))
        for (Wa(t, e, n), t = t.sibling; t !== null; ) Wa(t, e, n), (t = t.sibling);
}
var Pe = null,
    vt = !1;
function en(t, e, n) {
    for (n = n.child; n !== null; ) ig(t, e, n), (n = n.sibling);
}
function ig(t, e, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == 'function')
        try {
            Nt.onCommitFiberUnmount(Qo, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Ne || Ci(n, e);
        case 6:
            var i = Pe,
                r = vt;
            (Pe = null),
                en(t, e, n),
                (Pe = i),
                (vt = r),
                Pe !== null &&
                    (vt
                        ? ((t = Pe),
                          (n = n.stateNode),
                          t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
                        : Pe.removeChild(n.stateNode));
            break;
        case 18:
            Pe !== null &&
                (vt
                    ? ((t = Pe),
                      (n = n.stateNode),
                      t.nodeType === 8 ? Nl(t.parentNode, n) : t.nodeType === 1 && Nl(t, n),
                      jr(t))
                    : Nl(Pe, n.stateNode));
            break;
        case 4:
            (i = Pe),
                (r = vt),
                (Pe = n.stateNode.containerInfo),
                (vt = !0),
                en(t, e, n),
                (Pe = i),
                (vt = r);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ne && ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))) {
                r = i = i.next;
                do {
                    var s = r,
                        o = s.destroy;
                    (s = s.tag),
                        o !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Ba(n, e, o),
                        (r = r.next);
                } while (r !== i);
            }
            en(t, e, n);
            break;
        case 1:
            if (!Ne && (Ci(n, e), (i = n.stateNode), typeof i.componentWillUnmount == 'function'))
                try {
                    (i.props = n.memoizedProps),
                        (i.state = n.memoizedState),
                        i.componentWillUnmount();
                } catch (l) {
                    he(n, e, l);
                }
            en(t, e, n);
            break;
        case 21:
            en(t, e, n);
            break;
        case 22:
            n.mode & 1
                ? ((Ne = (i = Ne) || n.memoizedState !== null), en(t, e, n), (Ne = i))
                : en(t, e, n);
            break;
        default:
            en(t, e, n);
    }
}
function Df(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new T1()),
            e.forEach(function (i) {
                var r = B1.bind(null, t, i);
                n.has(i) || (n.add(i), i.then(r, r));
            });
    }
}
function gt(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var s = t,
                    o = e,
                    l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (Pe = l.stateNode), (vt = !1);
                            break e;
                        case 3:
                            (Pe = l.stateNode.containerInfo), (vt = !0);
                            break e;
                        case 4:
                            (Pe = l.stateNode.containerInfo), (vt = !0);
                            break e;
                    }
                    l = l.return;
                }
                if (Pe === null) throw Error(P(160));
                ig(s, o, r), (Pe = null), (vt = !1);
                var a = r.alternate;
                a !== null && (a.return = null), (r.return = null);
            } catch (u) {
                he(r, e, u);
            }
        }
    if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) rg(e, t), (e = e.sibling);
}
function rg(t, e) {
    var n = t.alternate,
        i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((gt(e, t), Et(t), i & 4)) {
                try {
                    Pr(3, t, t.return), nl(3, t);
                } catch (v) {
                    he(t, t.return, v);
                }
                try {
                    Pr(5, t, t.return);
                } catch (v) {
                    he(t, t.return, v);
                }
            }
            break;
        case 1:
            gt(e, t), Et(t), i & 512 && n !== null && Ci(n, n.return);
            break;
        case 5:
            if ((gt(e, t), Et(t), i & 512 && n !== null && Ci(n, n.return), t.flags & 32)) {
                var r = t.stateNode;
                try {
                    Ir(r, '');
                } catch (v) {
                    he(t, t.return, v);
                }
            }
            if (i & 4 && ((r = t.stateNode), r != null)) {
                var s = t.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    l = t.type,
                    a = t.updateQueue;
                if (((t.updateQueue = null), a !== null))
                    try {
                        l === 'input' && s.type === 'radio' && s.name != null && bh(r, s), ha(l, o);
                        var u = ha(l, s);
                        for (o = 0; o < a.length; o += 2) {
                            var c = a[o],
                                f = a[o + 1];
                            c === 'style'
                                ? Th(r, f)
                                : c === 'dangerouslySetInnerHTML'
                                ? Ph(r, f)
                                : c === 'children'
                                ? Ir(r, f)
                                : hu(r, c, f, u);
                        }
                        switch (l) {
                            case 'input':
                                aa(r, s);
                                break;
                            case 'textarea':
                                Mh(r, s);
                                break;
                            case 'select':
                                var d = r._wrapperState.wasMultiple;
                                r._wrapperState.wasMultiple = !!s.multiple;
                                var h = s.value;
                                h != null
                                    ? Ei(r, !!s.multiple, h, !1)
                                    : d !== !!s.multiple &&
                                      (s.defaultValue != null
                                          ? Ei(r, !!s.multiple, s.defaultValue, !0)
                                          : Ei(r, !!s.multiple, s.multiple ? [] : '', !1));
                        }
                        r[Yr] = s;
                    } catch (v) {
                        he(t, t.return, v);
                    }
            }
            break;
        case 6:
            if ((gt(e, t), Et(t), i & 4)) {
                if (t.stateNode === null) throw Error(P(162));
                (r = t.stateNode), (s = t.memoizedProps);
                try {
                    r.nodeValue = s;
                } catch (v) {
                    he(t, t.return, v);
                }
            }
            break;
        case 3:
            if ((gt(e, t), Et(t), i & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    jr(e.containerInfo);
                } catch (v) {
                    he(t, t.return, v);
                }
            break;
        case 4:
            gt(e, t), Et(t);
            break;
        case 13:
            gt(e, t),
                Et(t),
                (r = t.child),
                r.flags & 8192 &&
                    ((s = r.memoizedState !== null),
                    (r.stateNode.isHidden = s),
                    !s ||
                        (r.alternate !== null && r.alternate.memoizedState !== null) ||
                        (Yu = ge())),
                i & 4 && Df(t);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                t.mode & 1 ? ((Ne = (u = Ne) || c), gt(e, t), (Ne = u)) : gt(e, t),
                Et(t),
                i & 8192)
            ) {
                if (
                    ((u = t.memoizedState !== null),
                    (t.stateNode.isHidden = u) && !c && (t.mode & 1) !== 0)
                )
                    for (L = t, c = t.child; c !== null; ) {
                        for (f = L = c; L !== null; ) {
                            switch (((d = L), (h = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Pr(4, d, d.return);
                                    break;
                                case 1:
                                    Ci(d, d.return);
                                    var m = d.stateNode;
                                    if (typeof m.componentWillUnmount == 'function') {
                                        (i = d), (n = d.return);
                                        try {
                                            (e = i),
                                                (m.props = e.memoizedProps),
                                                (m.state = e.memoizedState),
                                                m.componentWillUnmount();
                                        } catch (v) {
                                            he(i, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    Ci(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Nf(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = d), (L = h)) : Nf(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = t; ; ) {
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
                                          (l.style.display = Oh('display', o)));
                            } catch (v) {
                                he(t, t.return, v);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                            } catch (v) {
                                he(t, t.return, v);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === t) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === t) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === t) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            gt(e, t), Et(t), i & 4 && Df(t);
            break;
        case 21:
            break;
        default:
            gt(e, t), Et(t);
    }
}
function Et(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (ng(n)) {
                        var i = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(P(160));
            }
            switch (i.tag) {
                case 5:
                    var r = i.stateNode;
                    i.flags & 32 && (Ir(r, ''), (i.flags &= -33));
                    var s = Lf(t);
                    Wa(t, s, r);
                    break;
                case 3:
                case 4:
                    var o = i.stateNode.containerInfo,
                        l = Lf(t);
                    Va(t, l, o);
                    break;
                default:
                    throw Error(P(161));
            }
        } catch (a) {
            he(t, t.return, a);
        }
        t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
}
function D1(t, e, n) {
    (L = t), sg(t);
}
function sg(t, e, n) {
    for (var i = (t.mode & 1) !== 0; L !== null; ) {
        var r = L,
            s = r.child;
        if (r.tag === 22 && i) {
            var o = r.memoizedState !== null || Ds;
            if (!o) {
                var l = r.alternate,
                    a = (l !== null && l.memoizedState !== null) || Ne;
                l = Ds;
                var u = Ne;
                if (((Ds = o), (Ne = a) && !u))
                    for (L = r; L !== null; )
                        (o = L),
                            (a = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? Af(r)
                                : a !== null
                                ? ((a.return = o), (L = a))
                                : Af(r);
                for (; s !== null; ) (L = s), sg(s), (s = s.sibling);
                (L = r), (Ds = l), (Ne = u);
            }
            Rf(t);
        } else (r.subtreeFlags & 8772) !== 0 && s !== null ? ((s.return = r), (L = s)) : Rf(t);
    }
}
function Rf(t) {
    for (; L !== null; ) {
        var e = L;
        if ((e.flags & 8772) !== 0) {
            var n = e.alternate;
            try {
                if ((e.flags & 8772) !== 0)
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ne || nl(5, e);
                            break;
                        case 1:
                            var i = e.stateNode;
                            if (e.flags & 4 && !Ne)
                                if (n === null) i.componentDidMount();
                                else {
                                    var r =
                                        e.elementType === e.type
                                            ? n.memoizedProps
                                            : mt(e.type, n.memoizedProps);
                                    i.componentDidUpdate(
                                        r,
                                        n.memoizedState,
                                        i.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var s = e.updateQueue;
                            s !== null && mf(e, s, i);
                            break;
                        case 3:
                            var o = e.updateQueue;
                            if (o !== null) {
                                if (((n = null), e.child !== null))
                                    switch (e.child.tag) {
                                        case 5:
                                            n = e.child.stateNode;
                                            break;
                                        case 1:
                                            n = e.child.stateNode;
                                    }
                                mf(e, o, n);
                            }
                            break;
                        case 5:
                            var l = e.stateNode;
                            if (n === null && e.flags & 4) {
                                n = l;
                                var a = e.memoizedProps;
                                switch (e.type) {
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
                            if (e.memoizedState === null) {
                                var u = e.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && jr(f);
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
                            throw Error(P(163));
                    }
                Ne || (e.flags & 512 && ja(e));
            } catch (d) {
                he(e, e.return, d);
            }
        }
        if (e === t) {
            L = null;
            break;
        }
        if (((n = e.sibling), n !== null)) {
            (n.return = e.return), (L = n);
            break;
        }
        L = e.return;
    }
}
function Nf(t) {
    for (; L !== null; ) {
        var e = L;
        if (e === t) {
            L = null;
            break;
        }
        var n = e.sibling;
        if (n !== null) {
            (n.return = e.return), (L = n);
            break;
        }
        L = e.return;
    }
}
function Af(t) {
    for (; L !== null; ) {
        var e = L;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        nl(4, e);
                    } catch (a) {
                        he(e, n, a);
                    }
                    break;
                case 1:
                    var i = e.stateNode;
                    if (typeof i.componentDidMount == 'function') {
                        var r = e.return;
                        try {
                            i.componentDidMount();
                        } catch (a) {
                            he(e, r, a);
                        }
                    }
                    var s = e.return;
                    try {
                        ja(e);
                    } catch (a) {
                        he(e, s, a);
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        ja(e);
                    } catch (a) {
                        he(e, o, a);
                    }
            }
        } catch (a) {
            he(e, e.return, a);
        }
        if (e === t) {
            L = null;
            break;
        }
        var l = e.sibling;
        if (l !== null) {
            (l.return = e.return), (L = l);
            break;
        }
        L = e.return;
    }
}
var R1 = Math.ceil,
    Do = Gt.ReactCurrentDispatcher,
    Uu = Gt.ReactCurrentOwner,
    ft = Gt.ReactCurrentBatchConfig,
    U = 0,
    Me = null,
    ye = null,
    Oe = 0,
    Ge = 0,
    bi = En(0),
    _e = 0,
    qr = null,
    qn = 0,
    il = 0,
    $u = 0,
    Or = null,
    Ve = null,
    Yu = 0,
    ji = 1 / 0,
    Ht = null,
    Ro = !1,
    Ua = null,
    vn = null,
    Rs = !1,
    ln = null,
    No = 0,
    Tr = 0,
    $a = null,
    so = -1,
    oo = 0;
function Fe() {
    return (U & 6) !== 0 ? ge() : so !== -1 ? so : (so = ge());
}
function yn(t) {
    return (t.mode & 1) === 0
        ? 1
        : (U & 2) !== 0 && Oe !== 0
        ? Oe & -Oe
        : m1.transition !== null
        ? (oo === 0 && (oo = Vh()), oo)
        : ((t = q), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Xh(t.type))), t);
}
function St(t, e, n, i) {
    if (50 < Tr) throw ((Tr = 0), ($a = null), Error(P(185)));
    os(t, n, i),
        ((U & 2) === 0 || t !== Me) &&
            (t === Me && ((U & 2) === 0 && (il |= n), _e === 4 && sn(t, Oe)),
            Qe(t, i),
            n === 1 && U === 0 && (e.mode & 1) === 0 && ((ji = ge() + 500), Jo && Pn()));
}
function Qe(t, e) {
    var n = t.callbackNode;
    m0(t, e);
    var i = vo(t, t === Me ? Oe : 0);
    if (i === 0) n !== null && Wc(n), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((e = i & -i), t.callbackPriority !== e)) {
        if ((n != null && Wc(n), e === 1))
            t.tag === 0 ? g1(zf.bind(null, t)) : pp(zf.bind(null, t)),
                f1(function () {
                    (U & 6) === 0 && Pn();
                }),
                (n = null);
        else {
            switch (Wh(i)) {
                case 1:
                    n = yu;
                    break;
                case 4:
                    n = Bh;
                    break;
                case 16:
                    n = mo;
                    break;
                case 536870912:
                    n = jh;
                    break;
                default:
                    n = mo;
            }
            n = hg(n, og.bind(null, t));
        }
        (t.callbackPriority = e), (t.callbackNode = n);
    }
}
function og(t, e) {
    if (((so = -1), (oo = 0), (U & 6) !== 0)) throw Error(P(327));
    var n = t.callbackNode;
    if (Di() && t.callbackNode !== n) return null;
    var i = vo(t, t === Me ? Oe : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & t.expiredLanes) !== 0 || e) e = Ao(t, i);
    else {
        e = i;
        var r = U;
        U |= 2;
        var s = ag();
        (Me !== t || Oe !== e) && ((Ht = null), (ji = ge() + 500), Yn(t, e));
        do
            try {
                z1();
                break;
            } catch (l) {
                lg(t, l);
            }
        while (1);
        Lu(), (Do.current = s), (U = r), ye !== null ? (e = 0) : ((Me = null), (Oe = 0), (e = _e));
    }
    if (e !== 0) {
        if ((e === 2 && ((r = ya(t)), r !== 0 && ((i = r), (e = Ya(t, r)))), e === 1))
            throw ((n = qr), Yn(t, 0), sn(t, i), Qe(t, ge()), n);
        if (e === 6) sn(t, i);
        else {
            if (
                ((r = t.current.alternate),
                (i & 30) === 0 &&
                    !N1(r) &&
                    ((e = Ao(t, i)),
                    e === 2 && ((s = ya(t)), s !== 0 && ((i = s), (e = Ya(t, s)))),
                    e === 1))
            )
                throw ((n = qr), Yn(t, 0), sn(t, i), Qe(t, ge()), n);
            switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                    Hn(t, Ve, Ht);
                    break;
                case 3:
                    if ((sn(t, i), (i & 130023424) === i && ((e = Yu + 500 - ge()), 10 < e))) {
                        if (vo(t, 0) !== 0) break;
                        if (((r = t.suspendedLanes), (r & i) !== i)) {
                            Fe(), (t.pingedLanes |= t.suspendedLanes & r);
                            break;
                        }
                        t.timeoutHandle = Ma(Hn.bind(null, t, Ve, Ht), e);
                        break;
                    }
                    Hn(t, Ve, Ht);
                    break;
                case 4:
                    if ((sn(t, i), (i & 4194240) === i)) break;
                    for (e = t.eventTimes, r = -1; 0 < i; ) {
                        var o = 31 - wt(i);
                        (s = 1 << o), (o = e[o]), o > r && (r = o), (i &= ~s);
                    }
                    if (
                        ((i = r),
                        (i = ge() - i),
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
                                : 1960 * R1(i / 1960)) - i),
                        10 < i)
                    ) {
                        t.timeoutHandle = Ma(Hn.bind(null, t, Ve, Ht), i);
                        break;
                    }
                    Hn(t, Ve, Ht);
                    break;
                case 5:
                    Hn(t, Ve, Ht);
                    break;
                default:
                    throw Error(P(329));
            }
        }
    }
    return Qe(t, ge()), t.callbackNode === n ? og.bind(null, t) : null;
}
function Ya(t, e) {
    var n = Or;
    return (
        t.current.memoizedState.isDehydrated && (Yn(t, e).flags |= 256),
        (t = Ao(t, e)),
        t !== 2 && ((e = Ve), (Ve = n), e !== null && Ka(e)),
        t
    );
}
function Ka(t) {
    Ve === null ? (Ve = t) : Ve.push.apply(Ve, t);
}
function N1(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i],
                        s = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!kt(s(), r)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) (n.return = e), (e = n);
        else {
            if (e === t) break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return !0;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
    }
    return !0;
}
function sn(t, e) {
    for (
        e &= ~$u, e &= ~il, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes;
        0 < e;

    ) {
        var n = 31 - wt(e),
            i = 1 << n;
        (t[n] = -1), (e &= ~i);
    }
}
function zf(t) {
    if ((U & 6) !== 0) throw Error(P(327));
    Di();
    var e = vo(t, 0);
    if ((e & 1) === 0) return Qe(t, ge()), null;
    var n = Ao(t, e);
    if (t.tag !== 0 && n === 2) {
        var i = ya(t);
        i !== 0 && ((e = i), (n = Ya(t, i)));
    }
    if (n === 1) throw ((n = qr), Yn(t, 0), sn(t, e), Qe(t, ge()), n);
    if (n === 6) throw Error(P(345));
    return (
        (t.finishedWork = t.current.alternate),
        (t.finishedLanes = e),
        Hn(t, Ve, Ht),
        Qe(t, ge()),
        null
    );
}
function Ku(t, e) {
    var n = U;
    U |= 1;
    try {
        return t(e);
    } finally {
        (U = n), U === 0 && ((ji = ge() + 500), Jo && Pn());
    }
}
function Jn(t) {
    ln !== null && ln.tag === 0 && (U & 6) === 0 && Di();
    var e = U;
    U |= 1;
    var n = ft.transition,
        i = q;
    try {
        if (((ft.transition = null), (q = 1), t)) return t();
    } finally {
        (q = i), (ft.transition = n), (U = e), (U & 6) === 0 && Pn();
    }
}
function Qu() {
    (Ge = bi.current), se(bi);
}
function Yn(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    if ((n !== -1 && ((t.timeoutHandle = -1), c1(n)), ye !== null))
        for (n = ye.return; n !== null; ) {
            var i = n;
            switch ((Pu(i), i.tag)) {
                case 1:
                    (i = i.type.childContextTypes), i != null && So();
                    break;
                case 3:
                    Hi(), se(Ye), se(Ae), Iu();
                    break;
                case 5:
                    zu(i);
                    break;
                case 4:
                    Hi();
                    break;
                case 13:
                    se(ae);
                    break;
                case 19:
                    se(ae);
                    break;
                case 10:
                    Du(i.type._context);
                    break;
                case 22:
                case 23:
                    Qu();
            }
            n = n.return;
        }
    if (
        ((Me = t),
        (ye = t = xn(t.current, null)),
        (Oe = Ge = e),
        (_e = 0),
        (qr = null),
        ($u = il = qn = 0),
        (Ve = Or = null),
        Wn !== null)
    ) {
        for (e = 0; e < Wn.length; e++)
            if (((n = Wn[e]), (i = n.interleaved), i !== null)) {
                n.interleaved = null;
                var r = i.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    (s.next = r), (i.next = o);
                }
                n.pending = i;
            }
        Wn = null;
    }
    return t;
}
function lg(t, e) {
    do {
        var n = ye;
        try {
            if ((Lu(), (no.current = Lo), To)) {
                for (var i = ce.memoizedState; i !== null; ) {
                    var r = i.queue;
                    r !== null && (r.pending = null), (i = i.next);
                }
                To = !1;
            }
            if (
                ((Zn = 0),
                (Ce = xe = ce = null),
                (Er = !1),
                (Xr = 0),
                (Uu.current = null),
                n === null || n.return === null)
            ) {
                (_e = 1), (qr = e), (ye = null);
                break;
            }
            e: {
                var s = t,
                    o = n.return,
                    l = n,
                    a = e;
                if (
                    ((e = Oe),
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
                    var h = kf(o);
                    if (h !== null) {
                        (h.flags &= -257),
                            Cf(h, o, l, s, e),
                            h.mode & 1 && Sf(s, u, e),
                            (e = h),
                            (a = u);
                        var m = e.updateQueue;
                        if (m === null) {
                            var v = new Set();
                            v.add(a), (e.updateQueue = v);
                        } else m.add(a);
                        break e;
                    } else {
                        if ((e & 1) === 0) {
                            Sf(s, u, e), Xu();
                            break e;
                        }
                        a = Error(P(426));
                    }
                } else if (le && l.mode & 1) {
                    var x = kf(o);
                    if (x !== null) {
                        (x.flags & 65536) === 0 && (x.flags |= 256),
                            Cf(x, o, l, s, e),
                            Ou(Bi(a, l));
                        break e;
                    }
                }
                (s = a = Bi(a, l)),
                    _e !== 4 && (_e = 2),
                    Or === null ? (Or = [s]) : Or.push(s),
                    (s = o);
                do {
                    switch (s.tag) {
                        case 3:
                            (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                            var g = Up(s, a, e);
                            gf(s, g);
                            break e;
                        case 1:
                            l = a;
                            var p = s.type,
                                y = s.stateNode;
                            if (
                                (s.flags & 128) === 0 &&
                                (typeof p.getDerivedStateFromError == 'function' ||
                                    (y !== null &&
                                        typeof y.componentDidCatch == 'function' &&
                                        (vn === null || !vn.has(y))))
                            ) {
                                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                                var _ = $p(s, l, e);
                                gf(s, _);
                                break e;
                            }
                    }
                    s = s.return;
                } while (s !== null);
            }
            cg(n);
        } catch (w) {
            (e = w), ye === n && n !== null && (ye = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function ag() {
    var t = Do.current;
    return (Do.current = Lo), t === null ? Lo : t;
}
function Xu() {
    (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
        Me === null || ((qn & 268435455) === 0 && (il & 268435455) === 0) || sn(Me, Oe);
}
function Ao(t, e) {
    var n = U;
    U |= 2;
    var i = ag();
    (Me !== t || Oe !== e) && ((Ht = null), Yn(t, e));
    do
        try {
            A1();
            break;
        } catch (r) {
            lg(t, r);
        }
    while (1);
    if ((Lu(), (U = n), (Do.current = i), ye !== null)) throw Error(P(261));
    return (Me = null), (Oe = 0), _e;
}
function A1() {
    for (; ye !== null; ) ug(ye);
}
function z1() {
    for (; ye !== null && !l0(); ) ug(ye);
}
function ug(t) {
    var e = dg(t.alternate, t, Ge);
    (t.memoizedProps = t.pendingProps), e === null ? cg(t) : (ye = e), (Uu.current = null);
}
function cg(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (((t = e.return), (e.flags & 32768) === 0)) {
            if (((n = P1(n, e, Ge)), n !== null)) {
                ye = n;
                return;
            }
        } else {
            if (((n = O1(n, e)), n !== null)) {
                (n.flags &= 32767), (ye = n);
                return;
            }
            if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            else {
                (_e = 6), (ye = null);
                return;
            }
        }
        if (((e = e.sibling), e !== null)) {
            ye = e;
            return;
        }
        ye = e = t;
    } while (e !== null);
    _e === 0 && (_e = 5);
}
function Hn(t, e, n) {
    var i = q,
        r = ft.transition;
    try {
        (ft.transition = null), (q = 1), I1(t, e, n, i);
    } finally {
        (ft.transition = r), (q = i);
    }
    return null;
}
function I1(t, e, n, i) {
    do Di();
    while (ln !== null);
    if ((U & 6) !== 0) throw Error(P(327));
    n = t.finishedWork;
    var r = t.finishedLanes;
    if (n === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(P(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
        (v0(t, s),
        t === Me && ((ye = Me = null), (Oe = 0)),
        ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
            Rs ||
            ((Rs = !0),
            hg(mo, function () {
                return Di(), null;
            })),
        (s = (n.flags & 15990) !== 0),
        (n.subtreeFlags & 15990) !== 0 || s)
    ) {
        (s = ft.transition), (ft.transition = null);
        var o = q;
        q = 1;
        var l = U;
        (U |= 4),
            (Uu.current = null),
            L1(t, n),
            rg(n, t),
            i1(Ca),
            (yo = !!ka),
            (Ca = ka = null),
            (t.current = n),
            D1(n),
            a0(),
            (U = l),
            (q = o),
            (ft.transition = s);
    } else t.current = n;
    if (
        (Rs && ((Rs = !1), (ln = t), (No = r)),
        (s = t.pendingLanes),
        s === 0 && (vn = null),
        f0(n.stateNode),
        Qe(t, ge()),
        e !== null)
    )
        for (i = t.onRecoverableError, n = 0; n < e.length; n++)
            (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
    if (Ro) throw ((Ro = !1), (t = Ua), (Ua = null), t);
    return (
        (No & 1) !== 0 && t.tag !== 0 && Di(),
        (s = t.pendingLanes),
        (s & 1) !== 0 ? (t === $a ? Tr++ : ((Tr = 0), ($a = t))) : (Tr = 0),
        Pn(),
        null
    );
}
function Di() {
    if (ln !== null) {
        var t = Wh(No),
            e = ft.transition,
            n = q;
        try {
            if (((ft.transition = null), (q = 16 > t ? 16 : t), ln === null)) var i = !1;
            else {
                if (((t = ln), (ln = null), (No = 0), (U & 6) !== 0)) throw Error(P(331));
                var r = U;
                for (U |= 4, L = t.current; L !== null; ) {
                    var s = L,
                        o = s.child;
                    if ((L.flags & 16) !== 0) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null; ) {
                                    var c = L;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Pr(8, c, s);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (L = f);
                                    else
                                        for (; L !== null; ) {
                                            c = L;
                                            var d = c.sibling,
                                                h = c.return;
                                            if ((tg(c), c === u)) {
                                                L = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = h), (L = d);
                                                break;
                                            }
                                            L = h;
                                        }
                                }
                            }
                            var m = s.alternate;
                            if (m !== null) {
                                var v = m.child;
                                if (v !== null) {
                                    m.child = null;
                                    do {
                                        var x = v.sibling;
                                        (v.sibling = null), (v = x);
                                    } while (v !== null);
                                }
                            }
                            L = s;
                        }
                    }
                    if ((s.subtreeFlags & 2064) !== 0 && o !== null) (o.return = s), (L = o);
                    else
                        e: for (; L !== null; ) {
                            if (((s = L), (s.flags & 2048) !== 0))
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Pr(9, s, s.return);
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                (g.return = s.return), (L = g);
                                break e;
                            }
                            L = s.return;
                        }
                }
                var p = t.current;
                for (L = p; L !== null; ) {
                    o = L;
                    var y = o.child;
                    if ((o.subtreeFlags & 2064) !== 0 && y !== null) (y.return = o), (L = y);
                    else
                        e: for (o = p; L !== null; ) {
                            if (((l = L), (l.flags & 2048) !== 0))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            nl(9, l);
                                    }
                                } catch (w) {
                                    he(l, l.return, w);
                                }
                            if (l === o) {
                                L = null;
                                break e;
                            }
                            var _ = l.sibling;
                            if (_ !== null) {
                                (_.return = l.return), (L = _);
                                break e;
                            }
                            L = l.return;
                        }
                }
                if (((U = r), Pn(), Nt && typeof Nt.onPostCommitFiberRoot == 'function'))
                    try {
                        Nt.onPostCommitFiberRoot(Qo, t);
                    } catch {}
                i = !0;
            }
            return i;
        } finally {
            (q = n), (ft.transition = e);
        }
    }
    return !1;
}
function If(t, e, n) {
    (e = Bi(n, e)),
        (e = Up(t, e, 1)),
        (t = mn(t, e, 1)),
        (e = Fe()),
        t !== null && (os(t, 1, e), Qe(t, e));
}
function he(t, e, n) {
    if (t.tag === 3) If(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                If(e, t, n);
                break;
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (
                    typeof e.type.getDerivedStateFromError == 'function' ||
                    (typeof i.componentDidCatch == 'function' && (vn === null || !vn.has(i)))
                ) {
                    (t = Bi(n, t)),
                        (t = $p(e, t, 1)),
                        (e = mn(e, t, 1)),
                        (t = Fe()),
                        e !== null && (os(e, 1, t), Qe(e, t));
                    break;
                }
            }
            e = e.return;
        }
}
function F1(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
        (e = Fe()),
        (t.pingedLanes |= t.suspendedLanes & n),
        Me === t &&
            (Oe & n) === n &&
            (_e === 4 || (_e === 3 && (Oe & 130023424) === Oe && 500 > ge() - Yu)
                ? Yn(t, 0)
                : ($u |= n)),
        Qe(t, e);
}
function fg(t, e) {
    e === 0 &&
        ((t.mode & 1) === 0
            ? (e = 1)
            : ((e = ks), (ks <<= 1), (ks & 130023424) === 0 && (ks = 4194304)));
    var n = Fe();
    (t = Kt(t, e)), t !== null && (os(t, e, n), Qe(t, n));
}
function H1(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), fg(t, n);
}
function B1(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var i = t.stateNode,
                r = t.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        default:
            throw Error(P(314));
    }
    i !== null && i.delete(e), fg(t, n);
}
var dg;
dg = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Ye.current) Ue = !0;
        else {
            if ((t.lanes & n) === 0 && (e.flags & 128) === 0) return (Ue = !1), E1(t, e, n);
            Ue = (t.flags & 131072) !== 0;
        }
    else (Ue = !1), le && (e.flags & 1048576) !== 0 && gp(e, bo, e.index);
    switch (((e.lanes = 0), e.tag)) {
        case 2:
            var i = e.type;
            ro(t, e), (t = e.pendingProps);
            var r = zi(e, Ae.current);
            Li(e, n), (r = Hu(null, e, i, t, r, n));
            var s = Bu();
            return (
                (e.flags |= 1),
                typeof r == 'object' &&
                r !== null &&
                typeof r.render == 'function' &&
                r.$$typeof === void 0
                    ? ((e.tag = 1),
                      (e.memoizedState = null),
                      (e.updateQueue = null),
                      Ke(i) ? ((s = !0), ko(e)) : (s = !1),
                      (e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
                      Nu(e),
                      (r.updater = el),
                      (e.stateNode = r),
                      (r._reactInternals = e),
                      Ra(e, i, t, n),
                      (e = za(null, e, i, !0, s, n)))
                    : ((e.tag = 0), le && s && Eu(e), Ie(null, e, r, n), (e = e.child)),
                e
            );
        case 16:
            i = e.elementType;
            e: {
                switch (
                    (ro(t, e),
                    (t = e.pendingProps),
                    (r = i._init),
                    (i = r(i._payload)),
                    (e.type = i),
                    (r = e.tag = V1(i)),
                    (t = mt(i, t)),
                    r)
                ) {
                    case 0:
                        e = Aa(null, e, i, t, n);
                        break e;
                    case 1:
                        e = Ef(null, e, i, t, n);
                        break e;
                    case 11:
                        e = bf(null, e, i, t, n);
                        break e;
                    case 14:
                        e = Mf(null, e, i, mt(i.type, t), n);
                        break e;
                }
                throw Error(P(306, i, ''));
            }
            return e;
        case 0:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : mt(i, r)),
                Aa(t, e, i, r, n)
            );
        case 1:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : mt(i, r)),
                Ef(t, e, i, r, n)
            );
        case 3:
            e: {
                if ((Xp(e), t === null)) throw Error(P(387));
                (i = e.pendingProps),
                    (s = e.memoizedState),
                    (r = s.element),
                    xp(t, e),
                    Po(e, i, null, n);
                var o = e.memoizedState;
                if (((i = o.element), s.isDehydrated))
                    if (
                        ((s = {
                            element: i,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (e.updateQueue.baseState = s),
                        (e.memoizedState = s),
                        e.flags & 256)
                    ) {
                        (r = Bi(Error(P(423)), e)), (e = Pf(t, e, i, n, r));
                        break e;
                    } else if (i !== r) {
                        (r = Bi(Error(P(424)), e)), (e = Pf(t, e, i, n, r));
                        break e;
                    } else
                        for (
                            qe = gn(e.stateNode.containerInfo.firstChild),
                                Je = e,
                                le = !0,
                                xt = null,
                                n = kp(e, null, i, n),
                                e.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Ii(), i === r)) {
                        e = Qt(t, e, n);
                        break e;
                    }
                    Ie(t, e, i, n);
                }
                e = e.child;
            }
            return e;
        case 5:
            return (
                Cp(e),
                t === null && Ta(e),
                (i = e.type),
                (r = e.pendingProps),
                (s = t !== null ? t.memoizedProps : null),
                (o = r.children),
                ba(i, r) ? (o = null) : s !== null && ba(i, s) && (e.flags |= 32),
                Qp(t, e),
                Ie(t, e, o, n),
                e.child
            );
        case 6:
            return t === null && Ta(e), null;
        case 13:
            return Gp(t, e, n);
        case 4:
            return (
                Au(e, e.stateNode.containerInfo),
                (i = e.pendingProps),
                t === null ? (e.child = Fi(e, null, i, n)) : Ie(t, e, i, n),
                e.child
            );
        case 11:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : mt(i, r)),
                bf(t, e, i, r, n)
            );
        case 7:
            return Ie(t, e, e.pendingProps, n), e.child;
        case 8:
            return Ie(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return Ie(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (
                    ((i = e.type._context),
                    (r = e.pendingProps),
                    (s = e.memoizedProps),
                    (o = r.value),
                    ne(Mo, i._currentValue),
                    (i._currentValue = o),
                    s !== null)
                )
                    if (kt(s.value, o)) {
                        if (s.children === r.children && !Ye.current) {
                            e = Qt(t, e, n);
                            break e;
                        }
                    } else
                        for (s = e.child, s !== null && (s.return = e); s !== null; ) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var a = l.firstContext; a !== null; ) {
                                    if (a.context === i) {
                                        if (s.tag === 1) {
                                            (a = Ut(-1, n & -n)), (a.tag = 2);
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
                                            La(s.return, n, e),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (((o = s.return), o === null)) throw Error(P(341));
                                (o.lanes |= n),
                                    (l = o.alternate),
                                    l !== null && (l.lanes |= n),
                                    La(o, n, e),
                                    (o = s.sibling);
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null; ) {
                                    if (o === e) {
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
                Ie(t, e, r.children, n), (e = e.child);
            }
            return e;
        case 9:
            return (
                (r = e.type),
                (i = e.pendingProps.children),
                Li(e, n),
                (r = ht(r)),
                (i = i(r)),
                (e.flags |= 1),
                Ie(t, e, i, n),
                e.child
            );
        case 14:
            return (
                (i = e.type), (r = mt(i, e.pendingProps)), (r = mt(i.type, r)), Mf(t, e, i, r, n)
            );
        case 15:
            return Yp(t, e, e.type, e.pendingProps, n);
        case 17:
            return (
                (i = e.type),
                (r = e.pendingProps),
                (r = e.elementType === i ? r : mt(i, r)),
                ro(t, e),
                (e.tag = 1),
                Ke(i) ? ((t = !0), ko(e)) : (t = !1),
                Li(e, n),
                wp(e, i, r),
                Ra(e, i, r, n),
                za(null, e, i, !0, t, n)
            );
        case 19:
            return Zp(t, e, n);
        case 22:
            return Kp(t, e, n);
    }
    throw Error(P(156, e.tag));
};
function hg(t, e) {
    return Hh(t, e);
}
function j1(t, e, n, i) {
    (this.tag = t),
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
        (this.pendingProps = e),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = i),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function at(t, e, n, i) {
    return new j1(t, e, n, i);
}
function Gu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
}
function V1(t) {
    if (typeof t == 'function') return Gu(t) ? 1 : 0;
    if (t != null) {
        if (((t = t.$$typeof), t === gu)) return 11;
        if (t === mu) return 14;
    }
    return 2;
}
function xn(t, e) {
    var n = t.alternate;
    return (
        n === null
            ? ((n = at(t.tag, e, t.key, t.mode)),
              (n.elementType = t.elementType),
              (n.type = t.type),
              (n.stateNode = t.stateNode),
              (n.alternate = t),
              (t.alternate = n))
            : ((n.pendingProps = e),
              (n.type = t.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = t.flags & 14680064),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
    );
}
function lo(t, e, n, i, r, s) {
    var o = 2;
    if (((i = t), typeof t == 'function')) Gu(t) && (o = 1);
    else if (typeof t == 'string') o = 5;
    else
        e: switch (t) {
            case gi:
                return Kn(n.children, r, s, e);
            case pu:
                (o = 8), (r |= 8);
                break;
            case ia:
                return (t = at(12, n, e, r | 2)), (t.elementType = ia), (t.lanes = s), t;
            case ra:
                return (t = at(13, n, e, r)), (t.elementType = ra), (t.lanes = s), t;
            case sa:
                return (t = at(19, n, e, r)), (t.elementType = sa), (t.lanes = s), t;
            case Sh:
                return rl(n, r, s, e);
            default:
                if (typeof t == 'object' && t !== null)
                    switch (t.$$typeof) {
                        case _h:
                            o = 10;
                            break e;
                        case wh:
                            o = 9;
                            break e;
                        case gu:
                            o = 11;
                            break e;
                        case mu:
                            o = 14;
                            break e;
                        case tn:
                            (o = 16), (i = null);
                            break e;
                    }
                throw Error(P(130, t == null ? t : typeof t, ''));
        }
    return (e = at(o, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e;
}
function Kn(t, e, n, i) {
    return (t = at(7, t, i, e)), (t.lanes = n), t;
}
function rl(t, e, n, i) {
    return (
        (t = at(22, t, i, e)),
        (t.elementType = Sh),
        (t.lanes = n),
        (t.stateNode = { isHidden: !1 }),
        t
    );
}
function Vl(t, e, n) {
    return (t = at(6, t, null, e)), (t.lanes = n), t;
}
function Wl(t, e, n) {
    return (
        (e = at(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = n),
        (e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation,
        }),
        e
    );
}
function W1(t, e, n, i, r) {
    (this.tag = e),
        (this.containerInfo = t),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = kl(0)),
        (this.expirationTimes = kl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = kl(0)),
        (this.identifierPrefix = i),
        (this.onRecoverableError = r),
        (this.mutableSourceEagerHydrationData = null);
}
function Zu(t, e, n, i, r, s, o, l, a) {
    return (
        (t = new W1(t, e, n, l, a)),
        e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
        (s = at(3, null, null, e)),
        (t.current = s),
        (s.stateNode = t),
        (s.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Nu(s),
        t
    );
}
function U1(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: pi,
        key: i == null ? null : '' + i,
        children: t,
        containerInfo: e,
        implementation: n,
    };
}
function pg(t) {
    if (!t) return kn;
    t = t._reactInternals;
    e: {
        if (ii(t) !== t || t.tag !== 1) throw Error(P(170));
        var e = t;
        do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (Ke(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            e = e.return;
        } while (e !== null);
        throw Error(P(171));
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Ke(n)) return hp(t, n, e);
    }
    return e;
}
function gg(t, e, n, i, r, s, o, l, a) {
    return (
        (t = Zu(n, i, !0, t, r, s, o, l, a)),
        (t.context = pg(null)),
        (n = t.current),
        (i = Fe()),
        (r = yn(n)),
        (s = Ut(i, r)),
        (s.callback = e != null ? e : null),
        mn(n, s, r),
        (t.current.lanes = r),
        os(t, r, i),
        Qe(t, i),
        t
    );
}
function sl(t, e, n, i) {
    var r = e.current,
        s = Fe(),
        o = yn(r);
    return (
        (n = pg(n)),
        e.context === null ? (e.context = n) : (e.pendingContext = n),
        (e = Ut(s, o)),
        (e.payload = { element: t }),
        (i = i === void 0 ? null : i),
        i !== null && (e.callback = i),
        (t = mn(r, e, o)),
        t !== null && (St(t, r, o, s), to(t, r, o)),
        o
    );
}
function zo(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode;
    }
}
function Ff(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
    }
}
function qu(t, e) {
    Ff(t, e), (t = t.alternate) && Ff(t, e);
}
function $1() {
    return null;
}
var mg =
    typeof reportError == 'function'
        ? reportError
        : function (t) {
              console.error(t);
          };
function Ju(t) {
    this._internalRoot = t;
}
ol.prototype.render = Ju.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(P(409));
    sl(t, e, null, null);
};
ol.prototype.unmount = Ju.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Jn(function () {
            sl(null, t, null, null);
        }),
            (e[Yt] = null);
    }
};
function ol(t) {
    this._internalRoot = t;
}
ol.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = Yh();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < rn.length && e !== 0 && e < rn[n].priority; n++);
        rn.splice(n, 0, t), n === 0 && Qh(t);
    }
};
function ec(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function ll(t) {
    return !(
        !t ||
        (t.nodeType !== 1 &&
            t.nodeType !== 9 &&
            t.nodeType !== 11 &&
            (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
    );
}
function Hf() {}
function Y1(t, e, n, i, r) {
    if (r) {
        if (typeof i == 'function') {
            var s = i;
            i = function () {
                var u = zo(o);
                s.call(u);
            };
        }
        var o = gg(e, i, t, 0, null, !1, !1, '', Hf);
        return (
            (t._reactRootContainer = o),
            (t[Yt] = o.current),
            Ur(t.nodeType === 8 ? t.parentNode : t),
            Jn(),
            o
        );
    }
    for (; (r = t.lastChild); ) t.removeChild(r);
    if (typeof i == 'function') {
        var l = i;
        i = function () {
            var u = zo(a);
            l.call(u);
        };
    }
    var a = Zu(t, 0, !1, null, null, !1, !1, '', Hf);
    return (
        (t._reactRootContainer = a),
        (t[Yt] = a.current),
        Ur(t.nodeType === 8 ? t.parentNode : t),
        Jn(function () {
            sl(e, a, n, i);
        }),
        a
    );
}
function al(t, e, n, i, r) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof r == 'function') {
            var l = r;
            r = function () {
                var a = zo(o);
                l.call(a);
            };
        }
        sl(e, o, t, r);
    } else o = Y1(n, e, t, r, i);
    return zo(o);
}
Uh = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = gr(e.pendingLanes);
                n !== 0 && (xu(e, n | 1), Qe(e, ge()), (U & 6) === 0 && ((ji = ge() + 500), Pn()));
            }
            break;
        case 13:
            Jn(function () {
                var i = Kt(t, 1);
                if (i !== null) {
                    var r = Fe();
                    St(i, t, 1, r);
                }
            }),
                qu(t, 1);
    }
};
_u = function (t) {
    if (t.tag === 13) {
        var e = Kt(t, 134217728);
        if (e !== null) {
            var n = Fe();
            St(e, t, 134217728, n);
        }
        qu(t, 134217728);
    }
};
$h = function (t) {
    if (t.tag === 13) {
        var e = yn(t),
            n = Kt(t, e);
        if (n !== null) {
            var i = Fe();
            St(n, t, e, i);
        }
        qu(t, e);
    }
};
Yh = function () {
    return q;
};
Kh = function (t, e) {
    var n = q;
    try {
        return (q = t), e();
    } finally {
        q = n;
    }
};
ga = function (t, e, n) {
    switch (e) {
        case 'input':
            if ((aa(t, n), (e = n.name), n.type === 'radio' && e != null)) {
                for (n = t; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
                    ),
                        e = 0;
                    e < n.length;
                    e++
                ) {
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                        var r = qo(i);
                        if (!r) throw Error(P(90));
                        Ch(i), aa(i, r);
                    }
                }
            }
            break;
        case 'textarea':
            Mh(t, n);
            break;
        case 'select':
            (e = n.value), e != null && Ei(t, !!n.multiple, e, !1);
    }
};
Rh = Ku;
Nh = Jn;
var K1 = { usingClientEntryPoint: !1, Events: [as, xi, qo, Lh, Dh, Ku] },
    lr = {
        findFiberByHostInstance: Vn,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    Q1 = {
        bundleType: lr.bundleType,
        version: lr.version,
        rendererPackageName: lr.rendererPackageName,
        rendererConfig: lr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Gt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return (t = Ih(t)), t === null ? null : t.stateNode;
        },
        findFiberByHostInstance: lr.findFiberByHostInstance || $1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ns.isDisabled && Ns.supportsFiber)
        try {
            (Qo = Ns.inject(Q1)), (Nt = Ns);
        } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K1;
tt.createPortal = function (t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ec(e)) throw Error(P(200));
    return U1(t, e, null, n);
};
tt.createRoot = function (t, e) {
    if (!ec(t)) throw Error(P(299));
    var n = !1,
        i = '',
        r = mg;
    return (
        e != null &&
            (e.unstable_strictMode === !0 && (n = !0),
            e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
            e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
        (e = Zu(t, 1, !1, null, null, n, !1, i, r)),
        (t[Yt] = e.current),
        Ur(t.nodeType === 8 ? t.parentNode : t),
        new Ju(e)
    );
};
tt.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == 'function'
            ? Error(P(188))
            : ((t = Object.keys(t).join(',')), Error(P(268, t)));
    return (t = Ih(e)), (t = t === null ? null : t.stateNode), t;
};
tt.flushSync = function (t) {
    return Jn(t);
};
tt.hydrate = function (t, e, n) {
    if (!ll(e)) throw Error(P(200));
    return al(null, t, e, !0, n);
};
tt.hydrateRoot = function (t, e, n) {
    if (!ec(t)) throw Error(P(405));
    var i = (n != null && n.hydratedSources) || null,
        r = !1,
        s = '',
        o = mg;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (r = !0),
            n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (e = gg(e, null, t, 1, n != null ? n : null, r, !1, s, o)),
        (t[Yt] = e.current),
        Ur(t),
        i)
    )
        for (t = 0; t < i.length; t++)
            (n = i[t]),
                (r = n._getVersion),
                (r = r(n._source)),
                e.mutableSourceEagerHydrationData == null
                    ? (e.mutableSourceEagerHydrationData = [n, r])
                    : e.mutableSourceEagerHydrationData.push(n, r);
    return new ol(e);
};
tt.render = function (t, e, n) {
    if (!ll(e)) throw Error(P(200));
    return al(null, t, e, !1, n);
};
tt.unmountComponentAtNode = function (t) {
    if (!ll(t)) throw Error(P(40));
    return t._reactRootContainer
        ? (Jn(function () {
              al(null, null, t, !1, function () {
                  (t._reactRootContainer = null), (t[Yt] = null);
              });
          }),
          !0)
        : !1;
};
tt.unstable_batchedUpdates = Ku;
tt.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
    if (!ll(n)) throw Error(P(200));
    if (t == null || t._reactInternals === void 0) throw Error(P(38));
    return al(t, e, n, !1, i);
};
tt.version = '18.2.0-next-9e3b772b8-20220608';
(function (t) {
    function e() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
                console.error(n);
            }
    }
    e(), (t.exports = tt);
})(gh);
var Bf = gh.exports;
(ta.createRoot = Bf.createRoot), (ta.hydrateRoot = Bf.hydrateRoot);
const X1 = './assets/fei_logo_transparent.2aae0e98.png';
var vg = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    jf = ea.createContext && ea.createContext(vg),
    ul = { exports: {} },
    cl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var G1 = T.exports,
    Z1 = Symbol.for('react.element'),
    q1 = Symbol.for('react.fragment'),
    J1 = Object.prototype.hasOwnProperty,
    ev = G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    tv = { key: !0, ref: !0, __self: !0, __source: !0 };
function yg(t, e, n) {
    var i,
        r = {},
        s = null,
        o = null;
    n !== void 0 && (s = '' + n),
        e.key !== void 0 && (s = '' + e.key),
        e.ref !== void 0 && (o = e.ref);
    for (i in e) J1.call(e, i) && !tv.hasOwnProperty(i) && (r[i] = e[i]);
    if (t && t.defaultProps) for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
    return { $$typeof: Z1, type: t, key: s, ref: o, props: r, _owner: ev.current };
}
cl.Fragment = q1;
cl.jsx = yg;
cl.jsxs = yg;
(function (t) {
    t.exports = cl;
})(ul);
const xg = ul.exports.Fragment,
    b = ul.exports.jsx,
    J = ul.exports.jsxs;
var _n =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (_n =
                    Object.assign ||
                    function (t) {
                        for (var e, n = 1, i = arguments.length; n < i; n++) {
                            e = arguments[n];
                            for (var r in e)
                                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        }
                        return t;
                    }),
                _n.apply(this, arguments)
            );
        },
    nv =
        (globalThis && globalThis.__rest) ||
        function (t, e) {
            var n = {};
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
            if (t != null && typeof Object.getOwnPropertySymbols == 'function')
                for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++)
                    e.indexOf(i[r]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
                        (n[i[r]] = t[i[r]]);
            return n;
        };
function _g(t) {
    return (
        t &&
        t.map(function (e, n) {
            return ea.createElement(e.tag, _n({ key: n }, e.attr), _g(e.child));
        })
    );
}
function On(t) {
    return function (e) {
        return b(iv, { ..._n({ attr: _n({}, t.attr) }, e), children: _g(t.child) });
    };
}
function iv(t) {
    var e = function (n) {
        var i = t.attr,
            r = t.size,
            s = t.title,
            o = nv(t, ['attr', 'size', 'title']),
            l = r || n.size || '1em',
            a;
        return (
            n.className && (a = n.className),
            t.className && (a = (a ? a + ' ' : '') + t.className),
            J('svg', {
                ..._n(
                    { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
                    n.attr,
                    i,
                    o,
                    {
                        className: a,
                        style: _n(_n({ color: t.color || n.color }, n.style), t.style),
                        height: l,
                        width: l,
                        xmlns: 'http://www.w3.org/2000/svg',
                    }
                ),
                children: [s && b('title', { children: s }), t.children],
            })
        );
    };
    return jf !== void 0
        ? b(jf.Consumer, {
              children: function (n) {
                  return e(n);
              },
          })
        : e(vg);
}
function rv(t) {
    return On({
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
    })(t);
}
function Vf(t) {
    return On({
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
    })(t);
}
const sv = ({ setIsModalOpen: t }) =>
        J('div', {
            className: 'flex w-1/1 p-3 justify-between bg-slate-400',
            children: [
                b('div', {
                    className: 'self-center w-1/3',
                    children: b('img', { src: X1, alt: 'Logo', className: 'w-20 self-center' }),
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
                        t(!0);
                    },
                    children: b(rv, { className: 'w-8 h-8 text-blue-600 hover:text-blue-300' }),
                }),
            ],
        }),
    ov = ({ angle: t }) =>
        b('div', {
            id: 'animation',
            className: 'flex justify-center p-2 items-center',
            children: J('svg', {
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
                    b('line', { x1: '214', y1: '70.5', x2: '34', y2: t - 50, stroke: '#A30000' }),
                    b('g', {
                        filter: 'url(#filter2_d_0_1)',
                        children: b('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M204 0V40V200H224V40V0H204ZM212 25C209.239 25 207 27.2386 207 30C207 32.7614 209.239 35 212 35H217C219.761 35 222 32.7614 222 30C222 27.2386 219.761 25 217 25H212ZM207 10C207 7.23858 209.239 5 212 5H217C219.761 5 222 7.23858 222 10C222 12.7614 219.761 15 217 15H212C209.239 15 207 12.7614 207 10ZM207 190C207 192.761 209.239 195 212 195H217C219.761 195 222 192.761 222 190C222 187.239 219.761 185 217 185H212C209.239 185 207 187.239 207 190ZM212 175C209.239 175 207 172.761 207 170C207 167.239 209.239 165 212 165H217C219.761 165 222 167.239 222 170C222 172.761 219.761 175 217 175H212ZM207 150C207 152.761 209.239 155 212 155H217C219.761 155 222 152.761 222 150C222 147.239 219.761 145 217 145H212C209.239 145 207 147.239 207 150ZM212 135C209.239 135 207 132.761 207 130C207 127.239 209.239 125 212 125H217C219.761 125 222 127.239 222 130C222 132.761 219.761 135 217 135H212ZM207 110C207 112.761 209.239 115 212 115H217C219.761 115 222 112.761 222 110C222 107.239 219.761 105 217 105H212C209.239 105 207 107.239 207 110ZM212 95C209.239 95 207 92.7614 207 90C207 87.2386 209.239 85 212 85H217C219.761 85 222 87.2386 222 90C222 92.7614 219.761 95 217 95H212ZM207 70C207 72.7614 209.239 75 212 75H217C219.761 75 222 72.7614 222 70C222 67.2386 219.761 65 217 65H212C209.239 65 207 67.2386 207 70ZM212 55C209.239 55 207 52.7614 207 50C207 47.2386 209.239 45 212 45H217C219.761 45 222 47.2386 222 50C222 52.7614 219.761 55 217 55H212Z',
                            fill: '#0010A3',
                        }),
                    }),
                    J('defs', {
                        children: [
                            J('filter', {
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
                            J('filter', {
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
                            J('filter', {
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
 */ function cs(t) {
    return (t + 0.5) | 0;
}
const an = (t, e, n) => Math.max(Math.min(t, n), e);
function vr(t) {
    return an(cs(t * 2.55), 0, 255);
}
function wn(t) {
    return an(cs(t * 255), 0, 255);
}
function jt(t) {
    return an(cs(t / 2.55) / 100, 0, 1);
}
function Wf(t) {
    return an(cs(t * 100), 0, 100);
}
const st = {
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
    Qa = [...'0123456789ABCDEF'],
    lv = (t) => Qa[t & 15],
    av = (t) => Qa[(t & 240) >> 4] + Qa[t & 15],
    As = (t) => (t & 240) >> 4 === (t & 15),
    uv = (t) => As(t.r) && As(t.g) && As(t.b) && As(t.a);
function cv(t) {
    var e = t.length,
        n;
    return (
        t[0] === '#' &&
            (e === 4 || e === 5
                ? (n = {
                      r: 255 & (st[t[1]] * 17),
                      g: 255 & (st[t[2]] * 17),
                      b: 255 & (st[t[3]] * 17),
                      a: e === 5 ? st[t[4]] * 17 : 255,
                  })
                : (e === 7 || e === 9) &&
                  (n = {
                      r: (st[t[1]] << 4) | st[t[2]],
                      g: (st[t[3]] << 4) | st[t[4]],
                      b: (st[t[5]] << 4) | st[t[6]],
                      a: e === 9 ? (st[t[7]] << 4) | st[t[8]] : 255,
                  })),
        n
    );
}
const fv = (t, e) => (t < 255 ? e(t) : '');
function dv(t) {
    var e = uv(t) ? lv : av;
    return t ? '#' + e(t.r) + e(t.g) + e(t.b) + fv(t.a, e) : void 0;
}
const hv =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function wg(t, e, n) {
    const i = e * Math.min(n, 1 - n),
        r = (s, o = (s + t / 30) % 12) => n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [r(0), r(8), r(4)];
}
function pv(t, e, n) {
    const i = (r, s = (r + t / 60) % 6) => n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
    return [i(5), i(3), i(1)];
}
function gv(t, e, n) {
    const i = wg(t, 1, 0.5);
    let r;
    for (e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0; r < 3; r++)
        (i[r] *= 1 - e - n), (i[r] += e);
    return i;
}
function mv(t, e, n, i, r) {
    return t === r ? (e - n) / i + (e < n ? 6 : 0) : e === r ? (n - t) / i + 2 : (t - e) / i + 4;
}
function tc(t) {
    const n = t.r / 255,
        i = t.g / 255,
        r = t.b / 255,
        s = Math.max(n, i, r),
        o = Math.min(n, i, r),
        l = (s + o) / 2;
    let a, u, c;
    return (
        s !== o &&
            ((c = s - o),
            (u = l > 0.5 ? c / (2 - s - o) : c / (s + o)),
            (a = mv(n, i, r, c, s)),
            (a = a * 60 + 0.5)),
        [a | 0, u || 0, l]
    );
}
function nc(t, e, n, i) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(wn);
}
function ic(t, e, n) {
    return nc(wg, t, e, n);
}
function vv(t, e, n) {
    return nc(gv, t, e, n);
}
function yv(t, e, n) {
    return nc(pv, t, e, n);
}
function Sg(t) {
    return ((t % 360) + 360) % 360;
}
function xv(t) {
    const e = hv.exec(t);
    let n = 255,
        i;
    if (!e) return;
    e[5] !== i && (n = e[6] ? vr(+e[5]) : wn(+e[5]));
    const r = Sg(+e[2]),
        s = +e[3] / 100,
        o = +e[4] / 100;
    return (
        e[1] === 'hwb' ? (i = vv(r, s, o)) : e[1] === 'hsv' ? (i = yv(r, s, o)) : (i = ic(r, s, o)),
        { r: i[0], g: i[1], b: i[2], a: n }
    );
}
function _v(t, e) {
    var n = tc(t);
    (n[0] = Sg(n[0] + e)), (n = ic(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
}
function wv(t) {
    if (!t) return;
    const e = tc(t),
        n = e[0],
        i = Wf(e[1]),
        r = Wf(e[2]);
    return t.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${jt(t.a)})` : `hsl(${n}, ${i}%, ${r}%)`;
}
const Uf = {
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
    $f = {
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
function Sv() {
    const t = {},
        e = Object.keys($f),
        n = Object.keys(Uf);
    let i, r, s, o, l;
    for (i = 0; i < e.length; i++) {
        for (o = l = e[i], r = 0; r < n.length; r++) (s = n[r]), (l = l.replace(s, Uf[s]));
        (s = parseInt($f[o], 16)), (t[l] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
    }
    return t;
}
let zs;
function kv(t) {
    zs || ((zs = Sv()), (zs.transparent = [0, 0, 0, 0]));
    const e = zs[t.toLowerCase()];
    return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const Cv =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function bv(t) {
    const e = Cv.exec(t);
    let n = 255,
        i,
        r,
        s;
    if (!!e) {
        if (e[7] !== i) {
            const o = +e[7];
            n = e[8] ? vr(o) : an(o * 255, 0, 255);
        }
        return (
            (i = +e[1]),
            (r = +e[3]),
            (s = +e[5]),
            (i = 255 & (e[2] ? vr(i) : an(i, 0, 255))),
            (r = 255 & (e[4] ? vr(r) : an(r, 0, 255))),
            (s = 255 & (e[6] ? vr(s) : an(s, 0, 255))),
            { r: i, g: r, b: s, a: n }
        );
    }
}
function Mv(t) {
    return (
        t &&
        (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${jt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`)
    );
}
const Ul = (t) => (t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055),
    di = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
function Ev(t, e, n) {
    const i = di(jt(t.r)),
        r = di(jt(t.g)),
        s = di(jt(t.b));
    return {
        r: wn(Ul(i + n * (di(jt(e.r)) - i))),
        g: wn(Ul(r + n * (di(jt(e.g)) - r))),
        b: wn(Ul(s + n * (di(jt(e.b)) - s))),
        a: t.a + n * (e.a - t.a),
    };
}
function Is(t, e, n) {
    if (t) {
        let i = tc(t);
        (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1))),
            (i = ic(i)),
            (t.r = i[0]),
            (t.g = i[1]),
            (t.b = i[2]);
    }
}
function kg(t, e) {
    return t && Object.assign(e || {}, t);
}
function Yf(t) {
    var e = { r: 0, g: 0, b: 0, a: 255 };
    return (
        Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = wn(t[3])))
            : ((e = kg(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = wn(e.a))),
        e
    );
}
function Pv(t) {
    return t.charAt(0) === 'r' ? bv(t) : xv(t);
}
class Jr {
    constructor(e) {
        if (e instanceof Jr) return e;
        const n = typeof e;
        let i;
        n === 'object' ? (i = Yf(e)) : n === 'string' && (i = cv(e) || kv(e) || Pv(e)),
            (this._rgb = i),
            (this._valid = !!i);
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var e = kg(this._rgb);
        return e && (e.a = jt(e.a)), e;
    }
    set rgb(e) {
        this._rgb = Yf(e);
    }
    rgbString() {
        return this._valid ? Mv(this._rgb) : void 0;
    }
    hexString() {
        return this._valid ? dv(this._rgb) : void 0;
    }
    hslString() {
        return this._valid ? wv(this._rgb) : void 0;
    }
    mix(e, n) {
        if (e) {
            const i = this.rgb,
                r = e.rgb;
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
    interpolate(e, n) {
        return e && (this._rgb = Ev(this._rgb, e._rgb, n)), this;
    }
    clone() {
        return new Jr(this.rgb);
    }
    alpha(e) {
        return (this._rgb.a = wn(e)), this;
    }
    clearer(e) {
        const n = this._rgb;
        return (n.a *= 1 - e), this;
    }
    greyscale() {
        const e = this._rgb,
            n = cs(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
        return (e.r = e.g = e.b = n), this;
    }
    opaquer(e) {
        const n = this._rgb;
        return (n.a *= 1 + e), this;
    }
    negate() {
        const e = this._rgb;
        return (e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this;
    }
    lighten(e) {
        return Is(this._rgb, 2, e), this;
    }
    darken(e) {
        return Is(this._rgb, 2, -e), this;
    }
    saturate(e) {
        return Is(this._rgb, 1, e), this;
    }
    desaturate(e) {
        return Is(this._rgb, 1, -e), this;
    }
    rotate(e) {
        return _v(this._rgb, e), this;
    }
}
/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function zt() {}
const Ov = (() => {
    let t = 0;
    return () => t++;
})();
function re(t) {
    return t === null || typeof t > 'u';
}
function ue(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return e.slice(0, 7) === '[object' && e.slice(-6) === 'Array]';
}
function Q(t) {
    return t !== null && Object.prototype.toString.call(t) === '[object Object]';
}
function be(t) {
    return (typeof t == 'number' || t instanceof Number) && isFinite(+t);
}
function Xe(t, e) {
    return be(t) ? t : e;
}
function V(t, e) {
    return typeof t > 'u' ? e : t;
}
const Tv = (t, e) => (typeof t == 'string' && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t);
function te(t, e, n) {
    if (t && typeof t.call == 'function') return t.apply(n, e);
}
function Z(t, e, n, i) {
    let r, s, o;
    if (ue(t))
        if (((s = t.length), i)) for (r = s - 1; r >= 0; r--) e.call(n, t[r], r);
        else for (r = 0; r < s; r++) e.call(n, t[r], r);
    else if (Q(t))
        for (o = Object.keys(t), s = o.length, r = 0; r < s; r++) e.call(n, t[o[r]], o[r]);
}
function Io(t, e) {
    let n, i, r, s;
    if (!t || !e || t.length !== e.length) return !1;
    for (n = 0, i = t.length; n < i; ++n)
        if (((r = t[n]), (s = e[n]), r.datasetIndex !== s.datasetIndex || r.index !== s.index))
            return !1;
    return !0;
}
function Fo(t) {
    if (ue(t)) return t.map(Fo);
    if (Q(t)) {
        const e = Object.create(null),
            n = Object.keys(t),
            i = n.length;
        let r = 0;
        for (; r < i; ++r) e[n[r]] = Fo(t[n[r]]);
        return e;
    }
    return t;
}
function Cg(t) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(t) === -1;
}
function Lv(t, e, n, i) {
    if (!Cg(t)) return;
    const r = e[t],
        s = n[t];
    Q(r) && Q(s) ? es(r, s, i) : (e[t] = Fo(s));
}
function es(t, e, n) {
    const i = ue(e) ? e : [e],
        r = i.length;
    if (!Q(t)) return t;
    n = n || {};
    const s = n.merger || Lv;
    let o;
    for (let l = 0; l < r; ++l) {
        if (((o = i[l]), !Q(o))) continue;
        const a = Object.keys(o);
        for (let u = 0, c = a.length; u < c; ++u) s(a[u], t, o, n);
    }
    return t;
}
function Lr(t, e) {
    return es(t, e, { merger: Dv });
}
function Dv(t, e, n) {
    if (!Cg(t)) return;
    const i = e[t],
        r = n[t];
    Q(i) && Q(r) ? Lr(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Fo(r));
}
const Kf = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
function Rv(t) {
    const e = t.split('.'),
        n = [];
    let i = '';
    for (const r of e)
        (i += r), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (n.push(i), (i = ''));
    return n;
}
function Nv(t) {
    const e = Rv(t);
    return (n) => {
        for (const i of e) {
            if (i === '') break;
            n = n && n[i];
        }
        return n;
    };
}
function Ho(t, e) {
    return (Kf[e] || (Kf[e] = Nv(e)))(t);
}
function rc(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
}
const Ct = (t) => typeof t < 'u',
    Cn = (t) => typeof t == 'function',
    Qf = (t, e) => {
        if (t.size !== e.size) return !1;
        for (const n of t) if (!e.has(n)) return !1;
        return !0;
    };
function Av(t) {
    return t.type === 'mouseup' || t.type === 'click' || t.type === 'contextmenu';
}
const Se = Math.PI,
    dt = 2 * Se,
    zv = dt + Se,
    Bo = Number.POSITIVE_INFINITY,
    Iv = Se / 180,
    $e = Se / 2,
    Nn = Se / 4,
    Xf = (Se * 2) / 3,
    un = Math.log10,
    Vi = Math.sign;
function Dr(t, e, n) {
    return Math.abs(t - e) < n;
}
function Gf(t) {
    const e = Math.round(t);
    t = Dr(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(un(t))),
        i = t / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function Fv(t) {
    const e = [],
        n = Math.sqrt(t);
    let i;
    for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i));
    return n === (n | 0) && e.push(n), e.sort((r, s) => r - s).pop(), e;
}
function ts(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
}
function Hv(t, e) {
    const n = Math.round(t);
    return n - e <= t && n + e >= t;
}
function bg(t, e, n) {
    let i, r, s;
    for (i = 0, r = t.length; i < r; i++)
        (s = t[i][n]), isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
}
function cn(t) {
    return t * (Se / 180);
}
function sc(t) {
    return t * (180 / Se);
}
function Zf(t) {
    if (!be(t)) return;
    let e = 1,
        n = 0;
    for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
    return n;
}
function Bv(t, e) {
    const n = e.x - t.x,
        i = e.y - t.y,
        r = Math.sqrt(n * n + i * i);
    let s = Math.atan2(i, n);
    return s < -0.5 * Se && (s += dt), { angle: s, distance: r };
}
function Xa(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function jv(t, e) {
    return ((t - e + zv) % dt) - Se;
}
function yt(t) {
    return ((t % dt) + dt) % dt;
}
function Mg(t, e, n, i) {
    const r = yt(t),
        s = yt(e),
        o = yt(n),
        l = yt(s - r),
        a = yt(o - r),
        u = yt(r - s),
        c = yt(r - o);
    return r === s || r === o || (i && s === o) || (l > a && u < c);
}
function ut(t, e, n) {
    return Math.max(e, Math.min(n, t));
}
function Vv(t) {
    return ut(t, -32768, 32767);
}
function yr(t, e, n, i = 1e-6) {
    return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
}
function oc(t, e, n) {
    n = n || ((o) => t[o] < e);
    let i = t.length - 1,
        r = 0,
        s;
    for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
    return { lo: r, hi: i };
}
const $n = (t, e, n, i) =>
        oc(
            t,
            n,
            i
                ? (r) => {
                      const s = t[r][e];
                      return s < n || (s === n && t[r + 1][e] === n);
                  }
                : (r) => t[r][e] < n
        ),
    Wv = (t, e, n) => oc(t, n, (i) => t[i][e] >= n);
function Uv(t, e, n) {
    let i = 0,
        r = t.length;
    for (; i < r && t[i] < e; ) i++;
    for (; r > i && t[r - 1] > n; ) r--;
    return i > 0 || r < t.length ? t.slice(i, r) : t;
}
const Eg = ['push', 'pop', 'shift', 'splice', 'unshift'];
function $v(t, e) {
    if (t._chartjs) {
        t._chartjs.listeners.push(e);
        return;
    }
    Object.defineProperty(t, '_chartjs', {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [e] },
    }),
        Eg.forEach((n) => {
            const i = '_onData' + rc(n),
                r = t[n];
            Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !1,
                value(...s) {
                    const o = r.apply(this, s);
                    return (
                        t._chartjs.listeners.forEach((l) => {
                            typeof l[i] == 'function' && l[i](...s);
                        }),
                        o
                    );
                },
            });
        });
}
function qf(t, e) {
    const n = t._chartjs;
    if (!n) return;
    const i = n.listeners,
        r = i.indexOf(e);
    r !== -1 && i.splice(r, 1),
        !(i.length > 0) &&
            (Eg.forEach((s) => {
                delete t[s];
            }),
            delete t._chartjs);
}
function Yv(t) {
    const e = new Set();
    let n, i;
    for (n = 0, i = t.length; n < i; ++n) e.add(t[n]);
    return e.size === i ? t : Array.from(e);
}
const Pg = (function () {
    return typeof window > 'u'
        ? function (t) {
              return t();
          }
        : window.requestAnimationFrame;
})();
function Og(t, e) {
    let n = [],
        i = !1;
    return function (...r) {
        (n = r),
            i ||
                ((i = !0),
                Pg.call(window, () => {
                    (i = !1), t.apply(e, n);
                }));
    };
}
function Kv(t, e) {
    let n;
    return function (...i) {
        return e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e;
    };
}
const lc = (t) => (t === 'start' ? 'left' : t === 'end' ? 'right' : 'center'),
    Re = (t, e, n) => (t === 'start' ? e : t === 'end' ? n : (e + n) / 2),
    Qv = (t, e, n, i) => (t === (i ? 'left' : 'right') ? n : t === 'center' ? (e + n) / 2 : e);
function Xv(t, e, n) {
    const i = e.length;
    let r = 0,
        s = i;
    if (t._sorted) {
        const { iScale: o, _parsed: l } = t,
            a = o.axis,
            { min: u, max: c, minDefined: f, maxDefined: d } = o.getUserBounds();
        f &&
            (r = ut(
                Math.min($n(l, o.axis, u).lo, n ? i : $n(e, a, o.getPixelForValue(u)).lo),
                0,
                i - 1
            )),
            d
                ? (s =
                      ut(
                          Math.max(
                              $n(l, o.axis, c, !0).hi + 1,
                              n ? 0 : $n(e, a, o.getPixelForValue(c), !0).hi + 1
                          ),
                          r,
                          i
                      ) - r)
                : (s = i - r);
    }
    return { start: r, count: s };
}
function Gv(t) {
    const { xScale: e, yScale: n, _scaleRanges: i } = t,
        r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
    if (!i) return (t._scaleRanges = r), !0;
    const s = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max;
    return Object.assign(i, r), s;
}
const Fs = (t) => t === 0 || t === 1,
    Jf = (t, e, n) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * dt) / n)),
    ed = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * dt) / n) + 1,
    Rr = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => -t * (t - 2),
        easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => (t -= 1) * t * t + 1,
        easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
        easeInOutQuart: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
        easeInOutQuint: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
        easeInSine: (t) => -Math.cos(t * $e) + 1,
        easeOutSine: (t) => Math.sin(t * $e),
        easeInOutSine: (t) => -0.5 * (Math.cos(Se * t) - 1),
        easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
        easeOutExpo: (t) => (t === 1 ? 1 : -Math.pow(2, -10 * t) + 1),
        easeInOutExpo: (t) =>
            Fs(t)
                ? t
                : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (t * 2 - 1))
                : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
        easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
        easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
        easeInOutCirc: (t) =>
            (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
        easeInElastic: (t) => (Fs(t) ? t : Jf(t, 0.075, 0.3)),
        easeOutElastic: (t) => (Fs(t) ? t : ed(t, 0.075, 0.3)),
        easeInOutElastic(t) {
            return Fs(t)
                ? t
                : t < 0.5
                ? 0.5 * Jf(t * 2, 0.1125, 0.45)
                : 0.5 + 0.5 * ed(t * 2 - 1, 0.1125, 0.45);
        },
        easeInBack(t) {
            return t * t * ((1.70158 + 1) * t - 1.70158);
        },
        easeOutBack(t) {
            return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1;
        },
        easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
                ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
                : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
        },
        easeInBounce: (t) => 1 - Rr.easeOutBounce(1 - t),
        easeOutBounce(t) {
            return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        },
        easeInOutBounce: (t) =>
            t < 0.5 ? Rr.easeInBounce(t * 2) * 0.5 : Rr.easeOutBounce(t * 2 - 1) * 0.5 + 0.5,
    };
function Tg(t) {
    if (t && typeof t == 'object') {
        const e = t.toString();
        return e === '[object CanvasPattern]' || e === '[object CanvasGradient]';
    }
    return !1;
}
function td(t) {
    return Tg(t) ? t : new Jr(t);
}
function $l(t) {
    return Tg(t) ? t : new Jr(t).saturate(0.5).darken(0.1).hexString();
}
const Zv = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    qv = ['color', 'borderColor', 'backgroundColor'];
function Jv(t) {
    t.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
    }),
        t.describe('animation', {
            _fallback: !1,
            _indexable: !1,
            _scriptable: (e) => e !== 'onProgress' && e !== 'onComplete' && e !== 'fn',
        }),
        t.set('animations', {
            colors: { type: 'color', properties: qv },
            numbers: { type: 'number', properties: Zv },
        }),
        t.describe('animations', { _fallback: 'animation' }),
        t.set('transitions', {
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
                    visible: { type: 'boolean', easing: 'linear', fn: (e) => e | 0 },
                },
            },
        });
}
function ey(t) {
    t.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
}
const nd = new Map();
function ty(t, e) {
    e = e || {};
    const n = t + JSON.stringify(e);
    let i = nd.get(n);
    return i || ((i = new Intl.NumberFormat(t, e)), nd.set(n, i)), i;
}
function ac(t, e, n) {
    return ty(e, n).format(t);
}
const Lg = {
    values(t) {
        return ue(t) ? t : '' + t;
    },
    numeric(t, e, n) {
        if (t === 0) return '0';
        const i = this.chart.options.locale;
        let r,
            s = t;
        if (n.length > 1) {
            const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
            (u < 1e-4 || u > 1e15) && (r = 'scientific'), (s = ny(t, n));
        }
        const o = un(Math.abs(s)),
            l = Math.max(Math.min(-1 * Math.floor(o), 20), 0),
            a = { notation: r, minimumFractionDigits: l, maximumFractionDigits: l };
        return Object.assign(a, this.options.ticks.format), ac(t, i, a);
    },
    logarithmic(t, e, n) {
        if (t === 0) return '0';
        const i = n[e].significand || t / Math.pow(10, Math.floor(un(t)));
        return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
            ? Lg.numeric.call(this, t, e, n)
            : '';
    },
};
function ny(t, e) {
    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
    return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
}
var fl = { formatters: Lg };
function iy(t) {
    t.set('scale', {
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
            tickWidth: (e, n) => n.lineWidth,
            tickColor: (e, n) => n.color,
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
            callback: fl.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: !1,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2,
        },
    }),
        t.route('scale.ticks', 'color', '', 'color'),
        t.route('scale.grid', 'color', '', 'borderColor'),
        t.route('scale.border', 'color', '', 'borderColor'),
        t.route('scale.title', 'color', '', 'color'),
        t.describe('scale', {
            _fallback: !1,
            _scriptable: (e) =>
                !e.startsWith('before') &&
                !e.startsWith('after') &&
                e !== 'callback' &&
                e !== 'parser',
            _indexable: (e) => e !== 'borderDash' && e !== 'tickBorderDash' && e !== 'dash',
        }),
        t.describe('scales', { _fallback: 'scale' }),
        t.describe('scale.ticks', {
            _scriptable: (e) => e !== 'backdropPadding' && e !== 'callback',
            _indexable: (e) => e !== 'backdropPadding',
        });
}
const ei = Object.create(null),
    Ga = Object.create(null);
function Nr(t, e) {
    if (!e) return t;
    const n = e.split('.');
    for (let i = 0, r = n.length; i < r; ++i) {
        const s = n[i];
        t = t[s] || (t[s] = Object.create(null));
    }
    return t;
}
function Yl(t, e, n) {
    return typeof e == 'string' ? es(Nr(t, e), n) : es(Nr(t, ''), e);
}
class ry {
    constructor(e, n) {
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
            (this.hoverBackgroundColor = (i, r) => $l(r.backgroundColor)),
            (this.hoverBorderColor = (i, r) => $l(r.borderColor)),
            (this.hoverColor = (i, r) => $l(r.color)),
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
            this.describe(e),
            this.apply(n);
    }
    set(e, n) {
        return Yl(this, e, n);
    }
    get(e) {
        return Nr(this, e);
    }
    describe(e, n) {
        return Yl(Ga, e, n);
    }
    override(e, n) {
        return Yl(ei, e, n);
    }
    route(e, n, i, r) {
        const s = Nr(this, e),
            o = Nr(this, i),
            l = '_' + n;
        Object.defineProperties(s, {
            [l]: { value: s[n], writable: !0 },
            [n]: {
                enumerable: !0,
                get() {
                    const a = this[l],
                        u = o[r];
                    return Q(a) ? Object.assign({}, u, a) : V(a, u);
                },
                set(a) {
                    this[l] = a;
                },
            },
        });
    }
    apply(e) {
        e.forEach((n) => n(this));
    }
}
var me = new ry(
    {
        _scriptable: (t) => !t.startsWith('on'),
        _indexable: (t) => t !== 'events',
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
    },
    [Jv, ey, iy]
);
function sy(t) {
    return !t || re(t.size) || re(t.family)
        ? null
        : (t.style ? t.style + ' ' : '') +
              (t.weight ? t.weight + ' ' : '') +
              t.size +
              'px ' +
              t.family;
}
function jo(t, e, n, i, r) {
    let s = e[r];
    return s || ((s = e[r] = t.measureText(r).width), n.push(r)), s > i && (i = s), i;
}
function oy(t, e, n, i) {
    i = i || {};
    let r = (i.data = i.data || {}),
        s = (i.garbageCollect = i.garbageCollect || []);
    i.font !== e && ((r = i.data = {}), (s = i.garbageCollect = []), (i.font = e)),
        t.save(),
        (t.font = e);
    let o = 0;
    const l = n.length;
    let a, u, c, f, d;
    for (a = 0; a < l; a++)
        if (((f = n[a]), f != null && ue(f) !== !0)) o = jo(t, r, s, o, f);
        else if (ue(f))
            for (u = 0, c = f.length; u < c; u++)
                (d = f[u]), d != null && !ue(d) && (o = jo(t, r, s, o, d));
    t.restore();
    const h = s.length / 2;
    if (h > n.length) {
        for (a = 0; a < h; a++) delete r[s[a]];
        s.splice(0, h);
    }
    return o;
}
function An(t, e, n) {
    const i = t.currentDevicePixelRatio,
        r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
    return Math.round((e - r) * i) / i + r;
}
function id(t, e) {
    (e = e || t.getContext('2d')),
        e.save(),
        e.resetTransform(),
        e.clearRect(0, 0, t.width, t.height),
        e.restore();
}
function Za(t, e, n, i) {
    Dg(t, e, n, i, null);
}
function Dg(t, e, n, i, r) {
    let s, o, l, a, u, c, f, d;
    const h = e.pointStyle,
        m = e.rotation,
        v = e.radius;
    let x = (m || 0) * Iv;
    if (
        h &&
        typeof h == 'object' &&
        ((s = h.toString()),
        s === '[object HTMLImageElement]' || s === '[object HTMLCanvasElement]')
    ) {
        t.save(),
            t.translate(n, i),
            t.rotate(x),
            t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
            t.restore();
        return;
    }
    if (!(isNaN(v) || v <= 0)) {
        switch ((t.beginPath(), h)) {
            default:
                r ? t.ellipse(n, i, r / 2, v, 0, 0, dt) : t.arc(n, i, v, 0, dt), t.closePath();
                break;
            case 'triangle':
                (c = r ? r / 2 : v),
                    t.moveTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
                    (x += Xf),
                    t.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
                    (x += Xf),
                    t.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
                    t.closePath();
                break;
            case 'rectRounded':
                (u = v * 0.516),
                    (a = v - u),
                    (o = Math.cos(x + Nn) * a),
                    (f = Math.cos(x + Nn) * (r ? r / 2 - u : a)),
                    (l = Math.sin(x + Nn) * a),
                    (d = Math.sin(x + Nn) * (r ? r / 2 - u : a)),
                    t.arc(n - f, i - l, u, x - Se, x - $e),
                    t.arc(n + d, i - o, u, x - $e, x),
                    t.arc(n + f, i + l, u, x, x + $e),
                    t.arc(n - d, i + o, u, x + $e, x + Se),
                    t.closePath();
                break;
            case 'rect':
                if (!m) {
                    (a = Math.SQRT1_2 * v), (c = r ? r / 2 : a), t.rect(n - c, i - a, 2 * c, 2 * a);
                    break;
                }
                x += Nn;
            case 'rectRot':
                (f = Math.cos(x) * (r ? r / 2 : v)),
                    (o = Math.cos(x) * v),
                    (l = Math.sin(x) * v),
                    (d = Math.sin(x) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + d, i - o),
                    t.lineTo(n + f, i + l),
                    t.lineTo(n - d, i + o),
                    t.closePath();
                break;
            case 'crossRot':
                x += Nn;
            case 'cross':
                (f = Math.cos(x) * (r ? r / 2 : v)),
                    (o = Math.cos(x) * v),
                    (l = Math.sin(x) * v),
                    (d = Math.sin(x) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + f, i + l),
                    t.moveTo(n + d, i - o),
                    t.lineTo(n - d, i + o);
                break;
            case 'star':
                (f = Math.cos(x) * (r ? r / 2 : v)),
                    (o = Math.cos(x) * v),
                    (l = Math.sin(x) * v),
                    (d = Math.sin(x) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + f, i + l),
                    t.moveTo(n + d, i - o),
                    t.lineTo(n - d, i + o),
                    (x += Nn),
                    (f = Math.cos(x) * (r ? r / 2 : v)),
                    (o = Math.cos(x) * v),
                    (l = Math.sin(x) * v),
                    (d = Math.sin(x) * (r ? r / 2 : v)),
                    t.moveTo(n - f, i - l),
                    t.lineTo(n + f, i + l),
                    t.moveTo(n + d, i - o),
                    t.lineTo(n - d, i + o);
                break;
            case 'line':
                (o = r ? r / 2 : Math.cos(x) * v),
                    (l = Math.sin(x) * v),
                    t.moveTo(n - o, i - l),
                    t.lineTo(n + o, i + l);
                break;
            case 'dash':
                t.moveTo(n, i), t.lineTo(n + Math.cos(x) * (r ? r / 2 : v), i + Math.sin(x) * v);
                break;
            case !1:
                t.closePath();
                break;
        }
        t.fill(), e.borderWidth > 0 && t.stroke();
    }
}
function ns(t, e, n) {
    return (
        (n = n || 0.5),
        !e || (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n)
    );
}
function uc(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
}
function cc(t) {
    t.restore();
}
function ly(t, e, n, i, r) {
    if (!e) return t.lineTo(n.x, n.y);
    if (r === 'middle') {
        const s = (e.x + n.x) / 2;
        t.lineTo(s, e.y), t.lineTo(s, n.y);
    } else (r === 'after') != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
    t.lineTo(n.x, n.y);
}
function ay(t, e, n, i) {
    if (!e) return t.lineTo(n.x, n.y);
    t.bezierCurveTo(
        i ? e.cp1x : e.cp2x,
        i ? e.cp1y : e.cp2y,
        i ? n.cp2x : n.cp1x,
        i ? n.cp2y : n.cp1y,
        n.x,
        n.y
    );
}
function ti(t, e, n, i, r, s = {}) {
    const o = ue(e) ? e : [e],
        l = s.strokeWidth > 0 && s.strokeColor !== '';
    let a, u;
    for (t.save(), t.font = r.string, uy(t, s), a = 0; a < o.length; ++a)
        (u = o[a]),
            s.backdrop && fy(t, s.backdrop),
            l &&
                (s.strokeColor && (t.strokeStyle = s.strokeColor),
                re(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
                t.strokeText(u, n, i, s.maxWidth)),
            t.fillText(u, n, i, s.maxWidth),
            cy(t, n, i, u, s),
            (i += r.lineHeight);
    t.restore();
}
function uy(t, e) {
    e.translation && t.translate(e.translation[0], e.translation[1]),
        re(e.rotation) || t.rotate(e.rotation),
        e.color && (t.fillStyle = e.color),
        e.textAlign && (t.textAlign = e.textAlign),
        e.textBaseline && (t.textBaseline = e.textBaseline);
}
function cy(t, e, n, i, r) {
    if (r.strikethrough || r.underline) {
        const s = t.measureText(i),
            o = e - s.actualBoundingBoxLeft,
            l = e + s.actualBoundingBoxRight,
            a = n - s.actualBoundingBoxAscent,
            u = n + s.actualBoundingBoxDescent,
            c = r.strikethrough ? (a + u) / 2 : u;
        (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = r.decorationWidth || 2),
            t.moveTo(o, c),
            t.lineTo(l, c),
            t.stroke();
    }
}
function fy(t, e) {
    const n = t.fillStyle;
    (t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = n);
}
function Vo(t, e) {
    const { x: n, y: i, w: r, h: s, radius: o } = e;
    t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, -$e, Se, !0),
        t.lineTo(n, i + s - o.bottomLeft),
        t.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, Se, $e, !0),
        t.lineTo(n + r - o.bottomRight, i + s),
        t.arc(n + r - o.bottomRight, i + s - o.bottomRight, o.bottomRight, $e, 0, !0),
        t.lineTo(n + r, i + o.topRight),
        t.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -$e, !0),
        t.lineTo(n + o.topLeft, i);
}
const dy = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    hy = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function py(t, e) {
    const n = ('' + t).match(dy);
    if (!n || n[1] === 'normal') return e * 1.2;
    switch (((t = +n[2]), n[3])) {
        case 'px':
            return t;
        case '%':
            t /= 100;
            break;
    }
    return e * t;
}
const gy = (t) => +t || 0;
function Rg(t, e) {
    const n = {},
        i = Q(e),
        r = i ? Object.keys(e) : e,
        s = Q(t) ? (i ? (o) => V(t[o], t[e[o]]) : (o) => t[o]) : () => t;
    for (const o of r) n[o] = gy(s(o));
    return n;
}
function my(t) {
    return Rg(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function Ri(t) {
    return Rg(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function ze(t) {
    const e = my(t);
    return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
}
function we(t, e) {
    (t = t || {}), (e = e || me.font);
    let n = V(t.size, e.size);
    typeof n == 'string' && (n = parseInt(n, 10));
    let i = V(t.style, e.style);
    i &&
        !('' + i).match(hy) &&
        (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
    const r = {
        family: V(t.family, e.family),
        lineHeight: py(V(t.lineHeight, e.lineHeight), n),
        size: n,
        style: i,
        weight: V(t.weight, e.weight),
        string: '',
    };
    return (r.string = sy(r)), r;
}
function Hs(t, e, n, i) {
    let r = !0,
        s,
        o,
        l;
    for (s = 0, o = t.length; s < o; ++s)
        if (
            ((l = t[s]),
            l !== void 0 &&
                (e !== void 0 && typeof l == 'function' && ((l = l(e)), (r = !1)),
                n !== void 0 && ue(l) && ((l = l[n % l.length]), (r = !1)),
                l !== void 0))
        )
            return i && !r && (i.cacheable = !1), l;
}
function vy(t, e, n) {
    const { min: i, max: r } = t,
        s = Tv(e, (r - i) / 2),
        o = (l, a) => (n && l === 0 ? 0 : l + a);
    return { min: o(i, -Math.abs(s)), max: o(r, s) };
}
function Tn(t, e) {
    return Object.assign(Object.create(t), e);
}
function fc(t, e = [''], n = t, i, r = () => t[0]) {
    Ct(i) || (i = Ig('_fallback', t));
    const s = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: !0,
        _scopes: t,
        _rootScopes: n,
        _fallback: i,
        _getTarget: r,
        override: (o) => fc([o, ...t], e, n, i),
    };
    return new Proxy(s, {
        deleteProperty(o, l) {
            return delete o[l], delete o._keys, delete t[0][l], !0;
        },
        get(o, l) {
            return Ag(o, l, () => by(l, e, t, o));
        },
        getOwnPropertyDescriptor(o, l) {
            return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t[0]);
        },
        has(o, l) {
            return sd(o).includes(l);
        },
        ownKeys(o) {
            return sd(o);
        },
        set(o, l, a) {
            const u = o._storage || (o._storage = r());
            return (o[l] = u[l] = a), delete o._keys, !0;
        },
    });
}
function Wi(t, e, n, i) {
    const r = {
        _cacheable: !1,
        _proxy: t,
        _context: e,
        _subProxy: n,
        _stack: new Set(),
        _descriptors: Ng(t, i),
        setContext: (s) => Wi(t, s, n, i),
        override: (s) => Wi(t.override(s), e, n, i),
    };
    return new Proxy(r, {
        deleteProperty(s, o) {
            return delete s[o], delete t[o], !0;
        },
        get(s, o, l) {
            return Ag(s, o, () => xy(s, o, l));
        },
        getOwnPropertyDescriptor(s, o) {
            return s._descriptors.allKeys
                ? Reflect.has(t, o)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                : Reflect.getOwnPropertyDescriptor(t, o);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t);
        },
        has(s, o) {
            return Reflect.has(t, o);
        },
        ownKeys() {
            return Reflect.ownKeys(t);
        },
        set(s, o, l) {
            return (t[o] = l), delete s[o], !0;
        },
    });
}
function Ng(t, e = { scriptable: !0, indexable: !0 }) {
    const {
        _scriptable: n = e.scriptable,
        _indexable: i = e.indexable,
        _allKeys: r = e.allKeys,
    } = t;
    return {
        allKeys: r,
        scriptable: n,
        indexable: i,
        isScriptable: Cn(n) ? n : () => n,
        isIndexable: Cn(i) ? i : () => i,
    };
}
const yy = (t, e) => (t ? t + rc(e) : e),
    dc = (t, e) =>
        Q(e) && t !== 'adapters' && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function Ag(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    const i = n();
    return (t[e] = i), i;
}
function xy(t, e, n) {
    const { _proxy: i, _context: r, _subProxy: s, _descriptors: o } = t;
    let l = i[e];
    return (
        Cn(l) && o.isScriptable(e) && (l = _y(e, l, t, n)),
        ue(l) && l.length && (l = wy(e, l, t, o.isIndexable)),
        dc(e, l) && (l = Wi(l, r, s && s[e], o)),
        l
    );
}
function _y(t, e, n, i) {
    const { _proxy: r, _context: s, _subProxy: o, _stack: l } = n;
    if (l.has(t)) throw new Error('Recursion detected: ' + Array.from(l).join('->') + '->' + t);
    return l.add(t), (e = e(s, o || i)), l.delete(t), dc(t, e) && (e = hc(r._scopes, r, t, e)), e;
}
function wy(t, e, n, i) {
    const { _proxy: r, _context: s, _subProxy: o, _descriptors: l } = n;
    if (Ct(s.index) && i(t)) e = e[s.index % e.length];
    else if (Q(e[0])) {
        const a = e,
            u = r._scopes.filter((c) => c !== a);
        e = [];
        for (const c of a) {
            const f = hc(u, r, t, c);
            e.push(Wi(f, s, o && o[t], l));
        }
    }
    return e;
}
function zg(t, e, n) {
    return Cn(t) ? t(e, n) : t;
}
const Sy = (t, e) => (t === !0 ? e : typeof t == 'string' ? Ho(e, t) : void 0);
function ky(t, e, n, i, r) {
    for (const s of e) {
        const o = Sy(n, s);
        if (o) {
            t.add(o);
            const l = zg(o._fallback, n, r);
            if (Ct(l) && l !== n && l !== i) return l;
        } else if (o === !1 && Ct(i) && n !== i) return null;
    }
    return !1;
}
function hc(t, e, n, i) {
    const r = e._rootScopes,
        s = zg(e._fallback, n, i),
        o = [...t, ...r],
        l = new Set();
    l.add(i);
    let a = rd(l, o, n, s || n, i);
    return a === null || (Ct(s) && s !== n && ((a = rd(l, o, s, a, i)), a === null))
        ? !1
        : fc(Array.from(l), [''], r, s, () => Cy(e, n, i));
}
function rd(t, e, n, i, r) {
    for (; n; ) n = ky(t, e, n, i, r);
    return n;
}
function Cy(t, e, n) {
    const i = t._getTarget();
    e in i || (i[e] = {});
    const r = i[e];
    return ue(r) && Q(n) ? n : r || {};
}
function by(t, e, n, i) {
    let r;
    for (const s of e) if (((r = Ig(yy(s, t), n)), Ct(r))) return dc(t, r) ? hc(n, i, t, r) : r;
}
function Ig(t, e) {
    for (const n of e) {
        if (!n) continue;
        const i = n[t];
        if (Ct(i)) return i;
    }
}
function sd(t) {
    let e = t._keys;
    return e || (e = t._keys = My(t._scopes)), e;
}
function My(t) {
    const e = new Set();
    for (const n of t) for (const i of Object.keys(n).filter((r) => !r.startsWith('_'))) e.add(i);
    return Array.from(e);
}
const Ey = Number.EPSILON || 1e-14,
    Ui = (t, e) => e < t.length && !t[e].skip && t[e],
    Fg = (t) => (t === 'x' ? 'y' : 'x');
function Py(t, e, n, i) {
    const r = t.skip ? e : t,
        s = e,
        o = n.skip ? e : n,
        l = Xa(s, r),
        a = Xa(o, s);
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
function Oy(t, e, n) {
    const i = t.length;
    let r,
        s,
        o,
        l,
        a,
        u = Ui(t, 0);
    for (let c = 0; c < i - 1; ++c)
        if (((a = u), (u = Ui(t, c + 1)), !(!a || !u))) {
            if (Dr(e[c], 0, Ey)) {
                n[c] = n[c + 1] = 0;
                continue;
            }
            (r = n[c] / e[c]),
                (s = n[c + 1] / e[c]),
                (l = Math.pow(r, 2) + Math.pow(s, 2)),
                !(l <= 9) &&
                    ((o = 3 / Math.sqrt(l)), (n[c] = r * o * e[c]), (n[c + 1] = s * o * e[c]));
        }
}
function Ty(t, e, n = 'x') {
    const i = Fg(n),
        r = t.length;
    let s,
        o,
        l,
        a = Ui(t, 0);
    for (let u = 0; u < r; ++u) {
        if (((o = l), (l = a), (a = Ui(t, u + 1)), !l)) continue;
        const c = l[n],
            f = l[i];
        o && ((s = (c - o[n]) / 3), (l[`cp1${n}`] = c - s), (l[`cp1${i}`] = f - s * e[u])),
            a && ((s = (a[n] - c) / 3), (l[`cp2${n}`] = c + s), (l[`cp2${i}`] = f + s * e[u]));
    }
}
function Ly(t, e = 'x') {
    const n = Fg(e),
        i = t.length,
        r = Array(i).fill(0),
        s = Array(i);
    let o,
        l,
        a,
        u = Ui(t, 0);
    for (o = 0; o < i; ++o)
        if (((l = a), (a = u), (u = Ui(t, o + 1)), !!a)) {
            if (u) {
                const c = u[e] - a[e];
                r[o] = c !== 0 ? (u[n] - a[n]) / c : 0;
            }
            s[o] = l
                ? u
                    ? Vi(r[o - 1]) !== Vi(r[o])
                        ? 0
                        : (r[o - 1] + r[o]) / 2
                    : r[o - 1]
                : r[o];
        }
    Oy(t, r, s), Ty(t, s, e);
}
function Bs(t, e, n) {
    return Math.max(Math.min(t, n), e);
}
function Dy(t, e) {
    let n,
        i,
        r,
        s,
        o,
        l = ns(t[0], e);
    for (n = 0, i = t.length; n < i; ++n)
        (o = s),
            (s = l),
            (l = n < i - 1 && ns(t[n + 1], e)),
            s &&
                ((r = t[n]),
                o &&
                    ((r.cp1x = Bs(r.cp1x, e.left, e.right)),
                    (r.cp1y = Bs(r.cp1y, e.top, e.bottom))),
                l &&
                    ((r.cp2x = Bs(r.cp2x, e.left, e.right)),
                    (r.cp2y = Bs(r.cp2y, e.top, e.bottom))));
}
function Ry(t, e, n, i, r) {
    let s, o, l, a;
    if ((e.spanGaps && (t = t.filter((u) => !u.skip)), e.cubicInterpolationMode === 'monotone'))
        Ly(t, r);
    else {
        let u = i ? t[t.length - 1] : t[0];
        for (s = 0, o = t.length; s < o; ++s)
            (l = t[s]),
                (a = Py(u, l, t[Math.min(s + 1, o - (i ? 0 : 1)) % o], e.tension)),
                (l.cp1x = a.previous.x),
                (l.cp1y = a.previous.y),
                (l.cp2x = a.next.x),
                (l.cp2y = a.next.y),
                (u = l);
    }
    e.capBezierPoints && Dy(t, n);
}
function Hg() {
    return typeof window < 'u' && typeof document < 'u';
}
function pc(t) {
    let e = t.parentNode;
    return e && e.toString() === '[object ShadowRoot]' && (e = e.host), e;
}
function Wo(t, e, n) {
    let i;
    return (
        typeof t == 'string'
            ? ((i = parseInt(t, 10)), t.indexOf('%') !== -1 && (i = (i / 100) * e.parentNode[n]))
            : (i = t),
        i
    );
}
const dl = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
function Ny(t, e) {
    return dl(t).getPropertyValue(e);
}
const Ay = ['top', 'right', 'bottom', 'left'];
function Qn(t, e, n) {
    const i = {};
    n = n ? '-' + n : '';
    for (let r = 0; r < 4; r++) {
        const s = Ay[r];
        i[s] = parseFloat(t[e + '-' + s + n]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const zy = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function Iy(t, e) {
    const n = t.touches,
        i = n && n.length ? n[0] : t,
        { offsetX: r, offsetY: s } = i;
    let o = !1,
        l,
        a;
    if (zy(r, s, t.target)) (l = r), (a = s);
    else {
        const u = e.getBoundingClientRect();
        (l = i.clientX - u.left), (a = i.clientY - u.top), (o = !0);
    }
    return { x: l, y: a, box: o };
}
function Bn(t, e) {
    if ('native' in t) return t;
    const { canvas: n, currentDevicePixelRatio: i } = e,
        r = dl(n),
        s = r.boxSizing === 'border-box',
        o = Qn(r, 'padding'),
        l = Qn(r, 'border', 'width'),
        { x: a, y: u, box: c } = Iy(t, n),
        f = o.left + (c && l.left),
        d = o.top + (c && l.top);
    let { width: h, height: m } = e;
    return (
        s && ((h -= o.width + l.width), (m -= o.height + l.height)),
        {
            x: Math.round((((a - f) / h) * n.width) / i),
            y: Math.round((((u - d) / m) * n.height) / i),
        }
    );
}
function Fy(t, e, n) {
    let i, r;
    if (e === void 0 || n === void 0) {
        const s = pc(t);
        if (!s) (e = t.clientWidth), (n = t.clientHeight);
        else {
            const o = s.getBoundingClientRect(),
                l = dl(s),
                a = Qn(l, 'border', 'width'),
                u = Qn(l, 'padding');
            (e = o.width - u.width - a.width),
                (n = o.height - u.height - a.height),
                (i = Wo(l.maxWidth, s, 'clientWidth')),
                (r = Wo(l.maxHeight, s, 'clientHeight'));
        }
    }
    return { width: e, height: n, maxWidth: i || Bo, maxHeight: r || Bo };
}
const js = (t) => Math.round(t * 10) / 10;
function Hy(t, e, n, i) {
    const r = dl(t),
        s = Qn(r, 'margin'),
        o = Wo(r.maxWidth, t, 'clientWidth') || Bo,
        l = Wo(r.maxHeight, t, 'clientHeight') || Bo,
        a = Fy(t, e, n);
    let { width: u, height: c } = a;
    if (r.boxSizing === 'content-box') {
        const d = Qn(r, 'border', 'width'),
            h = Qn(r, 'padding');
        (u -= h.width + d.width), (c -= h.height + d.height);
    }
    return (
        (u = Math.max(0, u - s.width)),
        (c = Math.max(0, i ? u / i : c - s.height)),
        (u = js(Math.min(u, o, a.maxWidth))),
        (c = js(Math.min(c, l, a.maxHeight))),
        u && !c && (c = js(u / 2)),
        (e !== void 0 || n !== void 0) &&
            i &&
            a.height &&
            c > a.height &&
            ((c = a.height), (u = js(Math.floor(c * i)))),
        { width: u, height: c }
    );
}
function od(t, e, n) {
    const i = e || 1,
        r = Math.floor(t.height * i),
        s = Math.floor(t.width * i);
    (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
    const o = t.canvas;
    return (
        o.style &&
            (n || (!o.style.height && !o.style.width)) &&
            ((o.style.height = `${t.height}px`), (o.style.width = `${t.width}px`)),
        t.currentDevicePixelRatio !== i || o.height !== r || o.width !== s
            ? ((t.currentDevicePixelRatio = i),
              (o.height = r),
              (o.width = s),
              t.ctx.setTransform(i, 0, 0, i, 0, 0),
              !0)
            : !1
    );
}
const By = (function () {
    let t = !1;
    try {
        const e = {
            get passive() {
                return (t = !0), !1;
            },
        };
        window.addEventListener('test', null, e), window.removeEventListener('test', null, e);
    } catch {}
    return t;
})();
function ld(t, e) {
    const n = Ny(t, e),
        i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
}
function jn(t, e, n, i) {
    return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
}
function jy(t, e, n, i) {
    return {
        x: t.x + n * (e.x - t.x),
        y:
            i === 'middle'
                ? n < 0.5
                    ? t.y
                    : e.y
                : i === 'after'
                ? n < 1
                    ? t.y
                    : e.y
                : n > 0
                ? e.y
                : t.y,
    };
}
function Vy(t, e, n, i) {
    const r = { x: t.cp2x, y: t.cp2y },
        s = { x: e.cp1x, y: e.cp1y },
        o = jn(t, r, n),
        l = jn(r, s, n),
        a = jn(s, e, n),
        u = jn(o, l, n),
        c = jn(l, a, n);
    return jn(u, c, n);
}
const Wy = function (t, e) {
        return {
            x(n) {
                return t + t + e - n;
            },
            setWidth(n) {
                e = n;
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
    Uy = function () {
        return {
            x(t) {
                return t;
            },
            setWidth(t) {},
            textAlign(t) {
                return t;
            },
            xPlus(t, e) {
                return t + e;
            },
            leftForLtr(t, e) {
                return t;
            },
        };
    };
function Ni(t, e, n) {
    return t ? Wy(e, n) : Uy();
}
function Bg(t, e) {
    let n, i;
    (e === 'ltr' || e === 'rtl') &&
        ((n = t.canvas.style),
        (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
        n.setProperty('direction', e, 'important'),
        (t.prevTextDirection = i));
}
function jg(t, e) {
    e !== void 0 &&
        (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]));
}
function Vg(t) {
    return t === 'angle'
        ? { between: Mg, compare: jv, normalize: yt }
        : { between: yr, compare: (e, n) => e - n, normalize: (e) => e };
}
function ad({ start: t, end: e, count: n, loop: i, style: r }) {
    return { start: t % n, end: e % n, loop: i && (e - t + 1) % n === 0, style: r };
}
function $y(t, e, n) {
    const { property: i, start: r, end: s } = n,
        { between: o, normalize: l } = Vg(i),
        a = e.length;
    let { start: u, end: c, loop: f } = t,
        d,
        h;
    if (f) {
        for (u += a, c += a, d = 0, h = a; d < h && o(l(e[u % a][i]), r, s); ++d) u--, c--;
        (u %= a), (c %= a);
    }
    return c < u && (c += a), { start: u, end: c, loop: f, style: t.style };
}
function Yy(t, e, n) {
    if (!n) return [t];
    const { property: i, start: r, end: s } = n,
        o = e.length,
        { compare: l, between: a, normalize: u } = Vg(i),
        { start: c, end: f, loop: d, style: h } = $y(t, e, n),
        m = [];
    let v = !1,
        x = null,
        g,
        p,
        y;
    const _ = () => a(r, y, g) && l(r, y) !== 0,
        w = () => l(s, g) === 0 || a(s, y, g),
        S = () => v || _(),
        k = () => !v || w();
    for (let C = c, E = c; C <= f; ++C)
        (p = e[C % o]),
            !p.skip &&
                ((g = u(p[i])),
                g !== y &&
                    ((v = a(g, r, s)),
                    x === null && S() && (x = l(g, r) === 0 ? C : E),
                    x !== null &&
                        k() &&
                        (m.push(ad({ start: x, end: C, loop: d, count: o, style: h })), (x = null)),
                    (E = C),
                    (y = g)));
    return x !== null && m.push(ad({ start: x, end: f, loop: d, count: o, style: h })), m;
}
function Ky(t, e) {
    const n = [],
        i = t.segments;
    for (let r = 0; r < i.length; r++) {
        const s = Yy(i[r], t.points, e);
        s.length && n.push(...s);
    }
    return n;
}
function Qy(t, e, n, i) {
    let r = 0,
        s = e - 1;
    if (n && !i) for (; r < e && !t[r].skip; ) r++;
    for (; r < e && t[r].skip; ) r++;
    for (r %= e, n && (s += r); s > r && t[s % e].skip; ) s--;
    return (s %= e), { start: r, end: s };
}
function Xy(t, e, n, i) {
    const r = t.length,
        s = [];
    let o = e,
        l = t[e],
        a;
    for (a = e + 1; a <= n; ++a) {
        const u = t[a % r];
        u.skip || u.stop
            ? l.skip ||
              ((i = !1),
              s.push({ start: e % r, end: (a - 1) % r, loop: i }),
              (e = o = u.stop ? a : null))
            : ((o = a), l.skip && (e = a)),
            (l = u);
    }
    return o !== null && s.push({ start: e % r, end: o % r, loop: i }), s;
}
function Gy(t, e) {
    const n = t.points,
        i = t.options.spanGaps,
        r = n.length;
    if (!r) return [];
    const s = !!t._loop,
        { start: o, end: l } = Qy(n, r, s, i);
    if (i === !0) return ud(t, [{ start: o, end: l, loop: s }], n, e);
    const a = l < o ? l + r : l,
        u = !!t._fullLoop && o === 0 && l === r - 1;
    return ud(t, Xy(n, o, a, u), n, e);
}
function ud(t, e, n, i) {
    return !i || !i.setContext || !n ? e : Zy(t, e, n, i);
}
function Zy(t, e, n, i) {
    const r = t._chart.getContext(),
        s = cd(t.options),
        {
            _datasetIndex: o,
            options: { spanGaps: l },
        } = t,
        a = n.length,
        u = [];
    let c = s,
        f = e[0].start,
        d = f;
    function h(m, v, x, g) {
        const p = l ? -1 : 1;
        if (m !== v) {
            for (m += a; n[m % a].skip; ) m -= p;
            for (; n[v % a].skip; ) v += p;
            m % a !== v % a &&
                (u.push({ start: m % a, end: v % a, loop: x, style: g }), (c = g), (f = v % a));
        }
    }
    for (const m of e) {
        f = l ? f : m.start;
        let v = n[f % a],
            x;
        for (d = f + 1; d <= m.end; d++) {
            const g = n[d % a];
            (x = cd(
                i.setContext(
                    Tn(r, {
                        type: 'segment',
                        p0: v,
                        p1: g,
                        p0DataIndex: (d - 1) % a,
                        p1DataIndex: d % a,
                        datasetIndex: o,
                    })
                )
            )),
                qy(x, c) && h(f, d - 1, m.loop, c),
                (v = g),
                (c = x);
        }
        f < d - 1 && h(f, d - 1, m.loop, c);
    }
    return u;
}
function cd(t) {
    return {
        backgroundColor: t.backgroundColor,
        borderCapStyle: t.borderCapStyle,
        borderDash: t.borderDash,
        borderDashOffset: t.borderDashOffset,
        borderJoinStyle: t.borderJoinStyle,
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
    };
}
function qy(t, e) {
    return e && JSON.stringify(t) !== JSON.stringify(e);
}
/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class Jy {
    constructor() {
        (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
    }
    _notify(e, n, i, r) {
        const s = n.listeners[r],
            o = n.duration;
        s.forEach((l) =>
            l({ chart: e, initial: n.initial, numSteps: o, currentStep: Math.min(i - n.start, o) })
        );
    }
    _refresh() {
        this._request ||
            ((this._running = !0),
            (this._request = Pg.call(window, () => {
                this._update(), (this._request = null), this._running && this._refresh();
            })));
    }
    _update(e = Date.now()) {
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
                        ? (a._total > i.duration && (i.duration = a._total), a.tick(e), (l = !0))
                        : ((s[o] = s[s.length - 1]), s.pop());
            l && (r.draw(), this._notify(r, i, e, 'progress')),
                s.length || ((i.running = !1), this._notify(r, i, e, 'complete'), (i.initial = !1)),
                (n += s.length);
        }),
            (this._lastDate = e),
            n === 0 && (this._running = !1);
    }
    _getAnims(e) {
        const n = this._charts;
        let i = n.get(e);
        return (
            i ||
                ((i = {
                    running: !1,
                    initial: !0,
                    items: [],
                    listeners: { complete: [], progress: [] },
                }),
                n.set(e, i)),
            i
        );
    }
    listen(e, n, i) {
        this._getAnims(e).listeners[n].push(i);
    }
    add(e, n) {
        !n || !n.length || this._getAnims(e).items.push(...n);
    }
    has(e) {
        return this._getAnims(e).items.length > 0;
    }
    start(e) {
        const n = this._charts.get(e);
        !n ||
            ((n.running = !0),
            (n.start = Date.now()),
            (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
            this._refresh());
    }
    running(e) {
        if (!this._running) return !1;
        const n = this._charts.get(e);
        return !(!n || !n.running || !n.items.length);
    }
    stop(e) {
        const n = this._charts.get(e);
        if (!n || !n.items.length) return;
        const i = n.items;
        let r = i.length - 1;
        for (; r >= 0; --r) i[r].cancel();
        (n.items = []), this._notify(e, n, Date.now(), 'complete');
    }
    remove(e) {
        return this._charts.delete(e);
    }
}
var It = new Jy();
const fd = 'transparent',
    e2 = {
        boolean(t, e, n) {
            return n > 0.5 ? e : t;
        },
        color(t, e, n) {
            const i = td(t || fd),
                r = i.valid && td(e || fd);
            return r && r.valid ? r.mix(i, n).hexString() : e;
        },
        number(t, e, n) {
            return t + (e - t) * n;
        },
    };
class t2 {
    constructor(e, n, i, r) {
        const s = n[i];
        r = Hs([e.to, r, s, e.from]);
        const o = Hs([e.from, s, r]);
        (this._active = !0),
            (this._fn = e.fn || e2[e.type || typeof o]),
            (this._easing = Rr[e.easing] || Rr.linear),
            (this._start = Math.floor(Date.now() + (e.delay || 0))),
            (this._duration = this._total = Math.floor(e.duration)),
            (this._loop = !!e.loop),
            (this._target = n),
            (this._prop = i),
            (this._from = o),
            (this._to = r),
            (this._promises = void 0);
    }
    active() {
        return this._active;
    }
    update(e, n, i) {
        if (this._active) {
            this._notify(!1);
            const r = this._target[this._prop],
                s = i - this._start,
                o = this._duration - s;
            (this._start = i),
                (this._duration = Math.floor(Math.max(o, e.duration))),
                (this._total += s),
                (this._loop = !!e.loop),
                (this._to = Hs([e.to, n, r, e.from])),
                (this._from = Hs([e.from, r, n]));
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(e) {
        const n = e - this._start,
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
        const e = this._promises || (this._promises = []);
        return new Promise((n, i) => {
            e.push({ res: n, rej: i });
        });
    }
    _notify(e) {
        const n = e ? 'res' : 'rej',
            i = this._promises || [];
        for (let r = 0; r < i.length; r++) i[r][n]();
    }
}
class Wg {
    constructor(e, n) {
        (this._chart = e), (this._properties = new Map()), this.configure(n);
    }
    configure(e) {
        if (!Q(e)) return;
        const n = Object.keys(me.animation),
            i = this._properties;
        Object.getOwnPropertyNames(e).forEach((r) => {
            const s = e[r];
            if (!Q(s)) return;
            const o = {};
            for (const l of n) o[l] = s[l];
            ((ue(s.properties) && s.properties) || [r]).forEach((l) => {
                (l === r || !i.has(l)) && i.set(l, o);
            });
        });
    }
    _animateOptions(e, n) {
        const i = n.options,
            r = i2(e, i);
        if (!r) return [];
        const s = this._createAnimations(r, i);
        return (
            i.$shared &&
                n2(e.options.$animations, i).then(
                    () => {
                        e.options = i;
                    },
                    () => {}
                ),
            s
        );
    }
    _createAnimations(e, n) {
        const i = this._properties,
            r = [],
            s = e.$animations || (e.$animations = {}),
            o = Object.keys(n),
            l = Date.now();
        let a;
        for (a = o.length - 1; a >= 0; --a) {
            const u = o[a];
            if (u.charAt(0) === '$') continue;
            if (u === 'options') {
                r.push(...this._animateOptions(e, n));
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
                e[u] = c;
                continue;
            }
            (s[u] = f = new t2(d, e, u, c)), r.push(f);
        }
        return r;
    }
    update(e, n) {
        if (this._properties.size === 0) {
            Object.assign(e, n);
            return;
        }
        const i = this._createAnimations(e, n);
        if (i.length) return It.add(this._chart, i), !0;
    }
}
function n2(t, e) {
    const n = [],
        i = Object.keys(e);
    for (let r = 0; r < i.length; r++) {
        const s = t[i[r]];
        s && s.active() && n.push(s.wait());
    }
    return Promise.all(n);
}
function i2(t, e) {
    if (!e) return;
    let n = t.options;
    if (!n) {
        t.options = e;
        return;
    }
    return n.$shared && (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n;
}
function dd(t, e) {
    const n = (t && t.options) || {},
        i = n.reverse,
        r = n.min === void 0 ? e : 0,
        s = n.max === void 0 ? e : 0;
    return { start: i ? s : r, end: i ? r : s };
}
function r2(t, e, n) {
    if (n === !1) return !1;
    const i = dd(t, n),
        r = dd(e, n);
    return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function s2(t) {
    let e, n, i, r;
    return (
        Q(t) ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left)) : (e = n = i = r = t),
        { top: e, right: n, bottom: i, left: r, disabled: t === !1 }
    );
}
function Ug(t, e) {
    const n = [],
        i = t._getSortedDatasetMetas(e);
    let r, s;
    for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
    return n;
}
function hd(t, e, n, i = {}) {
    const r = t.keys,
        s = i.mode === 'single';
    let o, l, a, u;
    if (e !== null) {
        for (o = 0, l = r.length; o < l; ++o) {
            if (((a = +r[o]), a === n)) {
                if (i.all) continue;
                break;
            }
            (u = t.values[a]), be(u) && (s || e === 0 || Vi(e) === Vi(u)) && (e += u);
        }
        return e;
    }
}
function o2(t) {
    const e = Object.keys(t),
        n = new Array(e.length);
    let i, r, s;
    for (i = 0, r = e.length; i < r; ++i) (s = e[i]), (n[i] = { x: s, y: t[s] });
    return n;
}
function pd(t, e) {
    const n = t && t.options.stacked;
    return n || (n === void 0 && e.stack !== void 0);
}
function l2(t, e, n) {
    return `${t.id}.${e.id}.${n.stack || n.type}`;
}
function a2(t) {
    const { min: e, max: n, minDefined: i, maxDefined: r } = t.getUserBounds();
    return { min: i ? e : Number.NEGATIVE_INFINITY, max: r ? n : Number.POSITIVE_INFINITY };
}
function u2(t, e, n) {
    const i = t[e] || (t[e] = {});
    return i[n] || (i[n] = {});
}
function gd(t, e, n, i) {
    for (const r of e.getMatchingVisibleMetas(i).reverse()) {
        const s = t[r.index];
        if ((n && s > 0) || (!n && s < 0)) return r.index;
    }
    return null;
}
function md(t, e) {
    const { chart: n, _cachedMeta: i } = t,
        r = n._stacks || (n._stacks = {}),
        { iScale: s, vScale: o, index: l } = i,
        a = s.axis,
        u = o.axis,
        c = l2(s, o, i),
        f = e.length;
    let d;
    for (let h = 0; h < f; ++h) {
        const m = e[h],
            { [a]: v, [u]: x } = m,
            g = m._stacks || (m._stacks = {});
        (d = g[u] = u2(r, c, v)),
            (d[l] = x),
            (d._top = gd(d, o, !0, i.type)),
            (d._bottom = gd(d, o, !1, i.type));
        const p = d._visualValues || (d._visualValues = {});
        p[l] = x;
    }
}
function Kl(t, e) {
    const n = t.scales;
    return Object.keys(n)
        .filter((i) => n[i].axis === e)
        .shift();
}
function c2(t, e) {
    return Tn(t, {
        active: !1,
        dataset: void 0,
        datasetIndex: e,
        index: e,
        mode: 'default',
        type: 'dataset',
    });
}
function f2(t, e, n) {
    return Tn(t, {
        active: !1,
        dataIndex: e,
        parsed: void 0,
        raw: void 0,
        element: n,
        index: e,
        mode: 'default',
        type: 'data',
    });
}
function ar(t, e) {
    const n = t.controller.index,
        i = t.vScale && t.vScale.axis;
    if (!!i) {
        e = e || t._parsed;
        for (const r of e) {
            const s = r._stacks;
            if (!s || s[i] === void 0 || s[i][n] === void 0) return;
            delete s[i][n],
                s[i]._visualValues !== void 0 &&
                    s[i]._visualValues[n] !== void 0 &&
                    delete s[i]._visualValues[n];
        }
    }
}
const Ql = (t) => t === 'reset' || t === 'none',
    vd = (t, e) => (e ? t : Object.assign({}, t)),
    d2 = (t, e, n) => t && !e.hidden && e._stacked && { keys: Ug(n, !0), values: null };
class Ar {
    constructor(e, n) {
        (this.chart = e),
            (this._ctx = e.ctx),
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
        const e = this._cachedMeta;
        this.configure(),
            this.linkScales(),
            (e._stacked = pd(e.vScale, e)),
            this.addElements(),
            this.options.fill &&
                !this.chart.isPluginEnabled('filler') &&
                console.warn(
                    "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                );
    }
    updateIndex(e) {
        this.index !== e && ar(this._cachedMeta), (this.index = e);
    }
    linkScales() {
        const e = this.chart,
            n = this._cachedMeta,
            i = this.getDataset(),
            r = (f, d, h, m) => (f === 'x' ? d : f === 'r' ? m : h),
            s = (n.xAxisID = V(i.xAxisID, Kl(e, 'x'))),
            o = (n.yAxisID = V(i.yAxisID, Kl(e, 'y'))),
            l = (n.rAxisID = V(i.rAxisID, Kl(e, 'r'))),
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
    getScaleForId(e) {
        return this.chart.scales[e];
    }
    _getOtherScale(e) {
        const n = this._cachedMeta;
        return e === n.iScale ? n.vScale : n.iScale;
    }
    reset() {
        this._update('reset');
    }
    _destroy() {
        const e = this._cachedMeta;
        this._data && qf(this._data, this), e._stacked && ar(e);
    }
    _dataCheck() {
        const e = this.getDataset(),
            n = e.data || (e.data = []),
            i = this._data;
        if (Q(n)) this._data = o2(n);
        else if (i !== n) {
            if (i) {
                qf(i, this);
                const r = this._cachedMeta;
                ar(r), (r._parsed = []);
            }
            n && Object.isExtensible(n) && $v(n, this), (this._syncList = []), (this._data = n);
        }
    }
    addElements() {
        const e = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(e) {
        const n = this._cachedMeta,
            i = this.getDataset();
        let r = !1;
        this._dataCheck();
        const s = n._stacked;
        (n._stacked = pd(n.vScale, n)),
            n.stack !== i.stack && ((r = !0), ar(n), (n.stack = i.stack)),
            this._resyncElements(e),
            (r || s !== n._stacked) && md(this, n._parsed);
    }
    configure() {
        const e = this.chart.config,
            n = e.datasetScopeKeys(this._type),
            i = e.getOptionScopes(this.getDataset(), n, !0);
        (this.options = e.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
    }
    parse(e, n) {
        const { _cachedMeta: i, _data: r } = this,
            { iScale: s, _stacked: o } = i,
            l = s.axis;
        let a = e === 0 && n === r.length ? !0 : i._sorted,
            u = e > 0 && i._parsed[e - 1],
            c,
            f,
            d;
        if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (d = r);
        else {
            ue(r[e])
                ? (d = this.parseArrayData(i, r, e, n))
                : Q(r[e])
                ? (d = this.parseObjectData(i, r, e, n))
                : (d = this.parsePrimitiveData(i, r, e, n));
            const h = () => f[l] === null || (u && f[l] < u[l]);
            for (c = 0; c < n; ++c) (i._parsed[c + e] = f = d[c]), a && (h() && (a = !1), (u = f));
            i._sorted = a;
        }
        o && md(this, d);
    }
    parsePrimitiveData(e, n, i, r) {
        const { iScale: s, vScale: o } = e,
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
    parseArrayData(e, n, i, r) {
        const { xScale: s, yScale: o } = e,
            l = new Array(r);
        let a, u, c, f;
        for (a = 0, u = r; a < u; ++a)
            (c = a + i), (f = n[c]), (l[a] = { x: s.parse(f[0], c), y: o.parse(f[1], c) });
        return l;
    }
    parseObjectData(e, n, i, r) {
        const { xScale: s, yScale: o } = e,
            { xAxisKey: l = 'x', yAxisKey: a = 'y' } = this._parsing,
            u = new Array(r);
        let c, f, d, h;
        for (c = 0, f = r; c < f; ++c)
            (d = c + i), (h = n[d]), (u[c] = { x: s.parse(Ho(h, l), d), y: o.parse(Ho(h, a), d) });
        return u;
    }
    getParsed(e) {
        return this._cachedMeta._parsed[e];
    }
    getDataElement(e) {
        return this._cachedMeta.data[e];
    }
    applyStack(e, n, i) {
        const r = this.chart,
            s = this._cachedMeta,
            o = n[e.axis],
            l = { keys: Ug(r, !0), values: n._stacks[e.axis]._visualValues };
        return hd(l, o, s.index, { mode: i });
    }
    updateRangeFromParsed(e, n, i, r) {
        const s = i[n.axis];
        let o = s === null ? NaN : s;
        const l = r && i._stacks[n.axis];
        r && l && ((r.values = l), (o = hd(r, s, this._cachedMeta.index))),
            (e.min = Math.min(e.min, o)),
            (e.max = Math.max(e.max, o));
    }
    getMinMax(e, n) {
        const i = this._cachedMeta,
            r = i._parsed,
            s = i._sorted && e === i.iScale,
            o = r.length,
            l = this._getOtherScale(e),
            a = d2(n, i, this.chart),
            u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
            { min: c, max: f } = a2(l);
        let d, h;
        function m() {
            h = r[d];
            const v = h[l.axis];
            return !be(h[e.axis]) || c > v || f < v;
        }
        for (d = 0; d < o && !(!m() && (this.updateRangeFromParsed(u, e, h, a), s)); ++d);
        if (s) {
            for (d = o - 1; d >= 0; --d)
                if (!m()) {
                    this.updateRangeFromParsed(u, e, h, a);
                    break;
                }
        }
        return u;
    }
    getAllParsedValues(e) {
        const n = this._cachedMeta._parsed,
            i = [];
        let r, s, o;
        for (r = 0, s = n.length; r < s; ++r) (o = n[r][e.axis]), be(o) && i.push(o);
        return i;
    }
    getMaxOverflow() {
        return !1;
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta,
            i = n.iScale,
            r = n.vScale,
            s = this.getParsed(e);
        return {
            label: i ? '' + i.getLabelForValue(s[i.axis]) : '',
            value: r ? '' + r.getLabelForValue(s[r.axis]) : '',
        };
    }
    _update(e) {
        const n = this._cachedMeta;
        this.update(e || 'default'),
            (n._clip = s2(V(this.options.clip, r2(n.xScale, n.yScale, this.getMaxOverflow()))));
    }
    update(e) {}
    draw() {
        const e = this._ctx,
            n = this.chart,
            i = this._cachedMeta,
            r = i.data || [],
            s = n.chartArea,
            o = [],
            l = this._drawStart || 0,
            a = this._drawCount || r.length - l,
            u = this.options.drawActiveElementsOnTop;
        let c;
        for (i.dataset && i.dataset.draw(e, s, l, a), c = l; c < l + a; ++c) {
            const f = r[c];
            f.hidden || (f.active && u ? o.push(f) : f.draw(e, s));
        }
        for (c = 0; c < o.length; ++c) o[c].draw(e, s);
    }
    getStyle(e, n) {
        const i = n ? 'active' : 'default';
        return e === void 0 && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(e || 0, i);
    }
    getContext(e, n, i) {
        const r = this.getDataset();
        let s;
        if (e >= 0 && e < this._cachedMeta.data.length) {
            const o = this._cachedMeta.data[e];
            (s = o.$context || (o.$context = f2(this.getContext(), e, o))),
                (s.parsed = this.getParsed(e)),
                (s.raw = r.data[e]),
                (s.index = s.dataIndex = e);
        } else
            (s = this.$context || (this.$context = c2(this.chart.getContext(), this.index))),
                (s.dataset = r),
                (s.index = s.datasetIndex = this.index);
        return (s.active = !!n), (s.mode = i), s;
    }
    resolveDatasetElementOptions(e) {
        return this._resolveElementOptions(this.datasetElementType.id, e);
    }
    resolveDataElementOptions(e, n) {
        return this._resolveElementOptions(this.dataElementType.id, n, e);
    }
    _resolveElementOptions(e, n = 'default', i) {
        const r = n === 'active',
            s = this._cachedDataOpts,
            o = e + '-' + n,
            l = s[o],
            a = this.enableOptionSharing && Ct(i);
        if (l) return vd(l, a);
        const u = this.chart.config,
            c = u.datasetElementScopeKeys(this._type, e),
            f = r ? [`${e}Hover`, 'hover', e, ''] : [e, ''],
            d = u.getOptionScopes(this.getDataset(), c),
            h = Object.keys(me.elements[e]),
            m = () => this.getContext(i, r, n),
            v = u.resolveNamedOptions(d, h, m, f);
        return v.$shared && ((v.$shared = a), (s[o] = Object.freeze(vd(v, a)))), v;
    }
    _resolveAnimations(e, n, i) {
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
            a = c.createResolver(d, this.getContext(e, i, n));
        }
        const u = new Wg(r, a && a.animations);
        return a && a._cacheable && (s[o] = Object.freeze(u)), u;
    }
    getSharedOptions(e) {
        if (!!e.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
    }
    includeOptions(e, n) {
        return !n || Ql(e) || this.chart._animationsDisabled;
    }
    _getSharedOptions(e, n) {
        const i = this.resolveDataElementOptions(e, n),
            r = this._sharedOptions,
            s = this.getSharedOptions(i),
            o = this.includeOptions(n, s) || s !== r;
        return this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: o };
    }
    updateElement(e, n, i, r) {
        Ql(r) ? Object.assign(e, i) : this._resolveAnimations(n, r).update(e, i);
    }
    updateSharedOptions(e, n, i) {
        e && !Ql(n) && this._resolveAnimations(void 0, n).update(e, i);
    }
    _setStyle(e, n, i, r) {
        e.active = r;
        const s = this.getStyle(n, r);
        this._resolveAnimations(n, i, r).update(e, {
            options: (!r && this.getSharedOptions(s)) || s,
        });
    }
    removeHoverStyle(e, n, i) {
        this._setStyle(e, i, 'active', !1);
    }
    setHoverStyle(e, n, i) {
        this._setStyle(e, i, 'active', !0);
    }
    _removeDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, 'active', !1);
    }
    _setDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, 'active', !0);
    }
    _resyncElements(e) {
        const n = this._data,
            i = this._cachedMeta.data;
        for (const [l, a, u] of this._syncList) this[l](a, u);
        this._syncList = [];
        const r = i.length,
            s = n.length,
            o = Math.min(s, r);
        o && this.parse(0, o),
            s > r ? this._insertElements(r, s - r, e) : s < r && this._removeElements(s, r - s);
    }
    _insertElements(e, n, i = !0) {
        const r = this._cachedMeta,
            s = r.data,
            o = e + n;
        let l;
        const a = (u) => {
            for (u.length += n, l = u.length - 1; l >= o; l--) u[l] = u[l - n];
        };
        for (a(s), l = e; l < o; ++l) s[l] = new this.dataElementType();
        this._parsing && a(r._parsed), this.parse(e, n), i && this.updateElements(s, e, n, 'reset');
    }
    updateElements(e, n, i, r) {}
    _removeElements(e, n) {
        const i = this._cachedMeta;
        if (this._parsing) {
            const r = i._parsed.splice(e, n);
            i._stacked && ar(i, r);
        }
        i.data.splice(e, n);
    }
    _sync(e) {
        if (this._parsing) this._syncList.push(e);
        else {
            const [n, i, r] = e;
            this[n](i, r);
        }
        this.chart._dataChanges.push([this.index, ...e]);
    }
    _onDataPush() {
        const e = arguments.length;
        this._sync(['_insertElements', this.getDataset().data.length - e, e]);
    }
    _onDataPop() {
        this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
        this._sync(['_removeElements', 0, 1]);
    }
    _onDataSplice(e, n) {
        n && this._sync(['_removeElements', e, n]);
        const i = arguments.length - 2;
        i && this._sync(['_insertElements', e, i]);
    }
    _onDataUnshift() {
        this._sync(['_insertElements', 0, arguments.length]);
    }
}
B(Ar, 'defaults', {}), B(Ar, 'datasetElementType', null), B(Ar, 'dataElementType', null);
class ao extends Ar {
    initialize() {
        (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
    }
    update(e) {
        const n = this._cachedMeta,
            { dataset: i, data: r = [], _dataset: s } = n,
            o = this.chart._animationsDisabled;
        let { start: l, count: a } = Xv(n, r, o);
        (this._drawStart = l),
            (this._drawCount = a),
            Gv(n) && ((l = 0), (a = r.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!s._decimated),
            (i.points = r);
        const u = this.resolveDatasetElementOptions(e);
        this.options.showLine || (u.borderWidth = 0),
            (u.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: u }, e),
            this.updateElements(r, l, a, e);
    }
    updateElements(e, n, i, r) {
        const s = r === 'reset',
            { iScale: o, vScale: l, _stacked: a, _dataset: u } = this._cachedMeta,
            { sharedOptions: c, includeOptions: f } = this._getSharedOptions(n, r),
            d = o.axis,
            h = l.axis,
            { spanGaps: m, segment: v } = this.options,
            x = ts(m) ? m : Number.POSITIVE_INFINITY,
            g = this.chart._animationsDisabled || s || r === 'none',
            p = n + i,
            y = e.length;
        let _ = n > 0 && this.getParsed(n - 1);
        for (let w = 0; w < y; ++w) {
            const S = e[w],
                k = g ? S : {};
            if (w < n || w >= p) {
                k.skip = !0;
                continue;
            }
            const C = this.getParsed(w),
                E = re(C[h]),
                M = (k[d] = o.getPixelForValue(C[d], w)),
                R = (k[h] =
                    s || E
                        ? l.getBasePixel()
                        : l.getPixelForValue(a ? this.applyStack(l, C, a) : C[h], w));
            (k.skip = isNaN(M) || isNaN(R) || E),
                (k.stop = w > 0 && Math.abs(C[d] - _[d]) > x),
                v && ((k.parsed = C), (k.raw = u.data[w])),
                f && (k.options = c || this.resolveDataElementOptions(w, S.active ? 'active' : r)),
                g || this.updateElement(S, w, k, r),
                (_ = C);
        }
    }
    getMaxOverflow() {
        const e = this._cachedMeta,
            n = e.dataset,
            i = (n.options && n.options.borderWidth) || 0,
            r = e.data || [];
        if (!r.length) return i;
        const s = r[0].size(this.resolveDataElementOptions(0)),
            o = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
        return Math.max(i, s, o) / 2;
    }
    draw() {
        const e = this._cachedMeta;
        e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis), super.draw();
    }
}
B(ao, 'id', 'line'),
    B(ao, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: !0,
        spanGaps: !1,
    }),
    B(ao, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } });
function zn() {
    throw new Error(
        'This method is not implemented: Check that a complete date adapter is provided.'
    );
}
class gc {
    static override(e) {
        Object.assign(gc.prototype, e);
    }
    constructor(e) {
        this.options = e || {};
    }
    init() {}
    formats() {
        return zn();
    }
    parse() {
        return zn();
    }
    format() {
        return zn();
    }
    add() {
        return zn();
    }
    diff() {
        return zn();
    }
    startOf() {
        return zn();
    }
    endOf() {
        return zn();
    }
}
var h2 = { _date: gc };
function p2(t, e, n, i) {
    const { controller: r, data: s, _sorted: o } = t,
        l = r._cachedMeta.iScale;
    if (l && e === l.axis && e !== 'r' && o && s.length) {
        const a = l._reversePixels ? Wv : $n;
        if (i) {
            if (r._sharedOptions) {
                const u = s[0],
                    c = typeof u.getRange == 'function' && u.getRange(e);
                if (c) {
                    const f = a(s, e, n - c),
                        d = a(s, e, n + c);
                    return { lo: f.lo, hi: d.hi };
                }
            }
        } else return a(s, e, n);
    }
    return { lo: 0, hi: s.length - 1 };
}
function fs(t, e, n, i, r) {
    const s = t.getSortedVisibleDatasetMetas(),
        o = n[e];
    for (let l = 0, a = s.length; l < a; ++l) {
        const { index: u, data: c } = s[l],
            { lo: f, hi: d } = p2(s[l], e, o, r);
        for (let h = f; h <= d; ++h) {
            const m = c[h];
            m.skip || i(m, u, h);
        }
    }
}
function g2(t) {
    const e = t.indexOf('x') !== -1,
        n = t.indexOf('y') !== -1;
    return function (i, r) {
        const s = e ? Math.abs(i.x - r.x) : 0,
            o = n ? Math.abs(i.y - r.y) : 0;
        return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
    };
}
function Xl(t, e, n, i, r) {
    const s = [];
    return (
        (!r && !t.isPointInArea(e)) ||
            fs(
                t,
                n,
                e,
                function (l, a, u) {
                    (!r && !ns(l, t.chartArea, 0)) ||
                        (l.inRange(e.x, e.y, i) &&
                            s.push({ element: l, datasetIndex: a, index: u }));
                },
                !0
            ),
        s
    );
}
function m2(t, e, n, i) {
    let r = [];
    function s(o, l, a) {
        const { startAngle: u, endAngle: c } = o.getProps(['startAngle', 'endAngle'], i),
            { angle: f } = Bv(o, { x: e.x, y: e.y });
        Mg(f, u, c) && r.push({ element: o, datasetIndex: l, index: a });
    }
    return fs(t, n, e, s), r;
}
function v2(t, e, n, i, r, s) {
    let o = [];
    const l = g2(n);
    let a = Number.POSITIVE_INFINITY;
    function u(c, f, d) {
        const h = c.inRange(e.x, e.y, r);
        if (i && !h) return;
        const m = c.getCenterPoint(r);
        if (!(!!s || t.isPointInArea(m)) && !h) return;
        const x = l(e, m);
        x < a
            ? ((o = [{ element: c, datasetIndex: f, index: d }]), (a = x))
            : x === a && o.push({ element: c, datasetIndex: f, index: d });
    }
    return fs(t, n, e, u), o;
}
function Gl(t, e, n, i, r, s) {
    return !s && !t.isPointInArea(e) ? [] : n === 'r' && !i ? m2(t, e, n, r) : v2(t, e, n, i, r, s);
}
function yd(t, e, n, i, r) {
    const s = [],
        o = n === 'x' ? 'inXRange' : 'inYRange';
    let l = !1;
    return (
        fs(t, n, e, (a, u, c) => {
            a[o](e[n], r) &&
                (s.push({ element: a, datasetIndex: u, index: c }),
                (l = l || a.inRange(e.x, e.y, r)));
        }),
        i && !l ? [] : s
    );
}
var y2 = {
    evaluateInteractionItems: fs,
    modes: {
        index(t, e, n, i) {
            const r = Bn(e, t),
                s = n.axis || 'x',
                o = n.includeInvisible || !1,
                l = n.intersect ? Xl(t, r, s, i, o) : Gl(t, r, s, !1, i, o),
                a = [];
            return l.length
                ? (t.getSortedVisibleDatasetMetas().forEach((u) => {
                      const c = l[0].index,
                          f = u.data[c];
                      f && !f.skip && a.push({ element: f, datasetIndex: u.index, index: c });
                  }),
                  a)
                : [];
        },
        dataset(t, e, n, i) {
            const r = Bn(e, t),
                s = n.axis || 'xy',
                o = n.includeInvisible || !1;
            let l = n.intersect ? Xl(t, r, s, i, o) : Gl(t, r, s, !1, i, o);
            if (l.length > 0) {
                const a = l[0].datasetIndex,
                    u = t.getDatasetMeta(a).data;
                l = [];
                for (let c = 0; c < u.length; ++c)
                    l.push({ element: u[c], datasetIndex: a, index: c });
            }
            return l;
        },
        point(t, e, n, i) {
            const r = Bn(e, t),
                s = n.axis || 'xy',
                o = n.includeInvisible || !1;
            return Xl(t, r, s, i, o);
        },
        nearest(t, e, n, i) {
            const r = Bn(e, t),
                s = n.axis || 'xy',
                o = n.includeInvisible || !1;
            return Gl(t, r, s, n.intersect, i, o);
        },
        x(t, e, n, i) {
            const r = Bn(e, t);
            return yd(t, r, 'x', n.intersect, i);
        },
        y(t, e, n, i) {
            const r = Bn(e, t);
            return yd(t, r, 'y', n.intersect, i);
        },
    },
};
const $g = ['left', 'top', 'right', 'bottom'];
function ur(t, e) {
    return t.filter((n) => n.pos === e);
}
function xd(t, e) {
    return t.filter((n) => $g.indexOf(n.pos) === -1 && n.box.axis === e);
}
function cr(t, e) {
    return t.sort((n, i) => {
        const r = e ? i : n,
            s = e ? n : i;
        return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
    });
}
function x2(t) {
    const e = [];
    let n, i, r, s, o, l;
    for (n = 0, i = (t || []).length; n < i; ++n)
        (r = t[n]),
            ({
                position: s,
                options: { stack: o, stackWeight: l = 1 },
            } = r),
            e.push({
                index: n,
                box: r,
                pos: s,
                horizontal: r.isHorizontal(),
                weight: r.weight,
                stack: o && s + o,
                stackWeight: l,
            });
    return e;
}
function _2(t) {
    const e = {};
    for (const n of t) {
        const { stack: i, pos: r, stackWeight: s } = n;
        if (!i || !$g.includes(r)) continue;
        const o = e[i] || (e[i] = { count: 0, placed: 0, weight: 0, size: 0 });
        o.count++, (o.weight += s);
    }
    return e;
}
function w2(t, e) {
    const n = _2(t),
        { vBoxMaxWidth: i, hBoxMaxHeight: r } = e;
    let s, o, l;
    for (s = 0, o = t.length; s < o; ++s) {
        l = t[s];
        const { fullSize: a } = l.box,
            u = n[l.stack],
            c = u && l.stackWeight / u.weight;
        l.horizontal
            ? ((l.width = c ? c * i : a && e.availableWidth), (l.height = r))
            : ((l.width = i), (l.height = c ? c * r : a && e.availableHeight));
    }
    return n;
}
function S2(t) {
    const e = x2(t),
        n = cr(
            e.filter((u) => u.box.fullSize),
            !0
        ),
        i = cr(ur(e, 'left'), !0),
        r = cr(ur(e, 'right')),
        s = cr(ur(e, 'top'), !0),
        o = cr(ur(e, 'bottom')),
        l = xd(e, 'x'),
        a = xd(e, 'y');
    return {
        fullSize: n,
        leftAndTop: i.concat(s),
        rightAndBottom: r.concat(a).concat(o).concat(l),
        chartArea: ur(e, 'chartArea'),
        vertical: i.concat(r).concat(a),
        horizontal: s.concat(o).concat(l),
    };
}
function _d(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
}
function Yg(t, e) {
    (t.top = Math.max(t.top, e.top)),
        (t.left = Math.max(t.left, e.left)),
        (t.bottom = Math.max(t.bottom, e.bottom)),
        (t.right = Math.max(t.right, e.right));
}
function k2(t, e, n, i) {
    const { pos: r, box: s } = n,
        o = t.maxPadding;
    if (!Q(r)) {
        n.size && (t[r] -= n.size);
        const f = i[n.stack] || { size: 0, count: 1 };
        (f.size = Math.max(f.size, n.horizontal ? s.height : s.width)),
            (n.size = f.size / f.count),
            (t[r] += n.size);
    }
    s.getPadding && Yg(o, s.getPadding());
    const l = Math.max(0, e.outerWidth - _d(o, t, 'left', 'right')),
        a = Math.max(0, e.outerHeight - _d(o, t, 'top', 'bottom')),
        u = l !== t.w,
        c = a !== t.h;
    return (t.w = l), (t.h = a), n.horizontal ? { same: u, other: c } : { same: c, other: u };
}
function C2(t) {
    const e = t.maxPadding;
    function n(i) {
        const r = Math.max(e[i] - t[i], 0);
        return (t[i] += r), r;
    }
    (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
}
function b2(t, e) {
    const n = e.maxPadding;
    function i(r) {
        const s = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
            r.forEach((o) => {
                s[o] = Math.max(e[o], n[o]);
            }),
            s
        );
    }
    return i(t ? ['left', 'right'] : ['top', 'bottom']);
}
function xr(t, e, n, i) {
    const r = [];
    let s, o, l, a, u, c;
    for (s = 0, o = t.length, u = 0; s < o; ++s) {
        (l = t[s]), (a = l.box), a.update(l.width || e.w, l.height || e.h, b2(l.horizontal, e));
        const { same: f, other: d } = k2(e, n, l, i);
        (u |= f && r.length), (c = c || d), a.fullSize || r.push(l);
    }
    return (u && xr(r, e, n, i)) || c;
}
function Vs(t, e, n, i, r) {
    (t.top = n), (t.left = e), (t.right = e + i), (t.bottom = n + r), (t.width = i), (t.height = r);
}
function wd(t, e, n, i) {
    const r = n.padding;
    let { x: s, y: o } = e;
    for (const l of t) {
        const a = l.box,
            u = i[l.stack] || { count: 1, placed: 0, weight: 1 },
            c = l.stackWeight / u.weight || 1;
        if (l.horizontal) {
            const f = e.w * c,
                d = u.size || a.height;
            Ct(u.start) && (o = u.start),
                a.fullSize
                    ? Vs(a, r.left, o, n.outerWidth - r.right - r.left, d)
                    : Vs(a, e.left + u.placed, o, f, d),
                (u.start = o),
                (u.placed += f),
                (o = a.bottom);
        } else {
            const f = e.h * c,
                d = u.size || a.width;
            Ct(u.start) && (s = u.start),
                a.fullSize
                    ? Vs(a, s, r.top, d, n.outerHeight - r.bottom - r.top)
                    : Vs(a, s, e.top + u.placed, d, f),
                (u.start = s),
                (u.placed += f),
                (s = a.right);
        }
    }
    (e.x = s), (e.y = o);
}
var ct = {
    addBox(t, e) {
        t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || 'top'),
            (e.weight = e.weight || 0),
            (e._layers =
                e._layers ||
                function () {
                    return [
                        {
                            z: 0,
                            draw(n) {
                                e.draw(n);
                            },
                        },
                    ];
                }),
            t.boxes.push(e);
    },
    removeBox(t, e) {
        const n = t.boxes ? t.boxes.indexOf(e) : -1;
        n !== -1 && t.boxes.splice(n, 1);
    },
    configure(t, e, n) {
        (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
    },
    update(t, e, n, i) {
        if (!t) return;
        const r = ze(t.options.layout.padding),
            s = Math.max(e - r.width, 0),
            o = Math.max(n - r.height, 0),
            l = S2(t.boxes),
            a = l.vertical,
            u = l.horizontal;
        Z(t.boxes, (v) => {
            typeof v.beforeLayout == 'function' && v.beforeLayout();
        });
        const c =
                a.reduce(
                    (v, x) => (x.box.options && x.box.options.display === !1 ? v : v + 1),
                    0
                ) || 1,
            f = Object.freeze({
                outerWidth: e,
                outerHeight: n,
                padding: r,
                availableWidth: s,
                availableHeight: o,
                vBoxMaxWidth: s / 2 / c,
                hBoxMaxHeight: o / 2,
            }),
            d = Object.assign({}, r);
        Yg(d, ze(i));
        const h = Object.assign({ maxPadding: d, w: s, h: o, x: r.left, y: r.top }, r),
            m = w2(a.concat(u), f);
        xr(l.fullSize, h, f, m),
            xr(a, h, f, m),
            xr(u, h, f, m) && xr(a, h, f, m),
            C2(h),
            wd(l.leftAndTop, h, f, m),
            (h.x += h.w),
            (h.y += h.h),
            wd(l.rightAndBottom, h, f, m),
            (t.chartArea = {
                left: h.left,
                top: h.top,
                right: h.left + h.w,
                bottom: h.top + h.h,
                height: h.h,
                width: h.w,
            }),
            Z(l.chartArea, (v) => {
                const x = v.box;
                Object.assign(x, t.chartArea),
                    x.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
    },
};
class Kg {
    acquireContext(e, n) {}
    releaseContext(e) {
        return !1;
    }
    addEventListener(e, n, i) {}
    removeEventListener(e, n, i) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(e, n, i, r) {
        return (
            (n = Math.max(0, n || e.width)),
            (i = i || e.height),
            { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
        );
    }
    isAttached(e) {
        return !0;
    }
    updateConfig(e) {}
}
class M2 extends Kg {
    acquireContext(e) {
        return (e && e.getContext && e.getContext('2d')) || null;
    }
    updateConfig(e) {
        e.options.animation = !1;
    }
}
const uo = '$chartjs',
    E2 = {
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
    Sd = (t) => t === null || t === '';
function P2(t, e) {
    const n = t.style,
        i = t.getAttribute('height'),
        r = t.getAttribute('width');
    if (
        ((t[uo] = {
            initial: {
                height: i,
                width: r,
                style: { display: n.display, height: n.height, width: n.width },
            },
        }),
        (n.display = n.display || 'block'),
        (n.boxSizing = n.boxSizing || 'border-box'),
        Sd(r))
    ) {
        const s = ld(t, 'width');
        s !== void 0 && (t.width = s);
    }
    if (Sd(i))
        if (t.style.height === '') t.height = t.width / (e || 2);
        else {
            const s = ld(t, 'height');
            s !== void 0 && (t.height = s);
        }
    return t;
}
const Qg = By ? { passive: !0 } : !1;
function O2(t, e, n) {
    t.addEventListener(e, n, Qg);
}
function T2(t, e, n) {
    t.canvas.removeEventListener(e, n, Qg);
}
function L2(t, e) {
    const n = E2[t.type] || t.type,
        { x: i, y: r } = Bn(t, e);
    return { type: n, chart: e, native: t, x: i !== void 0 ? i : null, y: r !== void 0 ? r : null };
}
function Uo(t, e) {
    for (const n of t) if (n === e || n.contains(e)) return !0;
}
function D2(t, e, n) {
    const i = t.canvas,
        r = new MutationObserver((s) => {
            let o = !1;
            for (const l of s) (o = o || Uo(l.addedNodes, i)), (o = o && !Uo(l.removedNodes, i));
            o && n();
        });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function R2(t, e, n) {
    const i = t.canvas,
        r = new MutationObserver((s) => {
            let o = !1;
            for (const l of s) (o = o || Uo(l.removedNodes, i)), (o = o && !Uo(l.addedNodes, i));
            o && n();
        });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const is = new Map();
let kd = 0;
function Xg() {
    const t = window.devicePixelRatio;
    t !== kd &&
        ((kd = t),
        is.forEach((e, n) => {
            n.currentDevicePixelRatio !== t && e();
        }));
}
function N2(t, e) {
    is.size || window.addEventListener('resize', Xg), is.set(t, e);
}
function A2(t) {
    is.delete(t), is.size || window.removeEventListener('resize', Xg);
}
function z2(t, e, n) {
    const i = t.canvas,
        r = i && pc(i);
    if (!r) return;
    const s = Og((l, a) => {
            const u = r.clientWidth;
            n(l, a), u < r.clientWidth && n();
        }, window),
        o = new ResizeObserver((l) => {
            const a = l[0],
                u = a.contentRect.width,
                c = a.contentRect.height;
            (u === 0 && c === 0) || s(u, c);
        });
    return o.observe(r), N2(t, s), o;
}
function Zl(t, e, n) {
    n && n.disconnect(), e === 'resize' && A2(t);
}
function I2(t, e, n) {
    const i = t.canvas,
        r = Og((s) => {
            t.ctx !== null && n(L2(s, t));
        }, t);
    return O2(i, e, r), r;
}
class F2 extends Kg {
    acquireContext(e, n) {
        const i = e && e.getContext && e.getContext('2d');
        return i && i.canvas === e ? (P2(e, n), i) : null;
    }
    releaseContext(e) {
        const n = e.canvas;
        if (!n[uo]) return !1;
        const i = n[uo].initial;
        ['height', 'width'].forEach((s) => {
            const o = i[s];
            re(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
        });
        const r = i.style || {};
        return (
            Object.keys(r).forEach((s) => {
                n.style[s] = r[s];
            }),
            (n.width = n.width),
            delete n[uo],
            !0
        );
    }
    addEventListener(e, n, i) {
        this.removeEventListener(e, n);
        const r = e.$proxies || (e.$proxies = {}),
            o = { attach: D2, detach: R2, resize: z2 }[n] || I2;
        r[n] = o(e, n, i);
    }
    removeEventListener(e, n) {
        const i = e.$proxies || (e.$proxies = {}),
            r = i[n];
        if (!r) return;
        (({ attach: Zl, detach: Zl, resize: Zl })[n] || T2)(e, n, r), (i[n] = void 0);
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(e, n, i, r) {
        return Hy(e, n, i, r);
    }
    isAttached(e) {
        const n = pc(e);
        return !!(n && n.isConnected);
    }
}
function H2(t) {
    return !Hg() || (typeof OffscreenCanvas < 'u' && t instanceof OffscreenCanvas) ? M2 : F2;
}
class Xt {
    constructor() {
        B(this, 'active', !1);
    }
    tooltipPosition(e) {
        const { x: n, y: i } = this.getProps(['x', 'y'], e);
        return { x: n, y: i };
    }
    hasValue() {
        return ts(this.x) && ts(this.y);
    }
    getProps(e, n) {
        const i = this.$animations;
        if (!n || !i) return this;
        const r = {};
        return (
            e.forEach((s) => {
                r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
            }),
            r
        );
    }
}
B(Xt, 'defaults', {}), B(Xt, 'defaultRoutes');
function B2(t, e) {
    const n = t.options.ticks,
        i = j2(t),
        r = Math.min(n.maxTicksLimit || i, i),
        s = n.major.enabled ? W2(e) : [],
        o = s.length,
        l = s[0],
        a = s[o - 1],
        u = [];
    if (o > r) return U2(e, u, s, o / r), u;
    const c = V2(s, e, r);
    if (o > 0) {
        let f, d;
        const h = o > 1 ? Math.round((a - l) / (o - 1)) : null;
        for (Ws(e, u, c, re(h) ? 0 : l - h, l), f = 0, d = o - 1; f < d; f++)
            Ws(e, u, c, s[f], s[f + 1]);
        return Ws(e, u, c, a, re(h) ? e.length : a + h), u;
    }
    return Ws(e, u, c), u;
}
function j2(t) {
    const e = t.options.offset,
        n = t._tickSize(),
        i = t._length / n + (e ? 0 : 1),
        r = t._maxLength / n;
    return Math.floor(Math.min(i, r));
}
function V2(t, e, n) {
    const i = $2(t),
        r = e.length / n;
    if (!i) return Math.max(r, 1);
    const s = Fv(i);
    for (let o = 0, l = s.length - 1; o < l; o++) {
        const a = s[o];
        if (a > r) return a;
    }
    return Math.max(r, 1);
}
function W2(t) {
    const e = [];
    let n, i;
    for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
    return e;
}
function U2(t, e, n, i) {
    let r = 0,
        s = n[0],
        o;
    for (i = Math.ceil(i), o = 0; o < t.length; o++) o === s && (e.push(t[o]), r++, (s = n[r * i]));
}
function Ws(t, e, n, i, r) {
    const s = V(i, 0),
        o = Math.min(V(r, t.length), t.length);
    let l = 0,
        a,
        u,
        c;
    for (n = Math.ceil(n), r && ((a = r - i), (n = a / Math.floor(a / n))), c = s; c < 0; )
        l++, (c = Math.round(s + l * n));
    for (u = Math.max(s, 0); u < o; u++)
        u === c && (e.push(t[u]), l++, (c = Math.round(s + l * n)));
}
function $2(t) {
    const e = t.length;
    let n, i;
    if (e < 2) return !1;
    for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
    return i;
}
const Y2 = (t) => (t === 'left' ? 'right' : t === 'right' ? 'left' : t),
    Cd = (t, e, n) => (e === 'top' || e === 'left' ? t[e] + n : t[e] - n),
    bd = (t, e) => Math.min(e || t, t);
function Md(t, e) {
    const n = [],
        i = t.length / e,
        r = t.length;
    let s = 0;
    for (; s < r; s += i) n.push(t[Math.floor(s)]);
    return n;
}
function K2(t, e, n) {
    const i = t.ticks.length,
        r = Math.min(e, i - 1),
        s = t._startPixel,
        o = t._endPixel,
        l = 1e-6;
    let a = t.getPixelForTick(r),
        u;
    if (
        !(
            n &&
            (i === 1
                ? (u = Math.max(a - s, o - a))
                : e === 0
                ? (u = (t.getPixelForTick(1) - a) / 2)
                : (u = (a - t.getPixelForTick(r - 1)) / 2),
            (a += r < e ? u : -u),
            a < s - l || a > o + l)
        )
    )
        return a;
}
function Q2(t, e) {
    Z(t, (n) => {
        const i = n.gc,
            r = i.length / 2;
        let s;
        if (r > e) {
            for (s = 0; s < r; ++s) delete n.data[i[s]];
            i.splice(0, r);
        }
    });
}
function fr(t) {
    return t.drawTicks ? t.tickLength : 0;
}
function Ed(t, e) {
    if (!t.display) return 0;
    const n = we(t.font, e),
        i = ze(t.padding);
    return (ue(t.text) ? t.text.length : 1) * n.lineHeight + i.height;
}
function X2(t, e) {
    return Tn(t, { scale: e, type: 'scale' });
}
function G2(t, e, n) {
    return Tn(t, { tick: n, index: e, type: 'tick' });
}
function Z2(t, e, n) {
    let i = lc(t);
    return ((n && e !== 'right') || (!n && e === 'right')) && (i = Y2(i)), i;
}
function q2(t, e, n, i) {
    const { top: r, left: s, bottom: o, right: l, chart: a } = t,
        { chartArea: u, scales: c } = a;
    let f = 0,
        d,
        h,
        m;
    const v = o - r,
        x = l - s;
    if (t.isHorizontal()) {
        if (((h = Re(i, s, l)), Q(n))) {
            const g = Object.keys(n)[0],
                p = n[g];
            m = c[g].getPixelForValue(p) + v - e;
        } else n === 'center' ? (m = (u.bottom + u.top) / 2 + v - e) : (m = Cd(t, n, e));
        d = l - s;
    } else {
        if (Q(n)) {
            const g = Object.keys(n)[0],
                p = n[g];
            h = c[g].getPixelForValue(p) - x + e;
        } else n === 'center' ? (h = (u.left + u.right) / 2 - x + e) : (h = Cd(t, n, e));
        (m = Re(i, o, r)), (f = n === 'left' ? -$e : $e);
    }
    return { titleX: h, titleY: m, maxWidth: d, rotation: f };
}
class ri extends Xt {
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.type = e.type),
            (this.options = void 0),
            (this.ctx = e.ctx),
            (this.chart = e.chart),
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
    init(e) {
        (this.options = e.setContext(this.getContext())),
            (this.axis = e.axis),
            (this._userMin = this.parse(e.min)),
            (this._userMax = this.parse(e.max)),
            (this._suggestedMin = this.parse(e.suggestedMin)),
            (this._suggestedMax = this.parse(e.suggestedMax));
    }
    parse(e, n) {
        return e;
    }
    getUserBounds() {
        let { _userMin: e, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
        return (
            (e = Xe(e, Number.POSITIVE_INFINITY)),
            (n = Xe(n, Number.NEGATIVE_INFINITY)),
            (i = Xe(i, Number.POSITIVE_INFINITY)),
            (r = Xe(r, Number.NEGATIVE_INFINITY)),
            { min: Xe(e, i), max: Xe(n, r), minDefined: be(e), maxDefined: be(n) }
        );
    }
    getMinMax(e) {
        let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
            o;
        if (r && s) return { min: n, max: i };
        const l = this.getMatchingVisibleMetas();
        for (let a = 0, u = l.length; a < u; ++a)
            (o = l[a].controller.getMinMax(this, e)),
                r || (n = Math.min(n, o.min)),
                s || (i = Math.max(i, o.max));
        return (
            (n = s && n > i ? i : n),
            (i = r && n > i ? n : i),
            { min: Xe(n, Xe(i, n)), max: Xe(i, Xe(n, i)) }
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
        const e = this.chart.data;
        return (
            this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
        );
    }
    getLabelItems(e = this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(e));
    }
    beforeLayout() {
        (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
        te(this.options.beforeUpdate, [this]);
    }
    update(e, n, i) {
        const { beginAtZero: r, grace: s, ticks: o } = this.options,
            l = o.sampleSize;
        this.beforeUpdate(),
            (this.maxWidth = e),
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
                (this._range = vy(this, s, r)),
                (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
        const a = l < this.ticks.length;
        this._convertTicksToLabels(a ? Md(this.ticks, l) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
                (o.autoSkip || o.source === 'auto') &&
                ((this.ticks = B2(this, this.ticks)),
                (this._labelSizes = null),
                this.afterAutoSkip()),
            a && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
    }
    configure() {
        let e = this.options.reverse,
            n,
            i;
        this.isHorizontal()
            ? ((n = this.left), (i = this.right))
            : ((n = this.top), (i = this.bottom), (e = !e)),
            (this._startPixel = n),
            (this._endPixel = i),
            (this._reversePixels = e),
            (this._length = i - n),
            (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
        te(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
        te(this.options.beforeSetDimensions, [this]);
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
        te(this.options.afterSetDimensions, [this]);
    }
    _callHooks(e) {
        this.chart.notifyPlugins(e, this.getContext()), te(this.options[e], [this]);
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
        te(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(e) {
        const n = this.options.ticks;
        let i, r, s;
        for (i = 0, r = e.length; i < r; i++)
            (s = e[i]), (s.label = te(n.callback, [s.value, i, e], this));
    }
    afterTickToLabelConversion() {
        te(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
        te(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
        const e = this.options,
            n = e.ticks,
            i = bd(this.ticks.length, e.ticks.maxTicksLimit),
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
            h = ut(this.chart.width - f, 0, this.maxWidth);
        (l = e.offset ? this.maxWidth / i : h / (i - 1)),
            f + 6 > l &&
                ((l = h / (i - (e.offset ? 0.5 : 1))),
                (a =
                    this.maxHeight - fr(e.grid) - n.padding - Ed(e.title, this.chart.options.font)),
                (u = Math.sqrt(f * f + d * d)),
                (o = sc(
                    Math.min(
                        Math.asin(ut((c.highest.height + 6) / l, -1, 1)),
                        Math.asin(ut(a / u, -1, 1)) - Math.asin(ut(d / u, -1, 1))
                    )
                )),
                (o = Math.max(r, Math.min(s, o)))),
            (this.labelRotation = o);
    }
    afterCalculateLabelRotation() {
        te(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
        te(this.options.beforeFit, [this]);
    }
    fit() {
        const e = { width: 0, height: 0 },
            {
                chart: n,
                options: { ticks: i, title: r, grid: s },
            } = this,
            o = this._isVisible(),
            l = this.isHorizontal();
        if (o) {
            const a = Ed(r, n.options.font);
            if (
                (l
                    ? ((e.width = this.maxWidth), (e.height = fr(s) + a))
                    : ((e.height = this.maxHeight), (e.width = fr(s) + a)),
                i.display && this.ticks.length)
            ) {
                const { first: u, last: c, widest: f, highest: d } = this._getLabelSizes(),
                    h = i.padding * 2,
                    m = cn(this.labelRotation),
                    v = Math.cos(m),
                    x = Math.sin(m);
                if (l) {
                    const g = i.mirror ? 0 : x * f.width + v * d.height;
                    e.height = Math.min(this.maxHeight, e.height + g + h);
                } else {
                    const g = i.mirror ? 0 : v * f.width + x * d.height;
                    e.width = Math.min(this.maxWidth, e.width + g + h);
                }
                this._calculatePadding(u, c, x, v);
            }
        }
        this._handleMargins(),
            l
                ? ((this.width = this._length = n.width - this._margins.left - this._margins.right),
                  (this.height = e.height))
                : ((this.width = e.width),
                  (this.height = this._length =
                      n.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(e, n, i, r) {
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
                    ? ((d = r * e.width), (h = i * n.height))
                    : ((d = i * e.height), (h = r * n.width))
                : s === 'start'
                ? (h = n.width)
                : s === 'end'
                ? (d = e.width)
                : s !== 'inner' && ((d = e.width / 2), (h = n.width / 2)),
                (this.paddingLeft = Math.max(((d - c + o) * this.width) / (this.width - c), 0)),
                (this.paddingRight = Math.max(((h - f + o) * this.width) / (this.width - f), 0));
        } else {
            let c = n.height / 2,
                f = e.height / 2;
            s === 'start' ? ((c = 0), (f = e.height)) : s === 'end' && ((c = n.height), (f = 0)),
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
        te(this.options.afterFit, [this]);
    }
    isHorizontal() {
        const { axis: e, position: n } = this.options;
        return n === 'top' || n === 'bottom' || e === 'x';
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(e) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(e);
        let n, i;
        for (n = 0, i = e.length; n < i; n++) re(e[n].label) && (e.splice(n, 1), i--, n--);
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let e = this._labelSizes;
        if (!e) {
            const n = this.options.ticks.sampleSize;
            let i = this.ticks;
            n < i.length && (i = Md(i, n)),
                (this._labelSizes = e =
                    this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
        }
        return e;
    }
    _computeLabelSizes(e, n, i) {
        const { ctx: r, _longestTextCache: s } = this,
            o = [],
            l = [],
            a = Math.floor(n / bd(n, i));
        let u = 0,
            c = 0,
            f,
            d,
            h,
            m,
            v,
            x,
            g,
            p,
            y,
            _,
            w;
        for (f = 0; f < n; f += a) {
            if (
                ((m = e[f].label),
                (v = this._resolveTickFontOptions(f)),
                (r.font = x = v.string),
                (g = s[x] = s[x] || { data: {}, gc: [] }),
                (p = v.lineHeight),
                (y = _ = 0),
                !re(m) && !ue(m))
            )
                (y = jo(r, g.data, g.gc, y, m)), (_ = p);
            else if (ue(m))
                for (d = 0, h = m.length; d < h; ++d)
                    (w = m[d]), !re(w) && !ue(w) && ((y = jo(r, g.data, g.gc, y, w)), (_ += p));
            o.push(y), l.push(_), (u = Math.max(y, u)), (c = Math.max(_, c));
        }
        Q2(s, n);
        const S = o.indexOf(u),
            k = l.indexOf(c),
            C = (E) => ({ width: o[E] || 0, height: l[E] || 0 });
        return { first: C(0), last: C(n - 1), widest: C(S), highest: C(k), widths: o, heights: l };
    }
    getLabelForValue(e) {
        return e;
    }
    getPixelForValue(e, n) {
        return NaN;
    }
    getValueForPixel(e) {}
    getPixelForTick(e) {
        const n = this.ticks;
        return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
    }
    getPixelForDecimal(e) {
        this._reversePixels && (e = 1 - e);
        const n = this._startPixel + e * this._length;
        return Vv(this._alignToPixels ? An(this.chart, n, 0) : n);
    }
    getDecimalForPixel(e) {
        const n = (e - this._startPixel) / this._length;
        return this._reversePixels ? 1 - n : n;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: e, max: n } = this;
        return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
    }
    getContext(e) {
        const n = this.ticks || [];
        if (e >= 0 && e < n.length) {
            const i = n[e];
            return i.$context || (i.$context = G2(this.getContext(), e, i));
        }
        return this.$context || (this.$context = X2(this.chart.getContext(), this));
    }
    _tickSize() {
        const e = this.options.ticks,
            n = cn(this.labelRotation),
            i = Math.abs(Math.cos(n)),
            r = Math.abs(Math.sin(n)),
            s = this._getLabelSizes(),
            o = e.autoSkipPadding || 0,
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
        const e = this.options.display;
        return e !== 'auto' ? !!e : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(e) {
        const n = this.axis,
            i = this.chart,
            r = this.options,
            { grid: s, position: o, border: l } = r,
            a = s.offset,
            u = this.isHorizontal(),
            f = this.ticks.length + (a ? 1 : 0),
            d = fr(s),
            h = [],
            m = l.setContext(this.getContext()),
            v = m.display ? m.width : 0,
            x = v / 2,
            g = function (W) {
                return An(i, W, v);
            };
        let p, y, _, w, S, k, C, E, M, R, z, Y;
        if (o === 'top')
            (p = g(this.bottom)),
                (k = this.bottom - d),
                (E = p - x),
                (R = g(e.top) + x),
                (Y = e.bottom);
        else if (o === 'bottom')
            (p = g(this.top)), (R = e.top), (Y = g(e.bottom) - x), (k = p + x), (E = this.top + d);
        else if (o === 'left')
            (p = g(this.right)),
                (S = this.right - d),
                (C = p - x),
                (M = g(e.left) + x),
                (z = e.right);
        else if (o === 'right')
            (p = g(this.left)),
                (M = e.left),
                (z = g(e.right) - x),
                (S = p + x),
                (C = this.left + d);
        else if (n === 'x') {
            if (o === 'center') p = g((e.top + e.bottom) / 2 + 0.5);
            else if (Q(o)) {
                const W = Object.keys(o)[0],
                    H = o[W];
                p = g(this.chart.scales[W].getPixelForValue(H));
            }
            (R = e.top), (Y = e.bottom), (k = p + x), (E = k + d);
        } else if (n === 'y') {
            if (o === 'center') p = g((e.left + e.right) / 2);
            else if (Q(o)) {
                const W = Object.keys(o)[0],
                    H = o[W];
                p = g(this.chart.scales[W].getPixelForValue(H));
            }
            (S = p - x), (C = S - d), (M = e.left), (z = e.right);
        }
        const X = V(r.ticks.maxTicksLimit, f),
            I = Math.max(1, Math.ceil(f / X));
        for (y = 0; y < f; y += I) {
            const W = this.getContext(y),
                H = s.setContext(W),
                O = l.setContext(W),
                D = H.lineWidth,
                A = H.color,
                $ = O.dash || [],
                K = O.dashOffset,
                ee = H.tickWidth,
                pe = H.tickColor,
                Ee = H.tickBorderDash || [],
                oe = H.tickBorderDashOffset;
            (_ = K2(this, y, a)),
                _ !== void 0 &&
                    ((w = An(i, _, D)),
                    u ? (S = C = M = z = w) : (k = E = R = Y = w),
                    h.push({
                        tx1: S,
                        ty1: k,
                        tx2: C,
                        ty2: E,
                        x1: M,
                        y1: R,
                        x2: z,
                        y2: Y,
                        width: D,
                        color: A,
                        borderDash: $,
                        borderDashOffset: K,
                        tickWidth: ee,
                        tickColor: pe,
                        tickBorderDash: Ee,
                        tickBorderDashOffset: oe,
                    }));
        }
        return (this._ticksLength = f), (this._borderValue = p), h;
    }
    _computeLabelItems(e) {
        const n = this.axis,
            i = this.options,
            { position: r, ticks: s } = i,
            o = this.isHorizontal(),
            l = this.ticks,
            { align: a, crossAlign: u, padding: c, mirror: f } = s,
            d = fr(i.grid),
            h = d + c,
            m = f ? -c : h,
            v = -cn(this.labelRotation),
            x = [];
        let g,
            p,
            y,
            _,
            w,
            S,
            k,
            C,
            E,
            M,
            R,
            z,
            Y = 'middle';
        if (r === 'top') (S = this.bottom - m), (k = this._getXAxisLabelAlignment());
        else if (r === 'bottom') (S = this.top + m), (k = this._getXAxisLabelAlignment());
        else if (r === 'left') {
            const I = this._getYAxisLabelAlignment(d);
            (k = I.textAlign), (w = I.x);
        } else if (r === 'right') {
            const I = this._getYAxisLabelAlignment(d);
            (k = I.textAlign), (w = I.x);
        } else if (n === 'x') {
            if (r === 'center') S = (e.top + e.bottom) / 2 + h;
            else if (Q(r)) {
                const I = Object.keys(r)[0],
                    W = r[I];
                S = this.chart.scales[I].getPixelForValue(W) + h;
            }
            k = this._getXAxisLabelAlignment();
        } else if (n === 'y') {
            if (r === 'center') w = (e.left + e.right) / 2 - h;
            else if (Q(r)) {
                const I = Object.keys(r)[0],
                    W = r[I];
                w = this.chart.scales[I].getPixelForValue(W);
            }
            k = this._getYAxisLabelAlignment(d).textAlign;
        }
        n === 'y' && (a === 'start' ? (Y = 'top') : a === 'end' && (Y = 'bottom'));
        const X = this._getLabelSizes();
        for (g = 0, p = l.length; g < p; ++g) {
            (y = l[g]), (_ = y.label);
            const I = s.setContext(this.getContext(g));
            (C = this.getPixelForTick(g) + s.labelOffset),
                (E = this._resolveTickFontOptions(g)),
                (M = E.lineHeight),
                (R = ue(_) ? _.length : 1);
            const W = R / 2,
                H = I.color,
                O = I.textStrokeColor,
                D = I.textStrokeWidth;
            let A = k;
            o
                ? ((w = C),
                  k === 'inner' &&
                      (g === p - 1
                          ? (A = this.options.reverse ? 'left' : 'right')
                          : g === 0
                          ? (A = this.options.reverse ? 'right' : 'left')
                          : (A = 'center')),
                  r === 'top'
                      ? u === 'near' || v !== 0
                          ? (z = -R * M + M / 2)
                          : u === 'center'
                          ? (z = -X.highest.height / 2 - W * M + M)
                          : (z = -X.highest.height + M / 2)
                      : u === 'near' || v !== 0
                      ? (z = M / 2)
                      : u === 'center'
                      ? (z = X.highest.height / 2 - W * M)
                      : (z = X.highest.height - R * M),
                  f && (z *= -1),
                  v !== 0 && !I.showLabelBackdrop && (w += (M / 2) * Math.sin(v)))
                : ((S = C), (z = ((1 - R) * M) / 2));
            let $;
            if (I.showLabelBackdrop) {
                const K = ze(I.backdropPadding),
                    ee = X.heights[g],
                    pe = X.widths[g];
                let Ee = z - K.top,
                    oe = 0 - K.left;
                switch (Y) {
                    case 'middle':
                        Ee -= ee / 2;
                        break;
                    case 'bottom':
                        Ee -= ee;
                        break;
                }
                switch (k) {
                    case 'center':
                        oe -= pe / 2;
                        break;
                    case 'right':
                        oe -= pe;
                        break;
                }
                $ = {
                    left: oe,
                    top: Ee,
                    width: pe + K.width,
                    height: ee + K.height,
                    color: I.backdropColor,
                };
            }
            x.push({
                label: _,
                font: E,
                textOffset: z,
                options: {
                    rotation: v,
                    color: H,
                    strokeColor: O,
                    strokeWidth: D,
                    textAlign: A,
                    textBaseline: Y,
                    translation: [w, S],
                    backdrop: $,
                },
            });
        }
        return x;
    }
    _getXAxisLabelAlignment() {
        const { position: e, ticks: n } = this.options;
        if (-cn(this.labelRotation)) return e === 'top' ? 'left' : 'right';
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
    _getYAxisLabelAlignment(e) {
        const {
                position: n,
                ticks: { crossAlign: i, mirror: r, padding: s },
            } = this.options,
            o = this._getLabelSizes(),
            l = e + s,
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
        const e = this.chart,
            n = this.options.position;
        if (n === 'left' || n === 'right')
            return { top: 0, left: this.left, bottom: e.height, right: this.right };
        if (n === 'top' || n === 'bottom')
            return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
    }
    drawBackground() {
        const {
            ctx: e,
            options: { backgroundColor: n },
            left: i,
            top: r,
            width: s,
            height: o,
        } = this;
        n && (e.save(), (e.fillStyle = n), e.fillRect(i, r, s, o), e.restore());
    }
    getLineWidthForValue(e) {
        const n = this.options.grid;
        if (!this._isVisible() || !n.display) return 0;
        const r = this.ticks.findIndex((s) => s.value === e);
        return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
    }
    drawGrid(e) {
        const n = this.options.grid,
            i = this.ctx,
            r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
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
                chart: e,
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
            ? ((u = An(e, this.left, o) - o / 2), (c = An(e, this.right, l) + l / 2), (f = d = a))
            : ((f = An(e, this.top, o) - o / 2), (d = An(e, this.bottom, l) + l / 2), (u = c = a)),
            n.save(),
            (n.lineWidth = s.width),
            (n.strokeStyle = s.color),
            n.beginPath(),
            n.moveTo(u, f),
            n.lineTo(c, d),
            n.stroke(),
            n.restore();
    }
    drawLabels(e) {
        if (!this.options.ticks.display) return;
        const i = this.ctx,
            r = this._computeLabelArea();
        r && uc(i, r);
        const s = this.getLabelItems(e);
        for (const o of s) {
            const l = o.options,
                a = o.font,
                u = o.label,
                c = o.textOffset;
            ti(i, u, 0, c, a, l);
        }
        r && cc(i);
    }
    drawTitle() {
        const {
            ctx: e,
            options: { position: n, title: i, reverse: r },
        } = this;
        if (!i.display) return;
        const s = we(i.font),
            o = ze(i.padding),
            l = i.align;
        let a = s.lineHeight / 2;
        n === 'bottom' || n === 'center' || Q(n)
            ? ((a += o.bottom), ue(i.text) && (a += s.lineHeight * (i.text.length - 1)))
            : (a += o.top);
        const { titleX: u, titleY: c, maxWidth: f, rotation: d } = q2(this, a, n, l);
        ti(e, i.text, 0, 0, s, {
            color: i.color,
            maxWidth: f,
            rotation: d,
            textAlign: Z2(l, n, r),
            textBaseline: 'middle',
            translation: [u, c],
        });
    }
    draw(e) {
        !this._isVisible() ||
            (this.drawBackground(),
            this.drawGrid(e),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(e));
    }
    _layers() {
        const e = this.options,
            n = (e.ticks && e.ticks.z) || 0,
            i = V(e.grid && e.grid.z, -1),
            r = V(e.border && e.border.z, 0);
        return !this._isVisible() || this.draw !== ri.prototype.draw
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
    getMatchingVisibleMetas(e) {
        const n = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + 'AxisID',
            r = [];
        let s, o;
        for (s = 0, o = n.length; s < o; ++s) {
            const l = n[s];
            l[i] === this.id && (!e || l.type === e) && r.push(l);
        }
        return r;
    }
    _resolveTickFontOptions(e) {
        const n = this.options.ticks.setContext(this.getContext(e));
        return we(n.font);
    }
    _maxDigits() {
        const e = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / e;
    }
}
class Us {
    constructor(e, n, i) {
        (this.type = e), (this.scope = n), (this.override = i), (this.items = Object.create(null));
    }
    isForType(e) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
    }
    register(e) {
        const n = Object.getPrototypeOf(e);
        let i;
        tx(n) && (i = this.register(n));
        const r = this.items,
            s = e.id,
            o = this.scope + '.' + s;
        if (!s) throw new Error('class does not have id: ' + e);
        return (
            s in r || ((r[s] = e), J2(e, o, i), this.override && me.override(e.id, e.overrides)), o
        );
    }
    get(e) {
        return this.items[e];
    }
    unregister(e) {
        const n = this.items,
            i = e.id,
            r = this.scope;
        i in n && delete n[i], r && i in me[r] && (delete me[r][i], this.override && delete ei[i]);
    }
}
function J2(t, e, n) {
    const i = es(Object.create(null), [n ? me.get(n) : {}, me.get(e), t.defaults]);
    me.set(e, i),
        t.defaultRoutes && ex(e, t.defaultRoutes),
        t.descriptors && me.describe(e, t.descriptors);
}
function ex(t, e) {
    Object.keys(e).forEach((n) => {
        const i = n.split('.'),
            r = i.pop(),
            s = [t].concat(i).join('.'),
            o = e[n].split('.'),
            l = o.pop(),
            a = o.join('.');
        me.route(s, r, a, l);
    });
}
function tx(t) {
    return 'id' in t && 'defaults' in t;
}
class nx {
    constructor() {
        (this.controllers = new Us(Ar, 'datasets', !0)),
            (this.elements = new Us(Xt, 'elements')),
            (this.plugins = new Us(Object, 'plugins')),
            (this.scales = new Us(ri, 'scales')),
            (this._typedRegistries = [this.controllers, this.scales, this.elements]);
    }
    add(...e) {
        this._each('register', e);
    }
    remove(...e) {
        this._each('unregister', e);
    }
    addControllers(...e) {
        this._each('register', e, this.controllers);
    }
    addElements(...e) {
        this._each('register', e, this.elements);
    }
    addPlugins(...e) {
        this._each('register', e, this.plugins);
    }
    addScales(...e) {
        this._each('register', e, this.scales);
    }
    getController(e) {
        return this._get(e, this.controllers, 'controller');
    }
    getElement(e) {
        return this._get(e, this.elements, 'element');
    }
    getPlugin(e) {
        return this._get(e, this.plugins, 'plugin');
    }
    getScale(e) {
        return this._get(e, this.scales, 'scale');
    }
    removeControllers(...e) {
        this._each('unregister', e, this.controllers);
    }
    removeElements(...e) {
        this._each('unregister', e, this.elements);
    }
    removePlugins(...e) {
        this._each('unregister', e, this.plugins);
    }
    removeScales(...e) {
        this._each('unregister', e, this.scales);
    }
    _each(e, n, i) {
        [...n].forEach((r) => {
            const s = i || this._getRegistryForType(r);
            i || s.isForType(r) || (s === this.plugins && r.id)
                ? this._exec(e, s, r)
                : Z(r, (o) => {
                      const l = i || this._getRegistryForType(o);
                      this._exec(e, l, o);
                  });
        });
    }
    _exec(e, n, i) {
        const r = rc(e);
        te(i['before' + r], [], i), n[e](i), te(i['after' + r], [], i);
    }
    _getRegistryForType(e) {
        for (let n = 0; n < this._typedRegistries.length; n++) {
            const i = this._typedRegistries[n];
            if (i.isForType(e)) return i;
        }
        return this.plugins;
    }
    _get(e, n, i) {
        const r = n.get(e);
        if (r === void 0) throw new Error('"' + e + '" is not a registered ' + i + '.');
        return r;
    }
}
var Tt = new nx();
class ix {
    constructor() {
        this._init = [];
    }
    notify(e, n, i, r) {
        n === 'beforeInit' &&
            ((this._init = this._createDescriptors(e, !0)), this._notify(this._init, e, 'install'));
        const s = r ? this._descriptors(e).filter(r) : this._descriptors(e),
            o = this._notify(s, e, n, i);
        return (
            n === 'afterDestroy' &&
                (this._notify(s, e, 'stop'), this._notify(this._init, e, 'uninstall')),
            o
        );
    }
    _notify(e, n, i, r) {
        r = r || {};
        for (const s of e) {
            const o = s.plugin,
                l = o[i],
                a = [n, r, s.options];
            if (te(l, a, o) === !1 && r.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        re(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(e) {
        if (this._cache) return this._cache;
        const n = (this._cache = this._createDescriptors(e));
        return this._notifyStateChanges(e), n;
    }
    _createDescriptors(e, n) {
        const i = e && e.config,
            r = V(i.options && i.options.plugins, {}),
            s = rx(i);
        return r === !1 && !n ? [] : ox(e, s, r, n);
    }
    _notifyStateChanges(e) {
        const n = this._oldCache || [],
            i = this._cache,
            r = (s, o) => s.filter((l) => !o.some((a) => l.plugin.id === a.plugin.id));
        this._notify(r(n, i), e, 'stop'), this._notify(r(i, n), e, 'start');
    }
}
function rx(t) {
    const e = {},
        n = [],
        i = Object.keys(Tt.plugins.items);
    for (let s = 0; s < i.length; s++) n.push(Tt.getPlugin(i[s]));
    const r = t.plugins || [];
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        n.indexOf(o) === -1 && (n.push(o), (e[o.id] = !0));
    }
    return { plugins: n, localIds: e };
}
function sx(t, e) {
    return !e && t === !1 ? null : t === !0 ? {} : t;
}
function ox(t, { plugins: e, localIds: n }, i, r) {
    const s = [],
        o = t.getContext();
    for (const l of e) {
        const a = l.id,
            u = sx(i[a], r);
        u !== null &&
            s.push({ plugin: l, options: lx(t.config, { plugin: l, local: n[a] }, u, o) });
    }
    return s;
}
function lx(t, { plugin: e, local: n }, i, r) {
    const s = t.pluginScopeKeys(e),
        o = t.getOptionScopes(i, s);
    return (
        n && e.defaults && o.push(e.defaults),
        t.createResolver(o, r, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
}
function qa(t, e) {
    const n = me.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || 'x';
}
function ax(t, e) {
    let n = t;
    return t === '_index_' ? (n = e) : t === '_value_' && (n = e === 'x' ? 'y' : 'x'), n;
}
function ux(t, e) {
    return t === e ? '_index_' : '_value_';
}
function cx(t) {
    if (t === 'top' || t === 'bottom') return 'x';
    if (t === 'left' || t === 'right') return 'y';
}
function $o(t, e) {
    if (
        t === 'x' ||
        t === 'y' ||
        t === 'r' ||
        ((t = e.axis || cx(e.position) || (t.length > 1 && $o(t[0].toLowerCase(), e))), t)
    )
        return t;
    throw new Error(
        `Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`
    );
}
function fx(t, e) {
    const n = ei[t.type] || { scales: {} },
        i = e.scales || {},
        r = qa(t.type, e),
        s = Object.create(null);
    return (
        Object.keys(i).forEach((o) => {
            const l = i[o];
            if (!Q(l)) return console.error(`Invalid scale configuration for scale: ${o}`);
            if (l._proxy)
                return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
            const a = $o(o, l),
                u = ux(a, r),
                c = n.scales || {};
            s[o] = Lr(Object.create(null), [{ axis: a }, l, c[a], c[u]]);
        }),
        t.data.datasets.forEach((o) => {
            const l = o.type || t.type,
                a = o.indexAxis || qa(l, e),
                c = (ei[l] || {}).scales || {};
            Object.keys(c).forEach((f) => {
                const d = ax(f, a),
                    h = o[d + 'AxisID'] || d;
                (s[h] = s[h] || Object.create(null)), Lr(s[h], [{ axis: d }, i[h], c[f]]);
            });
        }),
        Object.keys(s).forEach((o) => {
            const l = s[o];
            Lr(l, [me.scales[l.type], me.scale]);
        }),
        s
    );
}
function Gg(t) {
    const e = t.options || (t.options = {});
    (e.plugins = V(e.plugins, {})), (e.scales = fx(t, e));
}
function Zg(t) {
    return (t = t || {}), (t.datasets = t.datasets || []), (t.labels = t.labels || []), t;
}
function dx(t) {
    return (t = t || {}), (t.data = Zg(t.data)), Gg(t), t;
}
const Pd = new Map(),
    qg = new Set();
function $s(t, e) {
    let n = Pd.get(t);
    return n || ((n = e()), Pd.set(t, n), qg.add(n)), n;
}
const dr = (t, e, n) => {
    const i = Ho(e, n);
    i !== void 0 && t.add(i);
};
class hx {
    constructor(e) {
        (this._config = dx(e)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(e) {
        this._config.type = e;
    }
    get data() {
        return this._config.data;
    }
    set data(e) {
        this._config.data = Zg(e);
    }
    get options() {
        return this._config.options;
    }
    set options(e) {
        this._config.options = e;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const e = this._config;
        this.clearCache(), Gg(e);
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(e) {
        return $s(e, () => [[`datasets.${e}`, '']]);
    }
    datasetAnimationScopeKeys(e, n) {
        return $s(`${e}.transition.${n}`, () => [
            [`datasets.${e}.transitions.${n}`, `transitions.${n}`],
            [`datasets.${e}`, ''],
        ]);
    }
    datasetElementScopeKeys(e, n) {
        return $s(`${e}-${n}`, () => [
            [`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ''],
        ]);
    }
    pluginScopeKeys(e) {
        const n = e.id,
            i = this.type;
        return $s(`${i}-plugin-${n}`, () => [
            [`plugins.${n}`, ...(e.additionalOptionScopes || [])],
        ]);
    }
    _cachedScopes(e, n) {
        const i = this._scopeCache;
        let r = i.get(e);
        return (!r || n) && ((r = new Map()), i.set(e, r)), r;
    }
    getOptionScopes(e, n, i) {
        const { options: r, type: s } = this,
            o = this._cachedScopes(e, i),
            l = o.get(n);
        if (l) return l;
        const a = new Set();
        n.forEach((c) => {
            e && (a.add(e), c.forEach((f) => dr(a, e, f))),
                c.forEach((f) => dr(a, r, f)),
                c.forEach((f) => dr(a, ei[s] || {}, f)),
                c.forEach((f) => dr(a, me, f)),
                c.forEach((f) => dr(a, Ga, f));
        });
        const u = Array.from(a);
        return u.length === 0 && u.push(Object.create(null)), qg.has(n) && o.set(n, u), u;
    }
    chartOptionScopes() {
        const { options: e, type: n } = this;
        return [e, ei[n] || {}, me.datasets[n] || {}, { type: n }, me, Ga];
    }
    resolveNamedOptions(e, n, i, r = ['']) {
        const s = { $shared: !0 },
            { resolver: o, subPrefixes: l } = Od(this._resolverCache, e, r);
        let a = o;
        if (gx(o, n)) {
            (s.$shared = !1), (i = Cn(i) ? i() : i);
            const u = this.createResolver(e, i, l);
            a = Wi(o, i, u);
        }
        for (const u of n) s[u] = a[u];
        return s;
    }
    createResolver(e, n, i = [''], r) {
        const { resolver: s } = Od(this._resolverCache, e, i);
        return Q(n) ? Wi(s, n, void 0, r) : s;
    }
}
function Od(t, e, n) {
    let i = t.get(e);
    i || ((i = new Map()), t.set(e, i));
    const r = n.join();
    let s = i.get(r);
    return (
        s ||
            ((s = {
                resolver: fc(e, n),
                subPrefixes: n.filter((l) => !l.toLowerCase().includes('hover')),
            }),
            i.set(r, s)),
        s
    );
}
const px = (t) => Q(t) && Object.getOwnPropertyNames(t).reduce((e, n) => e || Cn(t[n]), !1);
function gx(t, e) {
    const { isScriptable: n, isIndexable: i } = Ng(t);
    for (const r of e) {
        const s = n(r),
            o = i(r),
            l = (o || s) && t[r];
        if ((s && (Cn(l) || px(l))) || (o && ue(l))) return !0;
    }
    return !1;
}
var mx = '4.2.1';
const vx = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Td(t, e) {
    return t === 'top' || t === 'bottom' || (vx.indexOf(t) === -1 && e === 'x');
}
function Ld(t, e) {
    return function (n, i) {
        return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
    };
}
function Dd(t) {
    const e = t.chart,
        n = e.options.animation;
    e.notifyPlugins('afterRender'), te(n && n.onComplete, [t], e);
}
function yx(t) {
    const e = t.chart,
        n = e.options.animation;
    te(n && n.onProgress, [t], e);
}
function Jg(t) {
    return (
        Hg() && typeof t == 'string'
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
        t && t.canvas && (t = t.canvas),
        t
    );
}
const co = {},
    Rd = (t) => {
        const e = Jg(t);
        return Object.values(co)
            .filter((n) => n.canvas === e)
            .pop();
    };
function xx(t, e, n) {
    const i = Object.keys(t);
    for (const r of i) {
        const s = +r;
        if (s >= e) {
            const o = t[r];
            delete t[r], (n > 0 || s > e) && (t[s + n] = o);
        }
    }
}
function _x(t, e, n, i) {
    return !n || t.type === 'mouseout' ? null : i ? e : t;
}
function wx(t) {
    const { xScale: e, yScale: n } = t;
    if (e && n) return { left: e.left, right: e.right, top: n.top, bottom: n.bottom };
}
class Lt {
    static register(...e) {
        Tt.add(...e), Nd();
    }
    static unregister(...e) {
        Tt.remove(...e), Nd();
    }
    constructor(e, n) {
        const i = (this.config = new hx(n)),
            r = Jg(e),
            s = Rd(r);
        if (s)
            throw new Error(
                "Canvas is already in use. Chart with ID '" +
                    s.id +
                    "' must be destroyed before the canvas with ID '" +
                    s.canvas.id +
                    "' can be reused."
            );
        const o = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform || H2(r))()), this.platform.updateConfig(i);
        const l = this.platform.acquireContext(r, o.aspectRatio),
            a = l && l.canvas,
            u = a && a.height,
            c = a && a.width;
        if (
            ((this.id = Ov()),
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
            (this._plugins = new ix()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = Kv((f) => this.update(f), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (co[this.id] = this),
            !l || !a)
        ) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        It.listen(this, 'complete', Dd),
            It.listen(this, 'progress', yx),
            this._initialize(),
            this.attached && this.update();
    }
    get aspectRatio() {
        const {
            options: { aspectRatio: e, maintainAspectRatio: n },
            width: i,
            height: r,
            _aspectRatio: s,
        } = this;
        return re(e) ? (n && s ? s : r ? i / r : null) : e;
    }
    get data() {
        return this.config.data;
    }
    set data(e) {
        this.config.data = e;
    }
    get options() {
        return this._options;
    }
    set options(e) {
        this.config.options = e;
    }
    get registry() {
        return Tt;
    }
    _initialize() {
        return (
            this.notifyPlugins('beforeInit'),
            this.options.responsive ? this.resize() : od(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins('afterInit'),
            this
        );
    }
    clear() {
        return id(this.canvas, this.ctx), this;
    }
    stop() {
        return It.stop(this), this;
    }
    resize(e, n) {
        It.running(this) ? (this._resizeBeforeDraw = { width: e, height: n }) : this._resize(e, n);
    }
    _resize(e, n) {
        const i = this.options,
            r = this.canvas,
            s = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(r, e, n, s),
            l = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? 'resize' : 'attach';
        (this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            od(this, l, !0) &&
                (this.notifyPlugins('resize', { size: o }),
                te(i.onResize, [this, o], this),
                this.attached && this._doResize(a) && this.render());
    }
    ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        Z(n, (i, r) => {
            i.id = r;
        });
    }
    buildOrUpdateScales() {
        const e = this.options,
            n = e.scales,
            i = this.scales,
            r = Object.keys(i).reduce((o, l) => ((o[l] = !1), o), {});
        let s = [];
        n &&
            (s = s.concat(
                Object.keys(n).map((o) => {
                    const l = n[o],
                        a = $o(o, l),
                        u = a === 'r',
                        c = a === 'x';
                    return {
                        options: l,
                        dposition: u ? 'chartArea' : c ? 'bottom' : 'left',
                        dtype: u ? 'radialLinear' : c ? 'category' : 'linear',
                    };
                })
            )),
            Z(s, (o) => {
                const l = o.options,
                    a = l.id,
                    u = $o(a, l),
                    c = V(l.type, o.dtype);
                (l.position === void 0 || Td(l.position, u) !== Td(o.dposition)) &&
                    (l.position = o.dposition),
                    (r[a] = !0);
                let f = null;
                if (a in i && i[a].type === c) f = i[a];
                else {
                    const d = Tt.getScale(c);
                    (f = new d({ id: a, type: c, ctx: this.ctx, chart: this })), (i[f.id] = f);
                }
                f.init(l, e);
            }),
            Z(r, (o, l) => {
                o || delete i[l];
            }),
            Z(i, (o) => {
                ct.configure(this, o, o.options), ct.addBox(this, o);
            });
    }
    _updateMetasets() {
        const e = this._metasets,
            n = this.data.datasets.length,
            i = e.length;
        if ((e.sort((r, s) => r.index - s.index), i > n)) {
            for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
            e.splice(n, i - n);
        }
        this._sortedMetasets = e.slice(0).sort(Ld('order', 'index'));
    }
    _removeUnreferencedMetasets() {
        const {
            _metasets: e,
            data: { datasets: n },
        } = this;
        e.length > n.length && delete this._stacks,
            e.forEach((i, r) => {
                n.filter((s) => s === i._dataset).length === 0 && this._destroyDatasetMeta(r);
            });
    }
    buildOrUpdateControllers() {
        const e = [],
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
                (o.indexAxis = s.indexAxis || qa(l, this.options)),
                (o.order = s.order || 0),
                (o.index = i),
                (o.label = '' + s.label),
                (o.visible = this.isDatasetVisible(i)),
                o.controller)
            )
                o.controller.updateIndex(i), o.controller.linkScales();
            else {
                const a = Tt.getController(l),
                    { datasetElementType: u, dataElementType: c } = me.datasets[l];
                Object.assign(a, {
                    dataElementType: Tt.getElement(c),
                    datasetElementType: u && Tt.getElement(u),
                }),
                    (o.controller = new a(this, i)),
                    e.push(o.controller);
            }
        }
        return this._updateMetasets(), e;
    }
    _resetElements() {
        Z(
            this.data.datasets,
            (e, n) => {
                this.getDatasetMeta(n).controller.reset();
            },
            this
        );
    }
    reset() {
        this._resetElements(), this.notifyPlugins('reset');
    }
    update(e) {
        const n = this.config;
        n.update();
        const i = (this._options = n.createResolver(n.chartOptionScopes(), this.getContext())),
            r = (this._animationsDisabled = !i.animation);
        if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            this.notifyPlugins('beforeUpdate', { mode: e, cancelable: !0 }) === !1)
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
                Z(s, (u) => {
                    u.reset();
                }),
            this._updateDatasets(e),
            this.notifyPlugins('afterUpdate', { mode: e }),
            this._layers.sort(Ld('z', '_idx'));
        const { _active: l, _lastEvent: a } = this;
        a ? this._eventHandler(a, !0) : l.length && this._updateHoverStyles(l, l, !0),
            this.render();
    }
    _updateScales() {
        Z(this.scales, (e) => {
            ct.removeBox(this, e);
        }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const e = this.options,
            n = new Set(Object.keys(this._listeners)),
            i = new Set(e.events);
        (!Qf(n, i) || !!this._responsiveListeners !== e.responsive) &&
            (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: e } = this,
            n = this._getUniformDataChanges() || [];
        for (const { method: i, start: r, count: s } of n) {
            const o = i === '_removeElements' ? -s : s;
            xx(e, r, o);
        }
    }
    _getUniformDataChanges() {
        const e = this._dataChanges;
        if (!e || !e.length) return;
        this._dataChanges = [];
        const n = this.data.datasets.length,
            i = (s) =>
                new Set(e.filter((o) => o[0] === s).map((o, l) => l + ',' + o.splice(1).join(','))),
            r = i(0);
        for (let s = 1; s < n; s++) if (!Qf(r, i(s))) return;
        return Array.from(r)
            .map((s) => s.split(','))
            .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(e) {
        if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
        ct.update(this, this.width, this.height, e);
        const n = this.chartArea,
            i = n.width <= 0 || n.height <= 0;
        (this._layers = []),
            Z(
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
    _updateDatasets(e) {
        if (this.notifyPlugins('beforeDatasetsUpdate', { mode: e, cancelable: !0 }) !== !1) {
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this.getDatasetMeta(n).controller.configure();
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this._updateDataset(n, Cn(e) ? e({ datasetIndex: n }) : e);
            this.notifyPlugins('afterDatasetsUpdate', { mode: e });
        }
    }
    _updateDataset(e, n) {
        const i = this.getDatasetMeta(e),
            r = { meta: i, index: e, mode: n, cancelable: !0 };
        this.notifyPlugins('beforeDatasetUpdate', r) !== !1 &&
            (i.controller._update(n),
            (r.cancelable = !1),
            this.notifyPlugins('afterDatasetUpdate', r));
    }
    render() {
        this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
            (It.has(this)
                ? this.attached && !It.running(this) && It.start(this)
                : (this.draw(), Dd({ chart: this })));
    }
    draw() {
        let e;
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
        for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(this.chartArea);
        for (this._drawDatasets(); e < n.length; ++e) n[e].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(e) {
        const n = this._sortedMetasets,
            i = [];
        let r, s;
        for (r = 0, s = n.length; r < s; ++r) {
            const o = n[r];
            (!e || o.visible) && i.push(o);
        }
        return i;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
        const e = this.getSortedVisibleDatasetMetas();
        for (let n = e.length - 1; n >= 0; --n) this._drawDataset(e[n]);
        this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(e) {
        const n = this.ctx,
            i = e._clip,
            r = !i.disabled,
            s = wx(e) || this.chartArea,
            o = { meta: e, index: e.index, cancelable: !0 };
        this.notifyPlugins('beforeDatasetDraw', o) !== !1 &&
            (r &&
                uc(n, {
                    left: i.left === !1 ? 0 : s.left - i.left,
                    right: i.right === !1 ? this.width : s.right + i.right,
                    top: i.top === !1 ? 0 : s.top - i.top,
                    bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
                }),
            e.controller.draw(),
            r && cc(n),
            (o.cancelable = !1),
            this.notifyPlugins('afterDatasetDraw', o));
    }
    isPointInArea(e) {
        return ns(e, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, n, i, r) {
        const s = y2.modes[n];
        return typeof s == 'function' ? s(this, e, i, r) : [];
    }
    getDatasetMeta(e) {
        const n = this.data.datasets[e],
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
                    index: e,
                    _dataset: n,
                    _parsed: [],
                    _sorted: !1,
                }),
                i.push(r)),
            r
        );
    }
    getContext() {
        return this.$context || (this.$context = Tn(null, { chart: this, type: 'chart' }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(e) {
        const n = this.data.datasets[e];
        if (!n) return !1;
        const i = this.getDatasetMeta(e);
        return typeof i.hidden == 'boolean' ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(e, n) {
        const i = this.getDatasetMeta(e);
        i.hidden = !n;
    }
    toggleDataVisibility(e) {
        this._hiddenIndices[e] = !this._hiddenIndices[e];
    }
    getDataVisibility(e) {
        return !this._hiddenIndices[e];
    }
    _updateVisibility(e, n, i) {
        const r = i ? 'show' : 'hide',
            s = this.getDatasetMeta(e),
            o = s.controller._resolveAnimations(void 0, r);
        Ct(n)
            ? ((s.data[n].hidden = !i), this.update())
            : (this.setDatasetVisibility(e, i),
              o.update(s, { visible: i }),
              this.update((l) => (l.datasetIndex === e ? r : void 0)));
    }
    hide(e, n) {
        this._updateVisibility(e, n, !1);
    }
    show(e, n) {
        this._updateVisibility(e, n, !0);
    }
    _destroyDatasetMeta(e) {
        const n = this._metasets[e];
        n && n.controller && n.controller._destroy(), delete this._metasets[e];
    }
    _stop() {
        let e, n;
        for (this.stop(), It.remove(this), e = 0, n = this.data.datasets.length; e < n; ++e)
            this._destroyDatasetMeta(e);
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: e, ctx: n } = this;
        this._stop(),
            this.config.clearCache(),
            e &&
                (this.unbindEvents(),
                id(e, n),
                this.platform.releaseContext(n),
                (this.canvas = null),
                (this.ctx = null)),
            delete co[this.id],
            this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...e) {
        return this.canvas.toDataURL(...e);
    }
    bindEvents() {
        this.bindUserEvents(),
            this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
    }
    bindUserEvents() {
        const e = this._listeners,
            n = this.platform,
            i = (s, o) => {
                n.addEventListener(this, s, o), (e[s] = o);
            },
            r = (s, o, l) => {
                (s.offsetX = o), (s.offsetY = l), this._eventHandler(s);
            };
        Z(this.options.events, (s) => i(s, r));
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const e = this._responsiveListeners,
            n = this.platform,
            i = (a, u) => {
                n.addEventListener(this, a, u), (e[a] = u);
            },
            r = (a, u) => {
                e[a] && (n.removeEventListener(this, a, u), delete e[a]);
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
        Z(this._listeners, (e, n) => {
            this.platform.removeEventListener(this, n, e);
        }),
            (this._listeners = {}),
            Z(this._responsiveListeners, (e, n) => {
                this.platform.removeEventListener(this, n, e);
            }),
            (this._responsiveListeners = void 0);
    }
    updateHoverStyle(e, n, i) {
        const r = i ? 'set' : 'remove';
        let s, o, l, a;
        for (
            n === 'dataset' &&
                ((s = this.getDatasetMeta(e[0].datasetIndex)),
                s.controller['_' + r + 'DatasetHoverStyle']()),
                l = 0,
                a = e.length;
            l < a;
            ++l
        ) {
            o = e[l];
            const u = o && this.getDatasetMeta(o.datasetIndex).controller;
            u && u[r + 'HoverStyle'](o.element, o.datasetIndex, o.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(e) {
        const n = this._active || [],
            i = e.map(({ datasetIndex: s, index: o }) => {
                const l = this.getDatasetMeta(s);
                if (!l) throw new Error('No dataset found at index ' + s);
                return { datasetIndex: s, element: l.data[o], index: o };
            });
        !Io(i, n) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, n));
    }
    notifyPlugins(e, n, i) {
        return this._plugins.notify(this, e, n, i);
    }
    isPluginEnabled(e) {
        return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
    }
    _updateHoverStyles(e, n, i) {
        const r = this.options.hover,
            s = (a, u) =>
                a.filter(
                    (c) => !u.some((f) => c.datasetIndex === f.datasetIndex && c.index === f.index)
                ),
            o = s(n, e),
            l = i ? e : s(e, n);
        o.length && this.updateHoverStyle(o, r.mode, !1),
            l.length && r.mode && this.updateHoverStyle(l, r.mode, !0);
    }
    _eventHandler(e, n) {
        const i = { event: e, replay: n, cancelable: !0, inChartArea: this.isPointInArea(e) },
            r = (o) => (o.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', i, r) === !1) return;
        const s = this._handleEvent(e, n, i.inChartArea);
        return (
            (i.cancelable = !1),
            this.notifyPlugins('afterEvent', i, r),
            (s || i.changed) && this.render(),
            this
        );
    }
    _handleEvent(e, n, i) {
        const { _active: r = [], options: s } = this,
            o = n,
            l = this._getActiveElements(e, r, i, o),
            a = Av(e),
            u = _x(e, this._lastEvent, i, a);
        i &&
            ((this._lastEvent = null),
            te(s.onHover, [e, l, this], this),
            a && te(s.onClick, [e, l, this], this));
        const c = !Io(l, r);
        return (
            (c || n) && ((this._active = l), this._updateHoverStyles(l, r, n)),
            (this._lastEvent = u),
            c
        );
    }
    _getActiveElements(e, n, i, r) {
        if (e.type === 'mouseout') return [];
        if (!i) return n;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(e, s.mode, s, r);
    }
}
B(Lt, 'defaults', me),
    B(Lt, 'instances', co),
    B(Lt, 'overrides', ei),
    B(Lt, 'registry', Tt),
    B(Lt, 'version', mx),
    B(Lt, 'getChart', Rd);
function Nd() {
    return Z(Lt.instances, (t) => t._plugins.invalidate());
}
function em(t, e, n = e) {
    (t.lineCap = V(n.borderCapStyle, e.borderCapStyle)),
        t.setLineDash(V(n.borderDash, e.borderDash)),
        (t.lineDashOffset = V(n.borderDashOffset, e.borderDashOffset)),
        (t.lineJoin = V(n.borderJoinStyle, e.borderJoinStyle)),
        (t.lineWidth = V(n.borderWidth, e.borderWidth)),
        (t.strokeStyle = V(n.borderColor, e.borderColor));
}
function Sx(t, e, n) {
    t.lineTo(n.x, n.y);
}
function kx(t) {
    return t.stepped ? ly : t.tension || t.cubicInterpolationMode === 'monotone' ? ay : Sx;
}
function tm(t, e, n = {}) {
    const i = t.length,
        { start: r = 0, end: s = i - 1 } = n,
        { start: o, end: l } = e,
        a = Math.max(r, o),
        u = Math.min(s, l),
        c = (r < o && s < o) || (r > l && s > l);
    return { count: i, start: a, loop: e.loop, ilen: u < a && !c ? i + u - a : u - a };
}
function Cx(t, e, n, i) {
    const { points: r, options: s } = e,
        { count: o, start: l, loop: a, ilen: u } = tm(r, n, i),
        c = kx(s);
    let { move: f = !0, reverse: d } = i || {},
        h,
        m,
        v;
    for (h = 0; h <= u; ++h)
        (m = r[(l + (d ? u - h : h)) % o]),
            !m.skip && (f ? (t.moveTo(m.x, m.y), (f = !1)) : c(t, v, m, d, s.stepped), (v = m));
    return a && ((m = r[(l + (d ? u : 0)) % o]), c(t, v, m, d, s.stepped)), !!a;
}
function bx(t, e, n, i) {
    const r = e.points,
        { count: s, start: o, ilen: l } = tm(r, n, i),
        { move: a = !0, reverse: u } = i || {};
    let c = 0,
        f = 0,
        d,
        h,
        m,
        v,
        x,
        g;
    const p = (_) => (o + (u ? l - _ : _)) % s,
        y = () => {
            v !== x && (t.lineTo(c, x), t.lineTo(c, v), t.lineTo(c, g));
        };
    for (a && ((h = r[p(0)]), t.moveTo(h.x, h.y)), d = 0; d <= l; ++d) {
        if (((h = r[p(d)]), h.skip)) continue;
        const _ = h.x,
            w = h.y,
            S = _ | 0;
        S === m
            ? (w < v ? (v = w) : w > x && (x = w), (c = (f * c + _) / ++f))
            : (y(), t.lineTo(_, w), (m = S), (f = 0), (v = x = w)),
            (g = w);
    }
    y();
}
function Ja(t) {
    const e = t.options,
        n = e.borderDash && e.borderDash.length;
    return !t._decimated &&
        !t._loop &&
        !e.tension &&
        e.cubicInterpolationMode !== 'monotone' &&
        !e.stepped &&
        !n
        ? bx
        : Cx;
}
function Mx(t) {
    return t.stepped ? jy : t.tension || t.cubicInterpolationMode === 'monotone' ? Vy : jn;
}
function Ex(t, e, n, i) {
    let r = e._path;
    r || ((r = e._path = new Path2D()), e.path(r, n, i) && r.closePath()),
        em(t, e.options),
        t.stroke(r);
}
function Px(t, e, n, i) {
    const { segments: r, options: s } = e,
        o = Ja(e);
    for (const l of r)
        em(t, s, l.style),
            t.beginPath(),
            o(t, e, l, { start: n, end: n + i - 1 }) && t.closePath(),
            t.stroke();
}
const Ox = typeof Path2D == 'function';
function Tx(t, e, n, i) {
    Ox && !e.options.segment ? Ex(t, e, n, i) : Px(t, e, n, i);
}
class _r extends Xt {
    constructor(e) {
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
            e && Object.assign(this, e);
    }
    updateControlPoints(e, n) {
        const i = this.options;
        if (
            (i.tension || i.cubicInterpolationMode === 'monotone') &&
            !i.stepped &&
            !this._pointsUpdated
        ) {
            const r = i.spanGaps ? this._loop : this._fullLoop;
            Ry(this._points, i, e, r, n), (this._pointsUpdated = !0);
        }
    }
    set points(e) {
        (this._points = e), delete this._segments, delete this._path, (this._pointsUpdated = !1);
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = Gy(this, this.options.segment));
    }
    first() {
        const e = this.segments,
            n = this.points;
        return e.length && n[e[0].start];
    }
    last() {
        const e = this.segments,
            n = this.points,
            i = e.length;
        return i && n[e[i - 1].end];
    }
    interpolate(e, n) {
        const i = this.options,
            r = e[n],
            s = this.points,
            o = Ky(this, { property: n, start: r, end: r });
        if (!o.length) return;
        const l = [],
            a = Mx(i);
        let u, c;
        for (u = 0, c = o.length; u < c; ++u) {
            const { start: f, end: d } = o[u],
                h = s[f],
                m = s[d];
            if (h === m) {
                l.push(h);
                continue;
            }
            const v = Math.abs((r - h[n]) / (m[n] - h[n])),
                x = a(h, m, v, i.stepped);
            (x[n] = e[n]), l.push(x);
        }
        return l.length === 1 ? l[0] : l;
    }
    pathSegment(e, n, i) {
        return Ja(this)(e, this, n, i);
    }
    path(e, n, i) {
        const r = this.segments,
            s = Ja(this);
        let o = this._loop;
        (n = n || 0), (i = i || this.points.length - n);
        for (const l of r) o &= s(e, this, l, { start: n, end: n + i - 1 });
        return !!o;
    }
    draw(e, n, i, r) {
        const s = this.options || {};
        (this.points || []).length && s.borderWidth && (e.save(), Tx(e, this, i, r), e.restore()),
            this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
}
B(_r, 'id', 'line'),
    B(_r, 'defaults', {
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
    B(_r, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
    B(_r, 'descriptors', {
        _scriptable: !0,
        _indexable: (e) => e !== 'borderDash' && e !== 'fill',
    });
function Ad(t, e, n, i) {
    const r = t.options,
        { [n]: s } = t.getProps([n], i);
    return Math.abs(e - s) < r.radius + r.hitRadius;
}
class fo extends Xt {
    constructor(e) {
        super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            e && Object.assign(this, e);
    }
    inRange(e, n, i) {
        const r = this.options,
            { x: s, y: o } = this.getProps(['x', 'y'], i);
        return Math.pow(e - s, 2) + Math.pow(n - o, 2) < Math.pow(r.hitRadius + r.radius, 2);
    }
    inXRange(e, n) {
        return Ad(this, e, 'x', n);
    }
    inYRange(e, n) {
        return Ad(this, e, 'y', n);
    }
    getCenterPoint(e) {
        const { x: n, y: i } = this.getProps(['x', 'y'], e);
        return { x: n, y: i };
    }
    size(e) {
        e = e || this.options || {};
        let n = e.radius || 0;
        n = Math.max(n, (n && e.hoverRadius) || 0);
        const i = (n && e.borderWidth) || 0;
        return (n + i) * 2;
    }
    draw(e, n) {
        const i = this.options;
        this.skip ||
            i.radius < 0.1 ||
            !ns(this, n, this.size(i) / 2) ||
            ((e.strokeStyle = i.borderColor),
            (e.lineWidth = i.borderWidth),
            (e.fillStyle = i.backgroundColor),
            Za(e, i, this.x, this.y));
    }
    getRange() {
        const e = this.options || {};
        return e.radius + e.hitRadius;
    }
}
B(fo, 'id', 'point'),
    B(fo, 'defaults', {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0,
    }),
    B(fo, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
const zd = (t, e) => {
        let { boxHeight: n = e, boxWidth: i = e } = t;
        return (
            t.usePointStyle && ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
            { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
        );
    },
    Lx = (t, e) =>
        t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
class Id extends Xt {
    constructor(e) {
        super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
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
    update(e, n, i) {
        (this.maxWidth = e),
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
        const e = this.options.labels || {};
        let n = te(e.generateLabels, [this.chart], this) || [];
        e.filter && (n = n.filter((i) => e.filter(i, this.chart.data))),
            e.sort && (n = n.sort((i, r) => e.sort(i, r, this.chart.data))),
            this.options.reverse && n.reverse(),
            (this.legendItems = n);
    }
    fit() {
        const { options: e, ctx: n } = this;
        if (!e.display) {
            this.width = this.height = 0;
            return;
        }
        const i = e.labels,
            r = we(i.font),
            s = r.size,
            o = this._computeTitleHeight(),
            { boxWidth: l, itemHeight: a } = zd(i, s);
        let u, c;
        (n.font = r.string),
            this.isHorizontal()
                ? ((u = this.maxWidth), (c = this._fitRows(o, s, l, a) + 10))
                : ((c = this.maxHeight), (u = this._fitCols(o, r, l, a) + 10)),
            (this.width = Math.min(u, e.maxWidth || this.maxWidth)),
            (this.height = Math.min(c, e.maxHeight || this.maxHeight));
    }
    _fitRows(e, n, i, r) {
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
        let f = e;
        (s.textAlign = 'left'), (s.textBaseline = 'middle');
        let d = -1,
            h = -c;
        return (
            this.legendItems.forEach((m, v) => {
                const x = i + n / 2 + s.measureText(m.text).width;
                (v === 0 || u[u.length - 1] + x + 2 * l > o) &&
                    ((f += c), (u[u.length - (v > 0 ? 0 : 1)] = 0), (h += c), d++),
                    (a[v] = { left: 0, top: h, row: d, width: x, height: r }),
                    (u[u.length - 1] += x + l);
            }),
            f
        );
    }
    _fitCols(e, n, i, r) {
        const {
                ctx: s,
                maxHeight: o,
                options: {
                    labels: { padding: l },
                },
            } = this,
            a = (this.legendHitBoxes = []),
            u = (this.columnSizes = []),
            c = o - e;
        let f = l,
            d = 0,
            h = 0,
            m = 0,
            v = 0;
        return (
            this.legendItems.forEach((x, g) => {
                const { itemWidth: p, itemHeight: y } = Dx(i, n, s, x, r);
                g > 0 &&
                    h + y + 2 * l > c &&
                    ((f += d + l), u.push({ width: d, height: h }), (m += d + l), v++, (d = h = 0)),
                    (a[g] = { left: m, top: h, col: v, width: p, height: y }),
                    (d = Math.max(d, p)),
                    (h += y + l);
            }),
            (f += d),
            u.push({ width: d, height: h }),
            f
        );
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const e = this._computeTitleHeight(),
            {
                legendHitBoxes: n,
                options: {
                    align: i,
                    labels: { padding: r },
                    rtl: s,
                },
            } = this,
            o = Ni(s, this.left, this.width);
        if (this.isHorizontal()) {
            let l = 0,
                a = Re(i, this.left + r, this.right - this.lineWidths[l]);
            for (const u of n)
                l !== u.row &&
                    ((l = u.row), (a = Re(i, this.left + r, this.right - this.lineWidths[l]))),
                    (u.top += this.top + e + r),
                    (u.left = o.leftForLtr(o.x(a), u.width)),
                    (a += u.width + r);
        } else {
            let l = 0,
                a = Re(i, this.top + e + r, this.bottom - this.columnSizes[l].height);
            for (const u of n)
                u.col !== l &&
                    ((l = u.col),
                    (a = Re(i, this.top + e + r, this.bottom - this.columnSizes[l].height))),
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
            const e = this.ctx;
            uc(e, this), this._draw(), cc(e);
        }
    }
    _draw() {
        const { options: e, columnSizes: n, lineWidths: i, ctx: r } = this,
            { align: s, labels: o } = e,
            l = me.color,
            a = Ni(e.rtl, this.left, this.width),
            u = we(o.font),
            { padding: c } = o,
            f = u.size,
            d = f / 2;
        let h;
        this.drawTitle(),
            (r.textAlign = a.textAlign('left')),
            (r.textBaseline = 'middle'),
            (r.lineWidth = 0.5),
            (r.font = u.string);
        const { boxWidth: m, boxHeight: v, itemHeight: x } = zd(o, f),
            g = function (S, k, C) {
                if (isNaN(m) || m <= 0 || isNaN(v) || v < 0) return;
                r.save();
                const E = V(C.lineWidth, 1);
                if (
                    ((r.fillStyle = V(C.fillStyle, l)),
                    (r.lineCap = V(C.lineCap, 'butt')),
                    (r.lineDashOffset = V(C.lineDashOffset, 0)),
                    (r.lineJoin = V(C.lineJoin, 'miter')),
                    (r.lineWidth = E),
                    (r.strokeStyle = V(C.strokeStyle, l)),
                    r.setLineDash(V(C.lineDash, [])),
                    o.usePointStyle)
                ) {
                    const M = {
                            radius: (v * Math.SQRT2) / 2,
                            pointStyle: C.pointStyle,
                            rotation: C.rotation,
                            borderWidth: E,
                        },
                        R = a.xPlus(S, m / 2),
                        z = k + d;
                    Dg(r, M, R, z, o.pointStyleWidth && m);
                } else {
                    const M = k + Math.max((f - v) / 2, 0),
                        R = a.leftForLtr(S, m),
                        z = Ri(C.borderRadius);
                    r.beginPath(),
                        Object.values(z).some((Y) => Y !== 0)
                            ? Vo(r, { x: R, y: M, w: m, h: v, radius: z })
                            : r.rect(R, M, m, v),
                        r.fill(),
                        E !== 0 && r.stroke();
                }
                r.restore();
            },
            p = function (S, k, C) {
                ti(r, C.text, S, k + x / 2, u, {
                    strikethrough: C.hidden,
                    textAlign: a.textAlign(C.textAlign),
                });
            },
            y = this.isHorizontal(),
            _ = this._computeTitleHeight();
        y
            ? (h = { x: Re(s, this.left + c, this.right - i[0]), y: this.top + c + _, line: 0 })
            : (h = {
                  x: this.left + c,
                  y: Re(s, this.top + _ + c, this.bottom - n[0].height),
                  line: 0,
              }),
            Bg(this.ctx, e.textDirection);
        const w = x + c;
        this.legendItems.forEach((S, k) => {
            (r.strokeStyle = S.fontColor), (r.fillStyle = S.fontColor);
            const C = r.measureText(S.text).width,
                E = a.textAlign(S.textAlign || (S.textAlign = o.textAlign)),
                M = m + d + C;
            let R = h.x,
                z = h.y;
            a.setWidth(this.width),
                y
                    ? k > 0 &&
                      R + M + c > this.right &&
                      ((z = h.y += w),
                      h.line++,
                      (R = h.x = Re(s, this.left + c, this.right - i[h.line])))
                    : k > 0 &&
                      z + w > this.bottom &&
                      ((R = h.x = R + n[h.line].width + c),
                      h.line++,
                      (z = h.y = Re(s, this.top + _ + c, this.bottom - n[h.line].height)));
            const Y = a.x(R);
            if (
                (g(Y, z, S),
                (R = Qv(E, R + m + d, y ? R + M : this.right, e.rtl)),
                p(a.x(R), z, S),
                y)
            )
                h.x += M + c;
            else if (typeof S.text != 'string') {
                const X = u.lineHeight;
                h.y += nm(S, X);
            } else h.y += w;
        }),
            jg(this.ctx, e.textDirection);
    }
    drawTitle() {
        const e = this.options,
            n = e.title,
            i = we(n.font),
            r = ze(n.padding);
        if (!n.display) return;
        const s = Ni(e.rtl, this.left, this.width),
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
                (f = Re(e.align, f, this.right - d));
        else {
            const m = this.columnSizes.reduce((v, x) => Math.max(v, x.height), 0);
            c =
                u +
                Re(
                    e.align,
                    this.top,
                    this.bottom - m - e.labels.padding - this._computeTitleHeight()
                );
        }
        const h = Re(l, f, f + d);
        (o.textAlign = s.textAlign(lc(l))),
            (o.textBaseline = 'middle'),
            (o.strokeStyle = n.color),
            (o.fillStyle = n.color),
            (o.font = i.string),
            ti(o, n.text, h, c, i);
    }
    _computeTitleHeight() {
        const e = this.options.title,
            n = we(e.font),
            i = ze(e.padding);
        return e.display ? n.lineHeight + i.height : 0;
    }
    _getLegendItemAt(e, n) {
        let i, r, s;
        if (yr(e, this.left, this.right) && yr(n, this.top, this.bottom)) {
            for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
                if (((r = s[i]), yr(e, r.left, r.left + r.width) && yr(n, r.top, r.top + r.height)))
                    return this.legendItems[i];
        }
        return null;
    }
    handleEvent(e) {
        const n = this.options;
        if (!Ax(e.type, n)) return;
        const i = this._getLegendItemAt(e.x, e.y);
        if (e.type === 'mousemove' || e.type === 'mouseout') {
            const r = this._hoveredItem,
                s = Lx(r, i);
            r && !s && te(n.onLeave, [e, r, this], this),
                (this._hoveredItem = i),
                i && !s && te(n.onHover, [e, i, this], this);
        } else i && te(n.onClick, [e, i, this], this);
    }
}
function Dx(t, e, n, i, r) {
    const s = Rx(i, t, e, n),
        o = Nx(r, i, e.lineHeight);
    return { itemWidth: s, itemHeight: o };
}
function Rx(t, e, n, i) {
    let r = t.text;
    return (
        r && typeof r != 'string' && (r = r.reduce((s, o) => (s.length > o.length ? s : o))),
        e + n.size / 2 + i.measureText(r).width
    );
}
function Nx(t, e, n) {
    let i = t;
    return typeof e.text != 'string' && (i = nm(e, n)), i;
}
function nm(t, e) {
    const n = t.text ? t.text.length + 0.5 : 0;
    return e * n;
}
function Ax(t, e) {
    return !!(
        ((t === 'mousemove' || t === 'mouseout') && (e.onHover || e.onLeave)) ||
        (e.onClick && (t === 'click' || t === 'mouseup'))
    );
}
var zx = {
    id: 'legend',
    _element: Id,
    start(t, e, n) {
        const i = (t.legend = new Id({ ctx: t.ctx, options: n, chart: t }));
        ct.configure(t, i, n), ct.addBox(t, i);
    },
    stop(t) {
        ct.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, n) {
        const i = t.legend;
        ct.configure(t, i, n), (i.options = n);
    },
    afterUpdate(t) {
        const e = t.legend;
        e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
        display: !0,
        position: 'top',
        align: 'center',
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e, n) {
            const i = e.datasetIndex,
                r = n.chart;
            r.isDatasetVisible(i) ? (r.hide(i), (e.hidden = !0)) : (r.show(i), (e.hidden = !1));
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
                const e = t.data.datasets,
                    {
                        labels: {
                            usePointStyle: n,
                            pointStyle: i,
                            textAlign: r,
                            color: s,
                            useBorderRadius: o,
                            borderRadius: l,
                        },
                    } = t.legend.options;
                return t._getSortedDatasetMetas().map((a) => {
                    const u = a.controller.getStyle(n ? 0 : void 0),
                        c = ze(u.borderWidth);
                    return {
                        text: e[a.index].label,
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
        title: { color: (t) => t.chart.options.color, display: !1, position: 'center', text: '' },
    },
    descriptors: {
        _scriptable: (t) => !t.startsWith('on'),
        labels: { _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t) },
    },
};
class im extends Xt {
    constructor(e) {
        super(),
            (this.chart = e.chart),
            (this.options = e.options),
            (this.ctx = e.ctx),
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
    update(e, n) {
        const i = this.options;
        if (((this.left = 0), (this.top = 0), !i.display)) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        (this.width = this.right = e), (this.height = this.bottom = n);
        const r = ue(i.text) ? i.text.length : 1;
        this._padding = ze(i.padding);
        const s = r * we(i.font).lineHeight + this._padding.height;
        this.isHorizontal() ? (this.height = s) : (this.width = s);
    }
    isHorizontal() {
        const e = this.options.position;
        return e === 'top' || e === 'bottom';
    }
    _drawArgs(e) {
        const { top: n, left: i, bottom: r, right: s, options: o } = this,
            l = o.align;
        let a = 0,
            u,
            c,
            f;
        return (
            this.isHorizontal()
                ? ((c = Re(l, i, s)), (f = n + e), (u = s - i))
                : (o.position === 'left'
                      ? ((c = i + e), (f = Re(l, r, n)), (a = Se * -0.5))
                      : ((c = s - e), (f = Re(l, n, r)), (a = Se * 0.5)),
                  (u = r - n)),
            { titleX: c, titleY: f, maxWidth: u, rotation: a }
        );
    }
    draw() {
        const e = this.ctx,
            n = this.options;
        if (!n.display) return;
        const i = we(n.font),
            s = i.lineHeight / 2 + this._padding.top,
            { titleX: o, titleY: l, maxWidth: a, rotation: u } = this._drawArgs(s);
        ti(e, n.text, 0, 0, i, {
            color: n.color,
            maxWidth: a,
            rotation: u,
            textAlign: lc(n.align),
            textBaseline: 'middle',
            translation: [o, l],
        });
    }
}
function Ix(t, e) {
    const n = new im({ ctx: t.ctx, options: e, chart: t });
    ct.configure(t, n, e), ct.addBox(t, n), (t.titleBlock = n);
}
var Fx = {
    id: 'title',
    _element: im,
    start(t, e, n) {
        Ix(t, n);
    },
    stop(t) {
        const e = t.titleBlock;
        ct.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, n) {
        const i = t.titleBlock;
        ct.configure(t, i, n), (i.options = n);
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
const wr = {
    average(t) {
        if (!t.length) return !1;
        let e,
            n,
            i = 0,
            r = 0,
            s = 0;
        for (e = 0, n = t.length; e < n; ++e) {
            const o = t[e].element;
            if (o && o.hasValue()) {
                const l = o.tooltipPosition();
                (i += l.x), (r += l.y), ++s;
            }
        }
        return { x: i / s, y: r / s };
    },
    nearest(t, e) {
        if (!t.length) return !1;
        let n = e.x,
            i = e.y,
            r = Number.POSITIVE_INFINITY,
            s,
            o,
            l;
        for (s = 0, o = t.length; s < o; ++s) {
            const a = t[s].element;
            if (a && a.hasValue()) {
                const u = a.getCenterPoint(),
                    c = Xa(e, u);
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
function Pt(t, e) {
    return e && (ue(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
}
function Ft(t) {
    return (typeof t == 'string' || t instanceof String) &&
        t.indexOf(`
`) > -1
        ? t.split(`
`)
        : t;
}
function Hx(t, e) {
    const { element: n, datasetIndex: i, index: r } = e,
        s = t.getDatasetMeta(i).controller,
        { label: o, value: l } = s.getLabelAndValue(r);
    return {
        chart: t,
        label: o,
        parsed: s.getParsed(r),
        raw: t.data.datasets[i].data[r],
        formattedValue: l,
        dataset: s.getDataset(),
        dataIndex: r,
        datasetIndex: i,
        element: n,
    };
}
function Fd(t, e) {
    const n = t.chart.ctx,
        { body: i, footer: r, title: s } = t,
        { boxWidth: o, boxHeight: l } = e,
        a = we(e.bodyFont),
        u = we(e.titleFont),
        c = we(e.footerFont),
        f = s.length,
        d = r.length,
        h = i.length,
        m = ze(e.padding);
    let v = m.height,
        x = 0,
        g = i.reduce((_, w) => _ + w.before.length + w.lines.length + w.after.length, 0);
    if (
        ((g += t.beforeBody.length + t.afterBody.length),
        f && (v += f * u.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom),
        g)
    ) {
        const _ = e.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
        v += h * _ + (g - h) * a.lineHeight + (g - 1) * e.bodySpacing;
    }
    d && (v += e.footerMarginTop + d * c.lineHeight + (d - 1) * e.footerSpacing);
    let p = 0;
    const y = function (_) {
        x = Math.max(x, n.measureText(_).width + p);
    };
    return (
        n.save(),
        (n.font = u.string),
        Z(t.title, y),
        (n.font = a.string),
        Z(t.beforeBody.concat(t.afterBody), y),
        (p = e.displayColors ? o + 2 + e.boxPadding : 0),
        Z(i, (_) => {
            Z(_.before, y), Z(_.lines, y), Z(_.after, y);
        }),
        (p = 0),
        (n.font = c.string),
        Z(t.footer, y),
        n.restore(),
        (x += m.width),
        { width: x, height: v }
    );
}
function Bx(t, e) {
    const { y: n, height: i } = e;
    return n < i / 2 ? 'top' : n > t.height - i / 2 ? 'bottom' : 'center';
}
function jx(t, e, n, i) {
    const { x: r, width: s } = i,
        o = n.caretSize + n.caretPadding;
    if ((t === 'left' && r + s + o > e.width) || (t === 'right' && r - s - o < 0)) return !0;
}
function Vx(t, e, n, i) {
    const { x: r, width: s } = n,
        {
            width: o,
            chartArea: { left: l, right: a },
        } = t;
    let u = 'center';
    return (
        i === 'center'
            ? (u = r <= (l + a) / 2 ? 'left' : 'right')
            : r <= s / 2
            ? (u = 'left')
            : r >= o - s / 2 && (u = 'right'),
        jx(u, t, e, n) && (u = 'center'),
        u
    );
}
function Hd(t, e, n) {
    const i = n.yAlign || e.yAlign || Bx(t, n);
    return { xAlign: n.xAlign || e.xAlign || Vx(t, e, n, i), yAlign: i };
}
function Wx(t, e) {
    let { x: n, width: i } = t;
    return e === 'right' ? (n -= i) : e === 'center' && (n -= i / 2), n;
}
function Ux(t, e, n) {
    let { y: i, height: r } = t;
    return e === 'top' ? (i += n) : e === 'bottom' ? (i -= r + n) : (i -= r / 2), i;
}
function Bd(t, e, n, i) {
    const { caretSize: r, caretPadding: s, cornerRadius: o } = t,
        { xAlign: l, yAlign: a } = n,
        u = r + s,
        { topLeft: c, topRight: f, bottomLeft: d, bottomRight: h } = Ri(o);
    let m = Wx(e, l);
    const v = Ux(e, a, u);
    return (
        a === 'center'
            ? l === 'left'
                ? (m += u)
                : l === 'right' && (m -= u)
            : l === 'left'
            ? (m -= Math.max(c, d) + r)
            : l === 'right' && (m += Math.max(f, h) + r),
        { x: ut(m, 0, i.width - e.width), y: ut(v, 0, i.height - e.height) }
    );
}
function Ys(t, e, n) {
    const i = ze(n.padding);
    return e === 'center'
        ? t.x + t.width / 2
        : e === 'right'
        ? t.x + t.width - i.right
        : t.x + i.left;
}
function jd(t) {
    return Pt([], Ft(t));
}
function $x(t, e, n) {
    return Tn(t, { tooltip: e, tooltipItems: n, type: 'tooltip' });
}
function Vd(t, e) {
    const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t;
}
const rm = {
    beforeTitle: zt,
    title(t) {
        if (t.length > 0) {
            const e = t[0],
                n = e.chart.data.labels,
                i = n ? n.length : 0;
            if (this && this.options && this.options.mode === 'dataset')
                return e.dataset.label || '';
            if (e.label) return e.label;
            if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
        }
        return '';
    },
    afterTitle: zt,
    beforeBody: zt,
    beforeLabel: zt,
    label(t) {
        if (this && this.options && this.options.mode === 'dataset')
            return t.label + ': ' + t.formattedValue || t.formattedValue;
        let e = t.dataset.label || '';
        e && (e += ': ');
        const n = t.formattedValue;
        return re(n) || (e += n), e;
    },
    labelColor(t) {
        const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
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
    labelPointStyle(t) {
        const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
        return { pointStyle: n.pointStyle, rotation: n.rotation };
    },
    afterLabel: zt,
    afterBody: zt,
    beforeFooter: zt,
    footer: zt,
    afterFooter: zt,
};
function je(t, e, n, i) {
    const r = t[e].call(n, i);
    return typeof r > 'u' ? rm[e].call(n, i) : r;
}
class eu extends Xt {
    constructor(e) {
        super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = e.chart),
            (this.options = e.options),
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
    initialize(e) {
        (this.options = e), (this._cachedAnimations = void 0), (this.$context = void 0);
    }
    _resolveAnimations() {
        const e = this._cachedAnimations;
        if (e) return e;
        const n = this.chart,
            i = this.options.setContext(this.getContext()),
            r = i.enabled && n.options.animation && i.animations,
            s = new Wg(this.chart, r);
        return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
        return (
            this.$context || (this.$context = $x(this.chart.getContext(), this, this._tooltipItems))
        );
    }
    getTitle(e, n) {
        const { callbacks: i } = n,
            r = je(i, 'beforeTitle', this, e),
            s = je(i, 'title', this, e),
            o = je(i, 'afterTitle', this, e);
        let l = [];
        return (l = Pt(l, Ft(r))), (l = Pt(l, Ft(s))), (l = Pt(l, Ft(o))), l;
    }
    getBeforeBody(e, n) {
        return jd(je(n.callbacks, 'beforeBody', this, e));
    }
    getBody(e, n) {
        const { callbacks: i } = n,
            r = [];
        return (
            Z(e, (s) => {
                const o = { before: [], lines: [], after: [] },
                    l = Vd(i, s);
                Pt(o.before, Ft(je(l, 'beforeLabel', this, s))),
                    Pt(o.lines, je(l, 'label', this, s)),
                    Pt(o.after, Ft(je(l, 'afterLabel', this, s))),
                    r.push(o);
            }),
            r
        );
    }
    getAfterBody(e, n) {
        return jd(je(n.callbacks, 'afterBody', this, e));
    }
    getFooter(e, n) {
        const { callbacks: i } = n,
            r = je(i, 'beforeFooter', this, e),
            s = je(i, 'footer', this, e),
            o = je(i, 'afterFooter', this, e);
        let l = [];
        return (l = Pt(l, Ft(r))), (l = Pt(l, Ft(s))), (l = Pt(l, Ft(o))), l;
    }
    _createItems(e) {
        const n = this._active,
            i = this.chart.data,
            r = [],
            s = [],
            o = [];
        let l = [],
            a,
            u;
        for (a = 0, u = n.length; a < u; ++a) l.push(Hx(this.chart, n[a]));
        return (
            e.filter && (l = l.filter((c, f, d) => e.filter(c, f, d, i))),
            e.itemSort && (l = l.sort((c, f) => e.itemSort(c, f, i))),
            Z(l, (c) => {
                const f = Vd(e.callbacks, c);
                r.push(je(f, 'labelColor', this, c)),
                    s.push(je(f, 'labelPointStyle', this, c)),
                    o.push(je(f, 'labelTextColor', this, c));
            }),
            (this.labelColors = r),
            (this.labelPointStyles = s),
            (this.labelTextColors = o),
            (this.dataPoints = l),
            l
        );
    }
    update(e, n) {
        const i = this.options.setContext(this.getContext()),
            r = this._active;
        let s,
            o = [];
        if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
        else {
            const l = wr[i.position].call(this, r, this._eventPosition);
            (o = this._createItems(i)),
                (this.title = this.getTitle(o, i)),
                (this.beforeBody = this.getBeforeBody(o, i)),
                (this.body = this.getBody(o, i)),
                (this.afterBody = this.getAfterBody(o, i)),
                (this.footer = this.getFooter(o, i));
            const a = (this._size = Fd(this, i)),
                u = Object.assign({}, l, a),
                c = Hd(this.chart, i, u),
                f = Bd(i, u, c, this.chart);
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
            e &&
                i.external &&
                i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
    }
    drawCaret(e, n, i, r) {
        const s = this.getCaretPosition(e, i, r);
        n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(e, n, i) {
        const { xAlign: r, yAlign: s } = this,
            { caretSize: o, cornerRadius: l } = i,
            { topLeft: a, topRight: u, bottomLeft: c, bottomRight: f } = Ri(l),
            { x: d, y: h } = e,
            { width: m, height: v } = n;
        let x, g, p, y, _, w;
        return (
            s === 'center'
                ? ((_ = h + v / 2),
                  r === 'left'
                      ? ((x = d), (g = x - o), (y = _ + o), (w = _ - o))
                      : ((x = d + m), (g = x + o), (y = _ - o), (w = _ + o)),
                  (p = x))
                : (r === 'left'
                      ? (g = d + Math.max(a, c) + o)
                      : r === 'right'
                      ? (g = d + m - Math.max(u, f) - o)
                      : (g = this.caretX),
                  s === 'top'
                      ? ((y = h), (_ = y - o), (x = g - o), (p = g + o))
                      : ((y = h + v), (_ = y + o), (x = g + o), (p = g - o)),
                  (w = y)),
            { x1: x, x2: g, x3: p, y1: y, y2: _, y3: w }
        );
    }
    drawTitle(e, n, i) {
        const r = this.title,
            s = r.length;
        let o, l, a;
        if (s) {
            const u = Ni(i.rtl, this.x, this.width);
            for (
                e.x = Ys(this, i.titleAlign, i),
                    n.textAlign = u.textAlign(i.titleAlign),
                    n.textBaseline = 'middle',
                    o = we(i.titleFont),
                    l = i.titleSpacing,
                    n.fillStyle = i.titleColor,
                    n.font = o.string,
                    a = 0;
                a < s;
                ++a
            )
                n.fillText(r[a], u.x(e.x), e.y + o.lineHeight / 2),
                    (e.y += o.lineHeight + l),
                    a + 1 === s && (e.y += i.titleMarginBottom - l);
        }
    }
    _drawColorBox(e, n, i, r, s) {
        const o = this.labelColors[i],
            l = this.labelPointStyles[i],
            { boxHeight: a, boxWidth: u, boxPadding: c } = s,
            f = we(s.bodyFont),
            d = Ys(this, 'left', s),
            h = r.x(d),
            m = a < f.lineHeight ? (f.lineHeight - a) / 2 : 0,
            v = n.y + m;
        if (s.usePointStyle) {
            const x = {
                    radius: Math.min(u, a) / 2,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    borderWidth: 1,
                },
                g = r.leftForLtr(h, u) + u / 2,
                p = v + a / 2;
            (e.strokeStyle = s.multiKeyBackground),
                (e.fillStyle = s.multiKeyBackground),
                Za(e, x, g, p),
                (e.strokeStyle = o.borderColor),
                (e.fillStyle = o.backgroundColor),
                Za(e, x, g, p);
        } else {
            (e.lineWidth = Q(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (e.strokeStyle = o.borderColor),
                e.setLineDash(o.borderDash || []),
                (e.lineDashOffset = o.borderDashOffset || 0);
            const x = r.leftForLtr(h, u - c),
                g = r.leftForLtr(r.xPlus(h, 1), u - c - 2),
                p = Ri(o.borderRadius);
            Object.values(p).some((y) => y !== 0)
                ? (e.beginPath(),
                  (e.fillStyle = s.multiKeyBackground),
                  Vo(e, { x, y: v, w: u, h: a, radius: p }),
                  e.fill(),
                  e.stroke(),
                  (e.fillStyle = o.backgroundColor),
                  e.beginPath(),
                  Vo(e, { x: g, y: v + 1, w: u - 2, h: a - 2, radius: p }),
                  e.fill())
                : ((e.fillStyle = s.multiKeyBackground),
                  e.fillRect(x, v, u, a),
                  e.strokeRect(x, v, u, a),
                  (e.fillStyle = o.backgroundColor),
                  e.fillRect(g, v + 1, u - 2, a - 2));
        }
        e.fillStyle = this.labelTextColors[i];
    }
    drawBody(e, n, i) {
        const { body: r } = this,
            {
                bodySpacing: s,
                bodyAlign: o,
                displayColors: l,
                boxHeight: a,
                boxWidth: u,
                boxPadding: c,
            } = i,
            f = we(i.bodyFont);
        let d = f.lineHeight,
            h = 0;
        const m = Ni(i.rtl, this.x, this.width),
            v = function (C) {
                n.fillText(C, m.x(e.x + h), e.y + d / 2), (e.y += d + s);
            },
            x = m.textAlign(o);
        let g, p, y, _, w, S, k;
        for (
            n.textAlign = o,
                n.textBaseline = 'middle',
                n.font = f.string,
                e.x = Ys(this, x, i),
                n.fillStyle = i.bodyColor,
                Z(this.beforeBody, v),
                h = l && x !== 'right' ? (o === 'center' ? u / 2 + c : u + 2 + c) : 0,
                _ = 0,
                S = r.length;
            _ < S;
            ++_
        ) {
            for (
                g = r[_],
                    p = this.labelTextColors[_],
                    n.fillStyle = p,
                    Z(g.before, v),
                    y = g.lines,
                    l &&
                        y.length &&
                        (this._drawColorBox(n, e, _, m, i), (d = Math.max(f.lineHeight, a))),
                    w = 0,
                    k = y.length;
                w < k;
                ++w
            )
                v(y[w]), (d = f.lineHeight);
            Z(g.after, v);
        }
        (h = 0), (d = f.lineHeight), Z(this.afterBody, v), (e.y -= s);
    }
    drawFooter(e, n, i) {
        const r = this.footer,
            s = r.length;
        let o, l;
        if (s) {
            const a = Ni(i.rtl, this.x, this.width);
            for (
                e.x = Ys(this, i.footerAlign, i),
                    e.y += i.footerMarginTop,
                    n.textAlign = a.textAlign(i.footerAlign),
                    n.textBaseline = 'middle',
                    o = we(i.footerFont),
                    n.fillStyle = i.footerColor,
                    n.font = o.string,
                    l = 0;
                l < s;
                ++l
            )
                n.fillText(r[l], a.x(e.x), e.y + o.lineHeight / 2),
                    (e.y += o.lineHeight + i.footerSpacing);
        }
    }
    drawBackground(e, n, i, r) {
        const { xAlign: s, yAlign: o } = this,
            { x: l, y: a } = e,
            { width: u, height: c } = i,
            { topLeft: f, topRight: d, bottomLeft: h, bottomRight: m } = Ri(r.cornerRadius);
        (n.fillStyle = r.backgroundColor),
            (n.strokeStyle = r.borderColor),
            (n.lineWidth = r.borderWidth),
            n.beginPath(),
            n.moveTo(l + f, a),
            o === 'top' && this.drawCaret(e, n, i, r),
            n.lineTo(l + u - d, a),
            n.quadraticCurveTo(l + u, a, l + u, a + d),
            o === 'center' && s === 'right' && this.drawCaret(e, n, i, r),
            n.lineTo(l + u, a + c - m),
            n.quadraticCurveTo(l + u, a + c, l + u - m, a + c),
            o === 'bottom' && this.drawCaret(e, n, i, r),
            n.lineTo(l + h, a + c),
            n.quadraticCurveTo(l, a + c, l, a + c - h),
            o === 'center' && s === 'left' && this.drawCaret(e, n, i, r),
            n.lineTo(l, a + f),
            n.quadraticCurveTo(l, a, l + f, a),
            n.closePath(),
            n.fill(),
            r.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(e) {
        const n = this.chart,
            i = this.$animations,
            r = i && i.x,
            s = i && i.y;
        if (r || s) {
            const o = wr[e.position].call(this, this._active, this._eventPosition);
            if (!o) return;
            const l = (this._size = Fd(this, e)),
                a = Object.assign({}, o, this._size),
                u = Hd(n, e, a),
                c = Bd(e, a, u, n);
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
    draw(e) {
        const n = this.options.setContext(this.getContext());
        let i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(n);
        const r = { width: this.width, height: this.height },
            s = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        const o = ze(n.padding),
            l =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
        n.enabled &&
            l &&
            (e.save(),
            (e.globalAlpha = i),
            this.drawBackground(s, e, r, n),
            Bg(e, n.textDirection),
            (s.y += o.top),
            this.drawTitle(s, e, n),
            this.drawBody(s, e, n),
            this.drawFooter(s, e, n),
            jg(e, n.textDirection),
            e.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(e, n) {
        const i = this._active,
            r = e.map(({ datasetIndex: l, index: a }) => {
                const u = this.chart.getDatasetMeta(l);
                if (!u) throw new Error('Cannot find a dataset at index ' + l);
                return { datasetIndex: l, element: u.data[a], index: a };
            }),
            s = !Io(i, r),
            o = this._positionChanged(r, n);
        (s || o) &&
            ((this._active = r),
            (this._eventPosition = n),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
    }
    handleEvent(e, n, i = !0) {
        if (n && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const r = this.options,
            s = this._active || [],
            o = this._getActiveElements(e, s, n, i),
            l = this._positionChanged(o, e),
            a = n || !Io(o, s) || l;
        return (
            a &&
                ((this._active = o),
                (r.enabled || r.external) &&
                    ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, n))),
            a
        );
    }
    _getActiveElements(e, n, i, r) {
        const s = this.options;
        if (e.type === 'mouseout') return [];
        if (!r) return n;
        const o = this.chart.getElementsAtEventForMode(e, s.mode, s, i);
        return s.reverse && o.reverse(), o;
    }
    _positionChanged(e, n) {
        const { caretX: i, caretY: r, options: s } = this,
            o = wr[s.position].call(this, e, n);
        return o !== !1 && (i !== o.x || r !== o.y);
    }
}
B(eu, 'positioners', wr);
var Yx = {
    id: 'tooltip',
    _element: eu,
    positioners: wr,
    afterInit(t, e, n) {
        n && (t.tooltip = new eu({ chart: t, options: n }));
    },
    beforeUpdate(t, e, n) {
        t.tooltip && t.tooltip.initialize(n);
    },
    reset(t, e, n) {
        t.tooltip && t.tooltip.initialize(n);
    },
    afterDraw(t) {
        const e = t.tooltip;
        if (e && e._willRender()) {
            const n = { tooltip: e };
            if (t.notifyPlugins('beforeTooltipDraw', { ...n, cancelable: !0 }) === !1) return;
            e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n);
        }
    },
    afterEvent(t, e) {
        if (t.tooltip) {
            const n = e.replay;
            t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
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
        boxHeight: (t, e) => e.bodyFont.size,
        boxWidth: (t, e) => e.bodyFont.size,
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
        callbacks: rm,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
        _scriptable: (t) => t !== 'filter' && t !== 'itemSort' && t !== 'external',
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
};
const Kx = (t, e, n, i) => (
    typeof e == 'string'
        ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e }))
        : isNaN(e) && (n = null),
    n
);
function Qx(t, e, n, i) {
    const r = t.indexOf(e);
    if (r === -1) return Kx(t, e, n, i);
    const s = t.lastIndexOf(e);
    return r !== s ? n : r;
}
const Xx = (t, e) => (t === null ? null : ut(Math.round(t), 0, e));
function Wd(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
}
class tu extends ri {
    constructor(e) {
        super(e), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
    }
    init(e) {
        const n = this._addedLabels;
        if (n.length) {
            const i = this.getLabels();
            for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
            this._addedLabels = [];
        }
        super.init(e);
    }
    parse(e, n) {
        if (re(e)) return null;
        const i = this.getLabels();
        return (
            (n = isFinite(n) && i[n] === e ? n : Qx(i, e, V(n, e), this._addedLabels)),
            Xx(n, i.length - 1)
        );
    }
    determineDataLimits() {
        const { minDefined: e, maxDefined: n } = this.getUserBounds();
        let { min: i, max: r } = this.getMinMax(!0);
        this.options.bounds === 'ticks' && (e || (i = 0), n || (r = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = r);
    }
    buildTicks() {
        const e = this.min,
            n = this.max,
            i = this.options.offset,
            r = [];
        let s = this.getLabels();
        (s = e === 0 && n === s.length - 1 ? s : s.slice(e, n + 1)),
            (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
        for (let o = e; o <= n; o++) r.push({ value: o });
        return r;
    }
    getLabelForValue(e) {
        return Wd.call(this, e);
    }
    configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(e) {
        return (
            typeof e != 'number' && (e = this.parse(e)),
            e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
        );
    }
    getPixelForTick(e) {
        const n = this.ticks;
        return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
    }
    getValueForPixel(e) {
        return Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
B(tu, 'id', 'category'), B(tu, 'defaults', { ticks: { callback: Wd } });
function Gx(t, e) {
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
        } = t,
        h = s || 1,
        m = c - 1,
        { min: v, max: x } = e,
        g = !re(o),
        p = !re(l),
        y = !re(u),
        _ = (x - v) / (f + 1);
    let w = Gf((x - v) / m / h) * h,
        S,
        k,
        C,
        E;
    if (w < 1e-14 && !g && !p) return [{ value: v }, { value: x }];
    (E = Math.ceil(x / w) - Math.floor(v / w)),
        E > m && (w = Gf((E * w) / m / h) * h),
        re(a) || ((S = Math.pow(10, a)), (w = Math.ceil(w * S) / S)),
        r === 'ticks'
            ? ((k = Math.floor(v / w) * w), (C = Math.ceil(x / w) * w))
            : ((k = v), (C = x)),
        g && p && s && Hv((l - o) / s, w / 1e3)
            ? ((E = Math.round(Math.min((l - o) / w, c))), (w = (l - o) / E), (k = o), (C = l))
            : y
            ? ((k = g ? o : k), (C = p ? l : C), (E = u - 1), (w = (C - k) / E))
            : ((E = (C - k) / w),
              Dr(E, Math.round(E), w / 1e3) ? (E = Math.round(E)) : (E = Math.ceil(E)));
    const M = Math.max(Zf(w), Zf(k));
    (S = Math.pow(10, re(a) ? M : a)), (k = Math.round(k * S) / S), (C = Math.round(C * S) / S);
    let R = 0;
    for (
        g &&
        (d && k !== o
            ? (n.push({ value: o }),
              k < o && R++,
              Dr(Math.round((k + R * w) * S) / S, o, Ud(o, _, t)) && R++)
            : k < o && R++);
        R < E;
        ++R
    )
        n.push({ value: Math.round((k + R * w) * S) / S });
    return (
        p && d && C !== l
            ? n.length && Dr(n[n.length - 1].value, l, Ud(l, _, t))
                ? (n[n.length - 1].value = l)
                : n.push({ value: l })
            : (!p || C === l) && n.push({ value: C }),
        n
    );
}
function Ud(t, e, { horizontal: n, minRotation: i }) {
    const r = cn(i),
        s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
        o = 0.75 * e * ('' + t).length;
    return Math.min(e / s, o);
}
class Yo extends ri {
    constructor(e) {
        super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
    }
    parse(e, n) {
        return re(e) || ((typeof e == 'number' || e instanceof Number) && !isFinite(+e))
            ? null
            : +e;
    }
    handleTickRangeOptions() {
        const { beginAtZero: e } = this.options,
            { minDefined: n, maxDefined: i } = this.getUserBounds();
        let { min: r, max: s } = this;
        const o = (a) => (r = n ? r : a),
            l = (a) => (s = i ? s : a);
        if (e) {
            const a = Vi(r),
                u = Vi(s);
            a < 0 && u < 0 ? l(0) : a > 0 && u > 0 && o(0);
        }
        if (r === s) {
            let a = s === 0 ? 1 : Math.abs(s * 0.05);
            l(s + a), e || o(r - a);
        }
        (this.min = r), (this.max = s);
    }
    getTickLimit() {
        const e = this.options.ticks;
        let { maxTicksLimit: n, stepSize: i } = e,
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
        const e = this.options,
            n = e.ticks;
        let i = this.getTickLimit();
        i = Math.max(2, i);
        const r = {
                maxTicks: i,
                bounds: e.bounds,
                min: e.min,
                max: e.max,
                precision: n.precision,
                step: n.stepSize,
                count: n.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: n.minRotation || 0,
                includeBounds: n.includeBounds !== !1,
            },
            s = this._range || this,
            o = Gx(r, s);
        return (
            e.bounds === 'ticks' && bg(o, this, 'value'),
            e.reverse
                ? (o.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            o
        );
    }
    configure() {
        const e = this.ticks;
        let n = this.min,
            i = this.max;
        if ((super.configure(), this.options.offset && e.length)) {
            const r = (i - n) / Math.max(e.length - 1, 1) / 2;
            (n -= r), (i += r);
        }
        (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
    }
    getLabelForValue(e) {
        return ac(e, this.chart.options.locale, this.options.ticks.format);
    }
}
class nu extends Yo {
    determineDataLimits() {
        const { min: e, max: n } = this.getMinMax(!0);
        (this.min = be(e) ? e : 0), (this.max = be(n) ? n : 1), this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const e = this.isHorizontal(),
            n = e ? this.width : this.height,
            i = cn(this.options.ticks.minRotation),
            r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
            s = this._resolveTickFontOptions(0);
        return Math.ceil(n / Math.min(40, s.lineHeight / r));
    }
    getPixelForValue(e) {
        return e === null
            ? NaN
            : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
    }
    getValueForPixel(e) {
        return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
    }
}
B(nu, 'id', 'linear'), B(nu, 'defaults', { ticks: { callback: fl.formatters.numeric } });
const rs = (t) => Math.floor(un(t)),
    In = (t, e) => Math.pow(10, rs(t) + e);
function $d(t) {
    return t / Math.pow(10, rs(t)) === 1;
}
function Yd(t, e, n) {
    const i = Math.pow(10, n),
        r = Math.floor(t / i);
    return Math.ceil(e / i) - r;
}
function Zx(t, e) {
    const n = e - t;
    let i = rs(n);
    for (; Yd(t, e, i) > 10; ) i++;
    for (; Yd(t, e, i) < 10; ) i--;
    return Math.min(i, rs(t));
}
function qx(t, { min: e, max: n }) {
    e = Xe(t.min, e);
    const i = [],
        r = rs(e);
    let s = Zx(e, n),
        o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const l = Math.pow(10, s),
        a = r > s ? Math.pow(10, r) : 0,
        u = Math.round((e - a) * o) / o,
        c = Math.floor((e - a) / l / 10) * l * 10;
    let f = Math.floor((u - c) / Math.pow(10, s)),
        d = Xe(t.min, Math.round((a + c + f * Math.pow(10, s)) * o) / o);
    for (; d < n; )
        i.push({ value: d, major: $d(d), significand: f }),
            f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
            f >= 20 && (s++, (f = 2), (o = s >= 0 ? 1 : o)),
            (d = Math.round((a + c + f * Math.pow(10, s)) * o) / o);
    const h = Xe(t.max, d);
    return i.push({ value: h, major: $d(h), significand: f }), i;
}
class Kd extends ri {
    constructor(e) {
        super(e),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
    }
    parse(e, n) {
        const i = Yo.prototype.parse.apply(this, [e, n]);
        if (i === 0) {
            this._zero = !0;
            return;
        }
        return be(i) && i > 0 ? i : null;
    }
    determineDataLimits() {
        const { min: e, max: n } = this.getMinMax(!0);
        (this.min = be(e) ? Math.max(0, e) : null),
            (this.max = be(n) ? Math.max(0, n) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
                this.min !== this._suggestedMin &&
                !be(this._userMin) &&
                (this.min = e === In(this.min, 0) ? In(this.min, -1) : In(this.min, 0)),
            this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined: e, maxDefined: n } = this.getUserBounds();
        let i = this.min,
            r = this.max;
        const s = (l) => (i = e ? i : l),
            o = (l) => (r = n ? r : l);
        i === r && (i <= 0 ? (s(1), o(10)) : (s(In(i, -1)), o(In(r, 1)))),
            i <= 0 && s(In(r, -1)),
            r <= 0 && o(In(i, 1)),
            (this.min = i),
            (this.max = r);
    }
    buildTicks() {
        const e = this.options,
            n = { min: this._userMin, max: this._userMax },
            i = qx(n, this);
        return (
            e.bounds === 'ticks' && bg(i, this, 'value'),
            e.reverse
                ? (i.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            i
        );
    }
    getLabelForValue(e) {
        return e === void 0 ? '0' : ac(e, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const e = this.min;
        super.configure(), (this._startValue = un(e)), (this._valueRange = un(this.max) - un(e));
    }
    getPixelForValue(e) {
        return (
            (e === void 0 || e === 0) && (e = this.min),
            e === null || isNaN(e)
                ? NaN
                : this.getPixelForDecimal(
                      e === this.min ? 0 : (un(e) - this._startValue) / this._valueRange
                  )
        );
    }
    getValueForPixel(e) {
        const n = this.getDecimalForPixel(e);
        return Math.pow(10, this._startValue + n * this._valueRange);
    }
}
B(Kd, 'id', 'logarithmic'),
    B(Kd, 'defaults', { ticks: { callback: fl.formatters.logarithmic, major: { enabled: !0 } } });
function iu(t) {
    const e = t.ticks;
    if (e.display && t.display) {
        const n = ze(e.backdropPadding);
        return V(e.font && e.font.size, me.font.size) + n.height;
    }
    return 0;
}
function Jx(t, e, n) {
    return (n = ue(n) ? n : [n]), { w: oy(t, e.string, n), h: n.length * e.lineHeight };
}
function Qd(t, e, n, i, r) {
    return t === i || t === r
        ? { start: e - n / 2, end: e + n / 2 }
        : t < i || t > r
        ? { start: e - n, end: e }
        : { start: e, end: e + n };
}
function e_(t) {
    const e = {
            l: t.left + t._padding.left,
            r: t.right - t._padding.right,
            t: t.top + t._padding.top,
            b: t.bottom - t._padding.bottom,
        },
        n = Object.assign({}, e),
        i = [],
        r = [],
        s = t._pointLabels.length,
        o = t.options.pointLabels,
        l = o.centerPointLabels ? Se / s : 0;
    for (let a = 0; a < s; a++) {
        const u = o.setContext(t.getPointLabelContext(a));
        r[a] = u.padding;
        const c = t.getPointPosition(a, t.drawingArea + r[a], l),
            f = we(u.font),
            d = Jx(t.ctx, f, t._pointLabels[a]);
        i[a] = d;
        const h = yt(t.getIndexAngle(a) + l),
            m = Math.round(sc(h)),
            v = Qd(m, c.x, d.w, 0, 180),
            x = Qd(m, c.y, d.h, 90, 270);
        t_(n, e, h, v, x);
    }
    t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
        (t._pointLabelItems = n_(t, i, r));
}
function t_(t, e, n, i, r) {
    const s = Math.abs(Math.sin(n)),
        o = Math.abs(Math.cos(n));
    let l = 0,
        a = 0;
    i.start < e.l
        ? ((l = (e.l - i.start) / s), (t.l = Math.min(t.l, e.l - l)))
        : i.end > e.r && ((l = (i.end - e.r) / s), (t.r = Math.max(t.r, e.r + l))),
        r.start < e.t
            ? ((a = (e.t - r.start) / o), (t.t = Math.min(t.t, e.t - a)))
            : r.end > e.b && ((a = (r.end - e.b) / o), (t.b = Math.max(t.b, e.b + a)));
}
function n_(t, e, n) {
    const i = [],
        r = t._pointLabels.length,
        s = t.options,
        o = iu(s) / 2,
        l = t.drawingArea,
        a = s.pointLabels.centerPointLabels ? Se / r : 0;
    for (let u = 0; u < r; u++) {
        const c = t.getPointPosition(u, l + o + n[u], a),
            f = Math.round(sc(yt(c.angle + $e))),
            d = e[u],
            h = s_(c.y, d.h, f),
            m = i_(f),
            v = r_(c.x, d.w, m);
        i.push({ x: c.x, y: h, textAlign: m, left: v, top: h, right: v + d.w, bottom: h + d.h });
    }
    return i;
}
function i_(t) {
    return t === 0 || t === 180 ? 'center' : t < 180 ? 'left' : 'right';
}
function r_(t, e, n) {
    return n === 'right' ? (t -= e) : n === 'center' && (t -= e / 2), t;
}
function s_(t, e, n) {
    return n === 90 || n === 270 ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t;
}
function o_(t, e) {
    const {
        ctx: n,
        options: { pointLabels: i },
    } = t;
    for (let r = e - 1; r >= 0; r--) {
        const s = i.setContext(t.getPointLabelContext(r)),
            o = we(s.font),
            {
                x: l,
                y: a,
                textAlign: u,
                left: c,
                top: f,
                right: d,
                bottom: h,
            } = t._pointLabelItems[r],
            { backdropColor: m } = s;
        if (!re(m)) {
            const v = Ri(s.borderRadius),
                x = ze(s.backdropPadding);
            n.fillStyle = m;
            const g = c - x.left,
                p = f - x.top,
                y = d - c + x.width,
                _ = h - f + x.height;
            Object.values(v).some((w) => w !== 0)
                ? (n.beginPath(), Vo(n, { x: g, y: p, w: y, h: _, radius: v }), n.fill())
                : n.fillRect(g, p, y, _);
        }
        ti(n, t._pointLabels[r], l, a + o.lineHeight / 2, o, {
            color: s.color,
            textAlign: u,
            textBaseline: 'middle',
        });
    }
}
function sm(t, e, n, i) {
    const { ctx: r } = t;
    if (n) r.arc(t.xCenter, t.yCenter, e, 0, dt);
    else {
        let s = t.getPointPosition(0, e);
        r.moveTo(s.x, s.y);
        for (let o = 1; o < i; o++) (s = t.getPointPosition(o, e)), r.lineTo(s.x, s.y);
    }
}
function l_(t, e, n, i, r) {
    const s = t.ctx,
        o = e.circular,
        { color: l, lineWidth: a } = e;
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
        sm(t, n, o, i),
        s.closePath(),
        s.stroke(),
        s.restore());
}
function a_(t, e, n) {
    return Tn(t, { label: n, index: e, type: 'pointLabel' });
}
class Ks extends Yo {
    constructor(e) {
        super(e),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
    }
    setDimensions() {
        const e = (this._padding = ze(iu(this.options) / 2)),
            n = (this.width = this.maxWidth - e.width),
            i = (this.height = this.maxHeight - e.height);
        (this.xCenter = Math.floor(this.left + n / 2 + e.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + e.top)),
            (this.drawingArea = Math.floor(Math.min(n, i) / 2));
    }
    determineDataLimits() {
        const { min: e, max: n } = this.getMinMax(!1);
        (this.min = be(e) && !isNaN(e) ? e : 0),
            (this.max = be(n) && !isNaN(n) ? n : 0),
            this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / iu(this.options));
    }
    generateTickLabels(e) {
        Yo.prototype.generateTickLabels.call(this, e),
            (this._pointLabels = this.getLabels()
                .map((n, i) => {
                    const r = te(this.options.pointLabels.callback, [n, i], this);
                    return r || r === 0 ? r : '';
                })
                .filter((n, i) => this.chart.getDataVisibility(i)));
    }
    fit() {
        const e = this.options;
        e.display && e.pointLabels.display ? e_(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(e, n, i, r) {
        (this.xCenter += Math.floor((e - n) / 2)),
            (this.yCenter += Math.floor((i - r) / 2)),
            (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, n, i, r)));
    }
    getIndexAngle(e) {
        const n = dt / (this._pointLabels.length || 1),
            i = this.options.startAngle || 0;
        return yt(e * n + cn(i));
    }
    getDistanceFromCenterForValue(e) {
        if (re(e)) return NaN;
        const n = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - e) * n : (e - this.min) * n;
    }
    getValueForDistanceFromCenter(e) {
        if (re(e)) return NaN;
        const n = e / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - n : this.min + n;
    }
    getPointLabelContext(e) {
        const n = this._pointLabels || [];
        if (e >= 0 && e < n.length) {
            const i = n[e];
            return a_(this.getContext(), e, i);
        }
    }
    getPointPosition(e, n, i = 0) {
        const r = this.getIndexAngle(e) - $e + i;
        return { x: Math.cos(r) * n + this.xCenter, y: Math.sin(r) * n + this.yCenter, angle: r };
    }
    getPointPositionForValue(e, n) {
        return this.getPointPosition(e, this.getDistanceFromCenterForValue(n));
    }
    getBasePosition(e) {
        return this.getPointPositionForValue(e || 0, this.getBaseValue());
    }
    getPointLabelPosition(e) {
        const { left: n, top: i, right: r, bottom: s } = this._pointLabelItems[e];
        return { left: n, top: i, right: r, bottom: s };
    }
    drawBackground() {
        const {
            backgroundColor: e,
            grid: { circular: n },
        } = this.options;
        if (e) {
            const i = this.ctx;
            i.save(),
                i.beginPath(),
                sm(
                    this,
                    this.getDistanceFromCenterForValue(this._endValue),
                    n,
                    this._pointLabels.length
                ),
                i.closePath(),
                (i.fillStyle = e),
                i.fill(),
                i.restore();
        }
    }
    drawGrid() {
        const e = this.ctx,
            n = this.options,
            { angleLines: i, grid: r, border: s } = n,
            o = this._pointLabels.length;
        let l, a, u;
        if (
            (n.pointLabels.display && o_(this, o),
            r.display &&
                this.ticks.forEach((c, f) => {
                    if (f !== 0) {
                        a = this.getDistanceFromCenterForValue(c.value);
                        const d = this.getContext(f),
                            h = r.setContext(d),
                            m = s.setContext(d);
                        l_(this, h, a, o, m);
                    }
                }),
            i.display)
        ) {
            for (e.save(), l = o - 1; l >= 0; l--) {
                const c = i.setContext(this.getPointLabelContext(l)),
                    { color: f, lineWidth: d } = c;
                !d ||
                    !f ||
                    ((e.lineWidth = d),
                    (e.strokeStyle = f),
                    e.setLineDash(c.borderDash),
                    (e.lineDashOffset = c.borderDashOffset),
                    (a = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max)),
                    (u = this.getPointPosition(l, a)),
                    e.beginPath(),
                    e.moveTo(this.xCenter, this.yCenter),
                    e.lineTo(u.x, u.y),
                    e.stroke());
            }
            e.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const e = this.ctx,
            n = this.options,
            i = n.ticks;
        if (!i.display) return;
        const r = this.getIndexAngle(0);
        let s, o;
        e.save(),
            e.translate(this.xCenter, this.yCenter),
            e.rotate(r),
            (e.textAlign = 'center'),
            (e.textBaseline = 'middle'),
            this.ticks.forEach((l, a) => {
                if (a === 0 && !n.reverse) return;
                const u = i.setContext(this.getContext(a)),
                    c = we(u.font);
                if (
                    ((s = this.getDistanceFromCenterForValue(this.ticks[a].value)),
                    u.showLabelBackdrop)
                ) {
                    (e.font = c.string),
                        (o = e.measureText(l.label).width),
                        (e.fillStyle = u.backdropColor);
                    const f = ze(u.backdropPadding);
                    e.fillRect(
                        -o / 2 - f.left,
                        -s - c.size / 2 - f.top,
                        o + f.width,
                        c.size + f.height
                    );
                }
                ti(e, l.label, 0, -s, c, { color: u.color });
            }),
            e.restore();
    }
    drawTitle() {}
}
B(Ks, 'id', 'radialLinear'),
    B(Ks, 'defaults', {
        display: !0,
        animate: !0,
        position: 'chartArea',
        angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: fl.formatters.numeric },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback(e) {
                return e;
            },
            padding: 5,
            centerPointLabels: !1,
        },
    }),
    B(Ks, 'defaultRoutes', {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color',
    }),
    B(Ks, 'descriptors', { angleLines: { _fallback: 'grid' } });
const hl = {
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
    We = Object.keys(hl);
function u_(t, e) {
    return t - e;
}
function Xd(t, e) {
    if (re(e)) return null;
    const n = t._adapter,
        { parser: i, round: r, isoWeekday: s } = t._parseOpts;
    let o = e;
    return (
        typeof i == 'function' && (o = i(o)),
        be(o) || (o = typeof i == 'string' ? n.parse(o, i) : n.parse(o)),
        o === null
            ? null
            : (r &&
                  (o =
                      r === 'week' && (ts(s) || s === !0)
                          ? n.startOf(o, 'isoWeek', s)
                          : n.startOf(o, r)),
              +o)
    );
}
function Gd(t, e, n, i) {
    const r = We.length;
    for (let s = We.indexOf(t); s < r - 1; ++s) {
        const o = hl[We[s]],
            l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((n - e) / (l * o.size)) <= i) return We[s];
    }
    return We[r - 1];
}
function c_(t, e, n, i, r) {
    for (let s = We.length - 1; s >= We.indexOf(n); s--) {
        const o = We[s];
        if (hl[o].common && t._adapter.diff(r, i, o) >= e - 1) return o;
    }
    return We[n ? We.indexOf(n) : 0];
}
function f_(t) {
    for (let e = We.indexOf(t) + 1, n = We.length; e < n; ++e) if (hl[We[e]].common) return We[e];
}
function Zd(t, e, n) {
    if (!n) t[e] = !0;
    else if (n.length) {
        const { lo: i, hi: r } = oc(n, e),
            s = n[i] >= e ? n[i] : n[r];
        t[s] = !0;
    }
}
function d_(t, e, n, i) {
    const r = t._adapter,
        s = +r.startOf(e[0].value, i),
        o = e[e.length - 1].value;
    let l, a;
    for (l = s; l <= o; l = +r.add(l, 1, i)) (a = n[l]), a >= 0 && (e[a].major = !0);
    return e;
}
function qd(t, e, n) {
    const i = [],
        r = {},
        s = e.length;
    let o, l;
    for (o = 0; o < s; ++o) (l = e[o]), (r[l] = o), i.push({ value: l, major: !1 });
    return s === 0 || !n ? i : d_(t, i, r, n);
}
class Ko extends ri {
    constructor(e) {
        super(e),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
    }
    init(e, n = {}) {
        const i = e.time || (e.time = {}),
            r = (this._adapter = new h2._date(e.adapters.date));
        r.init(n),
            Lr(i.displayFormats, r.formats()),
            (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
            super.init(e),
            (this._normalized = n.normalized);
    }
    parse(e, n) {
        return e === void 0 ? null : Xd(this, e);
    }
    beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
        const e = this.options,
            n = this._adapter,
            i = e.time.unit || 'day';
        let { min: r, max: s, minDefined: o, maxDefined: l } = this.getUserBounds();
        function a(u) {
            !o && !isNaN(u.min) && (r = Math.min(r, u.min)),
                !l && !isNaN(u.max) && (s = Math.max(s, u.max));
        }
        (!o || !l) &&
            (a(this._getLabelBounds()),
            (e.bounds !== 'ticks' || e.ticks.source !== 'labels') && a(this.getMinMax(!1))),
            (r = be(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
            (s = be(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
            (this.min = Math.min(r, s - 1)),
            (this.max = Math.max(r + 1, s));
    }
    _getLabelBounds() {
        const e = this.getLabelTimestamps();
        let n = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return e.length && ((n = e[0]), (i = e[e.length - 1])), { min: n, max: i };
    }
    buildTicks() {
        const e = this.options,
            n = e.time,
            i = e.ticks,
            r = i.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        e.bounds === 'ticks' &&
            r.length &&
            ((this.min = this._userMin || r[0]), (this.max = this._userMax || r[r.length - 1]));
        const s = this.min,
            o = this.max,
            l = Uv(r, s, o);
        return (
            (this._unit =
                n.unit ||
                (i.autoSkip
                    ? Gd(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
                    : c_(this, l.length, n.minUnit, this.min, this.max))),
            (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : f_(this._unit)),
            this.initOffsets(r),
            e.reverse && l.reverse(),
            qd(this, l, this._majorUnit)
        );
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
    }
    initOffsets(e = []) {
        let n = 0,
            i = 0,
            r,
            s;
        this.options.offset &&
            e.length &&
            ((r = this.getDecimalForValue(e[0])),
            e.length === 1 ? (n = 1 - r) : (n = (this.getDecimalForValue(e[1]) - r) / 2),
            (s = this.getDecimalForValue(e[e.length - 1])),
            e.length === 1 ? (i = s) : (i = (s - this.getDecimalForValue(e[e.length - 2])) / 2));
        const o = e.length < 3 ? 0.5 : 0.25;
        (n = ut(n, 0, o)),
            (i = ut(i, 0, o)),
            (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
    }
    _generate() {
        const e = this._adapter,
            n = this.min,
            i = this.max,
            r = this.options,
            s = r.time,
            o = s.unit || Gd(s.minUnit, n, i, this._getLabelCapacity(n)),
            l = V(r.ticks.stepSize, 1),
            a = o === 'week' ? s.isoWeekday : !1,
            u = ts(a) || a === !0,
            c = {};
        let f = n,
            d,
            h;
        if (
            (u && (f = +e.startOf(f, 'isoWeek', a)),
            (f = +e.startOf(f, u ? 'day' : o)),
            e.diff(i, n, o) > 1e5 * l)
        )
            throw new Error(n + ' and ' + i + ' are too far apart with stepSize of ' + l + ' ' + o);
        const m = r.ticks.source === 'data' && this.getDataTimestamps();
        for (d = f, h = 0; d < i; d = +e.add(d, l, o), h++) Zd(c, d, m);
        return (
            (d === i || r.bounds === 'ticks' || h === 1) && Zd(c, d, m),
            Object.keys(c)
                .sort((v, x) => v - x)
                .map((v) => +v)
        );
    }
    getLabelForValue(e) {
        const n = this._adapter,
            i = this.options.time;
        return i.tooltipFormat
            ? n.format(e, i.tooltipFormat)
            : n.format(e, i.displayFormats.datetime);
    }
    format(e, n) {
        const r = this.options.time.displayFormats,
            s = this._unit,
            o = n || r[s];
        return this._adapter.format(e, o);
    }
    _tickFormatFunction(e, n, i, r) {
        const s = this.options,
            o = s.ticks.callback;
        if (o) return te(o, [e, n, i], this);
        const l = s.time.displayFormats,
            a = this._unit,
            u = this._majorUnit,
            c = a && l[a],
            f = u && l[u],
            d = i[n],
            h = u && f && d && d.major;
        return this._adapter.format(e, r || (h ? f : c));
    }
    generateTickLabels(e) {
        let n, i, r;
        for (n = 0, i = e.length; n < i; ++n)
            (r = e[n]), (r.label = this._tickFormatFunction(r.value, n, e));
    }
    getDecimalForValue(e) {
        return e === null ? NaN : (e - this.min) / (this.max - this.min);
    }
    getPixelForValue(e) {
        const n = this._offsets,
            i = this.getDecimalForValue(e);
        return this.getPixelForDecimal((n.start + i) * n.factor);
    }
    getValueForPixel(e) {
        const n = this._offsets,
            i = this.getDecimalForPixel(e) / n.factor - n.end;
        return this.min + i * (this.max - this.min);
    }
    _getLabelSize(e) {
        const n = this.options.ticks,
            i = this.ctx.measureText(e).width,
            r = cn(this.isHorizontal() ? n.maxRotation : n.minRotation),
            s = Math.cos(r),
            o = Math.sin(r),
            l = this._resolveTickFontOptions(0).size;
        return { w: i * s + l * o, h: i * o + l * s };
    }
    _getLabelCapacity(e) {
        const n = this.options.time,
            i = n.displayFormats,
            r = i[n.unit] || i.millisecond,
            s = this._tickFormatFunction(e, 0, qd(this, [e], this._majorUnit), r),
            o = this._getLabelSize(s),
            l = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
        return l > 0 ? l : 1;
    }
    getDataTimestamps() {
        let e = this._cache.data || [],
            n,
            i;
        if (e.length) return e;
        const r = this.getMatchingVisibleMetas();
        if (this._normalized && r.length)
            return (this._cache.data = r[0].controller.getAllParsedValues(this));
        for (n = 0, i = r.length; n < i; ++n)
            e = e.concat(r[n].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(e));
    }
    getLabelTimestamps() {
        const e = this._cache.labels || [];
        let n, i;
        if (e.length) return e;
        const r = this.getLabels();
        for (n = 0, i = r.length; n < i; ++n) e.push(Xd(this, r[n]));
        return (this._cache.labels = this._normalized ? e : this.normalize(e));
    }
    normalize(e) {
        return Yv(e.sort(u_));
    }
}
B(Ko, 'id', 'time'),
    B(Ko, 'defaults', {
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
function Qs(t, e, n) {
    let i = 0,
        r = t.length - 1,
        s,
        o,
        l,
        a;
    n
        ? (e >= t[i].pos && e <= t[r].pos && ({ lo: i, hi: r } = $n(t, 'pos', e)),
          ({ pos: s, time: l } = t[i]),
          ({ pos: o, time: a } = t[r]))
        : (e >= t[i].time && e <= t[r].time && ({ lo: i, hi: r } = $n(t, 'time', e)),
          ({ time: s, pos: l } = t[i]),
          ({ time: o, pos: a } = t[r]));
    const u = o - s;
    return u ? l + ((a - l) * (e - s)) / u : l;
}
class Jd extends Ko {
    constructor(e) {
        super(e), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
        const e = this._getTimestampsForTable(),
            n = (this._table = this.buildLookupTable(e));
        (this._minPos = Qs(n, this.min)),
            (this._tableRange = Qs(n, this.max) - this._minPos),
            super.initOffsets(e);
    }
    buildLookupTable(e) {
        const { min: n, max: i } = this,
            r = [],
            s = [];
        let o, l, a, u, c;
        for (o = 0, l = e.length; o < l; ++o) (u = e[o]), u >= n && u <= i && r.push(u);
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
        let e = this._cache.all || [];
        if (e.length) return e;
        const n = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return (
            n.length && i.length ? (e = this.normalize(n.concat(i))) : (e = n.length ? n : i),
            (e = this._cache.all = e),
            e
        );
    }
    getDecimalForValue(e) {
        return (Qs(this._table, e) - this._minPos) / this._tableRange;
    }
    getValueForPixel(e) {
        const n = this._offsets,
            i = this.getDecimalForPixel(e) / n.factor - n.end;
        return Qs(this._table, i * this._tableRange + this._minPos, !0);
    }
}
B(Jd, 'id', 'timeseries'), B(Jd, 'defaults', Ko.defaults);
const om = 'label';
function eh(t, e) {
    typeof t == 'function' ? t(e) : t && (t.current = e);
}
function h_(t, e) {
    const n = t.options;
    n && e && Object.assign(n, e);
}
function lm(t, e) {
    t.labels = e;
}
function am(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : om;
    const i = [];
    t.datasets = e.map((r) => {
        const s = t.datasets.find((o) => o[n] === r[n]);
        return !s || !r.data || i.includes(s) ? { ...r } : (i.push(s), Object.assign(s, r), s);
    });
}
function p_(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : om;
    const n = { labels: [], datasets: [] };
    return lm(n, t.labels), am(n, t.datasets, e), n;
}
function g_(t, e) {
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
        } = t,
        h = T.exports.useRef(null),
        m = T.exports.useRef(),
        v = () => {
            !h.current ||
                ((m.current = new Lt(h.current, {
                    type: o,
                    data: p_(l, s),
                    options: a && { ...a },
                    plugins: u,
                })),
                eh(e, m.current));
        },
        x = () => {
            eh(e, null), m.current && (m.current.destroy(), (m.current = null));
        };
    return (
        T.exports.useEffect(() => {
            !r && m.current && a && h_(m.current, a);
        }, [r, a]),
        T.exports.useEffect(() => {
            !r && m.current && lm(m.current.config.data, l.labels);
        }, [r, l.labels]),
        T.exports.useEffect(() => {
            !r && m.current && l.datasets && am(m.current.config.data, l.datasets, s);
        }, [r, l.datasets]),
        T.exports.useEffect(() => {
            !m.current || (r ? (x(), setTimeout(v)) : m.current.update(f));
        }, [r, a, l.labels, l.datasets, f]),
        T.exports.useEffect(() => {
            !m.current || (x(), setTimeout(v));
        }, [o]),
        T.exports.useEffect(() => (v(), () => x()), []),
        b('canvas', {
            ...Object.assign({ ref: h, role: 'img', height: n, width: i }, d),
            children: c,
        })
    );
}
const m_ = T.exports.forwardRef(g_);
function v_(t, e) {
    return (
        Lt.register(e),
        T.exports.forwardRef((n, i) => b(m_, { ...Object.assign({}, n, { ref: i, type: t }) }))
    );
}
const y_ = v_('line', ao);
Lt.register(tu, nu, fo, _r, Fx, Yx, zx);
const x_ = ({ chartData: t }) => {
    const e = {
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
        children: b(y_, {
            options: e,
            data: {
                labels: n,
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: t,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            },
        }),
    });
};
function um(t) {
    return On({
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
    })(t);
}
const { ipcRenderer: th } = require('electron'),
    __ = ({ availablePorts: t, setAvailablePorts: e, setSelectedPort: n, isMeasuring: i }) => {
        const r = () => {
            th.send('portRequest', 'client portRequest');
        };
        return (
            th.on('portResponse', (s, o) => {
                e(o);
            }),
            J('div', {
                className: 'inline-flex w-1/2 justify-center',
                children: [
                    b('form', {
                        onSubmit: (s) => {
                            s.preventDefault(), r();
                        },
                        className: 'flex items-center mr-2',
                        children: J('button', {
                            type: 'submit',
                            className: 'button inline-flex items-center justify-center',
                            children: [
                                b('span', { className: 'pr-1', children: 'Refresh ports' }),
                                b(um, { className: 'w-4 h-4' }),
                            ],
                        }),
                    }),
                    b('form', {
                        className: 'flex items-center ',
                        children: J('select', {
                            id: 'ports',
                            disabled: i,
                            onChange: (s) => {
                                s.target.value.includes(' ') ? n('') : n(s.target.value);
                            },
                            className:
                                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-60 h-10',
                            children: [
                                b('option', { children: 'Select Arduino port' }, 'unavailable'),
                                t
                                    ? t.map((s) =>
                                          s.manufacturer
                                              ? J(
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
function w_(t) {
    return On({
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
    })(t);
}
function S_(t) {
    return On({
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
    })(t);
}
function bn(t) {
    return (
        (bn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e &&
                          typeof Symbol == 'function' &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                  }),
        bn(t)
    );
}
function k_(t, e) {
    if (bn(t) !== 'object' || t === null) return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e || 'default');
        if (bn(i) !== 'object') return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(t);
}
function C_(t) {
    var e = k_(t, 'string');
    return bn(e) === 'symbol' ? e : String(e);
}
function _t(t, e, n) {
    return (
        (e = C_(e)),
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function ru(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
}
function b_(t) {
    if (Array.isArray(t)) return ru(t);
}
function M_(t) {
    if ((typeof Symbol < 'u' && t[Symbol.iterator] != null) || t['@@iterator'] != null)
        return Array.from(t);
}
function cm(t, e) {
    if (!!t) {
        if (typeof t == 'string') return ru(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if (
            (n === 'Object' && t.constructor && (n = t.constructor.name),
            n === 'Map' || n === 'Set')
        )
            return Array.from(t);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return ru(t, e);
    }
}
function E_() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fn(t) {
    return b_(t) || M_(t) || cm(t) || E_();
}
function P_(t) {
    if (Array.isArray(t)) return t;
}
function O_(t, e) {
    var n = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
    if (n != null) {
        var i,
            r,
            s,
            o,
            l = [],
            a = !0,
            u = !1;
        try {
            if (((s = (n = n.call(t)).next), e === 0)) {
                if (Object(n) !== n) return;
                a = !1;
            } else for (; !(a = (i = s.call(n)).done) && (l.push(i.value), l.length !== e); a = !0);
        } catch (c) {
            (u = !0), (r = c);
        } finally {
            try {
                if (!a && n.return != null && ((o = n.return()), Object(o) !== o)) return;
            } finally {
                if (u) throw r;
            }
        }
        return l;
    }
}
function T_() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ze(t, e) {
    return P_(t) || O_(t, e) || cm(t, e) || T_();
}
var fm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (t) {
    (function () {
        var e = {}.hasOwnProperty;
        function n() {
            for (var i = [], r = 0; r < arguments.length; r++) {
                var s = arguments[r];
                if (!!s) {
                    var o = typeof s;
                    if (o === 'string' || o === 'number') i.push(s);
                    else if (Array.isArray(s)) {
                        if (s.length) {
                            var l = n.apply(null, s);
                            l && i.push(l);
                        }
                    } else if (o === 'object') {
                        if (
                            s.toString !== Object.prototype.toString &&
                            !s.toString.toString().includes('[native code]')
                        ) {
                            i.push(s.toString());
                            continue;
                        }
                        for (var a in s) e.call(s, a) && s[a] && i.push(a);
                    }
                }
            }
            return i.join(' ');
        }
        t.exports ? ((n.default = n), (t.exports = n)) : (window.classNames = n);
    })();
})(fm);
const ds = fm.exports;
var su = {},
    L_ = function (e) {};
function D_(t, e) {}
function R_(t, e) {}
function N_() {
    su = {};
}
function dm(t, e, n) {
    !e && !su[n] && (t(!1, n), (su[n] = !0));
}
function pl(t, e) {
    dm(D_, t, e);
}
function A_(t, e) {
    dm(R_, t, e);
}
pl.preMessage = L_;
pl.resetWarned = N_;
pl.noteOnce = A_;
function z_(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        i = new Set();
    function r(s, o) {
        var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
            a = i.has(s);
        if ((pl(!a, 'Warning: There may be circular references'), a)) return !1;
        if (s === o) return !0;
        if (n && l > 1) return !1;
        i.add(s);
        var u = l + 1;
        if (Array.isArray(s)) {
            if (!Array.isArray(o) || s.length !== o.length) return !1;
            for (var c = 0; c < s.length; c++) if (!r(s[c], o[c], u)) return !1;
            return !0;
        }
        if (s && o && bn(s) === 'object' && bn(o) === 'object') {
            var f = Object.keys(s);
            return f.length !== Object.keys(o).length
                ? !1
                : f.every(function (d) {
                      return r(s[d], o[d], u);
                  });
        }
        return !1;
    }
    return r(t, e);
}
function nh(t) {
    var e = T.exports.useRef();
    e.current = t;
    var n = T.exports.useCallback(function () {
        for (var i, r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
        return (i = e.current) === null || i === void 0 ? void 0 : i.call.apply(i, [e].concat(s));
    }, []);
    return n;
}
function I_() {
    return !!(typeof window < 'u' && window.document && window.document.createElement);
}
var ih = I_() ? T.exports.useLayoutEffect : T.exports.useEffect,
    rh = function (e, n) {
        var i = T.exports.useRef(!0);
        ih(function () {
            if (!i.current) return e();
        }, n),
            ih(function () {
                return (
                    (i.current = !1),
                    function () {
                        i.current = !0;
                    }
                );
            }, []);
    };
function sh(t) {
    var e = T.exports.useRef(!1),
        n = T.exports.useState(t),
        i = Ze(n, 2),
        r = i[0],
        s = i[1];
    T.exports.useEffect(function () {
        return (
            (e.current = !1),
            function () {
                e.current = !0;
            }
        );
    }, []);
    function o(l, a) {
        (a && e.current) || s(l);
    }
    return [r, o];
}
function ql(t) {
    return t !== void 0;
}
function F_(t, e) {
    var n = e || {},
        i = n.defaultValue,
        r = n.value,
        s = n.onChange,
        o = n.postState,
        l = sh(function () {
            return ql(r)
                ? r
                : ql(i)
                ? typeof i == 'function'
                    ? i()
                    : i
                : typeof t == 'function'
                ? t()
                : t;
        }),
        a = Ze(l, 2),
        u = a[0],
        c = a[1],
        f = r !== void 0 ? r : u,
        d = o ? o(f) : f,
        h = nh(s),
        m = sh([f]),
        v = Ze(m, 2),
        x = v[0],
        g = v[1];
    rh(
        function () {
            var y = x[0];
            u !== y && h(u, y);
        },
        [x]
    ),
        rh(
            function () {
                ql(r) || c(r);
            },
            [r]
        );
    var p = nh(function (y, _) {
        c(y, _), g([f], _);
    });
    return [d, p];
}
function H_(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        r,
        s;
    for (s = 0; s < i.length; s++) (r = i[s]), !(e.indexOf(r) >= 0) && (n[r] = t[r]);
    return n;
}
function hm(t, e) {
    if (t == null) return {};
    var n = H_(t, e),
        i,
        r;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        for (r = 0; r < s.length; r++)
            (i = s[r]),
                !(e.indexOf(i) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]));
    }
    return n;
}
function oh(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
            (i = i.filter(function (r) {
                return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function Rt(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? oh(Object(n), !0).forEach(function (i) {
                  _t(t, i, n[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : oh(Object(n)).forEach(function (i) {
                  Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
              });
    }
    return t;
}
var N = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
            var n = e.keyCode;
            if ((e.altKey && !e.ctrlKey) || e.metaKey || (n >= N.F1 && n <= N.F12)) return !1;
            switch (n) {
                case N.ALT:
                case N.CAPS_LOCK:
                case N.CONTEXT_MENU:
                case N.CTRL:
                case N.DOWN:
                case N.END:
                case N.ESC:
                case N.HOME:
                case N.INSERT:
                case N.LEFT:
                case N.MAC_FF_META:
                case N.META:
                case N.NUMLOCK:
                case N.NUM_CENTER:
                case N.PAGE_DOWN:
                case N.PAGE_UP:
                case N.PAUSE:
                case N.PRINT_SCREEN:
                case N.RIGHT:
                case N.SHIFT:
                case N.UP:
                case N.WIN_KEY:
                case N.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0;
            }
        },
        isCharacterKey: function (e) {
            if (
                (e >= N.ZERO && e <= N.NINE) ||
                (e >= N.NUM_ZERO && e <= N.NUM_MULTIPLY) ||
                (e >= N.A && e <= N.Z) ||
                (window.navigator.userAgent.indexOf('WebKit') !== -1 && e === 0)
            )
                return !0;
            switch (e) {
                case N.SPACE:
                case N.QUESTION_MARK:
                case N.NUM_PLUS:
                case N.NUM_MINUS:
                case N.NUM_PERIOD:
                case N.NUM_DIVISION:
                case N.SEMICOLON:
                case N.DASH:
                case N.EQUALS:
                case N.COMMA:
                case N.PERIOD:
                case N.SLASH:
                case N.APOSTROPHE:
                case N.SINGLE_QUOTE:
                case N.OPEN_SQUARE_BRACKET:
                case N.BACKSLASH:
                case N.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1;
            }
        },
    },
    si = T.exports.createContext({
        min: 0,
        max: 0,
        direction: 'ltr',
        step: 1,
        includedStart: 0,
        includedEnd: 0,
        tabIndex: 0,
        keyboard: !0,
    });
function ou(t, e, n) {
    return (t - e) / (n - e);
}
function mc(t, e, n, i) {
    var r = ou(e, n, i),
        s = {};
    switch (t) {
        case 'rtl':
            (s.right = ''.concat(r * 100, '%')), (s.transform = 'translateX(50%)');
            break;
        case 'btt':
            (s.bottom = ''.concat(r * 100, '%')), (s.transform = 'translateY(50%)');
            break;
        case 'ttb':
            (s.top = ''.concat(r * 100, '%')), (s.transform = 'translateY(-50%)');
            break;
        default:
            (s.left = ''.concat(r * 100, '%')), (s.transform = 'translateX(-50%)');
            break;
    }
    return s;
}
function Mi(t, e) {
    return Array.isArray(t) ? t[e] : t;
}
var B_ = [
        'prefixCls',
        'value',
        'valueIndex',
        'onStartMove',
        'style',
        'render',
        'dragging',
        'onOffsetChange',
    ],
    j_ = T.exports.forwardRef(function (t, e) {
        var n,
            i,
            r = t.prefixCls,
            s = t.value,
            o = t.valueIndex,
            l = t.onStartMove,
            a = t.style,
            u = t.render,
            c = t.dragging,
            f = t.onOffsetChange,
            d = hm(t, B_),
            h = T.exports.useContext(si),
            m = h.min,
            v = h.max,
            x = h.direction,
            g = h.disabled,
            p = h.keyboard,
            y = h.range,
            _ = h.tabIndex,
            w = h.ariaLabelForHandle,
            S = h.ariaLabelledByForHandle,
            k = h.ariaValueTextFormatterForHandle,
            C = ''.concat(r, '-handle'),
            E = function (X) {
                g || l(X, o);
            },
            M = function (X) {
                if (!g && p) {
                    var I = null;
                    switch (X.which || X.keyCode) {
                        case N.LEFT:
                            I = x === 'ltr' || x === 'btt' ? -1 : 1;
                            break;
                        case N.RIGHT:
                            I = x === 'ltr' || x === 'btt' ? 1 : -1;
                            break;
                        case N.UP:
                            I = x !== 'ttb' ? 1 : -1;
                            break;
                        case N.DOWN:
                            I = x !== 'ttb' ? -1 : 1;
                            break;
                        case N.HOME:
                            I = 'min';
                            break;
                        case N.END:
                            I = 'max';
                            break;
                        case N.PAGE_UP:
                            I = 2;
                            break;
                        case N.PAGE_DOWN:
                            I = -2;
                            break;
                    }
                    I !== null && (X.preventDefault(), f(I, o));
                }
            },
            R = mc(x, s, m, v),
            z = b('div', {
                ref: e,
                className: ds(
                    C,
                    ((n = {}),
                    _t(n, ''.concat(C, '-').concat(o + 1), y),
                    _t(n, ''.concat(C, '-dragging'), c),
                    n)
                ),
                style: Rt(Rt({}, R), a),
                onMouseDown: E,
                onTouchStart: E,
                onKeyDown: M,
                tabIndex: g ? null : Mi(_, o),
                role: 'slider',
                'aria-valuemin': m,
                'aria-valuemax': v,
                'aria-valuenow': s,
                'aria-disabled': g,
                'aria-label': Mi(w, o),
                'aria-labelledby': Mi(S, o),
                'aria-valuetext': (i = Mi(k, o)) === null || i === void 0 ? void 0 : i(s),
                'aria-orientation': x === 'ltr' || x === 'rtl' ? 'horizontal' : 'vertical',
                ...d,
            });
        return u && (z = u(z, { index: o, prefixCls: r, value: s, dragging: c })), z;
    }),
    V_ = [
        'prefixCls',
        'style',
        'onStartMove',
        'onOffsetChange',
        'values',
        'handleRender',
        'draggingIndex',
    ],
    W_ = T.exports.forwardRef(function (t, e) {
        var n = t.prefixCls,
            i = t.style,
            r = t.onStartMove,
            s = t.onOffsetChange,
            o = t.values,
            l = t.handleRender,
            a = t.draggingIndex,
            u = hm(t, V_),
            c = T.exports.useRef({});
        return (
            T.exports.useImperativeHandle(e, function () {
                return {
                    focus: function (d) {
                        var h;
                        (h = c.current[d]) === null || h === void 0 || h.focus();
                    },
                };
            }),
            b(xg, {
                children: o.map(function (f, d) {
                    return b(
                        j_,
                        {
                            ref: function (m) {
                                m ? (c.current[d] = m) : delete c.current[d];
                            },
                            dragging: a === d,
                            prefixCls: n,
                            style: Mi(i, d),
                            value: f,
                            valueIndex: d,
                            onStartMove: r,
                            onOffsetChange: s,
                            render: l,
                            ...u,
                        },
                        d
                    );
                }),
            })
        );
    });
function lh(t) {
    var e = 'touches' in t ? t.touches[0] : t;
    return { pageX: e.pageX, pageY: e.pageY };
}
function U_(t, e, n, i, r, s, o, l, a) {
    var u = T.exports.useState(null),
        c = Ze(u, 2),
        f = c[0],
        d = c[1],
        h = T.exports.useState(-1),
        m = Ze(h, 2),
        v = m[0],
        x = m[1],
        g = T.exports.useState(n),
        p = Ze(g, 2),
        y = p[0],
        _ = p[1],
        w = T.exports.useState(n),
        S = Ze(w, 2),
        k = S[0],
        C = S[1],
        E = T.exports.useRef(null),
        M = T.exports.useRef(null);
    T.exports.useEffect(
        function () {
            v === -1 && _(n);
        },
        [n, v]
    ),
        T.exports.useEffect(function () {
            return function () {
                document.removeEventListener('mousemove', E.current),
                    document.removeEventListener('mouseup', M.current),
                    document.removeEventListener('touchmove', E.current),
                    document.removeEventListener('touchend', M.current);
            };
        }, []);
    var R = function (H, O) {
            y.some(function (D, A) {
                return D !== H[A];
            }) && (O !== void 0 && d(O), _(H), o(H));
        },
        z = function (H, O) {
            if (H === -1) {
                var D = k[0],
                    A = k[k.length - 1],
                    $ = i - D,
                    K = r - A,
                    ee = O * (r - i);
                (ee = Math.max(ee, $)), (ee = Math.min(ee, K));
                var pe = s(D + ee);
                ee = pe - D;
                var Ee = k.map(function (li) {
                    return li + ee;
                });
                R(Ee);
            } else {
                var oe = (r - i) * O,
                    it = fn(y);
                it[H] = k[H];
                var oi = a(it, oe, H, 'dist');
                R(oi.values, oi.value);
            }
        },
        Y = T.exports.useRef(z);
    Y.current = z;
    var X = function (H, O) {
            H.stopPropagation();
            var D = n[O];
            x(O), d(D), C(n);
            var A = lh(H),
                $ = A.pageX,
                K = A.pageY,
                ee = function (oe) {
                    oe.preventDefault();
                    var it = lh(oe),
                        oi = it.pageX,
                        li = it.pageY,
                        Qi = oi - $,
                        Xi = li - K,
                        Gi = t.current.getBoundingClientRect(),
                        Zi = Gi.width,
                        Zt = Gi.height,
                        bt;
                    switch (e) {
                        case 'btt':
                            bt = -Xi / Zt;
                            break;
                        case 'ttb':
                            bt = Xi / Zt;
                            break;
                        case 'rtl':
                            bt = -Qi / Zi;
                            break;
                        default:
                            bt = Qi / Zi;
                    }
                    Y.current(O, bt);
                },
                pe = function Ee(oe) {
                    oe.preventDefault(),
                        document.removeEventListener('mouseup', Ee),
                        document.removeEventListener('mousemove', ee),
                        document.removeEventListener('touchend', Ee),
                        document.removeEventListener('touchmove', ee),
                        (E.current = null),
                        (M.current = null),
                        x(-1),
                        l();
                };
            document.addEventListener('mouseup', pe),
                document.addEventListener('mousemove', ee),
                document.addEventListener('touchend', pe),
                document.addEventListener('touchmove', ee),
                (E.current = ee),
                (M.current = pe);
        },
        I = T.exports.useMemo(
            function () {
                var W = fn(n).sort(function (O, D) {
                        return O - D;
                    }),
                    H = fn(y).sort(function (O, D) {
                        return O - D;
                    });
                return W.every(function (O, D) {
                    return O === H[D];
                })
                    ? y
                    : n;
            },
            [n, y]
        );
    return [v, f, I, X];
}
function $_(t) {
    var e,
        n = t.prefixCls,
        i = t.style,
        r = t.start,
        s = t.end,
        o = t.index,
        l = t.onStartMove,
        a = T.exports.useContext(si),
        u = a.direction,
        c = a.min,
        f = a.max,
        d = a.disabled,
        h = a.range,
        m = ''.concat(n, '-track'),
        v = ou(r, c, f),
        x = ou(s, c, f),
        g = function (_) {
            !d && l && l(_, -1);
        },
        p = {};
    switch (u) {
        case 'rtl':
            (p.right = ''.concat(v * 100, '%')), (p.width = ''.concat(x * 100 - v * 100, '%'));
            break;
        case 'btt':
            (p.bottom = ''.concat(v * 100, '%')), (p.height = ''.concat(x * 100 - v * 100, '%'));
            break;
        case 'ttb':
            (p.top = ''.concat(v * 100, '%')), (p.height = ''.concat(x * 100 - v * 100, '%'));
            break;
        default:
            (p.left = ''.concat(v * 100, '%')), (p.width = ''.concat(x * 100 - v * 100, '%'));
    }
    return b('div', {
        className: ds(
            m,
            ((e = {}),
            _t(e, ''.concat(m, '-').concat(o + 1), h),
            _t(e, ''.concat(n, '-track-draggable'), l),
            e)
        ),
        style: Rt(Rt({}, p), i),
        onMouseDown: g,
        onTouchStart: g,
    });
}
function Y_(t) {
    var e = t.prefixCls,
        n = t.style,
        i = t.values,
        r = t.startPoint,
        s = t.onStartMove,
        o = T.exports.useContext(si),
        l = o.included,
        a = o.range,
        u = o.min,
        c = T.exports.useMemo(
            function () {
                if (!a) {
                    if (i.length === 0) return [];
                    var f = r != null ? r : u,
                        d = i[0];
                    return [{ start: Math.min(f, d), end: Math.max(f, d) }];
                }
                for (var h = [], m = 0; m < i.length - 1; m += 1)
                    h.push({ start: i[m], end: i[m + 1] });
                return h;
            },
            [i, a, r, u]
        );
    return l
        ? c.map(function (f, d) {
              var h = f.start,
                  m = f.end;
              return b(
                  $_,
                  { index: d, prefixCls: e, style: Mi(n, d), start: h, end: m, onStartMove: s },
                  d
              );
          })
        : null;
}
function K_(t) {
    var e = t.prefixCls,
        n = t.style,
        i = t.children,
        r = t.value,
        s = t.onClick,
        o = T.exports.useContext(si),
        l = o.min,
        a = o.max,
        u = o.direction,
        c = o.includedStart,
        f = o.includedEnd,
        d = o.included,
        h = ''.concat(e, '-text'),
        m = mc(u, r, l, a);
    return b('span', {
        className: ds(h, _t({}, ''.concat(h, '-active'), d && c <= r && r <= f)),
        style: Rt(Rt({}, m), n),
        onMouseDown: function (x) {
            x.stopPropagation();
        },
        onClick: function () {
            s(r);
        },
        children: i,
    });
}
function Q_(t) {
    var e = t.prefixCls,
        n = t.marks,
        i = t.onClick,
        r = ''.concat(e, '-mark');
    return n.length
        ? b('div', {
              className: r,
              children: n.map(function (s) {
                  var o = s.value,
                      l = s.style,
                      a = s.label;
                  return b(K_, { prefixCls: r, style: l, value: o, onClick: i, children: a }, o);
              }),
          })
        : null;
}
function X_(t) {
    var e = t.prefixCls,
        n = t.value,
        i = t.style,
        r = t.activeStyle,
        s = T.exports.useContext(si),
        o = s.min,
        l = s.max,
        a = s.direction,
        u = s.included,
        c = s.includedStart,
        f = s.includedEnd,
        d = ''.concat(e, '-dot'),
        h = u && c <= n && n <= f,
        m = Rt(Rt({}, mc(a, n, o, l)), typeof i == 'function' ? i(n) : i);
    return (
        h && (m = Rt(Rt({}, m), typeof r == 'function' ? r(n) : r)),
        b('span', { className: ds(d, _t({}, ''.concat(d, '-active'), h)), style: m })
    );
}
function G_(t) {
    var e = t.prefixCls,
        n = t.marks,
        i = t.dots,
        r = t.style,
        s = t.activeStyle,
        o = T.exports.useContext(si),
        l = o.min,
        a = o.max,
        u = o.step,
        c = T.exports.useMemo(
            function () {
                var f = new Set();
                if (
                    (n.forEach(function (h) {
                        f.add(h.value);
                    }),
                    i && u !== null)
                )
                    for (var d = l; d <= a; ) f.add(d), (d += u);
                return Array.from(f);
            },
            [l, a, u, i, n]
        );
    return b('div', {
        className: ''.concat(e, '-step'),
        children: c.map(function (f) {
            return b(X_, { prefixCls: e, value: f, style: r, activeStyle: s }, f);
        }),
    });
}
function Z_(t, e, n, i, r, s) {
    var o = T.exports.useCallback(
            function (h) {
                var m = isFinite(h) ? h : t;
                return (m = Math.min(e, h)), (m = Math.max(t, m)), m;
            },
            [t, e]
        ),
        l = T.exports.useCallback(
            function (h) {
                if (n !== null) {
                    var m = t + Math.round((o(h) - t) / n) * n,
                        v = function (y) {
                            return (String(y).split('.')[1] || '').length;
                        },
                        x = Math.max(v(n), v(e), v(t)),
                        g = Number(m.toFixed(x));
                    return t <= g && g <= e ? g : null;
                }
                return null;
            },
            [n, t, e, o]
        ),
        a = T.exports.useCallback(
            function (h) {
                var m = o(h),
                    v = i.map(function (p) {
                        return p.value;
                    });
                n !== null && v.push(l(h)), v.push(t, e);
                var x = v[0],
                    g = e - t;
                return (
                    v.forEach(function (p) {
                        var y = Math.abs(m - p);
                        y <= g && ((x = p), (g = y));
                    }),
                    x
                );
            },
            [t, e, i, n, o, l]
        ),
        u = function h(m, v, x) {
            var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'unit';
            if (typeof v == 'number') {
                var p,
                    y = m[x],
                    _ = y + v,
                    w = [];
                i.forEach(function (M) {
                    w.push(M.value);
                }),
                    w.push(t, e),
                    w.push(l(y));
                var S = v > 0 ? 1 : -1;
                g === 'unit' ? w.push(l(y + S * n)) : w.push(l(_)),
                    (w = w
                        .filter(function (M) {
                            return M !== null;
                        })
                        .filter(function (M) {
                            return v < 0 ? M <= y : M >= y;
                        })),
                    g === 'unit' &&
                        (w = w.filter(function (M) {
                            return M !== y;
                        }));
                var k = g === 'unit' ? y : _;
                p = w[0];
                var C = Math.abs(p - k);
                if (
                    (w.forEach(function (M) {
                        var R = Math.abs(M - k);
                        R < C && ((p = M), (C = R));
                    }),
                    p === void 0)
                )
                    return v < 0 ? t : e;
                if (g === 'dist') return p;
                if (Math.abs(v) > 1) {
                    var E = fn(m);
                    return (E[x] = p), h(E, v - S, x, g);
                }
                return p;
            } else {
                if (v === 'min') return t;
                if (v === 'max') return e;
            }
        },
        c = function (m, v, x) {
            var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'unit',
                p = m[x],
                y = u(m, v, x, g);
            return { value: y, changed: y !== p };
        },
        f = function (m) {
            return (s === null && m === 0) || (typeof s == 'number' && m < s);
        },
        d = function (m, v, x) {
            var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'unit',
                p = m.map(a),
                y = p[x],
                _ = u(p, v, x, g);
            if (((p[x] = _), r === !1)) {
                var w = s || 0;
                x > 0 && p[x - 1] !== y && (p[x] = Math.max(p[x], p[x - 1] + w)),
                    x < p.length - 1 && p[x + 1] !== y && (p[x] = Math.min(p[x], p[x + 1] - w));
            } else if (typeof s == 'number' || s === null) {
                for (var S = x + 1; S < p.length; S += 1)
                    for (var k = !0; f(p[S] - p[S - 1]) && k; ) {
                        var C = c(p, 1, S);
                        (p[S] = C.value), (k = C.changed);
                    }
                for (var E = x; E > 0; E -= 1)
                    for (var M = !0; f(p[E] - p[E - 1]) && M; ) {
                        var R = c(p, -1, E - 1);
                        (p[E - 1] = R.value), (M = R.changed);
                    }
                for (var z = p.length - 1; z > 0; z -= 1)
                    for (var Y = !0; f(p[z] - p[z - 1]) && Y; ) {
                        var X = c(p, -1, z - 1);
                        (p[z - 1] = X.value), (Y = X.changed);
                    }
                for (var I = 0; I < p.length - 1; I += 1)
                    for (var W = !0; f(p[I + 1] - p[I]) && W; ) {
                        var H = c(p, 1, I + 1);
                        (p[I + 1] = H.value), (W = H.changed);
                    }
            }
            return { value: p[x], values: p };
        };
    return [a, d];
}
var q_ = T.exports.forwardRef(function (t, e) {
    var n,
        i = t.prefixCls,
        r = i === void 0 ? 'rc-slider' : i,
        s = t.className,
        o = t.style,
        l = t.disabled,
        a = l === void 0 ? !1 : l,
        u = t.keyboard,
        c = u === void 0 ? !0 : u,
        f = t.autoFocus,
        d = t.onFocus,
        h = t.onBlur,
        m = t.min,
        v = m === void 0 ? 0 : m,
        x = t.max,
        g = x === void 0 ? 100 : x,
        p = t.step,
        y = p === void 0 ? 1 : p,
        _ = t.value,
        w = t.defaultValue,
        S = t.range,
        k = t.count,
        C = t.onChange,
        E = t.onBeforeChange,
        M = t.onAfterChange,
        R = t.allowCross,
        z = R === void 0 ? !0 : R,
        Y = t.pushable,
        X = Y === void 0 ? !1 : Y,
        I = t.draggableTrack,
        W = t.reverse,
        H = t.vertical,
        O = t.included,
        D = O === void 0 ? !0 : O,
        A = t.startPoint,
        $ = t.trackStyle,
        K = t.handleStyle,
        ee = t.railStyle,
        pe = t.dotStyle,
        Ee = t.activeDotStyle,
        oe = t.marks,
        it = t.dots,
        oi = t.handleRender,
        li = t.tabIndex,
        Qi = li === void 0 ? 0 : li,
        Xi = t.ariaLabelForHandle,
        Gi = t.ariaLabelledByForHandle,
        Zi = t.ariaValueTextFormatterForHandle,
        Zt = T.exports.useRef(),
        bt = T.exports.useRef(),
        hs = T.exports.useMemo(
            function () {
                return H ? (W ? 'ttb' : 'btt') : W ? 'rtl' : 'ltr';
            },
            [W, H]
        ),
        rt = T.exports.useMemo(
            function () {
                return isFinite(v) ? v : 0;
            },
            [v]
        ),
        ai = T.exports.useMemo(
            function () {
                return isFinite(g) ? g : 100;
            },
            [g]
        ),
        Ln = T.exports.useMemo(
            function () {
                return y !== null && y <= 0 ? 1 : y;
            },
            [y]
        ),
        pm = T.exports.useMemo(
            function () {
                return typeof X == 'boolean' ? (X ? Ln : !1) : X >= 0 ? X : !1;
            },
            [X, Ln]
        ),
        ps = T.exports.useMemo(
            function () {
                var ve = Object.keys(oe || {});
                return ve
                    .map(function (G) {
                        var F = oe[G],
                            ke = { value: Number(G) };
                        return (
                            F &&
                            bn(F) === 'object' &&
                            !T.exports.isValidElement(F) &&
                            ('label' in F || 'style' in F)
                                ? ((ke.style = F.style), (ke.label = F.label))
                                : (ke.label = F),
                            ke
                        );
                    })
                    .filter(function (G) {
                        var F = G.label;
                        return F || typeof F == 'number';
                    })
                    .sort(function (G, F) {
                        return G.value - F.value;
                    });
            },
            [oe]
        ),
        gm = Z_(rt, ai, Ln, ps, z, pm),
        vc = Ze(gm, 2),
        gs = vc[0],
        yc = vc[1],
        mm = F_(w, { value: _ }),
        xc = Ze(mm, 2),
        qt = xc[0],
        vm = xc[1],
        Mt = T.exports.useMemo(
            function () {
                var ve = qt == null ? [] : Array.isArray(qt) ? qt : [qt],
                    G = Ze(ve, 1),
                    F = G[0],
                    ke = F === void 0 ? rt : F,
                    de = qt === null ? [] : [ke];
                if (S) {
                    if (((de = fn(ve)), k || qt === void 0)) {
                        var ci = k >= 0 ? k + 1 : 2;
                        for (de = de.slice(0, ci); de.length < ci; ) {
                            var Rn;
                            de.push((Rn = de[de.length - 1]) !== null && Rn !== void 0 ? Rn : rt);
                        }
                    }
                    de.sort(function (Jt, qi) {
                        return Jt - qi;
                    });
                }
                return (
                    de.forEach(function (Jt, qi) {
                        de[qi] = gs(Jt);
                    }),
                    de
                );
            },
            [qt, S, rt, k, gs]
        ),
        ms = T.exports.useRef(Mt);
    ms.current = Mt;
    var Dn = function (G) {
            return S ? G : G[0];
        },
        gl = function (G) {
            var F = fn(G).sort(function (ke, de) {
                return ke - de;
            });
            C && !z_(F, ms.current, !0) && C(Dn(F)), vm(F);
        },
        _c = function (G) {
            if (!a) {
                var F = 0,
                    ke = ai - rt;
                Mt.forEach(function (ci, Rn) {
                    var Jt = Math.abs(G - ci);
                    Jt <= ke && ((ke = Jt), (F = Rn));
                });
                var de = fn(Mt);
                (de[F] = G),
                    S && !Mt.length && k === void 0 && de.push(G),
                    E == null || E(Dn(de)),
                    gl(de),
                    M == null || M(Dn(de));
            }
        },
        ym = function (G) {
            G.preventDefault();
            var F = bt.current.getBoundingClientRect(),
                ke = F.width,
                de = F.height,
                ci = F.left,
                Rn = F.top,
                Jt = F.bottom,
                qi = F.right,
                Oc = G.clientX,
                Tc = G.clientY,
                Ji;
            switch (hs) {
                case 'btt':
                    Ji = (Jt - Tc) / de;
                    break;
                case 'ttb':
                    Ji = (Tc - Rn) / de;
                    break;
                case 'rtl':
                    Ji = (qi - Oc) / ke;
                    break;
                default:
                    Ji = (Oc - ci) / ke;
            }
            var Pm = rt + Ji * (ai - rt);
            _c(gs(Pm));
        },
        xm = T.exports.useState(null),
        wc = Ze(xm, 2),
        ml = wc[0],
        Sc = wc[1],
        _m = function (G, F) {
            if (!a) {
                var ke = yc(Mt, G, F);
                E == null || E(Dn(Mt)), gl(ke.values), M == null || M(Dn(ke.values)), Sc(ke.value);
            }
        };
    T.exports.useEffect(
        function () {
            if (ml !== null) {
                var ve = Mt.indexOf(ml);
                ve >= 0 && Zt.current.focus(ve);
            }
            Sc(null);
        },
        [ml]
    );
    var wm = T.exports.useMemo(
            function () {
                return I && Ln === null ? !1 : I;
            },
            [I, Ln]
        ),
        Sm = function () {
            M == null || M(Dn(ms.current));
        },
        km = U_(bt, hs, Mt, rt, ai, gs, gl, Sm, yc),
        vs = Ze(km, 4),
        kc = vs[0],
        Cm = vs[1],
        vl = vs[2],
        bm = vs[3],
        Cc = function (G, F) {
            bm(G, F), E == null || E(Dn(ms.current));
        },
        bc = kc !== -1;
    T.exports.useEffect(
        function () {
            if (!bc) {
                var ve = Mt.lastIndexOf(Cm);
                Zt.current.focus(ve);
            }
        },
        [bc]
    );
    var ui = T.exports.useMemo(
            function () {
                return fn(vl).sort(function (ve, G) {
                    return ve - G;
                });
            },
            [vl]
        ),
        Mm = T.exports.useMemo(
            function () {
                return S ? [ui[0], ui[ui.length - 1]] : [rt, ui[0]];
            },
            [ui, S, rt]
        ),
        Mc = Ze(Mm, 2),
        Ec = Mc[0],
        Pc = Mc[1];
    T.exports.useImperativeHandle(e, function () {
        return {
            focus: function () {
                Zt.current.focus(0);
            },
            blur: function () {
                var G = document,
                    F = G.activeElement;
                bt.current.contains(F) && (F == null || F.blur());
            },
        };
    }),
        T.exports.useEffect(function () {
            f && Zt.current.focus(0);
        }, []);
    var Em = T.exports.useMemo(
        function () {
            return {
                min: rt,
                max: ai,
                direction: hs,
                disabled: a,
                keyboard: c,
                step: Ln,
                included: D,
                includedStart: Ec,
                includedEnd: Pc,
                range: S,
                tabIndex: Qi,
                ariaLabelForHandle: Xi,
                ariaLabelledByForHandle: Gi,
                ariaValueTextFormatterForHandle: Zi,
            };
        },
        [rt, ai, hs, a, c, Ln, D, Ec, Pc, S, Qi, Xi, Gi, Zi]
    );
    return b(si.Provider, {
        value: Em,
        children: J('div', {
            ref: bt,
            className: ds(
                r,
                s,
                ((n = {}),
                _t(n, ''.concat(r, '-disabled'), a),
                _t(n, ''.concat(r, '-vertical'), H),
                _t(n, ''.concat(r, '-horizontal'), !H),
                _t(n, ''.concat(r, '-with-marks'), ps.length),
                n)
            ),
            style: o,
            onMouseDown: ym,
            children: [
                b('div', { className: ''.concat(r, '-rail'), style: ee }),
                b(Y_, {
                    prefixCls: r,
                    style: $,
                    values: ui,
                    startPoint: A,
                    onStartMove: wm ? Cc : null,
                }),
                b(G_, { prefixCls: r, marks: ps, dots: it, style: pe, activeStyle: Ee }),
                b(W_, {
                    ref: Zt,
                    prefixCls: r,
                    style: K,
                    values: vl,
                    draggingIndex: kc,
                    onStartMove: Cc,
                    onOffsetChange: _m,
                    onFocus: d,
                    onBlur: h,
                    handleRender: oi,
                }),
                b(Q_, { prefixCls: r, marks: ps, onClick: _c }),
            ],
        }),
    });
});
const { ipcRenderer: hi } = require('electron'),
    J_ = ({
        setAngle: t,
        setNewDistance: e,
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
        const [h, m] = T.exports.useState([]),
            [v, x] = T.exports.useState([]);
        let g;
        setInterval(() => {
            const S = navigator.getGamepads();
            S[0] && (g = S[0].axes[1]);
        }, 16);
        const p = (S) => {
                s(!0);
                let k = 0;
                console.log(S),
                    setInterval(() => {
                        k < 100 &&
                            (S
                                ? hi.send('startComRequestAnalog', 0)
                                : hi.send('startComRequest', g)),
                            k++;
                    }, 80);
            },
            y = () => {
                s(!0);
                let S = 0;
                setInterval(() => {
                    if (S < 100) {
                        const C =
                            document
                                .querySelector('.rc-slider-handle')
                                .getAttribute('aria-valuenow') / 100;
                        hi.send('startComRequest', C);
                    }
                    S++;
                }, 80);
            };
        hi.removeAllListeners('receivedData'),
            hi.on('receivedData', (S, k) => {
                let C = k.split(',')[0],
                    E = k.split(',')[1];
                if ((h.push(C), v.push(E), h.length == 100)) {
                    console.log('end of comm triggered'), d(!1);
                    let M = { distance: h, angle: v };
                    n == 0 && i && hi.send('saveToDatabase', M), s(!1);
                }
                t(E), e(C);
            });
        const _ = () => {
            l([]), a(0), e(-1), u(null), (h.length = 0), (v.length = 0), d(!0);
        };
        let w = n != 1 && o && !r && !c && f;
        return J('div', {
            className: 'w-1/1 flex justify-center',
            children: [
                b('form', {
                    onSubmit: (S) => {
                        S.preventDefault(), p(!1);
                    },
                    className: 'flex items-center ',
                    children: J('button', {
                        type: 'submit',
                        disabled: !w,
                        className: w
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2',
                        children: [
                            b('span', { className: 'pr-1', children: 'Start gamepad' }),
                            b(S_, { className: 'w-6 h-6' }),
                        ],
                    }),
                }),
                b('form', {
                    onSubmit: (S) => {
                        S.preventDefault(), p(!0);
                    },
                    className: 'flex items-center',
                    children: J('button', {
                        type: 'submit',
                        disabled: !w,
                        className: w
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2',
                        children: [
                            b('span', { className: 'pr-1', children: 'Start analog' }),
                            b(Vf, { className: 'w-5 h-5' }),
                        ],
                    }),
                }),
                b('form', {
                    onSubmit: (S) => {
                        S.preventDefault(), y();
                    },
                    className: 'flex items-center',
                    children: J('button', {
                        type: 'submit',
                        disabled: !w,
                        className: w
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2',
                        children: [
                            b('span', { className: 'pr-1', children: 'Start Slider' }),
                            b(Vf, { className: 'w-5 h-5' }),
                        ],
                    }),
                }),
                b('button', {
                    onClick: _,
                    disabled: r,
                    className: r
                        ? 'button-disabled inline-flex items-center justify-center mr-2'
                        : 'button inline-flex items-center justify-center mr-2',
                    children: 'Clear',
                }),
                J('div', {
                    className: 'min-w-48 w-48 mt-1',
                    children: [
                        b(q_, { min: -100, max: 100, defaultValue: 0 }),
                        b('p', { className: 'flex justify-center', children: 'Slider Controll' }),
                    ],
                }),
            ],
        });
    };
function ew(t) {
    return On({
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
    })(t);
}
function tw(t) {
    return On({
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
    })(t);
}
function nw(t) {
    return On({
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
    })(t);
}
const { ipcRenderer: Xs } = require('electron'),
    iw = ({
        tableData: t,
        setTableData: e,
        setAngle: n,
        setNewDistance: i,
        databaseStatus: r,
        setDatabaseStatus: s,
        saveToDatabase: o,
        setSaveToDatabase: l,
    }) => {
        const a = () => {
                console.log('requesting database data'), Xs.send('requestDatabaseData', null);
            },
            u = () => {
                s(1), Xs.send('checkDatabaseConnection', null);
            };
        Xs.on('databaseData', (d, h) => {
            e(h);
        }),
            Xs.on('isConnected', (d, h) => {
                s(h ? 0 : 2);
            });
        const c = (d) => {
            t.forEach((h) => {
                if (h.id == d) {
                    let m = 0;
                    setInterval(() => {
                        m < h.angle.length && (n(h.angle[m]), i(h.distance[m])), m++;
                    }, h.sampling_rate);
                }
            });
        };
        return J('div', {
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
                J('button', {
                    onClick: a,
                    disabled: r != 0,
                    className:
                        r != 0
                            ? 'button-disabled inline-flex items-center justify-center mr-2'
                            : 'button inline-flex items-center justify-center mr-2',
                    children: [
                        b('span', { className: 'pr-1', children: 'get data' }),
                        b(w_, { className: 'w-5 h-5' }),
                    ],
                }),
                J('button', {
                    onClick: u,
                    className: 'button inline-flex items-center justify-center',
                    children: [
                        b('span', { children: 'check connection' }),
                        r == 1
                            ? b(um, { className: 'w-4 h-4 animate-spin' })
                            : b(nw, { className: (r = 'w-4 h-4 text-green-700') }),
                    ],
                }),
                b('div', {
                    className: 'h-24 overflow-y-auto mt-2',
                    children: J('table', {
                        className: 'table-custom table-custom-text table-fixed',
                        children: [
                            b('thead', {
                                className: 'sticky top-0 bg-black text-white',
                                children: J('tr', {
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
                                children: t
                                    ? t.map((d) =>
                                          J(
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
                                                              children: b(ew, {
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
                                    : b(xg, {}),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    rw = ({ setIsModalOpen: t }) =>
        b('div', {
            className:
                'fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10 backdrop-blur-sm',
            children: J('div', {
                className: 'max-w-2xl bg-white rounded-md p-4 ',
                children: [
                    b(tw, {
                        className: 'h-8 w-8 hover:text-blue-300',
                        onClick: () => {
                            t(!1);
                        },
                    }),
                    b('p', {
                        children:
                            'T\xE1to aplik\xE1cia vznikla ako bakal\xE1rsky projekt na Fakulte elektrotechniky a informatiky STU v Bratislave.',
                    }),
                ],
            }),
        }),
    { ipcRenderer: Jl } = require('electron');
function sw() {
    const [t, e] = T.exports.useState(''),
        [n, i] = T.exports.useState(''),
        [r, s] = T.exports.useState([]),
        [o, l] = T.exports.useState(0),
        [a, u] = T.exports.useState(''),
        [c, f] = T.exports.useState(null),
        [d, h] = T.exports.useState(1),
        [m, v] = T.exports.useState(!1),
        [x, g] = T.exports.useState(!1),
        [p, y] = T.exports.useState(!0),
        [_, w] = T.exports.useState(!1);
    return (
        T.exports.useEffect(() => {
            Jl.send('portRequest', 'client portRequest'), Jl.send('checkDatabaseConnection', null);
        }, []),
        T.exports.useEffect(() => {}, [t]),
        T.exports.useEffect(() => {
            n && Jl.send('portSelected', n);
        }, [n]),
        T.exports.useEffect(() => {}, [o]),
        T.exports.useEffect(() => {
            a != -1 && s((S) => [...S, a]), u(-1);
        }, [a]),
        T.exports.useEffect(() => {}, [d]),
        J('div', {
            className: 'main-window bg-slate-300',
            children: [
                b(sv, { setIsModalOpen: w }),
                _ && b(rw, { setIsModalOpen: w }),
                b(J_, {
                    setAngle: l,
                    setNewDistance: u,
                    databaseStatus: d,
                    saveToDatabase: m,
                    isMeasuring: x,
                    setIsMeasuring: g,
                    selectedPort: n,
                    setChartData: s,
                    setAngleAnimation: l,
                    setTableData: f,
                    tableData: c,
                    readyToMeasureAgain: p,
                    setReadyToMeasureAgain: y,
                }),
                J('div', {
                    className: 'grid grid-cols-3',
                    children: [
                        J('div', {
                            className: 'col-start-1 col-end-3',
                            children: [
                                b('div', {
                                    className: 'flex p-2 ',
                                    children: b(__, {
                                        availablePorts: t,
                                        setAvailablePorts: e,
                                        setSelectedPort: i,
                                        isMeasuring: x,
                                    }),
                                }),
                                J('div', {
                                    className: ' p-2',
                                    children: [b(x_, { chartData: r }), b(ov, { angle: o })],
                                }),
                            ],
                        }),
                        b('div', {
                            className: ' p-2',
                            children: b(iw, {
                                tableData: c,
                                setTableData: f,
                                setAngle: l,
                                setNewDistance: u,
                                databaseStatus: d,
                                setDatabaseStatus: h,
                                saveToDatabase: m,
                                setSaveToDatabase: v,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
ta.createRoot(document.getElementById('root')).render(b(sw, {}));
