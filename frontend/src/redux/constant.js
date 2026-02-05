const localHost = import.meta.env.VITE_API_BASE_URL;

export const BASE_URL = `${localHost}/api/v1`;
export const USER_URL = `${BASE_URL}/users`;
export const PROPERTY_URL = `${BASE_URL}/properties`;
