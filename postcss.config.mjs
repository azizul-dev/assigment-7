const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default config;
