// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import { loadEnv } from "vite";

// https://astro.build/config

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
	process.env.NODE_ENV,
	process.cwd(),
	"",
);
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sanity({
			projectId: PUBLIC_SANITY_PROJECT_ID,
			dataset: PUBLIC_SANITY_DATASET,
			useCdn: false,
			apiVersion: "2025-06-02",
			studioBasePath: "/studio",
			stega: {
				studioUrl: "/studio",
			},
		}),
		react(),
	],
});
