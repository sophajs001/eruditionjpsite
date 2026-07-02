import { n as __toESM } from "../_runtime.mjs";
import { i as projectGallery, s as siteImages, u as waLink } from "./company-BaFVMsHD.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-3bfcuTTY.mjs";
import { t as Reveal } from "./Reveal-CZbfM8d3.mjs";
import { t as Lightbox } from "./Lightbox-T1IAWRAS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-BqdwPlra.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Portfolio() {
	const projects = projectGallery;
	const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
	const [cat, setCat] = (0, import_react.useState)("All");
	const [lb, setLb] = (0, import_react.useState)(null);
	const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Portfolio",
			title: "Selected projects",
			subtitle: "A small window into what we have built. Tap any image to view it full screen.",
			image: siteImages.twoStoreyShell,
			crumbs: [{ label: "Home" }, { label: "Portfolio" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: "rounded-full px-4 py-1.5 text-xs font-semibold transition",
					style: {
						background: cat === c ? "#0056b3" : "#F3F4F6",
						color: cat === c ? "white" : "#374151"
					},
					children: c
				}, c))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 6 * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setLb({
								img: p.img,
								title: p.title,
								desc: p.desc
							}),
							className: "relative block h-56 w-full overflow-hidden",
							"aria-label": `View ${p.title}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-gray-900",
									children: "🔍 View"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-semibold uppercase tracking-widest",
									style: { color: "#0056b3" },
									children: p.cat
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-base font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-xs text-gray-500",
									children: ["📍 ", p.loc]
								}),
								p.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-gray-600",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink(`Hello Erudition JP, I'd like to know more about your ${p.title} project.`),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "mt-3 inline-flex text-sm font-semibold",
									style: { color: "#0056b3" },
									children: "Enquire on WhatsApp →"
								})
							]
						})]
					})
				}, p.title))
			})]
		}),
		lb && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			src: lb.img,
			alt: lb.title,
			caption: `${lb.title}${lb.desc ? " — " + lb.desc : ""}`,
			onClose: () => setLb(null)
		})
	] });
}
//#endregion
export { Portfolio as component };
