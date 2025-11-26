import axios from 'axios';

const apiBaseURL = process.env.REACT_APP_API_URL || '/api';

const apiClient = axios.create({
  baseURL: apiBaseURL,
  timeout: 8000
});

export const fetchHealth = async () => {
  const { data } = await apiClient.get('/health');
  return data;
};

export const fetchPortfolioContent = async () => {
  const { data } = await apiClient.get('/portfolio');
  return data;
};

export const fetchProjects = async () => {
  const { data } = await apiClient.get('/projects');
  return data;
};

export const fetchTestimonials = async () => {
  const { data } = await apiClient.get('/testimonials');
  return data;
};

export const submitContactForm = async payload => {
  const { data } = await apiClient.post('/contact', payload);
  return data;
};

