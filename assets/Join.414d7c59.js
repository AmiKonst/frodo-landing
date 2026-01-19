import { _ as _export_sfc, d as useI18n, r as resolveComponent, o as openBlock, e as createElementBlock, f as createBaseVNode, g as unref, h as createVNode, B as Button, s as stores, k as reactive, i as computed, w as watch, l as onMounted, t as toDisplayString, p as createCommentVNode, G as normalizeStyle, F as Fragment, j as renderList, n as normalizeClass, H as isMobile, I as ref, m as baseUrl, J as nextTick } from './index.92c5e5d4.js';
import { L as LinkButton, R as Ready } from './Ready.af36fae0.js';

const Intro_vue_vue_type_style_index_0_scoped_b3ad1dcf_lang = '';

const _hoisted_1$3 = { id: "intro" };
const _hoisted_2$3 = ["innerHTML"];
const _hoisted_3$3 = ["innerHTML"];
const _hoisted_4$1 = {
  target: "_blank",
  href: "https://forms.gle/DqQc3WBLFQqVKUyo6"
};
const _hoisted_5$1 = { class: "scroll-down" };

    
const _sfc_main$4 = {
  __name: 'Intro',
  setup(__props) {

    const { t } = useI18n();

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", {
        innerHTML: unref(t)('pages.join.intro.title')
      }, null, 8 /* PROPS */, _hoisted_2$3),
      createBaseVNode("p", {
        innerHTML: unref(t)('pages.join.intro.slogan')
      }, null, 8 /* PROPS */, _hoisted_3$3),
      createBaseVNode("a", _hoisted_4$1, [
        createVNode(Button, {
          name: unref(t)('pages.join.join')
        }, null, 8 /* PROPS */, ["name"])
      ]),
      createBaseVNode("div", _hoisted_5$1, [
        createVNode(_component_Icon, { icon: "scroll-down" }),
        createVNode(_component_Icon, { icon: "scroll-down" }),
        createVNode(_component_Icon, { icon: "scroll-down" })
      ])
    ])
  ]))
}
}

};
const Intro = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-b3ad1dcf"],['__file',"D:/bilbo/landing/src/pages/Join/components/Intro.vue"]]);

const Criteria_vue_vue_type_style_index_0_scoped_890e4e4b_lang = '';

const _hoisted_1$2 = { id: "criteria" };
const _hoisted_2$2 = { class: "screens" };
const _hoisted_3$2 = { class: "description" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["onClick"];

    
const _sfc_main$3 = {
  __name: 'Criteria',
  setup(__props) {

    const { t, tm, rt } = useI18n();
    const locale = stores.locale();
    const video = stores.video();

    const data = reactive({
        id: 0,
        code: '',
        loading: false
    });

    const description = reactive({
        a: '',
        b: '',
        opacityA: '',
        opacityB: '',
        active: 'A'
    });

    const items = computed(() => {
        return Array.isArray(tm('pages.join.criteria.items')) ? tm('pages.join.criteria.items').map(item => ({
                id: +rt(item.id),
                description: rt(item.description),
                code: rt(item.code),
                name: rt(item.name)
            })) : [];
    });

    const setDescription = (payload) => {
        if (description.active === 'A') {
            description.b = payload;
            description.opacityB = 0;

            setTimeout(() => {
                description.opacityA = 0;
                description.opacityB = 1;
            }, 10);
            setTimeout(() => {
                description.active = 'B';
            }, 600);
        }

        if (description.active === 'B') {
            description.a = payload;
            description.opacityA = 0;

            setTimeout(() => {
                description.opacityB = 0;
                description.opacityA = 1;
            }, 10);
            setTimeout(() => {
                description.active = 'A';
            }, 600);
        }
    };

    const setActive = (id) => {
        if (data.id != id) {
            data.loading = true;
        }

        if (!id && !items.value?.length) {
            setTimeout(() => {
                setActive(1);
            }, 200);
            return;
        }

        data.id = id;

        const value = items.value.find(item => item.id === id);

        setDescription(value?.description);

        if (isMobile()) {
            video.open({ url: `video/join/${value.code}.mp4`});
        }

        setTimeout(() => {
            data.code = value?.code;
        }, 100);
    };

    watch(() => locale.locale, () => {
        setActive(data.id);
        data.loading = false;
    });

    onMounted(() => {
        setActive(1);
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", null, [
      createBaseVNode("h2", null, toDisplayString(unref(t)('pages.join.criteria.title')), 1 /* TEXT */),
      createBaseVNode("div", _hoisted_2$2, [
        createCommentVNode(" <img :src='`${baseUrl}/img/vult-screens.jpg`' alt=\"Vultisig\" /> "),
        createBaseVNode("div", _hoisted_3$2, [
          (description.active === 'A')
            ? (openBlock(), createElementBlock("label", {
                key: 0,
                innerHTML: description.a,
                class: "fade-text",
                style: normalizeStyle({ opacity: description.opacityA })
              }, null, 12 /* STYLE, PROPS */, _hoisted_4))
            : (openBlock(), createElementBlock("label", {
                key: 1,
                innerHTML: description.b,
                class: "fade-text",
                style: normalizeStyle({ opacity: description.opacityB })
              }, null, 12 /* STYLE, PROPS */, _hoisted_5))
        ])
      ]),
      createBaseVNode("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
          return (openBlock(), createElementBlock("li", {
            key: id,
            class: normalizeClass({ active: item.id === data.id }),
            onClick: $event => (setActive(item.id))
          }, [
            createCommentVNode(" <img :src=\"`${baseUrl}/img/criteria/${item.code}`\" :alt=\"item.title\" /> "),
            createBaseVNode("span", null, toDisplayString(item.name), 1 /* TEXT */)
          ], 10 /* CLASS, PROPS */, _hoisted_6))
        }), 128 /* KEYED_FRAGMENT */)),
        createBaseVNode("li", null, [
          createVNode(_component_Icon, { icon: "star" }),
          createBaseVNode("span", null, toDisplayString(unref(t)('pages.join.more')), 1 /* TEXT */)
        ])
      ])
    ])
  ]))
}
}

};
const Criteria = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-890e4e4b"],['__file',"D:/bilbo/landing/src/pages/Join/components/Criteria.vue"]]);

const AnyQuestions_vue_vue_type_style_index_0_scoped_20d1b849_lang = '';

const _hoisted_1$1 = { id: "any-questions" };
const _hoisted_2$1 = ["innerHTML"];
const _hoisted_3$1 = { class: "buttons" };

    
const _sfc_main$2 = {
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
const AnyQuestions = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-20d1b849"],['__file',"D:/bilbo/landing/src/pages/home/components/AnyQuestions.vue"]]);

const Videos_vue_vue_type_style_index_0_lang = '';

const _hoisted_1 = { id: "videos-box" };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];

const fadeDuration = 1000; // 1 секунда плавного перехода


const _sfc_main$1 = {
  __name: 'Videos',
  setup(__props) {

const video = stores.video();

// ссылки на видео элементы
const videoARef = ref(null);
const videoBRef = ref(null);

const videoA = reactive({
    src: null,
    opacity: 1,
    speed: 1,
    loop: true,
});
const videoB = reactive({
    src: null,
    opacity: 0,
    speed: 1,
    loop: true,
});

let active = 'A';
watch(
    () => video.item,
    async (val) => {
        if (!val) return
        const url = `${baseUrl}/${val.url}`;
        const speed = val.speed || 1;
        const repeat = val.repeat !== false;

        // Первое видео
        if (!videoA.src && !videoB.src) {
            videoA.src = url;
            videoA.opacity = 1;
            videoA.speed = speed;
            videoA.loop = repeat;

            await nextTick();
            if (videoARef.value) {
                videoARef.value.playbackRate = speed;
                videoARef.value.loop = repeat;
            }
            return
        }

        // Определяем, какое видео следующее
        const next = active === 'A' ? videoB : videoA;
        const nextRef = active === 'A' ? videoBRef : videoARef;
        const current = active === 'A' ? videoA : videoB;

        next.src = url;
        next.opacity = 0;
        next.speed = speed;
        next.loop = repeat;

        await nextTick();

        // Применяем параметры и подготавливаем видео
        if (nextRef.value) {
            nextRef.value.playbackRate = speed;
            nextRef.value.loop = repeat;
            nextRef.value.currentTime = 0;
            nextRef.value.play().catch(() => {});
        }

        // Плавный переход
        setTimeout(() => {
            next.opacity = 1;
            current.opacity = 0;

            setTimeout(() => {
                active = active === 'A' ? 'B' : 'A';
            }, fadeDuration);
        }, 100);
    },
    { immediate: true }
);

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("video", {
      ref_key: "videoARef",
      ref: videoARef,
      src: videoA.src,
      style: normalizeStyle({ opacity: videoA.opacity }),
      autoplay: "",
      muted: "",
      playsinline: ""
    }, null, 12 /* STYLE, PROPS */, _hoisted_2),
    createBaseVNode("video", {
      ref_key: "videoBRef",
      ref: videoBRef,
      src: videoB.src,
      style: normalizeStyle({ opacity: videoB.opacity }),
      autoplay: "",
      muted: "",
      playsinline: ""
    }, null, 12 /* STYLE, PROPS */, _hoisted_3)
  ]))
}
}

};
const Videos = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__file',"D:/bilbo/landing/shared/components/ui/Videos.vue"]]);

const _sfc_main = {
  __name: 'Join',
  setup(__props) {

    const init = async () => {
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createVNode(Videos),
    createVNode(Intro),
    createVNode(Criteria),
    createVNode(AnyQuestions),
    createVNode(Ready, {
      page: "join",
      onReady: _cache[0] || (_cache[0] = () => {}),
      init: init
    })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Join = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/landing/src/pages/Join/Join.vue"]]);

export { Join as default };
