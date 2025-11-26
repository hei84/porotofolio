import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const apiBaseURL = process.env.REACT_APP_API_URL || (isDev ? '/api' : null);

export const hasApi = Boolean(apiBaseURL);

const apiClient = hasApi
  ? axios.create({
      baseURL: apiBaseURL,
      timeout: 8000
    })
  : null;

export const fetchHealth = async () => {
  if (!apiClient) {
    throw new Error('API client is not configured');
  }
  const { data } = await apiClient.get('/health');
  return data;
};

export const fetchPortfolioContent = async () => {
  if (!apiClient) {
    throw new Error('API client is not configured');
  }
  const { data } = await apiClient.get('/portfolio');
  return data;
};

export const fetchProjects = async () => {
  if (!apiClient) {
    throw new Error('API client is not configured');
  }
  const { data } = await apiClient.get('/projects');
  return data;
};

export const fetchTestimonials = async () => {
  if (!apiClient) {
    throw new Error('API client is not configured');
  }
  const { data } = await apiClient.get('/testimonials');
  return data;
};

export const submitContactForm = async payload => {
  if (!apiClient) {
    throw new Error('API client is not configured');
  }
  const { data } = await apiClient.post('/contact', payload);
  return data;
};

