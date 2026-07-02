import { t as blogPosts } from "./company-BaFVMsHD.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CY8bZf2C.js
var $$splitComponentImporter = () => import("./blog._slug-BQfeu9dz.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-B6ynpBbD.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = blogPosts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return post;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} , Erudition JP Blog` },
		{
			name: "description",
			content: loaderData.excerpt
		},
		{
			property: "og:title",
			content: loaderData.title
		},
		{
			property: "og:description",
			content: loaderData.excerpt
		},
		{
			property: "og:type",
			content: "article"
		}
	] : [] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
