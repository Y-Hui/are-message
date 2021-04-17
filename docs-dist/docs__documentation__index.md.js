;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    '9kvl': function (e, n, t) {
      'use strict'
      var a = t('FfOG')
      t.d(n, 'a', function () {
        return a['b']
      })
      var l = t('bCY9')
      t.d(n, 'b', function () {
        return l['a']
      })
    },
    BSo1: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        l = t.n(a),
        r = t('dEAq'),
        s = t('0zqC'),
        o = t('ZpkN'),
        c = t('Rsk4'),
        i = l.a.memo(c['default']['docs-basic'].component),
        m = l.a.memo(c['default']['docs-duration'].component),
        u = l.a.memo(c['default']['docs-update'].component),
        d = l.a.memo(c['default']['docs-hook'].component),
        p = l.a.memo(c['default']['docs-promise'].component),
        E = l.a.memo(c['default']['docs-clear'].component)
      n['default'] = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h2',
                { id: 'message' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#message', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Message',
              ),
              l.a.createElement(
                'h3',
                { id: 'basic' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#basic', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Basic',
              ),
            ),
            l.a.createElement(
              s['default'],
              c['default']['docs-basic'].previewerProps,
              l.a.createElement(i, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: 'set-display-duration' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#set-display-duration',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Set display duration',
              ),
              l.a.createElement(
                'p',
                null,
                'By default, messages are displayed for 3000 milliseconds. You can change the duration by passing a second parameter, which is always displayed if the value is 0.',
              ),
            ),
            l.a.createElement(
              s['default'],
              c['default']['docs-duration'].previewerProps,
              l.a.createElement(m, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: 'update' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#update', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Update',
              ),
              l.a.createElement('p', null, 'Specify id for updating.'),
            ),
            l.a.createElement(
              s['default'],
              c['default']['docs-update'].previewerProps,
              l.a.createElement(u, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: 'relevant-context' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#relevant-context',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Relevant context',
              ),
              l.a.createElement(
                'p',
                null,
                'Create a ',
                l.a.createElement('code', null, 'message'),
                ' with the ',
                l.a.createElement('code', null, 'useMessage'),
                ' hooks, associated with the current context.',
              ),
            ),
            l.a.createElement(
              s['default'],
              c['default']['docs-hook'].previewerProps,
              l.a.createElement(d, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: 'chain-call' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#chain-call', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Chain call',
              ),
            ),
            l.a.createElement(
              s['default'],
              c['default']['docs-promise'].previewerProps,
              l.a.createElement(p, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: 'use-clearall-to-clear-all' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#use-clearall-to-clear-all',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Use ',
                l.a.createElement('code', null, 'clearAll'),
                ' to clear all',
              ),
            ),
            l.a.createElement(
              s['default'],
              c['default']['docs-clear'].previewerProps,
              l.a.createElement(E, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h3',
                { id: 'about-clearall' },
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '#about-clearall',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'About ',
                l.a.createElement('code', null, 'clearAll'),
              ),
              l.a.createElement(
                'p',
                null,
                'This function clears the prompt message for the ',
                l.a.createElement('code', null, 'message instance'),
                '. Returns the ',
                l.a.createElement('code', null, 'message'),
                ' instance.',
              ),
              l.a.createElement(o['a'], {
                code:
                  "import { message } from 'are-message'\n\nmessage.clearAll()\n\n// chain call\nmessage.clearAll().open('Callback')",
                lang: 'ts',
              }),
              l.a.createElement('p', null, 'Chain call:'),
              l.a.createElement(o['a'], {
                code:
                  "import { message } from 'are-message'\n\nmessage.clearAll().open('Chain call')",
                lang: 'ts',
              }),
              l.a.createElement('br', null),
              l.a.createElement(
                'p',
                null,
                'If you use ',
                l.a.createElement('code', null, 'useMessage'),
                ' then you should write something like this.',
              ),
              l.a.createElement(o['a'], {
                code:
                  "import { useMessage } from 'are-message'\n\nexport default () => {\n  const [msg, MessageHolder] = useMessage()\n  return (\n    <>\n      <button onClick={() => msg.clear()}>Clear</button>\n      {MessageHolder}\n    </>\n  )\n}",
                lang: 'ts',
              }),
              l.a.createElement(
                'p',
                null,
                l.a.createElement('code', null, 'useMessage'),
                ' Hook and ',
                l.a.createElement('code', null, 'message'),
                ' do not share internal data except for the same usage. Therefore, a message created by ',
                l.a.createElement('code', null, 'useMessage'),
                ' Hook cannot be closed and cleared by the ',
                l.a.createElement('code', null, 'message'),
                ' function, and vice versa.',
              ),
              l.a.createElement(
                'h3',
                { id: 'api' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'API',
              ),
              l.a.createElement(
                'ul',
                null,
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement('code', null, 'message.open(options)'),
                  ),
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      'message.open(content, [duration], [props])',
                    ),
                  ),
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      'message.clearAll(content, [duration], [props])',
                    ),
                  ),
                ),
                l.a.createElement(
                  'li',
                  null,
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      'message.destroy(content, [duration], [props])',
                    ),
                  ),
                ),
              ),
              l.a.createElement(
                'p',
                null,
                'The return value of the ',
                l.a.createElement('code', null, 'open'),
                ' function is a close function.',
              ),
              l.a.createElement(o['a'], {
                code:
                  "import { message } from 'are-message'\n\nconst MsgKey = 'DEMO'\n\nconst close = message.open({\n  id: MsgKey,\n  content: 'Info Message',\n  duration: 0,\n})\n\nsetTimeout(() => {\n  // Call close to close it\n  close()\n}, 3000)\n\n// Or use `destroy` to close it\nmessage.destroy(MsgKey)",
                lang: 'ts',
              }),
              l.a.createElement('br', null),
              l.a.createElement('br', null),
              l.a.createElement(
                'p',
                null,
                l.a.createElement(
                  'strong',
                  null,
                  'Note: Once the message function of ',
                  l.a.createElement('code', null, 'Chain Call'),
                  ' is used, the ',
                  l.a.createElement('code', null, 'close'),
                  ' function is not supported.',
                ),
              ),
              l.a.createElement(o['a'], {
                code:
                  "import { message } from 'are-message'\n\n// Error: Ths close is undefined\nconst close = message.open('Info Message', 0).then(() => {\n  console.log('Callback')\n})",
                lang: 'ts',
              }),
              l.a.createElement(
                'p',
                null,
                'Each alias function inherits a ',
                l.a.createElement('code', null, 'PromiseLike'),
                ' type for its return type, and calls to the ',
                l.a.createElement('code', null, 'then'),
                ' function return a true ',
                l.a.createElement('code', null, 'Promise'),
                ', this is how ',
                l.a.createElement('code', null, 'Are'),
                ' implements chain calls. When the ',
                l.a.createElement('code', null, 'then'),
                ' function is called, there is no such ',
                l.a.createElement('code', null, 'close'),
                ' function left in the return value. So the ',
                l.a.createElement('code', null, 'Chain call'),
                ' and the ',
                l.a.createElement('code', null, 'close'),
                ' function can only be one or the other, not both.',
              ),
              l.a.createElement(
                'h3',
                { id: 'options' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#options', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'Options',
              ),
              l.a.createElement(
                'table',
                null,
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('th', null, 'Props'),
                    l.a.createElement('th', null, 'Description'),
                    l.a.createElement('th', null, 'Required'),
                    l.a.createElement('th', null, 'Type'),
                    l.a.createElement('th', null, 'Default'),
                  ),
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'id'),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'Message'),
                      ' Unique ID.',
                    ),
                    l.a.createElement('td', null),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'number'),
                      ' | ',
                      l.a.createElement('code', null, 'string'),
                    ),
                    l.a.createElement('td', null),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'className'),
                    l.a.createElement('td', null, 'className'),
                    l.a.createElement('td', null),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'string'),
                    ),
                    l.a.createElement('td', null),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'style'),
                    l.a.createElement('td', null, 'style'),
                    l.a.createElement('td', null),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'CSSProperties'),
                    ),
                    l.a.createElement('td', null),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'content'),
                    l.a.createElement('td', null, 'message content'),
                    l.a.createElement('td', null, 'YES'),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'ReactNode'),
                    ),
                    l.a.createElement('td', null),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'duration'),
                    l.a.createElement(
                      'td',
                      null,
                      'Display duration (ms)',
                      l.a.createElement('br', null),
                      ' If the value is ',
                      l.a.createElement('code', null, '0'),
                      ', it is always displayed.',
                    ),
                    l.a.createElement('td', null),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, 'number'),
                    ),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, '3000'),
                    ),
                  ),
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement('td', null, 'onClose'),
                    l.a.createElement(
                      'td',
                      null,
                      'Specify a function that will be called when the message is closed.',
                    ),
                    l.a.createElement('td', null),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, '() => void'),
                    ),
                    l.a.createElement('td', null),
                  ),
                ),
              ),
            ),
          ),
        )
      }
    },
    Rsk4: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('9og8'),
        l = t('WmNS'),
        r = t.n(l),
        s = t('LtsZ'),
        o =
          "import React from 'react'\nimport { message } from 'are-message'\nimport '../../assets/index.less'\n\nconst BasicDemo = () => {\n  const showMessage = () => {\n    message.open('Hello Are Vision.')\n  }\n\n  return <button onClick={showMessage}>Show Message</button>\n}\n\nexport default BasicDemo",
        c =
          '@AreMessageClassName: are-message;\n\n.@{AreMessageClassName} {\n  position: fixed;\n  top: 20px;\n  right: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n\n  &-item-wrap {\n    position: relative;\n    padding: 8px;\n    text-align: center;\n  }\n\n  &-item {\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 8px 24px;\n    border: 1px solid #eaeaea;\n    background-color: #fff;\n    font-size: 14px;\n    line-height: 1.5715;\n    pointer-events: all;\n    border-radius: 999px;\n    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);\n  }\n}',
        i =
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
          component: Object(s['dynamic'])({
            loader: (function () {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(3)]).then(
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
              _: { tsx: o },
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
          component: Object(s['dynamic'])({
            loader: (function () {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(3)]).then(
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
            identifier: 'docs-duration',
          },
        },
        'docs-update': {
          component: Object(s['dynamic'])({
            loader: (function () {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(3)]).then(
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
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-update',
          },
        },
        'docs-hook': {
          component: Object(s['dynamic'])({
            loader: (function () {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(3)]).then(
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
              'are-message': { version: '0.1.0' },
              'react-dom': { version: '>=16.9.0' },
            },
            identifier: 'docs-hook',
          },
        },
        'docs-promise': {
          component: Object(s['dynamic'])({
            loader: (function () {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(3)]).then(
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
          component: Object(s['dynamic'])({
            loader: (function () {
              var e = Object(a['a'])(
                r.a.mark(function e() {
                  return r.a.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Promise.all([t.e(9), t.e(3)]).then(
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
