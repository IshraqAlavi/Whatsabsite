import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    images: {
        domains: ['d1pnnwteuly8z3.cloudfront.net', 'images.unsplash.com'],
        formats: ['image/webp', 'image/avif'],
    },
    async redirects() {
        return [
            {
                source: '/products/notifyer',
                destination: '/products/notifyer-system',
                permanent: true,
            },
            {
                source: '/products/notifier',
                destination: '/products/notifier-bot',
                permanent: true,
            },
        ]
    },
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
})

export default withMDX(nextConfig)
