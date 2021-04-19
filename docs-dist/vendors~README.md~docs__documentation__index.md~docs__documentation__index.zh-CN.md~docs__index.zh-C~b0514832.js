;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [0],
  {
    '0Owb': function (t, e, r) {
      'use strict'
      function n() {
        return (
          (n =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }),
          n.apply(this, arguments)
        )
      }
      r.d(e, 'a', function () {
        return n
      })
    },
    '2N97': function (t, e, r) {
      'use strict'
      var n = r('xbqb'),
        o = r('Lw8S')
      function u() {
        var t = c(r('q1tI'))
        return (
          (u = function () {
            return t
          }),
          t
        )
      }
      function i() {
        var t = r('ArA+')
        return (
          (i = function () {
            return t
          }),
          t
        )
      }
      function a() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (a = function () {
            return t
          }),
          t
        )
      }
      function c(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = a()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var u = n ? Object.getOwnPropertyDescriptor(t, o) : null
            u && (u.get || u.set)
              ? Object.defineProperty(r, o, u)
              : (r[o] = t[o])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function l(t, e) {
        return y(t) || d(t, e) || s(t, e) || f()
      }
      function f() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function s(t, e) {
        if (t) {
          if ('string' === typeof t) return p(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? p(t, e)
              : void 0
          )
        }
      }
      function p(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function d(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function y(t) {
        if (Array.isArray(t)) return t
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var v,
        b = 'data-prefers-color',
        m = 'dumi:prefers-color',
        h = (function () {
          function t() {
            var e = this
            n(this, t),
              (this.color = 'light'),
              (this.callbacks = []),
              ('function' !== typeof i().isBrowser || (0, i().isBrowser)()) &&
                ((this.color = document.documentElement.getAttribute(b)),
                ['light', 'dark'].forEach(function (t) {
                  var r = e.getColorMedia(t),
                    n = function (r) {
                      r.matches &&
                        'auto' === e.color &&
                        (document.documentElement.setAttribute(b, t),
                        e.applyCallbacks())
                    }
                  r.addEventListener
                    ? r.addEventListener('change', n)
                    : r.addListener && r.addListener(n)
                }))
          }
          return (
            o(t, [
              {
                key: 'getColorMedia',
                value: function (t) {
                  return window.matchMedia(
                    '(prefers-color-scheme: '.concat(t, ')'),
                  )
                },
              },
              {
                key: 'isColorMode',
                value: function (t) {
                  return this.getColorMedia(t).matches
                },
              },
              {
                key: 'applyCallbacks',
                value: function () {
                  var t = this
                  this.callbacks.forEach(function (e) {
                    return e(t.color)
                  })
                },
              },
              {
                key: 'listen',
                value: function (t) {
                  this.callbacks.push(t)
                },
              },
              {
                key: 'unlisten',
                value: function (t) {
                  this.callbacks.splice(this.callbacks.indexOf(t), 1)
                },
              },
              {
                key: 'set',
                value: function (t) {
                  return (
                    (this.color = t),
                    localStorage.setItem(m, t),
                    this.applyCallbacks(),
                    'auto' === t
                      ? document.documentElement.setAttribute(
                          b,
                          this.isColorMode('dark') ? 'dark' : 'light',
                        )
                      : document.documentElement.setAttribute(b, t),
                    t
                  )
                },
              },
            ]),
            t
          )
        })(),
        g = function () {
          v || (v = new h())
          var t = (0, u().useState)(v.color),
            e = l(t, 2),
            r = e[0],
            n = e[1],
            o = (0, u().useCallback)(function (t) {
              v.set(t)
            }, [])
          return (
            (0, u().useEffect)(function () {
              return (
                v.listen(n),
                function () {
                  return v.unlisten(n)
                }
              )
            }, []),
            [r, o]
          )
        }
      e['default'] = g
    },
    '3QDa': function (t, e, r) {
      'use strict'
      var n = r('5wUe')
      function o() {
        var t = l(r('q1tI'))
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u() {
        var t = a(r('x2v5'))
        return (
          (u = function () {
            return t
          }),
          t
        )
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var i = a(r('nLCz'))
      function a(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function c() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (c = function () {
            return t
          }),
          t
        )
      }
      function l(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = c()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var u = n ? Object.getOwnPropertyDescriptor(t, o) : null
            u && (u.get || u.set)
              ? Object.defineProperty(r, o, u)
              : (r[o] = t[o])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function f(t, e) {
        return v(t) || y(t, e) || p(t, e) || s()
      }
      function s() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function p(t, e) {
        if (t) {
          if ('string' === typeof t) return d(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? d(t, e)
              : void 0
          )
        }
      }
      function d(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function y(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function v(t) {
        if (Array.isArray(t)) return t
      }
      function b(t, e, r) {
        return Object.entries(u()['default'][t]).reduce(function (t, o) {
          var u = n(o, 2),
            i = u[0],
            a = u[1]
          return (
            (t[i] = a.map(function (t) {
              var n = Object.assign({}, t)
              return (
                Object.keys(t).forEach(function (t) {
                  if (/^description(\.|$)/.test(t)) {
                    var o = t.match(/^description\.?(.*)$/),
                      u = f(o, 2),
                      i = u[1]
                    ;(i && i !== e) || (!i && !r)
                      ? delete n[t]
                      : (n.description = n[t])
                  }
                }),
                n
              )
            })),
            t
          )
        }, {})
      }
      var m = function (t) {
        var e = (0, o().useContext)(i['default']),
          r = e.locale,
          n = e.config.locales,
          u = !n.length || n[0].name === r,
          a = (0, o().useState)(b(t, r, u)),
          c = f(a, 2),
          l = c[0],
          s = c[1]
        return (
          (0, o().useEffect)(
            function () {
              s(b(t, r, u))
            },
            [t, r, u],
          ),
          l
        )
      }
      e['default'] = m
    },
    '6asN': function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var n = r('LtsZ'),
        o = r('zqmC'),
        u = (0, o.LinkWrapper)(n.NavLink)
      e['default'] = u
    },
    '6xEa': function (t, e, r) {
      var n,
        o = (function () {
          var t = String.fromCharCode,
            e =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            r =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            n = {}
          function o(t, e) {
            if (!n[t]) {
              n[t] = {}
              for (var r = 0; r < t.length; r++) n[t][t.charAt(r)] = r
            }
            return n[t][e]
          }
          var u = {
            compressToBase64: function (t) {
              if (null == t) return ''
              var r = u._compress(t, 6, function (t) {
                return e.charAt(t)
              })
              switch (r.length % 4) {
                default:
                case 0:
                  return r
                case 1:
                  return r + '==='
                case 2:
                  return r + '=='
                case 3:
                  return r + '='
              }
            },
            decompressFromBase64: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : u._decompress(t.length, 32, function (r) {
                    return o(e, t.charAt(r))
                  })
            },
            compressToUTF16: function (e) {
              return null == e
                ? ''
                : u._compress(e, 15, function (e) {
                    return t(e + 32)
                  }) + ' '
            },
            decompressFromUTF16: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : u._decompress(t.length, 16384, function (e) {
                    return t.charCodeAt(e) - 32
                  })
            },
            compressToUint8Array: function (t) {
              for (
                var e = u.compress(t),
                  r = new Uint8Array(2 * e.length),
                  n = 0,
                  o = e.length;
                n < o;
                n++
              ) {
                var i = e.charCodeAt(n)
                ;(r[2 * n] = i >>> 8), (r[2 * n + 1] = i % 256)
              }
              return r
            },
            decompressFromUint8Array: function (e) {
              if (null === e || void 0 === e) return u.decompress(e)
              for (
                var r = new Array(e.length / 2), n = 0, o = r.length;
                n < o;
                n++
              )
                r[n] = 256 * e[2 * n] + e[2 * n + 1]
              var i = []
              return (
                r.forEach(function (e) {
                  i.push(t(e))
                }),
                u.decompress(i.join(''))
              )
            },
            compressToEncodedURIComponent: function (t) {
              return null == t
                ? ''
                : u._compress(t, 6, function (t) {
                    return r.charAt(t)
                  })
            },
            decompressFromEncodedURIComponent: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : ((t = t.replace(/ /g, '+')),
                  u._decompress(t.length, 32, function (e) {
                    return o(r, t.charAt(e))
                  }))
            },
            compress: function (e) {
              return u._compress(e, 16, function (e) {
                return t(e)
              })
            },
            _compress: function (t, e, r) {
              if (null == t) return ''
              var n,
                o,
                u,
                i = {},
                a = {},
                c = '',
                l = '',
                f = '',
                s = 2,
                p = 3,
                d = 2,
                y = [],
                v = 0,
                b = 0
              for (u = 0; u < t.length; u += 1)
                if (
                  ((c = t.charAt(u)),
                  Object.prototype.hasOwnProperty.call(i, c) ||
                    ((i[c] = p++), (a[c] = !0)),
                  (l = f + c),
                  Object.prototype.hasOwnProperty.call(i, l))
                )
                  f = l
                else {
                  if (Object.prototype.hasOwnProperty.call(a, f)) {
                    if (f.charCodeAt(0) < 256) {
                      for (n = 0; n < d; n++)
                        (v <<= 1),
                          b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++
                      for (o = f.charCodeAt(0), n = 0; n < 8; n++)
                        (v = (v << 1) | (1 & o)),
                          b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                          (o >>= 1)
                    } else {
                      for (o = 1, n = 0; n < d; n++)
                        (v = (v << 1) | o),
                          b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                          (o = 0)
                      for (o = f.charCodeAt(0), n = 0; n < 16; n++)
                        (v = (v << 1) | (1 & o)),
                          b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                          (o >>= 1)
                    }
                    s--, 0 == s && ((s = Math.pow(2, d)), d++), delete a[f]
                  } else
                    for (o = i[f], n = 0; n < d; n++)
                      (v = (v << 1) | (1 & o)),
                        b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                        (o >>= 1)
                  s--,
                    0 == s && ((s = Math.pow(2, d)), d++),
                    (i[l] = p++),
                    (f = String(c))
                }
              if ('' !== f) {
                if (Object.prototype.hasOwnProperty.call(a, f)) {
                  if (f.charCodeAt(0) < 256) {
                    for (n = 0; n < d; n++)
                      (v <<= 1),
                        b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++
                    for (o = f.charCodeAt(0), n = 0; n < 8; n++)
                      (v = (v << 1) | (1 & o)),
                        b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                        (o >>= 1)
                  } else {
                    for (o = 1, n = 0; n < d; n++)
                      (v = (v << 1) | o),
                        b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                        (o = 0)
                    for (o = f.charCodeAt(0), n = 0; n < 16; n++)
                      (v = (v << 1) | (1 & o)),
                        b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                        (o >>= 1)
                  }
                  s--, 0 == s && ((s = Math.pow(2, d)), d++), delete a[f]
                } else
                  for (o = i[f], n = 0; n < d; n++)
                    (v = (v << 1) | (1 & o)),
                      b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                      (o >>= 1)
                s--, 0 == s && ((s = Math.pow(2, d)), d++)
              }
              for (o = 2, n = 0; n < d; n++)
                (v = (v << 1) | (1 & o)),
                  b == e - 1 ? ((b = 0), y.push(r(v)), (v = 0)) : b++,
                  (o >>= 1)
              while (1) {
                if (((v <<= 1), b == e - 1)) {
                  y.push(r(v))
                  break
                }
                b++
              }
              return y.join('')
            },
            decompress: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : u._decompress(t.length, 32768, function (e) {
                    return t.charCodeAt(e)
                  })
            },
            _decompress: function (e, r, n) {
              var o,
                u,
                i,
                a,
                c,
                l,
                f,
                s = [],
                p = 4,
                d = 4,
                y = 3,
                v = '',
                b = [],
                m = { val: n(0), position: r, index: 1 }
              for (o = 0; o < 3; o += 1) s[o] = o
              ;(i = 0), (c = Math.pow(2, 2)), (l = 1)
              while (l != c)
                (a = m.val & m.position),
                  (m.position >>= 1),
                  0 == m.position && ((m.position = r), (m.val = n(m.index++))),
                  (i |= (a > 0 ? 1 : 0) * l),
                  (l <<= 1)
              switch (i) {
                case 0:
                  ;(i = 0), (c = Math.pow(2, 8)), (l = 1)
                  while (l != c)
                    (a = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position &&
                        ((m.position = r), (m.val = n(m.index++))),
                      (i |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1)
                  f = t(i)
                  break
                case 1:
                  ;(i = 0), (c = Math.pow(2, 16)), (l = 1)
                  while (l != c)
                    (a = m.val & m.position),
                      (m.position >>= 1),
                      0 == m.position &&
                        ((m.position = r), (m.val = n(m.index++))),
                      (i |= (a > 0 ? 1 : 0) * l),
                      (l <<= 1)
                  f = t(i)
                  break
                case 2:
                  return ''
              }
              ;(s[3] = f), (u = f), b.push(f)
              while (1) {
                if (m.index > e) return ''
                ;(i = 0), (c = Math.pow(2, y)), (l = 1)
                while (l != c)
                  (a = m.val & m.position),
                    (m.position >>= 1),
                    0 == m.position &&
                      ((m.position = r), (m.val = n(m.index++))),
                    (i |= (a > 0 ? 1 : 0) * l),
                    (l <<= 1)
                switch ((f = i)) {
                  case 0:
                    ;(i = 0), (c = Math.pow(2, 8)), (l = 1)
                    while (l != c)
                      (a = m.val & m.position),
                        (m.position >>= 1),
                        0 == m.position &&
                          ((m.position = r), (m.val = n(m.index++))),
                        (i |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1)
                    ;(s[d++] = t(i)), (f = d - 1), p--
                    break
                  case 1:
                    ;(i = 0), (c = Math.pow(2, 16)), (l = 1)
                    while (l != c)
                      (a = m.val & m.position),
                        (m.position >>= 1),
                        0 == m.position &&
                          ((m.position = r), (m.val = n(m.index++))),
                        (i |= (a > 0 ? 1 : 0) * l),
                        (l <<= 1)
                    ;(s[d++] = t(i)), (f = d - 1), p--
                    break
                  case 2:
                    return b.join('')
                }
                if ((0 == p && ((p = Math.pow(2, y)), y++), s[f])) v = s[f]
                else {
                  if (f !== d) return null
                  v = u + u.charAt(0)
                }
                b.push(v),
                  (s[d++] = u + v.charAt(0)),
                  p--,
                  (u = v),
                  0 == p && ((p = Math.pow(2, y)), y++)
              }
            },
          }
          return u
        })()
      ;(n = function () {
        return o
      }.call(e, r, e, t)),
        void 0 === n || (t.exports = n)
    },
    '7sf/': function (t, e, r) {
      'use strict'
      function n() {
        var t = a(r('q1tI'))
        return (
          (n = function () {
            return t
          }),
          t
        )
      }
      function o() {
        var t = u(r('6xEa'))
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function i() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (i = function () {
            return t
          }),
          t
        )
      }
      function a(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = i()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var u = n ? Object.getOwnPropertyDescriptor(t, o) : null
            u && (u.get || u.set)
              ? Object.defineProperty(r, o, u)
              : (r[o] = t[o])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function c(t, e) {
        return d(t) || p(t, e) || f(t, e) || l()
      }
      function l() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function f(t, e) {
        if (t) {
          if ('string' === typeof t) return s(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? s(t, e)
              : void 0
          )
        }
      }
      function s(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function p(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function d(t) {
        if (Array.isArray(t)) return t
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var y = {
          'zh-CN': 'https://www.typescriptlang.org/zh/play',
          'en-US': 'https://www.typescriptlang.org/play',
        },
        v = function (t, e) {
          var r = function () {
              var t = /^zh|cn$/.test(
                arguments.length <= 0 ? void 0 : arguments[0],
              )
                ? y['zh-CN']
                : y['en-US']
              return ''
                .concat(t, '?skipLibCheck=true&jsx=1#code/')
                .concat(
                  o()['default'].compressToEncodedURIComponent(
                    arguments.length <= 1 ? void 0 : arguments[1],
                  ),
                )
            },
            u = (0, n().useState)(r(t, e)),
            i = c(u, 2),
            a = i[0],
            l = i[1]
          return (
            (0, n().useEffect)(
              function () {
                l(r(t, e))
              },
              [t, e],
            ),
            a
          )
        }
      e['default'] = v
    },
    'ArA+': function (t, e, r) {
      'use strict'
      r.r(e)
      var n = r('LtsZ')
      r.d(e, 'ApplyPluginsType', function () {
        return n['ApplyPluginsType']
      })
      var o = r('55Ip')
      r.d(e, 'Link', function () {
        return o['a']
      })
      var u = r('Ty5D')
      r.d(e, 'MemoryRouter', function () {
        return u['a']
      }),
        r.d(e, 'NavLink', function () {
          return o['b']
        }),
        r.d(e, 'Plugin', function () {
          return n['Plugin']
        }),
        r.d(e, 'Prompt', function () {
          return u['b']
        }),
        r.d(e, 'Redirect', function () {
          return u['c']
        }),
        r.d(e, 'Route', function () {
          return u['d']
        }),
        r.d(e, 'Router', function () {
          return u['e']
        }),
        r.d(e, 'StaticRouter', function () {
          return u['f']
        }),
        r.d(e, 'Switch', function () {
          return u['g']
        }),
        r.d(e, '__RouterContext', function () {
          return u['h']
        })
      var i = r('YS25')
      r.d(e, 'createBrowserHistory', function () {
        return i['a']
      }),
        r.d(e, 'createHashHistory', function () {
          return i['b']
        }),
        r.d(e, 'createMemoryHistory', function () {
          return i['d']
        }),
        r.d(e, 'dynamic', function () {
          return n['dynamic']
        }),
        r.d(e, 'isBrowser', function () {
          return n['isBrowser']
        }),
        r.d(e, 'matchPath', function () {
          return u['i']
        }),
        r.d(e, 'useHistory', function () {
          return u['j']
        }),
        r.d(e, 'useLocation', function () {
          return u['k']
        }),
        r.d(e, 'useParams', function () {
          return u['l']
        }),
        r.d(e, 'useRouteMatch', function () {
          return u['m']
        }),
        r.d(e, 'withRouter', function () {
          return u['n']
        })
      var a = r('9kvl')
      r.d(e, 'history', function () {
        return a['a']
      }),
        r.d(e, 'plugin', function () {
          return a['b']
        })
    },
    Lw8S: function (t, e) {
      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
      }
      function n(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t
      }
      t.exports = n
    },
    'U/TZ': function (t, e, r) {
      'use strict'
      function n() {
        var t = u(r('q1tI'))
        return (
          (n = function () {
            return t
          }),
          t
        )
      }
      function o() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = o()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var u in t)
          if (Object.prototype.hasOwnProperty.call(t, u)) {
            var i = n ? Object.getOwnPropertyDescriptor(t, u) : null
            i && (i.get || i.set)
              ? Object.defineProperty(r, u, i)
              : (r[u] = t[u])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function i(t, e) {
        return s(t) || f(t, e) || c(t, e) || a()
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function c(t, e) {
        if (t) {
          if ('string' === typeof t) return l(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(t, e)
              : void 0
          )
        }
      }
      function l(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function f(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function s(t) {
        if (Array.isArray(t)) return t
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var p = function (t, e) {
        var r = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r]
            var n = {}
            return (
              Object.keys(e[1]).forEach(function (t) {
                var r = (t.match(/^(.+)\.([^_]+)$/) || []).slice(1),
                  o = i(r, 2),
                  u = o[0],
                  a = o[1]
                ;(a && a !== e[0]) || (n[u || t] = e[1][t])
              }),
              n
            )
          },
          o = (0, n().useState)(r(t, e)),
          u = i(o, 2),
          a = u[0],
          c = u[1]
        return (
          (0, n().useEffect)(
            function () {
              c(r(t, e))
            },
            [t, e],
          ),
          a
        )
      }
      e['default'] = p
    },
    WWur: function (t, e, r) {
      'use strict'
      var n = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = e.target,
          n = void 0 === r ? document.body : r,
          o = document.createElement('textarea'),
          u = document.activeElement
        ;(o.value = t),
          o.setAttribute('readonly', ''),
          (o.style.contain = 'strict'),
          (o.style.position = 'absolute'),
          (o.style.left = '-9999px'),
          (o.style.fontSize = '12pt')
        var i = document.getSelection(),
          a = !1
        i.rangeCount > 0 && (a = i.getRangeAt(0)),
          n.append(o),
          o.select(),
          (o.selectionStart = 0),
          (o.selectionEnd = t.length)
        var c = !1
        try {
          c = document.execCommand('copy')
        } catch (l) {}
        return (
          o.remove(),
          a && (i.removeAllRanges(), i.addRange(a)),
          u && u.focus(),
          c
        )
      }
      ;(t.exports = n), (t.exports['default'] = n)
    },
    bYHP: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var n = u(r('q1tI')),
        o = r('LtsZ')
      function u(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function i() {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }),
          i.apply(this, arguments)
        )
      }
      function a(t) {
        return t.offsetTop + (t.offsetParent ? a(t.offsetParent) : 0)
      }
      var c = function t(e) {
        var r,
          u =
            (null === (r = e.to.match(/(#.+)$/)) || void 0 === r
              ? void 0
              : r[1]) || ''
        return n['default'].createElement(
          o.NavLink,
          i({}, e, {
            onClick: function () {
              return t.scrollToAnchor(u.substring(1))
            },
            isActive: function (t, e) {
              return u && decodeURIComponent(e.hash) === u
            },
          }),
        )
      }
      c.scrollToAnchor = function (t) {
        window.requestAnimationFrame(function () {
          var e = document.getElementById(decodeURIComponent(t))
          e && window.scrollTo(0, a(e) - 100)
        })
      }
      var l = c
      e['default'] = l
    },
    beRK: function (t, e, r) {
      'use strict'
      function n() {
        var t = u(r('q1tI'))
        return (
          (n = function () {
            return t
          }),
          t
        )
      }
      function o() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = o()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var u in t)
          if (Object.prototype.hasOwnProperty.call(t, u)) {
            var i = n ? Object.getOwnPropertyDescriptor(t, u) : null
            i && (i.get || i.set)
              ? Object.defineProperty(r, u, i)
              : (r[u] = t[u])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function i(t, e) {
        return s(t) || f(t, e) || c(t, e) || a()
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function c(t, e) {
        if (t) {
          if ('string' === typeof t) return l(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(t, e)
              : void 0
          )
        }
      }
      function l(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function f(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function s(t) {
        if (Array.isArray(t)) return t
      }
      function p() {
        return 'BASEMENT' === Object({ NODE_ENV: 'production' }).PLATFORM_TYPE
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = e.getDemoUrl = e.getDemoRouteName = void 0)
      var d = function () {
        return p() ? '_demos' : '~demos'
      }
      e.getDemoRouteName = d
      var y = function (t) {
        var e,
          r = window,
          n = r.location,
          o = n.href,
          u = n.origin,
          a = o.split(/#\//),
          c = i(a, 2),
          l = c[0],
          f = c[1],
          s = 'string' === typeof f
        return [
          s ? ''.concat(l, '#') : u,
          ''
            .concat(
              (null === (e = window) || void 0 === e ? void 0 : e.routerBase) ||
                '',
              '/',
            )
            .replace(/\/\/$/, '/'),
          d(),
          '/',
          t,
          p() ? '/index.html' : '',
        ].join('')
      }
      e.getDemoUrl = y
      var v = function (t) {
        var e = (0, n().useState)(''),
          r = i(e, 2),
          o = r[0],
          u = r[1]
        return (
          (0, n().useEffect)(
            function () {
              u(y(t))
            },
            [t],
          ),
          o
        )
      }
      e['default'] = v
    },
    dEAq: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'context', {
          enumerable: !0,
          get: function () {
            return n['default']
          },
        }),
        Object.defineProperty(e, 'Link', {
          enumerable: !0,
          get: function () {
            return o['default']
          },
        }),
        Object.defineProperty(e, 'NavLink', {
          enumerable: !0,
          get: function () {
            return u['default']
          },
        }),
        Object.defineProperty(e, 'AnchorLink', {
          enumerable: !0,
          get: function () {
            return i['default']
          },
        }),
        Object.defineProperty(e, 'useSearch', {
          enumerable: !0,
          get: function () {
            return a['default']
          },
        }),
        Object.defineProperty(e, 'useCopy', {
          enumerable: !0,
          get: function () {
            return c['default']
          },
        }),
        Object.defineProperty(e, 'useRiddle', {
          enumerable: !0,
          get: function () {
            return l['default']
          },
        }),
        Object.defineProperty(e, 'useMotions', {
          enumerable: !0,
          get: function () {
            return f['default']
          },
        }),
        Object.defineProperty(e, 'useCodeSandbox', {
          enumerable: !0,
          get: function () {
            return s['default']
          },
        }),
        Object.defineProperty(e, 'useLocaleProps', {
          enumerable: !0,
          get: function () {
            return p['default']
          },
        }),
        Object.defineProperty(e, 'useDemoUrl', {
          enumerable: !0,
          get: function () {
            return d['default']
          },
        }),
        Object.defineProperty(e, 'useApiData', {
          enumerable: !0,
          get: function () {
            return y['default']
          },
        }),
        Object.defineProperty(e, 'useTSPlaygroundUrl', {
          enumerable: !0,
          get: function () {
            return v['default']
          },
        }),
        Object.defineProperty(e, 'usePrefersColor', {
          enumerable: !0,
          get: function () {
            return b['default']
          },
        })
      var n = m(r('nLCz')),
        o = m(r('zqmC')),
        u = m(r('6asN')),
        i = m(r('bYHP')),
        a = m(r('t/kZ')),
        c = m(r('dfPH')),
        l = m(r('o0kM')),
        f = m(r('zYLY')),
        s = m(r('r1Q5')),
        p = m(r('U/TZ')),
        d = m(r('beRK')),
        y = m(r('3QDa')),
        v = m(r('7sf/')),
        b = m(r('2N97'))
      function m(t) {
        return t && t.__esModule ? t : { default: t }
      }
    },
    dfPH: function (t, e, r) {
      'use strict'
      function n() {
        var t = a(r('q1tI'))
        return (
          (n = function () {
            return t
          }),
          t
        )
      }
      function o() {
        var t = u(r('WWur'))
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function i() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (i = function () {
            return t
          }),
          t
        )
      }
      function a(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = i()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var u = n ? Object.getOwnPropertyDescriptor(t, o) : null
            u && (u.get || u.set)
              ? Object.defineProperty(r, o, u)
              : (r[o] = t[o])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function c(t, e) {
        return d(t) || p(t, e) || f(t, e) || l()
      }
      function l() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function f(t, e) {
        if (t) {
          if ('string' === typeof t) return s(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? s(t, e)
              : void 0
          )
        }
      }
      function s(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function p(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function d(t) {
        if (Array.isArray(t)) return t
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var y = function () {
        var t = (0, n().useState)(),
          e = c(t, 2),
          r = e[0],
          u = e[1],
          i = (0, n().useState)('ready'),
          a = c(i, 2),
          l = a[0],
          f = a[1],
          s = (0, n().useCallback)(function (t) {
            ;(0, o()['default'])(t),
              f('copied'),
              clearTimeout(r),
              u(
                setTimeout(function () {
                  f('ready')
                }, 2e3),
              )
          }, [])
        return [s, l]
      }
      e['default'] = y
    },
    nLCz: function (t, e, r) {
      'use strict'
      function n() {
        var t = o(r('q1tI'))
        return (
          (n = function () {
            return t
          }),
          t
        )
      }
      function o(t) {
        return t && t.__esModule ? t : { default: t }
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var u = n()['default'].createContext({
        config: {
          mode: 'doc',
          title: '',
          navs: {},
          menus: {},
          locales: [],
          repository: { branch: 'master' },
          theme: {},
        },
        meta: { title: '' },
        menu: [],
        nav: [],
        base: '',
        routes: [],
      })
      e['default'] = u
    },
    o0kM: function (t, e, r) {
      'use strict'
      var n = r('5wUe')
      function o() {
        var t = i(r('q1tI'))
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (u = function () {
            return t
          }),
          t
        )
      }
      function i(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = u()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var i = n ? Object.getOwnPropertyDescriptor(t, o) : null
            i && (i.get || i.set)
              ? Object.defineProperty(r, o, i)
              : (r[o] = t[o])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function a(t, e) {
        return p(t) || s(t, e) || l(t, e) || c()
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function l(t, e) {
        if (t) {
          if ('string' === typeof t) return f(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? f(t, e)
              : void 0
          )
        }
      }
      function f(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function s(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function p(t) {
        if (Array.isArray(t)) return t
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var d,
        y = 'https://riddle.alibaba-inc.com/riddles/define',
        v = function () {
          var t = (0, o().useState)(Boolean(d)),
            e = a(t, 2),
            r = e[0],
            n = e[1]
          return (
            (0, o().useEffect)(function () {
              if (void 0 === d) {
                var t = document.createElement('img')
                setTimeout(function () {
                  ;(t.src = ''), t.remove()
                }, 200),
                  (t.onload = function () {
                    ;(d = !0), n(!0), t.remove()
                  }),
                  (t.src =
                    'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png')
              }
            }, []),
            r
          )
        }
      function b(t) {
        var e,
          r = t.dependencies,
          n = t.sources._.tsx || t.sources._.jsx
        return (
          (n = n
            .replace(
              /^/,
              "import ReactDOM from 'react-dom@".concat(
                (null === (e = r.react) || void 0 === e ? void 0 : e.version) ||
                  'latest',
                "';\n",
              ),
            )
            .replace('export default', 'const DumiDemo =')
            .concat('\nReactDOM.render(<DumiDemo />, mountNode);')),
          (n = n.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g, function (t, e, n) {
            var o = ''.concat(e).concat(n)
            return r[n] && (o += '@'.concat(r[n].version)), o
          })),
          n
        )
      }
      var m = function (t) {
        var e = (0, o().useState)(),
          r = a(e, 2),
          u = r[0],
          i = r[1],
          c = v()
        return (
          (0, o().useEffect)(
            function () {
              if (t && c && 1 === Object.keys(t.sources).length) {
                var e = document.createElement('form'),
                  r = document.createElement('input')
                return (
                  (e.method = 'POST'),
                  (e.target = '_blank'),
                  (e.style.display = 'none'),
                  (e.action = y),
                  e.appendChild(r),
                  e.setAttribute('data-demo', t.title || ''),
                  (r.name = 'data'),
                  (r.value = JSON.stringify({
                    title: t.titlle,
                    js: b(t),
                    css: Object.entries(t.dependencies)
                      .filter(function (t) {
                        var e = n(t, 2),
                          r = e[1]
                        return r.css
                      })
                      .map(function (t) {
                        var e = n(t, 2),
                          r = e[0],
                          o = e[1],
                          u = o.version,
                          i = o.css
                        return "@import '~".concat(
                          i.replace(
                            new RegExp('^('.concat(r, ')')),
                            '$1@'.concat(u),
                          ),
                          "';",
                        )
                      })
                      .join('\n'),
                  })),
                  document.body.appendChild(e),
                  i(function () {
                    return function () {
                      return e.submit()
                    }
                  }),
                  function () {
                    return e.remove()
                  }
                )
              }
            },
            [t, c],
          ),
          u
        )
      }
      e['default'] = m
    },
    r1Q5: function (t, e, r) {
      'use strict'
      var n = r('5wUe')
      function o() {
        var t = c(r('q1tI'))
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u() {
        var t = i(r('6xEa'))
        return (
          (u = function () {
            return t
          }),
          t
        )
      }
      function i(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function a() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (a = function () {
            return t
          }),
          t
        )
      }
      function c(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = a()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var u = n ? Object.getOwnPropertyDescriptor(t, o) : null
            u && (u.get || u.set)
              ? Object.defineProperty(r, o, u)
              : (r[o] = t[o])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function l(t, e) {
        return y(t) || d(t, e) || s(t, e) || f()
      }
      function f() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function s(t, e) {
        if (t) {
          if ('string' === typeof t) return p(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? p(t, e)
              : void 0
          )
        }
      }
      function p(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function d(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function y(t) {
        if (Array.isArray(t)) return t
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var v = 'https://codesandbox.io/api/v1/sandboxes/define'
      function b(t) {
        return u()
          ['default'].compressToBase64(JSON.stringify(t))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '')
      }
      function m(t) {
        var e = document.createElement('span')
        e.innerHTML = t
        var r = e.textContent
        return e.remove(), r
      }
      function h(t) {
        var e = Boolean(t.sources._.tsx),
          r = e ? '.tsx' : '.jsx',
          o = {},
          u = {},
          i = Object.values(t.dependencies).filter(function (t) {
            return t.css
          }),
          a = 'App'.concat(r),
          c = 'index'.concat(r)
        return (
          Object.entries(t.dependencies).forEach(function (t) {
            var e = n(t, 2),
              r = e[0],
              o = e[1].version
            u[r] = o
          }),
          u['react-dom'] || (u['react-dom'] = u.react || 'latest'),
          (o['sandbox.config.json'] = {
            content: JSON.stringify(
              {
                template: e
                  ? 'create-react-app-typescript'
                  : 'create-react-app',
              },
              null,
              2,
            ),
          }),
          (o['package.json'] = {
            content: JSON.stringify(
              {
                name: t.title,
                description:
                  m(t.description) || 'An auto-generated demo by dumi',
                main: c,
                dependencies: u,
                devDependencies: e ? { typescript: '^3' } : {},
              },
              null,
              2,
            ),
          }),
          (o['index.html'] = {
            content: '<div style="margin: 16px;" id="root"></div>',
          }),
          (o[c] = {
            content: "/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(
              i
                .map(function (t) {
                  var e = t.css
                  return "import '".concat(e, "';")
                })
                .join('\n'),
              "\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);",
            ),
          }),
          Object.entries(t.sources).forEach(function (t) {
            var e = n(t, 2),
              r = e[0],
              u = e[1],
              i = u.tsx,
              c = u.jsx,
              l = u.content
            o['_' === r ? a : r] = { content: i || c || l }
          }),
          b({ files: o })
        )
      }
      var g = function (t) {
        var e = (0, o().useState)(),
          r = l(e, 2),
          n = r[0],
          u = r[1]
        return (
          (0, o().useEffect)(
            function () {
              if (t) {
                var e = document.createElement('form'),
                  r = document.createElement('input'),
                  n = h(t)
                return (
                  (e.method = 'POST'),
                  (e.target = '_blank'),
                  (e.style.display = 'none'),
                  (e.action = v),
                  e.appendChild(r),
                  e.setAttribute('data-demo', t.title || ''),
                  (r.name = 'parameters'),
                  (r.value = n),
                  document.body.appendChild(e),
                  u(function () {
                    return function () {
                      return e.submit()
                    }
                  }),
                  function () {
                    return e.remove()
                  }
                )
              }
            },
            [t],
          ),
          n
        )
      }
      e['default'] = g
    },
    't/kZ': function (t, e, r) {
      'use strict'
      var n = r('R5yR')
      function o() {
        var t = a(r('q1tI'))
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var u = r('dEAq')
      function i() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (i = function () {
            return t
          }),
          t
        )
      }
      function a(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = i()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in t)
          if (Object.prototype.hasOwnProperty.call(t, o)) {
            var u = n ? Object.getOwnPropertyDescriptor(t, o) : null
            u && (u.get || u.set)
              ? Object.defineProperty(r, o, u)
              : (r[o] = t[o])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function c(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                f(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                )
              })
        }
        return t
      }
      function f(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      function s(t, e) {
        return b(t) || v(t, e) || d(t, e) || p()
      }
      function p() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function d(t, e) {
        if (t) {
          if ('string' === typeof t) return y(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? y(t, e)
              : void 0
          )
        }
      }
      function y(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function v(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function b(t) {
        if (Array.isArray(t)) return t
      }
      var m = function (t) {
          var e = (0, o().useContext)(u.context),
            r = e.locale,
            i = e.routes,
            a = e.config.locales,
            c = (0, o().useState)([]),
            l = s(c, 2),
            f = l[0],
            p = l[1],
            d = (0, o().useState)([]),
            y = s(d, 2),
            v = y[0],
            b = y[1]
          return (
            (0, o().useEffect)(
              function () {
                p(
                  i
                    .filter(function (t) {
                      var e = t.title,
                        n = t.meta,
                        o =
                          (null === n || void 0 === n ? void 0 : n.locale) ===
                          r,
                        u =
                          (null === n || void 0 === n ? void 0 : n.locale) ===
                            a[0].name ||
                          (!(null === n || void 0 === n ? void 0 : n.locale) &&
                            (!a.length || r === a[0].name))
                      return e && (u || o)
                    })
                    .reduce(function (t, e) {
                      var r,
                        o,
                        u = { title: e.title, path: e.path }
                      return (
                        (null === (r = e.meta) || void 0 === r
                          ? void 0
                          : r.group) && (u.parent = e.meta.group),
                        t.push(u),
                        t.push.apply(
                          t,
                          n(
                            (
                              (null === (o = e.meta) || void 0 === o
                                ? void 0
                                : o.slugs) || []
                            )
                              .filter(function (t) {
                                var r = t.value
                                return r !== e.title
                              })
                              .map(function (t) {
                                return {
                                  title: t.value,
                                  path: ''
                                    .concat(e.path, '#')
                                    .concat(t.heading),
                                  parent: u,
                                }
                              }),
                          ),
                        ),
                        t
                      )
                    }, []),
                )
              },
              [i.length, r],
            ),
            (0, o().useEffect)(
              function () {
                var e =
                  null === t || void 0 === t ? void 0 : t.trim().toUpperCase()
                if (e) {
                  for (var r = [], n = 0; n < f.length && r.length < 6; n += 1)
                    f[n].title.toUpperCase().indexOf(e) > -1 && r.push(f[n])
                  b(r)
                } else b([])
              },
              [t, f.length],
            ),
            v
          )
        },
        h = function () {
          var t = (0, o().useContext)(u.context),
            e = t.config.algolia,
            r = (0, o().useCallback)(
              function (t) {
                window.docsearch(l({ inputSelector: t }, e))
              },
              [e],
            )
          return r
        },
        g = function (t) {
          var e = (0, o().useContext)(u.context),
            r = e.config,
            n = m(t),
            i = h()
          return r.algolia ? i : n
        }
      e['default'] = g
    },
    tJVT: function (t, e, r) {
      'use strict'
      function n(t) {
        if (Array.isArray(t)) return t
      }
      function o(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function u(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function i(t, e) {
        if (t) {
          if ('string' === typeof t) return u(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? u(t, e)
              : void 0
          )
        }
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function c(t, e) {
        return n(t) || o(t, e) || i(t, e) || a()
      }
      r.d(e, 'a', function () {
        return c
      })
    },
    xbqb: function (t, e) {
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      t.exports = r
    },
    zYLY: function (t, e, r) {
      'use strict'
      function n() {
        var t = u(r('q1tI'))
        return (
          (n = function () {
            return t
          }),
          t
        )
      }
      function o() {
        if ('function' !== typeof WeakMap) return null
        var t = new WeakMap()
        return (
          (o = function () {
            return t
          }),
          t
        )
      }
      function u(t) {
        if (t && t.__esModule) return t
        if (null === t || ('object' !== typeof t && 'function' !== typeof t))
          return { default: t }
        var e = o()
        if (e && e.has(t)) return e.get(t)
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var u in t)
          if (Object.prototype.hasOwnProperty.call(t, u)) {
            var i = n ? Object.getOwnPropertyDescriptor(t, u) : null
            i && (i.get || i.set)
              ? Object.defineProperty(r, u, i)
              : (r[u] = t[u])
          }
        return (r['default'] = t), e && e.set(t, r), r
      }
      function i(t, e) {
        return s(t) || f(t, e) || c(t, e) || a()
      }
      function a() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function c(t, e) {
        if (t) {
          if ('string' === typeof t) return l(t, e)
          var r = Object.prototype.toString.call(t).slice(8, -1)
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? l(t, e)
              : void 0
          )
        }
      }
      function l(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
        return n
      }
      function f(t, e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
          var r = [],
            n = !0,
            o = !1,
            u = void 0
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(n = (i = a.next()).done);
              n = !0
            )
              if ((r.push(i.value), e && r.length === e)) break
          } catch (c) {
            ;(o = !0), (u = c)
          } finally {
            try {
              n || null == a['return'] || a['return']()
            } finally {
              if (o) throw u
            }
          }
          return r
        }
      }
      function s(t) {
        if (Array.isArray(t)) return t
      }
      function p(t, e, r) {
        var n,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
        if (o < e.length) {
          var u = e[o],
            a = function () {
              return p(t, e, r, o + 1)
            },
            c = u.match(/^([^:]+):?(.*)$/) || [],
            l = i(c, 3),
            f = l[1],
            s = l[2]
          switch (f) {
            case 'autoplay':
              a()
              break
            case 'click':
              var d = s.match(/^(global\()?(.+?)\)?$/) || [],
                y = i(d, 3),
                v = y[1],
                b = y[2],
                m = v ? document : t
              null === (n = m.querySelector(b)) || void 0 === n || n.click(),
                a()
              break
            case 'timeout':
              setTimeout(a, Number(s))
              break
            case 'capture':
              window.postMessage(
                { type: 'dumi:capture-element', value: s },
                '*',
              ),
                a()
              break
            default:
              console.warn(
                "[dumi: motion] unknown motion '".concat(u, "', skip."),
              ),
                a()
          }
        } else r()
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = void 0)
      var d = function (t, e) {
        var r = (0, n().useState)(!1),
          o = i(r, 2),
          u = o[0],
          a = o[1],
          c = (0, n().useCallback)(
            function () {
              u ||
                (p(e, t, function () {
                  a(!1)
                }),
                a(!0))
            },
            [t, e, u],
          )
        return (
          (0, n().useEffect)(
            function () {
              'autoplay' === t[0] && e && c()
            },
            [t, e],
          ),
          [c, u]
        )
      }
      e['default'] = d
    },
    zqmC: function (t, e, r) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e['default'] = e.LinkWrapper = void 0)
      var n = u(r('q1tI')),
        o = r('LtsZ')
      function u(t) {
        return t && t.__esModule ? t : { default: t }
      }
      function i() {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }),
          i.apply(this, arguments)
        )
      }
      function a(t, e) {
        if (null == t) return {}
        var r,
          n,
          o = c(t, e)
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(t)
          for (n = 0; n < u.length; n++)
            (r = u[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]))
        }
        return o
      }
      function c(t, e) {
        if (null == t) return {}
        var r,
          n,
          o = {},
          u = Object.keys(t)
        for (n = 0; n < u.length; n++)
          (r = u[n]), e.indexOf(r) >= 0 || (o[r] = t[r])
        return o
      }
      var l = function (t) {
        return function (e) {
          var r = e.to,
            o = a(e, ['to']),
            u = /^(\w+:)?\/\//.test(r) || !r,
            c = n['default'].isValidElement(o.children)
          return n['default'].createElement(
            t,
            i(
              {
                to: r || '',
                component: u
                  ? function () {
                      return n['default'].createElement(
                        'a',
                        {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          href: r,
                        },
                        o.children,
                        r &&
                          !c &&
                          n['default'].createElement(
                            'svg',
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              'aria-hidden': 'true',
                              x: '0px',
                              y: '0px',
                              viewBox: '0 0 100 100',
                              width: '15',
                              height: '15',
                              className: '__dumi-default-external-link-icon',
                            },
                            n['default'].createElement('path', {
                              fill: 'currentColor',
                              d:
                                'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                            }),
                            n['default'].createElement('polygon', {
                              fill: 'currentColor',
                              points:
                                '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                            }),
                          ),
                      )
                    }
                  : void 0,
              },
              o,
              u
                ? {}
                : {
                    onClick: function () {
                      var t
                      window.scrollTo({ top: 0 })
                      for (
                        var e = arguments.length, r = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        r[n] = arguments[n]
                      null === (t = o.onClick) ||
                        void 0 === t ||
                        t.apply(this, r)
                    },
                  },
            ),
          )
        }
      }
      e.LinkWrapper = l
      var f = l(o.Link)
      e['default'] = f
    },
  },
])
