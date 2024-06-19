/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    FIREBASE_API_KEY: 'AIzaSyBHjLlW_J5sFUYqtUDKgPrQUsBOvgpBg8E',
    FIREBASE_AUTH_DOMAIN: 'routines-dev-70ed4.firebaseapp.com',
    ROUTINES_HOST: "https://routines-api-dev-8ovqpekk.ew.gateway.dev"
  },

  reactStrictMode: true,
};
export default nextConfig;
