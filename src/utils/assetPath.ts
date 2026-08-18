/**
 * Returns the correct path for public assets, respecting Vite's base path.
 * Works on both Vercel (base='/') and GitHub Pages (base='/apurbo-portfolio/').
 *
 * Usage: assetPath('apurbo.jpeg') → '/apurbo.jpeg' on Vercel, '/apurbo-portfolio/apurbo.jpeg' on GH Pages
 */
export const assetPath = (filename: string): string => {
  const base = import.meta.env.BASE_URL;
  return `${base}${filename}`;
};
