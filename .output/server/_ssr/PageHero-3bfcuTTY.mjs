import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-3bfcuTTY.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, image, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80",
				alt: "",
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(135deg, rgba(0,20,60,0.88), rgba(0,40,100,0.72) 55%, rgba(0,0,0,0.55))" }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4 py-20 text-white md:py-28",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ejp-fade-up mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-sm",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "ejp-fade-up font-extrabold leading-tight",
					style: {
						fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
						animationDelay: ".05s"
					},
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ejp-fade-up mt-4 max-w-2xl text-sm text-white/85 md:text-base",
					style: { animationDelay: ".15s" },
					children: subtitle
				}),
				crumbs && crumbs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ejp-fade-up mt-6 flex flex-wrap items-center gap-2 text-xs text-white/70",
					style: { animationDelay: ".25s" },
					children: crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "opacity-50",
							children: "/"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label })]
					}, c.label))
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };
