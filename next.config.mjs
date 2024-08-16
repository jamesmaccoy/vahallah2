/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Add any other necessary configurations here
};

export default nextConfig;

// Ensure to implement generateStaticParams in your page component
// Example for your dynamic page component
// export async function generateStaticParams() {
//     return [
//         { slug: 'your-slug' }, // Add your dynamic slugs here
//     ];
// }