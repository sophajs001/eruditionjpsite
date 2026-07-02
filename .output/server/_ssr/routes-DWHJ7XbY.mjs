import { n as __toESM } from "../_runtime.mjs";
import { i as projectGallery, l as testimonials, n as company, o as services, s as siteImages, u as waLink } from "./company-BaFVMsHD.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Lightbox } from "./Lightbox-T1IAWRAS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DWHJ7XbY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		tag: "Nigeria's Trusted Construction Partner",
		h1: "We Build Your Dreams",
		h2: "With Precision.",
		cta: {
			label: "Get a Free Quote",
			href: waLink("Hello Erudition JP ,  I'd like a free quote.")
		},
		bg: siteImages.twoStoreyShell
	},
	{
		tag: "On-Site Project Supervision",
		h1: "Hands-On Delivery,",
		h2: "From Foundation to Finish.",
		cta: {
			label: "Explore Our Services",
			href: "/services"
		},
		bg: siteImages.estateInspection
	},
	{
		tag: "Decking, Reinforcement & Concrete Works",
		h1: "Structural Strength,",
		h2: "Built to Code.",
		cta: {
			label: "View Our Work",
			href: "/portfolio"
		},
		bg: siteImages.slabReinforcement
	},
	{
		tag: "Verified Land & Properties",
		h1: "Find Your Plot",
		h2: "in Abuja.",
		cta: {
			label: "View Properties",
			href: "/properties"
		},
		bg: siteImages.surveyedLand
	}
];
function Home() {
	const [i, setI] = (0, import_react.useState)(0);
	const [lb, setLb] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
		return () => clearInterval(t);
	}, []);
	const s = slides[i];
	const isExternal = s.cta.href.startsWith("http");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[78vh] min-h-[520px] w-full overflow-hidden",
			children: [slides.map((sl, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 transition-opacity duration-1000",
				style: { opacity: idx === i ? 1 : 0 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sl.bg,
					alt: "",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(135deg, rgba(0,20,60,0.78), rgba(0,40,100,0.5), rgba(0,0,0,0.3))" }
				})]
			}, idx)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm",
						children: s.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-extrabold leading-tight",
						style: { fontSize: "clamp(2rem, 6vw, 3.8rem)" },
						children: [
							s.h1,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#93c5fd" },
								children: s.h2
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm text-white/80",
						children: "Design, construction, materials and verified real estate ,  delivered with integrity and on time, across Abuja FCT."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [isExternal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: s.cta.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-xl bg-white px-7 py-3 text-sm font-bold",
							style: { color: "#0056b3" },
							children: [s.cta.label, " →"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: s.cta.href,
							className: "rounded-xl bg-white px-7 py-3 text-sm font-bold",
							style: { color: "#0056b3" },
							children: [s.cta.label, " →"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-xl border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10",
							children: "Contact Us"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-3 text-xs text-white/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							String(i + 1).padStart(2, "0"),
							" / ",
							String(slides.length).padStart(2, "0")
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: slides.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": `slide ${k + 1}`,
								onClick: () => setI(k),
								className: "h-1.5 rounded-full transition-all",
								style: {
									width: k === i ? 28 : 10,
									background: k === i ? "white" : "rgba(255,255,255,.4)"
								}
							}, k))
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-20 mx-auto mt-6 max-w-6xl px-4 md:-mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl md:grid-cols-4",
				children: [
					["150+", "Projects Completed"],
					["10+", "Years Experience"],
					["200+", "Happy Clients"],
					["30+", "Properties Listed"]
				].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl font-black",
						style: { color: "#0056b3" },
						children: n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500",
						children: l
					})]
				}, l))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-semibold uppercase tracking-widest",
					style: { color: "#0056b3" },
					children: "What We Do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold",
					children: "Our Core Services"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl",
							style: {
								background: "#EFF6FF",
								color: "#0056b3"
							},
							children: "◆"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs font-semibold",
							style: { color: "#0056b3" },
							children: s.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-gray-600",
							children: s.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1 text-xs text-gray-500",
							children: s.items.slice(0, 3).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", i] }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-sm font-semibold group-hover:underline",
							style: { color: "#0056b3" },
							children: "Learn more →"
						})
					]
				}, s.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gray-50 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: siteImages.siteVisit,
					alt: "Erudition JP on site in Abuja",
					className: "rounded-2xl shadow-lg"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-semibold uppercase tracking-widest",
						style: { color: "#0056b3" },
						children: "Why Choose Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-bold",
						children: "Don't struggle alone ,  let us help you build right."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: [
							"Academic & Practical Expertise ,  degree-trained and site-trained since 1992",
							"Timely delivery on every milestone",
							"200+ satisfied clients across the FCT"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-gray-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-white",
								style: { background: "#0056b3" },
								children: "✓"
							}), t]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink("Hello Erudition JP ,  I want to discuss a project."),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-6 inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-white",
						style: { background: "#0056b3" },
						children: "Talk to Us →"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-semibold uppercase tracking-widest",
						style: { color: "#0056b3" },
						children: "Live from our sites"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-bold",
						children: "Real projects, real progress."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-gray-600",
						children: "A look at active and recently completed work across Abuja, captured by our project team."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/portfolio",
					className: "rounded-xl px-5 py-2.5 text-sm font-semibold text-white",
					style: { background: "#0056b3" },
					children: "See full portfolio →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: projectGallery.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLb({
						img: p.img,
						title: p.title,
						desc: p.desc
					}),
					className: "group block overflow-hidden rounded-2xl bg-white text-left shadow-sm",
					"aria-label": `View ${p.title}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-60 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-gray-900",
									children: "🔍 View"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] font-semibold uppercase tracking-widest text-white/80",
									children: [
										p.cat,
										" · ",
										p.loc
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold",
									children: p.title
								})]
							})
						]
					})
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			style: { background: "#0056b3" },
			className: "py-16 text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-white/10 p-6 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-widest text-white/70",
						children: "Our Vision"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base font-medium",
						children: "To be Nigeria's most trusted partner for innovative construction and real estate solutions, delivering safe, functional and lasting structures."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-white/10 p-6 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-widest text-white/70",
						children: "Our Mission"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base font-medium",
						children: "To deliver professional construction, design, quantity surveying, consultancy and supply services with integrity, quality, precision and timely delivery."
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-semibold uppercase tracking-widest",
					style: { color: "#0056b3" },
					children: "Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold",
					children: "What our clients say"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max gap-5 ejp-marquee",
					children: [...testimonials, ...testimonials].map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-[320px] flex-none rounded-2xl border border-gray-200 bg-white p-6",
						style: { boxShadow: "0 6px 20px rgba(0,86,179,0.06)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-amber-400",
								children: "★★★★★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-gray-700",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white",
									style: { background: "#0056b3" },
									children: t.author[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold",
									children: t.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-gray-500",
									children: t.role
								})] })]
							})
						]
					}, idx))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-5xl px-4 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl p-10 text-center text-white",
				style: { background: "linear-gradient(135deg, #003d82, #0056b3, #1a73c8)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold",
						children: "Ready to Build Something Great?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/80",
						children: "Tell us about your project ,  we'll respond within hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink("Hello Erudition JP ,  let's discuss my project."),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-xl px-6 py-3 text-sm font-bold text-white",
							style: { background: "#0056b3" },
							children: "Chat on WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${company.phones[0]}`,
							className: "rounded-xl bg-white px-6 py-3 text-sm font-bold",
							style: { color: "#0056b3" },
							children: ["Call ", company.phones[0]]
						})]
					})
				]
			})
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
export { Home as component };
