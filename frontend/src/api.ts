import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  
  register: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isFreelancer?: boolean;
    skills?: string[];
    languages?: string[];
  }) => api.post('/auth/register', userData),
};

// Users API
export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData: any) => api.put('/users/profile', userData),
  getUserById: (id: string) => api.get(`/users/${id}`),
};

// Categories API
export const categoriesAPI = {
  getAll: () => api.get('/categories'),
  create: (categoryData: any) => api.post('/categories', categoryData),
};

// Services API
export const servicesAPI = {
  getAll: (params?: any) => api.get('/services', { params }),
  getById: (id: string) => api.get(`/services/${id}`),
  create: (serviceData: any) => api.post('/services', serviceData),
  update: (id: string, serviceData: any) => api.put(`/services/${id}`, serviceData),
  delete: (id: string) => api.delete(`/services/${id}`),
};

// Messages API
export const messagesAPI = {
  getConversations: () => api.get('/messages/conversations'),
  getMessages: (conversationId: string) => api.get(`/messages/conversations/${conversationId}`),
  createConversation: (participantId: string, serviceId?: string) => 
    api.post('/messages/conversations', { participantId, serviceId }),
  sendMessage: (conversationId: string, content: string, attachments?: string[]) =>
    api.post(`/messages/conversations/${conversationId}/messages`, { content, attachments }),
};

// AI Builder API
export const aiBuilderAPI = {
  generateWebsite: (data: {
    description: string;
    type?: string;
    features?: string[];
  }) => api.post('/ai-builder/generate', data),
  
  generateWithGemini: (data: {
    description: string;
    type?: string;
    features?: string[];
  }) => api.post('/ai-builder/generate-gemini', data),
  
  getHistory: () => api.get('/ai-builder/history'),
};

export default api;