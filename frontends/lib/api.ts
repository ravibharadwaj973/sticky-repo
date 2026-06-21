const API_BASE_URL = 'http://localhost:5000/api';

 
export const api = {
  // Auth endpoints
  auth: {
    login: async (email: string, password: string) => {
      console.log(email)
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      return response.json();
    },

    register: async (name: string, email: string, password: string) => {
      console.log(name)
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      });
      return response.json();
    },

    logout: async () => {
      const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      return response.json();
    },

    getMe: async () => {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        credentials: 'include',
      });
      return response.json();
    },
  },

  // Notes endpoints
  notes: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/notes`, {
        credentials: 'include',
      });
      return response.json();
    },

    getArchived: async () => {
      const response = await fetch(`${API_BASE_URL}/notes/archived`, {
        credentials: 'include',
      });
      return response.json();
    },

    getById: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
        credentials: 'include',
      });
      return response.json();
    },

    create: async (noteData: { title: string; content: string; color?: string; position?: { x: number; y: number } }) => {
      const response = await fetch(`${API_BASE_URL}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(noteData),
      });
      return response.json();
    },

    update: async (id: string, noteData: any) => {
      const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(noteData),
      });
      return response.json();
    },

    archive: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/notes/${id}/archive`, {
        method: 'PATCH',
        credentials: 'include',
      });
      return response.json();
    },

    unarchive: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/notes/${id}/unarchive`, {
        method: 'PATCH',
        credentials: 'include',
      });
      return response.json();
    },

    delete: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      return response.json();
    },
  },
};