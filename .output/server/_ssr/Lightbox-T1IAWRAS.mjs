import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Lightbox-T1IAWRAS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ src, alt, caption, onClose }) {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick: onClose,
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm",
		style: { animation: "ejp-fade-up .25s ease-out both" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onClose,
			"aria-label": "Close",
			className: "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",
			children: "✕"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			onClick: (e) => e.stopPropagation(),
			className: "max-h-[90vh] max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				className: "max-h-[82vh] w-auto rounded-lg object-contain shadow-2xl"
			}), caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 text-center text-sm text-white/80",
				children: caption
			})]
		})]
	});
}
//#endregion
export { Lightbox as t };
