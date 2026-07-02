globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-D20_NPaU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20d2-/8mjDU2vouDUWgrPHOyhKbdFKNM\"",
		"mtime": "2026-07-02T16:08:30.396Z",
		"size": 8402,
		"path": "../public/assets/about-D20_NPaU.js"
	},
	"/assets/agnes-BoVNDs14.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c4df-NYED0D4ZZxEf4UiygShloTK7vHU\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 115935,
		"path": "../public/assets/agnes-BoVNDs14.jpg"
	},
	"/assets/blog-BL5YeVRr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aac-YiAsw7L3n76ypt5IbgGxEetyi4o\"",
		"mtime": "2026-07-02T16:08:30.396Z",
		"size": 2732,
		"path": "../public/assets/blog-BL5YeVRr.js"
	},
	"/assets/blog._slug-B6h1rLCC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a8-knBbwM83R6+eQE1/HYfO32ocNL4\"",
		"mtime": "2026-07-02T16:08:30.396Z",
		"size": 424,
		"path": "../public/assets/blog._slug-B6h1rLCC.js"
	},
	"/assets/benedict-Czj88gff.jpg": {
		"type": "image/jpeg",
		"etag": "\"30f7b-/kCiZdCvgnRucn8mIUWaq2dtEXM\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 200571,
		"path": "../public/assets/benedict-Czj88gff.jpg"
	},
	"/assets/blog._slug-DzYjECkM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11d6-Oal3bRCsk55KpcL6C8lzan2anMo\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 4566,
		"path": "../public/assets/blog._slug-DzYjECkM.js"
	},
	"/assets/brick-house-BhRCvUbM.jpg": {
		"type": "image/jpeg",
		"etag": "\"230dd-PPyk8flxMi1vw84Y7WKDSOxZ3Lk\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 143581,
		"path": "../public/assets/brick-house-BhRCvUbM.jpg"
	},
	"/assets/brick-shell-D50zEhDh.jpg": {
		"type": "image/jpeg",
		"etag": "\"138bd-lMUaUMAkNDjvqyBdSZS8hQFItaY\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 80061,
		"path": "../public/assets/brick-shell-D50zEhDh.jpg"
	},
	"/assets/contact-DYv1kbK4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1176-k5fuwZdoGDuc1+UPybALCJiH1Dw\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 4470,
		"path": "../public/assets/contact-DYv1kbK4.js"
	},
	"/assets/decking-itNdqj0Y.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ad26-MJ32IO1KNTdWfP7zJqD8rVxxmrE\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 175398,
		"path": "../public/assets/decking-itNdqj0Y.jpg"
	},
	"/assets/drainage-work-BOTl26rT.jpg": {
		"type": "image/jpeg",
		"etag": "\"2575e-p3bE1fXbTST2cBzJnOlkbJD/lQ4\"",
		"mtime": "2026-07-02T16:08:30.418Z",
		"size": 153438,
		"path": "../public/assets/drainage-work-BOTl26rT.jpg"
	},
	"/assets/estate-inspection-BuYMm5ka.jpg": {
		"type": "image/jpeg",
		"etag": "\"2138e-1U3eGvESM5XWWU5tU5kk7GhGXDw\"",
		"mtime": "2026-07-02T16:08:30.421Z",
		"size": 136078,
		"path": "../public/assets/estate-inspection-BuYMm5ka.jpg"
	},
	"/assets/electrical-conduits-O28zz5K9.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fd50-n6mBDv7khH0Wf+Nd+XM/H7hQu44\"",
		"mtime": "2026-07-02T16:08:30.421Z",
		"size": 195920,
		"path": "../public/assets/electrical-conduits-O28zz5K9.jpg"
	},
	"/assets/foundation-cast-rK6JyJ_X.jpg": {
		"type": "image/jpeg",
		"etag": "\"121ee-sXQ2A8vS5bna1rJjxD/xOv1Esq8\"",
		"mtime": "2026-07-02T16:08:30.424Z",
		"size": 74222,
		"path": "../public/assets/foundation-cast-rK6JyJ_X.jpg"
	},
	"/assets/gloria-DHeTBZxs.jpg": {
		"type": "image/jpeg",
		"etag": "\"1436e-RQsx9vF7+xQQwrkPUfLSw8T/mi0\"",
		"mtime": "2026-07-02T16:08:30.424Z",
		"size": 82798,
		"path": "../public/assets/gloria-DHeTBZxs.jpg"
	},
	"/assets/jsx-runtime-bzQ4Vb5N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20d8-vMfP+4a4ykIjbw4InHkj3E5HWt0\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 8408,
		"path": "../public/assets/jsx-runtime-bzQ4Vb5N.js"
	},
	"/assets/jude-CHYc2oAo.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf1d-rvGllr4dtPM32ntGzXMxqhUAMqA\"",
		"mtime": "2026-07-02T16:08:30.424Z",
		"size": 48925,
		"path": "../public/assets/jude-CHYc2oAo.jpg"
	},
	"/assets/Lightbox-BIxLS4RU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41d-JCtg3LopAMkdBMJvNRk6yszgCnc\"",
		"mtime": "2026-07-02T16:08:30.381Z",
		"size": 1053,
		"path": "../public/assets/Lightbox-BIxLS4RU.js"
	},
	"/assets/index-DKTZp61v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61406-8T1GjOYbHKluNcOfQ9jAv+E7+Vk\"",
		"mtime": "2026-07-02T16:08:30.381Z",
		"size": 398342,
		"path": "../public/assets/index-DKTZp61v.js"
	},
	"/assets/marcus-Cntr_qdy.jpg": {
		"type": "image/jpeg",
		"etag": "\"1981f-fjz2DjrxdBRJZwRsp6f64ODvzmo\"",
		"mtime": "2026-07-02T16:08:30.430Z",
		"size": 104479,
		"path": "../public/assets/marcus-Cntr_qdy.jpg"
	},
	"/assets/foundation-Dq8wBRMs.jpg": {
		"type": "image/jpeg",
		"etag": "\"7b5be-pZmLyyiHX3KfQqjGK0kR+cLpFV4\"",
		"mtime": "2026-07-02T16:08:30.424Z",
		"size": 505278,
		"path": "../public/assets/foundation-Dq8wBRMs.jpg"
	},
	"/assets/PageHero-DMYVuAv8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d9-ooJNFaCu8sIknoM0whRhIdqVLKg\"",
		"mtime": "2026-07-02T16:08:30.396Z",
		"size": 1497,
		"path": "../public/assets/PageHero-DMYVuAv8.js"
	},
	"/assets/portfolio-DrbUVkyV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa5-9OHgpffwUJIEprg0/BbngXzNbd4\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 2725,
		"path": "../public/assets/portfolio-DrbUVkyV.js"
	},
	"/assets/prisca-CsWVKtVi.jpg": {
		"type": "image/jpeg",
		"etag": "\"cdd2-Pefyce7Hm74j3PHnnlfYuFut4jo\"",
		"mtime": "2026-07-02T16:08:30.430Z",
		"size": 52690,
		"path": "../public/assets/prisca-CsWVKtVi.jpg"
	},
	"/assets/logo-BITlqERN.png": {
		"type": "image/png",
		"etag": "\"ffdd5-ZGjW6He95L1Tvlp91jcdV6ZQFy0\"",
		"mtime": "2026-07-02T16:08:30.424Z",
		"size": 1048021,
		"path": "../public/assets/logo-BITlqERN.png"
	},
	"/assets/properties-Efxs4t9c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3128-Ct/DWZfchvOe16+kItLrpg+nn4s\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 12584,
		"path": "../public/assets/properties-Efxs4t9c.js"
	},
	"/assets/Reveal-YTuDO35Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"322-fFAn+QvsmCW46z2Qge65dwjrx3s\"",
		"mtime": "2026-07-02T16:08:30.396Z",
		"size": 802,
		"path": "../public/assets/Reveal-YTuDO35Z.js"
	},
	"/assets/rebar-column-N9ZkxBwk.jpg": {
		"type": "image/jpeg",
		"etag": "\"799f5-/Rsk/ZVfsDmeUMT3oMsxLKQpmmI\"",
		"mtime": "2026-07-02T16:08:30.430Z",
		"size": 498165,
		"path": "../public/assets/rebar-column-N9ZkxBwk.jpg"
	},
	"/assets/routes-CoefuOuH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d5b-Lx2dffuJCVvjDeC6BG89yaUUaDA\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 11611,
		"path": "../public/assets/routes-CoefuOuH.js"
	},
	"/assets/rooftop-slab-D6GE3cDP.jpg": {
		"type": "image/jpeg",
		"etag": "\"708dc-M1NEdSet9ly9WIRUP2r3ij5FdbM\"",
		"mtime": "2026-07-02T16:08:30.430Z",
		"size": 461020,
		"path": "../public/assets/rooftop-slab-D6GE3cDP.jpg"
	},
	"/assets/services-Cwh0LSQ5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aff-n43K0R2fOrTEDLVl1nYeVJoTHp8\"",
		"mtime": "2026-07-02T16:08:30.403Z",
		"size": 2815,
		"path": "../public/assets/services-Cwh0LSQ5.js"
	},
	"/assets/ruth-GdFFweGL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bb1b-rKv2CTSjkvWFubo8vUzTM39IA0U\"",
		"mtime": "2026-07-02T16:08:30.430Z",
		"size": 113435,
		"path": "../public/assets/ruth-GdFFweGL.jpg"
	},
	"/assets/site-visit-D44_0XF0.jpg": {
		"type": "image/jpeg",
		"etag": "\"2928d-niDCHLCeS9EkR8J7eeJiGZB7cZI\"",
		"mtime": "2026-07-02T16:08:30.430Z",
		"size": 168589,
		"path": "../public/assets/site-visit-D44_0XF0.jpg"
	},
	"/assets/styles-BaX4Cbxk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12f4d-OWq0llXY3Vy1XaUuDjtaQKr0WBw\"",
		"mtime": "2026-07-02T16:08:30.447Z",
		"size": 77645,
		"path": "../public/assets/styles-BaX4Cbxk.css"
	},
	"/assets/surveyed-land-C1potHQS.jpg": {
		"type": "image/jpeg",
		"etag": "\"26a27-TOnEwOjFpsV2gx+NNAUN5lFWmtc\"",
		"mtime": "2026-07-02T16:08:30.447Z",
		"size": 158247,
		"path": "../public/assets/surveyed-land-C1potHQS.jpg"
	},
	"/assets/two-storey-shell-rxqq3TPm.jpg": {
		"type": "image/jpeg",
		"etag": "\"34b56-WKVFb5QjrRJesNvWTXoqp70oGlQ\"",
		"mtime": "2026-07-02T16:08:30.447Z",
		"size": 215894,
		"path": "../public/assets/two-storey-shell-rxqq3TPm.jpg"
	},
	"/assets/slab-reinforcement-CiSB2NnQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"8b7f7-eUdc3SvfhGu0jnhy8wDMbrt2ksY\"",
		"mtime": "2026-07-02T16:08:30.430Z",
		"size": 571383,
		"path": "../public/assets/slab-reinforcement-CiSB2NnQ.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy__0OY98 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy__0OY98
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
