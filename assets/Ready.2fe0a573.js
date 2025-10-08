import { _ as _export_sfc, r as resolveComponent, o as openBlock, e as createElementBlock, h as createVNode, p as createCommentVNode, f as createBaseVNode, g as unref, m as baseUrl, t as toDisplayString, s as stores, E as storeToRefs, w as watch } from './index.5572213a.js';

const LinkButton_vue_vue_type_style_index_0_scoped_e9fcb834_lang = '';

const _hoisted_1 = ["href", "target"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = ["src", "alt"];

const _sfc_main$1 = {
  __name: 'LinkButton',
  props: {
    icon: { type: String, default: '' },
    img: { type: String, default: '' },
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    url: { type: String, default: '' },
    blank: { type: String, default: '_black' }
},
  setup(__props) {

const props = __props;

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("a", {
    href: props.url,
    target: props.blank
  }, [
    (props.icon)
      ? (openBlock(), createElementBlock("span", _hoisted_2, [
          createVNode(_component_Icon, {
            icon: props.icon
          }, null, 8 /* PROPS */, ["icon"])
        ]))
      : createCommentVNode("v-if", true),
    (props.img)
      ? (openBlock(), createElementBlock("span", _hoisted_3, [
          createBaseVNode("img", {
            src: `${unref(baseUrl)}${props.img}`,
            alt: props.name
          }, null, 8 /* PROPS */, _hoisted_4)
        ]))
      : createCommentVNode("v-if", true),
    createBaseVNode("span", null, [
      createBaseVNode("span", null, toDisplayString(props.name), 1 /* TEXT */),
      createBaseVNode("span", null, toDisplayString(props.description), 1 /* TEXT */)
    ])
  ], 8 /* PROPS */, _hoisted_1))
}
}

};
const LinkButton = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-e9fcb834"],['__file',"D:/bilbo/landing/shared/components/ui/LinkButton.vue"]]);

const _sfc_main = {
  __name: 'Ready',
  props: {
    page: { type: String, default: '' },
    init: { type: Function, default: async () => {} }
},
  emits: ['ready'],
  setup(__props, { emit: __emit }) {

const nav = stores.nav();
const others = stores.others();

const { ready } = storeToRefs(others);

const props = __props;

const emit = __emit;

const onReady = async () => {
    if (props.init) {
        await props.init();
    }

    if (props.page === nav.page) {
        emit('ready');
    }

    nav.ready(props.page);
};

if (ready.value) {
    onReady();
}

watch(
    () => ready.value,
    async () => {
        if (ready.value) {
            onReady();
        }
    }
);

return (_ctx, _cache) => {
  return null
}
}

};
const Ready = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/landing/shared/components/ui/Ready.vue"]]);

export { LinkButton as L, Ready as R };
