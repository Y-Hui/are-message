;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '0Owb': function (e, t, n) {
      'use strict'
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          r.apply(this, arguments)
        )
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    '0zqC': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('tJVT'),
        o = n('q1tI'),
        i = n.n(o),
        a = n('wx14')
      function s(e, t, n) {
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
        )
      }
      function l(e) {
        if (Array.isArray(e)) return e
      }
      function u(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done);
              r = !0
            )
              if ((n.push(a.value), t && n.length === t)) break
          } catch (l) {
            ;(o = !0), (i = l)
          } finally {
            try {
              r || null == s['return'] || s['return']()
            } finally {
              if (o) throw i
            }
          }
          return n
        }
      }
      function c(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function p(e, t) {
        if (e) {
          if ('string' === typeof e) return c(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? c(e, t)
              : void 0
          )
        }
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function f(e, t) {
        return l(e) || u(e, t) || p(e, t) || d()
      }
      function h(e) {
        return (
          (h =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          h(e)
        )
      }
      var m = n('zLVn')
      function v(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = Object(m['a'])(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      function g(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                s(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      var y = n('TSYQ'),
        E = n.n(y),
        w = n('TOwV')
      function O(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = []
        return (
          i.a.Children.forEach(e, function (e) {
            ;((void 0 !== e && null !== e) || t.keepEmpty) &&
              (Array.isArray(e)
                ? (n = n.concat(O(e)))
                : Object(w['isFragment'])(e) && e.props
                ? (n = n.concat(O(e.props.children, t)))
                : n.push(e))
          }),
          n
        )
      }
      var k = function () {
        if ('undefined' === typeof navigator || 'undefined' === typeof window)
          return !1
        var e = navigator.userAgent || navigator.vendor || window.opera
        return !(
          !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) &&
          !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            e.substr(0, 4),
          )
        )
      }
      function S(e, t) {
        var n = t || {},
          r = n.defaultValue,
          i = n.value,
          a = n.onChange,
          s = n.postState,
          l = o['useState'](function () {
            return void 0 !== i
              ? i
              : void 0 !== r
              ? 'function' === typeof r
                ? r()
                : r
              : 'function' === typeof e
              ? e()
              : e
          }),
          u = f(l, 2),
          c = u[0],
          p = u[1],
          d = void 0 !== i ? i : c
        function h(e) {
          p(e), d !== e && a && a(e, d)
        }
        s && (d = s(d))
        var m = o['useRef'](!0)
        return (
          o['useEffect'](
            function () {
              m.current ? (m.current = !1) : void 0 === i && p(i)
            },
            [i],
          ),
          [d, h]
        )
      }
      function C(e) {
        if (Array.isArray(e)) return c(e)
      }
      function T(e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      }
      function A() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function M(e) {
        return C(e) || T(e) || p(e) || A()
      }
      var x = function (e) {
          return +setTimeout(e, 16)
        },
        N = function (e) {
          return clearTimeout(e)
        }
      function _(e) {
        return x(e)
      }
      function I(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function P(e, t, n) {
        return t && R(e.prototype, t), n && R(e, n), e
      }
      'undefined' !== typeof window &&
        'requestAnimationFrame' in window &&
        ((x = function (e) {
          return window.requestAnimationFrame(e)
        }),
        (N = function (e) {
          return window.cancelAnimationFrame(e)
        })),
        (_.cancel = N)
      var D = n('s4An')
      function L(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Object(D['a'])(e, t)
      }
      function j(e) {
        return (
          (j = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          j(e)
        )
      }
      function F() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' === typeof Proxy) return !0
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          )
        } catch (e) {
          return !1
        }
      }
      var B = n('cDf5'),
        K = n.n(B)
      function U(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return e
      }
      function H(e, t) {
        return !t || ('object' !== K()(t) && 'function' !== typeof t) ? U(e) : t
      }
      function G(e) {
        var t = F()
        return function () {
          var n,
            r = j(e)
          if (t) {
            var o = j(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return H(this, n)
        }
      }
      var $ = n('i8i4'),
        z = n.n($)
      function W(e) {
        return e instanceof HTMLElement ? e : z.a.findDOMNode(e)
      }
      var V = {}
      function Y(e, t) {
        0
      }
      function X(e, t, n) {
        t || V[n] || (e(!1, n), (V[n] = !0))
      }
      function q(e, t) {
        X(Y, e, t)
      }
      var Z = q
      function Q(e, t) {
        'function' === typeof e
          ? e(t)
          : 'object' === h(e) && e && 'current' in e && (e.current = t)
      }
      function J() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        return function (e) {
          t.forEach(function (t) {
            Q(t, e)
          })
        }
      }
      function ee(e) {
        var t,
          n,
          r = Object(w['isMemo'])(e) ? e.type.type : e.type
        return (
          !(
            'function' === typeof r &&
            !(null === (t = r.prototype) || void 0 === t ? void 0 : t.render)
          ) &&
          !(
            'function' === typeof e &&
            !(null === (n = e.prototype) || void 0 === n ? void 0 : n.render)
          )
        )
      }
      var te = n('bdgK'),
        ne = 'rc-observer-key',
        re = (function (e) {
          L(n, e)
          var t = G(n)
          function n() {
            var e
            return (
              I(this, n),
              (e = t.apply(this, arguments)),
              (e.resizeObserver = null),
              (e.childNode = null),
              (e.currentElement = null),
              (e.state = {
                width: 0,
                height: 0,
                offsetHeight: 0,
                offsetWidth: 0,
              }),
              (e.onResize = function (t) {
                var n = e.props.onResize,
                  r = t[0].target,
                  o = r.getBoundingClientRect(),
                  i = o.width,
                  a = o.height,
                  s = r.offsetWidth,
                  l = r.offsetHeight,
                  u = Math.floor(i),
                  c = Math.floor(a)
                if (
                  e.state.width !== u ||
                  e.state.height !== c ||
                  e.state.offsetWidth !== s ||
                  e.state.offsetHeight !== l
                ) {
                  var p = {
                    width: u,
                    height: c,
                    offsetWidth: s,
                    offsetHeight: l,
                  }
                  e.setState(p),
                    n &&
                      Promise.resolve().then(function () {
                        n(
                          b(b({}, p), {}, { offsetWidth: s, offsetHeight: l }),
                          r,
                        )
                      })
                }
              }),
              (e.setChildNode = function (t) {
                e.childNode = t
              }),
              e
            )
          }
          return (
            P(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.onComponentUpdated()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.onComponentUpdated()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.destroyObserver()
                },
              },
              {
                key: 'onComponentUpdated',
                value: function () {
                  var e = this.props.disabled
                  if (e) this.destroyObserver()
                  else {
                    var t = W(this.childNode || this),
                      n = t !== this.currentElement
                    n && (this.destroyObserver(), (this.currentElement = t)),
                      !this.resizeObserver &&
                        t &&
                        ((this.resizeObserver = new te['a'](this.onResize)),
                        this.resizeObserver.observe(t))
                  }
                },
              },
              {
                key: 'destroyObserver',
                value: function () {
                  this.resizeObserver &&
                    (this.resizeObserver.disconnect(),
                    (this.resizeObserver = null))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.children,
                    t = O(e)
                  if (t.length > 1)
                    Z(
                      !1,
                      'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
                    )
                  else if (0 === t.length)
                    return (
                      Z(
                        !1,
                        '`children` of ResizeObserver is empty. Nothing is in observe.',
                      ),
                      null
                    )
                  var n = t[0]
                  if (o['isValidElement'](n) && ee(n)) {
                    var r = n.ref
                    t[0] = o['cloneElement'](n, {
                      ref: J(r, this.setChildNode),
                    })
                  }
                  return 1 === t.length
                    ? t[0]
                    : t.map(function (e, t) {
                        return !o['isValidElement'](e) ||
                          ('key' in e && null !== e.key)
                          ? e
                          : o['cloneElement'](e, {
                              key: ''.concat(ne, '-').concat(t),
                            })
                      })
                },
              },
            ]),
            n
          )
        })(o['Component'])
      re.displayName = 'ResizeObserver'
      var oe = re
      function ie(e) {
        var t = Object(o['useRef'])(),
          n = Object(o['useRef'])(!1)
        function r() {
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i]
          n.current ||
            (_.cancel(t.current),
            (t.current = _(function () {
              e.apply(void 0, o)
            })))
        }
        return (
          Object(o['useEffect'])(function () {
            return function () {
              ;(n.current = !0), _.cancel(t.current)
            }
          }, []),
          r
        )
      }
      function ae(e) {
        var t = Object(o['useRef'])([]),
          n = Object(o['useState'])({}),
          r = f(n, 2),
          i = r[1],
          a = Object(o['useRef'])('function' === typeof e ? e() : e),
          s = ie(function () {
            var e = a.current
            t.current.forEach(function (t) {
              e = t(e)
            }),
              (t.current = []),
              (a.current = e),
              i({})
          })
        function l(e) {
          t.current.push(e), s()
        }
        return [a.current, l]
      }
      var se = {
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
            var t = e.keyCode
            if (
              (e.altKey && !e.ctrlKey) ||
              e.metaKey ||
              (t >= se.F1 && t <= se.F12)
            )
              return !1
            switch (t) {
              case se.ALT:
              case se.CAPS_LOCK:
              case se.CONTEXT_MENU:
              case se.CTRL:
              case se.DOWN:
              case se.END:
              case se.ESC:
              case se.HOME:
              case se.INSERT:
              case se.LEFT:
              case se.MAC_FF_META:
              case se.META:
              case se.NUMLOCK:
              case se.NUM_CENTER:
              case se.PAGE_DOWN:
              case se.PAGE_UP:
              case se.PAUSE:
              case se.PRINT_SCREEN:
              case se.RIGHT:
              case se.SHIFT:
              case se.UP:
              case se.WIN_KEY:
              case se.WIN_KEY_RIGHT:
                return !1
              default:
                return !0
            }
          },
          isCharacterKey: function (e) {
            if (e >= se.ZERO && e <= se.NINE) return !0
            if (e >= se.NUM_ZERO && e <= se.NUM_MULTIPLY) return !0
            if (e >= se.A && e <= se.Z) return !0
            if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
              return !0
            switch (e) {
              case se.SPACE:
              case se.QUESTION_MARK:
              case se.NUM_PLUS:
              case se.NUM_MINUS:
              case se.NUM_PERIOD:
              case se.NUM_DIVISION:
              case se.SEMICOLON:
              case se.DASH:
              case se.EQUALS:
              case se.COMMA:
              case se.PERIOD:
              case se.SLASH:
              case se.APOSTROPHE:
              case se.SINGLE_QUOTE:
              case se.OPEN_SQUARE_BRACKET:
              case se.BACKSLASH:
              case se.CLOSE_SQUARE_BRACKET:
                return !0
              default:
                return !1
            }
          },
        },
        le = se
      function ue(e, t) {
        var n,
          r = e.prefixCls,
          i = e.id,
          a = e.active,
          l = e.rtl,
          u = e.tab,
          c = u.key,
          p = u.tab,
          d = u.disabled,
          f = u.closeIcon,
          h = e.tabBarGutter,
          m = e.tabPosition,
          v = e.closable,
          g = e.renderWrapper,
          b = e.removeAriaLabel,
          y = e.editable,
          w = e.onClick,
          O = e.onRemove,
          k = e.onFocus,
          S = ''.concat(r, '-tab')
        o['useEffect'](function () {
          return O
        }, [])
        var C = {}
        'top' === m || 'bottom' === m
          ? (C[l ? 'marginLeft' : 'marginRight'] = h)
          : (C.marginBottom = h)
        var T = y && !1 !== v && !d
        function A(e) {
          d || w(e)
        }
        function M(e) {
          e.preventDefault(),
            e.stopPropagation(),
            y.onEdit('remove', { key: c, event: e })
        }
        var x = o['createElement'](
          'div',
          {
            key: c,
            ref: t,
            className: E()(
              S,
              ((n = {}),
              s(n, ''.concat(S, '-with-remove'), T),
              s(n, ''.concat(S, '-active'), a),
              s(n, ''.concat(S, '-disabled'), d),
              n),
            ),
            style: C,
            onClick: A,
          },
          o['createElement'](
            'div',
            {
              role: 'tab',
              'aria-selected': a,
              id: i && ''.concat(i, '-tab-').concat(c),
              className: ''.concat(S, '-btn'),
              'aria-controls': i && ''.concat(i, '-panel-').concat(c),
              'aria-disabled': d,
              tabIndex: d ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), A(e)
              },
              onKeyDown: function (e) {
                ;[le.SPACE, le.ENTER].includes(e.which) &&
                  (e.preventDefault(), A(e))
              },
              onFocus: k,
            },
            p,
          ),
          T &&
            o['createElement'](
              'button',
              {
                type: 'button',
                'aria-label': b || 'remove',
                tabIndex: 0,
                className: ''.concat(S, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), M(e)
                },
              },
              f || y.removeIcon || '\xd7',
            ),
        )
        return g && (x = g(x)), x
      }
      var ce = o['forwardRef'](ue),
        pe = { width: 0, height: 0, left: 0, top: 0 }
      function de(e, t, n) {
        return Object(o['useMemo'])(
          function () {
            for (
              var n,
                r = new Map(),
                o =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  pe,
                i = o.left + o.width,
                a = 0;
              a < e.length;
              a += 1
            ) {
              var s,
                l = e[a].key,
                u = t.get(l)
              if (!u)
                u =
                  t.get(
                    null === (s = e[a - 1]) || void 0 === s ? void 0 : s.key,
                  ) || pe
              var c = r.get(l) || b({}, u)
              ;(c.right = i - c.left - c.width), r.set(l, c)
            }
            return r
          },
          [
            e
              .map(function (e) {
                return e.key
              })
              .join('_'),
            t,
            n,
          ],
        )
      }
      var fe = { width: 0, height: 0, left: 0, top: 0, right: 0 }
      function he(e, t, n, r, i) {
        var a,
          s,
          l,
          u = i.tabs,
          c = i.tabPosition,
          p = i.rtl
        ;['top', 'bottom'].includes(c)
          ? ((a = 'width'), (s = p ? 'right' : 'left'), (l = Math.abs(t.left)))
          : ((a = 'height'), (s = 'top'), (l = -t.top))
        var d = t[a],
          f = n[a],
          h = r[a],
          m = d
        return (
          f + h > d && (m = d - h),
          Object(o['useMemo'])(
            function () {
              if (!u.length) return [0, 0]
              for (var t = u.length, n = t, r = 0; r < t; r += 1) {
                var o = e.get(u[r].key) || fe
                if (o[s] + o[a] > l + m) {
                  n = r - 1
                  break
                }
              }
              for (var i = 0, c = t - 1; c >= 0; c -= 1) {
                var p = e.get(u[c].key) || fe
                if (p[s] < l) {
                  i = c + 1
                  break
                }
              }
              return [i, n]
            },
            [
              e,
              l,
              m,
              c,
              u
                .map(function (e) {
                  return e.key
                })
                .join('_'),
              p,
            ],
          )
        )
      }
      var me = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }),
              e(t, n)
            )
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        ve = o['createContext'](null),
        ge = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this
          }
          return (
            me(t, e),
            (t.prototype.render = function () {
              return o['createElement'](
                ve.Provider,
                { value: this.props.store },
                this.props.children,
              )
            }),
            t
          )
        })(o['Component']),
        be = n('Gytx'),
        ye = n.n(be),
        Ee = n('2mql'),
        we = n.n(Ee),
        Oe = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }),
              e(t, n)
            )
          }
          return function (t, n) {
            function r() {
              this.constructor = t
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()))
          }
        })(),
        ke = function () {
          return (
            (ke =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in ((t = arguments[n]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                return e
              }),
            ke.apply(this, arguments)
          )
        }
      function Se(e) {
        return e.displayName || e.name || 'Component'
      }
      var Ce = function () {
        return {}
      }
      function Te(e, t) {
        void 0 === t && (t = {})
        var n = !!e,
          r = e || Ce
        return function (i) {
          var a = (function (t) {
            function a(e, n) {
              var o = t.call(this, e, n) || this
              return (
                (o.unsubscribe = null),
                (o.handleChange = function () {
                  if (o.unsubscribe) {
                    var e = r(o.store.getState(), o.props)
                    o.setState({ subscribed: e })
                  }
                }),
                (o.store = o.context),
                (o.state = {
                  subscribed: r(o.store.getState(), e),
                  store: o.store,
                  props: e,
                }),
                o
              )
            }
            return (
              Oe(a, t),
              (a.getDerivedStateFromProps = function (t, n) {
                return e && 2 === e.length && t !== n.props
                  ? { subscribed: r(n.store.getState(), t), props: t }
                  : { props: t }
              }),
              (a.prototype.componentDidMount = function () {
                this.trySubscribe()
              }),
              (a.prototype.componentWillUnmount = function () {
                this.tryUnsubscribe()
              }),
              (a.prototype.shouldComponentUpdate = function (e, t) {
                return (
                  !ye()(this.props, e) ||
                  !ye()(this.state.subscribed, t.subscribed)
                )
              }),
              (a.prototype.trySubscribe = function () {
                n &&
                  ((this.unsubscribe = this.store.subscribe(this.handleChange)),
                  this.handleChange())
              }),
              (a.prototype.tryUnsubscribe = function () {
                this.unsubscribe &&
                  (this.unsubscribe(), (this.unsubscribe = null))
              }),
              (a.prototype.render = function () {
                var e = ke(ke(ke({}, this.props), this.state.subscribed), {
                  store: this.store,
                })
                return o['createElement'](
                  i,
                  ke({}, e, { ref: this.props.miniStoreForwardedRef }),
                )
              }),
              (a.displayName = 'Connect(' + Se(i) + ')'),
              (a.contextType = ve),
              a
            )
          })(o['Component'])
          if (t.forwardRef) {
            var s = o['forwardRef'](function (e, t) {
              return o['createElement'](
                a,
                ke({}, e, { miniStoreForwardedRef: t }),
              )
            })
            return we()(s, i)
          }
          return we()(a, i)
        }
      }
      var Ae = function () {
        return (
          (Ae =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }),
          Ae.apply(this, arguments)
        )
      }
      function Me(e) {
        var t = e,
          n = []
        function r(e) {
          t = Ae(Ae({}, t), e)
          for (var r = 0; r < n.length; r++) n[r]()
        }
        function o() {
          return t
        }
        function i(e) {
          return (
            n.push(e),
            function () {
              var t = n.indexOf(e)
              n.splice(t, 1)
            }
          )
        }
        return { setState: r, getState: o, subscribe: i }
      }
      function xe(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xe(Object(n), !0).forEach(function (t) {
                s(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : xe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      function _e(e, t) {
        var n = Ne({}, e)
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e]
            }),
          n
        )
      }
      function Ie() {
        var e = [].slice.call(arguments, 0)
        return 1 === e.length
          ? e[0]
          : function () {
              for (var t = 0; t < e.length; t++)
                e[t] && e[t].apply && e[t].apply(this, arguments)
            }
      }
      var Re = /iPhone/i,
        Pe = /iPod/i,
        De = /iPad/i,
        Le = /\bAndroid(?:.+)Mobile\b/i,
        je = /Android/i,
        Fe = /\bAndroid(?:.+)SD4930UR\b/i,
        Be = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
        Ke = /Windows Phone/i,
        Ue = /\bWindows(?:.+)ARM\b/i,
        He = /BlackBerry/i,
        Ge = /BB10/i,
        $e = /Opera Mini/i,
        ze = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        We = /Mobile(?:.+)Firefox\b/i
      function Ve(e, t) {
        return e.test(t)
      }
      function Ye(e) {
        var t =
            e || ('undefined' !== typeof navigator ? navigator.userAgent : ''),
          n = t.split('[FBAN')
        if ('undefined' !== typeof n[1]) {
          var r = n,
            o = f(r, 1)
          t = o[0]
        }
        if (((n = t.split('Twitter')), 'undefined' !== typeof n[1])) {
          var i = n,
            a = f(i, 1)
          t = a[0]
        }
        var s = {
          apple: {
            phone: Ve(Re, t) && !Ve(Ke, t),
            ipod: Ve(Pe, t),
            tablet: !Ve(Re, t) && Ve(De, t) && !Ve(Ke, t),
            device: (Ve(Re, t) || Ve(Pe, t) || Ve(De, t)) && !Ve(Ke, t),
          },
          amazon: {
            phone: Ve(Fe, t),
            tablet: !Ve(Fe, t) && Ve(Be, t),
            device: Ve(Fe, t) || Ve(Be, t),
          },
          android: {
            phone: (!Ve(Ke, t) && Ve(Fe, t)) || (!Ve(Ke, t) && Ve(Le, t)),
            tablet:
              !Ve(Ke, t) &&
              !Ve(Fe, t) &&
              !Ve(Le, t) &&
              (Ve(Be, t) || Ve(je, t)),
            device:
              (!Ve(Ke, t) &&
                (Ve(Fe, t) || Ve(Be, t) || Ve(Le, t) || Ve(je, t))) ||
              Ve(/\bokhttp\b/i, t),
          },
          windows: {
            phone: Ve(Ke, t),
            tablet: Ve(Ue, t),
            device: Ve(Ke, t) || Ve(Ue, t),
          },
          other: {
            blackberry: Ve(He, t),
            blackberry10: Ve(Ge, t),
            opera: Ve($e, t),
            firefox: Ve(We, t),
            chrome: Ve(ze, t),
            device:
              Ve(He, t) || Ve(Ge, t) || Ve($e, t) || Ve(We, t) || Ve(ze, t),
          },
          any: null,
          phone: null,
          tablet: null,
        }
        return (
          (s.any =
            s.apple.device ||
            s.android.device ||
            s.windows.device ||
            s.other.device),
          (s.phone = s.apple.phone || s.android.phone || s.windows.phone),
          (s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet),
          s
        )
      }
      var Xe = b(b({}, Ye()), {}, { isMobile: Ye }),
        qe = Xe
      function Ze() {}
      function Qe(e, t, n) {
        var r = t || ''
        return e.key || ''.concat(r, 'item_').concat(n)
      }
      function Je(e) {
        return ''.concat(e, '-menu-')
      }
      function et(e, t) {
        var n = -1
        o['Children'].forEach(e, function (e) {
          ;(n += 1),
            e && e.type && e.type.isMenuItemGroup
              ? o['Children'].forEach(e.props.children, function (e) {
                  ;(n += 1), t(e, n)
                })
              : t(e, n)
        })
      }
      function tt(e, t, n) {
        e &&
          !n.find &&
          o['Children'].forEach(e, function (e) {
            if (e) {
              var r = e.type
              if (!r || !(r.isSubMenu || r.isMenuItem || r.isMenuItemGroup))
                return
              ;-1 !== t.indexOf(e.key)
                ? (n.find = !0)
                : e.props.children && tt(e.props.children, t, n)
            }
          })
      }
      var nt = [
          'defaultSelectedKeys',
          'selectedKeys',
          'defaultOpenKeys',
          'openKeys',
          'mode',
          'getPopupContainer',
          'onSelect',
          'onDeselect',
          'onDestroy',
          'openTransitionName',
          'openAnimation',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'triggerSubMenuAction',
          'level',
          'selectable',
          'multiple',
          'onOpenChange',
          'visible',
          'focusable',
          'defaultActiveFirst',
          'prefixCls',
          'inlineIndent',
          'parentMenu',
          'title',
          'rootPrefixCls',
          'eventKey',
          'active',
          'onItemHover',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
          'onTitleClick',
          'popupAlign',
          'popupOffset',
          'isOpen',
          'renderMenuItem',
          'manualRef',
          'subMenuKey',
          'disabled',
          'index',
          'isSelected',
          'store',
          'activeKey',
          'builtinPlacements',
          'overflowedIndicator',
          'motion',
          'attribute',
          'value',
          'popupClassName',
          'inlineCollapsed',
          'menu',
          'theme',
          'itemIcon',
          'expandIcon',
        ],
        rt = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              e &&
              'function' === typeof e.getBoundingClientRect &&
              e.getBoundingClientRect().width
          if (n) {
            if (t) {
              var r = getComputedStyle(e),
                o = r.marginLeft,
                i = r.marginRight
              n += +o.replace('px', '') + +i.replace('px', '')
            }
            n = +n.toFixed(6)
          }
          return n || 0
        },
        ot = function (e, t, n) {
          e && 'object' === h(e.style) && (e.style[t] = n)
        },
        it = function () {
          return qe.any
        }
      function at(e, t) {
        return !!e && e.contains(t)
      }
      function st(e, t, n, r) {
        var o = z.a.unstable_batchedUpdates
          ? function (e) {
              z.a.unstable_batchedUpdates(n, e)
            }
          : n
        return (
          e.addEventListener && e.addEventListener(t, o, r),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, o)
            },
          }
        )
      }
      function lt() {
        return !(
          'undefined' === typeof window ||
          !window.document ||
          !window.document.createElement
        )
      }
      var ut = Object(o['forwardRef'])(function (e, t) {
          var n = e.didUpdate,
            r = e.getContainer,
            i = e.children,
            a = Object(o['useRef'])()
          Object(o['useImperativeHandle'])(t, function () {
            return {}
          })
          var s = Object(o['useRef'])(!1)
          return (
            !s.current && lt() && ((a.current = r()), (s.current = !0)),
            Object(o['useEffect'])(function () {
              null === n || void 0 === n || n(e)
            }),
            Object(o['useEffect'])(function () {
              return function () {
                var e, t
                null === (e = a.current) ||
                  void 0 === e ||
                  null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.removeChild(a.current)
              }
            }, []),
            a.current ? z.a.createPortal(i, a.current) : null
          )
        }),
        ct = ut
      function pt(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
      }
      function dt(e, t, n) {
        var r = e[t] || {}
        return b(b({}, r), n)
      }
      function ft(e, t, n, r) {
        for (
          var o = n.points, i = Object.keys(e), a = 0;
          a < i.length;
          a += 1
        ) {
          var s = i[a]
          if (pt(e[s].points, o, r))
            return ''.concat(t, '-placement-').concat(s)
        }
        return ''
      }
      function ht(e, t) {
        var n = {}
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
          (n['Moz'.concat(e)] = 'moz'.concat(t)),
          (n['ms'.concat(e)] = 'MS'.concat(t)),
          (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
          n
        )
      }
      function mt(e, t) {
        var n = {
          animationend: ht('Animation', 'AnimationEnd'),
          transitionend: ht('Transition', 'TransitionEnd'),
        }
        return (
          e &&
            ('AnimationEvent' in t || delete n.animationend.animation,
            'TransitionEvent' in t || delete n.transitionend.transition),
          n
        )
      }
      var vt = mt(lt(), 'undefined' !== typeof window ? window : {}),
        gt = {}
      if (lt()) {
        var bt = document.createElement('div')
        gt = bt.style
      }
      var yt = {}
      function Et(e) {
        if (yt[e]) return yt[e]
        var t = vt[e]
        if (t)
          for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
            var i = n[o]
            if (Object.prototype.hasOwnProperty.call(t, i) && i in gt)
              return (yt[e] = t[i]), yt[e]
          }
        return ''
      }
      var wt = Et('animationend'),
        Ot = Et('transitionend'),
        kt = !(!wt || !Ot),
        St = wt || 'animationend',
        Ct = Ot || 'transitionend'
      function Tt(e, t) {
        if (!e) return null
        if ('object' === h(e)) {
          var n = t.replace(/-\w/g, function (e) {
            return e[1].toUpperCase()
          })
          return e[n]
        }
        return ''.concat(e, '-').concat(t)
      }
      var At = 'none',
        Mt = 'appear',
        xt = 'enter',
        Nt = 'leave',
        _t = 'none',
        It = 'prepare',
        Rt = 'start',
        Pt = 'active',
        Dt = 'end'
      function Lt(e) {
        var t = Object(o['useRef'])(!1),
          n = Object(o['useState'])(e),
          r = f(n, 2),
          i = r[0],
          a = r[1]
        function s(e) {
          t.current || a(e)
        }
        return (
          Object(o['useEffect'])(function () {
            return function () {
              t.current = !0
            }
          }, []),
          [i, s]
        )
      }
      var jt = lt() ? o['useLayoutEffect'] : o['useEffect'],
        Ft = jt,
        Bt = function () {
          var e = o['useRef'](null)
          function t() {
            _.cancel(e.current)
          }
          function n(r) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
            t()
            var i = _(function () {
              o <= 1
                ? r({
                    isCanceled: function () {
                      return i !== e.current
                    },
                  })
                : n(r, o - 1)
            })
            e.current = i
          }
          return (
            o['useEffect'](function () {
              return function () {
                t()
              }
            }, []),
            [n, t]
          )
        },
        Kt = [It, Rt, Pt, Dt],
        Ut = !1,
        Ht = !0
      function Gt(e) {
        return e === Pt || e === Dt
      }
      var $t = function (e, t) {
          var n = o['useState'](_t),
            r = f(n, 2),
            i = r[0],
            a = r[1],
            s = Bt(),
            l = f(s, 2),
            u = l[0],
            c = l[1]
          function p() {
            a(It)
          }
          return (
            Ft(
              function () {
                if (i !== _t && i !== Dt) {
                  var e = Kt.indexOf(i),
                    n = Kt[e + 1],
                    r = t(i)
                  r === Ut
                    ? a(n)
                    : u(function (e) {
                        function t() {
                          e.isCanceled() || a(n)
                        }
                        !0 === r ? t() : Promise.resolve(r).then(t)
                      })
                }
              },
              [e, i],
            ),
            o['useEffect'](function () {
              return function () {
                c()
              }
            }, []),
            [p, i]
          )
        },
        zt = function (e) {
          var t = Object(o['useRef'])(),
            n = Object(o['useRef'])(e)
          n.current = e
          var r = o['useCallback'](function (e) {
            n.current(e)
          }, [])
          function i(e) {
            e && (e.removeEventListener(Ct, r), e.removeEventListener(St, r))
          }
          function a(e) {
            t.current && t.current !== e && i(t.current),
              e &&
                e !== t.current &&
                (e.addEventListener(Ct, r),
                e.addEventListener(St, r),
                (t.current = e))
          }
          return (
            o['useEffect'](function () {
              return function () {
                i(t.current)
              }
            }, []),
            [a, i]
          )
        }
      function Wt(e, t, n, r) {
        var i = r.motionEnter,
          a = void 0 === i || i,
          l = r.motionAppear,
          u = void 0 === l || l,
          c = r.motionLeave,
          p = void 0 === c || c,
          d = r.motionDeadline,
          h = r.motionLeaveImmediately,
          m = r.onAppearPrepare,
          v = r.onEnterPrepare,
          g = r.onLeavePrepare,
          y = r.onAppearStart,
          E = r.onEnterStart,
          w = r.onLeaveStart,
          O = r.onAppearActive,
          k = r.onEnterActive,
          S = r.onLeaveActive,
          C = r.onAppearEnd,
          T = r.onEnterEnd,
          A = r.onLeaveEnd,
          M = r.onVisibleChanged,
          x = Lt(),
          N = f(x, 2),
          _ = N[0],
          I = N[1],
          R = Lt(At),
          P = f(R, 2),
          D = P[0],
          L = P[1],
          j = Lt(null),
          F = f(j, 2),
          B = F[0],
          K = F[1],
          U = Object(o['useRef'])(!1),
          H = Object(o['useRef'])(null),
          G = Object(o['useRef'])(!1),
          $ = Object(o['useRef'])(null)
        function z() {
          var e = n()
          return e || $.current
        }
        var W = Object(o['useRef'])(!1)
        function V(e) {
          var t,
            n = z()
          ;(e && !e.deadline && e.target !== n) ||
            (D === Mt && W.current
              ? (t = null === C || void 0 === C ? void 0 : C(n, e))
              : D === xt && W.current
              ? (t = null === T || void 0 === T ? void 0 : T(n, e))
              : D === Nt &&
                W.current &&
                (t = null === A || void 0 === A ? void 0 : A(n, e)),
            !1 === t || G.current || (L(At), K(null)))
        }
        var Y = zt(V),
          X = f(Y, 1),
          q = X[0],
          Z = o['useMemo'](
            function () {
              var e, t, n
              switch (D) {
                case 'appear':
                  return (e = {}), s(e, It, m), s(e, Rt, y), s(e, Pt, O), e
                case 'enter':
                  return (t = {}), s(t, It, v), s(t, Rt, E), s(t, Pt, k), t
                case 'leave':
                  return (n = {}), s(n, It, g), s(n, Rt, w), s(n, Pt, S), n
                default:
                  return {}
              }
            },
            [D],
          ),
          Q = $t(D, function (e) {
            if (e === It) {
              var t = Z[It]
              return t ? t(z()) : Ut
            }
            var n
            te in Z &&
              K(
                (null === (n = Z[te]) || void 0 === n
                  ? void 0
                  : n.call(Z, z(), null)) || null,
              )
            return (
              te === Pt &&
                (q(z()),
                d > 0 &&
                  (clearTimeout(H.current),
                  (H.current = setTimeout(function () {
                    V({ deadline: !0 })
                  }, d)))),
              Ht
            )
          }),
          J = f(Q, 2),
          ee = J[0],
          te = J[1],
          ne = Gt(te)
        ;(W.current = ne),
          Ft(
            function () {
              if ((I(t), e)) {
                var n,
                  r = U.current
                ;(U.current = !0),
                  !r && t && u && (n = Mt),
                  r && t && a && (n = xt),
                  ((r && !t && p) || (!r && h && !t && p)) && (n = Nt),
                  n && (L(n), ee())
              }
            },
            [t],
          ),
          Object(o['useEffect'])(
            function () {
              ;((D === Mt && !u) || (D === xt && !a) || (D === Nt && !p)) &&
                L(At)
            },
            [u, a, p],
          ),
          Object(o['useEffect'])(function () {
            return function () {
              clearTimeout(H.current), (G.current = !0)
            }
          }, []),
          Object(o['useEffect'])(
            function () {
              void 0 !== _ && D === At && (null === M || void 0 === M || M(_))
            },
            [_, D],
          )
        var re = B
        return (
          Z[It] && te === Rt && (re = b({ transition: 'none' }, re)),
          [D, te, re, null !== _ && void 0 !== _ ? _ : t]
        )
      }
      var Vt = (function (e) {
          L(n, e)
          var t = G(n)
          function n() {
            return I(this, n), t.apply(this, arguments)
          }
          return (
            P(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children
                },
              },
            ]),
            n
          )
        })(o['Component']),
        Yt = Vt
      function Xt(e) {
        var t = e
        function n(e) {
          return !(!e.motionName || !t)
        }
        'object' === h(e) && (t = e.transitionSupport)
        var r = o['forwardRef'](function (e, t) {
          var r = e.visible,
            i = void 0 === r || r,
            a = e.removeOnLeave,
            l = void 0 === a || a,
            u = e.forceRender,
            c = e.children,
            p = e.motionName,
            d = e.leavedClassName,
            h = e.eventProps,
            m = n(e),
            v = Object(o['useRef'])(),
            g = Object(o['useRef'])()
          function y() {
            try {
              return W(v.current || g.current)
            } catch (e) {
              return null
            }
          }
          var w = Wt(m, i, y, e),
            O = f(w, 4),
            k = O[0],
            S = O[1],
            C = O[2],
            T = O[3],
            A = Object(o['useRef'])(t)
          A.current = t
          var M,
            x = o['useCallback'](function (e) {
              ;(v.current = e), Q(A.current, e)
            }, []),
            N = b(b({}, h), {}, { visible: i })
          if (c)
            if (k !== At && n(e)) {
              var _, I
              S === It
                ? (I = 'prepare')
                : Gt(S)
                ? (I = 'active')
                : S === Rt && (I = 'start'),
                (M = c(
                  b(
                    b({}, N),
                    {},
                    {
                      className: E()(
                        Tt(p, k),
                        ((_ = {}),
                        s(_, Tt(p, ''.concat(k, '-').concat(I)), I),
                        s(_, p, 'string' === typeof p),
                        _),
                      ),
                      style: C,
                    },
                  ),
                  x,
                ))
            } else
              M = T
                ? c(b({}, N), x)
                : l
                ? u
                  ? c(b(b({}, N), {}, { style: { display: 'none' } }), x)
                  : null
                : c(b(b({}, N), {}, { className: d }), x)
          else M = null
          return o['createElement'](Yt, { ref: g }, M)
        })
        return (r.displayName = 'CSSMotion'), r
      }
      var qt = Xt(kt),
        Zt = 'add',
        Qt = 'keep',
        Jt = 'remove',
        en = 'removed'
      function tn(e) {
        var t
        return (
          (t = e && 'object' === h(e) && 'key' in e ? e : { key: e }),
          b(b({}, t), {}, { key: String(t.key) })
        )
      }
      function nn() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
        return e.map(tn)
      }
      function rn() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = [],
          r = 0,
          o = t.length,
          i = nn(e),
          a = nn(t)
        i.forEach(function (e) {
          for (var t = !1, i = r; i < o; i += 1) {
            var s = a[i]
            if (s.key === e.key) {
              r < i &&
                ((n = n.concat(
                  a.slice(r, i).map(function (e) {
                    return b(b({}, e), {}, { status: Zt })
                  }),
                )),
                (r = i)),
                n.push(b(b({}, s), {}, { status: Qt })),
                (r += 1),
                (t = !0)
              break
            }
          }
          t || n.push(b(b({}, e), {}, { status: Jt }))
        }),
          r < o &&
            (n = n.concat(
              a.slice(r).map(function (e) {
                return b(b({}, e), {}, { status: Zt })
              }),
            ))
        var s = {}
        n.forEach(function (e) {
          var t = e.key
          s[t] = (s[t] || 0) + 1
        })
        var l = Object.keys(s).filter(function (e) {
          return s[e] > 1
        })
        return (
          l.forEach(function (e) {
            ;(n = n.filter(function (t) {
              var n = t.key,
                r = t.status
              return n !== e || r !== Jt
            })),
              n.forEach(function (t) {
                t.key === e && (t.status = Qt)
              })
          }),
          n
        )
      }
      var on = [
        'eventProps',
        'visible',
        'children',
        'motionName',
        'motionAppear',
        'motionEnter',
        'motionLeave',
        'motionLeaveImmediately',
        'motionDeadline',
        'removeOnLeave',
        'leavedClassName',
        'onAppearStart',
        'onAppearActive',
        'onAppearEnd',
        'onEnterStart',
        'onEnterActive',
        'onEnterEnd',
        'onLeaveStart',
        'onLeaveActive',
        'onLeaveEnd',
      ]
      function an(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt,
          n = (function (e) {
            L(r, e)
            var n = G(r)
            function r() {
              var e
              return (
                I(this, r),
                (e = n.apply(this, arguments)),
                (e.state = { keyEntities: [] }),
                (e.removeKey = function (t) {
                  e.setState(function (e) {
                    var n = e.keyEntities
                    return {
                      keyEntities: n.map(function (e) {
                        return e.key !== t ? e : b(b({}, e), {}, { status: en })
                      }),
                    }
                  })
                }),
                e
              )
            }
            return (
              P(
                r,
                [
                  {
                    key: 'render',
                    value: function () {
                      var e = this,
                        n = this.state.keyEntities,
                        r = this.props,
                        i = r.component,
                        a = r.children,
                        s = r.onVisibleChanged,
                        l = v(r, ['component', 'children', 'onVisibleChanged']),
                        u = i || o['Fragment'],
                        c = {}
                      return (
                        on.forEach(function (e) {
                          ;(c[e] = l[e]), delete l[e]
                        }),
                        delete l.keys,
                        o['createElement'](
                          u,
                          Object.assign({}, l),
                          n.map(function (n) {
                            var r = n.status,
                              i = v(n, ['status']),
                              l = r === Zt || r === Qt
                            return o['createElement'](
                              t,
                              Object.assign({}, c, {
                                key: i.key,
                                visible: l,
                                eventProps: i,
                                onVisibleChanged: function (t) {
                                  null === s ||
                                    void 0 === s ||
                                    s(t, { key: i.key }),
                                    t || e.removeKey(i.key)
                                },
                              }),
                              a,
                            )
                          }),
                        )
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (e, t) {
                      var n = e.keys,
                        r = t.keyEntities,
                        o = nn(n),
                        i = rn(r, o)
                      return {
                        keyEntities: i.filter(function (e) {
                          var t = r.find(function (t) {
                            var n = t.key
                            return e.key === n
                          })
                          return !t || t.status !== en || e.status !== Jt
                        }),
                      }
                    },
                  },
                ],
              ),
              r
            )
          })(o['Component'])
        return (n.defaultProps = { component: 'div' }), n
      }
      an(kt)
      var sn = qt
      function ln(e) {
        var t = e.prefixCls,
          n = e.motion,
          r = e.animation,
          o = e.transitionName
        return (
          n ||
          (r
            ? { motionName: ''.concat(t, '-').concat(r) }
            : o
            ? { motionName: o }
            : null)
        )
      }
      function un(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.zIndex,
          i = e.mask,
          s = e.maskMotion,
          l = e.maskAnimation,
          u = e.maskTransitionName
        if (!i) return null
        var c = {}
        return (
          (s || u || l) &&
            (c = b(
              { motionAppear: !0 },
              ln({ motion: s, prefixCls: t, transitionName: u, animation: l }),
            )),
          o['createElement'](
            sn,
            Object(a['a'])({}, c, { visible: n, removeOnLeave: !0 }),
            function (e) {
              var n = e.className
              return o['createElement']('div', {
                style: { zIndex: r },
                className: E()(''.concat(t, '-mask'), n),
              })
            },
          )
        )
      }
      var cn,
        pn = function (e) {
          if (!e) return !1
          if (e.offsetParent) return !0
          if (e.getBBox) {
            var t = e.getBBox()
            if (t.width || t.height) return !0
          }
          if (e.getBoundingClientRect) {
            var n = e.getBoundingClientRect()
            if (n.width || n.height) return !0
          }
          return !1
        }
      function dn(e) {
        return (
          (dn =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          dn(e)
        )
      }
      function fn(e, t, n) {
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
        )
      }
      function hn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? hn(n, !0).forEach(function (t) {
                fn(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : hn(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                )
              })
        }
        return e
      }
      var vn = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' }
      function gn() {
        if (void 0 !== cn) return cn
        cn = ''
        var e = document.createElement('p').style,
          t = 'Transform'
        for (var n in vn) n + t in e && (cn = n)
        return cn
      }
      function bn() {
        return gn()
          ? ''.concat(gn(), 'TransitionProperty')
          : 'transitionProperty'
      }
      function yn() {
        return gn() ? ''.concat(gn(), 'Transform') : 'transform'
      }
      function En(e, t) {
        var n = bn()
        n &&
          ((e.style[n] = t),
          'transitionProperty' !== n && (e.style.transitionProperty = t))
      }
      function wn(e, t) {
        var n = yn()
        n && ((e.style[n] = t), 'transform' !== n && (e.style.transform = t))
      }
      function On(e) {
        return e.style.transitionProperty || e.style[bn()]
      }
      function kn(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(yn())
        if (n && 'none' !== n) {
          var r = n.replace(/[^0-9\-.,]/g, '').split(',')
          return {
            x: parseFloat(r[12] || r[4], 0),
            y: parseFloat(r[13] || r[5], 0),
          }
        }
        return { x: 0, y: 0 }
      }
      var Sn = /matrix\((.*)\)/,
        Cn = /matrix3d\((.*)\)/
      function Tn(e, t) {
        var n = window.getComputedStyle(e, null),
          r = n.getPropertyValue('transform') || n.getPropertyValue(yn())
        if (r && 'none' !== r) {
          var o,
            i = r.match(Sn)
          if (i)
            (i = i[1]),
              (o = i.split(',').map(function (e) {
                return parseFloat(e, 10)
              })),
              (o[4] = t.x),
              (o[5] = t.y),
              wn(e, 'matrix('.concat(o.join(','), ')'))
          else {
            var a = r.match(Cn)[1]
            ;(o = a.split(',').map(function (e) {
              return parseFloat(e, 10)
            })),
              (o[12] = t.x),
              (o[13] = t.y),
              wn(e, 'matrix3d('.concat(o.join(','), ')'))
          }
        } else
          wn(
            e,
            'translateX('
              .concat(t.x, 'px) translateY(')
              .concat(t.y, 'px) translateZ(0)'),
          )
      }
      var An,
        Mn = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source
      function xn(e) {
        var t = e.style.display
        ;(e.style.display = 'none'), e.offsetHeight, (e.style.display = t)
      }
      function Nn(e, t, n) {
        var r = n
        if ('object' !== dn(t))
          return 'undefined' !== typeof r
            ? ('number' === typeof r && (r = ''.concat(r, 'px')),
              void (e.style[t] = r))
            : An(e, t)
        for (var o in t) t.hasOwnProperty(o) && Nn(e, o, t[o])
      }
      function _n(e) {
        var t,
          n,
          r,
          o = e.ownerDocument,
          i = o.body,
          a = o && o.documentElement
        return (
          (t = e.getBoundingClientRect()),
          (n = t.left),
          (r = t.top),
          (n -= a.clientLeft || i.clientLeft || 0),
          (r -= a.clientTop || i.clientTop || 0),
          { left: n, top: r }
        )
      }
      function In(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          r = 'scroll'.concat(t ? 'Top' : 'Left')
        if ('number' !== typeof n) {
          var o = e.document
          ;(n = o.documentElement[r]), 'number' !== typeof n && (n = o.body[r])
        }
        return n
      }
      function Rn(e) {
        return In(e)
      }
      function Pn(e) {
        return In(e, !0)
      }
      function Dn(e) {
        var t = _n(e),
          n = e.ownerDocument,
          r = n.defaultView || n.parentWindow
        return (t.left += Rn(r)), (t.top += Pn(r)), t
      }
      function Ln(e) {
        return null !== e && void 0 !== e && e == e.window
      }
      function jn(e) {
        return Ln(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument
      }
      function Fn(e, t, n) {
        var r = n,
          o = '',
          i = jn(e)
        return (
          (r = r || i.defaultView.getComputedStyle(e, null)),
          r && (o = r.getPropertyValue(t) || r[t]),
          o
        )
      }
      var Bn = new RegExp('^('.concat(Mn, ')(?!px)[a-z%]+$'), 'i'),
        Kn = /^(top|right|bottom|left)$/,
        Un = 'currentStyle',
        Hn = 'runtimeStyle',
        Gn = 'left',
        $n = 'px'
      function zn(e, t) {
        var n = e[Un] && e[Un][t]
        if (Bn.test(n) && !Kn.test(t)) {
          var r = e.style,
            o = r[Gn],
            i = e[Hn][Gn]
          ;(e[Hn][Gn] = e[Un][Gn]),
            (r[Gn] = 'fontSize' === t ? '1em' : n || 0),
            (n = r.pixelLeft + $n),
            (r[Gn] = o),
            (e[Hn][Gn] = i)
        }
        return '' === n ? 'auto' : n
      }
      function Wn(e, t) {
        return 'left' === e
          ? t.useCssRight
            ? 'right'
            : e
          : t.useCssBottom
          ? 'bottom'
          : e
      }
      function Vn(e) {
        return 'left' === e
          ? 'right'
          : 'right' === e
          ? 'left'
          : 'top' === e
          ? 'bottom'
          : 'bottom' === e
          ? 'top'
          : void 0
      }
      function Yn(e, t, n) {
        'static' === Nn(e, 'position') && (e.style.position = 'relative')
        var r = -999,
          o = -999,
          i = Wn('left', n),
          a = Wn('top', n),
          s = Vn(i),
          l = Vn(a)
        'left' !== i && (r = 999), 'top' !== a && (o = 999)
        var u = '',
          c = Dn(e)
        ;('left' in t || 'top' in t) && ((u = On(e) || ''), En(e, 'none')),
          'left' in t && ((e.style[s] = ''), (e.style[i] = ''.concat(r, 'px'))),
          'top' in t && ((e.style[l] = ''), (e.style[a] = ''.concat(o, 'px'))),
          xn(e)
        var p = Dn(e),
          d = {}
        for (var f in t)
          if (t.hasOwnProperty(f)) {
            var h = Wn(f, n),
              m = 'left' === f ? r : o,
              v = c[f] - p[f]
            d[h] = h === f ? m + v : m - v
          }
        Nn(e, d), xn(e), ('left' in t || 'top' in t) && En(e, u)
        var g = {}
        for (var b in t)
          if (t.hasOwnProperty(b)) {
            var y = Wn(b, n),
              E = t[b] - c[b]
            g[y] = b === y ? d[y] + E : d[y] - E
          }
        Nn(e, g)
      }
      function Xn(e, t) {
        var n = Dn(e),
          r = kn(e),
          o = { x: r.x, y: r.y }
        'left' in t && (o.x = r.x + t.left - n.left),
          'top' in t && (o.y = r.y + t.top - n.top),
          Tn(e, o)
      }
      function qn(e, t, n) {
        if (n.ignoreShake) {
          var r = Dn(e),
            o = r.left.toFixed(0),
            i = r.top.toFixed(0),
            a = t.left.toFixed(0),
            s = t.top.toFixed(0)
          if (o === a && i === s) return
        }
        n.useCssRight || n.useCssBottom
          ? Yn(e, t, n)
          : n.useCssTransform && yn() in document.body.style
          ? Xn(e, t)
          : Yn(e, t, n)
      }
      function Zn(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n])
      }
      function Qn(e) {
        return 'border-box' === An(e, 'boxSizing')
      }
      'undefined' !== typeof window && (An = window.getComputedStyle ? Fn : zn)
      var Jn = ['margin', 'border', 'padding'],
        er = -1,
        tr = 2,
        nr = 1,
        rr = 0
      function or(e, t, n) {
        var r,
          o = {},
          i = e.style
        for (r in t) t.hasOwnProperty(r) && ((o[r] = i[r]), (i[r] = t[r]))
        for (r in (n.call(e), t)) t.hasOwnProperty(r) && (i[r] = o[r])
      }
      function ir(e, t, n) {
        var r,
          o,
          i,
          a = 0
        for (o = 0; o < t.length; o++)
          if (((r = t[o]), r))
            for (i = 0; i < n.length; i++) {
              var s = void 0
              ;(s =
                'border' === r ? ''.concat(r).concat(n[i], 'Width') : r + n[i]),
                (a += parseFloat(An(e, s)) || 0)
            }
        return a
      }
      var ar = {
        getParent: function (e) {
          var t = e
          do {
            t = 11 === t.nodeType && t.host ? t.host : t.parentNode
          } while (t && 1 !== t.nodeType && 9 !== t.nodeType)
          return t
        },
      }
      function sr(e, t, n) {
        var r = n
        if (Ln(e))
          return 'width' === t ? ar.viewportWidth(e) : ar.viewportHeight(e)
        if (9 === e.nodeType)
          return 'width' === t ? ar.docWidth(e) : ar.docHeight(e)
        var o = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
          i =
            'width' === t
              ? e.getBoundingClientRect().width
              : e.getBoundingClientRect().height,
          a = (An(e), Qn(e)),
          s = 0
        ;(null === i || void 0 === i || i <= 0) &&
          ((i = void 0),
          (s = An(e, t)),
          (null === s || void 0 === s || Number(s) < 0) &&
            (s = e.style[t] || 0),
          (s = parseFloat(s) || 0)),
          void 0 === r && (r = a ? nr : er)
        var l = void 0 !== i || a,
          u = i || s
        return r === er
          ? l
            ? u - ir(e, ['border', 'padding'], o)
            : s
          : l
          ? r === nr
            ? u
            : u + (r === tr ? -ir(e, ['border'], o) : ir(e, ['margin'], o))
          : s + ir(e, Jn.slice(r), o)
      }
      Zn(['Width', 'Height'], function (e) {
        ;(ar['doc'.concat(e)] = function (t) {
          var n = t.document
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            ar['viewport'.concat(e)](n),
          )
        }),
          (ar['viewport'.concat(e)] = function (t) {
            var n = 'client'.concat(e),
              r = t.document,
              o = r.body,
              i = r.documentElement,
              a = i[n]
            return ('CSS1Compat' === r.compatMode && a) || (o && o[n]) || a
          })
      })
      var lr = { position: 'absolute', visibility: 'hidden', display: 'block' }
      function ur() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        var r,
          o = t[0]
        return (
          0 !== o.offsetWidth
            ? (r = sr.apply(void 0, t))
            : or(o, lr, function () {
                r = sr.apply(void 0, t)
              }),
          r
        )
      }
      function cr(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        return e
      }
      Zn(['width', 'height'], function (e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1)
        ar['outer'.concat(t)] = function (t, n) {
          return t && ur(t, e, n ? rr : nr)
        }
        var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom']
        ar[e] = function (t, r) {
          var o = r
          if (void 0 === o) return t && ur(t, e, er)
          if (t) {
            An(t)
            var i = Qn(t)
            return i && (o += ir(t, ['padding', 'border'], n)), Nn(t, e, o)
          }
        }
      })
      var pr = {
        getWindow: function (e) {
          if (e && e.document && e.setTimeout) return e
          var t = e.ownerDocument || e
          return t.defaultView || t.parentWindow
        },
        getDocument: jn,
        offset: function (e, t, n) {
          if ('undefined' === typeof t) return Dn(e)
          qn(e, t, n || {})
        },
        isWindow: Ln,
        each: Zn,
        css: Nn,
        clone: function (e) {
          var t,
            n = {}
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t])
          var r = e.overflow
          if (r)
            for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t])
          return n
        },
        mix: cr,
        getWindowScrollLeft: function (e) {
          return Rn(e)
        },
        getWindowScrollTop: function (e) {
          return Pn(e)
        },
        merge: function () {
          for (var e = {}, t = 0; t < arguments.length; t++)
            pr.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t])
          return e
        },
        viewportWidth: 0,
        viewportHeight: 0,
      }
      cr(pr, ar)
      var dr = pr.getParent
      function fr(e) {
        if (pr.isWindow(e) || 9 === e.nodeType) return null
        var t,
          n = pr.getDocument(e),
          r = n.body,
          o = pr.css(e, 'position'),
          i = 'fixed' === o || 'absolute' === o
        if (!i) return 'html' === e.nodeName.toLowerCase() ? null : dr(e)
        for (t = dr(e); t && t !== r && 9 !== t.nodeType; t = dr(t))
          if (((o = pr.css(t, 'position')), 'static' !== o)) return t
        return null
      }
      var hr = pr.getParent
      function mr(e) {
        if (pr.isWindow(e) || 9 === e.nodeType) return !1
        var t = pr.getDocument(e),
          n = t.body,
          r = null
        for (r = hr(e); r && r !== n; r = hr(r)) {
          var o = pr.css(r, 'position')
          if ('fixed' === o) return !0
        }
        return !1
      }
      function vr(e, t) {
        var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
          r = fr(e),
          o = pr.getDocument(e),
          i = o.defaultView || o.parentWindow,
          a = o.body,
          s = o.documentElement
        while (r) {
          if (
            (-1 !== navigator.userAgent.indexOf('MSIE') &&
              0 === r.clientWidth) ||
            r === a ||
            r === s ||
            'visible' === pr.css(r, 'overflow')
          ) {
            if (r === a || r === s) break
          } else {
            var l = pr.offset(r)
            ;(l.left += r.clientLeft),
              (l.top += r.clientTop),
              (n.top = Math.max(n.top, l.top)),
              (n.right = Math.min(n.right, l.left + r.clientWidth)),
              (n.bottom = Math.min(n.bottom, l.top + r.clientHeight)),
              (n.left = Math.max(n.left, l.left))
          }
          r = fr(r)
        }
        var u = null
        if (!pr.isWindow(e) && 9 !== e.nodeType) {
          u = e.style.position
          var c = pr.css(e, 'position')
          'absolute' === c && (e.style.position = 'fixed')
        }
        var p = pr.getWindowScrollLeft(i),
          d = pr.getWindowScrollTop(i),
          f = pr.viewportWidth(i),
          h = pr.viewportHeight(i),
          m = s.scrollWidth,
          v = s.scrollHeight,
          g = window.getComputedStyle(a)
        if (
          ('hidden' === g.overflowX && (m = i.innerWidth),
          'hidden' === g.overflowY && (v = i.innerHeight),
          e.style && (e.style.position = u),
          t || mr(e))
        )
          (n.left = Math.max(n.left, p)),
            (n.top = Math.max(n.top, d)),
            (n.right = Math.min(n.right, p + f)),
            (n.bottom = Math.min(n.bottom, d + h))
        else {
          var b = Math.max(m, p + f)
          n.right = Math.min(n.right, b)
          var y = Math.max(v, d + h)
          n.bottom = Math.min(n.bottom, y)
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null
      }
      function gr(e, t, n, r) {
        var o = pr.clone(e),
          i = { width: t.width, height: t.height }
        return (
          r.adjustX && o.left < n.left && (o.left = n.left),
          r.resizeWidth &&
            o.left >= n.left &&
            o.left + i.width > n.right &&
            (i.width -= o.left + i.width - n.right),
          r.adjustX &&
            o.left + i.width > n.right &&
            (o.left = Math.max(n.right - i.width, n.left)),
          r.adjustY && o.top < n.top && (o.top = n.top),
          r.resizeHeight &&
            o.top >= n.top &&
            o.top + i.height > n.bottom &&
            (i.height -= o.top + i.height - n.bottom),
          r.adjustY &&
            o.top + i.height > n.bottom &&
            (o.top = Math.max(n.bottom - i.height, n.top)),
          pr.mix(o, i)
        )
      }
      function br(e) {
        var t, n, r
        if (pr.isWindow(e) || 9 === e.nodeType) {
          var o = pr.getWindow(e)
          ;(t = {
            left: pr.getWindowScrollLeft(o),
            top: pr.getWindowScrollTop(o),
          }),
            (n = pr.viewportWidth(o)),
            (r = pr.viewportHeight(o))
        } else
          (t = pr.offset(e)), (n = pr.outerWidth(e)), (r = pr.outerHeight(e))
        return (t.width = n), (t.height = r), t
      }
      function yr(e, t) {
        var n = t.charAt(0),
          r = t.charAt(1),
          o = e.width,
          i = e.height,
          a = e.left,
          s = e.top
        return (
          'c' === n ? (s += i / 2) : 'b' === n && (s += i),
          'c' === r ? (a += o / 2) : 'r' === r && (a += o),
          { left: a, top: s }
        )
      }
      function Er(e, t, n, r, o) {
        var i = yr(t, n[1]),
          a = yr(e, n[0]),
          s = [a.left - i.left, a.top - i.top]
        return {
          left: Math.round(e.left - s[0] + r[0] - o[0]),
          top: Math.round(e.top - s[1] + r[1] - o[1]),
        }
      }
      function wr(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right
      }
      function Or(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom
      }
      function kr(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left
      }
      function Sr(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top
      }
      function Cr(e, t, n) {
        var r = []
        return (
          pr.each(e, function (e) {
            r.push(
              e.replace(t, function (e) {
                return n[e]
              }),
            )
          }),
          r
        )
      }
      function Tr(e, t) {
        return (e[t] = -e[t]), e
      }
      function Ar(e, t) {
        var n
        return (
          (n = /%$/.test(e)
            ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
            : parseInt(e, 10)),
          n || 0
        )
      }
      function Mr(e, t) {
        ;(e[0] = Ar(e[0], t.width)), (e[1] = Ar(e[1], t.height))
      }
      function xr(e, t, n, r) {
        var o = n.points,
          i = n.offset || [0, 0],
          a = n.targetOffset || [0, 0],
          s = n.overflow,
          l = n.source || e
        ;(i = [].concat(i)), (a = [].concat(a)), (s = s || {})
        var u = {},
          c = 0,
          p = !(!s || !s.alwaysByViewport),
          d = vr(l, p),
          f = br(l)
        Mr(i, f), Mr(a, t)
        var h = Er(f, t, o, i, a),
          m = pr.merge(f, h)
        if (d && (s.adjustX || s.adjustY) && r) {
          if (s.adjustX && wr(h, f, d)) {
            var v = Cr(o, /[lr]/gi, { l: 'r', r: 'l' }),
              g = Tr(i, 0),
              b = Tr(a, 0),
              y = Er(f, t, v, g, b)
            kr(y, f, d) || ((c = 1), (o = v), (i = g), (a = b))
          }
          if (s.adjustY && Or(h, f, d)) {
            var E = Cr(o, /[tb]/gi, { t: 'b', b: 't' }),
              w = Tr(i, 1),
              O = Tr(a, 1),
              k = Er(f, t, E, w, O)
            Sr(k, f, d) || ((c = 1), (o = E), (i = w), (a = O))
          }
          c && ((h = Er(f, t, o, i, a)), pr.mix(m, h))
          var S = wr(h, f, d),
            C = Or(h, f, d)
          if (S || C) {
            var T = o
            S && (T = Cr(o, /[lr]/gi, { l: 'r', r: 'l' })),
              C && (T = Cr(o, /[tb]/gi, { t: 'b', b: 't' })),
              (o = T),
              (i = n.offset || [0, 0]),
              (a = n.targetOffset || [0, 0])
          }
          ;(u.adjustX = s.adjustX && S),
            (u.adjustY = s.adjustY && C),
            (u.adjustX || u.adjustY) && (m = gr(h, f, d, u))
        }
        return (
          m.width !== f.width &&
            pr.css(l, 'width', pr.width(l) + m.width - f.width),
          m.height !== f.height &&
            pr.css(l, 'height', pr.height(l) + m.height - f.height),
          pr.offset(
            l,
            { left: m.left, top: m.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: o, offset: i, targetOffset: a, overflow: u }
        )
      }
      function Nr(e, t) {
        var n = vr(e, t),
          r = br(e)
        return (
          !n ||
          r.left + r.width <= n.left ||
          r.top + r.height <= n.top ||
          r.left >= n.right ||
          r.top >= n.bottom
        )
      }
      function _r(e, t, n) {
        var r = n.target || t,
          o = br(r),
          i = !Nr(r, n.overflow && n.overflow.alwaysByViewport)
        return xr(e, o, n, i)
      }
      function Ir(e, t, n) {
        var r,
          o,
          i = pr.getDocument(e),
          a = i.defaultView || i.parentWindow,
          s = pr.getWindowScrollLeft(a),
          l = pr.getWindowScrollTop(a),
          u = pr.viewportWidth(a),
          c = pr.viewportHeight(a)
        ;(r = 'pageX' in t ? t.pageX : s + t.clientX),
          (o = 'pageY' in t ? t.pageY : l + t.clientY)
        var p = { left: r, top: o, width: 0, height: 0 },
          d = r >= 0 && r <= s + u && o >= 0 && o <= l + c,
          f = [n.points[0], 'cc']
        return xr(e, p, mn({}, n, { points: f }), d)
      }
      ;(_r.__getOffsetParent = fr), (_r.__getVisibleRectForElement = vr)
      function Rr(e, t) {
        return (
          e === t ||
          (!(!e || !t) &&
            ('pageX' in t && 'pageY' in t
              ? e.pageX === t.pageX && e.pageY === t.pageY
              : 'clientX' in t &&
                'clientY' in t &&
                e.clientX === t.clientX &&
                e.clientY === t.clientY))
        )
      }
      function Pr(e, t) {
        e !== document.activeElement &&
          at(t, e) &&
          'function' === typeof e.focus &&
          e.focus()
      }
      function Dr(e, t) {
        var n = null,
          r = null
        function o(e) {
          var o = f(e, 1),
            i = o[0].target
          if (document.documentElement.contains(i)) {
            var a = i.getBoundingClientRect(),
              s = a.width,
              l = a.height,
              u = Math.floor(s),
              c = Math.floor(l)
            ;(n === u && r === c) ||
              Promise.resolve().then(function () {
                t({ width: u, height: c })
              }),
              (n = u),
              (r = c)
          }
        }
        var i = new te['a'](o)
        return (
          e && i.observe(e),
          function () {
            i.disconnect()
          }
        )
      }
      var Lr = function (e, t) {
        var n = i.a.useRef(!1),
          r = i.a.useRef(null)
        function o() {
          window.clearTimeout(r.current)
        }
        function a(i) {
          if (n.current && !0 !== i)
            o(),
              (r.current = window.setTimeout(function () {
                ;(n.current = !1), a()
              }, t))
          else {
            if (!1 === e()) return
            ;(n.current = !0),
              o(),
              (r.current = window.setTimeout(function () {
                n.current = !1
              }, t))
          }
        }
        return [
          a,
          function () {
            ;(n.current = !1), o()
          },
        ]
      }
      function jr(e) {
        return 'function' !== typeof e ? null : e()
      }
      function Fr(e) {
        return 'object' === h(e) && e ? e : null
      }
      var Br = function (e, t) {
          var n = e.children,
            r = e.disabled,
            o = e.target,
            a = e.align,
            s = e.onAlign,
            l = e.monitorWindowResize,
            u = e.monitorBufferTime,
            c = void 0 === u ? 0 : u,
            p = i.a.useRef({}),
            d = i.a.useRef(),
            h = i.a.Children.only(n),
            m = i.a.useRef({})
          ;(m.current.disabled = r),
            (m.current.target = o),
            (m.current.onAlign = s)
          var v = Lr(function () {
              var e = m.current,
                t = e.disabled,
                n = e.target,
                r = e.onAlign
              if (!t && n) {
                var o,
                  i = d.current,
                  s = jr(n),
                  l = Fr(n)
                ;(p.current.element = s), (p.current.point = l)
                var u = document,
                  c = u.activeElement
                return (
                  s && pn(s) ? (o = _r(i, s, a)) : l && (o = Ir(i, l, a)),
                  Pr(c, i),
                  r && o && r(i, o),
                  !0
                )
              }
              return !1
            }, c),
            g = f(v, 2),
            b = g[0],
            y = g[1],
            E = i.a.useRef({ cancel: function () {} }),
            w = i.a.useRef({ cancel: function () {} })
          i.a.useEffect(function () {
            var e = jr(o),
              t = Fr(o)
            d.current !== w.current.element &&
              (w.current.cancel(),
              (w.current.element = d.current),
              (w.current.cancel = Dr(d.current, b))),
              (p.current.element === e && Rr(p.current.point, t)) ||
                (b(),
                E.current.element !== e &&
                  (E.current.cancel(),
                  (E.current.element = e),
                  (E.current.cancel = Dr(e, b))))
          }),
            i.a.useEffect(
              function () {
                r ? y() : b()
              },
              [r],
            )
          var O = i.a.useRef(null)
          return (
            i.a.useEffect(
              function () {
                l
                  ? O.current || (O.current = st(window, 'resize', b))
                  : O.current && (O.current.remove(), (O.current = null))
              },
              [l],
            ),
            i.a.useEffect(function () {
              return function () {
                E.current.cancel(),
                  w.current.cancel(),
                  O.current && O.current.remove(),
                  y()
              }
            }, []),
            i.a.useImperativeHandle(t, function () {
              return {
                forceAlign: function () {
                  return b(!0)
                },
              }
            }),
            i.a.isValidElement(h) &&
              (h = i.a.cloneElement(h, { ref: J(h.ref, d) })),
            h
          )
        },
        Kr = i.a.forwardRef(Br)
      Kr.displayName = 'Align'
      var Ur = Kr,
        Hr = Ur,
        Gr = n('o0o1'),
        $r = n.n(Gr)
      function zr(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value
        } catch (u) {
          return void n(u)
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o)
      }
      function Wr(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (r, o) {
            var i = e.apply(t, n)
            function a(e) {
              zr(i, r, o, a, s, 'next', e)
            }
            function s(e) {
              zr(i, r, o, a, s, 'throw', e)
            }
            a(void 0)
          })
        }
      }
      var Vr = ['measure', 'align', null, 'motion'],
        Yr = function (e, t) {
          var n = Object(o['useState'])(null),
            r = f(n, 2),
            i = r[0],
            a = r[1],
            s = Object(o['useRef'])(),
            l = Object(o['useRef'])(!1)
          function u(e) {
            l.current || a(e)
          }
          function c() {
            _.cancel(s.current)
          }
          function p(e) {
            c(),
              (s.current = _(function () {
                u(function (e) {
                  switch (i) {
                    case 'align':
                      return 'motion'
                    case 'motion':
                      return 'stable'
                    default:
                  }
                  return e
                }),
                  null === e || void 0 === e || e()
              }))
          }
          return (
            Object(o['useEffect'])(
              function () {
                u('measure')
              },
              [e],
            ),
            Object(o['useEffect'])(
              function () {
                switch (i) {
                  case 'measure':
                    t()
                    break
                  default:
                }
                i &&
                  (s.current = _(
                    Wr(
                      $r.a.mark(function e() {
                        var t, n
                        return $r.a.wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(t = Vr.indexOf(i)),
                                  (n = Vr[t + 1]),
                                  n && -1 !== t && u(n)
                              case 3:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    ),
                  ))
              },
              [i],
            ),
            Object(o['useEffect'])(function () {
              return function () {
                ;(l.current = !0), c()
              }
            }, []),
            [i, p]
          )
        },
        Xr = function (e) {
          var t = o['useState']({ width: 0, height: 0 }),
            n = f(t, 2),
            r = n[0],
            i = n[1]
          function a(e) {
            i({ width: e.offsetWidth, height: e.offsetHeight })
          }
          var s = o['useMemo'](
            function () {
              var t = {}
              if (e) {
                var n = r.width,
                  o = r.height
                ;-1 !== e.indexOf('height') && o
                  ? (t.height = o)
                  : -1 !== e.indexOf('minHeight') && o && (t.minHeight = o),
                  -1 !== e.indexOf('width') && n
                    ? (t.width = n)
                    : -1 !== e.indexOf('minWidth') && n && (t.minWidth = n)
              }
              return t
            },
            [e, r],
          )
          return [s, a]
        },
        qr = o['forwardRef'](function (e, t) {
          var n = e.visible,
            r = e.prefixCls,
            i = e.className,
            s = e.style,
            l = e.children,
            u = e.zIndex,
            c = e.stretch,
            p = e.destroyPopupOnHide,
            d = e.align,
            h = e.point,
            m = e.getRootDomNode,
            v = e.getClassNameFromAlign,
            g = e.onAlign,
            y = e.onMouseEnter,
            w = e.onMouseLeave,
            O = e.onMouseDown,
            k = e.onTouchStart,
            S = Object(o['useRef'])(),
            C = Object(o['useRef'])(),
            T = Object(o['useState'])(),
            A = f(T, 2),
            M = A[0],
            x = A[1],
            N = Xr(c),
            _ = f(N, 2),
            I = _[0],
            R = _[1]
          function P() {
            c && R(m())
          }
          var D = Yr(n, P),
            L = f(D, 2),
            j = L[0],
            F = L[1],
            B = Object(o['useRef'])()
          function K() {
            return h || m
          }
          function U() {
            var e
            null === (e = S.current) || void 0 === e || e.forceAlign()
          }
          function H(e, t) {
            if ('align' === j) {
              var n = v(t)
              x(n),
                M !== n
                  ? Promise.resolve().then(function () {
                      U()
                    })
                  : F(function () {
                      var e
                      null === (e = B.current) || void 0 === e || e.call(B)
                    }),
                null === g || void 0 === g || g(e, t)
            }
          }
          var G = b({}, ln(e))
          function $() {
            return new Promise(function (e) {
              B.current = e
            })
          }
          ;['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (e) {
            var t = G[e]
            G[e] = function (e, n) {
              return F(), null === t || void 0 === t ? void 0 : t(e, n)
            }
          }),
            o['useEffect'](
              function () {
                G.motionName || 'motion' !== j || F()
              },
              [G.motionName, j],
            ),
            o['useImperativeHandle'](t, function () {
              return {
                forceAlign: U,
                getElement: function () {
                  return C.current
                },
              }
            })
          var z = b(
              b(b({}, I), {}, { zIndex: u }, s),
              {},
              {
                opacity: 'motion' !== j && 'stable' !== j && n ? 0 : void 0,
                pointerEvents: 'stable' === j ? void 0 : 'none',
              },
            ),
            W = !0
          !(null === d || void 0 === d ? void 0 : d.points) ||
            ('align' !== j && 'stable' !== j) ||
            (W = !1)
          var V = l
          return (
            o['Children'].count(l) > 1 &&
              (V = o['createElement'](
                'div',
                { className: ''.concat(r, '-content') },
                l,
              )),
            o['createElement'](
              sn,
              Object(a['a'])(
                {
                  visible: n,
                  ref: C,
                  leavedClassName: ''.concat(r, '-hidden'),
                },
                G,
                { onAppearPrepare: $, onEnterPrepare: $, removeOnLeave: p },
              ),
              function (e, t) {
                var n = e.className,
                  a = e.style,
                  s = E()(r, i, M, n)
                return o['createElement'](
                  Hr,
                  {
                    target: K(),
                    key: 'popup',
                    ref: S,
                    monitorWindowResize: !0,
                    disabled: W,
                    align: d,
                    onAlign: H,
                  },
                  o['createElement'](
                    'div',
                    {
                      ref: t,
                      className: s,
                      onMouseEnter: y,
                      onMouseLeave: w,
                      onMouseDown: O,
                      onTouchStart: k,
                      style: b(b({}, a), z),
                    },
                    V,
                  ),
                )
              },
            )
          )
        })
      qr.displayName = 'PopupInner'
      var Zr = qr,
        Qr = o['forwardRef'](function (e, t) {
          var n = e.prefixCls,
            r = e.visible,
            i = e.zIndex,
            s = e.children,
            l = e.mobile
          l = void 0 === l ? {} : l
          var u = l.popupClassName,
            c = l.popupStyle,
            p = l.popupMotion,
            d = void 0 === p ? {} : p,
            f = l.popupRender,
            h = o['useRef']()
          o['useImperativeHandle'](t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return h.current
              },
            }
          })
          var m = b({ zIndex: i }, c),
            v = s
          return (
            o['Children'].count(s) > 1 &&
              (v = o['createElement'](
                'div',
                { className: ''.concat(n, '-content') },
                s,
              )),
            f && (v = f(v)),
            o['createElement'](
              sn,
              Object(a['a'])({ visible: r, ref: h, removeOnLeave: !0 }, d),
              function (e, t) {
                var r = e.className,
                  i = e.style,
                  a = E()(n, u, r)
                return o['createElement'](
                  'div',
                  { ref: t, className: a, style: b(b({}, i), m) },
                  v,
                )
              },
            )
          )
        })
      Qr.displayName = 'MobilePopupInner'
      var Jr = Qr,
        eo = o['forwardRef'](function (e, t) {
          var n = e.visible,
            r = e.mobile,
            i = v(e, ['visible', 'mobile']),
            s = Object(o['useState'])(n),
            l = f(s, 2),
            u = l[0],
            c = l[1],
            p = Object(o['useState'])(!1),
            d = f(p, 2),
            h = d[0],
            m = d[1],
            g = b(b({}, i), {}, { visible: u })
          Object(o['useEffect'])(
            function () {
              c(n), n && r && m(k())
            },
            [n, r],
          )
          var y = h
            ? o['createElement'](
                Jr,
                Object(a['a'])({}, g, { mobile: r, ref: t }),
              )
            : o['createElement'](Zr, Object(a['a'])({}, g, { ref: t }))
          return o['createElement']('div', null, o['createElement'](un, g), y)
        })
      eo.displayName = 'Popup'
      var to = eo,
        no = o['createContext'](null),
        ro = no
      function oo() {}
      function io() {
        return ''
      }
      function ao(e) {
        return e ? e.ownerDocument : window.document
      }
      var so = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ]
      function lo(e) {
        var t = (function (t) {
          L(r, t)
          var n = G(r)
          function r(e) {
            var t, i
            return (
              I(this, r),
              (t = n.call(this, e)),
              (t.popupRef = o['createRef']()),
              (t.triggerRef = o['createRef']()),
              (t.onMouseEnter = function (e) {
                var n = t.props.mouseEnterDelay
                t.fireEvents('onMouseEnter', e),
                  t.delaySetPopupVisible(!0, n, n ? null : e)
              }),
              (t.onMouseMove = function (e) {
                t.fireEvents('onMouseMove', e), t.setPoint(e)
              }),
              (t.onMouseLeave = function (e) {
                t.fireEvents('onMouseLeave', e),
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay)
              }),
              (t.onPopupMouseEnter = function () {
                t.clearDelayTimer()
              }),
              (t.onPopupMouseLeave = function (e) {
                var n
                ;(e.relatedTarget &&
                  !e.relatedTarget.setTimeout &&
                  at(
                    null === (n = t.popupRef.current) || void 0 === n
                      ? void 0
                      : n.getElement(),
                    e.relatedTarget,
                  )) ||
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay)
              }),
              (t.onFocus = function (e) {
                t.fireEvents('onFocus', e),
                  t.clearDelayTimer(),
                  t.isFocusToShow() &&
                    ((t.focusTime = Date.now()),
                    t.delaySetPopupVisible(!0, t.props.focusDelay))
              }),
              (t.onMouseDown = function (e) {
                t.fireEvents('onMouseDown', e), (t.preClickTime = Date.now())
              }),
              (t.onTouchStart = function (e) {
                t.fireEvents('onTouchStart', e), (t.preTouchTime = Date.now())
              }),
              (t.onBlur = function (e) {
                t.fireEvents('onBlur', e),
                  t.clearDelayTimer(),
                  t.isBlurToHide() &&
                    t.delaySetPopupVisible(!1, t.props.blurDelay)
              }),
              (t.onContextMenu = function (e) {
                e.preventDefault(),
                  t.fireEvents('onContextMenu', e),
                  t.setPopupVisible(!0, e)
              }),
              (t.onContextMenuClose = function () {
                t.isContextMenuToShow() && t.close()
              }),
              (t.onClick = function (e) {
                if ((t.fireEvents('onClick', e), t.focusTime)) {
                  var n
                  if (
                    (t.preClickTime && t.preTouchTime
                      ? (n = Math.min(t.preClickTime, t.preTouchTime))
                      : t.preClickTime
                      ? (n = t.preClickTime)
                      : t.preTouchTime && (n = t.preTouchTime),
                    Math.abs(n - t.focusTime) < 20)
                  )
                    return
                  t.focusTime = 0
                }
                ;(t.preClickTime = 0),
                  (t.preTouchTime = 0),
                  t.isClickToShow() &&
                    (t.isClickToHide() || t.isBlurToHide()) &&
                    e &&
                    e.preventDefault &&
                    e.preventDefault()
                var r = !t.state.popupVisible
                ;((t.isClickToHide() && !r) || (r && t.isClickToShow())) &&
                  t.setPopupVisible(!t.state.popupVisible, e)
              }),
              (t.onPopupMouseDown = function () {
                var e
                ;((t.hasPopupMouseDown = !0),
                clearTimeout(t.mouseDownTimeout),
                (t.mouseDownTimeout = window.setTimeout(function () {
                  t.hasPopupMouseDown = !1
                }, 0)),
                t.context) &&
                  (e = t.context).onPopupMouseDown.apply(e, arguments)
              }),
              (t.onDocumentClick = function (e) {
                if (!t.props.mask || t.props.maskClosable) {
                  var n = e.target,
                    r = t.getRootDomNode(),
                    o = t.getPopupDomNode()
                  at(r, n) || at(o, n) || t.hasPopupMouseDown || t.close()
                }
              }),
              (t.getRootDomNode = function () {
                var e = t.props.getTriggerDOMNode
                if (e) return e(t.triggerRef.current)
                try {
                  var n = W(t.triggerRef.current)
                  if (n) return n
                } catch (r) {}
                return z.a.findDOMNode(U(t))
              }),
              (t.getPopupClassNameFromAlign = function (e) {
                var n = [],
                  r = t.props,
                  o = r.popupPlacement,
                  i = r.builtinPlacements,
                  a = r.prefixCls,
                  s = r.alignPoint,
                  l = r.getPopupClassNameFromAlign
                return (
                  o && i && n.push(ft(i, a, e, s)),
                  l && n.push(l(e)),
                  n.join(' ')
                )
              }),
              (t.getComponent = function () {
                var e = t.props,
                  n = e.prefixCls,
                  r = e.destroyPopupOnHide,
                  i = e.popupClassName,
                  s = e.onPopupAlign,
                  l = e.popupMotion,
                  u = e.popupAnimation,
                  c = e.popupTransitionName,
                  p = e.popupStyle,
                  d = e.mask,
                  f = e.maskAnimation,
                  h = e.maskTransitionName,
                  m = e.maskMotion,
                  v = e.zIndex,
                  g = e.popup,
                  b = e.stretch,
                  y = e.alignPoint,
                  E = e.mobile,
                  w = t.state,
                  O = w.popupVisible,
                  k = w.point,
                  S = t.getPopupAlign(),
                  C = {}
                return (
                  t.isMouseEnterToShow() &&
                    (C.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (C.onMouseLeave = t.onPopupMouseLeave),
                  (C.onMouseDown = t.onPopupMouseDown),
                  (C.onTouchStart = t.onPopupMouseDown),
                  o['createElement'](
                    to,
                    Object(a['a'])(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: r,
                        visible: O,
                        point: y && k,
                        className: i,
                        align: S,
                        onAlign: s,
                        animation: u,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      C,
                      {
                        stretch: b,
                        getRootDomNode: t.getRootDomNode,
                        style: p,
                        mask: d,
                        zIndex: v,
                        transitionName: c,
                        maskAnimation: f,
                        maskTransitionName: h,
                        maskMotion: m,
                        ref: t.popupRef,
                        motion: l,
                        mobile: E,
                      },
                    ),
                    'function' === typeof g ? g() : g,
                  )
                )
              }),
              (t.attachParent = function (e) {
                _.cancel(t.attachId)
                var n,
                  r = t.props,
                  o = r.getPopupContainer,
                  i = r.getDocument,
                  a = t.getRootDomNode()
                o
                  ? (a || 0 === o.length) && (n = o(a))
                  : (n = i(t.getRootDomNode()).body),
                  n
                    ? n.appendChild(e)
                    : (t.attachId = _(function () {
                        t.attachParent(e)
                      }))
              }),
              (t.getContainer = function () {
                var e = t.props.getDocument,
                  n = e(t.getRootDomNode()).createElement('div')
                return (
                  (n.style.position = 'absolute'),
                  (n.style.top = '0'),
                  (n.style.left = '0'),
                  (n.style.width = '100%'),
                  t.attachParent(n),
                  n
                )
              }),
              (t.setPoint = function (e) {
                var n = t.props.alignPoint
                n &&
                  e &&
                  t.setState({ point: { pageX: e.pageX, pageY: e.pageY } })
              }),
              (t.handlePortalUpdate = function () {
                t.state.prevPopupVisible !== t.state.popupVisible &&
                  t.props.afterPopupVisibleChange(t.state.popupVisible)
              }),
              (i =
                'popupVisible' in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: i, popupVisible: i }),
              so.forEach(function (e) {
                t['fire'.concat(e)] = function (n) {
                  t.fireEvents(e, n)
                }
              }),
              t
            )
          }
          return (
            P(
              r,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.componentDidUpdate()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var e,
                      t = this.props,
                      n = this.state
                    if (n.popupVisible)
                      return (
                        this.clickOutsideHandler ||
                          (!this.isClickToHide() &&
                            !this.isContextMenuToShow()) ||
                          ((e = t.getDocument(this.getRootDomNode())),
                          (this.clickOutsideHandler = st(
                            e,
                            'mousedown',
                            this.onDocumentClick,
                          ))),
                        this.touchOutsideHandler ||
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = st(
                            e,
                            'touchstart',
                            this.onDocumentClick,
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = st(
                            e,
                            'scroll',
                            this.onContextMenuClose,
                          ))),
                        void (
                          !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = st(
                            window,
                            'blur',
                            this.onContextMenuClose,
                          ))
                        )
                      )
                    this.clearOutsideHandler()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      _.cancel(this.attachId)
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function () {
                    var e
                    return (
                      (null === (e = this.popupRef.current) || void 0 === e
                        ? void 0
                        : e.getElement()) || null
                    )
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function () {
                    var e = this.props,
                      t = e.popupPlacement,
                      n = e.popupAlign,
                      r = e.builtinPlacements
                    return t && r ? dt(r, t, n) : n
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function (e, t) {
                    var n = this.props.alignPoint,
                      r = this.state.popupVisible
                    this.clearDelayTimer(),
                      r !== e &&
                        ('popupVisible' in this.props ||
                          this.setState({
                            popupVisible: e,
                            prevPopupVisible: r,
                          }),
                        this.props.onPopupVisibleChange(e)),
                      n && t && e && this.setPoint(t)
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function (e, t, n) {
                    var r = this,
                      o = 1e3 * t
                    if ((this.clearDelayTimer(), o)) {
                      var i = n ? { pageX: n.pageX, pageY: n.pageY } : null
                      this.delayTimer = window.setTimeout(function () {
                        r.setPopupVisible(e, i), r.clearDelayTimer()
                      }, o)
                    } else this.setPopupVisible(e, n)
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function () {
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null))
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function () {
                    this.clickOutsideHandler &&
                      (this.clickOutsideHandler.remove(),
                      (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(),
                        (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(),
                        (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler &&
                        (this.touchOutsideHandler.remove(),
                        (this.touchOutsideHandler = null))
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function (e) {
                    var t = this.props.children.props,
                      n = this.props
                    return t[e] && n[e] ? this['fire'.concat(e)] : t[e] || n[e]
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    )
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction
                    return (
                      -1 !== t.indexOf('contextMenu') ||
                      -1 !== n.indexOf('contextMenu')
                    )
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    )
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseEnter')
                    )
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseLeave')
                    )
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('focus')
                    )
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction
                    return -1 !== t.indexOf('focus') || -1 !== n.indexOf('blur')
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function () {
                    var e
                    this.state.popupVisible &&
                      (null === (e = this.popupRef.current) ||
                        void 0 === e ||
                        e.forceAlign())
                  },
                },
                {
                  key: 'fireEvents',
                  value: function (e, t) {
                    var n = this.props.children.props[e]
                    n && n(t)
                    var r = this.props[e]
                    r && r(t)
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.setPopupVisible(!1)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.state.popupVisible,
                      n = this.props,
                      r = n.children,
                      i = n.forceRender,
                      a = n.alignPoint,
                      s = n.className,
                      l = n.autoDestroy,
                      u = o['Children'].only(r),
                      c = { key: 'trigger' }
                    this.isContextMenuToShow()
                      ? (c.onContextMenu = this.onContextMenu)
                      : (c.onContextMenu = this.createTwoChains(
                          'onContextMenu',
                        )),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((c.onClick = this.onClick),
                          (c.onMouseDown = this.onMouseDown),
                          (c.onTouchStart = this.onTouchStart))
                        : ((c.onClick = this.createTwoChains('onClick')),
                          (c.onMouseDown = this.createTwoChains('onMouseDown')),
                          (c.onTouchStart = this.createTwoChains(
                            'onTouchStart',
                          ))),
                      this.isMouseEnterToShow()
                        ? ((c.onMouseEnter = this.onMouseEnter),
                          a && (c.onMouseMove = this.onMouseMove))
                        : (c.onMouseEnter = this.createTwoChains(
                            'onMouseEnter',
                          )),
                      this.isMouseLeaveToHide()
                        ? (c.onMouseLeave = this.onMouseLeave)
                        : (c.onMouseLeave = this.createTwoChains(
                            'onMouseLeave',
                          )),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((c.onFocus = this.onFocus), (c.onBlur = this.onBlur))
                        : ((c.onFocus = this.createTwoChains('onFocus')),
                          (c.onBlur = this.createTwoChains('onBlur')))
                    var p = E()(u && u.props && u.props.className, s)
                    p && (c.className = p)
                    var d = b({}, c)
                    ee(u) && (d.ref = J(this.triggerRef, u.ref))
                    var f,
                      h = o['cloneElement'](u, d)
                    return (
                      (t || this.popupRef.current || i) &&
                        (f = o['createElement'](
                          e,
                          {
                            key: 'portal',
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent(),
                        )),
                      !t && l && (f = null),
                      o['createElement'](
                        ro.Provider,
                        { value: { onPopupMouseDown: this.onPopupMouseDown } },
                        h,
                        f,
                      )
                    )
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.popupVisible,
                      r = {}
                    return (
                      void 0 !== n &&
                        t.popupVisible !== n &&
                        ((r.popupVisible = n),
                        (r.prevPopupVisible = t.popupVisible)),
                      r
                    )
                  },
                },
              ],
            ),
            r
          )
        })(o['Component'])
        return (
          (t.contextType = ro),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: io,
            getDocument: ao,
            onPopupVisibleChange: oo,
            afterPopupVisibleChange: oo,
            onPopupAlign: oo,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        )
      }
      var uo = lo(ct),
        co = { adjustX: 1, adjustY: 1 },
        po = {
          topLeft: { points: ['bl', 'tl'], overflow: co, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: co, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: co, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: co, offset: [4, 0] },
        },
        fo = {
          topLeft: { points: ['bl', 'tl'], overflow: co, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: co, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: co, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: co, offset: [4, 0] },
        },
        ho = 0,
        mo = {
          horizontal: 'bottomLeft',
          vertical: 'rightTop',
          'vertical-left': 'rightTop',
          'vertical-right': 'leftTop',
        },
        vo = function (e, t, n) {
          var r = Je(t),
            o = e.getState()
          e.setState({
            defaultActiveFirst: b(b({}, o.defaultActiveFirst), {}, s({}, r, n)),
          })
        },
        go = (function (e) {
          L(n, e)
          var t = G(n)
          function n(e) {
            var r
            I(this, n),
              (r = t.call(this, e)),
              (r.onDestroy = function (e) {
                r.props.onDestroy(e)
              }),
              (r.onKeyDown = function (e) {
                var t = e.keyCode,
                  n = r.menuInstance,
                  o = r.props.store,
                  i = r.getVisible()
                if (t === le.ENTER)
                  return r.onTitleClick(e), vo(o, r.props.eventKey, !0), !0
                if (t === le.RIGHT)
                  return (
                    i
                      ? n.onKeyDown(e)
                      : (r.triggerOpenChange(!0), vo(o, r.props.eventKey, !0)),
                    !0
                  )
                if (t === le.LEFT) {
                  var a
                  if (!i) return
                  return (
                    (a = n.onKeyDown(e)),
                    a || (r.triggerOpenChange(!1), (a = !0)),
                    a
                  )
                }
                return !i || (t !== le.UP && t !== le.DOWN)
                  ? void 0
                  : n.onKeyDown(e)
              }),
              (r.onOpenChange = function (e) {
                r.props.onOpenChange(e)
              }),
              (r.onPopupVisibleChange = function (e) {
                r.triggerOpenChange(e, e ? 'mouseenter' : 'mouseleave')
              }),
              (r.onMouseEnter = function (e) {
                var t = r.props,
                  n = t.eventKey,
                  o = t.onMouseEnter,
                  i = t.store
                vo(i, r.props.eventKey, !1), o({ key: n, domEvent: e })
              }),
              (r.onMouseLeave = function (e) {
                var t = r.props,
                  n = t.parentMenu,
                  o = t.eventKey,
                  i = t.onMouseLeave
                ;(n.subMenuInstance = U(r)), i({ key: o, domEvent: e })
              }),
              (r.onTitleMouseEnter = function (e) {
                var t = r.props,
                  n = t.eventKey,
                  o = t.onItemHover,
                  i = t.onTitleMouseEnter
                o({ key: n, hover: !0 }), i({ key: n, domEvent: e })
              }),
              (r.onTitleMouseLeave = function (e) {
                var t = r.props,
                  n = t.parentMenu,
                  o = t.eventKey,
                  i = t.onItemHover,
                  a = t.onTitleMouseLeave
                ;(n.subMenuInstance = U(r)),
                  i({ key: o, hover: !1 }),
                  a({ key: o, domEvent: e })
              }),
              (r.onTitleClick = function (e) {
                var t = U(r),
                  n = t.props
                n.onTitleClick({ key: n.eventKey, domEvent: e }),
                  'hover' !== n.triggerSubMenuAction &&
                    (r.triggerOpenChange(!r.getVisible(), 'click'),
                    vo(n.store, r.props.eventKey, !1))
              }),
              (r.onSubMenuClick = function (e) {
                'function' === typeof r.props.onClick &&
                  r.props.onClick(r.addKeyPath(e))
              }),
              (r.onSelect = function (e) {
                r.props.onSelect(e)
              }),
              (r.onDeselect = function (e) {
                r.props.onDeselect(e)
              }),
              (r.getPrefixCls = function () {
                return ''.concat(r.props.rootPrefixCls, '-submenu')
              }),
              (r.getActiveClassName = function () {
                return ''.concat(r.getPrefixCls(), '-active')
              }),
              (r.getDisabledClassName = function () {
                return ''.concat(r.getPrefixCls(), '-disabled')
              }),
              (r.getSelectedClassName = function () {
                return ''.concat(r.getPrefixCls(), '-selected')
              }),
              (r.getOpenClassName = function () {
                return ''.concat(r.props.rootPrefixCls, '-submenu-open')
              }),
              (r.getVisible = function () {
                return r.state.isOpen
              }),
              (r.getMode = function () {
                return r.state.mode
              }),
              (r.saveMenuInstance = function (e) {
                r.menuInstance = e
              }),
              (r.addKeyPath = function (e) {
                return b(
                  b({}, e),
                  {},
                  { keyPath: (e.keyPath || []).concat(r.props.eventKey) },
                )
              }),
              (r.triggerOpenChange = function (e, t) {
                var n = r.props.eventKey,
                  o = function () {
                    r.onOpenChange({ key: n, item: U(r), trigger: t, open: e })
                  }
                'mouseenter' === t
                  ? (r.mouseenterTimeout = setTimeout(function () {
                      o()
                    }, 0))
                  : o()
              }),
              (r.isChildrenSelected = function () {
                var e = { find: !1 }
                return tt(r.props.children, r.props.selectedKeys, e), e.find
              }),
              (r.isInlineMode = function () {
                return 'inline' === r.getMode()
              }),
              (r.adjustWidth = function () {
                if (r.subMenuTitle && r.menuInstance) {
                  var e = $['findDOMNode'](r.menuInstance)
                  e.offsetWidth >= r.subMenuTitle.offsetWidth ||
                    (e.style.minWidth = ''.concat(
                      r.subMenuTitle.offsetWidth,
                      'px',
                    ))
                }
              }),
              (r.saveSubMenuTitle = function (e) {
                r.subMenuTitle = e
              }),
              (r.getBaseProps = function () {
                var e = U(r),
                  t = e.props,
                  n = r.getMode()
                return {
                  mode: 'horizontal' === n ? 'vertical' : n,
                  visible: r.getVisible(),
                  level: t.level + 1,
                  inlineIndent: t.inlineIndent,
                  focusable: !1,
                  onClick: r.onSubMenuClick,
                  onSelect: r.onSelect,
                  onDeselect: r.onDeselect,
                  onDestroy: r.onDestroy,
                  selectedKeys: t.selectedKeys,
                  eventKey: ''.concat(t.eventKey, '-menu-'),
                  openKeys: t.openKeys,
                  motion: t.motion,
                  onOpenChange: r.onOpenChange,
                  subMenuOpenDelay: t.subMenuOpenDelay,
                  parentMenu: U(r),
                  subMenuCloseDelay: t.subMenuCloseDelay,
                  forceSubMenuRender: t.forceSubMenuRender,
                  triggerSubMenuAction: t.triggerSubMenuAction,
                  builtinPlacements: t.builtinPlacements,
                  defaultActiveFirst: t.store.getState().defaultActiveFirst[
                    Je(t.eventKey)
                  ],
                  multiple: t.multiple,
                  prefixCls: t.rootPrefixCls,
                  id: r.internalMenuId,
                  manualRef: r.saveMenuInstance,
                  itemIcon: t.itemIcon,
                  expandIcon: t.expandIcon,
                  direction: t.direction,
                }
              }),
              (r.getMotion = function (e, t) {
                var n = U(r),
                  o = n.haveRendered,
                  i = r.props,
                  a = i.motion,
                  s = i.rootPrefixCls,
                  l = b(
                    b({}, a),
                    {},
                    {
                      leavedClassName: ''.concat(s, '-hidden'),
                      removeOnLeave: !1,
                      motionAppear: o || !t || 'inline' !== e,
                    },
                  )
                return l
              })
            var o = e.store,
              i = e.eventKey,
              a = o.getState(),
              s = a.defaultActiveFirst
            r.isRootMenu = !1
            var l = !1
            return (
              s && (l = s[i]),
              vo(o, i, l),
              (r.state = { mode: e.mode, isOpen: e.isOpen }),
              r
            )
          }
          return (
            P(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.componentDidUpdate()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.mode,
                    r = t.parentMenu,
                    o = t.manualRef,
                    i = t.isOpen,
                    a = function () {
                      e.setState({ mode: n, isOpen: i })
                    },
                    s = i !== this.state.isOpen,
                    l = n !== this.state.mode
                  ;(l || s) &&
                    (_.cancel(this.updateStateRaf),
                    l ? (this.updateStateRaf = _(a)) : a()),
                    o && o(this),
                    'horizontal' === n &&
                      (null === r || void 0 === r ? void 0 : r.isRootMenu) &&
                      i &&
                      (this.minWidthTimeout = setTimeout(function () {
                        return e.adjustWidth()
                      }, 0))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.onDestroy,
                    n = e.eventKey
                  t && t(n),
                    this.minWidthTimeout && clearTimeout(this.minWidthTimeout),
                    this.mouseenterTimeout &&
                      clearTimeout(this.mouseenterTimeout),
                    _.cancel(this.updateStateRaf)
                },
              },
              {
                key: 'renderPopupMenu',
                value: function (e, t) {
                  var n = this.getBaseProps()
                  return o['createElement'](
                    _o,
                    Object(a['a'])({}, n, {
                      id: this.internalMenuId,
                      className: e,
                      style: t,
                    }),
                    this.props.children,
                  )
                },
              },
              {
                key: 'renderChildren',
                value: function () {
                  var e = this,
                    t = this.getBaseProps(),
                    n = t.mode,
                    r = t.visible,
                    i = t.forceSubMenuRender,
                    l = t.direction,
                    u = this.getMotion(n, r)
                  if (
                    ((this.haveRendered = !0),
                    (this.haveOpened = this.haveOpened || r || i),
                    !this.haveOpened)
                  )
                    return o['createElement']('div', null)
                  var c = E()(
                    ''.concat(t.prefixCls, '-sub'),
                    s({}, ''.concat(t.prefixCls, '-rtl'), 'rtl' === l),
                  )
                  return this.isInlineMode()
                    ? o['createElement'](
                        sn,
                        Object(a['a'])({ visible: t.visible }, u),
                        function (t) {
                          var n = t.className,
                            r = t.style,
                            o = E()(c, n)
                          return e.renderPopupMenu(o, r)
                        },
                      )
                    : this.renderPopupMenu(c)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r = b({}, this.props),
                    i = this.getVisible(),
                    l = this.getPrefixCls(),
                    u = this.isInlineMode(),
                    c = this.getMode(),
                    p = E()(
                      l,
                      ''.concat(l, '-').concat(c),
                      ((e = {}),
                      s(e, r.className, !!r.className),
                      s(e, this.getOpenClassName(), i),
                      s(e, this.getActiveClassName(), r.active || (i && !u)),
                      s(e, this.getDisabledClassName(), r.disabled),
                      s(
                        e,
                        this.getSelectedClassName(),
                        this.isChildrenSelected(),
                      ),
                      e),
                    )
                  this.internalMenuId ||
                    (r.eventKey
                      ? (this.internalMenuId = ''.concat(r.eventKey, '$Menu'))
                      : ((ho += 1),
                        (this.internalMenuId = '$__$'.concat(ho, '$Menu'))))
                  var d = {},
                    f = {},
                    h = {}
                  r.disabled ||
                    ((d = {
                      onMouseLeave: this.onMouseLeave,
                      onMouseEnter: this.onMouseEnter,
                    }),
                    (f = { onClick: this.onTitleClick }),
                    (h = {
                      onMouseEnter: this.onTitleMouseEnter,
                      onMouseLeave: this.onTitleMouseLeave,
                    }))
                  var m = {},
                    v = r.direction,
                    g = 'rtl' === v
                  u &&
                    (g
                      ? (m.paddingRight = r.inlineIndent * r.level)
                      : (m.paddingLeft = r.inlineIndent * r.level))
                  var y = {}
                  this.getVisible() &&
                    (y = { 'aria-owns': this.internalMenuId })
                  var w = null
                  'horizontal' !== c &&
                    ((w = this.props.expandIcon),
                    'function' === typeof this.props.expandIcon &&
                      (w = o['createElement'](
                        this.props.expandIcon,
                        b({}, this.props),
                      )))
                  var O = o['createElement'](
                      'div',
                      Object(a['a'])(
                        {
                          ref: this.saveSubMenuTitle,
                          style: m,
                          className: ''.concat(l, '-title'),
                          role: 'button',
                        },
                        h,
                        f,
                        { 'aria-expanded': i },
                        y,
                        {
                          'aria-haspopup': 'true',
                          title: 'string' === typeof r.title ? r.title : void 0,
                        },
                      ),
                      r.title,
                      w ||
                        o['createElement']('i', {
                          className: ''.concat(l, '-arrow'),
                        }),
                    ),
                    k = this.renderChildren(),
                    S = (
                      null === (t = r.parentMenu) || void 0 === t
                        ? void 0
                        : t.isRootMenu
                    )
                      ? r.parentMenu.props.getPopupContainer
                      : function (e) {
                          return e.parentNode
                        },
                    C = mo[c],
                    T = r.popupOffset ? { offset: r.popupOffset } : {},
                    A = E()(
                      ((n = {}),
                      s(n, r.popupClassName, r.popupClassName && !u),
                      s(n, ''.concat(l, '-rtl'), g),
                      n),
                    ),
                    M = r.disabled,
                    x = r.triggerSubMenuAction,
                    N = r.subMenuOpenDelay,
                    _ = r.forceSubMenuRender,
                    I = r.subMenuCloseDelay,
                    R = r.builtinPlacements
                  nt.forEach(function (e) {
                    return delete r[e]
                  }),
                    delete r.onClick
                  var P = b(b({}, g ? fo : po), R)
                  delete r.direction
                  var D = this.getBaseProps(),
                    L = u ? null : this.getMotion(D.mode, D.visible)
                  return o['createElement'](
                    'li',
                    Object(a['a'])({}, r, d, {
                      className: p,
                      role: 'menuitem',
                    }),
                    o['createElement'](
                      uo,
                      {
                        prefixCls: l,
                        popupClassName: E()(''.concat(l, '-popup'), A),
                        getPopupContainer: S,
                        builtinPlacements: P,
                        popupPlacement: C,
                        popupVisible: !u && i,
                        popupAlign: T,
                        popup: u ? null : k,
                        action: M || u ? [] : [x],
                        mouseEnterDelay: N,
                        mouseLeaveDelay: I,
                        onPopupVisibleChange: this.onPopupVisibleChange,
                        forceRender: _,
                        popupMotion: L,
                      },
                      O,
                    ),
                    u ? k : null,
                  )
                },
              },
            ]),
            n
          )
        })(o['Component'])
      go.defaultProps = {
        onMouseEnter: Ze,
        onMouseLeave: Ze,
        onTitleMouseEnter: Ze,
        onTitleMouseLeave: Ze,
        onTitleClick: Ze,
        manualRef: Ze,
        mode: 'vertical',
        title: '',
      }
      var bo = Te(function (e, t) {
        var n = e.openKeys,
          r = e.activeKey,
          o = e.selectedKeys,
          i = t.eventKey,
          a = t.subMenuKey
        return {
          isOpen: n.indexOf(i) > -1,
          active: r[a] === i,
          selectedKeys: o,
        }
      })(go)
      bo.isSubMenu = !0
      var yo = bo,
        Eo = 'menuitem-overflowed',
        wo = 0.5,
        Oo = (function (e) {
          L(n, e)
          var t = G(n)
          function n() {
            var e
            return (
              I(this, n),
              (e = t.apply(this, arguments)),
              (e.resizeObserver = null),
              (e.mutationObserver = null),
              (e.originalTotalWidth = 0),
              (e.overflowedItems = []),
              (e.menuItemSizes = []),
              (e.cancelFrameId = null),
              (e.state = { lastVisibleIndex: void 0 }),
              (e.childRef = o['createRef']()),
              (e.getMenuItemNodes = function () {
                var t = e.props.prefixCls,
                  n = e.childRef.current
                return n
                  ? [].slice.call(n.children).filter(function (e) {
                      return (
                        e.className
                          .split(' ')
                          .indexOf(''.concat(t, '-overflowed-submenu')) < 0
                      )
                    })
                  : []
              }),
              (e.getOverflowedSubMenuItem = function (t, n, r) {
                var i = e.props,
                  s = i.overflowedIndicator,
                  l = i.level,
                  u = i.mode,
                  c = i.prefixCls,
                  p = i.theme
                if (1 !== l || 'horizontal' !== u) return null
                var d = e.props.children[0],
                  f = d.props,
                  h = (f.children, f.title, f.style),
                  m = v(f, ['children', 'title', 'style']),
                  g = b({}, h),
                  y = ''.concat(t, '-overflowed-indicator'),
                  E = ''.concat(t, '-overflowed-indicator')
                0 === n.length && !0 !== r
                  ? (g = b(b({}, g), {}, { display: 'none' }))
                  : r &&
                    ((g = b(
                      b({}, g),
                      {},
                      { visibility: 'hidden', position: 'absolute' },
                    )),
                    (y = ''.concat(y, '-placeholder')),
                    (E = ''.concat(E, '-placeholder')))
                var w = p ? ''.concat(c, '-').concat(p) : '',
                  O = {}
                return (
                  nt.forEach(function (e) {
                    void 0 !== m[e] && (O[e] = m[e])
                  }),
                  o['createElement'](
                    yo,
                    Object(a['a'])(
                      {
                        title: s,
                        className: ''.concat(c, '-overflowed-submenu'),
                        popupClassName: w,
                      },
                      O,
                      { key: y, eventKey: E, disabled: !1, style: g },
                    ),
                    n,
                  )
                )
              }),
              (e.setChildrenWidthAndResize = function () {
                if ('horizontal' === e.props.mode) {
                  var t = e.childRef.current
                  if (t) {
                    var n = t.children
                    if (n && 0 !== n.length) {
                      var r = t.children[n.length - 1]
                      ot(r, 'display', 'inline-block')
                      var o = e.getMenuItemNodes(),
                        i = o.filter(function (e) {
                          return e.className.split(' ').indexOf(Eo) >= 0
                        })
                      i.forEach(function (e) {
                        ot(e, 'display', 'inline-block')
                      }),
                        (e.menuItemSizes = o.map(function (e) {
                          return rt(e, !0)
                        })),
                        i.forEach(function (e) {
                          ot(e, 'display', 'none')
                        }),
                        (e.overflowedIndicatorWidth = rt(
                          t.children[t.children.length - 1],
                          !0,
                        )),
                        (e.originalTotalWidth = e.menuItemSizes.reduce(
                          function (e, t) {
                            return e + t
                          },
                          0,
                        )),
                        e.handleResize(),
                        ot(r, 'display', 'none')
                    }
                  }
                }
              }),
              (e.handleResize = function () {
                if ('horizontal' === e.props.mode) {
                  var t = e.childRef.current
                  if (t) {
                    var n = rt(t)
                    e.overflowedItems = []
                    var r,
                      o = 0
                    e.originalTotalWidth > n + wo &&
                      ((r = -1),
                      e.menuItemSizes.forEach(function (t) {
                        ;(o += t),
                          o + e.overflowedIndicatorWidth <= n && (r += 1)
                      })),
                      e.setState({ lastVisibleIndex: r })
                  }
                }
              }),
              e
            )
          }
          return (
            P(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  if (
                    (this.setChildrenWidthAndResize(),
                    1 === this.props.level && 'horizontal' === this.props.mode)
                  ) {
                    var t = this.childRef.current
                    if (!t) return
                    ;(this.resizeObserver = new te['a'](function (t) {
                      t.forEach(function () {
                        var t = e.cancelFrameId
                        cancelAnimationFrame(t),
                          (e.cancelFrameId = requestAnimationFrame(
                            e.setChildrenWidthAndResize,
                          ))
                      })
                    })),
                      [].slice
                        .call(t.children)
                        .concat(t)
                        .forEach(function (t) {
                          e.resizeObserver.observe(t)
                        }),
                      'undefined' !== typeof MutationObserver &&
                        ((this.mutationObserver = new MutationObserver(
                          function () {
                            e.resizeObserver.disconnect(),
                              [].slice
                                .call(t.children)
                                .concat(t)
                                .forEach(function (t) {
                                  e.resizeObserver.observe(t)
                                }),
                              e.setChildrenWidthAndResize()
                          },
                        )),
                        this.mutationObserver.observe(t, {
                          attributes: !1,
                          childList: !0,
                          subTree: !1,
                        }))
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.resizeObserver && this.resizeObserver.disconnect(),
                    this.mutationObserver && this.mutationObserver.disconnect(),
                    cancelAnimationFrame(this.cancelFrameId)
                },
              },
              {
                key: 'renderChildren',
                value: function (e) {
                  var t = this,
                    n = this.state.lastVisibleIndex
                  return (e || []).reduce(function (r, i, a) {
                    var s = i
                    if ('horizontal' === t.props.mode) {
                      var l = t.getOverflowedSubMenuItem(i.props.eventKey, [])
                      void 0 !== n &&
                        -1 !==
                          t.props.className.indexOf(
                            ''.concat(t.props.prefixCls, '-root'),
                          ) &&
                        (a > n &&
                          (s = o['cloneElement'](i, {
                            style: { display: 'none' },
                            eventKey: ''.concat(i.props.eventKey, '-hidden'),
                            className: ''.concat(Eo),
                          })),
                        a === n + 1 &&
                          ((t.overflowedItems = e
                            .slice(n + 1)
                            .map(function (e) {
                              return o['cloneElement'](e, {
                                key: e.props.eventKey,
                                mode: 'vertical-left',
                              })
                            })),
                          (l = t.getOverflowedSubMenuItem(
                            i.props.eventKey,
                            t.overflowedItems,
                          ))))
                      var u = [].concat(M(r), [l, s])
                      return (
                        a === e.length - 1 &&
                          u.push(
                            t.getOverflowedSubMenuItem(
                              i.props.eventKey,
                              [],
                              !0,
                            ),
                          ),
                        u
                      )
                    }
                    return [].concat(M(r), [s])
                  }, [])
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t =
                      (e.visible,
                      e.prefixCls,
                      e.overflowedIndicator,
                      e.mode,
                      e.level,
                      e.tag),
                    n = e.children,
                    r =
                      (e.theme,
                      v(e, [
                        'visible',
                        'prefixCls',
                        'overflowedIndicator',
                        'mode',
                        'level',
                        'tag',
                        'children',
                        'theme',
                      ])),
                    i = t
                  return o['createElement'](
                    i,
                    Object(a['a'])({ ref: this.childRef }, r),
                    this.renderChildren(n),
                  )
                },
              },
            ]),
            n
          )
        })(o['Component'])
      Oo.defaultProps = { tag: 'div', className: '' }
      var ko = Oo
      function So(e) {
        return (
          !e.length ||
          e.every(function (e) {
            return !!e.props.disabled
          })
        )
      }
      function Co(e, t, n) {
        var r = e.getState()
        e.setState({ activeKey: b(b({}, r.activeKey), {}, s({}, t, n)) })
      }
      function To(e) {
        return e.eventKey || '0-menu-'
      }
      function Ao(e, t) {
        var n,
          r = t,
          o = e.children,
          i = e.eventKey
        if (
          r &&
          (et(o, function (e, t) {
            e && e.props && !e.props.disabled && r === Qe(e, i, t) && (n = !0)
          }),
          n)
        )
          return r
        return (
          (r = null),
          e.defaultActiveFirst
            ? (et(o, function (e, t) {
                r || !e || e.props.disabled || (r = Qe(e, i, t))
              }),
              r)
            : r
        )
      }
      function Mo(e) {
        if (e) {
          var t = this.instanceArray.indexOf(e)
          ;-1 !== t ? (this.instanceArray[t] = e) : this.instanceArray.push(e)
        }
      }
      var xo = (function (e) {
        L(n, e)
        var t = G(n)
        function n(e) {
          var r
          return (
            I(this, n),
            (r = t.call(this, e)),
            (r.onKeyDown = function (e, t) {
              var n,
                o = e.keyCode
              if (
                (r.getFlatInstanceArray().forEach(function (t) {
                  t && t.props.active && t.onKeyDown && (n = t.onKeyDown(e))
                }),
                n)
              )
                return 1
              var i = null
              return (
                (o !== le.UP && o !== le.DOWN) ||
                  (i = r.step(o === le.UP ? -1 : 1)),
                i
                  ? (e.preventDefault(),
                    Co(r.props.store, To(r.props), i.props.eventKey),
                    'function' === typeof t && t(i),
                    1)
                  : void 0
              )
            }),
            (r.onItemHover = function (e) {
              var t = e.key,
                n = e.hover
              Co(r.props.store, To(r.props), n ? t : null)
            }),
            (r.onDeselect = function (e) {
              r.props.onDeselect(e)
            }),
            (r.onSelect = function (e) {
              r.props.onSelect(e)
            }),
            (r.onClick = function (e) {
              r.props.onClick(e)
            }),
            (r.onOpenChange = function (e) {
              r.props.onOpenChange(e)
            }),
            (r.onDestroy = function (e) {
              r.props.onDestroy(e)
            }),
            (r.getFlatInstanceArray = function () {
              return r.instanceArray
            }),
            (r.step = function (e) {
              var t = r.getFlatInstanceArray(),
                n = r.props.store.getState().activeKey[To(r.props)],
                o = t.length
              if (!o) return null
              e < 0 && (t = t.concat().reverse())
              var i = -1
              if (
                (t.every(function (e, t) {
                  return !e || e.props.eventKey !== n || ((i = t), !1)
                }),
                r.props.defaultActiveFirst ||
                  -1 === i ||
                  !So(t.slice(i, o - 1)))
              ) {
                var a = (i + 1) % o,
                  s = a
                do {
                  var l = t[s]
                  if (l && !l.props.disabled) return l
                  s = (s + 1) % o
                } while (s !== a)
                return null
              }
            }),
            (r.renderCommonMenuItem = function (e, t, n) {
              var i = r.props.store.getState(),
                a = U(r),
                s = a.props,
                l = Qe(e, s.eventKey, t),
                u = e.props
              if (!u || 'string' === typeof e.type) return e
              var c = l === i.activeKey,
                p = b(
                  b(
                    {
                      mode: u.mode || s.mode,
                      level: s.level,
                      inlineIndent: s.inlineIndent,
                      renderMenuItem: r.renderMenuItem,
                      rootPrefixCls: s.prefixCls,
                      index: t,
                      parentMenu: s.parentMenu,
                      manualRef: u.disabled ? void 0 : Ie(e.ref, Mo.bind(U(r))),
                      eventKey: l,
                      active: !u.disabled && c,
                      multiple: s.multiple,
                      onClick: function (e) {
                        ;(u.onClick || Ze)(e), r.onClick(e)
                      },
                      onItemHover: r.onItemHover,
                      motion: s.motion,
                      subMenuOpenDelay: s.subMenuOpenDelay,
                      subMenuCloseDelay: s.subMenuCloseDelay,
                      forceSubMenuRender: s.forceSubMenuRender,
                      onOpenChange: r.onOpenChange,
                      onDeselect: r.onDeselect,
                      onSelect: r.onSelect,
                      builtinPlacements: s.builtinPlacements,
                      itemIcon: u.itemIcon || r.props.itemIcon,
                      expandIcon: u.expandIcon || r.props.expandIcon,
                    },
                    n,
                  ),
                  {},
                  { direction: s.direction },
                )
              return (
                ('inline' === s.mode || it()) &&
                  (p.triggerSubMenuAction = 'click'),
                o['cloneElement'](e, b(b({}, p), {}, { key: l || t }))
              )
            }),
            (r.renderMenuItem = function (e, t, n) {
              if (!e) return null
              var o = r.props.store.getState(),
                i = {
                  openKeys: o.openKeys,
                  selectedKeys: o.selectedKeys,
                  triggerSubMenuAction: r.props.triggerSubMenuAction,
                  subMenuKey: n,
                }
              return r.renderCommonMenuItem(e, t, i)
            }),
            e.store.setState({
              activeKey: b(
                b({}, e.store.getState().activeKey),
                {},
                s({}, e.eventKey, Ao(e, e.activeKey)),
              ),
            }),
            (r.instanceArray = []),
            r
          )
        }
        return (
          P(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this.props.manualRef && this.props.manualRef(this)
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return (
                  this.props.visible ||
                  e.visible ||
                  this.props.className !== e.className ||
                  !ye()(this.props.style, e.style)
                )
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props,
                  n =
                    'activeKey' in t
                      ? t.activeKey
                      : t.store.getState().activeKey[To(t)],
                  r = Ao(t, n)
                if (r !== n) Co(t.store, To(t), r)
                else if ('activeKey' in e) {
                  var o = Ao(e, e.activeKey)
                  r !== o && Co(t.store, To(t), r)
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = Object(a['a'])({}, this.props)
                this.instanceArray = []
                var n = E()(
                    t.prefixCls,
                    t.className,
                    ''.concat(t.prefixCls, '-').concat(t.mode),
                  ),
                  r = { className: n, role: t.role || 'menu' }
                t.id && (r.id = t.id),
                  t.focusable &&
                    ((r.tabIndex = 0), (r.onKeyDown = this.onKeyDown))
                var i = t.prefixCls,
                  s = t.eventKey,
                  l = t.visible,
                  u = t.level,
                  c = t.mode,
                  p = t.overflowedIndicator,
                  d = t.theme
                return (
                  nt.forEach(function (e) {
                    return delete t[e]
                  }),
                  delete t.onClick,
                  o['createElement'](
                    ko,
                    Object(a['a'])(
                      {},
                      t,
                      {
                        prefixCls: i,
                        mode: c,
                        tag: 'ul',
                        level: u,
                        theme: d,
                        visible: l,
                        overflowedIndicator: p,
                      },
                      r,
                    ),
                    O(t.children).map(function (t, n) {
                      return e.renderMenuItem(t, n, s || '0-menu-')
                    }),
                  )
                )
              },
            },
          ]),
          n
        )
      })(o['Component'])
      xo.defaultProps = {
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        level: 1,
        inlineIndent: 24,
        visible: !0,
        focusable: !0,
        style: {},
        manualRef: Ze,
      }
      var No = Te()(xo),
        _o = No
      function Io(e, t, n) {
        var r = e.prefixCls,
          o = e.motion,
          i = e.defaultMotions,
          a = void 0 === i ? {} : i,
          s = e.openAnimation,
          l = e.openTransitionName,
          u = t.switchingModeFromInline
        if (o) return o
        if ('object' === h(s) && s)
          Z(
            !1,
            'Object type of `openAnimation` is removed. Please use `motion` instead.',
          )
        else if ('string' === typeof s)
          return { motionName: ''.concat(r, '-open-').concat(s) }
        if (l) return { motionName: l }
        var c = a[n]
        return c || (u ? null : a.other)
      }
      var Ro = (function (e) {
        L(n, e)
        var t = G(n)
        function n(e) {
          var r
          I(this, n),
            (r = t.call(this, e)),
            (r.onSelect = function (e) {
              var t = U(r),
                n = t.props
              if (n.selectable) {
                var o = r.store.getState(),
                  i = o.selectedKeys,
                  a = e.key
                ;(i = n.multiple ? i.concat([a]) : [a]),
                  'selectedKeys' in n || r.store.setState({ selectedKeys: i }),
                  n.onSelect(b(b({}, e), {}, { selectedKeys: i }))
              }
            }),
            (r.onClick = function (e) {
              var t = r.getRealMenuMode(),
                n = U(r),
                o = n.store,
                i = n.props.onOpenChange
              'inline' === t ||
                'openKeys' in r.props ||
                (o.setState({ openKeys: [] }), i([])),
                r.props.onClick(e)
            }),
            (r.onKeyDown = function (e, t) {
              r.innerMenu.getWrappedInstance().onKeyDown(e, t)
            }),
            (r.onOpenChange = function (e) {
              var t = U(r),
                n = t.props,
                o = r.store.getState().openKeys.concat(),
                i = !1,
                a = function (e) {
                  var t = !1
                  if (e.open) (t = -1 === o.indexOf(e.key)), t && o.push(e.key)
                  else {
                    var n = o.indexOf(e.key)
                    ;(t = -1 !== n), t && o.splice(n, 1)
                  }
                  i = i || t
                }
              Array.isArray(e) ? e.forEach(a) : a(e),
                i &&
                  ('openKeys' in r.props || r.store.setState({ openKeys: o }),
                  n.onOpenChange(o))
            }),
            (r.onDeselect = function (e) {
              var t = U(r),
                n = t.props
              if (n.selectable) {
                var o = r.store.getState().selectedKeys.concat(),
                  i = e.key,
                  a = o.indexOf(i)
                ;-1 !== a && o.splice(a, 1),
                  'selectedKeys' in n || r.store.setState({ selectedKeys: o }),
                  n.onDeselect(b(b({}, e), {}, { selectedKeys: o }))
              }
            }),
            (r.onMouseEnter = function (e) {
              r.restoreModeVerticalFromInline()
              var t = r.props.onMouseEnter
              t && t(e)
            }),
            (r.onTransitionEnd = function (e) {
              var t =
                  'width' === e.propertyName && e.target === e.currentTarget,
                n = e.target.className,
                o =
                  '[object SVGAnimatedString]' ===
                  Object.prototype.toString.call(n)
                    ? n.animVal
                    : n,
                i = 'font-size' === e.propertyName && o.indexOf('anticon') >= 0
              ;(t || i) && r.restoreModeVerticalFromInline()
            }),
            (r.setInnerMenu = function (e) {
              r.innerMenu = e
            }),
            (r.isRootMenu = !0)
          var o = e.defaultSelectedKeys,
            i = e.defaultOpenKeys
          return (
            'selectedKeys' in e && (o = e.selectedKeys || []),
            'openKeys' in e && (i = e.openKeys || []),
            (r.store = Me({
              selectedKeys: o,
              openKeys: i,
              activeKey: { '0-menu-': Ao(e, e.activeKey) },
            })),
            (r.state = {
              switchingModeFromInline: !1,
              prevProps: e,
              inlineOpenKeys: [],
              store: r.store,
            }),
            r
          )
        }
        return (
          P(
            n,
            [
              {
                key: 'componentDidMount',
                value: function () {
                  this.updateMiniStore(), this.updateMenuDisplay()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.siderCollapsed,
                    r = t.inlineCollapsed,
                    o = t.onOpenChange
                  ;((!e.inlineCollapsed && r) || (!e.siderCollapsed && n)) &&
                    o([]),
                    this.updateMiniStore(),
                    this.updateMenuDisplay()
                },
              },
              {
                key: 'updateMenuDisplay',
                value: function () {
                  var e = this.props.collapsedWidth,
                    t = this.store,
                    n = this.prevOpenKeys,
                    r =
                      this.getInlineCollapsed() &&
                      (0 === e || '0' === e || '0px' === e)
                  r
                    ? ((this.prevOpenKeys = t.getState().openKeys.concat()),
                      this.store.setState({ openKeys: [] }))
                    : n &&
                      (this.store.setState({ openKeys: n }),
                      (this.prevOpenKeys = null))
                },
              },
              {
                key: 'getRealMenuMode',
                value: function () {
                  var e = this.props.mode,
                    t = this.state.switchingModeFromInline,
                    n = this.getInlineCollapsed()
                  return t && n ? 'inline' : n ? 'vertical' : e
                },
              },
              {
                key: 'getInlineCollapsed',
                value: function () {
                  var e = this.props,
                    t = e.inlineCollapsed,
                    n = e.siderCollapsed
                  return void 0 !== n ? n : t
                },
              },
              {
                key: 'restoreModeVerticalFromInline',
                value: function () {
                  var e = this.state.switchingModeFromInline
                  e && this.setState({ switchingModeFromInline: !1 })
                },
              },
              {
                key: 'updateMiniStore',
                value: function () {
                  'selectedKeys' in this.props &&
                    this.store.setState({
                      selectedKeys: this.props.selectedKeys || [],
                    }),
                    'openKeys' in this.props &&
                      this.store.setState({
                        openKeys: this.props.openKeys || [],
                      })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = b(
                      {},
                      _e(this.props, [
                        'collapsedWidth',
                        'siderCollapsed',
                        'defaultMotions',
                      ]),
                    ),
                    t = this.getRealMenuMode()
                  return (
                    (e.className += ' '.concat(e.prefixCls, '-root')),
                    'rtl' === e.direction &&
                      (e.className += ' '.concat(e.prefixCls, '-rtl')),
                    (e = b(
                      b({}, e),
                      {},
                      {
                        mode: t,
                        onClick: this.onClick,
                        onOpenChange: this.onOpenChange,
                        onDeselect: this.onDeselect,
                        onSelect: this.onSelect,
                        onMouseEnter: this.onMouseEnter,
                        onTransitionEnd: this.onTransitionEnd,
                        parentMenu: this,
                        motion: Io(this.props, this.state, t),
                      },
                    )),
                    delete e.openAnimation,
                    delete e.openTransitionName,
                    o['createElement'](
                      ge,
                      { store: this.store },
                      o['createElement'](
                        _o,
                        Object(a['a'])({}, e, { ref: this.setInnerMenu }),
                        this.props.children,
                      ),
                    )
                  )
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  var n = t.prevProps,
                    r = t.store,
                    o = r.getState(),
                    i = {},
                    a = { prevProps: e }
                  return (
                    'inline' === n.mode &&
                      'inline' !== e.mode &&
                      (a.switchingModeFromInline = !0),
                    'openKeys' in e
                      ? (i.openKeys = e.openKeys || [])
                      : (((e.inlineCollapsed && !n.inlineCollapsed) ||
                          (e.siderCollapsed && !n.siderCollapsed)) &&
                          ((a.switchingModeFromInline = !0),
                          (a.inlineOpenKeys = o.openKeys),
                          (i.openKeys = [])),
                        ((!e.inlineCollapsed && n.inlineCollapsed) ||
                          (!e.siderCollapsed && n.siderCollapsed)) &&
                          ((i.openKeys = t.inlineOpenKeys),
                          (a.inlineOpenKeys = []))),
                    Object.keys(i).length && r.setState(i),
                    a
                  )
                },
              },
            ],
          ),
          n
        )
      })(o['Component'])
      Ro.defaultProps = {
        selectable: !0,
        onClick: Ze,
        onSelect: Ze,
        onOpenChange: Ze,
        onDeselect: Ze,
        defaultSelectedKeys: [],
        defaultOpenKeys: [],
        subMenuOpenDelay: 0.1,
        subMenuCloseDelay: 0.1,
        triggerSubMenuAction: 'hover',
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        style: {},
        builtinPlacements: {},
        overflowedIndicator: o['createElement']('span', null, '\xb7\xb7\xb7'),
      }
      var Po = Ro,
        Do = (function (e) {
          L(n, e)
          var t = G(n)
          function n() {
            var e
            return (
              I(this, n),
              (e = t.apply(this, arguments)),
              (e.onKeyDown = function (t) {
                var n = t.keyCode
                if (n === le.ENTER) return e.onClick(t), !0
              }),
              (e.onMouseLeave = function (t) {
                var n = e.props,
                  r = n.eventKey,
                  o = n.onItemHover,
                  i = n.onMouseLeave
                o({ key: r, hover: !1 }), i({ key: r, domEvent: t })
              }),
              (e.onMouseEnter = function (t) {
                var n = e.props,
                  r = n.eventKey,
                  o = n.onItemHover,
                  i = n.onMouseEnter
                o({ key: r, hover: !0 }), i({ key: r, domEvent: t })
              }),
              (e.onClick = function (t) {
                var n = e.props,
                  r = n.eventKey,
                  o = n.multiple,
                  i = n.onClick,
                  a = n.onSelect,
                  s = n.onDeselect,
                  l = n.isSelected,
                  u = { key: r, keyPath: [r], item: U(e), domEvent: t }
                i(u), o ? (l ? s(u) : a(u)) : l || a(u)
              }),
              (e.saveNode = function (t) {
                e.node = t
              }),
              e
            )
          }
          return (
            P(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.callRef()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.callRef()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props
                  e.onDestroy && e.onDestroy(e.eventKey)
                },
              },
              {
                key: 'getPrefixCls',
                value: function () {
                  return ''.concat(this.props.rootPrefixCls, '-item')
                },
              },
              {
                key: 'getActiveClassName',
                value: function () {
                  return ''.concat(this.getPrefixCls(), '-active')
                },
              },
              {
                key: 'getSelectedClassName',
                value: function () {
                  return ''.concat(this.getPrefixCls(), '-selected')
                },
              },
              {
                key: 'getDisabledClassName',
                value: function () {
                  return ''.concat(this.getPrefixCls(), '-disabled')
                },
              },
              {
                key: 'callRef',
                value: function () {
                  this.props.manualRef && this.props.manualRef(this)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = b({}, this.props),
                    n = E()(
                      this.getPrefixCls(),
                      t.className,
                      ((e = {}),
                      s(e, this.getActiveClassName(), !t.disabled && t.active),
                      s(e, this.getSelectedClassName(), t.isSelected),
                      s(e, this.getDisabledClassName(), t.disabled),
                      e),
                    ),
                    r = b(
                      b({}, t.attribute),
                      {},
                      {
                        title: 'string' === typeof t.title ? t.title : void 0,
                        className: n,
                        role: t.role || 'menuitem',
                        'aria-disabled': t.disabled,
                      },
                    )
                  'option' === t.role
                    ? (r = b(
                        b({}, r),
                        {},
                        { role: 'option', 'aria-selected': t.isSelected },
                      ))
                    : (null !== t.role && 'none' !== t.role) ||
                      (r.role = 'none')
                  var i = {
                      onClick: t.disabled ? null : this.onClick,
                      onMouseLeave: t.disabled ? null : this.onMouseLeave,
                      onMouseEnter: t.disabled ? null : this.onMouseEnter,
                    },
                    l = b({}, t.style)
                  'inline' === t.mode &&
                    ('rtl' === t.direction
                      ? (l.paddingRight = t.inlineIndent * t.level)
                      : (l.paddingLeft = t.inlineIndent * t.level)),
                    nt.forEach(function (e) {
                      return delete t[e]
                    }),
                    delete t.direction
                  var u = this.props.itemIcon
                  return (
                    'function' === typeof this.props.itemIcon &&
                      (u = o['createElement'](this.props.itemIcon, this.props)),
                    o['createElement'](
                      'li',
                      Object(a['a'])(
                        {},
                        _e(t, [
                          'onClick',
                          'onMouseEnter',
                          'onMouseLeave',
                          'onSelect',
                        ]),
                        r,
                        i,
                        { style: l, ref: this.saveNode },
                      ),
                      t.children,
                      u,
                    )
                  )
                },
              },
            ]),
            n
          )
        })(o['Component'])
      ;(Do.isMenuItem = !0),
        (Do.defaultProps = {
          onSelect: Ze,
          onMouseEnter: Ze,
          onMouseLeave: Ze,
          manualRef: Ze,
        })
      var Lo = Te(function (e, t) {
          var n = e.activeKey,
            r = e.selectedKeys,
            o = t.eventKey,
            i = t.subMenuKey
          return {
            active: n[i] === o,
            isSelected: Array.isArray(r) ? -1 !== r.indexOf(o) : r === o,
          }
        })(Do),
        jo = Lo,
        Fo = (function (e) {
          L(n, e)
          var t = G(n)
          function n() {
            var e
            return (
              I(this, n),
              (e = t.apply(this, arguments)),
              (e.renderInnerMenuItem = function (t) {
                var n = e.props,
                  r = n.renderMenuItem,
                  o = n.index
                return r(t, o, e.props.subMenuKey)
              }),
              e
            )
          }
          return (
            P(n, [
              {
                key: 'render',
                value: function () {
                  var e = Object(a['a'])({}, this.props),
                    t = e.className,
                    n = void 0 === t ? '' : t,
                    r = e.rootPrefixCls,
                    i = ''.concat(r, '-item-group-title'),
                    s = ''.concat(r, '-item-group-list'),
                    l = e.title,
                    u = e.children
                  return (
                    nt.forEach(function (t) {
                      return delete e[t]
                    }),
                    delete e.direction,
                    o['createElement'](
                      'li',
                      Object(a['a'])({}, e, {
                        onClick: function (e) {
                          return e.stopPropagation()
                        },
                        className: ''.concat(n, ' ').concat(r, '-item-group'),
                      }),
                      o['createElement'](
                        'div',
                        {
                          className: i,
                          title: 'string' === typeof l ? l : void 0,
                        },
                        l,
                      ),
                      o['createElement'](
                        'ul',
                        { className: s },
                        o['Children'].map(u, this.renderInnerMenuItem),
                      ),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(o['Component'])
      ;(Fo.isMenuItemGroup = !0), (Fo.defaultProps = { disabled: !0 })
      var Bo = function (e) {
        var t = e.className,
          n = e.rootPrefixCls,
          r = e.style
        return o['createElement']('li', {
          className: ''.concat(t, ' ').concat(n, '-item-divider'),
          style: r,
        })
      }
      Bo.defaultProps = { disabled: !0, className: '', style: {} }
      var Ko = Po,
        Uo = { adjustX: 1, adjustY: 1 },
        Ho = [0, 0],
        Go = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: Uo,
            offset: [0, -4],
            targetOffset: Ho,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: Uo,
            offset: [0, -4],
            targetOffset: Ho,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: Uo,
            offset: [0, -4],
            targetOffset: Ho,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: Uo,
            offset: [0, 4],
            targetOffset: Ho,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: Uo,
            offset: [0, 4],
            targetOffset: Ho,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: Uo,
            offset: [0, 4],
            targetOffset: Ho,
          },
        },
        $o = Go
      function zo(e, t) {
        var n = e.arrow,
          r = void 0 !== n && n,
          i = e.prefixCls,
          a = void 0 === i ? 'rc-dropdown' : i,
          l = e.transitionName,
          u = e.animation,
          c = e.align,
          p = e.placement,
          d = void 0 === p ? 'bottomLeft' : p,
          h = e.placements,
          m = void 0 === h ? $o : h,
          g = e.getPopupContainer,
          b = e.showAction,
          y = e.hideAction,
          w = e.overlayClassName,
          O = e.overlayStyle,
          k = e.visible,
          S = e.trigger,
          C = void 0 === S ? ['hover'] : S,
          T = v(e, [
            'arrow',
            'prefixCls',
            'transitionName',
            'animation',
            'align',
            'placement',
            'placements',
            'getPopupContainer',
            'showAction',
            'hideAction',
            'overlayClassName',
            'overlayStyle',
            'visible',
            'trigger',
          ]),
          A = o['useState'](),
          M = f(A, 2),
          x = M[0],
          N = M[1],
          _ = 'visible' in e ? k : x,
          I = o['useRef'](null)
        o['useImperativeHandle'](t, function () {
          return I.current
        })
        var R = function () {
            var t,
              n = e.overlay
            return (t = 'function' === typeof n ? n() : n), t
          },
          P = function (t) {
            var n = e.onOverlayClick,
              r = R().props
            N(!1), n && n(t), r.onClick && r.onClick(t)
          },
          D = function (t) {
            var n = e.onVisibleChange
            N(t), 'function' === typeof n && n(t)
          },
          L = function () {
            var e = R(),
              t = { prefixCls: ''.concat(a, '-menu'), onClick: P }
            return (
              'string' === typeof e.type && delete t.prefixCls,
              o['createElement'](
                o['Fragment'],
                null,
                r &&
                  o['createElement']('div', {
                    className: ''.concat(a, '-arrow'),
                  }),
                o['cloneElement'](e, t),
              )
            )
          },
          j = function () {
            var t = e.overlay
            return 'function' === typeof t ? L : L()
          },
          F = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint
            return 'minOverlayWidthMatchTrigger' in e ? t : !n
          },
          B = function () {
            var t = e.openClassName
            return void 0 !== t ? t : ''.concat(a, '-open')
          },
          K = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              r = E()(n.className, B())
            return x && t ? o['cloneElement'](t, { className: r }) : t
          },
          U = y
        return (
          U || -1 === C.indexOf('contextMenu') || (U = ['click']),
          o['createElement'](
            uo,
            Object.assign({}, T, {
              prefixCls: a,
              ref: I,
              popupClassName: E()(w, s({}, ''.concat(a, '-show-arrow'), r)),
              popupStyle: O,
              builtinPlacements: m,
              action: C,
              showAction: b,
              hideAction: U || [],
              popupPlacement: d,
              popupAlign: c,
              popupTransitionName: l,
              popupAnimation: u,
              popupVisible: _,
              stretch: F() ? 'minWidth' : '',
              popup: j(),
              onPopupVisibleChange: D,
              getPopupContainer: g,
            }),
            K(),
          )
        )
      }
      var Wo = o['forwardRef'](zo),
        Vo = Wo
      function Yo(e, t) {
        var n = e.prefixCls,
          r = e.editable,
          i = e.locale,
          a = e.style
        return r && !1 !== r.showAdd
          ? o['createElement'](
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: a,
                'aria-label':
                  (null === i || void 0 === i ? void 0 : i.addAriaLabel) ||
                  'Add tab',
                onClick: function (e) {
                  r.onEdit('add', { event: e })
                },
              },
              r.addIcon || '+',
            )
          : null
      }
      var Xo = o['forwardRef'](Yo)
      function qo(e, t) {
        var n = e.prefixCls,
          r = e.id,
          i = e.tabs,
          a = e.locale,
          l = e.mobile,
          u = e.moreIcon,
          c = void 0 === u ? 'More' : u,
          p = e.moreTransitionName,
          d = e.style,
          h = e.className,
          m = e.editable,
          v = e.tabBarGutter,
          g = e.rtl,
          b = e.onTabClick,
          y = Object(o['useState'])(!1),
          w = f(y, 2),
          O = w[0],
          k = w[1],
          S = Object(o['useState'])(null),
          C = f(S, 2),
          T = C[0],
          A = C[1],
          M = ''.concat(r, '-more-popup'),
          x = ''.concat(n, '-dropdown'),
          N = null !== T ? ''.concat(M, '-').concat(T) : null,
          _ = null === a || void 0 === a ? void 0 : a.dropdownAriaLabel,
          I = o['createElement'](
            Ko,
            {
              onClick: function (e) {
                var t = e.key,
                  n = e.domEvent
                b(t, n), k(!1)
              },
              id: M,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': N,
              selectedKeys: [T],
              'aria-label': void 0 !== _ ? _ : 'expanded dropdown',
            },
            i.map(function (e) {
              return o['createElement'](
                jo,
                {
                  key: e.key,
                  id: ''.concat(M, '-').concat(e.key),
                  role: 'option',
                  'aria-controls': r && ''.concat(r, '-panel-').concat(e.key),
                  disabled: e.disabled,
                },
                e.tab,
              )
            }),
          )
        function R(e) {
          for (
            var t = i.filter(function (e) {
                return !e.disabled
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === T
                }) || 0,
              r = t.length,
              o = 0;
            o < r;
            o += 1
          ) {
            n = (n + e + r) % r
            var a = t[n]
            if (!a.disabled) return void A(a.key)
          }
        }
        function P(e) {
          var t = e.which
          if (O)
            switch (t) {
              case le.UP:
                R(-1), e.preventDefault()
                break
              case le.DOWN:
                R(1), e.preventDefault()
                break
              case le.ESC:
                k(!1)
                break
              case le.SPACE:
              case le.ENTER:
                null !== T && b(T, e)
                break
            }
          else
            [le.DOWN, le.SPACE, le.ENTER].includes(t) &&
              (k(!0), e.preventDefault())
        }
        Object(o['useEffect'])(
          function () {
            var e = document.getElementById(N)
            e && e.scrollIntoView && e.scrollIntoView(!1)
          },
          [T],
        ),
          Object(o['useEffect'])(
            function () {
              O || A(null)
            },
            [O],
          )
        var D = s({}, g ? 'marginLeft' : 'marginRight', v)
        i.length || ((D.visibility = 'hidden'), (D.order = 1))
        var L = E()(s({}, ''.concat(x, '-rtl'), g)),
          j = l
            ? null
            : o['createElement'](
                Vo,
                {
                  prefixCls: x,
                  overlay: I,
                  trigger: ['hover'],
                  visible: O,
                  transitionName: p,
                  onVisibleChange: k,
                  overlayClassName: L,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                o['createElement'](
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: D,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': M,
                    id: ''.concat(r, '-more'),
                    'aria-expanded': O,
                    onKeyDown: P,
                  },
                  c,
                ),
              )
        return o['createElement'](
          'div',
          {
            className: E()(''.concat(n, '-nav-operations'), h),
            style: d,
            ref: t,
          },
          j,
          o['createElement'](Xo, { prefixCls: n, locale: a, editable: m }),
        )
      }
      var Zo = o['forwardRef'](qo),
        Qo = Object(o['createContext'])(null),
        Jo = 0.1,
        ei = 0.01,
        ti = 20,
        ni = Math.pow(0.995, ti)
      function ri(e, t) {
        var n = Object(o['useState'])(),
          r = f(n, 2),
          i = r[0],
          a = r[1],
          s = Object(o['useState'])(0),
          l = f(s, 2),
          u = l[0],
          c = l[1],
          p = Object(o['useState'])(0),
          d = f(p, 2),
          h = d[0],
          m = d[1],
          v = Object(o['useState'])(),
          g = f(v, 2),
          b = g[0],
          y = g[1],
          E = Object(o['useRef'])()
        function w(e) {
          var t = e.touches[0],
            n = t.screenX,
            r = t.screenY
          a({ x: n, y: r }), window.clearInterval(E.current)
        }
        function O(e) {
          if (i) {
            e.preventDefault()
            var n = e.touches[0],
              r = n.screenX,
              o = n.screenY
            a({ x: r, y: o })
            var s = r - i.x,
              l = o - i.y
            t(s, l)
            var p = Date.now()
            c(p), m(p - u), y({ x: s, y: l })
          }
        }
        function k() {
          if (i && (a(null), y(null), b)) {
            var e = b.x / h,
              n = b.y / h,
              r = Math.abs(e),
              o = Math.abs(n)
            if (Math.max(r, o) < Jo) return
            var s = e,
              l = n
            E.current = window.setInterval(function () {
              Math.abs(s) < ei && Math.abs(l) < ei
                ? window.clearInterval(E.current)
                : ((s *= ni), (l *= ni), t(s * ti, l * ti))
            }, ti)
          }
        }
        var S = Object(o['useRef'])()
        function C(e) {
          var n = e.deltaX,
            r = e.deltaY,
            o = 0,
            i = Math.abs(n),
            a = Math.abs(r)
          i === a
            ? (o = 'x' === S.current ? n : r)
            : i > a
            ? ((o = n), (S.current = 'x'))
            : ((o = r), (S.current = 'y')),
            t(-o, -o) && e.preventDefault()
        }
        var T = Object(o['useRef'])(null)
        ;(T.current = {
          onTouchStart: w,
          onTouchMove: O,
          onTouchEnd: k,
          onWheel: C,
        }),
          o['useEffect'](function () {
            function t(e) {
              T.current.onTouchStart(e)
            }
            function n(e) {
              T.current.onTouchMove(e)
            }
            function r(e) {
              T.current.onTouchEnd(e)
            }
            function o(e) {
              T.current.onWheel(e)
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', r, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', o),
              function () {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', r)
              }
            )
          }, [])
      }
      function oi() {
        var e = Object(o['useRef'])(new Map())
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, o['createRef']()),
            e.current.get(t)
          )
        }
        function n(t) {
          e.current['delete'](t)
        }
        return [t, n]
      }
      function ii(e, t) {
        var n = o['useRef'](e),
          r = o['useState']({}),
          i = f(r, 2),
          a = i[1]
        function s(e) {
          var r = 'function' === typeof e ? e(n.current) : e
          r !== n.current && t(r, n.current), (n.current = r), a({})
        }
        return [n.current, s]
      }
      var ai = function (e) {
        var t,
          n = e.position,
          r = e.prefixCls,
          i = e.extra
        if (!i) return null
        var a = i
        return (
          'right' === n && (t = a.right || (!a.left && a) || null),
          'left' === n && (t = a.left || null),
          t
            ? o['createElement'](
                'div',
                { className: ''.concat(r, '-extra-content') },
                t,
              )
            : null
        )
      }
      function si(e, t) {
        var n,
          r = o['useContext'](Qo),
          i = r.prefixCls,
          l = r.tabs,
          u = e.className,
          c = e.style,
          p = e.id,
          d = e.animated,
          h = e.activeKey,
          m = e.rtl,
          v = e.extra,
          g = e.editable,
          y = e.locale,
          w = e.tabPosition,
          O = e.tabBarGutter,
          k = e.children,
          S = e.onTabClick,
          C = e.onTabScroll,
          T = Object(o['useRef'])(),
          A = Object(o['useRef'])(),
          x = Object(o['useRef'])(),
          N = Object(o['useRef'])(),
          I = oi(),
          R = f(I, 2),
          P = R[0],
          D = R[1],
          L = 'top' === w || 'bottom' === w,
          j = ii(0, function (e, t) {
            L && C && C({ direction: e > t ? 'left' : 'right' })
          }),
          F = f(j, 2),
          B = F[0],
          K = F[1],
          U = ii(0, function (e, t) {
            !L && C && C({ direction: e > t ? 'top' : 'bottom' })
          }),
          H = f(U, 2),
          G = H[0],
          $ = H[1],
          z = Object(o['useState'])(0),
          W = f(z, 2),
          V = W[0],
          Y = W[1],
          X = Object(o['useState'])(0),
          q = f(X, 2),
          Z = q[0],
          Q = q[1],
          J = Object(o['useState'])(0),
          ee = f(J, 2),
          te = ee[0],
          ne = ee[1],
          re = Object(o['useState'])(0),
          se = f(re, 2),
          le = se[0],
          ue = se[1],
          pe = Object(o['useState'])(null),
          fe = f(pe, 2),
          me = fe[0],
          ve = fe[1],
          ge = Object(o['useState'])(null),
          be = f(ge, 2),
          ye = be[0],
          Ee = be[1],
          we = Object(o['useState'])(0),
          Oe = f(we, 2),
          ke = Oe[0],
          Se = Oe[1],
          Ce = Object(o['useState'])(0),
          Te = f(Ce, 2),
          Ae = Te[0],
          Me = Te[1],
          xe = ae(new Map()),
          Ne = f(xe, 2),
          _e = Ne[0],
          Ie = Ne[1],
          Re = de(l, _e, V),
          Pe = ''.concat(i, '-nav-operations-hidden'),
          De = 0,
          Le = 0
        function je(e) {
          return e < De ? De : e > Le ? Le : e
        }
        L
          ? m
            ? ((De = 0), (Le = Math.max(0, V - me)))
            : ((De = Math.min(0, me - V)), (Le = 0))
          : ((De = Math.min(0, ye - Z)), (Le = 0))
        var Fe = Object(o['useRef'])(),
          Be = Object(o['useState'])(),
          Ke = f(Be, 2),
          Ue = Ke[0],
          He = Ke[1]
        function Ge() {
          He(Date.now())
        }
        function $e() {
          window.clearTimeout(Fe.current)
        }
        function ze() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
            t = Re.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 }
          if (L) {
            var n = B
            m
              ? t.right < B
                ? (n = t.right)
                : t.right + t.width > B + me && (n = t.right + t.width - me)
              : t.left < -B
              ? (n = -t.left)
              : t.left + t.width > -B + me && (n = -(t.left + t.width - me)),
              $(0),
              K(je(n))
          } else {
            var r = G
            t.top < -G
              ? (r = -t.top)
              : t.top + t.height > -G + ye && (r = -(t.top + t.height - ye)),
              K(0),
              $(je(r))
          }
        }
        ri(T, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = je(e + t)
              return n
            })
          }
          if (L) {
            if (me >= V) return !1
            n(K, e)
          } else {
            if (ye >= Z) return !1
            n($, t)
          }
          return $e(), Ge(), !0
        }),
          Object(o['useEffect'])(
            function () {
              return (
                $e(),
                Ue &&
                  (Fe.current = window.setTimeout(function () {
                    He(0)
                  }, 100)),
                $e
              )
            },
            [Ue],
          )
        var We = he(
            Re,
            { width: me, height: ye, left: B, top: G },
            { width: te, height: le },
            { width: ke, height: Ae },
            b(b({}, e), {}, { tabs: l }),
          ),
          Ve = f(We, 2),
          Ye = Ve[0],
          Xe = Ve[1],
          qe = l.map(function (e) {
            var t = e.key
            return o['createElement'](ce, {
              id: p,
              prefixCls: i,
              key: t,
              rtl: m,
              tab: e,
              closable: e.closable,
              editable: g,
              active: t === h,
              tabPosition: w,
              tabBarGutter: O,
              renderWrapper: k,
              removeAriaLabel:
                null === y || void 0 === y ? void 0 : y.removeAriaLabel,
              ref: P(t),
              onClick: function (e) {
                S(t, e)
              },
              onRemove: function () {
                D(t)
              },
              onFocus: function () {
                ze(t),
                  Ge(),
                  m || (T.current.scrollLeft = 0),
                  (T.current.scrollTop = 0)
              },
            })
          }),
          Ze = ie(function () {
            var e,
              t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              c =
                (null === (e = T.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              p =
                (null === (t = T.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              d =
                (null === (n = N.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              f =
                (null === (r = N.current) || void 0 === r
                  ? void 0
                  : r.offsetHeight) || 0,
              h =
                (null === (o = x.current) || void 0 === o
                  ? void 0
                  : o.offsetWidth) || 0,
              m =
                (null === (i = x.current) || void 0 === i
                  ? void 0
                  : i.offsetHeight) || 0
            ve(c), Ee(p), Se(d), Me(f)
            var v =
                ((null === (a = A.current) || void 0 === a
                  ? void 0
                  : a.offsetWidth) || 0) - d,
              g =
                ((null === (s = A.current) || void 0 === s
                  ? void 0
                  : s.offsetHeight) || 0) - f
            Y(v), Q(g)
            var b =
              null === (u = x.current) || void 0 === u
                ? void 0
                : u.className.includes(Pe)
            ne(v - (b ? 0 : h)),
              ue(g - (b ? 0 : m)),
              Ie(function () {
                var e = new Map()
                return (
                  l.forEach(function (t) {
                    var n = t.key,
                      r = P(n).current
                    r &&
                      e.set(n, {
                        width: r.offsetWidth,
                        height: r.offsetHeight,
                        left: r.offsetLeft,
                        top: r.offsetTop,
                      })
                  }),
                  e
                )
              })
          }),
          Qe = l.slice(0, Ye),
          Je = l.slice(Xe + 1),
          et = [].concat(M(Qe), M(Je)),
          tt = Object(o['useState'])(),
          nt = f(tt, 2),
          rt = nt[0],
          ot = nt[1],
          it = Re.get(h),
          at = Object(o['useRef'])()
        function st() {
          _.cancel(at.current)
        }
        Object(o['useEffect'])(
          function () {
            var e = {}
            return (
              it &&
                (L
                  ? (m ? (e.right = it.right) : (e.left = it.left),
                    (e.width = it.width))
                  : ((e.top = it.top), (e.height = it.height))),
              st(),
              (at.current = _(function () {
                ot(e)
              })),
              st
            )
          },
          [it, L, m],
        ),
          Object(o['useEffect'])(
            function () {
              ze()
            },
            [h, it, Re, L],
          ),
          Object(o['useEffect'])(
            function () {
              Ze()
            },
            [
              m,
              O,
              h,
              l
                .map(function (e) {
                  return e.key
                })
                .join('_'),
            ],
          )
        var lt,
          ut,
          ct,
          pt,
          dt = !!et.length,
          ft = ''.concat(i, '-nav-wrap')
        return (
          L
            ? m
              ? ((ut = B > 0), (lt = B + me < V))
              : ((lt = B < 0), (ut = -B + me < V))
            : ((ct = G < 0), (pt = -G + ye < Z)),
          o['createElement'](
            'div',
            {
              ref: t,
              role: 'tablist',
              className: E()(''.concat(i, '-nav'), u),
              style: c,
              onKeyDown: function () {
                Ge()
              },
            },
            o['createElement'](ai, {
              position: 'left',
              extra: v,
              prefixCls: i,
            }),
            o['createElement'](
              oe,
              { onResize: Ze },
              o['createElement'](
                'div',
                {
                  className: E()(
                    ft,
                    ((n = {}),
                    s(n, ''.concat(ft, '-ping-left'), lt),
                    s(n, ''.concat(ft, '-ping-right'), ut),
                    s(n, ''.concat(ft, '-ping-top'), ct),
                    s(n, ''.concat(ft, '-ping-bottom'), pt),
                    n),
                  ),
                  ref: T,
                },
                o['createElement'](
                  oe,
                  { onResize: Ze },
                  o['createElement'](
                    'div',
                    {
                      ref: A,
                      className: ''.concat(i, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(B, 'px, ')
                          .concat(G, 'px)'),
                        transition: Ue ? 'none' : void 0,
                      },
                    },
                    qe,
                    o['createElement'](Xo, {
                      ref: N,
                      prefixCls: i,
                      locale: y,
                      editable: g,
                      style: { visibility: dt ? 'hidden' : null },
                    }),
                    o['createElement']('div', {
                      className: E()(
                        ''.concat(i, '-ink-bar'),
                        s({}, ''.concat(i, '-ink-bar-animated'), d.inkBar),
                      ),
                      style: rt,
                    }),
                  ),
                ),
              ),
            ),
            o['createElement'](
              Zo,
              Object(a['a'])({}, e, {
                ref: x,
                prefixCls: i,
                tabs: et,
                className: !dt && Pe,
              }),
            ),
            o['createElement'](ai, {
              position: 'right',
              extra: v,
              prefixCls: i,
            }),
          )
        )
      }
      var li = o['forwardRef'](si)
      function ui(e) {
        var t = e.id,
          n = e.activeKey,
          r = e.animated,
          i = e.tabPosition,
          a = e.rtl,
          l = e.destroyInactiveTabPane,
          u = o['useContext'](Qo),
          c = u.prefixCls,
          p = u.tabs,
          d = r.tabPane,
          f = p.findIndex(function (e) {
            return e.key === n
          })
        return o['createElement'](
          'div',
          { className: E()(''.concat(c, '-content-holder')) },
          o['createElement'](
            'div',
            {
              className: E()(
                ''.concat(c, '-content'),
                ''.concat(c, '-content-').concat(i),
                s({}, ''.concat(c, '-content-animated'), d),
              ),
              style:
                f && d
                  ? s(
                      {},
                      a ? 'marginRight' : 'marginLeft',
                      '-'.concat(f, '00%'),
                    )
                  : null,
            },
            p.map(function (e) {
              return o['cloneElement'](e.node, {
                key: e.key,
                prefixCls: c,
                tabKey: e.key,
                id: t,
                animated: d,
                active: e.key === n,
                destroyInactiveTabPane: l,
              })
            }),
          ),
        )
      }
      function ci(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          r = e.className,
          i = e.style,
          a = e.id,
          s = e.active,
          l = e.animated,
          u = e.destroyInactiveTabPane,
          c = e.tabKey,
          p = e.children,
          d = o['useState'](n),
          h = f(d, 2),
          m = h[0],
          v = h[1]
        o['useEffect'](
          function () {
            s ? v(!0) : u && v(!1)
          },
          [s, u],
        )
        var g = {}
        return (
          s ||
            (l
              ? ((g.visibility = 'hidden'),
                (g.height = 0),
                (g.overflowY = 'hidden'))
              : (g.display = 'none')),
          o['createElement'](
            'div',
            {
              id: a && ''.concat(a, '-panel-').concat(c),
              role: 'tabpanel',
              tabIndex: s ? 0 : -1,
              'aria-labelledby': a && ''.concat(a, '-tab-').concat(c),
              'aria-hidden': !s,
              style: b(b({}, g), i),
              className: E()(
                ''.concat(t, '-tabpane'),
                s && ''.concat(t, '-tabpane-active'),
                r,
              ),
            },
            (s || m || n) && p,
          )
        )
      }
      var pi = 0
      function di(e) {
        return O(e)
          .map(function (e) {
            if (o['isValidElement'](e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0
              return b(b({ key: t }, e.props), {}, { node: e })
            }
            return null
          })
          .filter(function (e) {
            return e
          })
      }
      function fi(e, t) {
        var n,
          r,
          i = e.id,
          l = e.prefixCls,
          u = void 0 === l ? 'rc-tabs' : l,
          c = e.className,
          p = e.children,
          d = e.direction,
          m = e.activeKey,
          g = e.defaultActiveKey,
          y = e.editable,
          w = e.animated,
          O = void 0 === w ? { inkBar: !0, tabPane: !1 } : w,
          C = e.tabPosition,
          T = void 0 === C ? 'top' : C,
          A = e.tabBarGutter,
          M = e.tabBarStyle,
          x = e.tabBarExtraContent,
          N = e.locale,
          _ = e.moreIcon,
          I = e.moreTransitionName,
          R = e.destroyInactiveTabPane,
          P = e.renderTabBar,
          D = e.onChange,
          L = e.onTabClick,
          j = e.onTabScroll,
          F = v(e, [
            'id',
            'prefixCls',
            'className',
            'children',
            'direction',
            'activeKey',
            'defaultActiveKey',
            'editable',
            'animated',
            'tabPosition',
            'tabBarGutter',
            'tabBarStyle',
            'tabBarExtraContent',
            'locale',
            'moreIcon',
            'moreTransitionName',
            'destroyInactiveTabPane',
            'renderTabBar',
            'onChange',
            'onTabClick',
            'onTabScroll',
          ]),
          B = di(p),
          K = 'rtl' === d
        r =
          !1 === O
            ? { inkBar: !1, tabPane: !1 }
            : !0 === O
            ? { inkBar: !0, tabPane: !0 }
            : b({ inkBar: !0, tabPane: !1 }, 'object' === h(O) ? O : {})
        var U = Object(o['useState'])(!1),
          H = f(U, 2),
          G = H[0],
          $ = H[1]
        Object(o['useEffect'])(function () {
          $(k())
        }, [])
        var z = S(
            function () {
              var e
              return null === (e = B[0]) || void 0 === e ? void 0 : e.key
            },
            { value: m, defaultValue: g },
          ),
          W = f(z, 2),
          V = W[0],
          Y = W[1],
          X = Object(o['useState'])(function () {
            return B.findIndex(function (e) {
              return e.key === V
            })
          }),
          q = f(X, 2),
          Z = q[0],
          Q = q[1]
        Object(o['useEffect'])(
          function () {
            var e,
              t = B.findIndex(function (e) {
                return e.key === V
              })
            ;-1 === t &&
              ((t = Math.max(0, Math.min(Z, B.length - 1))),
              Y(null === (e = B[t]) || void 0 === e ? void 0 : e.key))
            Q(t)
          },
          [
            B.map(function (e) {
              return e.key
            }).join('_'),
            V,
            Z,
          ],
        )
        var J = S(null, { value: i }),
          ee = f(J, 2),
          te = ee[0],
          ne = ee[1],
          re = T
        function oe(e, t) {
          null === L || void 0 === L || L(e, t),
            Y(e),
            null === D || void 0 === D || D(e)
        }
        G && !['left', 'right'].includes(T) && (re = 'top'),
          Object(o['useEffect'])(function () {
            i || (ne('rc-tabs-'.concat(pi)), (pi += 1))
          }, [])
        var ie,
          ae = {
            id: te,
            activeKey: V,
            animated: r,
            tabPosition: re,
            rtl: K,
            mobile: G,
          },
          se = b(
            b({}, ae),
            {},
            {
              editable: y,
              locale: N,
              moreIcon: _,
              moreTransitionName: I,
              tabBarGutter: A,
              onTabClick: oe,
              onTabScroll: j,
              extra: x,
              style: M,
              panes: p,
            },
          )
        return (
          (ie = P ? P(se, li) : o['createElement'](li, se)),
          o['createElement'](
            Qo.Provider,
            { value: { tabs: B, prefixCls: u } },
            o['createElement'](
              'div',
              Object(a['a'])(
                {
                  ref: t,
                  id: i,
                  className: E()(
                    u,
                    ''.concat(u, '-').concat(re),
                    ((n = {}),
                    s(n, ''.concat(u, '-mobile'), G),
                    s(n, ''.concat(u, '-editable'), y),
                    s(n, ''.concat(u, '-rtl'), K),
                    n),
                    c,
                  ),
                },
                F,
              ),
              ie,
              o['createElement'](
                ui,
                Object(a['a'])({ destroyInactiveTabPane: R }, ae, {
                  animated: r,
                }),
              ),
            ),
          )
        )
      }
      var hi = o['forwardRef'](fi)
      hi.TabPane = ci
      var mi = hi,
        vi = mi,
        gi = n('9kvl'),
        bi = n('dEAq'),
        yi = n('ZpkN')
      n('TIsu')
      function Ei(e, t) {
        var n,
          r = null === (n = e.match(/\.(\w+)$/)) || void 0 === n ? void 0 : n[1]
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r
      }
      var wi = (e) => {
        var t,
          n,
          a,
          s = Object(o['useRef'])(),
          l = Object(o['useContext'])(bi['context']),
          u = l.locale,
          c = Object(bi['useLocaleProps'])(u, e),
          p = Object(bi['useDemoUrl'])(c.identifier),
          d = c.demoUrl || p,
          f =
            (null === gi['a'] || void 0 === gi['a']
              ? void 0
              : gi['a'].location.hash) === '#'.concat(c.identifier),
          h = 1 === Object.keys(c.sources).length,
          m = Object(bi['useCodeSandbox'])(
            null !== (t = c.hideActions) && void 0 !== t && t.includes('CSB')
              ? null
              : c,
          ),
          v = Object(bi['useRiddle'])(
            null !== (n = c.hideActions) && void 0 !== n && n.includes('RIDDLE')
              ? null
              : c,
          ),
          g = Object(bi['useMotions'])(c.motions || [], s.current),
          b = Object(r['a'])(g, 2),
          y = b[0],
          E = b[1],
          w = Object(bi['useCopy'])(),
          O = Object(r['a'])(w, 2),
          k = O[0],
          S = O[1],
          C = Object(o['useState'])('_'),
          T = Object(r['a'])(C, 2),
          A = T[0],
          M = T[1],
          x = Object(o['useState'])(Ei(A, c.sources[A])),
          N = Object(r['a'])(x, 2),
          _ = N[0],
          I = N[1],
          R = Object(o['useState'])(Boolean(c.defaultShowCode)),
          P = Object(r['a'])(R, 2),
          D = P[0],
          L = P[1],
          j = Object(o['useState'])(Math.random()),
          F = Object(r['a'])(j, 2),
          B = F[0],
          K = F[1],
          U = c.sources[A][_] || c.sources[A].content,
          H = Object(bi['useTSPlaygroundUrl'])(u, U),
          G = Object(o['useRef'])(),
          $ = Object(bi['usePrefersColor'])(),
          z = Object(r['a'])($, 1),
          W = z[0]
        function V(e) {
          M(e), I(Ei(e, c.sources[e]))
        }
        return (
          Object(o['useEffect'])(() => {
            K(Math.random())
          }, [W]),
          i.a.createElement(
            'div',
            {
              style: c.style,
              className: [
                c.className,
                '__dumi-default-previewer',
                f ? '__dumi-default-previewer-target' : '',
              ]
                .filter(Boolean)
                .join(' '),
              id: c.identifier,
              'data-debug': c.debug || void 0,
              'data-iframe': c.iframe || void 0,
            },
            c.iframe &&
              i.a.createElement('div', {
                className: '__dumi-default-previewer-browser-nav',
              }),
            i.a.createElement(
              'div',
              {
                ref: s,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: c.transform ? 'translate(0, 0)' : void 0,
                  padding:
                    c.compact || (c.iframe && !1 !== c.compact) ? '0' : void 0,
                  background: c.background,
                },
              },
              c.iframe
                ? i.a.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: {
                      height: String(c.iframe).replace(/(\d)$/, '$1px'),
                    },
                    key: B,
                    src: d,
                    ref: G,
                  })
                : c.children,
            ),
            i.a.createElement(
              'div',
              {
                className: '__dumi-default-previewer-desc',
                'data-title': c.title,
              },
              c.title &&
                i.a.createElement(
                  bi['AnchorLink'],
                  { to: '#'.concat(c.identifier) },
                  c.title,
                ),
              c.description &&
                i.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: c.description },
                }),
            ),
            i.a.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              m &&
                i.a.createElement('button', {
                  title: 'Open demo on CodeSandbox.io',
                  className: '__dumi-default-icon',
                  role: 'codesandbox',
                  onClick: m,
                }),
              v &&
                i.a.createElement('button', {
                  title: 'Open demo on Riddle',
                  className: '__dumi-default-icon',
                  role: 'riddle',
                  onClick: v,
                }),
              c.motions &&
                i.a.createElement('button', {
                  title: 'Execute motions',
                  className: '__dumi-default-icon',
                  role: 'motions',
                  disabled: E,
                  onClick: () => y(),
                }),
              c.iframe &&
                i.a.createElement('button', {
                  title: 'Reload demo iframe page',
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: () => K(Math.random()),
                }),
              !(
                null !== (a = c.hideActions) &&
                void 0 !== a &&
                a.includes('EXTERNAL')
              ) &&
                i.a.createElement(
                  bi['Link'],
                  { target: '_blank', to: d },
                  i.a.createElement('button', {
                    title: 'Open demo in new tab',
                    className: '__dumi-default-icon',
                    role: 'open-demo',
                    type: 'button',
                  }),
                ),
              i.a.createElement('span', null),
              i.a.createElement('button', {
                title: 'Copy source code',
                className: '__dumi-default-icon',
                role: 'copy',
                'data-status': S,
                onClick: () => k(U),
              }),
              'tsx' === _ &&
                D &&
                i.a.createElement(
                  bi['Link'],
                  { target: '_blank', to: H },
                  i.a.createElement('button', {
                    title: 'Get JSX via TypeScript Playground',
                    className: '__dumi-default-icon',
                    role: 'change-tsx',
                    type: 'button',
                  }),
                ),
              i.a.createElement('button', {
                title: 'Toggle source code panel',
                className: '__dumi-default-icon'.concat(
                  D ? ' __dumi-default-btn-expand' : '',
                ),
                role: 'source',
                type: 'button',
                onClick: () => L(!D),
              }),
            ),
            D &&
              i.a.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !h &&
                  i.a.createElement(
                    vi,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xb7\xb7\xb7',
                      defaultActiveKey: A,
                      onChange: V,
                    },
                    Object.keys(c.sources).map((e) =>
                      i.a.createElement(ci, {
                        tab:
                          '_' === e ? 'index.'.concat(Ei(e, c.sources[e])) : e,
                        key: e,
                      }),
                    ),
                  ),
                i.a.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  i.a.createElement(yi['a'], {
                    code: U,
                    lang: _,
                    showCopy: !1,
                  }),
                ),
              ),
          )
        )
      }
      t['default'] = wi
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0
        if (void 0 !== o) return !!o
        if (e === t) return !0
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1
        var i = Object.keys(e),
          a = Object.keys(t)
        if (i.length !== a.length) return !1
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < i.length;
          l++
        ) {
          var u = i[l]
          if (!s(u)) return !1
          var c = e[u],
            p = t[u]
          if (
            ((o = n ? n.call(r, c, p, u) : void 0),
            !1 === o || (void 0 === o && c !== p))
          )
            return !1
        }
        return !0
      }
    },
    LMrN: function (e, t, n) {},
    TIsu: function (e, t, n) {},
    TSYQ: function (e, t, n) {
      var r, o
      ;(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var o = typeof r
              if ('string' === o || 'number' === o) e.push(r)
              else if (Array.isArray(r)) {
                if (r.length) {
                  var a = i.apply(null, r)
                  a && e.push(a)
                }
              } else if ('object' === o)
                if (r.toString === Object.prototype.toString)
                  for (var s in r) n.call(r, s) && r[s] && e.push(s)
                else e.push(r.toString())
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((i['default'] = i), (e.exports = i))
          : ((r = []),
            (o = function () {
              return i
            }.apply(t, r)),
            void 0 === o || (e.exports = o))
      })()
    },
    ZpkN: function (e, t, n) {
      'use strict'
      var r = n('0Owb'),
        o = n('tJVT'),
        i = n('q1tI'),
        a = n.n(i),
        s = (function () {
          var e = 0,
            t = {
              util: {
                encode: function (e) {
                  return e instanceof n
                    ? new n(e.type, t.util.encode(e.content), e.alias)
                    : 'Array' === t.util.type(e)
                    ? e.map(t.util.encode)
                    : e
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ')
                },
                type: function (e) {
                  return Object.prototype.toString
                    .call(e)
                    .match(/\[object (\w+)\]/)[1]
                },
                objId: function (t) {
                  return (
                    t['__id'] ||
                      Object.defineProperty(t, '__id', { value: ++e }),
                    t['__id']
                  )
                },
                clone: function (e, n) {
                  var r = t.util.type(e)
                  switch (((n = n || {}), r)) {
                    case 'Object':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)]
                      i = {}
                      for (var o in ((n[t.util.objId(e)] = i), e))
                        e.hasOwnProperty(o) && (i[o] = t.util.clone(e[o], n))
                      return i
                    case 'Array':
                      if (n[t.util.objId(e)]) return n[t.util.objId(e)]
                      var i = []
                      return (
                        (n[t.util.objId(e)] = i),
                        e.forEach(function (e, r) {
                          i[r] = t.util.clone(e, n)
                        }),
                        i
                      )
                  }
                  return e
                },
              },
              languages: {
                extend: function (e, n) {
                  var r = t.util.clone(t.languages[e])
                  for (var o in n) r[o] = n[o]
                  return r
                },
                insertBefore: function (e, n, r, o) {
                  o = o || t.languages
                  var i = o[e]
                  if (2 == arguments.length) {
                    for (var a in ((r = arguments[1]), r))
                      r.hasOwnProperty(a) && (i[a] = r[a])
                    return i
                  }
                  var s = {}
                  for (var l in i)
                    if (i.hasOwnProperty(l)) {
                      if (l == n)
                        for (var a in r) r.hasOwnProperty(a) && (s[a] = r[a])
                      s[l] = i[l]
                    }
                  return (
                    t.languages.DFS(t.languages, function (t, n) {
                      n === o[e] && t != e && (this[t] = s)
                    }),
                    (o[e] = s)
                  )
                },
                DFS: function (e, n, r, o) {
                  for (var i in ((o = o || {}), e))
                    e.hasOwnProperty(i) &&
                      (n.call(e, i, e[i], r || i),
                      'Object' !== t.util.type(e[i]) || o[t.util.objId(e[i])]
                        ? 'Array' !== t.util.type(e[i]) ||
                          o[t.util.objId(e[i])] ||
                          ((o[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, i, o))
                        : ((o[t.util.objId(e[i])] = !0),
                          t.languages.DFS(e[i], n, null, o)))
                },
              },
              plugins: {},
              highlight: function (e, r, o) {
                var i = { code: e, grammar: r, language: o }
                return (
                  t.hooks.run('before-tokenize', i),
                  (i.tokens = t.tokenize(i.code, i.grammar)),
                  t.hooks.run('after-tokenize', i),
                  n.stringify(t.util.encode(i.tokens), i.language)
                )
              },
              matchGrammar: function (e, n, r, o, i, a, s) {
                var l = t.Token
                for (var u in r)
                  if (r.hasOwnProperty(u) && r[u]) {
                    if (u == s) return
                    var c = r[u]
                    c = 'Array' === t.util.type(c) ? c : [c]
                    for (var p = 0; p < c.length; ++p) {
                      var d = c[p],
                        f = d.inside,
                        h = !!d.lookbehind,
                        m = !!d.greedy,
                        v = 0,
                        g = d.alias
                      if (m && !d.pattern.global) {
                        var b = d.pattern.toString().match(/[imuy]*$/)[0]
                        d.pattern = RegExp(d.pattern.source, b + 'g')
                      }
                      d = d.pattern || d
                      for (
                        var y = o, E = i;
                        y < n.length;
                        E += n[y].length, ++y
                      ) {
                        var w = n[y]
                        if (n.length > e.length) return
                        if (!(w instanceof l)) {
                          if (m && y != n.length - 1) {
                            d.lastIndex = E
                            var O = d.exec(e)
                            if (!O) break
                            for (
                              var k = O.index + (h ? O[1].length : 0),
                                S = O.index + O[0].length,
                                C = y,
                                T = E,
                                A = n.length;
                              C < A &&
                              (T < S || (!n[C].type && !n[C - 1].greedy));
                              ++C
                            )
                              (T += n[C].length), k >= T && (++y, (E = T))
                            if (n[y] instanceof l) continue
                            ;(M = C - y), (w = e.slice(E, T)), (O.index -= E)
                          } else {
                            d.lastIndex = 0
                            O = d.exec(w)
                            var M = 1
                          }
                          if (O) {
                            h && (v = O[1] ? O[1].length : 0)
                            ;(k = O.index + v),
                              (O = O[0].slice(v)),
                              (S = k + O.length)
                            var x = w.slice(0, k),
                              N = w.slice(S),
                              _ = [y, M]
                            x && (++y, (E += x.length), _.push(x))
                            var I = new l(u, f ? t.tokenize(O, f) : O, g, O, m)
                            if (
                              (_.push(I),
                              N && _.push(N),
                              Array.prototype.splice.apply(n, _),
                              1 != M && t.matchGrammar(e, n, r, y, E, !0, u),
                              a)
                            )
                              break
                          } else if (a) break
                        }
                      }
                    }
                  }
              },
              hooks: { add: function () {}, run: function (e, t) {} },
              tokenize: function (e, n, r) {
                var o = [e],
                  i = n.rest
                if (i) {
                  for (var a in i) n[a] = i[a]
                  delete n.rest
                }
                return t.matchGrammar(e, o, n, 0, 0, !1), o
              },
            },
            n = (t.Token = function (e, t, n, r, o) {
              ;(this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (r || '').length),
                (this.greedy = !!o)
            })
          return (
            (n.stringify = function (e, r, o) {
              if ('string' == typeof e) return e
              if ('Array' === t.util.type(e))
                return e
                  .map(function (t) {
                    return n.stringify(t, r, e)
                  })
                  .join('')
              var i = {
                type: e.type,
                content: n.stringify(e.content, r, o),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: r,
                parent: o,
              }
              if (e.alias) {
                var a = 'Array' === t.util.type(e.alias) ? e.alias : [e.alias]
                Array.prototype.push.apply(i.classes, a)
              }
              var s = Object.keys(i.attributes)
                .map(function (e) {
                  return (
                    e +
                    '="' +
                    (i.attributes[e] || '').replace(/"/g, '&quot;') +
                    '"'
                  )
                })
                .join(' ')
              return (
                '<' +
                i.tag +
                ' class="' +
                i.classes.join(' ') +
                '"' +
                (s ? ' ' + s : '') +
                '>' +
                i.content +
                '</' +
                i.tag +
                '>'
              )
            }),
            t
          )
        })()
      ;(s.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': {
              pattern: /(\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
            punctuation: /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: [
          { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
          /&#x?[\da-f]{1,8};/i,
        ],
      }),
        (s.languages.markup['tag'].inside['attr-value'].inside['entity'] =
          s.languages.markup['entity']),
        (s.languages.markup['doctype'].inside['internal-subset'].inside =
          s.languages.markup),
        s.hooks.add('wrap', function (e) {
          'entity' === e.type &&
            (e.attributes['title'] = e.content.replace(/&amp;/, '&'))
        }),
        Object.defineProperty(s.languages.markup.tag, 'addInlined', {
          value: function (e, t) {
            var n = {}
            ;(n['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: s.languages[t],
            }),
              (n['cdata'] = /^<!\[CDATA\[|\]\]>$/i)
            var r = {
              'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            }
            r['language-' + t] = { pattern: /[\s\S]+/, inside: s.languages[t] }
            var o = {}
            ;(o[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e
                  },
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              s.languages.insertBefore('markup', 'cdata', o)
          },
        }),
        (s.languages.html = s.languages.markup),
        (s.languages.mathml = s.languages.markup),
        (s.languages.svg = s.languages.markup),
        (s.languages.xml = s.languages.extend('markup', {})),
        (s.languages.ssml = s.languages.xml),
        (s.languages.atom = s.languages.xml),
        (s.languages.rss = s.languages.xml),
        (function (e) {
          var t =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: 'punctuation',
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + t),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            }
          ;(e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
            ],
            environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
            variable: r.variable,
            function: {
              pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                'file-descriptor': { pattern: /^\d/, alias: 'important' },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash)
          for (
            var o = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              i = r.variable[1].inside,
              a = 0;
            a < o.length;
            a++
          )
            i[o[a]] = e.languages.bash[o[a]]
          e.languages.shell = e.languages.bash
        })(s),
        (s.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (s.languages.c = s.languages.extend('clike', {
          comment: {
            pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          function: /[a-z_]\w*(?=\s*\()/i,
          number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        s.languages.insertBefore('c', 'string', {
          macro: {
            pattern: /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                s.languages.c['string'],
              ],
              comment: s.languages.c['comment'],
              'macro-name': [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: 'function',
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: 'keyword',
              },
              'directive-hash': /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: s.languages.c },
            },
          },
          constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete s.languages.c['boolean'],
        (function (e) {
          var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/
          ;(e.languages.cpp = e.languages.extend('c', {
            'class-name': [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source
                    },
                  ),
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:true|false)\b/,
          })),
            e.languages.insertBefore('cpp', 'string', {
              'raw-string': {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: 'string',
                greedy: !0,
              },
            }),
            e.languages.insertBefore('cpp', 'class-name', {
              'base-clause': {
                pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend('cpp', {}),
              },
            }),
            e.languages.insertBefore(
              'inside',
              'operator',
              { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp['base-clause'],
            )
        })(s),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
          ;(e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' +
                  t.source +
                  '|' +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ')\\)',
                'i',
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
              },
            },
            selector: RegExp(
              '[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
                t.source +
                ')*(?=\\s*\\{)',
            ),
            string: { pattern: t, greedy: !0 },
            property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css['atrule'].inside.rest = e.languages.css)
          var n = e.languages.markup
          n &&
            (n.tag.addInlined('style', 'css'),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                  lookbehind: !0,
                  inside: {
                    'attr-value': {
                      pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                      inside: {
                        style: {
                          pattern: /(["'])[\s\S]+(?=["']$)/,
                          lookbehind: !0,
                          alias: 'language-css',
                          inside: e.languages.css,
                        },
                        punctuation: [
                          { pattern: /^=/, alias: 'attr-equals' },
                          /"|'/,
                        ],
                      },
                    },
                    'attr-name': /^style/i,
                  },
                },
              },
              n.tag,
            ))
        })(s),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
          ;(e.languages.css.selector = {
            pattern: e.languages.css.selector,
            inside: (t = {
              'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              'pseudo-class': /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  'case-sensitivity': {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: 'keyword',
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  'attr-name': {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  'attr-value': [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              'n-th': [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css['atrule'].inside[
              'selector-function-argument'
            ].inside = t),
            e.languages.insertBefore('css', 'property', {
              variable: {
                pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            })
          var r = { pattern: /(\b\d+)(?:%|[a-z]+\b)/, lookbehind: !0 },
            o = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            }
          e.languages.insertBefore('css', 'function', {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i, alias: 'color' },
            color: [
              /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
              {
                pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: o,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: o,
          })
        })(s),
        (s.languages.javascript = s.languages.extend('clike', {
          'class-name': [
            s.languages.clike['class-name'],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (s.languages.javascript[
          'class-name'
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        s.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: s.languages.regex,
              },
              'regex-flags': /[a-z]+$/,
              'regex-delimiter': /^\/|\/$/,
            },
          },
          'function-variable': {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
            {
              pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              inside: s.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        s.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\${|}$/,
                    alias: 'punctuation',
                  },
                  rest: s.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        s.languages.markup &&
          s.languages.markup.tag.addInlined('script', 'javascript'),
        (s.languages.js = s.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript)
          ;(e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside[
              'attr-value'
            ].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside['tag'].inside[
              'class-name'
            ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ },
                },
              },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                  inside: {
                    'script-punctuation': {
                      pattern: /^=(?={)/,
                      alias: 'punctuation',
                    },
                    rest: e.languages.jsx,
                  },
                  alias: 'language-javascript',
                },
              },
              e.languages.jsx.tag,
            )
          var n = function e(t) {
              return t
                ? 'string' === typeof t
                  ? t
                  : 'string' === typeof t.content
                  ? t.content
                  : t.content.map(e).join('')
                : ''
            },
            r = function t(r) {
              for (var o = [], i = 0; i < r.length; i++) {
                var a = r[i],
                  s = !1
                if (
                  ('string' !== typeof a &&
                    ('tag' === a.type &&
                    a.content[0] &&
                    'tag' === a.content[0].type
                      ? '</' === a.content[0].content[0].content
                        ? o.length > 0 &&
                          o[o.length - 1].tagName ===
                            n(a.content[0].content[1]) &&
                          o.pop()
                        : '/>' === a.content[a.content.length - 1].content ||
                          o.push({
                            tagName: n(a.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : o.length > 0 &&
                        'punctuation' === a.type &&
                        '{' === a.content
                      ? o[o.length - 1].openedBraces++
                      : o.length > 0 &&
                        o[o.length - 1].openedBraces > 0 &&
                        'punctuation' === a.type &&
                        '}' === a.content
                      ? o[o.length - 1].openedBraces--
                      : (s = !0)),
                  (s || 'string' === typeof a) &&
                    o.length > 0 &&
                    0 === o[o.length - 1].openedBraces)
                ) {
                  var l = n(a)
                  i < r.length - 1 &&
                    ('string' === typeof r[i + 1] ||
                      'plain-text' === r[i + 1].type) &&
                    ((l += n(r[i + 1])), r.splice(i + 1, 1)),
                    i > 0 &&
                      ('string' === typeof r[i - 1] ||
                        'plain-text' === r[i - 1].type) &&
                      ((l = n(r[i - 1]) + l), r.splice(i - 1, 1), i--),
                    (r[i] = new e.Token('plain-text', l, null, l))
                }
                a.content && 'string' !== typeof a.content && t(a.content)
              }
            }
          e.hooks.add('after-tokenize', function (e) {
            ;('jsx' !== e.language && 'tsx' !== e.language) || r(e.tokens)
          })
        })(s),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source
              }),
              t,
            )
          }
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' +
                  e.languages.javascript['function-variable'].pattern.source,
              ),
              lookbehind: !0,
              alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
              ],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp(
                  '(\\.\\s*)' + e.languages.javascript['function'].source,
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.insertBefore('javascript', 'keyword', {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript['keyword'].unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module',
              },
              {
                pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            })
          for (
            var n = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r],
              i = e.languages.javascript[o]
            'RegExp' === e.util.type(i) &&
              (i = e.languages.javascript[o] = { pattern: i })
            var a = i.inside || {}
            ;(i.inside = a), (a['maybe-class-name'] = /^[A-Z][\s\S]*/)
          }
        })(s),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' }
          ;(e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': {
                pattern: /###[\s\S]+?###/,
                alias: 'comment',
              },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: 'language-javascript',
                    inside: e.languages.javascript,
                  },
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: 'string',
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript)
        })(s),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          }
          var t = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          }
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              o = []
            ;/^\w+$/.test(n) || o.push(/\w+/.exec(n)[0]),
              'diff' === n && o.push('bold'),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  '^(?:[' + r + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
                  'm',
                ),
                alias: o,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              })
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: t })
        })(s),
        (s.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          'commit-sha1': /^commit \w{40}$/m,
        }),
        (s.languages.go = s.languages.extend('clike', {
          string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
        })),
        delete s.languages.go['class-name'],
        (s.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: s.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          function t(e, t) {
            return '___' + e.toUpperCase() + t + '___'
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (n, r, o, i) {
                if (n.language === r) {
                  var a = (n.tokenStack = [])
                  ;(n.code = n.code.replace(o, function (e) {
                    if ('function' === typeof i && !i(e)) return e
                    var o,
                      s = a.length
                    while (-1 !== n.code.indexOf((o = t(r, s)))) ++s
                    return (a[s] = e), o
                  })),
                    (n.grammar = e.languages.markup)
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r]
                  var o = 0,
                    i = Object.keys(n.tokenStack)
                  a(n.tokens)
                }
                function a(s) {
                  for (var l = 0; l < s.length; l++) {
                    if (o >= i.length) break
                    var u = s[l]
                    if (
                      'string' === typeof u ||
                      (u.content && 'string' === typeof u.content)
                    ) {
                      var c = i[o],
                        p = n.tokenStack[c],
                        d = 'string' === typeof u ? u : u.content,
                        f = t(r, c),
                        h = d.indexOf(f)
                      if (h > -1) {
                        ++o
                        var m = d.substring(0, h),
                          v = new e.Token(
                            r,
                            e.tokenize(p, n.grammar),
                            'language-' + r,
                            p,
                          ),
                          g = d.substring(h + f.length),
                          b = []
                        m && b.push.apply(b, a([m])),
                          b.push(v),
                          g && b.push.apply(b, a([g])),
                          'string' === typeof u
                            ? s.splice.apply(s, [l, 1].concat(b))
                            : (u.content = b)
                      }
                    } else u.content && a(u.content)
                  }
                  return s
                }
              },
            },
          })
        })(s),
        (function (e) {
          ;(e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
              lookbehind: !0,
              alias: 'keyword',
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function (t) {
              var n = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'handlebars',
                n,
              )
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(
                t,
                'handlebars',
              )
            })
        })(s),
        (s.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (s.languages.webmanifest = s.languages.json),
        (s.languages.less = s.languages.extend('css', {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        s.languages.insertBefore('less', 'property', {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          'mixin-usage': {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: 'function',
          },
        }),
        (s.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
            )
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r
              },
            ),
            i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
              .source
          ;(e.languages.markdown = e.languages.extend('markup', {})),
            e.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'font-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + o + i + '(?:' + o + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + o + i + ')(?:' + o + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + o + ')' + i + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + o + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(r),
                        alias: 'important',
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
              ;['url', 'bold', 'italic', 'strike'].forEach(function (n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n])
              })
            }),
            e.hooks.add('after-tokenize', function (e) {
              function t(e) {
                if (e && 'string' !== typeof e)
                  for (var n = 0, r = e.length; n < r; n++) {
                    var o = e[n]
                    if ('code' === o.type) {
                      var i = o.content[1],
                        a = o.content[3]
                      if (
                        i &&
                        a &&
                        'code-language' === i.type &&
                        'code-block' === a.type &&
                        'string' === typeof i.content
                      ) {
                        var s = i.content
                          .replace(/\b#/g, 'sharp')
                          .replace(/\b\+\+/g, 'pp')
                        s = (/[a-z][\w-]*/i.exec(s) || [''])[0].toLowerCase()
                        var l = 'language-' + s
                        a.alias
                          ? 'string' === typeof a.alias
                            ? (a.alias = [a.alias, l])
                            : a.alias.push(l)
                          : (a.alias = [l])
                      }
                    } else t(o.content)
                  }
              }
              ;('markdown' !== e.language && 'md' !== e.language) || t(e.tokens)
            }),
            e.hooks.add('wrap', function (t) {
              if ('code-block' === t.type) {
                for (var n = '', r = 0, o = t.classes.length; r < o; r++) {
                  var i = t.classes[r],
                    a = /language-(.+)/.exec(i)
                  if (a) {
                    n = a[1]
                    break
                  }
                }
                var s = e.languages[n]
                if (s) {
                  var l = t.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&')
                  t.content = e.highlight(l, s, n)
                } else if (n && 'none' !== n && e.plugins.autoloader) {
                  var u =
                    'md-' +
                    new Date().valueOf() +
                    '-' +
                    Math.floor(1e16 * Math.random())
                  ;(t.attributes['id'] = u),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(u)
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n,
                        ))
                    })
                }
              }
            }),
            (e.languages.md = e.languages.markdown)
        })(s),
        (s.languages.objectivec = s.languages.extend('c', {
          string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete s.languages.objectivec['class-name'],
        (s.languages.objc = s.languages.objectivec),
        (s.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
          directive: { pattern: /\B#\w+/, alias: 'important' },
          label: { pattern: /\B~\w+/, alias: 'function' },
          'type-variable': { pattern: /\B'\w+/, alias: 'function' },
          variant: { pattern: /`\w+/, alias: 'variable' },
          module: { pattern: /\b[A-Z]\w+/, alias: 'variable' },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /[(){}\[\]|.,:;]|\b_\b/,
        }),
        (s.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          'string-interpolation': {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  'format-spec': {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  'conversion-option': {
                    pattern: /![sra](?=[:}]$)/,
                    alias: 'punctuation',
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: 'string',
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/im,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (s.languages.python['string-interpolation'].inside[
          'interpolation'
        ].inside.rest = s.languages.python),
        (s.languages.py = s.languages.python),
        (s.languages.reason = s.languages.extend('clike', {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          'class-name': /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        s.languages.insertBefore('reason', 'class-name', {
          character: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: 'string',
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete s.languages.reason['function'],
        (function (e) {
          ;(e.languages.sass = e.languages.extend('css', {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ]
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern: /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            })
        })(s),
        (s.languages.scss = s.languages.extend('css', {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        s.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        s.languages.insertBefore('scss', 'important', {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        s.languages.insertBefore('scss', 'function', {
          'module-modifier': {
            pattern: /\b(?:as|with|show|hide)\b/i,
            alias: 'keyword',
          },
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: 'keyword',
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (s.languages.scss['atrule'].inside.rest = s.languages.scss),
        (s.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /url\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:true|false)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            }
          ;(r['interpolation'] = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: {
              delimiter: { pattern: /^{|}$/, alias: 'punctuation' },
              rest: r,
            },
          }),
            (r['func'] = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              'atrule-declaration': {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              'property-declaration': {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            })
        })(s),
        (function (e) {
          ;(e.languages.typescript = e.languages.extend('javascript', {
            'class-name': {
              pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
            builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
          })),
            delete e.languages.typescript['parameter']
          var t = e.languages.extend('typescript', {})
          delete t['class-name'],
            (e.languages.typescript['class-name'].inside = t),
            e.languages.insertBefore('typescript', 'function', {
              'generic-function': {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript)
        })(s),
        (function (e) {
          var t = e.util.clone(e.languages.typescript)
          e.languages.tsx = e.languages.extend('jsx', t)
          var n = e.languages.tsx.tag
          ;(n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + '(?:' + n.pattern.source + ')',
            n.pattern.flags,
          )),
            (n.lookbehind = !0)
        })(s),
        (s.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              '(?:' +
              n.source +
              '(?:[ \t]+' +
              t.source +
              ')?|' +
              t.source +
              '(?:[ \t]+' +
              n.source +
              ')?)',
            o = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
              /<PLAIN>/g,
              function () {
                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                  .source
              },
            ),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source
          function a(e, t) {
            t = (t || '').replace(/m/g, '') + 'm'
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function () {
                return r
              })
              .replace(/<<value>>/g, function () {
                return e
              })
            return RegExp(n, t)
          }
          ;(e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r
                  },
                ),
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + o + '|' + i + ')'
                  }),
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: 'important',
            },
            datetime: {
              pattern: a(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: {
              pattern: a(/true|false/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            null: {
              pattern: a(/null|~/.source, 'i'),
              lookbehind: !0,
              alias: 'important',
            },
            string: { pattern: a(i), lookbehind: !0, greedy: !0 },
            number: {
              pattern: a(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                'i',
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml)
        })(s)
      var l = s,
        u = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
              style: { color: '#6c6783' },
            },
            { types: ['namespace'], style: { opacity: 0.7 } },
            {
              types: ['tag', 'operator', 'number'],
              style: { color: '#e09142' },
            },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            {
              types: ['tag-id', 'selector', 'atrule-id'],
              style: { color: '#eeebff' },
            },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            {
              types: ['deleted'],
              style: { textDecorationLine: 'line-through' },
            },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        c = u,
        p = { Prism: l, theme: c }
      function d(e, t, n) {
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
        )
      }
      function f() {
        return (
          (f =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          f.apply(this, arguments)
        )
      }
      var h = /\r\n|\r|\n/,
        m = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length &&
              '' === e[0].content &&
              ((e[0].content = '\n'), (e[0].empty = !0))
        },
        v = function (e, t) {
          var n = e.length
          return n > 0 && e[n - 1] === t ? e : e.concat(t)
        },
        g = function (e) {
          var t = [[]],
            n = [e],
            r = [0],
            o = [e.length],
            i = 0,
            a = 0,
            s = [],
            l = [s]
          while (a > -1) {
            while ((i = r[a]++) < o[a]) {
              var u = void 0,
                c = t[a],
                p = n[a],
                d = p[i]
              if (
                ('string' === typeof d
                  ? ((c = a > 0 ? c : ['plain']), (u = d))
                  : ((c = v(c, d.type)),
                    d.alias && (c = v(c, d.alias)),
                    (u = d.content)),
                'string' === typeof u)
              ) {
                var f = u.split(h),
                  g = f.length
                s.push({ types: c, content: f[0] })
                for (var b = 1; b < g; b++)
                  m(s), l.push((s = [])), s.push({ types: c, content: f[b] })
              } else a++, t.push(c), n.push(u), r.push(0), o.push(u.length)
            }
            a--, t.pop(), n.pop(), r.pop(), o.pop()
          }
          return m(s), l
        },
        b = function (e, t) {
          var n = e.plain,
            r = Object.create(null),
            o = e.styles.reduce(function (e, n) {
              var r = n.languages,
                o = n.style
              return (
                (r && !r.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = f({}, e[t], o)
                    e[t] = n
                  }),
                e
              )
            }, r)
          return (
            (o.root = n), (o.plain = f({}, n, { backgroundColor: null })), o
          )
        }
      function y(e, t) {
        var n = {}
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            -1 === t.indexOf(r) &&
            (n[r] = e[r])
        return n
      }
      var E = (function (e) {
          function t() {
            var t = this,
              n = [],
              r = arguments.length
            while (r--) n[r] = arguments[r]
            e.apply(this, n),
              d(this, 'getThemeDict', function (e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict
                ;(t.prevTheme = e.theme), (t.prevLanguage = e.language)
                var n = e.theme ? b(e.theme, e.language) : void 0
                return (t.themeDict = n)
              }),
              d(this, 'getLineProps', function (e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  i = y(e, ['key', 'className', 'style', 'line']),
                  a = i,
                  s = f({}, a, {
                    className: 'token-line',
                    style: void 0,
                    key: void 0,
                  }),
                  l = t.getThemeDict(t.props)
                return (
                  void 0 !== l && (s.style = l.plain),
                  void 0 !== o &&
                    (s.style = void 0 !== s.style ? f({}, s.style, o) : o),
                  void 0 !== n && (s.key = n),
                  r && (s.className += ' ' + r),
                  s
                )
              }),
              d(this, 'getStyleForToken', function (e) {
                var n = e.types,
                  r = e.empty,
                  o = n.length,
                  i = t.getThemeDict(t.props)
                if (void 0 !== i) {
                  if (1 === o && 'plain' === n[0])
                    return r ? { display: 'inline-block' } : void 0
                  if (1 === o && !r) return i[n[0]]
                  var a = r ? { display: 'inline-block' } : {},
                    s = n.map(function (e) {
                      return i[e]
                    })
                  return Object.assign.apply(Object, [a].concat(s))
                }
              }),
              d(this, 'getTokenProps', function (e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  i = e.token,
                  a = y(e, ['key', 'className', 'style', 'token']),
                  s = a,
                  l = f({}, s, {
                    className: 'token ' + i.types.join(' '),
                    children: i.content,
                    style: t.getStyleForToken(i),
                    key: void 0,
                  })
                return (
                  void 0 !== o &&
                    (l.style = void 0 !== l.style ? f({}, l.style, o) : o),
                  void 0 !== n && (l.key = n),
                  r && (l.className += ' ' + r),
                  l
                )
              }),
              d(this, 'tokenize', function (e, t, n, r) {
                var o = { code: t, grammar: n, language: r, tokens: [] }
                e.hooks.run('before-tokenize', o)
                var i = (o.tokens = e.tokenize(o.code, o.grammar, o.language))
                return e.hooks.run('after-tokenize', o), i
              })
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                r = e.code,
                o = e.children,
                i = this.getThemeDict(this.props),
                a = t.languages[n],
                s = void 0 !== a ? this.tokenize(t, r, a, n) : [r],
                l = g(s)
              return o({
                tokens: l,
                className: 'prism-code language-' + n,
                style: void 0 !== i ? i.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              })
            }),
            t
          )
        })(i['Component']),
        w = E,
        O = n('dEAq')
      n('qHiR'),
        n('LMrN'),
        (t['a'] = (e) => {
          var t = e.code,
            n = e.lang,
            i = e.showCopy,
            s = void 0 === i || i,
            l = Object(O['useCopy'])(),
            u = Object(o['a'])(l, 2),
            c = u[0],
            d = u[1]
          return a.a.createElement(
            'div',
            { className: '__dumi-default-code-block' },
            a.a.createElement(
              w,
              Object(r['a'])({}, p, { code: t, language: n, theme: void 0 }),
              (e) => {
                var n = e.className,
                  r = e.style,
                  o = e.tokens,
                  i = e.getLineProps,
                  l = e.getTokenProps
                return a.a.createElement(
                  'pre',
                  { className: n, style: r },
                  s &&
                    a.a.createElement('button', {
                      className:
                        '__dumi-default-icon __dumi-default-code-block-copy-btn',
                      'data-status': d,
                      onClick: () => c(t),
                    }),
                  o.map((e, t) =>
                    a.a.createElement(
                      'div',
                      i({ line: e, key: t }),
                      e.map((e, t) =>
                        a.a.createElement('span', l({ token: e, key: t })),
                      ),
                    ),
                  ),
                )
              },
            ),
          )
        })
    },
    bdgK: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var n = (function () {
            if ('undefined' !== typeof Map) return Map
            function e(e, t) {
              var n = -1
              return (
                e.some(function (e, r) {
                  return e[0] === t && ((n = r), !0)
                }),
                n
              )
            }
            return (function () {
              function t() {
                this.__entries__ = []
              }
              return (
                Object.defineProperty(t.prototype, 'size', {
                  get: function () {
                    return this.__entries__.length
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n]
                  return r && r[1]
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t)
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n])
                }),
                (t.prototype['delete'] = function (t) {
                  var n = this.__entries__,
                    r = e(n, t)
                  ~r && n.splice(r, 1)
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t)
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0)
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null)
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n]
                    e.call(t, o[1], o[0])
                  }
                }),
                t
              )
            })()
          })(),
          r =
            'undefined' !== typeof window &&
            'undefined' !== typeof document &&
            window.document === document,
          o = (function () {
            return 'undefined' !== typeof e && e.Math === Math
              ? e
              : 'undefined' !== typeof self && self.Math === Math
              ? self
              : 'undefined' !== typeof window && window.Math === Math
              ? window
              : Function('return this')()
          })(),
          i = (function () {
            return 'function' === typeof requestAnimationFrame
              ? requestAnimationFrame.bind(o)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now())
                  }, 1e3 / 60)
                }
          })(),
          a = 2
        function s(e, t) {
          var n = !1,
            r = !1,
            o = 0
          function s() {
            n && ((n = !1), e()), r && u()
          }
          function l() {
            i(s)
          }
          function u() {
            var e = Date.now()
            if (n) {
              if (e - o < a) return
              r = !0
            } else (n = !0), (r = !1), setTimeout(l, t)
            o = e
          }
          return u
        }
        var l = 20,
          u = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight',
          ],
          c = 'undefined' !== typeof MutationObserver,
          p = (function () {
            function e() {
              ;(this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = s(this.refresh.bind(this), l))
            }
            return (
              (e.prototype.addObserver = function (e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_()
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e)
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_()
              }),
              (e.prototype.refresh = function () {
                var e = this.updateObservers_()
                e && this.refresh()
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return e.gatherActive(), e.hasActive()
                })
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive()
                  }),
                  e.length > 0
                )
              }),
              (e.prototype.connect_ = function () {
                r &&
                  !this.connected_ &&
                  (document.addEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener('resize', this.refresh),
                  c
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh,
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        'DOMSubtreeModified',
                        this.refresh,
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0))
              }),
              (e.prototype.disconnect_ = function () {
                r &&
                  this.connected_ &&
                  (document.removeEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.removeEventListener('resize', this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1))
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = void 0 === t ? '' : t,
                  r = u.some(function (e) {
                    return !!~n.indexOf(e)
                  })
                r && this.refresh()
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                )
              }),
              (e.instance_ = null),
              e
            )
          })(),
          d = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var o = r[n]
              Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              })
            }
            return e
          },
          f = function (e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView
            return t || o
          },
          h = S(0, 0, 0, 0)
        function m(e) {
          return parseFloat(e) || 0
        }
        function v(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n]
          return t.reduce(function (t, n) {
            var r = e['border-' + n + '-width']
            return t + m(r)
          }, 0)
        }
        function g(e) {
          for (
            var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
            r < o.length;
            r++
          ) {
            var i = o[r],
              a = e['padding-' + i]
            n[i] = m(a)
          }
          return n
        }
        function b(e) {
          var t = e.getBBox()
          return S(0, 0, t.width, t.height)
        }
        function y(e) {
          var t = e.clientWidth,
            n = e.clientHeight
          if (!t && !n) return h
          var r = f(e).getComputedStyle(e),
            o = g(r),
            i = o.left + o.right,
            a = o.top + o.bottom,
            s = m(r.width),
            l = m(r.height)
          if (
            ('border-box' === r.boxSizing &&
              (Math.round(s + i) !== t && (s -= v(r, 'left', 'right') + i),
              Math.round(l + a) !== n && (l -= v(r, 'top', 'bottom') + a)),
            !w(e))
          ) {
            var u = Math.round(s + i) - t,
              c = Math.round(l + a) - n
            1 !== Math.abs(u) && (s -= u), 1 !== Math.abs(c) && (l -= c)
          }
          return S(o.left, o.top, s, l)
        }
        var E = (function () {
          return 'undefined' !== typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof f(e).SVGGraphicsElement
              }
            : function (e) {
                return (
                  e instanceof f(e).SVGElement &&
                  'function' === typeof e.getBBox
                )
              }
        })()
        function w(e) {
          return e === f(e).document.documentElement
        }
        function O(e) {
          return r ? (E(e) ? b(e) : y(e)) : h
        }
        function k(e) {
          var t = e.x,
            n = e.y,
            r = e.width,
            o = e.height,
            i =
              'undefined' !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            a = Object.create(i.prototype)
          return (
            d(a, {
              x: t,
              y: n,
              width: r,
              height: o,
              top: n,
              right: t + r,
              bottom: o + n,
              left: t,
            }),
            a
          )
        }
        function S(e, t, n, r) {
          return { x: e, y: t, width: n, height: r }
        }
        var C = (function () {
            function e(e) {
              ;(this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = S(0, 0, 0, 0)),
                (this.target = e)
            }
            return (
              (e.prototype.isActive = function () {
                var e = O(this.target)
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                )
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                )
              }),
              e
            )
          })(),
          T = (function () {
            function e(e, t) {
              var n = k(t)
              d(this, { target: e, contentRect: n })
            }
            return e
          })(),
          A = (function () {
            function e(e, t, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new n()),
                'function' !== typeof e)
              )
                throw new TypeError(
                  'The callback provided as parameter 1 is not a function.',
                )
              ;(this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = r)
            }
            return (
              (e.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  )
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError('parameter 1 is not of type "Element".')
                  var t = this.observations_
                  t.has(e) ||
                    (t.set(e, new C(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh())
                }
              }),
              (e.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  )
                if (
                  'undefined' !== typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof f(e).Element))
                    throw new TypeError('parameter 1 is not of type "Element".')
                  var t = this.observations_
                  t.has(e) &&
                    (t['delete'](e),
                    t.size || this.controller_.removeObserver(this))
                }
              }),
              (e.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this)
              }),
              (e.prototype.gatherActive = function () {
                var e = this
                this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t)
                  })
              }),
              (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new T(e.target, e.broadcastRect())
                    })
                  this.callback_.call(e, t, e), this.clearActive()
                }
              }),
              (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0)
              }),
              (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0
              }),
              e
            )
          })(),
          M = 'undefined' !== typeof WeakMap ? new WeakMap() : new n(),
          x = (function () {
            function e(t) {
              if (!(this instanceof e))
                throw new TypeError('Cannot call a class as a function.')
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.')
              var n = p.getInstance(),
                r = new A(t, n, this)
              M.set(this, r)
            }
            return e
          })()
        ;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
          x.prototype[e] = function () {
            var t
            return (t = M.get(this))[e].apply(t, arguments)
          }
        })
        var N = (function () {
          return 'undefined' !== typeof o.ResizeObserver ? o.ResizeObserver : x
        })()
        t['a'] = N
      }.call(this, n('IyRk')))
    },
    cDf5: function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? ((e.exports = n = function (e) {
                return typeof e
              }),
              (e.exports['default'] = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = n = function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }),
              (e.exports['default'] = e.exports),
              (e.exports.__esModule = !0)),
          n(t)
        )
      }
      ;(e.exports = n),
        (e.exports['default'] = e.exports),
        (e.exports.__esModule = !0)
    },
    o0o1: function (e, t, n) {
      e.exports = n('VWci')
    },
    qHiR: function (e, t, n) {},
    tJVT: function (e, t, n) {
      'use strict'
      function r(e) {
        if (Array.isArray(e)) return e
      }
      function o(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(r = (a = s.next()).done);
              r = !0
            )
              if ((n.push(a.value), t && n.length === t)) break
          } catch (l) {
            ;(o = !0), (i = l)
          } finally {
            try {
              r || null == s['return'] || s['return']()
            } finally {
              if (o) throw i
            }
          }
          return n
        }
      }
      function i(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e, t) {
        if (e) {
          if ('string' === typeof e) return i(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          )
        }
      }
      function s() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function l(e, t) {
        return r(e) || o(e, t) || a(e, t) || s()
      }
      n.d(t, 'a', function () {
        return l
      })
    },
  },
])
