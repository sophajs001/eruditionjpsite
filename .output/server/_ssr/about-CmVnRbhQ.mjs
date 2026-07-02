import { n as __toESM } from "../_runtime.mjs";
import { c as team, r as faqs } from "./company-BaFVMsHD.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-3bfcuTTY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CmVnRbhQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Accordion({ title, defaultOpen, children }) {
	const [open, setOpen] = (0, import_react.useState)(!!defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-gray-100 bg-white shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-base font-bold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl",
				style: { color: "#0056b3" },
				children: open ? "−" : "+"
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-gray-100 px-6 py-5 text-sm text-gray-700",
			children
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "About Us",
		title: "Erudition JP Enterprise",
		subtitle: "JP stands for Judemary and Prisca. Two names, one vision: building Nigerian dreams with integrity, precision and trust.",
		image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80",
		crumbs: [{ label: "Home" }, { label: "About" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-5xl px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
					title: "Our History & Story",
					defaultOpen: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Erudition JP Enterprise was founded by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Onyeke Judemary O." }),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Prisca" }),
							" to bridge academic knowledge and practical construction realities in Nigeria."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Our CEO is a professional Building graduate from the University of Jos and a Graduate Member of the Nigerian Institute of Building (GNIOB)." }),
								" His masonry journey began in 1992 ,  long before formal study ,  and he continued hands-on site work all through his university years (from 2019) to fund his education. The result is rare: deep practical mastery ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "and" }),
								" rigorous theoretical training, from the trowel up."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: [
								"Our COO, Mrs. Prisca Aliyu, is a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Pure Mathematics graduate from Plateau State University, Bokkos" }),
								", bringing analytical rigour to every project, contract and budget."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: "From humble Abuja beginnings, we have grown to deliver 150+ projects across the FCT and beyond, anchored in four pillars: Design & Construction, Consultancy & Planning, Materials & Supply, and Real Estate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-3 gap-3 text-center",
							children: [
								["Founded", "in Abuja"],
								["Founders", "Judemary & Prisca"],
								["150+", "Projects delivered"]
							].map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-gray-50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-bold",
									style: { color: "#0056b3" },
									children: a
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-gray-500",
									children: b
								})]
							}, b))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					title: "Leadership & Team",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `overflow-hidden rounded-2xl border text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md ${m.featured ? "border-[#0056b3] bg-[#EFF6FF] sm:col-span-2 lg:col-span-3" : "border-gray-100 bg-white"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `relative w-full overflow-hidden ${m.featured ? "h-72 md:h-96" : "h-64"}`,
								style: { background: "#0b1220" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.img,
									alt: m.name,
									className: "h-full w-full object-cover object-top"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-base font-bold",
										children: m.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-xs font-semibold uppercase tracking-wide",
										style: { color: "#0056b3" },
										children: m.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-gray-600",
										children: m.bio
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap justify-center gap-1.5",
										children: m.expertise.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#EFF6FF] px-2.5 py-0.5 text-[10px] font-semibold",
											style: { color: "#0056b3" },
											children: e
										}, e))
									})
								]
							})]
						}, m.name))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
					title: "Vision, Mission & Core Values",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl p-4 text-white",
								style: { background: "#0056b3" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest opacity-70",
									children: "Vision"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm",
									children: "To be Nigeria's most trusted partner for innovative construction and real estate solutions, setting the standard for reliability by delivering safe, functional, and lasting structures."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-[#0056b3] p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-semibold uppercase tracking-widest",
									style: { color: "#0056b3" },
									children: "Mission"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-gray-700",
									children: "To deliver professional construction, building design, quantity surveying, consultancy and supply services tailored to our clients with integrity, quality, precision and timely delivery."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid gap-3 md:grid-cols-5",
							children: [
								["Integrity", "Transparency in every interaction."],
								["Innovation", "Modern techniques and creative solutions."],
								["Sustainability", "Responsible materials and methods."],
								["Client-First", "Your vision is our priority."],
								["Excellence", "The highest standards, end to end."]
							].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-gray-50 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold",
									style: { color: "#0056b3" },
									children: t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-gray-600",
									children: d
								})]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 italic text-gray-600",
							children: "\"We are the smartest way to build your home. We build your dreams. We build trust as we build structures.\""
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					title: "Privacy Policy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Information We Collect" }), " ,  name, phone, email and project details you share with us."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "How We Use It" }), " ,  to respond to enquiries and prepare proposals."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Information Sharing" }), " ,  never sold; shared only with project contractors as needed."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Data Security" }), " ,  secure storage and restricted access."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Communication" }), " ,  by contacting us you consent to a reply via your chosen channel."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Third-Party Links" }), " ,  we are not responsible for external sites we link to."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Your Rights" }), " ,  you can access, correct or request deletion of your data."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Privacy queries" }), " ,  eruditionjpenterprise@gmail.com"] })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					title: "Terms of Service",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-2 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Acceptance of Terms." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Service engagement requires a signed agreement and initial payment." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Payments follow a milestone schedule." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Scope changes require written requests and may affect cost/timeline." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Work meets or exceeds industry standards." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Liability covers quality of directly supervised work." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Disputes resolved by negotiation → mediation → Nigerian law." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Confidentiality maintained on all client information." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Termination requires written notice; completed work is compensated." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Governed by the laws of the Federal Republic of Nigeria." })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					title: "FAQs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-gray-50 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-bold",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-gray-600",
								children: f.a
							})]
						}, f.q))
					})
				})
			]
		})
	})] });
}
//#endregion
export { About as component };
