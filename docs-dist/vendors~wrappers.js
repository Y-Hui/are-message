;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    '0Owb': function (e, t, a) {
      'use strict'
      function n() {
        return (
          (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t]
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
              }
              return e
            }),
          n.apply(this, arguments)
        )
      }
      a.d(t, 'a', function () {
        return n
      })
    },
    '7ZSp': function (e, t, a) {},
    JBu9: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('tJVT'),
        r = a('q1tI'),
        l = a.n(r),
        o = a('dEAq'),
        c = a('9kvl'),
        u =
          (a('OxFa'),
          (e) => {
            var t = e.location,
              a = Object(r['useContext'])(o['context']),
              n = a.base,
              u = a.locale,
              i = a.config.locales,
              s = i.find((e) => {
                var t = e.name
                return t !== u
              })
            function m(e) {
              var a = n.replace('/'.concat(u), ''),
                r = t.pathname.replace(n, a) || '/'
              if (e !== i[0].name) {
                var l = ''.concat(a, '/').concat(e).replace(/\/\//, '/'),
                  o = t.pathname.replace(n.replace(/^\/$/, '//'), '')
                return ''.concat(l).concat(o).replace(/\/$/, '')
              }
              return r
            }
            return s
              ? l.a.createElement(
                  'div',
                  {
                    className: '__dumi-default-locale-select',
                    'data-locale-count': i.length,
                  },
                  i.length > 2
                    ? l.a.createElement(
                        'select',
                        {
                          value: u,
                          onChange: (e) => c['a'].push(m(e.target.value)),
                        },
                        i.map((e) =>
                          l.a.createElement(
                            'option',
                            { value: e.name, key: e.name },
                            e.label,
                          ),
                        ),
                      )
                    : l.a.createElement(o['Link'], { to: m(s.name) }, s.label),
                )
              : null
          }),
        i = u,
        s =
          (a('jp8u'),
          (e) => {
            var t = e.onMobileMenuClick,
              a = e.navPrefix,
              n = e.location,
              c = Object(r['useContext'])(o['context']),
              u = c.base,
              s = c.config,
              m = s.mode,
              d = s.title,
              f = s.logo,
              p = c.nav
            return l.a.createElement(
              'div',
              { className: '__dumi-default-navbar', 'data-mode': m },
              l.a.createElement('button', {
                className: '__dumi-default-navbar-toggle',
                onClick: t,
              }),
              l.a.createElement(
                o['Link'],
                {
                  className: '__dumi-default-navbar-logo',
                  style: { backgroundImage: f && "url('".concat(f, "')") },
                  to: u,
                  'data-plaintext': !1 === f || void 0,
                },
                d,
              ),
              l.a.createElement(
                'nav',
                null,
                a,
                p.map((e) => {
                  var t,
                    a =
                      Boolean(
                        null === (t = e.children) || void 0 === t
                          ? void 0
                          : t.length,
                      ) &&
                      l.a.createElement(
                        'ul',
                        null,
                        e.children.map((e) =>
                          l.a.createElement(
                            'li',
                            { key: e.path },
                            l.a.createElement(
                              o['NavLink'],
                              { to: e.path },
                              e.title,
                            ),
                          ),
                        ),
                      )
                  return l.a.createElement(
                    'span',
                    { key: e.title || e.path },
                    e.path
                      ? l.a.createElement(
                          o['NavLink'],
                          { to: e.path, key: e.path },
                          e.title,
                        )
                      : e.title,
                    a,
                  )
                }),
                l.a.createElement(i, { location: n }),
              ),
            )
          }),
        m = s,
        d = a('0Owb'),
        f = a('PpiC'),
        p =
          (a('mAF5'),
          (e) => {
            var t = e.slugs,
              a = Object(f['a'])(e, ['slugs'])
            return l.a.createElement(
              'ul',
              Object(d['a'])({ role: 'slug-list' }, a),
              t
                .filter((e) => {
                  var t = e.depth
                  return t > 1 && t < 4
                })
                .map((e) =>
                  l.a.createElement(
                    'li',
                    { key: e.heading, title: e.value, 'data-depth': e.depth },
                    l.a.createElement(
                      o['AnchorLink'],
                      { to: '#'.concat(e.heading) },
                      l.a.createElement('span', null, e.value),
                    ),
                  ),
                ),
            )
          }),
        h = p,
        v =
          (a('hQjr'),
          (e) => {
            var t = e.mobileMenuCollapsed,
              a = e.location,
              n = Object(r['useContext'])(o['context']),
              c = n.config,
              u = c.logo,
              s = c.title,
              m = c.description,
              d = c.mode,
              f = c.repository.url,
              p = n.menu,
              v = n.nav,
              y = n.base,
              b = n.meta,
              g =
                Boolean((b.hero || b.features || b.gapless) && 'site' === d) ||
                !1 === b.sidemenu ||
                void 0
            return l.a.createElement(
              'div',
              {
                className: '__dumi-default-menu',
                'data-mode': d,
                'data-hidden': g,
                'data-mobile-show': !t || void 0,
              },
              l.a.createElement(
                'div',
                { className: '__dumi-default-menu-inner' },
                l.a.createElement(
                  'div',
                  { className: '__dumi-default-menu-header' },
                  l.a.createElement(o['Link'], {
                    to: y,
                    className: '__dumi-default-menu-logo',
                    style: { backgroundImage: u && "url('".concat(u, "')") },
                  }),
                  l.a.createElement('h1', null, s),
                  l.a.createElement('p', null, m),
                  /github\.com/.test(f) &&
                    'doc' === d &&
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement('object', {
                        type: 'image/svg+xml',
                        data: 'https://img.shields.io/github/stars'.concat(
                          f.match(/((\/[^\/]+){2})$/)[1],
                          '?style=social',
                        ),
                      }),
                    ),
                ),
                v.length
                  ? l.a.createElement(
                      'div',
                      { className: '__dumi-default-menu-mobile-area' },
                      l.a.createElement(
                        'ul',
                        { className: '__dumi-default-menu-nav-list' },
                        v.map((e) => {
                          var t,
                            a =
                              Boolean(
                                null === (t = e.children) || void 0 === t
                                  ? void 0
                                  : t.length,
                              ) &&
                              l.a.createElement(
                                'ul',
                                null,
                                e.children.map((e) =>
                                  l.a.createElement(
                                    'li',
                                    { key: e.path || e.title },
                                    l.a.createElement(
                                      o['NavLink'],
                                      { to: e.path },
                                      e.title,
                                    ),
                                  ),
                                ),
                              )
                          return l.a.createElement(
                            'li',
                            { key: e.path || e.title },
                            e.path
                              ? l.a.createElement(
                                  o['NavLink'],
                                  { to: e.path },
                                  e.title,
                                )
                              : e.title,
                            a,
                          )
                        }),
                      ),
                      l.a.createElement(i, { location: a }),
                    )
                  : l.a.createElement(
                      'div',
                      { className: '__dumi-default-menu-doc-locale' },
                      l.a.createElement(i, { location: a }),
                    ),
                l.a.createElement(
                  'ul',
                  { className: '__dumi-default-menu-list' },
                  !g &&
                    p.map((e) => {
                      var t,
                        n = Boolean(
                          null === (t = b.slugs) || void 0 === t
                            ? void 0
                            : t.length,
                        ),
                        r = e.children && Boolean(e.children.length),
                        c =
                          'menu' === b.toc &&
                          !r &&
                          n &&
                          e.path === a.pathname.replace(/([^^])\/$/, '$1')
                      return l.a.createElement(
                        'li',
                        { key: e.path || e.title },
                        l.a.createElement(
                          o['NavLink'],
                          {
                            to: e.path,
                            exact: !(e.children && e.children.length),
                          },
                          e.title,
                        ),
                        Boolean(e.children && e.children.length) &&
                          l.a.createElement(
                            'ul',
                            null,
                            e.children.map((e) =>
                              l.a.createElement(
                                'li',
                                { key: e.path },
                                l.a.createElement(
                                  o['NavLink'],
                                  { to: e.path, exact: !0 },
                                  l.a.createElement('span', null, e.title),
                                ),
                                Boolean(
                                  'menu' === b.toc &&
                                    'undefined' !== typeof window &&
                                    e.path === a.pathname &&
                                    n,
                                ) && l.a.createElement(h, { slugs: b.slugs }),
                              ),
                            ),
                          ),
                        c && l.a.createElement(h, { slugs: b.slugs }),
                      )
                    }),
                ),
              ),
            )
          }),
        y = v,
        b =
          (a('KAdo'),
          () => {
            var e = Object(r['useState'])(''),
              t = Object(n['a'])(e, 2),
              a = t[0],
              c = t[1],
              u = Object(r['useState'])([]),
              i = Object(n['a'])(u, 2),
              s = i[0],
              m = i[1],
              f = Object(r['useRef'])(),
              p = Object(o['useSearch'])(a)
            return (
              Object(r['useEffect'])(() => {
                Array.isArray(p)
                  ? m(p)
                  : 'function' === typeof p &&
                    p('.'.concat(f.current.className))
              }, [p]),
              l.a.createElement(
                'div',
                { className: '__dumi-default-search' },
                l.a.createElement(
                  'input',
                  Object(d['a'])(
                    {
                      className: '__dumi-default-search-input',
                      type: 'search',
                      ref: f,
                    },
                    Array.isArray(p)
                      ? { value: a, onChange: (e) => c(e.target.value) }
                      : {},
                  ),
                ),
                l.a.createElement(
                  'ul',
                  null,
                  s.map((e) => {
                    var t
                    return l.a.createElement(
                      'li',
                      { key: e.path, onClick: () => c('') },
                      l.a.createElement(
                        o['AnchorLink'],
                        { to: e.path },
                        (null === (t = e.parent) || void 0 === t
                          ? void 0
                          : t.title) &&
                          l.a.createElement('span', null, e.parent.title),
                        e.title,
                      ),
                    )
                  }),
                ),
              )
            )
          }),
        g =
          (a('7ZSp'),
          (e) =>
            l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                'div',
                { className: '__dumi-default-layout-hero' },
                e.image && l.a.createElement('img', { src: e.image }),
                l.a.createElement('h1', null, e.title),
                l.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: e.desc },
                }),
                e.actions &&
                  e.actions.map((e) =>
                    l.a.createElement(
                      o['Link'],
                      { to: e.link, key: e.text },
                      l.a.createElement('button', { type: 'button' }, e.text),
                    ),
                  ),
              ),
            )),
        E = (e) =>
          l.a.createElement(
            'div',
            { className: '__dumi-default-layout-features' },
            e.map((e) =>
              l.a.createElement(
                'dl',
                {
                  key: e.title,
                  style: {
                    backgroundImage: e.icon
                      ? 'url('.concat(e.icon, ')')
                      : void 0,
                  },
                },
                e.link
                  ? l.a.createElement(
                      o['Link'],
                      { to: e.link },
                      l.a.createElement('dt', null, e.title),
                    )
                  : l.a.createElement('dt', null, e.title),
                l.a.createElement('dd', {
                  dangerouslySetInnerHTML: { __html: e.desc },
                }),
              ),
            ),
          ),
        O = (e) => {
          var t,
            a,
            c = e.children,
            u = e.location,
            i = Object(r['useContext'])(o['context']),
            s = i.config,
            d = s.mode,
            f = s.repository,
            p = i.meta,
            v = i.locale,
            O = f.url,
            _ = f.branch,
            j = f.platform,
            k = Object(r['useState'])(!0),
            w = Object(n['a'])(k, 2),
            S = w[0],
            A = w[1],
            N = 'site' === d,
            P = N && p.hero,
            L = N && p.features,
            x = !1 !== p.sidemenu && !P && !L && !p.gapless,
            C =
              !P &&
              !L &&
              Boolean(
                null === (t = p.slugs) || void 0 === t ? void 0 : t.length,
              ) &&
              ('content' === p.toc || void 0 === p.toc) &&
              !p.gapless,
            I = /^zh|cn$/i.test(v),
            M = new Date(p.updatedTime),
            $ = ''
              .concat(M.toLocaleDateString([], { hour12: !1 }), ' ')
              .concat(M.toLocaleTimeString([], { hour12: !1 })),
            B =
              { github: 'GitHub', gitlab: 'GitLab' }[
                (null === (a = (O || '').match(/(github|gitlab)/)) ||
                void 0 === a
                  ? void 0
                  : a[1]) || 'nothing'
              ] || j
          return l.a.createElement(
            'div',
            {
              className: '__dumi-default-layout',
              'data-route': u.pathname,
              'data-show-sidemenu': String(x),
              'data-show-slugs': String(C),
              'data-site-mode': N,
              'data-gapless': String(!!p.gapless),
              onClick: () => {
                S || A(!0)
              },
            },
            l.a.createElement(m, {
              location: u,
              navPrefix: l.a.createElement(b, null),
              onMobileMenuClick: (e) => {
                A((e) => !e), e.stopPropagation()
              },
            }),
            l.a.createElement(y, { mobileMenuCollapsed: S, location: u }),
            C &&
              l.a.createElement(h, {
                slugs: p.slugs,
                className: '__dumi-default-layout-toc',
              }),
            P && g(p.hero),
            L && E(p.features),
            l.a.createElement(
              'div',
              { className: '__dumi-default-layout-content' },
              c,
              !P &&
                !L &&
                p.filePath &&
                !p.gapless &&
                l.a.createElement(
                  'div',
                  { className: '__dumi-default-layout-footer-meta' },
                  B &&
                    l.a.createElement(
                      o['Link'],
                      {
                        to: ''
                          .concat(O, '/edit/')
                          .concat(_, '/')
                          .concat(p.filePath),
                      },
                      I
                        ? '\u5728 '.concat(B, ' \u4e0a\u7f16\u8f91\u6b64\u9875')
                        : 'Edit this doc on '.concat(B),
                    ),
                  l.a.createElement(
                    'span',
                    {
                      'data-updated-text': I
                        ? '\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a'
                        : 'Last update: ',
                    },
                    $,
                  ),
                ),
              (P || L) &&
                p.footer &&
                l.a.createElement('div', {
                  className: '__dumi-default-layout-footer',
                  dangerouslySetInnerHTML: { __html: p.footer },
                }),
            ),
          )
        }
      t['default'] = O
    },
    KAdo: function (e, t, a) {},
    KcUY: function (e, t, a) {
      'use strict'
      function n(e) {
        return (
          (n =
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
          n(e)
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t['default'] = void 0)
      var r = s(a('q1tI')),
        l = u(a('q3YX')),
        o = u(a('bYHP')),
        c = u(a('nLCz'))
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (i = function () {
            return e
          }),
          e
        )
      }
      function s(e) {
        if (e && e.__esModule) return e
        if (null === e || ('object' !== n(e) && 'function' !== typeof e))
          return { default: e }
        var t = i()
        if (t && t.has(e)) return t.get(e)
        var a = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var l in e)
          if (Object.prototype.hasOwnProperty.call(e, l)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, l) : null
            o && (o.get || o.set)
              ? Object.defineProperty(a, l, o)
              : (a[l] = e[l])
          }
        return (a['default'] = e), t && t.set(e, a), a
      }
      function m(e, t) {
        return v(e) || h(e, t) || f(e, t) || d()
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function f(e, t) {
        if (e) {
          if ('string' === typeof e) return p(e, t)
          var a = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? p(e, t)
              : void 0
          )
        }
      }
      function p(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a]
        return n
      }
      function h(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var a = [],
            n = !0,
            r = !1,
            l = void 0
          try {
            for (
              var o, c = e[Symbol.iterator]();
              !(n = (o = c.next()).done);
              n = !0
            )
              if ((a.push(o.value), t && a.length === t)) break
          } catch (u) {
            ;(r = !0), (l = u)
          } finally {
            try {
              n || null == c['return'] || c['return']()
            } finally {
              if (r) throw l
            }
          }
          return a
        }
      }
      function v(e) {
        if (Array.isArray(e)) return e
      }
      function y(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(a), !0).forEach(function (t) {
                g(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : y(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t),
                )
              })
        }
        return e
      }
      function g(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        )
      }
      var E = function (e, t) {
          var a = function () {
              for (
                var e, a = arguments.length, n = new Array(a), r = 0;
                r < a;
                r++
              )
                n[r] = arguments[r]
              var l = n[1].replace(/([^^])\/$/, '$1')
              return b(
                b(
                  {},
                  (null ===
                    (e = n[0].find(function (e) {
                      var t = e.path
                      return t === l
                    })) || void 0 === e
                    ? void 0
                    : e.meta) || {},
                ),
                {},
                { __pathname: t },
              )
            },
            n = (0, r.useState)(a(e, t)),
            l = m(n, 2),
            o = l[0],
            c = l[1]
          return (
            (0, r.useLayoutEffect)(
              function () {
                c(a(e, t))
              },
              [t],
            ),
            o
          )
        },
        O = function (e, t) {
          var a = function () {
              for (
                var t, a = arguments.length, n = new Array(a), r = 0;
                r < a;
                r++
              )
                n[r] = arguments[r]
              return (
                (null ===
                  (t = n[0].find(function (e) {
                    return n[1].startsWith('/'.concat(e.name))
                  })) || void 0 === t
                  ? void 0
                  : t.name) || e[0].name
              )
            },
            n = (0, r.useState)(a(e, t)),
            l = m(n, 2),
            o = l[0],
            c = l[1]
          return (
            (0, r.useLayoutEffect)(
              function () {
                c(a(e, t))
              },
              [t],
            ),
            o
          )
        },
        _ = function (e, t, a) {
          var n = function () {
              for (
                var e, t = arguments.length, a = new Array(t), n = 0;
                n < t;
                n++
              )
                a[n] = arguments[n]
              for (
                var r = a[0].navs[a[1]] || [], l = '*', o = r.length - 1;
                o >= 0;
                o -= 1
              ) {
                var c = r[o],
                  u = [c].concat(c.children).filter(Boolean),
                  i = u.find(function (e) {
                    return (
                      e.path &&
                      new RegExp(
                        '^'.concat(e.path.replace(/\.html$/, ''), '(/|.|$)'),
                      ).test(a[2])
                    )
                  })
                if (i) {
                  l = i.path
                  break
                }
              }
              return (
                (null === (e = a[0].menus[a[1]]) || void 0 === e
                  ? void 0
                  : e[l]) || []
              )
            },
            l = (0, r.useState)(n(e, t, a)),
            o = m(l, 2),
            c = o[0],
            u = o[1]
          return (
            (0, r.useLayoutEffect)(
              function () {
                u(n(e, t, a))
              },
              [e.navs, e.menus, t, a],
            ),
            c
          )
        },
        j = function (e, t, a) {
          var n = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r]
              return n[0] === n[1][0].name
                ? n[2].path
                : ''.concat(a.path, '/').concat(e).replace(/\/\//, '/')
            },
            l = (0, r.useState)(n(e, t, a)),
            o = m(l, 2),
            c = o[0],
            u = o[1]
          return (
            (0, r.useLayoutEffect)(
              function () {
                u(n(e, t, a))
              },
              [e],
            ),
            c
          )
        },
        k = function e(t) {
          var a
          return null ===
            (a = t.find(function (t) {
              return !!t.__dumiRoot || (!!t.routes && e(t.routes))
            })) || void 0 === a
            ? void 0
            : a.routes
        },
        w = function (e) {
          var t = e.location,
            a = e.route,
            n = e.children,
            u = t.pathname.replace(a.path.replace(/^\/$/, '//'), ''),
            i = k(e.routes) || [],
            s = E(i, t.pathname),
            m = O(l['default'].locales, u),
            d = _(l['default'], m, t.pathname),
            f = j(m, l['default'].locales, a)
          return (
            (0, r.useEffect)(function () {
              t.hash &&
                o['default'].scrollToAnchor(decodeURIComponent(t.hash.slice(1)))
            }, []),
            r['default'].createElement(
              c['default'].Provider,
              {
                value: {
                  config: l['default'],
                  meta: s,
                  locale: m,
                  nav: l['default'].navs[m] || [],
                  menu: d,
                  base: f,
                  routes: i,
                },
              },
              s.__pathname === t.pathname && n,
            )
          )
        },
        S = w
      t['default'] = S
    },
    OxFa: function (e, t, a) {},
    PpiC: function (e, t, a) {
      'use strict'
      function n(e, t) {
        if (null == e) return {}
        var a,
          n,
          r = {},
          l = Object.keys(e)
        for (n = 0; n < l.length; n++)
          (a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
        return r
      }
      function r(e, t) {
        if (null == e) return {}
        var a,
          r,
          l = n(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (a = o[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (l[a] = e[a]))
        }
        return l
      }
      a.d(t, 'a', function () {
        return r
      })
    },
    hQjr: function (e, t, a) {},
    jp8u: function (e, t, a) {},
    mAF5: function (e, t, a) {},
    tJVT: function (e, t, a) {
      'use strict'
      function n(e) {
        if (Array.isArray(e)) return e
      }
      function r(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var a = [],
            n = !0,
            r = !1,
            l = void 0
          try {
            for (
              var o, c = e[Symbol.iterator]();
              !(n = (o = c.next()).done);
              n = !0
            )
              if ((a.push(o.value), t && a.length === t)) break
          } catch (u) {
            ;(r = !0), (l = u)
          } finally {
            try {
              n || null == c['return'] || c['return']()
            } finally {
              if (r) throw l
            }
          }
          return a
        }
      }
      function l(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a]
        return n
      }
      function o(e, t) {
        if (e) {
          if ('string' === typeof e) return l(e, t)
          var a = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === a && e.constructor && (a = e.constructor.name),
            'Map' === a || 'Set' === a
              ? Array.from(e)
              : 'Arguments' === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? l(e, t)
              : void 0
          )
        }
      }
      function c() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function u(e, t) {
        return n(e) || r(e, t) || o(e, t) || c()
      }
      a.d(t, 'a', function () {
        return u
      })
    },
  },
])
