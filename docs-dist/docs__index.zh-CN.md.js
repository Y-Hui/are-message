;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    '9kvl': function (e, n, t) {
      'use strict'
      var s = t('FfOG')
      t.d(n, 'a', function () {
        return s['b']
      })
      var a = t('bCY9')
      t.d(n, 'b', function () {
        return a['a']
      })
    },
    'QrP+': function (e, n, t) {
      'use strict'
      t.r(n)
      var s = t('q1tI'),
        a = t.n(s),
        r = t('dEAq'),
        o = t('ZpkN')
      t('Rsk4')
      n['default'] = function () {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'div',
            { className: 'markdown' },
            a.a.createElement(
              'h2',
              { id: 'are-message' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#are-message', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'are-message',
            ),
            a.a.createElement(
              'p',
              null,
              '\u8fd9\u662f\u4e00\u4e2a React \u5168\u5c40\u63d0\u793a\u6d88\u606f\u7ec4\u4ef6\u3002\u5b83\u662f ',
              a.a.createElement(
                r['Link'],
                {
                  to:
                    'https://y-hui.github.io/are-visual/docs-dist/zh-CN/components/message',
                },
                'are-visual',
              ),
              ' message \u7ec4\u4ef6\u7684\u72ec\u7acb\u5b9e\u73b0\u3002',
              a.a.createElement('br', null),
              '\u5f00\u53d1\u7ec4\u4ef6\u5e93\u65f6\u53c2\u8003\u4e86\u4e00\u4e9b\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee (',
              a.a.createElement(
                r['Link'],
                { to: 'https://ant.design/' },
                'antd',
              ),
              ')',
            ),
            a.a.createElement(
              'h2',
              { id: '\u6587\u6863' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#\u6587\u6863', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6587\u6863',
            ),
            a.a.createElement(
              'p',
              null,
              a.a.createElement(
                r['Link'],
                { to: 'https://y-hui.github.io/are-message/docs-dist/' },
                'English Doc',
              ),
              a.a.createElement('br', null),
              a.a.createElement(
                r['Link'],
                { to: 'https://y-hui.github.io/are-message/docs-dist/zh-CN/' },
                '\u4e2d\u6587\u6587\u6863',
              ),
              a.a.createElement('br', null),
            ),
            a.a.createElement(
              'h2',
              { id: '\u5b89\u88c5' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#\u5b89\u88c5', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5b89\u88c5',
            ),
            a.a.createElement(o['a'], {
              code:
                '# \u901a\u8fc7 npm \u5b89\u88c5\nnpm install are-message\n\n# \u901a\u8fc7 yarn \u5b89\u88c5\nyarn add are-message',
              lang: 'bash',
            }),
            a.a.createElement(
              'h2',
              { id: '\u4f7f\u7528' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4f7f\u7528',
            ),
            a.a.createElement(o['a'], {
              code:
                "import { message } from 'are-message'\nimport 'are-message/assets/index.css' // \u5f15\u5165\u6837\u5f0f css \u6216 less \u5747\u53ef\nimport 'are-message/assets/index.less' // \u5f15\u5165\u6837\u5f0f css \u6216 less \u5747\u53ef",
              lang: 'ts',
            }),
            a.a.createElement(
              'h2',
              { id: '\u5173\u4e8e\u540d\u5b57' },
              a.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u5173\u4e8e\u540d\u5b57',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5173\u4e8e\u540d\u5b57',
            ),
            a.a.createElement(
              'p',
              null,
              '\u4f60\u53ef\u4ee5\u8fd9\u6837\u79f0\u547c\u548c\u62fc\u5199 ',
              a.a.createElement('code', null, 'are-message'),
              '\uff1a',
            ),
            a.a.createElement(
              'ul',
              null,
              a.a.createElement('li', null, 'are-message'),
            ),
            a.a.createElement(
              'p',
              null,
              'ps: I am not sure this is a good open source project, but i am using it.',
            ),
          ),
        )
      }
    },
    Rsk4: function (e, n, t) {
      'use strict'
      t.r(n)
      var s = t('9og8'),
        a = t('WmNS'),
        r = t.n(a),
        o = t('LtsZ'),
        i =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nconst BasicDemo = () => {\n  const showMessage = () => {\n    message.open('Hello Are Vision.')\n  }\n\n  return <button onClick={showMessage}>Show Message</button>\n}\n\nexport default BasicDemo",
        c =
          '@AreMessageClassName: are-message;\n\n.@{AreMessageClassName} {\n  position: fixed;\n  top: 20px;\n  right: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n\n  &-item-wrap {\n    position: relative;\n    padding: 8px;\n    text-align: center;\n  }\n\n  &-item {\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 8px 24px;\n    border: 1px solid #eaeaea;\n    background-color: #fff;\n    font-size: 14px;\n    line-height: 1.5715;\n    pointer-events: all;\n    border-radius: 999px;\n    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);\n  }\n}',
        l =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nexport default () => {\n  const keepDisplay = () => {\n    message.open('Keep display message.', 0)\n  }\n\n  const fiveSeconds = () => {\n    message.open('Five seconds message.', 5000)\n  }\n\n  const manualShutdown = () => {\n    const close = message.open('Message can be closed manually.', 0)\n    setTimeout(close, 1000)\n  }\n\n  return (\n    <>\n      <button onClick={keepDisplay}>Keep display</button>\n      <button onClick={fiveSeconds}>Five seconds</button>\n      <button onClick={manualShutdown}>Manual shutdown</button>\n    </>\n  )\n}",
        m =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nconst key = 'LOADING_MESSAGE_KEY'\n\nexport default () => {\n  const loading = () => {\n    message.open({\n      id: key,\n      content: 'Loading...',\n      duration: 0,\n    })\n\n    // update\n    setTimeout(() => {\n      message.open({\n        id: key,\n        content: 'Loaded!',\n        duration: 300,\n      })\n    }, 2000)\n  }\n  return <button onClick={loading}>Update</button>\n}",
        u =
          "import React from 'react'\nimport { useMessage } from 'are-message'\nimport '../../assets/index.less'\n\nconst Context = React.createContext('default')\nconst { Provider, Consumer } = Context\n\nconst HookDemo = () => {\n  const [msg, MessageHolder] = useMessage()\n  const showHookMessage = () => {\n    msg.open(<Consumer>{(value) => value}</Consumer>)\n  }\n\n  return (\n    <Provider value=\"This's the message from the hook.\">\n      <button onClick={showHookMessage}>Hook Message</button>\n      {MessageHolder}\n    </Provider>\n  )\n}\n\nexport default HookDemo",
        d =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nconst PromiseDemo = () => {\n  const showMessage = () => {\n    message\n      .open('First message.')\n      .then(() =>\n        message.open({\n          content: (\n            <p\n              style={{\n                margin: 0,\n                textTransform: 'uppercase',\n                fontWeight: 'bold',\n                color: '#f00',\n              }}\n            >\n              Second message.\n            </p>\n          ),\n          duration: 2000,\n        }),\n      )\n      .then(() => {\n        message.open('Promise chain call completed :)', 2000)\n      })\n  }\n\n  return (\n    <>\n      <button onClick={showMessage}>Promise call.</button>\n    </>\n  )\n}\n\nexport default PromiseDemo",
        p =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nexport default () => {\n  const clear = () => {\n    message.clearAll()\n  }\n\n  return <button onClick={clear}>Clear all</button>\n}"
      n['default'] = {
        'docs-basic': {
          component: Object(o['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(10), t.e(4)]).then(
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
              'are-message': { version: '0.1.1' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-basic',
          },
        },
        'docs-duration': {
          component: Object(o['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(10), t.e(4)]).then(
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
              _: { tsx: l },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.1' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-duration',
          },
        },
        'docs-update': {
          component: Object(o['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(10), t.e(4)]).then(
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
              _: { tsx: m },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.1' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-update',
          },
        },
        'docs-hook': {
          component: Object(o['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(10), t.e(4)]).then(
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
              _: { tsx: u },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.1' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-hook',
          },
        },
        'docs-promise': {
          component: Object(o['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(10), t.e(4)]).then(
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
              'are-message': { version: '0.1.1' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-promise',
          },
        },
        'docs-clear': {
          component: Object(o['dynamic'])({
            loader: (function () {
              var e = Object(s['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(10), t.e(4)]).then(
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
              _: { tsx: p },
              'assets/index.less': {
                import: '../../assets/index.less',
                content: c,
              },
            },
            dependencies: {
              react: { version: '>=16.9.0' },
              'are-message': { version: '0.1.1' },
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
