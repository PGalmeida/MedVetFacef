import axios from "axios";

// Detectar a URL da API
const getApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  // Back-end sempre roda na porta 3000
  // Front-end pode estar em 3000 ou 3001 (se 3000 estiver ocupado)
  return "http://localhost:3000/api/v1";
};

const API_URL = getApiUrl();

// Log apenas em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  console.log("API URL configurada:", API_URL);
}

// Criar instância do axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 segundos de timeout
});

// Interceptor para adicionar token nas requisições
api.interceptors.request.use(
  (config) => {
    // Forçar a baseURL sempre
    if (!config.baseURL) {
      config.baseURL = API_URL;
    }
    
    // Se a URL não começar com http, construir a URL completa
    if (config.url && !config.url.startsWith('http')) {
      // Garantir que a URL comece com /
      if (!config.url.startsWith('/')) {
        config.url = '/' + config.url;
      }
      
      // Se o axios não aplicar a baseURL, construir manualmente
      if (!config.url.startsWith(config.baseURL)) {
        // Construir URL completa manualmente
        const baseUrl = config.baseURL.endsWith('/') 
          ? config.baseURL.slice(0, -1) 
          : config.baseURL;
        const urlPath = config.url.startsWith('/') 
          ? config.url 
          : '/' + config.url;
        config.url = baseUrl + urlPath;
        config.baseURL = ''; // Limpar baseURL para usar URL completa
      }
    }
    
    // Log da URL completa em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      const fullUrl = config.baseURL 
        ? (config.baseURL + (config.url.startsWith('/') ? config.url : '/' + config.url))
        : config.url;
      console.log(`[API Request] ${config.method?.toUpperCase()} ${fullUrl}`);
      console.log(`[API Config] baseURL: ${config.baseURL}, url: ${config.url}`);
    }
    
    // Verificar se localStorage está disponível
    if (typeof window !== "undefined" && window.localStorage) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Não redirecionar se estiver na página de login ou registro
    if (error.response?.status === 401) {
      // Verificar se window está disponível (não está no servidor)
      if (typeof window !== "undefined" && window.localStorage) {
        const currentPath = window.location.pathname;
        if (currentPath !== "/login" && currentPath !== "/register") {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

// Funções de autenticação
export const authAPI = {
  register: (userData) => {
    // Forçar URL completa absoluta
    const url = "http://localhost:3000/api/v1/register";
    console.log("Register - URL completa FORÇADA:", url);
    console.log("Register - API_URL original:", API_URL);
    return axios({
      method: 'POST',
      url: url,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });
  },
  login: (credentials) => {
    // Forçar URL completa absoluta
    const url = "http://localhost:3000/api/v1/login";
    console.log("Login - URL completa FORÇADA:", url);
    console.log("Login - API_URL original:", API_URL);
    return axios({
      method: 'POST',
      url: url,
      data: credentials,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });
  },
};

// Funções de veterinários (consultas)
export const vetAPI = {
  getAll: () => api.get("/vets"),
  getById: (id) => api.get(`/vets/${id}`),
  create: (vetData) => api.post("/admin/vets", vetData),
  update: (id, vetData) => api.put(`/vets/${id}`, vetData),
  delete: (id) => api.delete(`/vets/${id}`),
};

// Funções de veterinários/médicos (PostgreSQL)
export const veterinaryAPI = {
  getAll: () => api.get("/veterinaries"),
  getById: (id) => api.get(`/veterinaries/${id}`),
  create: (vetData) => api.post("/veterinaries", vetData),
  update: (id, vetData) => api.put(`/veterinaries/${id}`, vetData),
  delete: (id) => api.delete(`/veterinaries/${id}`),
};

// Funções de clínicas (PostgreSQL)
export const clinicAPI = {
  getAll: () => api.get("/clinics"),
  getById: (id) => api.get(`/clinics/${id}`),
  create: (clinicData) => api.post("/clinics", clinicData),
  update: (id, clinicData) => api.put(`/clinics/${id}`, clinicData),
  delete: (id) => api.delete(`/clinics/${id}`),
};

export default api;

