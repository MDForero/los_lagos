/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
    distDir: 'build',
}

module.exports = nextConfig
