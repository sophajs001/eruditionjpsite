import { n as __toESM } from "../_runtime.mjs";
import { o as services, u as waLink } from "./company-BaFVMsHD.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-3bfcuTTY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DjI7yHbR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var accents = {
	brand: "#0056b3",
	amber: "#D97706",
	green: "#16A34A",
	purple: "#9333EA"
};
function Services() {
	const [open, setOpen] = (0, import_react.useState)("design-construction");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our Services",
		title: "Four pillars, one reliable partner.",
		subtitle: "From the first sketch to the final brick, including every material, document and decision in between.",
		image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80",
		crumbs: [{ label: "Home" }, { label: "Services" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-4",
			children: services.map((s) => {
				const isOpen = open === s.id;
				const color = accents[s.color];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: s.id,
					className: "overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? "" : s.id),
						className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-base font-bold",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold",
							style: { color },
							children: s.tag
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl",
							style: { color },
							children: isOpen ? "−" : "+"
						})]
					}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-gray-100 p-6",
						style: { background: "#FAFBFD" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-gray-700",
								children: s.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-2 text-sm text-gray-700 md:grid-cols-2",
								children: s.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: { color },
										children: "◆"
									}), i]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink(`Hello Erudition JP ,  I'd like to enquire about ${s.title}.`),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "rounded-xl px-5 py-2.5 text-sm font-semibold text-white",
									style: { background: color },
									children: "Enquire on WhatsApp"
								})
							})
						]
					})]
				}, s.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: "How Every Engagement Starts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-4",
				children: [
					[
						"01",
						"Reach Out",
						"WhatsApp, call or email."
					],
					[
						"02",
						"We Listen",
						"Free consultation, no obligation."
					],
					[
						"03",
						"We Plan",
						"Scope, BoQ, timeline."
					],
					[
						"04",
						"We Deliver",
						"On-time, on-spec, on-budget."
					]
				].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-gray-100 bg-white p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-black",
							style: { color: "#0056b3" },
							children: n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm font-bold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-gray-600",
							children: d
						})
					]
				}, n))
			})]
		})]
	})] });
}
//#endregion
export { Services as component };
