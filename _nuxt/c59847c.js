;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    109: function (t, e, n) {
      'use strict'
      e.a = {}
    },
    111: function (t, e, n) {
      n(41)
      var r = n(200)
      function o() {
        return (o = r(
          regeneratorRuntime.mark(function t() {
            var e, r, o
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!(!1 in navigator)) {
                      t.next = 2
                      break
                    }
                    throw new Error(
                      'serviceWorker is not supported in current browser!'
                    )
                  case 2:
                    return (t.next = 4), n.e(6).then(n.bind(null, 227))
                  case 4:
                    return (
                      (e = t.sent),
                      (r = e.Workbox),
                      (o = new r('/PortfolioNuxtJS/sw.js', {
                        scope: '/PortfolioNuxtJS/',
                      })),
                      (t.next = 9),
                      o.register()
                    )
                  case 9:
                    return t.abrupt('return', o)
                  case 10:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      window.$workbox = (function () {
        return o.apply(this, arguments)
      })().catch(function (t) {})
    },
    156: function (t, e, n) {
      'use strict'
      n(1), n(41)
      var r = n(11),
        o = n(7),
        c = n(8),
        f = window.__NUXT__
      function l() {
        if (!this._hydrated) return this.$fetch()
      }
      function h() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t
          ;(this._hydrated = !0),
            (this._fetchKey = +this.$vnode.elm.dataset.fetchKey)
          var data = f.fetch[this._fetchKey]
          if (data && data._error) this.$fetchState.error = data._error
          else for (var e in data) o.default.set(this.$data, e, data[e])
        }
      }
      function d() {
        var t = this
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function () {
              delete t._fetchPromise
            })),
          this._fetchPromise
        )
      }
      function m() {
        return x.apply(this, arguments)
      }
      function x() {
        return (x = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      )
                    case 9:
                      t.next = 15
                      break
                    case 11:
                      ;(t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0))
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19
                        break
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, r)
                        })
                      )
                    case 19:
                      ;(this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--
                        })
                    case 23:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this,
              [[6, 11]]
            )
          })
        )).apply(this, arguments)
      }
      e.a = {
        beforeCreate: function () {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              'number' == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.default.util.defineReactive(this, '$fetchState', {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = d.bind(this)),
            Object(c.a)(this, 'created', h),
            Object(c.a)(this, 'beforeMount', l))
        },
      }
    },
    159: function (t, e, n) {
      t.exports = n(160)
    },
    160: function (t, e, n) {
      'use strict'
      n.r(e),
        function (t) {
          n(56), n(2), n(52), n(19), n(20), n(45)
          var e = n(30),
            r = (n(41), n(130), n(11)),
            o =
              (n(98),
              n(99),
              n(3),
              n(1),
              n(4),
              n(14),
              n(131),
              n(170),
              n(177),
              n(179),
              n(7)),
            c = n(151),
            f = n(109),
            l = n(8),
            h = n(35),
            d = n(156),
            m = n(91)
          function x(t, e) {
            var n
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return
                  if ('string' == typeof t) return v(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  'Object' === n && t.constructor && (n = t.constructor.name)
                  if ('Map' === n || 'Set' === n) return Array.from(t)
                  if (
                    'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return v(t, e)
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                n && (t = n)
                var i = 0,
                  r = function () {}
                return {
                  s: r,
                  n: function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] }
                  },
                  e: function (t) {
                    throw t
                  },
                  f: r,
                }
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            }
            var o,
              c = !0,
              f = !1
            return {
              s: function () {
                n = t[Symbol.iterator]()
              },
              n: function () {
                var t = n.next()
                return (c = t.done), t
              },
              e: function (t) {
                ;(f = !0), (o = t)
              },
              f: function () {
                try {
                  c || null == n.return || n.return()
                } finally {
                  if (f) throw o
                }
              },
            }
          }
          function v(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
            return n
          }
          o.default.__nuxt__fetch__mixin__ ||
            (o.default.mixin(d.a), (o.default.__nuxt__fetch__mixin__ = !0)),
            o.default.component(m.a.name, m.a),
            o.default.component('NLink', m.a),
            t.fetch || (t.fetch = c.a)
          var y,
            w,
            _ = [],
            $ = window.__NUXT__ || {}
          Object.assign(o.default.config, { silent: !0, performance: !1 })
          var O = o.default.config.errorHandler || console.error
          function j(t, e, n) {
            for (
              var r = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {}
                      var option = component.options[t]
                      if ('function' == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r]
                        return option.apply(void 0, n)
                      }
                      return option
                    })(component, 'transition', e, n) || {}
                  return 'string' == typeof t ? { name: t } : t
                },
                o = n ? Object(l.g)(n) : [],
                c = Math.max(t.length, o.length),
                f = [],
                h = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]))
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes('leave')
                      )
                    })
                    .forEach(function (t) {
                      n[t] = e[t]
                    }),
                    f.push(n)
                },
                i = 0;
              i < c;
              i++
            )
              h(i)
            return f
          }
          function k(t, e, n) {
            return C.apply(this, arguments)
          }
          function C() {
            return (C = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  f,
                  h,
                  d = this
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(y.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(l.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12
                            break
                          }
                          return (
                            (t.next = 9),
                            Object(l.r)(e, function (t, e) {
                              return { Component: t, instance: e }
                            })
                          )
                        case 9:
                          ;(o = t.sent),
                            o.some(function (t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return d._diffQuery[t]
                                    })
                                  : 'function' == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              )
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start()
                        case 12:
                          r(), (t.next = 26)
                          break
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (f =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (h = c.message || ''),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                          ) {
                            t.next = 23
                            break
                          }
                          return window.location.reload(!0), t.abrupt('return')
                        case 23:
                          this.error({ statusCode: f, message: h }),
                            this.$nuxt.$emit('routeChanged', e, n, c),
                            r()
                        case 26:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                )
              })
            )).apply(this, arguments)
          }
          function S(t, e) {
            return $.serverRendered && e && Object(l.b)(t, e), (t._Ctor = t), t
          }
          function P(t) {
            var path = Object(l.f)(t.options.base, t.options.mode)
            return Object(l.d)(
              t.match(path),
              (function () {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var f
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof e || e.options) {
                              t.next = 4
                              break
                            }
                            return (t.next = 3), e()
                          case 3:
                            e = t.sent
                          case 4:
                            return (
                              (f = S(
                                Object(l.s)(e),
                                $.data ? $.data[c] : null
                              )),
                              (r.components[o] = f),
                              t.abrupt('return', f)
                            )
                          case 7:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, n, r, o, c) {
                  return t.apply(this, arguments)
                }
              })()
            )
          }
          function E(t, e, n) {
            var r = this,
              o = [],
              c = !1
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(l.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware))
                })),
              (o = o.map(function (t) {
                return 'function' == typeof t
                  ? t
                  : ('function' != typeof f.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: 'Unknown middleware ' + t,
                      })),
                    f.a[t])
              })),
              !c)
            )
              return Object(l.o)(o, e)
          }
          function R(t, e, n) {
            return A.apply(this, arguments)
          }
          function A() {
            return (A = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, o) {
                var c,
                  f,
                  d,
                  m,
                  v,
                  w,
                  $,
                  O,
                  k,
                  C,
                  S,
                  P,
                  R,
                  A,
                  T,
                  N = this
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2
                            break
                          }
                          return t.abrupt('return', o())
                        case 2:
                          return (
                            !1,
                            e === n
                              ? ((_ = []), !0)
                              : ((c = []),
                                (_ = Object(l.g)(n, c).map(function (t, i) {
                                  return Object(l.c)(n.matched[c[i]].path)(
                                    n.params
                                  )
                                }))),
                            (f = !1),
                            (d = function (path) {
                              n.path === path.path &&
                                N.$loading.finish &&
                                N.$loading.finish(),
                                n.path !== path.path &&
                                  N.$loading.pause &&
                                  N.$loading.pause(),
                                f || ((f = !0), o(path))
                            }),
                            (t.next = 8),
                            Object(l.t)(y, {
                              route: e,
                              from: n,
                              next: d.bind(this),
                            })
                          )
                        case 8:
                          if (
                            ((this._dateLastError = y.nuxt.dateErr),
                            (this._hadError = Boolean(y.nuxt.err)),
                            (m = []),
                            (v = Object(l.g)(e, m)).length)
                          ) {
                            t.next = 27
                            break
                          }
                          return (t.next = 15), E.call(this, v, y.context)
                        case 15:
                          if (!f) {
                            t.next = 17
                            break
                          }
                          return t.abrupt('return')
                        case 17:
                          return (
                            (w = (h.a.options || h.a).layout),
                            (t.next = 20),
                            this.loadLayout(
                              'function' == typeof w
                                ? w.call(h.a, y.context)
                                : w
                            )
                          )
                        case 20:
                          return (
                            ($ = t.sent),
                            (t.next = 23),
                            E.call(this, v, y.context, $)
                          )
                        case 23:
                          if (!f) {
                            t.next = 25
                            break
                          }
                          return t.abrupt('return')
                        case 25:
                          return (
                            y.context.error({
                              statusCode: 404,
                              message: 'This page could not be found',
                            }),
                            t.abrupt('return', o())
                          )
                        case 27:
                          return (
                            v.forEach(function (t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch))
                            }),
                            this.setTransitions(j(v, e, n)),
                            (t.prev = 29),
                            (t.next = 32),
                            E.call(this, v, y.context)
                          )
                        case 32:
                          if (!f) {
                            t.next = 34
                            break
                          }
                          return t.abrupt('return')
                        case 34:
                          if (!y.context._errored) {
                            t.next = 36
                            break
                          }
                          return t.abrupt('return', o())
                        case 36:
                          return (
                            'function' == typeof (O = v[0].options.layout) &&
                              (O = O(y.context)),
                            (t.next = 40),
                            this.loadLayout(O)
                          )
                        case 40:
                          return (
                            (O = t.sent),
                            (t.next = 43),
                            E.call(this, v, y.context, O)
                          )
                        case 43:
                          if (!f) {
                            t.next = 45
                            break
                          }
                          return t.abrupt('return')
                        case 45:
                          if (!y.context._errored) {
                            t.next = 47
                            break
                          }
                          return t.abrupt('return', o())
                        case 47:
                          ;(k = !0),
                            (t.prev = 48),
                            (C = x(v)),
                            (t.prev = 50),
                            C.s()
                        case 52:
                          if ((S = C.n()).done) {
                            t.next = 63
                            break
                          }
                          if (
                            'function' == typeof (P = S.value).options.validate
                          ) {
                            t.next = 56
                            break
                          }
                          return t.abrupt('continue', 61)
                        case 56:
                          return (t.next = 58), P.options.validate(y.context)
                        case 58:
                          if ((k = t.sent)) {
                            t.next = 61
                            break
                          }
                          return t.abrupt('break', 63)
                        case 61:
                          t.next = 52
                          break
                        case 63:
                          t.next = 68
                          break
                        case 65:
                          ;(t.prev = 65), (t.t0 = t.catch(50)), C.e(t.t0)
                        case 68:
                          return (t.prev = 68), C.f(), t.finish(68)
                        case 71:
                          t.next = 77
                          break
                        case 73:
                          return (
                            (t.prev = 73),
                            (t.t1 = t.catch(48)),
                            this.error({
                              statusCode: t.t1.statusCode || '500',
                              message: t.t1.message,
                            }),
                            t.abrupt('return', o())
                          )
                        case 77:
                          if (k) {
                            t.next = 80
                            break
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: 'This page could not be found',
                            }),
                            t.abrupt('return', o())
                          )
                        case 80:
                          return (
                            (t.next = 82),
                            Promise.all(
                              v.map(
                                (function () {
                                  var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, i) {
                                      var o, c, f, h, d, x, v, w, p
                                      return regeneratorRuntime.wrap(function (
                                        t
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (
                                                ((r._path = Object(l.c)(
                                                  e.matched[m[i]].path
                                                )(e.params)),
                                                (r._dataRefresh = !1),
                                                (o = r._path !== _[i]),
                                                N._routeChanged && o
                                                  ? (r._dataRefresh = !0)
                                                  : N._paramChanged && o
                                                  ? ((c = r.options.watchParam),
                                                    (r._dataRefresh = !1 !== c))
                                                  : N._queryChanged &&
                                                    (!0 ===
                                                    (f = r.options.watchQuery)
                                                      ? (r._dataRefresh = !0)
                                                      : Array.isArray(f)
                                                      ? (r._dataRefresh = f.some(
                                                          function (t) {
                                                            return N._diffQuery[
                                                              t
                                                            ]
                                                          }
                                                        ))
                                                      : 'function' ==
                                                          typeof f &&
                                                        (R ||
                                                          (R = Object(l.h)(e)),
                                                        (r._dataRefresh = f.apply(
                                                          R[i],
                                                          [e.query, n.query]
                                                        )))),
                                                N._hadError ||
                                                  !N._isMounted ||
                                                  r._dataRefresh)
                                              ) {
                                                t.next = 6
                                                break
                                              }
                                              return t.abrupt('return')
                                            case 6:
                                              return (
                                                (h = []),
                                                (d =
                                                  r.options.asyncData &&
                                                  'function' ==
                                                    typeof r.options.asyncData),
                                                (x =
                                                  Boolean(r.options.fetch) &&
                                                  r.options.fetch.length),
                                                (v = d && x ? 30 : 45),
                                                d &&
                                                  ((w = Object(l.q)(
                                                    r.options.asyncData,
                                                    y.context
                                                  )).then(function (t) {
                                                    Object(l.b)(r, t),
                                                      N.$loading.increase &&
                                                        N.$loading.increase(v)
                                                  }),
                                                  h.push(w)),
                                                (N.$loading.manual =
                                                  !1 === r.options.loading),
                                                x &&
                                                  (((p = r.options.fetch(
                                                    y.context
                                                  )) &&
                                                    (p instanceof Promise ||
                                                      'function' ==
                                                        typeof p.then)) ||
                                                    (p = Promise.resolve(p)),
                                                  p.then(function (t) {
                                                    N.$loading.increase &&
                                                      N.$loading.increase(v)
                                                  }),
                                                  h.push(p)),
                                                t.abrupt(
                                                  'return',
                                                  Promise.all(h)
                                                )
                                              )
                                            case 14:
                                            case 'end':
                                              return t.stop()
                                          }
                                      },
                                      t)
                                    })
                                  )
                                  return function (e, n) {
                                    return t.apply(this, arguments)
                                  }
                                })()
                              )
                            )
                          )
                        case 82:
                          f ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            o()),
                            (t.next = 99)
                          break
                        case 85:
                          if (
                            ((t.prev = 85),
                            (t.t2 = t.catch(29)),
                            'ERR_REDIRECT' !== (A = t.t2 || {}).message)
                          ) {
                            t.next = 90
                            break
                          }
                          return t.abrupt(
                            'return',
                            this.$nuxt.$emit('routeChanged', e, n, A)
                          )
                        case 90:
                          return (
                            (_ = []),
                            Object(l.k)(A),
                            'function' ==
                              typeof (T = (h.a.options || h.a).layout) &&
                              (T = T(y.context)),
                            (t.next = 96),
                            this.loadLayout(T)
                          )
                        case 96:
                          this.error(A),
                            this.$nuxt.$emit('routeChanged', e, n, A),
                            o()
                        case 99:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71],
                  ]
                )
              })
            )).apply(this, arguments)
          }
          function T(t, n) {
            Object(l.d)(t, function (t, n, r, c) {
              return (
                'object' !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.default.extend(t))._Ctor = t),
                  (r.components[c] = t)),
                t
              )
            })
          }
          function N(t) {
            var e = Boolean(this.$options.nuxt.err)
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1)
            var n = e
              ? (h.a.options || h.a).layout
              : t.matched[0].components.default.options.layout
            'function' == typeof n && (n = n(y.context)), this.setLayout(n)
          }
          function D(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error()
          }
          function L(t, e) {
            var n = this
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(l.h)(t),
                c = Object(l.g)(t)
              o.default.nextTick(function () {
                r.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    'function' == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t)
                    for (var n in e) o.default.set(t.$data, n, e[n])
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit('triggerScroll')
                    })
                  }
                }),
                  D(n)
              })
            }
          }
          function I(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              'function' == typeof e && e(t)
            }),
              'function' == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              w.afterEach(function (e, n) {
                o.default.nextTick(function () {
                  return t.$nuxt.$emit('routeChanged', e, n)
                })
              })
          }
          function F() {
            return (F = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, f, h
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (y = e.app),
                          (w = e.router),
                          e.store,
                          (n = new o.default(y)),
                          (r = $.layout || 'default'),
                          (t.next = 7),
                          n.loadLayout(r)
                        )
                      case 7:
                        return (
                          n.setLayout(r),
                          (c = function () {
                            n.$mount('#__nuxt'),
                              w.afterEach(T),
                              w.afterEach(N.bind(n)),
                              w.afterEach(L.bind(n)),
                              o.default.nextTick(function () {
                                I(n)
                              })
                          }),
                          (t.next = 11),
                          Promise.all(P(w))
                        )
                      case 11:
                        if (
                          ((f = t.sent),
                          (n.setTransitions = n.$options.nuxt.setTransitions.bind(
                            n
                          )),
                          f.length &&
                            (n.setTransitions(j(f, w.currentRoute)),
                            (_ = w.currentRoute.matched.map(function (t) {
                              return Object(l.c)(t.path)(w.currentRoute.params)
                            }))),
                          (n.$loading = {}),
                          $.error && n.error($.error),
                          w.beforeEach(k.bind(n)),
                          w.beforeEach(R.bind(n)),
                          !$.serverRendered ||
                            !Object(l.n)($.routePath, n.context.route.path))
                        ) {
                          t.next = 20
                          break
                        }
                        return t.abrupt('return', c())
                      case 20:
                        return (
                          (h = function () {
                            T(w.currentRoute, w.currentRoute),
                              N.call(n, w.currentRoute),
                              D(n),
                              c()
                          }),
                          (t.next = 23),
                          new Promise(function (t) {
                            return setTimeout(t, 0)
                          })
                        )
                      case 23:
                        R.call(n, w.currentRoute, w.currentRoute, function (
                          path
                        ) {
                          if (path) {
                            var t = w.afterEach(function (e, n) {
                              t(), h()
                            })
                            w.push(path, void 0, function (t) {
                              t && O(t)
                            })
                          } else h()
                        })
                      case 24:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )).apply(this, arguments)
          }
          Object(h.b)(null, $.config)
            .then(function (t) {
              return F.apply(this, arguments)
            })
            .catch(O)
        }.call(this, n(33))
    },
    187: function (t, e, n) {
      'use strict'
      var r = n(83)
      n.n(r).a
    },
    188: function (t, e, n) {
      ;(e = n(48)(!1)).push([
        t.i,
        '.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}',
        '',
      ]),
        (t.exports = e)
    },
    189: function (t, e, n) {
      'use strict'
      var r = n(84)
      n.n(r).a
    },
    190: function (t, e, n) {
      ;(e = n(48)(!1)).push([
        t.i,
        '.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}',
        '',
      ]),
        (t.exports = e)
    },
    197: function (t, e, n) {
      'use strict'
      var r = n(85)
      n.n(r).a
    },
    198: function (t, e, n) {
      ;(e = n(48)(!1)).push([
        t.i,
        'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}body{background-color:#010d26;color:#fff}',
        '',
      ]),
        (t.exports = e)
    },
    199: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'state', function () {
          return r
        })
      var r = function () {
        return {
          bgcolor: '#00162e',
          accolor: '#52F2C5',
          colorList: ['#52F2C5', '#05AFF2'],
          flashColorList: [
            '#52F2C5',
            '#05AFF2',
            '#52F2C5',
            '#05AFF2',
            '#52F2C5',
            '#05AFF2',
            '#52F2C5',
            '#05AFF2',
          ],
          duration: 500,
          delay: 1500,
          rotateDuration: 1e3,
          perDelay: 100,
          titleOffset: 1e3,
        }
      }
    },
    35: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return _t
      }),
        n.d(e, 'a', function () {
          return E
        })
      n(41), n(5), n(2), n(3), n(1), n(4)
      var r = n(11),
        o = n(0),
        c = (n(14), n(7)),
        f = n(66),
        l = n(152),
        h = n(110),
        d = n.n(h),
        m = n(55),
        x = n.n(m),
        v = n(68),
        y = n(8)
      'scrollRestoration' in window.history &&
        ((window.history.scrollRestoration = 'manual'),
        window.addEventListener('beforeunload', function () {
          window.history.scrollRestoration = 'auto'
        }),
        window.addEventListener('load', function () {
          window.history.scrollRestoration = 'manual'
        }))
      var w = function () {},
        _ = v.a.prototype.push
      ;(v.a.prototype.push = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
          n = arguments.length > 2 ? arguments[2] : void 0
        return _.call(this, t, e, n)
      }),
        c.default.use(v.a)
      var $ = {
        mode: 'history',
        base: decodeURI('/PortfolioNuxtJS/'),
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        scrollBehavior: function (t, e, n) {
          var r = !1,
            o = Object(y.g)(t)
          ;(o.some(function (t) {
            return t.options.scrollToTop
          }) ||
            (o.length < 2 &&
              o.every(function (t) {
                return !1 !== t.options.scrollToTop
              }))) &&
            (r = { x: 0, y: 0 }),
            n && (r = n)
          var c = window.$nuxt
          return (
            ((t.path === e.path && t.hash !== e.hash) || t === e) &&
              c.$nextTick(function () {
                return c.$emit('triggerScroll')
              }),
            new Promise(function (e) {
              c.$once('triggerScroll', function () {
                if (t.hash) {
                  var n = t.hash
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = '#' + window.CSS.escape(n.substr(1)))
                  try {
                    document.querySelector(n) && (r = { selector: n })
                  } catch (t) {
                    console.warn(
                      'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
                    )
                  }
                }
                e(r)
              })
            })
          )
        },
        routes: [
          {
            path: '/',
            component: function () {
              return Object(y.m)(
                Promise.all([n.e(5), n.e(2)]).then(n.bind(null, 250))
              )
            },
            name: 'index',
          },
        ],
        fallback: !1,
      }
      function O() {
        return new v.a($)
      }
      var j = {
          name: 'NuxtChild',
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: '' },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement
            data.nuxtChild = !0
            for (
              var c = n,
                f = n.$nuxt.nuxt.transitions,
                l = n.$nuxt.nuxt.defaultTransition,
                h = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && h++, (n = n.$parent)
            data.nuxtChildDepth = h
            var d = f[h] || l,
              m = {}
            k.forEach(function (t) {
              void 0 !== d[t] && (m[t] = d[t])
            })
            var x = {}
            C.forEach(function (t) {
              'function' == typeof d[t] && (x[t] = d[t].bind(c))
            })
            var v = x.beforeEnter
            if (
              ((x.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit('triggerScroll')
                  }),
                  v)
                )
                  return v.call(c, t)
              }),
              !1 === d.css)
            ) {
              var y = x.leave
              ;(!y || y.length < 2) &&
                (x.leave = function (t, e) {
                  y && y.call(c, t), c.$nextTick(e)
                })
            }
            var w = o('routerView', data)
            return (
              r.keepAlive &&
                (w = o('keep-alive', { props: r.keepAliveProps }, [w])),
              o('transition', { props: m, on: x }, [w])
            )
          },
        },
        k = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass',
        ],
        C = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled',
        ],
        S = {
          name: 'NuxtError',
          props: { error: { type: Object, default: null } },
          computed: {
            statusCode: function () {
              return (this.error && this.error.statusCode) || 500
            },
            message: function () {
              return this.error.message || 'Error'
            },
          },
          head: function () {
            return {
              title: this.message,
              meta: [
                {
                  name: 'viewport',
                  content:
                    'width=device-width,initial-scale=1.0,minimum-scale=1.0',
                },
              ],
            }
          },
        },
        P = (n(187), n(47)),
        E = Object(P.a)(
          S,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', { staticClass: '__nuxt-error-page' }, [
              n('div', { staticClass: 'error' }, [
                n(
                  'svg',
                  {
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '90',
                      height: '90',
                      fill: '#DBE1EC',
                      viewBox: '0 0 48 48',
                    },
                  },
                  [
                    n('path', {
                      attrs: {
                        d:
                          'M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z',
                      },
                    }),
                  ]
                ),
                t._v(' '),
                n('div', { staticClass: 'title' }, [t._v(t._s(t.message))]),
                t._v(' '),
                404 === t.statusCode
                  ? n(
                      'p',
                      { staticClass: 'description' },
                      [
                        void 0 === t.$route
                          ? n('a', {
                              staticClass: 'error-link',
                              attrs: { href: '/' },
                            })
                          : n(
                              'NuxtLink',
                              { staticClass: 'error-link', attrs: { to: '/' } },
                              [t._v('Back to the home page')]
                            ),
                      ],
                      1
                    )
                  : t._e(),
                t._v(' '),
                t._m(0),
              ]),
            ])
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'logo' }, [
                e(
                  'a',
                  {
                    attrs: {
                      href: 'https://nuxtjs.org',
                      target: '_blank',
                      rel: 'noopener',
                    },
                  },
                  [this._v('Nuxt.js')]
                ),
              ])
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        R = (n(19), n(20), n(10), n(29)),
        A = {
          name: 'Nuxt',
          components: { NuxtChild: j, NuxtError: E },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: 'default' },
          },
          errorCaptured: function (t) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = t), this.$forceUpdate())
          },
          computed: {
            routerViewKey: function () {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(y.c)(this.$route.matched[0].path)(this.$route.params)
                )
              var t = Object(R.a)(this.$route.matched, 1)[0]
              if (!t) return this.$route.path
              var e = t.components.default
              if (e && e.options) {
                var n = e.options
                if (n.key)
                  return 'function' == typeof n.key ? n.key(this.$route) : n.key
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, '')
            },
          },
          beforeCreate: function () {
            c.default.util.defineReactive(
              this,
              'nuxt',
              this.$root.$options.nuxt
            )
          },
          render: function (t) {
            var e = this
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function () {
                    return (e.errorFromNuxtError = !1)
                  }),
                  t('div', {}, [
                    t('h2', 'An error occurred while showing the error page'),
                    t(
                      'p',
                      'Unfortunately an error occurred and while showing the error page another error occurred'
                    ),
                    t(
                      'p',
                      'Error details: '.concat(
                        this.errorFromNuxtError.toString()
                      )
                    ),
                    t('nuxt-link', { props: { to: '/' } }, 'Go back to home'),
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function () {
                    return (e.displayingNuxtError = !1)
                  }),
                  t(E, { props: { error: this.nuxt.err } }))
              : t('NuxtChild', { key: this.routerViewKey, props: this.$props })
          },
        },
        T =
          (n(56),
          n(52),
          n(45),
          {
            name: 'NuxtLoading',
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              }
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? '0px'
                      : 'auto'
                    : this.reversed
                    ? 'auto'
                    : '0px')
                )
              },
            },
            beforeDestroy: function () {
              this.clear()
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null)
              },
              start: function () {
                var t = this
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer()
                      }, this.throttle))
                    : this.startTimer(),
                  this
                )
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                )
              },
              get: function () {
                return this.percent
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                )
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                )
              },
              pause: function () {
                return clearInterval(this._timer), this
              },
              resume: function () {
                return this.startTimer(), this
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                )
              },
              hide: function () {
                var t = this
                return (
                  this.clear(),
                  setTimeout(function () {
                    ;(t.show = !1),
                      t.$nextTick(function () {
                        ;(t.percent = 0), (t.reversed = !1)
                      })
                  }, 500),
                  this
                )
              },
              fail: function (t) {
                return (this.canSucceed = !1), this
              },
              startTimer: function () {
                var t = this
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)))
                  }, 100))
              },
            },
            render: function (t) {
              var e = t(!1)
              return (
                this.show &&
                  (e = t('div', {
                    staticClass: 'nuxt-progress',
                    class: {
                      'nuxt-progress-notransition': this.skipTimerCount > 0,
                      'nuxt-progress-failed': !this.canSucceed,
                    },
                    style: { width: this.percent + '%', left: this.left },
                  })),
                e
              )
            },
          }),
        N =
          (n(189),
          Object(P.a)(T, void 0, void 0, !1, null, null, null).exports),
        D =
          (n(191),
          n(193),
          n(195),
          n(197),
          Object(P.a)(
            {},
            function () {
              var t = this.$createElement
              return (this._self._c || t)('nuxt')
            },
            [],
            !1,
            null,
            null,
            null
          ).exports)
      function L(t, e) {
        var n
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return I(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return I(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          c = !0,
          f = !1
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next()
            return (c = t.done), t
          },
          e: function (t) {
            ;(f = !0), (o = t)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (f) throw o
            }
          },
        }
      }
      function I(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      var F = { _default: Object(y.s)(D) },
        J = {
          render: function (t, e) {
            var n = t('NuxtLoading', { ref: 'loading' }),
              r = t(this.layout || 'nuxt'),
              o = t(
                'div',
                { domProps: { id: '__layout' }, key: this.layoutName },
                [r]
              ),
              c = t(
                'transition',
                {
                  props: { name: 'layout', mode: 'out-in' },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit('triggerScroll')
                      })
                    },
                  },
                },
                [o]
              )
            return t('div', { domProps: { id: '__nuxt' } }, [n, c])
          },
          data: function () {
            return { isOnline: !0, layout: null, layoutName: '', nbFetching: 0 }
          },
          beforeCreate: function () {
            c.default.util.defineReactive(this, 'nuxt', this.$options.nuxt)
          },
          created: function () {
            ;(c.default.prototype.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener('online', this.refreshOnlineStatus),
              window.addEventListener('offline', this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context)
          },
          mounted: function () {
            var t = this
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading
                      case 1:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )()
          },
          watch: { 'nuxt.err': 'errorChanged' },
          computed: {
            isOffline: function () {
              return !this.isOnline
            },
            isFetching: function () {
              return this.nbFetching > 0
            },
            isPreview: function () {
              return Boolean(this.$options.previewData)
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine)
            },
            refresh: function () {
              var t = this
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(y.h)(t.$route)).length) {
                              e.next = 3
                              break
                            }
                            return e.abrupt('return')
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function (e) {
                                var p = []
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(y.q)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch())
                                else {
                                  var n,
                                    r = L(
                                      Object(y.e)(e.$vnode.componentInstance)
                                    )
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value
                                      p.push(component.$fetch())
                                    }
                                  } catch (t) {
                                    r.e(t)
                                  } finally {
                                    r.f()
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(y.q)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          c.default.set(e.$data, n, t[n])
                                      })
                                    ),
                                  Promise.all(p)
                                )
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            )
                          case 8:
                            e.next = 15
                            break
                          case 10:
                            ;(e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(y.k)(e.t0),
                              t.error(e.t0)
                          case 15:
                            t.$loading.finish()
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  )
                })
              )()
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish())
                var t = (E.options || E).layout
                'function' == typeof t && (t = t(this.context)),
                  this.setLayout(t)
              }
            },
            setLayout: function (t) {
              return (
                (t && F['_' + t]) || (t = 'default'),
                (this.layoutName = t),
                (this.layout = F['_' + t]),
                this.layout
              )
            },
            loadLayout: function (t) {
              return (
                (t && F['_' + t]) || (t = 'default'),
                Promise.resolve(F['_' + t])
              )
            },
          },
          components: { NuxtLoading: N },
        }
      c.default.use(f.a)
      var M = {}
      ;(M = (function (t, e) {
        if ((t = t.default || t).commit)
          throw new Error(
            '[nuxt] '.concat(
              e,
              ' should export a method that returns a Vuex instance.'
            )
          )
        return (
          'function' != typeof t && (t = Object.assign({}, t)),
          (function (t, e) {
            if (t.state && 'function' != typeof t.state) {
              console.warn(
                "'state' should be a method that returns an object in ".concat(
                  e
                )
              )
              var n = Object.assign({}, t.state)
              t = Object.assign({}, t, {
                state: function () {
                  return n
                },
              })
            }
            return t
          })(t, e)
        )
      })(n(199), 'store/index.js')).modules = M.modules || {}
      var U =
        M instanceof Function
          ? M
          : function () {
              return new f.a.Store(Object.assign({ strict: !1 }, M))
            }
      var B = n(111),
        z = n.n(B),
        K = function (t, e) {
          return H.apply(this, arguments)
        }
      function H() {
        return (H = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var r
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    ;(r = {
                      '64x64':
                        '/PortfolioNuxtJS/_nuxt/icons/icon_64x64.5f6a36.png',
                      '120x120':
                        '/PortfolioNuxtJS/_nuxt/icons/icon_120x120.5f6a36.png',
                      '144x144':
                        '/PortfolioNuxtJS/_nuxt/icons/icon_144x144.5f6a36.png',
                      '152x152':
                        '/PortfolioNuxtJS/_nuxt/icons/icon_152x152.5f6a36.png',
                      '192x192':
                        '/PortfolioNuxtJS/_nuxt/icons/icon_192x192.5f6a36.png',
                      '384x384':
                        '/PortfolioNuxtJS/_nuxt/icons/icon_384x384.5f6a36.png',
                      '512x512':
                        '/PortfolioNuxtJS/_nuxt/icons/icon_512x512.5f6a36.png',
                      ipad_1536x2048:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png',
                      ipadpro9_1536x2048:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png',
                      ipadpro10_1668x2224:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png',
                      ipadpro12_2048x2732:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png',
                      iphonese_640x1136:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png',
                      iphone6_50x1334:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png',
                      iphoneplus_1080x1920:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png',
                      iphonex_1125x2436:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png',
                      iphonexr_828x1792:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png',
                      iphonexsmax_1242x2688:
                        '/PortfolioNuxtJS/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png',
                    }),
                      n('icon', function (t) {
                        return r[t + 'x' + t] || ''
                      })
                  case 3:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      var X = n(157)
      c.default.use(X.a, {})
      var Q = n(34),
        W = n(90)
      ;(Q.a.autoAddCss = !1),
        c.default.component('fa', W.a),
        c.default.component('fa-layers', W.b),
        c.default.component('fa-layers-text', W.c)
      var V = n(69),
        G = n.n(V),
        Y = n(154),
        Z = n.n(Y)
      function tt(t, e) {
        var n
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return et(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return et(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          c = !0,
          f = !1
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next()
            return (c = t.done), t
          },
          e: function (t) {
            ;(f = !0), (o = t)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (f) throw o
            }
          },
        }
      }
      function et(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      for (
        var nt = {
            setBaseURL: function (t) {
              this.defaults.baseURL = t
            },
            setHeader: function (t, e) {
              var n,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'common',
                o = tt(Array.isArray(r) ? r : [r])
              try {
                for (o.s(); !(n = o.n()).done; ) {
                  var c = n.value
                  if (!e) return void delete this.defaults.headers[c][t]
                  this.defaults.headers[c][t] = e
                }
              } catch (t) {
                o.e(t)
              } finally {
                o.f()
              }
            },
            setToken: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 'common',
                r = t ? (e ? e + ' ' : '') + t : null
              this.setHeader('Authorization', r, n)
            },
            onRequest: function (t) {
              this.interceptors.request.use(function (e) {
                return t(e) || e
              })
            },
            onResponse: function (t) {
              this.interceptors.response.use(function (e) {
                return t(e) || e
              })
            },
            onRequestError: function (t) {
              this.interceptors.request.use(void 0, function (e) {
                return t(e) || Promise.reject(e)
              })
            },
            onResponseError: function (t) {
              this.interceptors.response.use(void 0, function (e) {
                return t(e) || Promise.reject(e)
              })
            },
            onError: function (t) {
              this.onRequestError(t), this.onResponseError(t)
            },
            create: function (t) {
              return st(Z()(t, this.defaults))
            },
          },
          ot = function () {
            var t = at[it]
            nt['$' + t] = function () {
              return this[t].apply(this, arguments).then(function (t) {
                return t && t.data
              })
            }
          },
          it = 0,
          at = [
            'request',
            'delete',
            'get',
            'head',
            'options',
            'post',
            'put',
            'patch',
          ];
        it < at.length;
        it++
      )
        ot()
      var st = function (t) {
          var e = G.a.create(t)
          return (
            (e.CancelToken = G.a.CancelToken),
            (e.isCancel = G.a.isCancel),
            (function (t) {
              for (var e in nt) t[e] = nt[e].bind(t)
            })(e),
            ut(e),
            e
          )
        },
        ut = function (t) {
          var e = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {},
            },
            n = function () {
              var t = 'undefined' != typeof window && window.$nuxt
              return t && t.$loading && t.$loading.set ? t.$loading : e
            },
            r = 0
          t.onRequest(function (t) {
            ;(t && !1 === t.progress) || r++
          }),
            t.onResponse(function (t) {
              ;(t && t.config && !1 === t.config.progress) ||
                (--r <= 0 && ((r = 0), n().finish()))
            }),
            t.onError(function (t) {
              ;(t && t.config && !1 === t.config.progress) ||
                (r--,
                G.a.isCancel(t)
                  ? r <= 0 && ((r = 0), n().finish())
                  : (n().fail(), n().finish()))
            })
          var o = function (t) {
            if (r) {
              var progress = (100 * t.loaded) / (t.total * r)
              n().set(Math.min(100, progress))
            }
          }
          ;(t.defaults.onUploadProgress = o),
            (t.defaults.onDownloadProgress = o)
        },
        ct = function (t, e) {
          var n = (t.$config && t.$config.axios) || {},
            r = n.browserBaseURL || n.baseURL || 'http://localhost:3000/'
          var o = st({
            baseURL: r,
            headers: {
              common: { Accept: 'application/json, text/plain, */*' },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {},
            },
          })
          ;(t.$axios = o), e('axios', o)
        },
        ft = n(155),
        lt = n.n(ft)
      function pt(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function ht(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? pt(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : pt(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      var mt = (function () {
        var t = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var r, o
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((r = (e.$config && e.$config.googleAnalytics) || {}),
                      'function' !=
                        typeof (o = ht(
                          ht(
                            {},
                            {
                              dev: !0,
                              debug: { sendHitTask: !0 },
                              id: 'UA-143397346-2',
                            }
                          ),
                          r
                        )).asyncID)
                    ) {
                      t.next = 7
                      break
                    }
                    return (t.next = 6), o.asyncID(e)
                  case 6:
                    o.id = t.sent
                  case 7:
                    c.default.use(
                      lt.a,
                      ht(ht({}, { router: e.app.router }), o)
                    ),
                      (e.$ga = c.default.$ga),
                      n('ga', c.default.$ga)
                  case 10:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )
        return function (e, n) {
          return t.apply(this, arguments)
        }
      })()
      function xt(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function gt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? xt(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : xt(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      c.default.component(d.a.name, d.a),
        c.default.component(
          x.a.name,
          gt(
            gt({}, x.a),
            {},
            {
              render: function (t, e) {
                return (
                  x.a._warned ||
                    ((x.a._warned = !0),
                    console.warn(
                      '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead'
                    )),
                  x.a.render(t, e)
                )
              },
            }
          )
        ),
        c.default.component(j.name, j),
        c.default.component('NChild', j),
        c.default.component(A.name, A),
        c.default.use(l.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid',
        })
      var vt = {
          name: 'page',
          mode: 'out-in',
          appear: !1,
          appearClass: 'appear',
          appearActiveClass: 'appear-active',
          appearToClass: 'appear-to',
        },
        yt = f.a.Store.prototype.registerModule,
        bt = { preserveState: !0 }
      function wt(path, t) {
        var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        return yt.call(this, path, t, gt(gt({}, bt), e))
      }
      function _t(t) {
        return $t.apply(this, arguments)
      }
      function $t() {
        return ($t = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n,
              r,
              o,
              f,
              l,
              h,
              path,
              d,
              m = arguments
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (d = function (t, e) {
                        if (!t)
                          throw new Error(
                            'inject(key, value) has no key provided'
                          )
                        if (void 0 === e)
                          throw new Error(
                            "inject('".concat(
                              t,
                              "', value) has no value provided"
                            )
                          )
                        ;(f[(t = '$' + t)] = e),
                          f.context[t] || (f.context[t] = e),
                          (o[t] = f[t])
                        var n = '__nuxt_' + t + '_installed__'
                        c.default[n] ||
                          ((c.default[n] = !0),
                          c.default.use(function () {
                            Object.prototype.hasOwnProperty.call(
                              c.default.prototype,
                              t
                            ) ||
                              Object.defineProperty(c.default.prototype, t, {
                                get: function () {
                                  return this.$root.$options[t]
                                },
                              })
                          }))
                      }),
                      (n = m.length > 1 && void 0 !== m[1] ? m[1] : {}),
                      (t.next = 4),
                      O()
                    )
                  case 4:
                    return (
                      (r = t.sent),
                      ((o = U(e)).$router = r),
                      (o.registerModule = wt),
                      (f = gt(
                        {
                          head: {
                            title: 'okomeee',
                            meta: [
                              { charset: 'utf-8' },
                              {
                                name: 'viewport',
                                content: 'width=device-width, initial-scale=1',
                              },
                              {
                                hid: 'description',
                                name: 'description',
                                content: "okomeee's portfolio",
                              },
                              {
                                hid: 'theme-color',
                                name: 'theme-color',
                                content: '#00162e',
                              },
                              {
                                hid: 'og:image',
                                name: 'og:image',
                                content:
                                  'https://okomeee.github.io/images/okomeeeIcon.png',
                              },
                              {
                                hid: 'mobile-web-app-capable',
                                name: 'mobile-web-app-capable',
                                content: 'yes',
                              },
                              {
                                hid: 'apple-mobile-web-app-title',
                                name: 'apple-mobile-web-app-title',
                                content: "okomeee's portfolio",
                              },
                              {
                                hid: 'author',
                                name: 'author',
                                content: 'okomeee',
                              },
                              {
                                hid: 'og:type',
                                name: 'og:type',
                                property: 'og:type',
                                content: 'website',
                              },
                              {
                                hid: 'og:title',
                                name: 'og:title',
                                property: 'og:title',
                                content: "okomeee's portfolio",
                              },
                              {
                                hid: 'og:site_name',
                                name: 'og:site_name',
                                property: 'og:site_name',
                                content: "okomeee's portfolio",
                              },
                              {
                                hid: 'og:description',
                                name: 'og:description',
                                property: 'og:description',
                                content: "okomeee's portfolio",
                              },
                            ],
                            link: [
                              {
                                rel: 'icon',
                                type: 'image/x-icon',
                                href: '/images/favicon.ico',
                              },
                              {
                                rel: 'manifest',
                                href:
                                  '/PortfolioNuxtJS/_nuxt/manifest.29278c7f.json',
                              },
                              {
                                rel: 'shortcut icon',
                                href: '/favicons/android-chrome-36x36.png',
                              },
                              {
                                rel: 'apple-touch-icon',
                                href:
                                  '/PortfolioNuxtJS/_nuxt/icons/icon_512x512.5f6a36.png',
                                sizes: '512x512',
                              },
                            ],
                            style: [],
                            script: [],
                            htmlAttrs: { lang: 'en' },
                          },
                          store: o,
                          router: r,
                          nuxt: {
                            defaultTransition: vt,
                            transitions: [vt],
                            setTransitions: function (t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function (t) {
                                  return (t = t
                                    ? 'string' == typeof t
                                      ? Object.assign({}, vt, { name: t })
                                      : Object.assign({}, vt, t)
                                    : vt)
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              )
                            },
                            err: null,
                            dateErr: null,
                            error: function (t) {
                              ;(t = t || null),
                                (f.context._errored = Boolean(t)),
                                (t = t ? Object(y.p)(t) : null)
                              var n = f.nuxt
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              )
                            },
                          },
                        },
                        J
                      )),
                      (o.app = f),
                      (l = e
                        ? e.next
                        : function (t) {
                            return f.router.push(t)
                          }),
                      e
                        ? (h = r.resolve(e.url).route)
                        : ((path = Object(y.f)(r.options.base, r.options.mode)),
                          (h = r.resolve(path).route)),
                      (t.next = 14),
                      Object(y.t)(f, {
                        store: o,
                        route: h,
                        next: l,
                        error: f.nuxt.error.bind(f),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e,
                      })
                    )
                  case 14:
                    if (
                      (d('config', n),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        o.replaceState(window.__NUXT__.state),
                      (f.context.enablePreview = function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                        ;(f.previewData = Object.assign({}, t)), d('preview', t)
                      }),
                      'function' != typeof z.a)
                    ) {
                      t.next = 20
                      break
                    }
                    return (t.next = 20), z()(f.context, d)
                  case 20:
                    return (t.next = 23), K(f.context, d)
                  case 23:
                    t.next = 26
                    break
                  case 26:
                    t.next = 29
                    break
                  case 29:
                    return (t.next = 32), ct(f.context, d)
                  case 32:
                    if ('function' != typeof mt) {
                      t.next = 35
                      break
                    }
                    return (t.next = 35), mt(f.context, d)
                  case 35:
                    ;(f.context.enablePreview = function () {
                      console.warn(
                        'You cannot call enablePreview() outside a plugin.'
                      )
                    }),
                      (t.next = 39)
                    break
                  case 39:
                    return t.abrupt('return', { store: o, app: f, router: r })
                  case 40:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
    },
    8: function (t, e, n) {
      'use strict'
      n.d(e, 'k', function () {
        return v
      }),
        n.d(e, 'm', function () {
          return y
        }),
        n.d(e, 'l', function () {
          return w
        }),
        n.d(e, 'e', function () {
          return _
        }),
        n.d(e, 'b', function () {
          return $
        }),
        n.d(e, 's', function () {
          return O
        }),
        n.d(e, 'g', function () {
          return j
        }),
        n.d(e, 'h', function () {
          return k
        }),
        n.d(e, 'd', function () {
          return C
        }),
        n.d(e, 'r', function () {
          return S
        }),
        n.d(e, 'j', function () {
          return P
        }),
        n.d(e, 't', function () {
          return R
        }),
        n.d(e, 'o', function () {
          return T
        }),
        n.d(e, 'q', function () {
          return N
        }),
        n.d(e, 'f', function () {
          return D
        }),
        n.d(e, 'c', function () {
          return L
        }),
        n.d(e, 'i', function () {
          return I
        }),
        n.d(e, 'p', function () {
          return F
        }),
        n.d(e, 'a', function () {
          return H
        }),
        n.d(e, 'n', function () {
          return Q
        })
      n(5), n(56), n(2), n(52), n(98), n(99)
      var r = n(29),
        o = (n(15), n(181), n(30)),
        c = (n(19), n(20), n(63), n(138), n(184), n(185), n(10), n(41), n(11)),
        f = (n(45), n(3), n(1), n(4), n(14), n(0)),
        l = n(7)
      function h(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? h(Object(source), !0).forEach(function (e) {
                Object(f.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      function m(t, e) {
        var n
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return x(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return x(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          c = !0,
          f = !1
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next()
            return (c = t.done), t
          },
          e: function (t) {
            ;(f = !0), (o = t)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (f) throw o
            }
          },
        }
      }
      function x(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      function v(t) {
        l.default.config.errorHandler && l.default.config.errorHandler(t)
      }
      function y(t) {
        return t.then(function (t) {
          return t.default || t
        })
      }
      function w(t) {
        return (
          t.$options &&
          'function' == typeof t.$options.fetch &&
          !t.$options.fetch.length
        )
      }
      function _(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = m(r)
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value
            c.$fetch ? n.push(c) : c.$children && _(c, n)
          }
        } catch (t) {
          o.e(t)
        } finally {
          o.f()
        }
        return n
      }
      function $(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {}
            }
          ;(t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this)
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                d(d({}, data), e)
              )
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data)
        }
      }
      function O(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = l.default.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        )
      }
      function j(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'components'
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t[n]).map(function (o) {
              return e && e.push(r), t[n][o]
            })
          })
        )
      }
      function k(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return j(t, e, 'instances')
      }
      function C(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              )
            }, [])
          })
        )
      }
      function S(t, e) {
        return Promise.all(
          C(
            t,
            (function () {
              var t = Object(c.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ('function' != typeof n || n.options) {
                            t.next = 4
                            break
                          }
                          return (t.next = 3), n()
                        case 3:
                          n = t.sent
                        case 4:
                          return (
                            (o.components[c] = n = O(n)),
                            t.abrupt(
                              'return',
                              'function' == typeof e ? e(n, r, o, c) : n
                            )
                          )
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function (e, n, r, o) {
                return t.apply(this, arguments)
              }
            })()
          )
        )
      }
      function P(t) {
        return E.apply(this, arguments)
      }
      function E() {
        return (E = Object(c.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2
                      break
                    }
                    return t.abrupt('return')
                  case 2:
                    return (t.next = 4), S(e)
                  case 4:
                    return t.abrupt(
                      'return',
                      d(
                        d({}, e),
                        {},
                        {
                          meta: j(e).map(function (t, n) {
                            return d(
                              d({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            )
                          }),
                        }
                      )
                    )
                  case 5:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function R(t, e) {
        return A.apply(this, arguments)
      }
      function A() {
        return (A = Object(c.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var c, f, l, h
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          store: e.store,
                          payload: n.payload,
                          error: n.error,
                          base: '/PortfolioNuxtJS/',
                          env: {},
                        }),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0
                            var r = Object(o.a)(path)
                            if (
                              ('number' == typeof t ||
                                ('undefined' !== r && 'object' !== r) ||
                                ((n = path || {}),
                                (path = t),
                                (r = Object(o.a)(path)),
                                (t = 302)),
                              'object' === r &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = K(path, n)),
                                window.location.replace(path),
                                new Error('ERR_REDIRECT'))
                              )
                            e.context.next({ path: path, query: n, status: t })
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([P(n.route), P(n.from)])
                    )
                  case 3:
                    ;(c = t.sent),
                      (f = Object(r.a)(c, 2)),
                      (l = f[0]),
                      (h = f[1]),
                      n.route && (e.context.route = l),
                      n.from && (e.context.from = h),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {})
                  case 15:
                  case 'end':
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      function T(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : N(t[0], e).then(function () {
              return T(t.slice(1), e)
            })
      }
      function N(t, e) {
        var n
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}))
                })
              })
            : t(e)) &&
          n instanceof Promise &&
          'function' == typeof n.then
          ? n
          : Promise.resolve(n)
      }
      function D(base, t) {
        var path = decodeURI(window.location.pathname)
        return 'hash' === t
          ? window.location.hash.replace(/^#\//, '')
          : (base &&
              (path.endsWith('/') ? path : path + '/').startsWith(base) &&
              (path = path.slice(base.length)),
            (path || '/') + window.location.search + window.location.hash)
      }
      function L(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            'object' === Object(o.a)(t[i]) &&
              (n[i] = new RegExp('^(?:' + t[i].pattern + ')$', z(e)))
          return function (e, r) {
            for (
              var path = '',
                data = e || {},
                o = (r || {}).pretty ? M : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var f = t[c]
              if ('string' != typeof f) {
                var l = data[f.name || 'pathMatch'],
                  h = void 0
                if (null == l) {
                  if (f.optional) {
                    f.partial && (path += f.prefix)
                    continue
                  }
                  throw new TypeError('Expected "' + f.name + '" to be defined')
                }
                if (Array.isArray(l)) {
                  if (!f.repeat)
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(l) +
                        '`'
                    )
                  if (0 === l.length) {
                    if (f.optional) continue
                    throw new TypeError(
                      'Expected "' + f.name + '" to not be empty'
                    )
                  }
                  for (var d = 0; d < l.length; d++) {
                    if (((h = o(l[d])), !n[c].test(h)))
                      throw new TypeError(
                        'Expected all "' +
                          f.name +
                          '" to match "' +
                          f.pattern +
                          '", but received `' +
                          JSON.stringify(h) +
                          '`'
                      )
                    path += (0 === d ? f.prefix : f.delimiter) + h
                  }
                } else {
                  if (((h = f.asterisk ? M(l, !0) : o(l)), !n[c].test(h)))
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to match "' +
                        f.pattern +
                        '", but received "' +
                        h +
                        '"'
                    )
                  path += f.prefix + h
                }
              } else path += f
            }
            return path
          }
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = '',
              f = (e && e.delimiter) || '/'
            for (; null != (n = J.exec(t)); ) {
              var l = n[0],
                h = n[1],
                d = n.index
              if (((path += t.slice(c, d)), (c = d + l.length), h)) path += h[1]
              else {
                var m = t[c],
                  x = n[2],
                  v = n[3],
                  y = n[4],
                  w = n[5],
                  _ = n[6],
                  $ = n[7]
                path && (r.push(path), (path = ''))
                var O = null != x && null != m && m !== x,
                  j = '+' === _ || '*' === _,
                  k = '?' === _ || '*' === _,
                  C = n[2] || f,
                  pattern = y || w
                r.push({
                  name: v || o++,
                  prefix: x || '',
                  delimiter: C,
                  optional: k,
                  repeat: j,
                  partial: O,
                  asterisk: Boolean($),
                  pattern: pattern
                    ? B(pattern)
                    : $
                    ? '.*'
                    : '[^' + U(C) + ']+?',
                })
              }
            }
            c < t.length && (path += t.substr(c))
            path && r.push(path)
            return r
          })(t, e),
          e
        )
      }
      function I(t, e) {
        var n = {},
          r = d(d({}, t), e)
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0)
        return n
      }
      function F(t) {
        var e
        if (t.message || 'string' == typeof t) e = t.message || t
        else
          try {
            e = JSON.stringify(t, null, 2)
          } catch (n) {
            e = '['.concat(t.constructor.name, ']')
          }
        return d(
          d({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500,
          }
        )
      }
      ;(window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t)
        })
      var J = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      )
      function M(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g
        return encodeURI(t).replace(n, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      function U(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
      }
      function B(t) {
        return t.replace(/([=!:$/()])/g, '\\$1')
      }
      function z(t) {
        return t && t.sensitive ? '' : 'i'
      }
      function K(t, e) {
        var n,
          o = t.indexOf('://')
        ;-1 !== o
          ? ((n = t.substring(0, o)), (t = t.substring(o + 3)))
          : t.startsWith('//') && (t = t.substring(2))
        var c,
          f = t.split('/'),
          l = (n ? n + '://' : '//') + f.shift(),
          path = f.join('/')
        if (
          ('' === path && 1 === f.length && (l += '/'),
          2 === (f = path.split('#')).length)
        ) {
          var h = f,
            d = Object(r.a)(h, 2)
          ;(path = d[0]), (c = d[1])
        }
        return (
          (l += path ? '/' + path : ''),
          e &&
            '{}' !== JSON.stringify(e) &&
            (l +=
              (2 === t.split('?').length ? '&' : '?') +
              (function (t) {
                return Object.keys(t)
                  .sort()
                  .map(function (e) {
                    var n = t[e]
                    return null == n
                      ? ''
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function (t) {
                            return [e, '=', t].join('')
                          })
                          .join('&')
                      : e + '=' + n
                  })
                  .filter(Boolean)
                  .join('&')
              })(e)),
          (l += c ? '#' + c : '')
        )
      }
      function H(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n)
      }
      function X(path) {
        return path.replace(/\/+$/, '') || '/'
      }
      function Q(t, e) {
        return X(t) === X(e)
      }
    },
    83: function (t, e, n) {
      var content = n(188)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(49).default)('72daabed', content, !0, { sourceMap: !1 })
    },
    84: function (t, e, n) {
      var content = n(190)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(49).default)('3191d5ad', content, !0, { sourceMap: !1 })
    },
    85: function (t, e, n) {
      var content = n(198)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(49).default)('20f4381e', content, !0, { sourceMap: !1 })
    },
    91: function (t, e, n) {
      'use strict'
      n(3), n(56), n(2), n(45), n(52), n(14), n(19), n(20), n(1), n(98), n(99)
      var r = n(7)
      function o(t, e) {
        var n
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return c(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0,
              r = function () {}
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] }
              },
              e: function (t) {
                throw t
              },
              f: r,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          )
        }
        var o,
          f = !0,
          l = !1
        return {
          s: function () {
            n = t[Symbol.iterator]()
          },
          n: function () {
            var t = n.next()
            return (f = t.done), t
          },
          e: function (t) {
            ;(l = !0), (o = t)
          },
          f: function () {
            try {
              f || null == n.return || n.return()
            } finally {
              if (l) throw o
            }
          },
        }
      }
      function c(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i]
        return n
      }
      var f =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now()
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e))
                },
              })
            }, 1)
          },
        l =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t)
          },
        h =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target
              e <= 0 || link.__prefetch()
            })
          })
      e.a = {
        name: 'NuxtLink',
        extends: r.default.component('RouterLink'),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = f(this.observe, { timeout: 2e3 }))
        },
        beforeDestroy: function () {
          l(this.handleId),
            this.__observed &&
              (h.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function () {
            h &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              h.observe(this.$el),
              (this.__observed = !0))
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0
          },
          canPrefetch: function () {
            var t = navigator.connection
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || '').includes('2g') || t.saveData))
            )
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default
              })
              .filter(function (t) {
                return 'function' == typeof t && !t.options && !t.__prefetched
              })
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              h.unobserve(this.$el)
              var t,
                e = o(this.getPrefetchComponents())
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n()
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0)
                }
              } catch (t) {
                e.e(t)
              } finally {
                e.f()
              }
            }
          },
        },
      }
    },
  },
  [[159, 3, 1, 4]],
])
