// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // Always use relative path for production builds
  if (process.env.NODE_ENV === 'production') {
    return `.${path}`;
  }
  return path;
};

// Utility function to get the correct base path for routes
export const getRoutePath = (path: string): string => {
  // Always use relative path for production builds
  if (process.env.NODE_ENV === 'production') {
    return `.${path}`;
  }
  return path;
};
