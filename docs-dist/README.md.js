;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
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
    gql7: function (e, n, t) {
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
              'h1',
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
              'This is a React global notification message component. It is a standalone implementation of the ',
              a.a.createElement(
                r['Link'],
                {
                  to:
                    'https://y-hui.github.io/are-visual/docs-dist/components/message',
                },
                'are-visual message',
              ),
              ' component.',
              a.a.createElement('br', null),
            ),
            a.a.createElement(
              'p',
              null,
              'Refer to some excellent open source projects (',
              a.a.createElement(
                r['Link'],
                { to: 'https://ant.design/' },
                'antd',
              ),
              ')',
            ),
            a.a.createElement(
              'h2',
              { id: 'documentation' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#documentation', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Documentation',
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
              { id: 'install' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#install', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Install',
            ),
            a.a.createElement(o['a'], {
              code:
                '# via npm\nnpm install are-message\n\n# via yarn\nyarn add are-message',
              lang: 'bash',
            }),
            a.a.createElement(
              'h2',
              { id: 'usage' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#usage', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Usage',
            ),
            a.a.createElement(o['a'], {
              code:
                "import { message } from 'are-message'\nimport 'are-message/assets/index.css' // use css or less\nimport 'are-message/assets/index.less' // use css or less",
              lang: 'ts',
            }),
            a.a.createElement(
              'h2',
              { id: 'about-name' },
              a.a.createElement(
                r['AnchorLink'],
                { to: '#about-name', 'aria-hidden': 'true', tabIndex: -1 },
                a.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'About name',
            ),
            a.a.createElement(
              'p',
              null,
              'You can call and spell ',
              a.a.createElement('code', null, 'are-message'),
              ' like this.',
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
    x2v5: function (e) {
      e.exports = JSON.parse('{}')
    },
  },
])
