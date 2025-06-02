/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
		{
			files: ["./src/components/images/*.astro"],
			options: {
				parser: "astro",
				htmlWhitespaceSensitivity: "ignore",
				quoteProps: "preserve",
			},
		},
	],
};
