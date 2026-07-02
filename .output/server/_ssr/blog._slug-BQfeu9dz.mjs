import { n as company, t as blogPosts, u as waLink } from "./company-BaFVMsHD.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./blog._slug-CY8bZf2C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BQfeu9dz.js
var import_jsx_runtime = require_jsx_runtime();
function Post() {
	const post = Route.useLoaderData();
	const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
	const shareUrl = typeof window !== "undefined" ? window.location.href : `https://ereudition-jp-suite.lovable.app/blog/${post.slug}`;
	const shareText = `${post.title} , ${company.short}`;
	const shares = {
		whatsapp: waLink(`${shareText}\n${shareUrl}`),
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
		twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
		linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
		telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
	};
	const copyLink = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl);
			alert("Link copied to clipboard");
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/blog",
				className: "text-xs font-semibold",
				style: { color: "#0056b3" },
				children: "← Back to blog"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-[10px] font-semibold uppercase tracking-widest",
				style: { color: "#0056b3" },
				children: post.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-bold leading-tight md:text-4xl",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 text-xs text-gray-500",
				children: [
					post.author,
					" · ",
					post.readTime,
					" read"
				]
			}),
			post.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image,
				alt: post.title,
				className: "mt-6 h-72 w-full rounded-2xl object-cover shadow-sm md:h-96"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg font-medium text-gray-800",
				children: post.excerpt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose prose-slate mt-8 max-w-none",
				children: post.body.map((line, i) => {
					if (line.startsWith("## ")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 text-xl font-bold text-gray-900 md:text-2xl",
						children: line.replace(/^##\s+/, "")
					}, i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[15px] leading-7 text-gray-700",
						children: line
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-bold text-gray-900",
					children: "Share this article"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: shares.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-lg bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:opacity-90",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: shares.facebook,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-lg bg-[#1877F2] px-4 py-2 text-xs font-bold text-white hover:opacity-90",
							children: "Facebook"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: shares.twitter,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-lg bg-black px-4 py-2 text-xs font-bold text-white hover:opacity-90",
							children: "X / Twitter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: shares.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-lg bg-[#0A66C2] px-4 py-2 text-xs font-bold text-white hover:opacity-90",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: shares.telegram,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-lg bg-[#229ED9] px-4 py-2 text-xs font-bold text-white hover:opacity-90",
							children: "Telegram"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: copyLink,
							className: "rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-100",
							children: "Copy link"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl p-6 text-white",
				style: { background: "linear-gradient(135deg, #003d82, #0056b3)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-bold",
						children: "Have questions on this topic?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-white/80",
						children: "Chat with our team on WhatsApp , we respond fast."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink(`Hello Erudition JP , I read "${post.title}" and have a question.`),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-bold",
						style: { color: "#0056b3" },
						children: "Chat on WhatsApp"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "Related articles"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-3",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: r.slug },
						className: "overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md",
						children: [r.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: r.title,
							className: "h-32 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-widest",
								style: { color: "#0056b3" },
								children: r.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm font-bold",
								children: r.title
							})]
						})]
					}, r.slug))
				})]
			})
		]
	});
}
//#endregion
export { Post as component };
