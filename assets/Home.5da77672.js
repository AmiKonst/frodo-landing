import { u as useBackedApi, a as useTrustApi, b as useKolsApi, c as useTeamApi, _ as _export_sfc, d as useI18n, r as resolveComponent, o as openBlock, e as createElementBlock, f as createBaseVNode, g as unref, h as createVNode, B as Button, i as computed, t as toDisplayString, F as Fragment, j as renderList, n as normalizeClass, s as stores, k as reactive, w as watch, l as onMounted, m as baseUrl, p as createCommentVNode, q as createBlock, v as numberWithSpaces, x as createStaticVNode, y as delay, z as resolveDirective, A as createTextVNode, C as withDirectives, D as storeToRefs } from './index.47e2c2a3.js';

const api = {
    backed: () => useBackedApi(),
    trust: () => useTrustApi(),
    kols: () => useKolsApi(),
    team: () => useTeamApi()
};

const Welcome_vue_vue_type_style_index_0_scoped_f32f37de_lang = '';

const _hoisted_1$b = { id: "welcome" };
const _hoisted_2$a = ["innerHTML"];
const _hoisted_3$a = ["innerHTML"];
const _hoisted_4$9 = {
  target: "_blank",
  href: "https://t.me/bilbomusic"
};
const _hoisted_5$8 = { class: "scroll-down" };

    
const _sfc_main$e = {
  __name: 'Welcome',
  setup(__props) {

    const { t } = useI18n();

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1$b, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", {
        innerHTML: unref(t)('pages.home.welcome.title')
      }, null, 8 /* PROPS */, _hoisted_2$a),
      createBaseVNode("p", {
        innerHTML: unref(t)('pages.home.welcome.description')
      }, null, 8 /* PROPS */, _hoisted_3$a),
      createBaseVNode("a", _hoisted_4$9, [
        createVNode(Button, {
          name: unref(t)('pages.home.welcome.launch')
        }, null, 8 /* PROPS */, ["name"])
      ]),
      createBaseVNode("div", _hoisted_5$8, [
        createVNode(_component_Icon, { icon: "scroll-down" }),
        createVNode(_component_Icon, { icon: "scroll-down" }),
        createVNode(_component_Icon, { icon: "scroll-down" })
      ])
    ])
  ]))
}
}

};
const Welcome = /*#__PURE__*/_export_sfc(_sfc_main$e, [['__scopeId',"data-v-f32f37de"],['__file',"D:/bilbo/landing/src/pages/Home/components/Welcome.vue"]]);

const Slogans_vue_vue_type_style_index_0_scoped_a078e414_lang = '';

const _hoisted_1$a = { id: "slogans" };

    
const _sfc_main$d = {
  __name: 'Slogans',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const items = computed(() => {
        return Array.isArray(tm('pages.home.slogans.items')) ? tm('pages.home.slogans.items').map(item => ({
                title: rt(item.title),
                active: !!item.active
            })) : [];
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$a, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.home.slogans.title')), 1 /* TEXT */),
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
          return (openBlock(), createElementBlock("li", {
            class: normalizeClass({ active: !!item.active })
          }, toDisplayString(item.title), 3 /* TEXT, CLASS */))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ])
  ]))
}
}

};
const Slogans = /*#__PURE__*/_export_sfc(_sfc_main$d, [['__scopeId',"data-v-a078e414"],['__file',"D:/bilbo/landing/src/pages/Home/components/Slogans.vue"]]);

const Features_vue_vue_type_style_index_0_scoped_ec08b062_lang = '';

const _hoisted_1$9 = { id: "features" };
const _hoisted_2$9 = ["onClick"];
const _hoisted_3$9 = {
  key: 0,
  class: "description"
};
const _hoisted_4$8 = ["src", "alt"];
const _hoisted_5$7 = ["src", "alt"];

    
const _sfc_main$c = {
  __name: 'Features',
  setup(__props) {

    const { t, tm, rt } = useI18n();
    const locale = stores.locale();

    const data = reactive({
        id: 0,
        text: '',
        logo: '',
        description: [],
        loading: false
    });

    const items = computed(() => {
        return Array.isArray(tm('pages.home.features.items')) ? tm('pages.home.features.items').map(item => ({
                logo: rt(item.logo),
                title: rt(item.title),
                description: rt(item.description)
            })) : [];
    });

    const runDescription = () => {
        if (!data.description?.length) {
            return
        }

        data.text += ' ' + data.description.splice(0, 1 + parseInt(Math.random() * 5)).join(' ');

        if (data.description?.length) {
            setTimeout(() => {
                runDescription();
            }, parseInt(100 + Math.random() * 200));
        }
    };

    const setActive = (id) => {
        if (data.id != id) {
            data.loading = true;
        }

        if (!id && !items.value?.length) {
            setTimeout(() => {
                setActive(0);
            }, 200);
            return;
        }

        data.id = id;
        data.text = '';

        setTimeout(() => {
            data.logo = items.value[id]?.logo;
        }, 100);

        data.description = items.value[id]?.description?.split(' ');

        if (!data.description?.length) {
            return
        }

        runDescription();
    };

    const handleLoad = () => {
        setTimeout(() => {
            data.loading = false;
        }, 100);
    };

    watch(() => locale.locale, () => {
        setActive(data.id);
        data.loading = false;
    });

    onMounted(() => {
        setActive(0);
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$9, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.home.features.title')), 1 /* TEXT */),
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
          return (openBlock(), createElementBlock("li", {
            class: normalizeClass({ active: data.id === id }),
            key: id,
            onClick: $event => (setActive(id))
          }, toDisplayString(item.title), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$9))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      (data.logo)
        ? (openBlock(), createElementBlock("div", _hoisted_3$9, [
            createBaseVNode("div", {
              class: normalizeClass(`logo-${data.id}`)
            }, [
              createBaseVNode("img", {
                src: `${unref(baseUrl)}img/features/${data.logo}.png`,
                alt: unref(t)('pages.home.features.title'),
                class: normalizeClass({ loading: data.loading }),
                ref: "logoRef",
                onLoad: handleLoad
              }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_4$8),
              createBaseVNode("img", {
                src: `${unref(baseUrl)}img/features/${data.logo}.png`,
                alt: unref(t)('pages.home.features.title')
              }, null, 8 /* PROPS */, _hoisted_5$7)
            ], 2 /* CLASS */),
            createBaseVNode("span", null, toDisplayString(data.text), 1 /* TEXT */)
          ]))
        : createCommentVNode("v-if", true)
    ])
  ]))
}
}

};
const Features = /*#__PURE__*/_export_sfc(_sfc_main$c, [['__scopeId',"data-v-ec08b062"],['__file',"D:/bilbo/landing/src/pages/Home/components/Features.vue"]]);

const TON_vue_vue_type_style_index_0_scoped_776053f2_lang = '';

const _hoisted_1$8 = { id: "ton" };
const _hoisted_2$8 = ["innerHTML"];
const _hoisted_3$8 = { class: "items" };
const _hoisted_4$7 = { class: "img" };
const _hoisted_5$6 = ["src", "alt"];

    
const _sfc_main$b = {
  __name: 'TON',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const items = computed(() => {
        return Array.isArray(tm('pages.home.ton.items')) ? tm('pages.home.ton.items').map(item => ({
                id: rt(item.id),
                code: rt(item.code),
                description: rt(item.description),
                name: rt(item.name)
            })) : [];
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.home.ton.title')), 1 /* TEXT */),
      createBaseVNode("div", {
        class: "description",
        innerHTML: unref(t)('pages.home.ton.description')
      }, null, 8 /* PROPS */, _hoisted_2$8),
      createBaseVNode("div", _hoisted_3$8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
          return (openBlock(), createElementBlock("div", { key: id }, [
            createBaseVNode("span", _hoisted_4$7, [
              createBaseVNode("img", {
                src: `${unref(baseUrl)}/img/ton/${item.code}.png`,
                alt: item.name
              }, null, 8 /* PROPS */, _hoisted_5$6)
            ]),
            createBaseVNode("span", null, [
              createBaseVNode("b", null, toDisplayString(item.name), 1 /* TEXT */),
              createBaseVNode("span", null, toDisplayString(item.description), 1 /* TEXT */)
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}
}

};
const TON = /*#__PURE__*/_export_sfc(_sfc_main$b, [['__scopeId',"data-v-776053f2"],['__file',"D:/bilbo/landing/src/pages/Home/components/TON.vue"]]);

const Kols_vue_vue_type_style_index_0_scoped_ee28e392_lang = '';

const _hoisted_1$7 = { id: "kols" };
const _hoisted_2$7 = { class: "items" };
const _hoisted_3$7 = ["href"];
const _hoisted_4$6 = ["src", "alt"];
const _hoisted_5$5 = { class: "description" };
const _hoisted_6$2 = ["href"];

    
const _sfc_main$a = {
  __name: 'Kols',
  setup(__props) {

    const { t } = useI18n();

    const data = reactive({
        items: [],
        previewItems: []
    });

    onMounted(async () => {
        data.items = await api.kols().getItems();
        data.previewItems = [...data.items].sort(() => 0.5 - Math.random()).slice(0, 6);
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.home.kols.title')), 1 /* TEXT */),
      createBaseVNode("div", _hoisted_2$7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.previewItems, (item, id) => {
          return (openBlock(), createElementBlock("a", {
            target: "_blank",
            key: id,
            href: item.link
          }, [
            createBaseVNode("img", {
              src: `${unref(baseUrl)}/img/kols/${item.logo}`,
              alt: item.name
            }, null, 8 /* PROPS */, _hoisted_4$6)
          ], 8 /* PROPS */, _hoisted_3$7))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      createBaseVNode("div", _hoisted_5$5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
          return (openBlock(), createElementBlock(Fragment, { key: id }, [
            (!!id)
              ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  icon: "star",
                  class: normalizeClass(`star-${ 1 + id % 6}`)
                }, null, 8 /* PROPS */, ["class"]))
              : createCommentVNode("v-if", true),
            createBaseVNode("a", {
              target: "_blank",
              href: item.link
            }, toDisplayString(item.name), 9 /* TEXT, PROPS */, _hoisted_6$2)
          ], 64 /* STABLE_FRAGMENT */))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}
}

};
const Kols = /*#__PURE__*/_export_sfc(_sfc_main$a, [['__scopeId',"data-v-ee28e392"],['__file',"D:/bilbo/landing/src/pages/Home/components/Kols.vue"]]);

const BigCounter_vue_vue_type_style_index_0_scoped_6d217a49_lang = '';

const _hoisted_1$6 = { key: 0 };
const _hoisted_2$6 = ["innerHTML"];
const _hoisted_3$6 = { class: "value" };
const _hoisted_4$5 = { key: 1 };
const _hoisted_5$4 = { class: "total" };
const _hoisted_6$1 = { key: 1 };

    
const _sfc_main$9 = {
  __name: 'BigCounter',
  props: {
        title: { type: [String, null], default: null },
        value: { type: [Number], default: 0 },
        total: { type: [Number], default: 0 }
    },
  setup(__props) {

    const props = __props;

    const data = reactive({
        value: 0,
        total: 0
    });

    const valueItems = computed(() => {
        return numberWithSpaces(parseInt(data.value)).replace(/,/g, ' ').split('');
    });

    const totalItems = computed(() => {
        return numberWithSpaces(parseInt(data.total)).replace(/,/g, ' ').split('');
    });

    const updateValue = async () => {
        let steps = 14;
        const letters = ((data.value).toString().split('.')[1] || '').length;
        const diff = +((props.value - data.value) / steps).toFixed(letters);

        const doIt = async () => {
            if (!steps) {
                data.value = props.value;
                return;
            }

            data.value += diff;
            steps -=1;
            await delay(20);
            doIt();
        };

        doIt();
    };

    const updateTotal = async () => {
        let steps = 14;
        const letters = ((data.total || 0).toString().split('.')[1] || '').length;
        const diff = +((props.total - data.total) / steps).toFixed(letters);

        const doIt = async () => {
            if (!steps) {
                data.total = props.total;
                return;
            }

            data.total += diff;
            steps -=1;
            await delay(30);
            doIt();
        };

        doIt();
    };

    watch(
        () => props.value,
        () => {
            updateValue();
        }
    );

    watch(
        () => props.total,
        () => {
            updateTotal();
        }
    );

    onMounted(() => {
        data.value = 0;
        data.total = 0;

        updateValue();
        updateTotal();
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (props.value !== null)
    ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        _cache[1] || (_cache[1] = createStaticVNode("<svg width=\"2479\" height=\"1080\" viewBox=\"0 0 2479 1080\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"bg\" data-v-6d217a49><path d=\"M1093.83 975.09L1015.43 1247.58\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M1498.1 988L1591.42 1120.27\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M1470.9 89.9301L1772.72 -152.65\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M1258.34 89.9301L1248.96 -152.65\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M937.03 38.3201L660.97 -186.19\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M1772.72 975.09L2047.07 1125.82\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M1853.53 102.84L2031.59 28\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M799 975.09L745.2 1039.61\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M474.3 543.78L230.94 561.12\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M520.03 89.9301L308.02 -64.8999\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M2047.07 430.51L2823.54 236.03\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M-161 1111.34L261.34 806.71\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M-137.34 65.4199L414.03 406.06\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path><path d=\"M2008.14 655.35L2146.67 709.78\" stroke-width=\"25\" stroke-miterlimit=\"10\" data-v-6d217a49></path></svg>", 1)),
        (props.title)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "title",
              innerHTML: props.title
            }, null, 8 /* PROPS */, _hoisted_2$6))
          : createCommentVNode("v-if", true),
        createBaseVNode("span", _hoisted_3$6, [
          createCommentVNode(" Value "),
          (openBlock(true), createElementBlock(Fragment, null, renderList(valueItems.value, (item, id) => {
            return (openBlock(), createElementBlock(Fragment, { key: id }, [
              (!!item)
                ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    icon: `l-${item}`
                  }, null, 8 /* PROPS */, ["icon"]))
                : (openBlock(), createElementBlock("span", _hoisted_4$5))
            ], 64 /* STABLE_FRAGMENT */))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        (props.total)
          ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "description" }, [
                createBaseVNode("b", {
                  class: "g-c",
                  innerHTML: 'of'
                })
              ], -1 /* HOISTED */)),
              createBaseVNode("span", _hoisted_5$4, [
                createCommentVNode(" Total "),
                (openBlock(true), createElementBlock(Fragment, null, renderList(totalItems.value, (item, id) => {
                  return (openBlock(), createElementBlock(Fragment, { key: id }, [
                    (!!item)
                      ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          icon: `l-${item}`
                        }, null, 8 /* PROPS */, ["icon"]))
                      : (openBlock(), createElementBlock("span", _hoisted_6$1))
                  ], 64 /* STABLE_FRAGMENT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ], 64 /* STABLE_FRAGMENT */))
          : createCommentVNode("v-if", true)
      ]))
    : createCommentVNode("v-if", true)
}
}

};
const BigCounter = /*#__PURE__*/_export_sfc(_sfc_main$9, [['__scopeId',"data-v-6d217a49"],['__file',"D:/bilbo/landing/shared/components/ui/BigCounter.vue"]]);

const LinkButton_vue_vue_type_style_index_0_scoped_e9fcb834_lang = '';

const _hoisted_1$5 = ["href", "target"];
const _hoisted_2$5 = { key: 0 };
const _hoisted_3$5 = { key: 1 };
const _hoisted_4$4 = ["src", "alt"];

const _sfc_main$8 = {
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
      ? (openBlock(), createElementBlock("span", _hoisted_2$5, [
          createVNode(_component_Icon, {
            icon: props.icon
          }, null, 8 /* PROPS */, ["icon"])
        ]))
      : createCommentVNode("v-if", true),
    (props.img)
      ? (openBlock(), createElementBlock("span", _hoisted_3$5, [
          createBaseVNode("img", {
            src: `${unref(baseUrl)}${props.img}`,
            alt: props.name
          }, null, 8 /* PROPS */, _hoisted_4$4)
        ]))
      : createCommentVNode("v-if", true),
    createBaseVNode("span", null, [
      createBaseVNode("span", null, toDisplayString(props.name), 1 /* TEXT */),
      createBaseVNode("span", null, toDisplayString(props.description), 1 /* TEXT */)
    ])
  ], 8 /* PROPS */, _hoisted_1$5))
}
}

};
const LinkButton = /*#__PURE__*/_export_sfc(_sfc_main$8, [['__scopeId',"data-v-e9fcb834"],['__file',"D:/bilbo/landing/shared/components/ui/LinkButton.vue"]]);

const Team_vue_vue_type_style_index_0_scoped_c49fef69_lang = '';

const _hoisted_1$4 = { id: "team" };
const _hoisted_2$4 = ["innerHTML"];
const _hoisted_3$4 = ["innerHTML"];
const _hoisted_4$3 = ["innerHTML"];
const _hoisted_5$3 = { class: "buttons" };

    
const _sfc_main$7 = {
  __name: 'Team',
  setup(__props) {

    const { t } = useI18n();

    const data = reactive({
        total: null
    });

    onMounted(async () => {
        data.total = await api.team().getArtistsCount();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", {
        innerHTML: unref(t)('pages.home.team.title')
      }, null, 8 /* PROPS */, _hoisted_2$4),
      (data.total)
        ? (openBlock(), createBlock(BigCounter, {
            key: 0,
            title: unref(t)('pages.home.team.total'),
            value: data.total,
            class: "position"
          }, null, 8 /* PROPS */, ["title", "value"]))
        : createCommentVNode("v-if", true),
      createBaseVNode("div", {
        class: "description",
        innerHTML: unref(t)('pages.home.team.description')
      }, null, 8 /* PROPS */, _hoisted_3$4),
      createBaseVNode("div", {
        class: "write",
        innerHTML: unref(t)('pages.home.team.write')
      }, null, 8 /* PROPS */, _hoisted_4$3),
      createBaseVNode("div", _hoisted_5$3, [
        createVNode(LinkButton, {
          img: "/img/team/konstantin.png",
          name: "Konstantin Tyufyakin",
          href: "https://t.me/amikonst",
          description: "@amikonst",
          class: "option-3"
        }),
        createVNode(LinkButton, {
          img: "/img/team/gleb.png",
          name: "Gleb Ivanov",
          href: "https://t.me/Exzik",
          description: "@Exzik",
          class: "option-6"
        })
      ])
    ])
  ]))
}
}

};
const Team = /*#__PURE__*/_export_sfc(_sfc_main$7, [['__scopeId',"data-v-c49fef69"],['__file',"D:/bilbo/landing/src/pages/Home/components/Team.vue"]]);

const Backed_vue_vue_type_style_index_0_scoped_c9d1aeba_lang = '';

const _hoisted_1$3 = { id: "backed" };
const _hoisted_2$3 = { class: "items" };
const _hoisted_3$3 = ["href"];
const _hoisted_4$2 = ["src", "alt"];
const _hoisted_5$2 = ["src", "alt"];

    
const _sfc_main$6 = {
  __name: 'Backed',
  setup(__props) {

    const { t } = useI18n();

    const data = reactive({
        items: [],
    });

    onMounted(async () => {
        data.items = await api.backed().getPartners();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.home.backed.title')), 1 /* TEXT */),
      createBaseVNode("div", _hoisted_2$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.items, (item, id) => {
          return (openBlock(), createElementBlock("a", {
            target: "_blank",
            key: id,
            href: `${item.link}?ref=bilbo`
          }, [
            createBaseVNode("img", {
              src: `${unref(baseUrl)}/img/backed/${item.logo}`,
              alt: item.name
            }, null, 8 /* PROPS */, _hoisted_4$2),
            createBaseVNode("img", {
              src: `${unref(baseUrl)}/img/backed/${item.logo}`,
              alt: item.name
            }, null, 8 /* PROPS */, _hoisted_5$2)
          ], 8 /* PROPS */, _hoisted_3$3))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}
}

};
const Backed = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-c9d1aeba"],['__file',"D:/bilbo/landing/src/pages/Home/components/Backed.vue"]]);

const Steps_vue_vue_type_style_index_0_scoped_8135f9bc_lang = '';

const _sfc_main$5 = {
  __name: 'Steps',
  props: {
        total: { type: Number, default: 1 },
        value: { type: Number, default: 1 }
    },
  setup(__props) {

    const props = __props;

    const items = computed(() => {
        return Array(props.total);
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("ul", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
      return (openBlock(), createElementBlock("li", {
        class: normalizeClass({ active: id + 1 === props.value })
      }, null, 2 /* CLASS */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}
}

};
const Steps = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-8135f9bc"],['__file',"D:/bilbo/landing/shared/components/ui/Steps.vue"]]);

const Monetization_vue_vue_type_style_index_0_scoped_f5de741a_lang = '';

const _hoisted_1$2 = { id: "monetization" };
const _hoisted_2$2 = { class: "title" };
const _hoisted_3$2 = { class: "items desktop-only" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6 = ["src"];
const _hoisted_7 = ["innerHTML"];

    
const _sfc_main$4 = {
  __name: 'Monetization',
  setup(__props) {

    const { t, tm, rt } = useI18n();
    const locale = stores.locale();

    const data = reactive({
        slides: []
    });

    const id = computed(() => {
        if (!data.slides?.length) {
            return;
        }

        return items.value.findIndex(item => item.id === data.slides[data.slides.length - 1].id);
    });

    const items = computed(() => {
        return Array.isArray(tm('pages.home.monetization.items')) ? tm('pages.home.monetization.items').map(item => ({
                id: rt(item.id),
                description: rt(item.description),
                code: rt(item.code),
                name: rt(item.name)
            })) : [];
    });

    const next = () => {
        let nextId = id.value;

        if (nextId === -1) {
            return;
        }

        nextId += 1;
        if (nextId > items.value.length - 1) {
            nextId = 0;
        }

        data.slides.push(items.value[nextId]);
    };

    const prev = () => {
        let nextId = id.value;

        if (nextId === -1) {
            return;
        }

        nextId -= 1;
        if (nextId < 0) {
            nextId = items.value.length - 1;
        }

        data.slides.push(items.value[nextId]);
    };

    const start = () => {
        if (!items.value?.length) {
            setTimeout(() => {
                start();
            }, 200);
            return;
        }
        data.slides = items.value?.length ? [items.value[0]] : [];
    };


    onMounted(() => {
        start();
    });

    watch(() => locale.locale, () => {
        start();
    });

return (_ctx, _cache) => {
  const _directive_touch = resolveDirective("touch");

  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", null, [
      createBaseVNode("div", _hoisted_2$2, [
        createBaseVNode("h2", null, toDisplayString(unref(t)('pages.home.monetization.title')), 1 /* TEXT */)
      ]),
      createBaseVNode("div", _hoisted_3$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
          return (openBlock(), createElementBlock("div", { key: id }, [
            createBaseVNode("span", null, [
              createBaseVNode("img", {
                src: `${unref(baseUrl)}/img/monetization/${item.code}.png`,
                alt: "Bilbo"
              }, null, 8 /* PROPS */, _hoisted_4$1),
              createTextVNode(" " + toDisplayString(item.name), 1 /* TEXT */)
            ]),
            createBaseVNode("span", {
              innerHTML: item.description
            }, null, 8 /* PROPS */, _hoisted_5$1)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      withDirectives((openBlock(), createElementBlock("div", {
        class: "items mobile-only",
        onClick: next
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.slides, (item, id) => {
          return (openBlock(), createElementBlock("div", { key: id }, [
            createBaseVNode("span", null, [
              createBaseVNode("img", {
                src: `${unref(baseUrl)}/img/monetization/${item.code}.png`,
                alt: "Bilbo"
              }, null, 8 /* PROPS */, _hoisted_6),
              createTextVNode(" " + toDisplayString(item.name), 1 /* TEXT */)
            ]),
            createBaseVNode("span", {
              innerHTML: item.description
            }, null, 8 /* PROPS */, _hoisted_7)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])), [
        [
          _directive_touch,
          next,
          "swipe",
          { left: true }
        ],
        [
          _directive_touch,
          prev,
          "swipe",
          { right: true }
        ]
      ]),
      createVNode(Steps, {
        class: "mobile-only",
        total: items.value.length,
        value: id.value + 1
      }, null, 8 /* PROPS */, ["total", "value"])
    ])
  ]))
}
}

};
const Monetization = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-f5de741a"],['__file',"D:/bilbo/landing/src/pages/Home/components/Monetization.vue"]]);

const AnyQuestions_vue_vue_type_style_index_0_scoped_e62951bc_lang = '';

const _hoisted_1$1 = { id: "any-questions" };
const _hoisted_2$1 = ["innerHTML"];
const _hoisted_3$1 = { class: "buttons" };

    
const _sfc_main$3 = {
  __name: 'AnyQuestions',
  setup(__props) {

    const { t } = useI18n();

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", {
        innerHTML: unref(t)('pages.home.any-questions.title')
      }, null, 8 /* PROPS */, _hoisted_2$1),
      createBaseVNode("label", null, toDisplayString(unref(t)('pages.home.any-questions.description')), 1 /* TEXT */),
      createBaseVNode("div", _hoisted_3$1, [
        createVNode(LinkButton, {
          icon: "telegram",
          name: unref(t)('pages.home.any-questions.telegram'),
          href: "https://t.me/bilbomusic",
          description: "@bilbomusic",
          class: "option-3"
        }, null, 8 /* PROPS */, ["name"]),
        createVNode(LinkButton, {
          icon: "email",
          href: "mailto:help@bilbomusic.com",
          name: unref(t)('pages.home.any-questions.mail'),
          description: unref(t)('pages.home.any-questions.mail-us'),
          class: "option-5"
        }, null, 8 /* PROPS */, ["name", "description"])
      ])
    ])
  ]))
}
}

};
const AnyQuestions = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-e62951bc"],['__file',"D:/bilbo/landing/src/pages/Home/components/AnyQuestions.vue"]]);

const FAQ_vue_vue_type_style_index_0_scoped_32a48cf7_lang = '';

const _hoisted_1 = { id: "faq" };
const _hoisted_2 = {
  key: 0,
  class: "spoilers"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];

    
const _sfc_main$2 = {
  __name: 'FAQ',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const data = reactive({
        opened: {}
    });

    const items = computed(() => {
        return Array.isArray(tm('pages.home.faq.items')) ? tm('pages.home.faq.items').map(item => ({
                id: rt(item.id),
                description: rt(item.description),
                name: rt(item.name)
            })) : [];
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.home.faq.title')), 1 /* TEXT */),
      createCommentVNode(" <div class=\"items\">\r\n                <div v-for=\"(item, id) in items\"\r\n                    :key=\"id\"\r\n                >\r\n                    <span class=\"img\">\r\n                        <img :src=\"`${baseUrl}/img/faq/${item.code}.png`\" :alt=\"item.name\" />\r\n                    </span>\r\n                    <span>\r\n                        <b>{{ item.name }}</b>\r\n                        <span>{{ item.description }}</span>\r\n                    </span>\r\n                </div>\r\n            </div> "),
      (items.value?.length)
        ? (openBlock(), createElementBlock("ul", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
              return (openBlock(), createElementBlock("li", {
                key: id,
                class: normalizeClass({ opened: data.opened[item.id] })
              }, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: $event => (data.opened[item.id] = !data.opened[item.id])
                }, [
                  createBaseVNode("span", {
                    innerHTML: item.name
                  }, null, 8 /* PROPS */, _hoisted_4),
                  createVNode(_component_Icon, { icon: "arrow" })
                ], 8 /* PROPS */, _hoisted_3),
                createBaseVNode("div", {
                  innerHTML: item.description
                }, null, 8 /* PROPS */, _hoisted_5)
              ], 2 /* CLASS */))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : createCommentVNode("v-if", true)
    ])
  ]))
}
}

};
const FAQ = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-32a48cf7"],['__file',"D:/bilbo/landing/src/pages/Home/components/FAQ.vue"]]);

const _sfc_main$1 = {
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
const Ready = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__file',"D:/bilbo/landing/shared/components/ui/Ready.vue"]]);

const _sfc_main = {
  __name: 'Home',
  setup(__props) {

    const init = async () => {
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(Welcome),
    createCommentVNode(" <Trust /> "),
    createVNode(Slogans),
    createVNode(Features),
    createVNode(TON),
    createVNode(Kols),
    createVNode(Team),
    createVNode(Backed),
    createVNode(Monetization),
    createVNode(FAQ),
    createVNode(AnyQuestions),
    createVNode(Ready, {
      page: "home",
      onReady: _cache[0] || (_cache[0] = () => {}),
      init: init
    })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Home = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/landing/src/pages/Home/Home.vue"]]);

export { Home as default };
