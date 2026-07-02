import { n as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-CZbfM8d3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useReveal(options = {
	threshold: .12,
	rootMargin: "0px 0px -40px 0px"
}) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setVisible(true);
					io.unobserve(e.target);
				}
			});
		}, options);
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		visible
	};
}
function Reveal({ children, delay = 0, as = "div", className = "", style, y = 18 }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
		ref,
		className,
		style: {
			...style,
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : `translateY(${y}px)`,
			transition: `opacity .7s ease-out ${delay}ms, transform .7s ease-out ${delay}ms`,
			willChange: "opacity, transform"
		},
		children
	});
}
//#endregion
export { Reveal as t };
