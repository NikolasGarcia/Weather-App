// cache.js

const CACHE_DURATION = 60 * 60 * 1000; // 1 hora en ms

// Detectar almacenamiento disponible (multiplataforma)
function getStorage() {
  try {
    if (typeof localStorage !== "undefined") {
      return localStorage;
    }
  } catch (e) {}
  
  // Fallback en memoria
  const memoryStore = {};
  return {
    getItem: (key) => memoryStore[key] || null,
    setItem: (key, value) => memoryStore[key] = value,
    removeItem: (key) => delete memoryStore[key]
  };
}

const storage = getStorage();

// Normalizar clave
function getCacheKey(city) {
  return `weather_${city.trim().toLowerCase()}`;
}

// Guardar en caché
export function saveToCache(city, data) {
  const key = getCacheKey(city);

  const payload = {
    data,
    timestamp: Date.now()
  };

  storage.setItem(key, JSON.stringify(payload));
}

// Obtener desde caché
export function getFromCache(city) {
  const key = getCacheKey(city);
  const cached = storage.getItem(key);

  if (!cached) return null;

  try {
    const parsed = JSON.parse(cached);
    const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION;

    if (isExpired) {
      storage.removeItem(key);
      return null;
    }

    return parsed.data;
  } catch (error) {
    storage.removeItem(key);
    return null;
  }
}