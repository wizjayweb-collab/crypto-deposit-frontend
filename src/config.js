// src/config.js

const getApiBaseUrl = () => {
  // ✅ Preferred: Vite environment variable
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }

  // ✅ Local development
  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    return 'http://localhost:3000';
  }

  // ❌ Do NOT assume same domain
  console.warn('API base URL not configured. Using Railway fallback.');

  // ✅ Hard fallback (optional safety net)
  return 'https://crypto-deposit-backend-production.up.railway.app';
};

export const API_BASE_URL = getApiBaseUrl();
