;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    '9kvl': function (e, n, t) {
      'use strict'
      var s = t('FfOG')
      t.d(n, 'a', function () {
        return s['b']
      })
      var r = t('bCY9')
      t.d(n, 'b', function () {
        return r['a']
      })
    },
    F4QJ: function (e, n, t) {
      'use strict'
      function s() {
        var e = o(t('q1tI'))
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      function r() {
        var e = t('dEAq')
        return (
          (r = function () {
            return e
          }),
          e
        )
      }
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function a(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e)
          n &&
            (s = s.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, s)
        }
        return t
      }
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                c(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                )
              })
        }
        return e
      }
      function c(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        )
      }
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n['default'] = void 0)
      var u = function (e, n) {
        var t = [],
          o = e.match.params.uuid,
          a = void 0 === e.location.query.wrapper,
          c = n[o]
        if (c) {
          var u = i(
            i({}, c.previewerProps),
            {},
            {
              hideActions: (c.previewerProps.hideActions || []).concat([
                'EXTERNAL',
              ]),
            },
          )
          void 0 !== e.location.query.capture &&
            ((u.motions = (u.motions || []).slice()),
            u.motions.unshift('autoplay'),
            u.motions.every(function (e) {
              return !e.startsWith('capture')
            }) && u.motions.push('capture:[id|=root]')),
            (t = a
              ? [
                  s()['default'].createElement(function () {
                    return (
                      (0, r().useMotions)(
                        u.motions || [],
                        document.documentElement,
                      ),
                      s()['default'].createElement(
                        'div',
                        {},
                        s()['default'].createElement(c.component),
                      )
                    )
                  }),
                ]
              : [u, s()['default'].createElement(c.component)])
        }
        return t
      }
      n['default'] = u
    },
    Rsk4: function (e, n, t) {
      'use strict'
      t.r(n)
      var s = t('9og8'),
        r = t('WmNS'),
        o = t.n(r),
        a = t('LtsZ'),
        i =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nconst BasicDemo = () => {\n  const showMessage = () => {\n    message.open('Hello Are Vision.')\n  }\n\n  return <button onClick={showMessage}>Show Message</button>\n}\n\nexport default BasicDemo",
        c =
          '@AreMessageClassName: are-message;\n\n.@{AreMessageClassName} {\n  position: fixed;\n  top: 20px;\n  right: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n\n  &-item-wrap {\n    position: relative;\n    padding: 8px;\n    text-align: center;\n  }\n\n  &-item {\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 8px 24px;\n    border: 1px solid #eaeaea;\n    background-color: #fff;\n    font-size: 14px;\n    line-height: 1.5715;\n    pointer-events: all;\n    border-radius: 999px;\n    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);\n  }\n}',
        u =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nexport default () => {\n  const keepDisplay = () => {\n    message.open('Keep display message.', 0)\n  }\n\n  const fiveSeconds = () => {\n    message.open('Five seconds message.', 5000)\n  }\n\n  const manualShutdown = () => {\n    const close = message.open('Message can be closed manually.', 0)\n    setTimeout(close, 1000)\n  }\n\n  return (\n    <>\n      <button onClick={keepDisplay}>Keep display</button>\n      <button onClick={fiveSeconds}>Five seconds</button>\n      <button onClick={manualShutdown}>Manual shutdown</button>\n    </>\n  )\n}",
        p =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nconst key = 'LOADING_MESSAGE_KEY'\n\nexport default () => {\n  const loading = () => {\n    message.open({\n      id: key,\n      content: 'Loading...',\n      duration: 0,\n    })\n\n    // update\n    setTimeout(() => {\n      message.open({\n        id: key,\n        content: 'Loaded!',\n        duration: 300,\n      })\n    }, 2000)\n  }\n  return <button onClick={loading}>Update</button>\n}",
        l =
          "import React from 'react'\nimport { useMessage } from 'are-message'\nimport '../../assets/index.less'\n\nconst Context = React.createContext('default')\nconst { Provider, Consumer } = Context\n\nconst HookDemo = () => {\n  const [msg, MessageHolder] = useMessage()\n  const showHookMessage = () => {\n    msg.open(<Consumer>{(value) => value}</Consumer>)\n  }\n\n  return (\n    <Provider value=\"This's the message from the hook.\">\n      <button onClick={showHookMessage}>Hook Message</button>\n      {MessageHolder}\n    </Provider>\n  )\n}\n\nexport default HookDemo",
        d =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nconst PromiseDemo = () => {\n  const showMessage = () => {\n    message\n      .open('First message.')\n      .then(() =>\n        message.open({\n          content: (\n            <p\n              style={{\n                margin: 0,\n                textTransform: 'uppercase',\n                fontWeight: 'bold',\n                color: '#f00',\n              }}\n            >\n              Second message.\n            </p>\n          ),\n          duration: 2000,\n        }),\n      )\n      .then(() => {\n        message.open('Promise chain call completed :)', 2000)\n      })\n  }\n\n  return (\n    <>\n      <button onClick={showMessage}>Promise call.</button>\n    </>\n  )\n}\n\nexport default PromiseDemo",
        m =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nexport default () => {\n  const clear = () => {\n    message.clearAll()\n  }\n\n  return <button onClick={clear}>Clear all</button>\n}"
      n['default'] = {
        'docs-basic': {
          component: Object(a['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(2)]).then(
                              t.bind(null, '+ufn'),
                            )
                          )
                        case 2:
                          return e.abrupt('return', e.sent.default)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              function n() {
                return e.apply(this, arguments)
              }
              return n
            })(),
          }),
          previewerProps: {
            sources: {
              _: { tsx: i },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-basic',
          },
        },
        'docs-duration': {
          component: Object(a['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(2)]).then(
                              t.bind(null, 'YoEN'),
                            )
                          )
                        case 2:
                          return e.abrupt('return', e.sent.default)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              function n() {
                return e.apply(this, arguments)
              }
              return n
            })(),
          }),
          previewerProps: {
            sources: {
              _: { tsx: u },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-duration',
          },
        },
        'docs-update': {
          component: Object(a['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(2)]).then(
                              t.bind(null, 'WsYC'),
                            )
                          )
                        case 2:
                          return e.abrupt('return', e.sent.default)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              function n() {
                return e.apply(this, arguments)
              }
              return n
            })(),
          }),
          previewerProps: {
            sources: {
              _: { tsx: p },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-update',
          },
        },
        'docs-hook': {
          component: Object(a['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(2)]).then(
                              t.bind(null, '52fG'),
                            )
                          )
                        case 2:
                          return e.abrupt('return', e.sent.default)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              function n() {
                return e.apply(this, arguments)
              }
              return n
            })(),
          }),
          previewerProps: {
            sources: {
              _: { tsx: l },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-hook',
          },
        },
        'docs-promise': {
          component: Object(a['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(2)]).then(
                              t.bind(null, 'btNl'),
                            )
                          )
                        case 2:
                          return e.abrupt('return', e.sent.default)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              function n() {
                return e.apply(this, arguments)
              }
              return n
            })(),
          }),
          previewerProps: {
            sources: {
              _: { tsx: d },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-promise',
          },
        },
        'docs-clear': {
          component: Object(a['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(2)]).then(
                              t.bind(null, 'w60M'),
                            )
                          )
                        case 2:
                          return e.abrupt('return', e.sent.default)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              function n() {
                return e.apply(this, arguments)
              }
              return n
            })(),
          }),
          previewerProps: {
            sources: {
              _: { tsx: m },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-clear',
          },
        },
      }
    },
    x2v5: function (e) {
      e.exports = JSON.parse('{}')
    },
  },
])
