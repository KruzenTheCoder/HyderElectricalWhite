const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Ensure '@' alias resolves to './src' for JS/TS/CSS imports
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig
