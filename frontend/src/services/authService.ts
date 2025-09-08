import api from './api';

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (userData: {
    username: string;
    email: string;
    password: string;
    fullName: string;
    location: string;
    languages: string[];
    isFreelancer: boolean;
  }) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export const userService = {
  getProfile: async (username: string) => {
    const response = await api.get(`/users/${username}`);
    return response.data;
  },

  updateProfile: async (userData: any) => {
    const response = await api.put('/users/profile', userData);
    return response.data;
  },
};

export const gigService = {
  getGigs: async (params?: any) => {
    const response = await api.get('/gigs', { params });
    return response.data;
  },

  getGig: async (id: string) => {
    const response = await api.get(`/gigs/${id}`);
    return response.data;
  },

  createGig: async (gigData: any) => {
    const response = await api.post('/gigs', gigData);
    return response.data;
  },

  updateGig: async (id: string, gigData: any) => {
    const response = await api.put(`/gigs/${id}`, gigData);
    return response.data;
  },

  deleteGig: async (id: string) => {
    const response = await api.delete(`/gigs/${id}`);
    return response.data;
  },
};

export const orderService = {
  getOrders: async (params?: any) => {
    const response = await api.get('/orders', { params });
    return response.data;
  },

  getOrder: async (id: string) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },

  createOrder: async (orderData: any) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  updateOrderStatus: async (id: string, status: string) => {
    const response = await api.put(`/orders/${id}/status`, { status });
    return response.data;
  },

  deliverWork: async (id: string, deliveryData: any) => {
    const response = await api.put(`/orders/${id}/deliver`, deliveryData);
    return response.data;
  },
};