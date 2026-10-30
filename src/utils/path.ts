/**
 * Resolves an internal application path respecting Astro's configured BASE_URL.
 * Works seamlessly whether deployed to a root domain or a GitHub Pages subpath (/repo-name/).
 */
export function resolvePath(path: string = '/'): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (cleanPath === '/') {
    return cleanBase ? `${cleanBase}/` : '/';
  }
  
  return `${cleanBase}${cleanPath}`;
}
