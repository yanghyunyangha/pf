import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/pf/',
    plugins: [svelte()],
    build: {
        rollupOptions: {
            output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.').at(1);
					if(/css/i.test(extType)) {
						extType = 'css';
					} else if(/png|jpe?g|svg|webp/i.test(extType)){
						extType = 'images';
					} else if(/woff|woff2/i.test(extType)){
						extType = 'fonts'
					}
					return `assets/${extType}/[name].[hash].[extname]`;
				},
				chunkFileNames: 'assets/js/[name].[hash].js',
				entryFileNames: 'assets/js/[name].[hash].js'
			}
        }
    },
    resolve: {
        alias: [
            { find: "@images", replacement: "/src/assets/images" },
            { find: "@compo", replacement: "/src/components" }
        ]
    }
})
