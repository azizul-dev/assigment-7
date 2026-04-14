/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // ✅ যেকোনো domain থেকে image load হবে
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;