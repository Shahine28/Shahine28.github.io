// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://shahine28.github.io',
    // The old myportfolio paths, kept working for anyone who rewrites a saved link.
    redirects: {
        '/work': '/',
        '/contact': '/about',
    },
});
