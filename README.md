# 🌦️ Weather App (Clima en Tiempo Real)

## 📌 Descripción

Aplicación web que permite consultar el clima actual de cualquier ciudad utilizando la API de OpenWeather.

El proyecto implementa una arquitectura **frontend + backend (proxy)** para proteger la API key, además de un sistema de **caché** para optimizar el rendimiento y reducir llamadas innecesarias a la API.

---

## 🚀 Características principales

* 🔍 Búsqueda de clima por nombre de ciudad
* 🌡️ Temperatura en grados Celsius
* 💧 Humedad (%)
* 💨 Velocidad del viento (km/h)
* 🌤️ Iconos dinámicos según el clima
* ⚡ Sistema de caché (TTL: 1 hora)
* 🔐 Backend proxy para ocultar API key
* ❌ Manejo de errores (ciudad no encontrada, fallo de red)

---

## 🧱 Arquitectura

```
Frontend → Backend (Node.js) → OpenWeather API
```

* El frontend NO expone la API key
* El backend actúa como intermediario seguro

---

## 🛠️ Tecnologías utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express
* node-fetch
* dotenv
* cors

---

## 📁 Estructura del proyecto

```
Weather-app/
│
├── Frontend/
│   ├── index.html
│   ├── weather.js
│   ├── cache.js
│
├── Backend/
│   ├── server.js
│   ├── .env (no incluido en el repo)
│
├── assets/
│   └── images/
│
├── css/
│   └── styles.css
│
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/weather-app.git
cd weather-app
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar variables de entorno

Crear archivo:

```
Backend/.env
```

Contenido:

```env
API_KEY=tu_api_key_de_openweather
PORT=3000
```

---

### 4. Ejecutar backend

```bash
cd Backend
node server.js
```

---

### 5. Ejecutar frontend

Abrir:

```
Frontend/index.html
```

O usar un servidor local (recomendado):

```bash
npx serve
```

---

## 🧑‍💻 Uso

1. Ingresa el nombre de una ciudad
2. Presiona el botón de búsqueda
3. Visualiza el clima actual

---

## 📊 Ejemplo de respuesta

```
Ciudad: Bogotá
Temperatura: 18°C
Humedad: 70%
Viento: 10 km/h
Clima: Nublado
```

---

## ⚡ Sistema de caché

La aplicación implementa caché en el frontend:

* Duración: 1 hora
* Evita llamadas repetidas a la API
* Mejora rendimiento

---

## 🔐 Seguridad

* API key protegida mediante backend proxy
* Uso de `.env` para variables sensibles
* `.gitignore` evita subir credenciales

---

## ⚠️ Manejo de errores

* Ciudad no encontrada
* Error de red
* Respuesta inválida de la API

---

## 🔮 Mejoras futuras

* 🌍 Soporte para país (ej: `Bogota, CO`)
* 📍 Geolocalización del usuario
* 📊 Pronóstico extendido (forecast)
* 🔄 Debounce en búsqueda
* 🌡️ Cambio entre °C y °F
* 🧪 Tests automatizados
* 📱 Mejoras de diseño responsive
* ⚡ Caché en backend

---

## 🐛 Problemas conocidos

* Ambigüedad en nombres de ciudades
* Dependencia de conexión a internet

---

## 📌 Autor

Proyecto desarrollado como práctica de consumo de APIs, manejo del DOM y arquitectura frontend-backend.

---

## 📄 Licencia

Uso educativo y personal.
