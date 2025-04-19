import { withPrefix } from 'gatsby';

/**
 * Adds the path prefix to image URLs for GitHub Pages
 * This ensures images load correctly when deployed with a path prefix
 */
export const getImagePath = (path: string): string => {
  // Handle absolute URLs (starting with http or https)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Use Gatsby's withPrefix for relative paths
  return withPrefix(path);
}; 