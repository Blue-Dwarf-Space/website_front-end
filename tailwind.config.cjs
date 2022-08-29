/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backdropBrightness: {
                25: ".25",
            },
            colors: require("daisyui/src/colors"),
        },
    },
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui")
		// ...
	],
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        themes: [

            {
                kellytest: {
          
                    "primary": "#026087",
                    "secondary": "#00cc66",
                    "accent": "#d90368",
                    "neutral": "#eeeeee",
                    "base-100": "#000d26",
                    "base-200": "#000f2e",
                    "base-300": "#000f4e",
                    "info": "#414bb2",
                    "success": "#9510ac",
                    "warning": "#db663a",
                    "error": "#f1c40f",
                },
                bluedwarfdark: {
                    body: {
                        "font-family": "Barlow",
                        // "fontSize": "3rem",
                        // "font-family": "Open Sans",
                        // "fontFamily": "Saira Condensed",
                        // "font-size": "24px",
                    },
                    "h1, h2, h3, h4, h5, h6": {
                        "font-family": "Baloo 2",
                        "text-shadow": "0 0 10px accent",
                    },
                    "h1": {
                        "font-size": "2rem",
                    },
                    primary: "#024f73",
                    "primary-focus": "#024f73",
                    "primary-content": "#b0e6fe",
                    secondary: "#00cc66",
                    "secondary-focus": "#00cc66",
                    "secondary-content": "#cdffe6",
                    accent: "#d90368",
                    "accent-focus": "#d90368",
                    "accent-content": "#fed6e9",
                    neutral: "#eeeeee",
                    "neutral-focus": "#bbbbbb",
                    "neutral-content": "#555555",
                    "base-100": "#000d26",
                    "base-200": "#000F2e",
                    "base-300": "#000f4e",
                    "base-content": "#eeeeee",
                    info: "#414bb2",
                    success: "#9309ac",
                    warning: "#db663a",
                    error: "#f1c40f",
                    "--border-color": "var(--b3)",
                    "--rounded-box": "0.2rem",
                    "--rounded-btn": "20px 0 20px 0",
                    "--rounded-btn": "mask mask-hexagon",
                    "--rounded-btn": "1px",
                    "--rounded-badge": "0.2rem",
                    "--animation-btn": "0.25s",
                    "--animation-input": ".2s",
                    "--btn-text-case": "uppercase",
                    "--btn-focus-scale": "0.95",
                    "--navbar-padding": ".5rem",
                    "--border-btn": "1px",
                    "--tab-border": "1px",
                    "--tab-radius": "0.2rem",

                },
            },
        ],
    },

}
