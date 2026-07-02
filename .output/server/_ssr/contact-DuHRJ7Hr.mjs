import { n as __toESM } from "../_runtime.mjs";
import { n as company, u as waLink } from "./company-BaFVMsHD.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-3bfcuTTY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DuHRJ7Hr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	});
	const submit = (e) => {
		e.preventDefault();
		const msg = `Hello Erudition JP,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0A%0A${form.message}`;
		window.open(`https://wa.me/${company.whatsapp}?text=${msg}`, "_blank");
	};
	const upd = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const input = "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#0056b3]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Let's talk",
		subtitle: "Tell us about your project. Design, construction, materials or real estate, we respond within hours.",
		image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80",
		crumbs: [{ label: "Home" }, { label: "Contact" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 lg:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold",
							children: "Office"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-gray-600",
							children: ["📍 ", company.address]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm text-gray-700",
							children: company.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${p}`,
								className: "hover:underline",
								children: ["📞 ", p]
							}) }, p))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${company.email}`,
							className: "mt-2 inline-flex text-sm hover:underline",
							children: ["✉️ ", company.email]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-gray-600",
							children: ["🕐 ", company.hours]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink("Hello Erudition JP ,  I'd like to chat live."),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "block rounded-2xl p-5 text-white",
						style: { background: "#0056b3" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-bold",
							children: "Prefer live chat?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs opacity-90",
							children: "Chat with us instantly on WhatsApp →"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-gray-700",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.name,
								onChange: (e) => upd("name", e.target.value),
								className: input
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-gray-700",
								children: "Email Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								value: form.email,
								onChange: (e) => upd("email", e.target.value),
								className: input
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-gray-700",
								children: "Phone Number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.phone,
								onChange: (e) => upd("phone", e.target.value),
								className: input
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-gray-700",
								children: "Subject"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.subject,
								onChange: (e) => upd("subject", e.target.value),
								className: input
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-gray-700",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 6,
							value: form.message,
							onChange: (e) => upd("message", e.target.value),
							className: input
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-5 rounded-xl px-6 py-3 text-sm font-bold text-white",
						style: { background: "#0056b3" },
						children: "Send via WhatsApp"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 overflow-hidden rounded-2xl border border-gray-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Office location",
				src: "https://www.google.com/maps?q=Ushafa+Bwari+Abuja&output=embed",
				className: "h-80 w-full",
				loading: "lazy"
			})
		})]
	})] });
}
//#endregion
export { Contact as component };
