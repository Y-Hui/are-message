;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    '+ufn': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        o = a('/7QA'),
        c =
          (a('WVEZ'),
          () => {
            var e = () => {
              o['a'].open('Hello Are Vision.')
            }
            return r.a.createElement('button', { onClick: e }, 'Show Message')
          })
      t['default'] = c
    },
    '/7QA': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return S
      }),
        a.d(t, 'b', function () {
          return H
        })
      var n = { duration: 3e3, prefixCls: 'are-message' }
      function r() {
        return n.duration
      }
      function o() {
        return n.prefixCls
      }
      function c(e) {
        var t = !0,
          a = !0
        return (
          'string' === typeof e && (t = '' !== e.trim()),
          'number' === typeof e && (a = !Number.isNaN(e)),
          void 0 !== e && null !== e && t && a
        )
      }
      var l = a('k1fw'),
        u = a('q1tI'),
        i = a.n(u)
      function s(e) {
        var t = (t) => {
            var a,
              n = new Promise((e) => {
                a = e
              }),
              r = e().add(
                Object(l['a'])(
                  Object(l['a'])({}, t),
                  {},
                  {
                    onClose() {
                      var e
                      a(), null === (e = t.onClose) || void 0 === e || e.call(t)
                    },
                  },
                ),
              )
            return (r.then = (e, t) => n.then(e, t)), r
          },
          a = {
            open: (e, a, n) =>
              t(
                i.a.isValidElement(e) ||
                  'number' === typeof e ||
                  'string' === typeof e
                  ? Object(l['a'])(
                      Object(l['a'])({}, n),
                      {},
                      { content: e, duration: a },
                    )
                  : e,
              ),
            clearAll: () => {
              var t
              return null === (t = e()) || void 0 === t || t.clear(), a
            },
            destroy: (t) => {
              var n
              return null === (n = e()) || void 0 === n || n.remove(t), a
            },
          }
        return a
      }
      var d = a('i8i4'),
        m = a.n(d),
        f = a('0Owb'),
        v = a('PpiC'),
        p = a('tJVT'),
        b = a('2O3R')
      function E(e) {
        return c(e) ? e : null
      }
      function C() {
        var e = Object(u['useRef'])(0),
          t = Object(u['useCallback'])((t) => {
            e.current += 1
            var a = E(t) || e.current
            return a
          }, [])
        return t
      }
      function O(e, t) {
        var a = window.setTimeout(() => {
          e(), clearTimeout(a)
        }, t)
        return a
      }
      var j = O
      function y(e) {
        return { type: 'add', payload: e }
      }
      function g(e) {
        return { type: 'remove', id: e }
      }
      function k() {
        return { type: 'clear' }
      }
      var w = (e, t) => {
          var a = (t) =>
            null === e || void 0 === e ? void 0 : e.filter((e) => e.id !== t)
          switch (t.type) {
            case 'add':
              var n = a(t.payload.id)
              return [...n, t.payload]
            case 'remove':
              return a(t.id)
            case 'clear':
              return []
            default:
              return e
          }
        },
        h = w,
        I = a('TSYQ'),
        A = a.n(I),
        N = Object(u['forwardRef'])((e, t) => {
          var a = e.prefixCls,
            n = e.className,
            r = e.children,
            o = e.onClose,
            l = Object(v['a'])(e, [
              'prefixCls',
              'className',
              'children',
              'onClose',
            ]),
            s = Object(u['useRef'])(null)
          Object(u['useEffect'])(
            () => () => {
              null === o || void 0 === o || o()
            },
            [o],
          ),
            Object(u['useImperativeHandle'])(t, () => s.current)
          var d = Object(u['useCallback'])(
              (e) => (c(a) ? ''.concat(a, '-').concat(e) : e),
              [a],
            ),
            m = i.a.createElement(
              'div',
              { className: d('item-wrap'), ref: s },
              i.a.createElement(
                'div',
                Object(f['a'])({ className: A()(d('item'), n) }, l),
                r,
              ),
            )
          return m
        })
      N.displayName = 'Message'
      var T = N,
        V = {
          from: { transform: 'translate3d(0, -30px, 0)', opacity: '0' },
          to: { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        x = {
          from: { transform: 'translate3d(0, 0, 0)', opacity: '1' },
          to: { transform: 'translate3d(0, -30px, 0)', opacity: '0' },
        },
        M = Object(u['forwardRef'])((e, t) => {
          var a = Object(u['useReducer'])(h, []),
            n = Object(p['a'])(a, 2),
            s = n[0],
            d = n[1],
            m = C(),
            E = Object(u['useCallback'])(
              (e) => {
                var t = s.findIndex((t) => t.id === e)
                if (t > -1) {
                  var a = s[t].timerId
                  clearTimeout(a)
                }
              },
              [s],
            ),
            O = Object(u['useCallback'])(() => {
              s.forEach((e) => {
                clearTimeout(e.timerId)
              }),
                d(k())
            }, [s]),
            w = Object(u['useCallback'])((e) => {
              d(g(e))
            }, []),
            I = Object(u['useCallback'])(
              (e) => {
                var t = e.id,
                  a = e.duration,
                  n = e.onClose,
                  o = c(a) ? a : r(),
                  u = m(t)
                E(u)
                var i = () => w(u),
                  s = 0 === o ? void 0 : j(i, o)
                return (
                  d(
                    y(
                      Object(l['a'])(
                        Object(l['a'])({}, e),
                        {},
                        {
                          duration: o,
                          id: u,
                          timerId: s,
                          onClose: () => {
                            window.clearTimeout(s),
                              null === n || void 0 === n || n()
                          },
                        },
                      ),
                    ),
                  ),
                  i
                )
              },
              [m, w, E],
            )
          return (
            Object(u['useImperativeHandle'])(t, () => ({
              add: I,
              remove: w,
              clear: O,
            })),
            i.a.createElement(
              b['a'],
              {
                enterAnimation: V,
                leaveAnimation: x,
                duration: 200,
                staggerDelayBy: 20,
                typeName: null,
              },
              s.map((e) => {
                var t = e.id,
                  a = e.content,
                  n =
                    (e.timerId,
                    e.duration,
                    Object(v['a'])(e, ['id', 'content', 'timerId', 'duration']))
                return i.a.createElement(
                  T,
                  Object(f['a'])({ key: t, prefixCls: o() }, n),
                  a,
                )
              }),
            )
          )
        })
      M.displayName = 'MessageContainer'
      var W,
        Q = M
      function q(e) {
        if (W) return W
        var t = document.createElement('div')
        return (
          (t.className = o()),
          e
            ? ((W = e()), W.appendChild(t))
            : ((W = t), document.body.appendChild(W)),
          W
        )
      }
      var R = null
      function Z() {
        return R
      }
      function P(e) {
        var t = (t) => {
          R
            ? null === e || void 0 === e || e(R)
            : t && ((R = t), null === e || void 0 === e || e(R))
        }
        m.a.render(i.a.createElement(Q, { ref: t }), q())
      }
      function F() {
        var e = Z()
        return e || (P(), Z())
      }
      var S = s(F)
      function H() {
        var e = Object(u['useRef'])(null),
          t = Object(u['useMemo'])(
            () => m.a.createPortal(i.a.createElement(Q, { ref: e }), q()),
            [],
          ),
          a = Object(u['useMemo'])(() => s(() => e.current), [])
        return [a, t]
      }
    },
    '52fG': function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('tJVT'),
        r = a('q1tI'),
        o = a.n(r),
        c = a('/7QA'),
        l = (a('WVEZ'), o.a.createContext('default')),
        u = l.Provider,
        i = l.Consumer,
        s = () => {
          var e = Object(c['b'])(),
            t = Object(n['a'])(e, 2),
            a = t[0],
            r = t[1],
            l = () => {
              a.open(o.a.createElement(i, null, (e) => e))
            }
          return o.a.createElement(
            u,
            { value: "This's the message from the hook." },
            o.a.createElement('button', { onClick: l }, 'Hook Message'),
            r,
          )
        }
      t['default'] = s
    },
    WVEZ: function (e, t, a) {},
    WsYC: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        o = a('/7QA'),
        c = (a('WVEZ'), 'LOADING_MESSAGE_KEY')
      t['default'] = () => {
        var e = () => {
          o['a'].open({ id: c, content: 'Loading...', duration: 0 }),
            setTimeout(() => {
              o['a'].open({ id: c, content: 'Loaded!', duration: 300 })
            }, 2e3)
        }
        return r.a.createElement('button', { onClick: e }, 'Update')
      }
    },
    YoEN: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        o = a('/7QA')
      a('WVEZ')
      t['default'] = () => {
        var e = () => {
            o['a'].open('Keep display message.', 0)
          },
          t = () => {
            o['a'].open('Five seconds message.', 5e3)
          },
          a = () => {
            var e = o['a'].open('Message can be closed manually.', 0)
            setTimeout(e, 1e3)
          }
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement('button', { onClick: e }, 'Keep display'),
          r.a.createElement('button', { onClick: t }, 'Five seconds'),
          r.a.createElement('button', { onClick: a }, 'Manual shutdown'),
        )
      }
    },
    btNl: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        o = a('/7QA'),
        c =
          (a('WVEZ'),
          () => {
            var e = () => {
              o['a']
                .open('First message.')
                .then(() =>
                  o['a'].open({
                    content: r.a.createElement(
                      'p',
                      {
                        style: {
                          margin: 0,
                          textTransform: 'uppercase',
                          fontWeight: 'bold',
                          color: '#f00',
                        },
                      },
                      'Second message.',
                    ),
                    duration: 2e3,
                  }),
                )
                .then(() => {
                  o['a'].open('Promise chain call completed :)', 2e3)
                })
            }
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement('button', { onClick: e }, 'Promise call.'),
            )
          })
      t['default'] = c
    },
    w60M: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        o = a('/7QA')
      a('WVEZ')
      t['default'] = () => {
        var e = () => {
          o['a'].clearAll()
        }
        return r.a.createElement('button', { onClick: e }, 'Clear all')
      }
    },
  },
])
