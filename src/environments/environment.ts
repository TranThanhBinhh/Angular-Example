export const environment = {
    production: false,
    apiUrl: process.env['URL_BASE_API'] || 'http://localhost:8000/api',
    apiKey: process.env['SECRET_API_KEY'] || 'development'
  };