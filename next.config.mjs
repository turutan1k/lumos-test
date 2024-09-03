/* eslint-disable unicorn/prefer-module */
import { createRequire } from "module"
const require = createRequire(import.meta.url)

export default {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        })
        return config
    },
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    reactStrictMode: true,
    experimental: { esmExternals: "loose" },
    output: "standalone",
}
