import { _ as _export_sfc, r as resolveComponent, o as openBlock, e as createElementBlock, q as createBlock, p as createCommentVNode, d as useI18n, k as reactive, g as unref } from './index.47e2c2a3.js';

const EmptyLabel_vue_vue_type_style_index_0_scoped_31e5be11_lang = '';

const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = ["innerHTML"];


const _sfc_main$1 = {
  __name: 'EmptyLabel',
  props: {
    icon: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
},
  setup(__props) {

const props = __props;

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", null, [
    (props.icon)
      ? (openBlock(), createBlock(_component_Icon, {
          key: 0,
          icon: props.icon
        }, null, 8 /* PROPS */, ["icon"]))
      : createCommentVNode("v-if", true),
    (props.title)
      ? (openBlock(), createElementBlock("span", {
          key: 1,
          innerHTML: props.title
        }, null, 8 /* PROPS */, _hoisted_1))
      : createCommentVNode("v-if", true),
    (props.description)
      ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: "description",
          innerHTML: props.description
        }, null, 8 /* PROPS */, _hoisted_2))
      : createCommentVNode("v-if", true)
  ]))
}
}

};
const EmptyLabel = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-31e5be11"],['__file',"D:/bilbo/landing/shared/components/ui/EmptyLabel.vue"]]);

const _sfc_main = {
  __name: 'Error',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const description = tm('pages.error.descriptions').map(item => rt(item));

    const data = reactive({
        description: description[Math.min(parseInt(Math.random() * description.length), description.length - 1)] 
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(EmptyLabel, {
    title: unref(t)('pages.error.title'),
    description: data.description
  }, null, 8 /* PROPS */, ["title", "description"]))
}
}

};
const Error = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/landing/src/pages/Error.vue"]]);

export { Error as default };
