import { n as __toESM } from "../_runtime.mjs";
import { n as company, u as waLink } from "./company-BaFVMsHD.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$8 } from "./blog._slug-CY8bZf2C.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D2Gy8HCI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BaX4Cbxk.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/properties",
		label: "Properties"
	},
	{
		to: "/portfolio",
		label: "Portfolio"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-white shadow-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden text-white md:block",
				style: { background: "#0056b3" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📞 ", company.phones[0]] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["✉️ ", company.email] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "italic opacity-80",
						children: [
							"\"",
							company.tagline,
							"\""
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: company.logo,
							alt: "Erudition JP",
							className: "h-11 w-11 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-base font-bold",
								style: { color: "#0056b3" },
								children: "Erudition JP"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-widest text-gray-400",
								children: "Enterprise"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#F8FAFF] hover:text-[#0056b3]",
							activeProps: { className: "rounded-md px-3 py-2 text-sm font-medium text-[#0056b3] bg-[#EFF6FF]" },
							activeOptions: { exact: n.to === "/" },
							children: n.label
						}) }, n.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink("Hello Erudition JP, I'd like to request a quote."),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 lg:inline-flex",
						style: { background: "#0056b3" },
						children: "Request a Quote"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md lg:hidden",
						style: { background: open ? "rgba(255,255,255,0.15)" : "#0056b3" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative block h-4 w-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-0 h-[2px] w-full rounded-full bg-white transition-all duration-300",
									style: { transform: open ? "translateY(7px) rotate(45deg)" : "none" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white transition-all duration-200",
									style: { opacity: open ? 0 : 1 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-white transition-all duration-300",
									style: { transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`,
				"aria-hidden": !open,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onClick: () => setOpen(false),
					className: "absolute inset-0 bg-black/40 transition-opacity duration-300",
					style: { opacity: open ? 1 : 0 }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto text-white shadow-2xl transition-transform duration-300",
					style: {
						transform: open ? "translateX(0)" : "translateX(100%)",
						background: "linear-gradient(160deg, #003d82 0%, #0056b3 55%, #1a73c8 100%)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 px-6 pb-4 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: company.logo,
								alt: "",
								className: "h-11 w-11 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-base font-bold",
									children: "Erudition JP"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-white/60",
									children: "Enterprise"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "mt-2 flex-1 px-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1",
								children: nav.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "ejp-fade-up",
									style: { animationDelay: `${.05 + i * .04}s` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: n.to,
										onClick: () => setOpen(false),
										className: "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-white/90 transition hover:bg-white/10",
										activeProps: { className: "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold text-white bg-white/15" },
										activeOptions: { exact: n.to === "/" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/50",
											children: "›"
										})]
									})
								}, n.to))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 border-t border-white/15 px-6 py-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waLink(`Hello Erudition JP, I'd like to chat. (${company.phones[0]})`),
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => setOpen(false),
									className: "flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold shadow-md",
									style: { color: "#0056b3" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "💬" }), " Chat on WhatsApp"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${company.phones[0]}`,
									className: "block text-center text-sm text-white/80",
									children: ["📞 ", company.phones[0]]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-center text-[11px] text-white/55",
									children: company.address
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 text-gray-300",
		style: { background: "#0b1220" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: company.logo,
						alt: "Erudition JP",
						className: "h-12 w-12 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-bold text-white",
						children: "Erudition JP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-widest text-gray-400",
						children: "Enterprise"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-gray-400",
					children: [company.tagline, ". Trusted construction and real estate solutions across Abuja."]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-sm font-bold text-white",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "text-gray-400 hover:text-white",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "text-gray-400 hover:text-white",
							children: "Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/properties",
							className: "text-gray-400 hover:text-white",
							children: "Properties"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portfolio",
							className: "text-gray-400 hover:text-white",
							children: "Portfolio"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "text-gray-400 hover:text-white",
							children: "Blog"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-gray-400 hover:text-white",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-sm font-bold text-white",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-gray-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-white",
							children: "Design & Construction"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-white",
							children: "Consultancy & Planning"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-white",
							children: "Materials & Supply"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-white",
							children: "Real Estate & Property"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-sm font-bold text-white",
					children: "Contact Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-gray-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["📍 ", company.address] }),
						company.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${p}`,
							className: "hover:text-white",
							children: ["📞 ", p]
						}) }, p)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${company.email}`,
							className: "hover:text-white break-all",
							children: ["✉️ ", company.email]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "pt-2 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.socials.facebook,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Facebook",
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0056b3]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-4 w-4",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.socials.instagram,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Instagram",
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0056b3]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 24 24",
										className: "h-4 w-4",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
												x: "3",
												y: "3",
												width: "18",
												height: "18",
												rx: "5"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "12",
												cy: "12",
												r: "4"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
												cx: "17.5",
												cy: "6.5",
												r: "1",
												fill: "currentColor"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.socials.tiktok,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "TikTok",
									className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0056b3]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-4 w-4",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.6 6.7a5.3 5.3 0 0 1-3.2-1.1 5.3 5.3 0 0 1-2-3.6h-3.1v12.6a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V8.8a5.8 5.8 0 0 0-.8-.05A5.8 5.8 0 1 0 14.5 14.6V8.9a8.4 8.4 0 0 0 5.1 1.7V7.5a5.3 5.3 0 0 1 0-.8Z" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink("Hello Erudition JP"),
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "WhatsApp",
									className: "flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:opacity-90",
									style: { background: "#25D366" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										className: "h-4 w-4",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5Z" })
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink("Hello Erudition JP"),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-white shadow-sm",
								style: { background: "#0056b3" },
								children: "💬 Chat on WhatsApp"
							})
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-gray-500 md:flex-row md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"Powered by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://sophajs.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-semibold text-white hover:text-[#1a73c8]",
						children: "Sophajs Global Tech"
					})
				] })]
			})
		})]
	});
}
function Loader() {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [fading, setFading] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const i = setInterval(() => setProgress((p) => Math.min(100, p + 4)), 55);
		const fadeT = setTimeout(() => setFading(true), 1500);
		const t = setTimeout(() => setVisible(false), 2100);
		return () => {
			clearInterval(i);
			clearTimeout(t);
			clearTimeout(fadeT);
		};
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500",
		style: {
			background: "linear-gradient(135deg, #003d82 0%, #0056b3 45%, #1a73c8 100%)",
			opacity: fading ? 0 : 1
		},
		children: [
			Array.from({ length: 18 }).map((_, i) => {
				const size = 30 + i * 37 % 160;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute rounded-full",
					style: {
						width: size,
						height: size,
						background: "rgba(255,255,255,0.06)",
						top: `${i * 53 % 100}%`,
						left: `${i * 71 % 100}%`,
						animation: `ejp-float ${3 + i % 4}s ease-in-out ${i * .2 % 2}s infinite`
					}
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full border",
				style: {
					width: 320,
					height: 320,
					borderColor: "rgba(255,255,255,0.12)",
					animation: "ejp-pulse-ring 2.5s ease-in-out infinite"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full border",
				style: {
					width: 220,
					height: 220,
					borderColor: "rgba(255,255,255,0.18)",
					animation: "ejp-pulse-ring 2s ease-in-out 0.3s infinite"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl p-6 backdrop-blur-md",
						style: {
							background: "rgba(255,255,255,0.10)",
							border: "1px solid rgba(255,255,255,0.20)",
							boxShadow: "0 8px 40px rgba(0,0,0,0.20)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: company.logo,
							alt: "EJP",
							className: "h-[100px] w-[100px] object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white",
							style: {
								fontSize: 18,
								fontWeight: 700,
								letterSpacing: ".5px"
							},
							children: company.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "italic",
							style: {
								fontSize: 13,
								color: "rgba(255,255,255,0.7)",
								marginTop: 4
							},
							children: [
								"\"",
								company.tagline,
								"\""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[3px] w-[200px] overflow-hidden rounded-full",
						style: { background: "rgba(255,255,255,0.15)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full transition-all",
							style: {
								width: `${progress}%`,
								background: "linear-gradient(90deg, rgba(255,255,255,0.6), white)"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: [
							0,
							.2,
							.4
						].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 w-1.5 rounded-full",
							style: {
								background: "rgba(255,255,255,.5)",
								animation: `ejp-pulse-dot 1.2s ease-in-out ${d}s infinite`
							}
						}, i))
					})
				]
			})
		]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink("Hello Erudition JP — I'd like to make an enquiry."),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "wa-pulse group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-105",
		style: { background: "#25D366" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 32 32",
			fill: "currentColor",
			className: "h-7 w-7",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.99 2.66 1.13 2.85c.14.18 1.95 2.98 4.72 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.74.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.06-.11-.25-.18-.52-.32zM16.02 4C9.39 4 4 9.4 4 16.04c0 2.35.68 4.54 1.85 6.39L4 28l5.74-1.81a11.98 11.98 0 0 0 6.28 1.74h.01c6.63 0 12.02-5.4 12.02-12.04C28.05 9.4 22.66 4 16.03 4zm0 21.92h-.01a9.92 9.92 0 0 1-5.07-1.39l-.36-.22-3.41 1.08 1.1-3.33-.24-.34a9.95 9.95 0 1 1 17.97-5.69c0 5.49-4.46 9.95-9.98 9.95z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 transition group-hover:block group-hover:opacity-100",
			children: "Chat on WhatsApp"
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-gray-500",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white",
						style: { background: "#0056b3" },
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-gray-500",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md px-4 py-2 text-sm font-medium text-white",
						style: { background: "#0056b3" },
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-gray-200 px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Erudition JP Enterprise — Construction, Real Estate & Building Materials in Abuja" },
			{
				name: "description",
				content: "Erudition JP Enterprise: trusted design, construction, consultancy, materials supply and real estate services across Abuja FCT."
			},
			{
				name: "author",
				content: "Erudition JP Enterprise"
			},
			{
				property: "og:title",
				content: "Erudition JP Enterprise — Construction, Real Estate & Building Materials in Abuja"
			},
			{
				property: "og:description",
				content: "Erudition JP Enterprise: trusted design, construction, consultancy, materials supply and real estate services across Abuja FCT."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: "Erudition JP Enterprise — Construction, Real Estate & Building Materials in Abuja"
			},
			{
				name: "twitter:description",
				content: "Erudition JP Enterprise: trusted design, construction, consultancy, materials supply and real estate services across Abuja FCT."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e41b46de-9af2-4e94-b050-99d80ed512c9/id-preview-54eb61fd--d053ba17-0655-4b55-bb4d-da1a07a95188.lovable.app-1782541192990.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e41b46de-9af2-4e94-b050-99d80ed512c9/id-preview-54eb61fd--d053ba17-0655-4b55-bb4d-da1a07a95188.lovable.app-1782541192990.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;
		const apply = () => {
			const main = document.querySelector("main");
			if (!main) return;
			const targets = main.querySelectorAll("section > *:not([data-reveal-skip]), [data-reveal]");
			const io = new IntersectionObserver((entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("ejp-in");
						io.unobserve(e.target);
					}
				});
			}, {
				threshold: .08,
				rootMargin: "0px 0px -40px 0px"
			});
			targets.forEach((el) => {
				if (el.classList.contains("ejp-in") || el.dataset.revealInit === "1") return;
				el.dataset.revealInit = "1";
				el.classList.add("ejp-reveal-item");
				io.observe(el);
			});
		};
		const t = setTimeout(apply, 60);
		const unsub = router.subscribe("onResolved", () => setTimeout(apply, 80));
		return () => {
			clearTimeout(t);
			unsub();
		};
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-[60vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./services-DjI7yHbR.mjs");
var Route$6 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services ,  Erudition JP Enterprise" },
		{
			name: "description",
			content: "Design & Construction, Consultancy & Planning, Materials & Supply, and Real Estate services in Abuja."
		},
		{
			property: "og:title",
			content: "Our Services"
		},
		{
			property: "og:description",
			content: "Four service pillars ,  designed and delivered by Erudition JP."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./properties-Cmminc2h.mjs");
var Route$5 = createFileRoute("/properties")({
	head: () => ({ meta: [
		{ title: "Properties ,  Erudition JP Enterprise" },
		{
			name: "description",
			content: "Verified land, residential and commercial properties for sale in Abuja FCT."
		},
		{
			property: "og:title",
			content: "Properties for Sale in Abuja"
		},
		{
			property: "og:description",
			content: "Browse our verified property listings across the FCT."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./portfolio-BqdwPlra.mjs");
var Route$4 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "Portfolio , Erudition JP Enterprise" },
		{
			name: "description",
			content: "Selected projects from our delivered builds across Abuja."
		},
		{
			property: "og:title",
			content: "Our Portfolio"
		},
		{
			property: "og:description",
			content: "Recent design and construction projects."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-DuHRJ7Hr.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact ,  Erudition JP Enterprise" },
		{
			name: "description",
			content: "Reach Erudition JP via WhatsApp, phone or email. Ushafa Bwari, Abuja."
		},
		{
			property: "og:title",
			content: "Contact Erudition JP"
		},
		{
			property: "og:description",
			content: "Talk to us ,  we respond within hours."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog-BB9Lvc8x.mjs");
var Route$2 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Blog , Erudition JP Enterprise" },
		{
			name: "description",
			content: "Practical guides on construction, materials and real estate in Abuja."
		},
		{
			property: "og:title",
			content: "Erudition JP Blog"
		},
		{
			property: "og:description",
			content: "Insights from our team for builders, buyers and investors."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CmVnRbhQ.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About ,  Erudition JP Enterprise" },
		{
			name: "description",
			content: "Our story, leadership, vision & mission. Erudition JP = Judemary + Prisca."
		},
		{
			property: "og:title",
			content: "About Erudition JP Enterprise"
		},
		{
			property: "og:description",
			content: "Our story, leadership team and values."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DWHJ7XbY.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Erudition JP Enterprise ,  Build Your Dreams in Abuja" },
		{
			name: "description",
			content: "Trusted design, construction, real estate and materials in Abuja FCT. 150+ projects. 10+ years."
		},
		{
			property: "og:title",
			content: "Erudition JP Enterprise"
		},
		{
			property: "og:description",
			content: "We build your dreams ,  Abuja's reliable construction partner."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$6.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$7
});
var PropertiesRoute = Route$5.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => Route$7
});
var PortfolioRoute = Route$4.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var BlogRouteChildren = { BlogSlugRoute: Route$8.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	ContactRoute,
	PortfolioRoute,
	PropertiesRoute,
	ServicesRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
