import { n as __toESM } from "../_runtime.mjs";
import { a as properties, n as company, u as waLink } from "./company-BaFVMsHD.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-3bfcuTTY.mjs";
import { t as Reveal } from "./Reveal-CZbfM8d3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties-Cmminc2h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookATourForm({ property }) {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		date: "",
		time: "",
		party: "1",
		propertyName: property?.title || "",
		notes: ""
	});
	const upd = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const submit = (e) => {
		e.preventDefault();
		const lines = [
			"Hello Erudition JP, I'd like to book a property tour.",
			"",
			`Property: ${form.propertyName || "Not specified"}`,
			property?.location ? `Location: ${property.location}` : "",
			property?.price ? `Price: ${property.price}` : "",
			`Name: ${form.name}`,
			`Phone: ${form.phone}`,
			form.email ? `Email: ${form.email}` : "",
			`Preferred date: ${form.date}`,
			`Preferred time: ${form.time}`,
			`Number of guests: ${form.party}`,
			form.notes ? `\nNotes: ${form.notes}` : ""
		].filter(Boolean);
		const msg = encodeURIComponent(lines.join("\n"));
		window.open(`https://wa.me/${company.whatsapp}?text=${msg}`, "_blank");
	};
	const input = "w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#0056b3] focus:ring-2 focus:ring-[#0056b3]/15";
	const label = "text-xs font-semibold text-gray-700";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] font-semibold uppercase tracking-widest",
					style: { color: "#0056b3" },
					children: "Book a Tour"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-xl font-bold",
					children: "Schedule a viewing"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden h-12 w-12 items-center justify-center rounded-2xl text-xl md:flex",
					style: {
						background: "#EFF6FF",
						color: "#0056b3"
					},
					children: "🏠"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label,
							children: "Property of interest"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: input,
							value: form.propertyName,
							onChange: (e) => upd("propertyName", e.target.value),
							placeholder: "e.g. 3-Bedroom Bungalow, Ushafa",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: label,
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: input,
						required: true,
						value: form.name,
						onChange: (e) => upd("name", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: label,
						children: "Phone number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: input,
						required: true,
						value: form.phone,
						onChange: (e) => upd("phone", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label,
							children: "Email (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							className: input,
							value: form.email,
							onChange: (e) => upd("email", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: label,
						children: "Preferred date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: input,
						required: true,
						value: form.date,
						onChange: (e) => upd("date", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: label,
						children: "Preferred time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						className: input,
						required: true,
						value: form.time,
						onChange: (e) => upd("time", e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: label,
						children: "Number of guests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: input,
						value: form.party,
						onChange: (e) => upd("party", e.target.value),
						children: [
							"1",
							"2",
							"3",
							"4",
							"5+"
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: n,
							children: n
						}, n))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: label,
							children: "Anything we should know?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							className: input,
							value: form.notes,
							onChange: (e) => upd("notes", e.target.value)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:opacity-95",
				style: { background: "linear-gradient(135deg, #003d82, #0056b3)" },
				children: ["Send Booking on WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "→"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-[11px] text-gray-500",
				children: "Your details open in WhatsApp so our team can confirm your tour instantly."
			})
		]
	});
}
var propImages = {
	Residential: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
	Land: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
	Commercial: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
};
function Properties() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [details, setDetails] = (0, import_react.useState)(null);
	const list = filter === "All" ? properties : properties.filter((p) => p.type === filter);
	(0, import_react.useEffect)(() => {
		if (!details) return;
		const onKey = (e) => e.key === "Escape" && setDetails(null);
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [details]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Properties",
			title: "Verified properties across the FCT",
			subtitle: "Every listing is title searched, survey confirmed and ready for inspection.",
			image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&q=80",
			crumbs: [{ label: "Home" }, { label: "Properties" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [
						"All",
						"Residential",
						"Land",
						"Commercial"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(t),
						className: "rounded-full px-4 py-1.5 text-xs font-semibold transition",
						style: {
							background: filter === t ? "#0056b3" : "#F3F4F6",
							color: filter === t ? "white" : "#374151"
						},
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 6 * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-48",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: propImages[p.type],
										alt: p.title,
										className: "h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-gray-700",
										children: p.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white",
										style: { background: "#16A34A" },
										children: "Available"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-3 left-3 rounded-md bg-black/70 px-2.5 py-1 text-sm font-bold text-white",
										children: p.price
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-xs text-gray-500",
										children: ["📍 ", p.location]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex flex-wrap gap-3 text-xs text-gray-700",
										children: [
											p.beds && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"🛏 ",
												p.beds,
												" beds"
											] }),
											p.baths && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"🛁 ",
												p.baths,
												" bath"
											] }),
											p.size && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["📐 ", p.size] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 line-clamp-2 text-xs text-gray-600",
										children: p.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-1.5",
										children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-semibold",
											style: { color: "#0056b3" },
											children: t
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 grid grid-cols-3 gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setDetails(p),
												className: "rounded-xl border py-2.5 text-center text-xs font-bold",
												style: {
													borderColor: "#0056b3",
													color: "#0056b3"
												},
												children: "View"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setSelected(p);
													document.getElementById("book-tour")?.scrollIntoView({ behavior: "smooth" });
												},
												className: "rounded-xl py-2.5 text-center text-xs font-bold text-white",
												style: { background: "#0056b3" },
												children: "Book Tour"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: waLink(`Hello Erudition JP, I'm interested in: ${p.title} at ${p.location} (${p.price}).`),
												target: "_blank",
												rel: "noopener noreferrer",
												className: "rounded-xl py-2.5 text-center text-xs font-bold text-white",
												style: { background: "#25D366" },
												children: "WhatsApp"
											})
										]
									})
								]
							})]
						})
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "book-tour",
					className: "mt-16 grid gap-8 lg:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-widest",
								style: { color: "#0056b3" },
								children: "Book a Tour"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-2xl font-bold md:text-3xl",
								children: "See it for yourself"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-gray-600",
								children: "Pick a property, choose a date and time that works for you, and our team will confirm your viewing on WhatsApp within hours."
							}),
							selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 rounded-2xl border border-gray-100 bg-[#F8FAFF] p-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold",
										style: { color: "#0056b3" },
										children: "Selected:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1",
										children: selected.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-gray-500",
										children: [
											selected.location,
											" · ",
											selected.price
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookATourForm, { property: selected ? {
							title: selected.title,
							location: selected.location,
							price: selected.price
						} : void 0 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 rounded-2xl p-8 text-center text-white",
					style: { background: "linear-gradient(135deg, #003d82, #0056b3)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: "Don't see what you want?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/80",
							children: "Tell us what you're looking for and we'll source it for you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink("Hello Erudition JP, I'm looking for a specific property."),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold",
							style: { color: "#0056b3" },
							children: "Tell Us On WhatsApp"
						})
					]
				})
			]
		}),
		details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: () => setDetails(null),
			className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm",
			style: { animation: "ejp-fade-up .25s ease-out both" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: (e) => e.stopPropagation(),
				className: "relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setDetails(null),
						"aria-label": "Close",
						className: "absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80",
						children: "✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-64 md:h-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: propImages[details.type],
							alt: details.title,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-3 left-3 rounded-md bg-black/70 px-3 py-1.5 text-lg font-bold text-white",
							children: details.price
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-widest",
								style: { color: "#0056b3" },
								children: details.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-bold",
								children: details.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-sm text-gray-500",
								children: ["📍 ", details.location]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",
								children: [
									details.beds && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-gray-50 p-3 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-gray-500",
											children: "Bedrooms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-base font-bold",
											children: details.beds
										})]
									}),
									details.baths && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-gray-50 p-3 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-gray-500",
											children: "Bathrooms"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-base font-bold",
											children: details.baths
										})]
									}),
									details.size && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-gray-50 p-3 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-gray-500",
											children: "Size"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-base font-bold",
											children: details.size
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-gray-50 p-3 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-gray-500",
											children: "Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-base font-bold text-green-600",
											children: "Available"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm text-gray-700",
								children: details.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: details.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold",
									style: { color: "#0056b3" },
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setSelected(details);
										setDetails(null);
										setTimeout(() => document.getElementById("book-tour")?.scrollIntoView({ behavior: "smooth" }), 100);
									},
									className: "rounded-xl py-3 text-sm font-bold text-white",
									style: { background: "#0056b3" },
									children: "Book a Tour"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink(`Hello Erudition JP, I'm interested in: ${details.title} at ${details.location} (${details.price}).`),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "rounded-xl py-3 text-center text-sm font-bold text-white",
									style: { background: "#25D366" },
									children: "💬 Chat on WhatsApp"
								})]
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { Properties as component };
