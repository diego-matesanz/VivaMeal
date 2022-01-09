const localHost = 'http://localhost:5001/vivameal/us-central1';
const liveHost = 'https://us-central1-vivameal.cloudfunctions.net';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const host = liveHost;