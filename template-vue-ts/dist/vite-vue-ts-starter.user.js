// ==UserScript==
// @name       vite-vue-ts-starter
// @namespace  npm/vite-plugin-monkey
// @version    0.0.0
// @icon       https://vitejs.dev/logo.svg
// @match      https://www.google.com/
// @require    https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.prod.js
// ==/UserScript==

// use vite-plugin-monkey@1.1.1 at 2022-07-20T06:43:23.967Z

;(({ cssText = "" }) => {
  const style = document.createElement("style");
  style.innerText = cssText;
  style.dataset.source = "vite-plugin-monkey";
  document.head.appendChild(style);
})({
  "cssText": ":root {\n  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n\n  color-scheme: light dark;\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #242424;\n\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\na:hover {\n  color: #535bf2;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-width: 320px;\n  min-height: 100vh;\n}\n\nh1 {\n  font-size: 3.2em;\n  line-height: 1.1;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  background-color: #1a1a1a;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\nbutton:hover {\n  border-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n  outline: 4px auto -webkit-focus-ring-color;\n}\n\n.card {\n  padding: 2em;\n}\n\n#app {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    color: #213547;\n    background-color: #ffffff;\n  }\n  a:hover {\n    color: #747bff;\n  }\n  button {\n    background-color: #f9f9f9;\n  }\n}\n\n.read-the-docs[data-v-8fe7e3eb] {\n  color: #888;\n}\n\n.logo[data-v-a54d430f] {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n}\n.logo[data-v-a54d430f]:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue[data-v-a54d430f]:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n"
});

(function(vue) {
  "use strict";
  const style = "";
  const _imports_0 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjMxLjg4IiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDI1NyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJJY29uaWZ5SWQxODEzMDg4ZmUxZmJjMDFmYjQ2NiIgeDE9Ii0uODI4JSIgeDI9IjU3LjYzNiUiIHkxPSI3LjY1MiUiIHkyPSI3OC40MTElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNDFEMUZGIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQkQzNEZFIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Ikljb25pZnlJZDE4MTMwODhmZTFmYmMwMWZiNDY3IiB4MT0iNDMuMzc2JSIgeDI9IjUwLjMxNiUiIHkxPSIyLjI0MiUiIHkyPSI4OS4wMyUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkVBODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjguMzMzJSIgc3RvcC1jb2xvcj0iI0ZGREQzNSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGQTgwMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjYpIiBkPSJNMjU1LjE1MyAzNy45MzhMMTM0Ljg5NyAyNTIuOTc2Yy0yLjQ4MyA0LjQ0LTguODYyIDQuNDY2LTExLjM4Mi4wNDhMLjg3NSAzNy45NThjLTIuNzQ2LTQuODE0IDEuMzcxLTEwLjY0NiA2LjgyNy05LjY3bDEyMC4zODUgMjEuNTE3YTYuNTM3IDYuNTM3IDAgMCAwIDIuMzIyLS4wMDRsMTE3Ljg2Ny0yMS40ODNjNS40MzgtLjk5MSA5LjU3NCA0Ljc5NiA2Ljg3NyA5LjYyWiI+PC9wYXRoPjxwYXRoIGZpbGw9InVybCgjSWNvbmlmeUlkMTgxMzA4OGZlMWZiYzAxZmI0NjcpIiBkPSJNMTg1LjQzMi4wNjNMOTYuNDQgMTcuNTAxYTMuMjY4IDMuMjY4IDAgMCAwLTIuNjM0IDMuMDE0bC01LjQ3NCA5Mi40NTZhMy4yNjggMy4yNjggMCAwIDAgMy45OTcgMy4zNzhsMjQuNzc3LTUuNzE4YzIuMzE4LS41MzUgNC40MTMgMS41MDcgMy45MzYgMy44MzhsLTcuMzYxIDM2LjA0N2MtLjQ5NSAyLjQyNiAxLjc4MiA0LjUgNC4xNTEgMy43OGwxNS4zMDQtNC42NDljMi4zNzItLjcyIDQuNjUyIDEuMzYgNC4xNSAzLjc4OGwtMTEuNjk4IDU2LjYyMWMtLjczMiAzLjU0MiAzLjk3OSA1LjQ3MyA1Ljk0MyAyLjQzN2wxLjMxMy0yLjAyOGw3Mi41MTYtMTQ0LjcyYzEuMjE1LTIuNDIzLS44OC01LjE4Ni0zLjU0LTQuNjcybC0yNS41MDUgNC45MjJjLTIuMzk2LjQ2Mi00LjQzNS0xLjc3LTMuNzU5LTQuMTE0bDE2LjY0Ni01Ny43MDVjLjY3Ny0yLjM1LTEuMzctNC41ODMtMy43NjktNC4xMTNaIj48L3BhdGg+PC9zdmc+";
  const _imports_1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM3LjA3IiBoZWlnaHQ9IjM2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDE5OCI+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0iTTIwNC44IDBIMjU2TDEyOCAyMjAuOEwwIDBoOTcuOTJMMTI4IDUxLjJMMTU3LjQ0IDBoNDcuMzZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQxQjg4MyIgZD0ibTAgMGwxMjggMjIwLjhMMjU2IDBoLTUxLjJMMTI4IDEzMi40OEw1MC41NiAwSDBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzM1NDk1RSIgZD0iTTUwLjU2IDBMMTI4IDEzMy4xMkwyMDQuOCAwaC00Ny4zNkwxMjggNTEuMkw5Ny45MiAwSDUwLjU2WiI+PC9wYXRoPjwvc3ZnPg==";
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-8fe7e3eb"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$1 = { class: "card" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Edit "),
    /* @__PURE__ */ vue.createElementVNode("code", null, "components/HelloWorld.vue"),
    /* @__PURE__ */ vue.createTextVNode(" to test HMR ")
  ], -1));
  const _hoisted_3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Check out "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://vuejs.org/guide/quick-start.html#local",
      target: "_blank"
    }, "create-vue"),
    /* @__PURE__ */ vue.createTextVNode(", the official Vue + Vite starter ")
  ], -1));
  const _hoisted_4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Install "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://github.com/johnsoncodehk/volar",
      target: "_blank"
    }, "Volar"),
    /* @__PURE__ */ vue.createTextVNode(" in your IDE for a better DX ")
  ], -1));
  const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "HelloWorld",
    props: {
      msg: null
    },
    setup(__props) {
      const count = vue.ref(0);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("h1", null, vue.toDisplayString(__props.msg), 1),
          vue.createElementVNode("div", _hoisted_1$1, [
            vue.createElementVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
            }, "count is " + vue.toDisplayString(count.value), 1),
            _hoisted_2
          ]),
          _hoisted_3,
          _hoisted_4,
          _hoisted_5
        ], 64);
      };
    }
  });
  const HelloWorld_vue_vue_type_style_index_0_scoped_8fe7e3eb_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8fe7e3eb"]]);
  const _withScopeId = (n) => (vue.pushScopeId("data-v-a54d430f"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", null, [
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://vitejs.dev",
      target: "_blank"
    }, [
      /* @__PURE__ */ vue.createElementVNode("img", {
        src: _imports_0,
        class: "logo",
        alt: "Vite logo"
      })
    ]),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://vuejs.org/",
      target: "_blank"
    }, [
      /* @__PURE__ */ vue.createElementVNode("img", {
        src: _imports_1,
        class: "logo vue",
        alt: "Vue logo"
      })
    ])
  ], -1));
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          _hoisted_1,
          vue.createVNode(HelloWorld, { msg: "Vite + Vue" })
        ], 64);
      };
    }
  });
  const App_vue_vue_type_style_index_0_scoped_a54d430f_lang = "";
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a54d430f"]]);
  vue.createApp(App).mount((() => {
    const app = document.createElement("div");
    document.body.append(app);
    return app;
  })());
})(Vue);
 
