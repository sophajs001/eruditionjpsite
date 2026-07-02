import { t as blogPosts } from "./company-BaFVMsHD.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-3bfcuTTY.mjs";
import { t as Reveal } from "./Reveal-CZbfM8d3.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-BB9Lvc8x.js
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	const [featured, ...rest] = blogPosts;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Blog",
		title: "Insights and guides",
		subtitle: "Practical advice from our team for builders, buyers and investors.",
		image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1800&q=80",
		crumbs: [{ label: "Home" }, { label: "Blog" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog/$slug",
			params: { slug: featured.slug },
			className: "grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: featured.image,
				alt: featured.title,
				className: "h-72 w-full object-cover md:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-semibold uppercase tracking-widest",
						style: { color: "#0056b3" },
						children: featured.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-bold md:text-3xl",
						children: featured.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-gray-600",
						children: featured.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-xs text-gray-500",
						children: [
							featured.author,
							" · ",
							featured.readTime,
							" read"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 inline-flex text-sm font-semibold",
						style: { color: "#0056b3" },
						children: "Read article →"
					})
				]
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: rest.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 6 * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "block h-44 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.title,
							className: "h-full w-full object-cover transition duration-500 hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-widest",
								style: { color: "#0056b3" },
								children: p.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-base font-bold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-gray-600 line-clamp-3",
								children: p.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 text-xs text-gray-500",
								children: [
									p.author,
									" · ",
									p.readTime,
									" read"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog/$slug",
								params: { slug: p.slug },
								className: "mt-4 inline-flex w-fit items-center gap-1 rounded-lg px-4 py-2 text-xs font-bold text-white transition hover:opacity-90",
								style: { background: "#0056b3" },
								children: "Read article →"
							})
						]
					})]
				})
			}, p.slug))
		})]
	})] });
}
//#endregion
export { Blog as component };
