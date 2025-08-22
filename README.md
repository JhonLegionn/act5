Aplicación Móvil Híbrida - Consulta del Clima
Una aplicación móvil híbrida desarrollada con Ionic y React que permite consultar el clima actual de cualquier ciudad del mundo usando la API de OpenWeatherMap.
🌟 Características
✅ Interfaz moderna y responsive
✅ Consulta del clima por nombre de ciudad
✅ Muestra temperatura actual y descripción del clima
✅ Manejo de errores (ciudad no encontrada)
✅ Diseño visual atractivo tipo aplicación móvil
✅ Compatible con dispositivos móviles y web
🚀 Tecnologías Utilizadas
Ionic Framework - Framework para aplicaciones híbridas
React - Biblioteca de JavaScript para interfaces de usuario
TypeScript - Lenguaje tipado basado en JavaScript
OpenWeatherMap API - Servicio de datos meteorológicos
Vite - Herramienta de desarrollo rápida
📱 Instalación y Ejecución
Prerrequisitos
Node.js (versión 14 o superior)
npm o yarn
Ionic CLI
Pasos de instalación
Clona el repositorio

Instala las dependencias

Configura tu API Key

Regístrate en OpenWeatherMap
Obtén tu API Key gratuita
Abre Home.tsx
Reemplaza '55ca5d30e73369e36f1ca02fe9c638b5' por tu API Key
Ejecuta la aplicación

Abre en el navegador

La app se abrirá automáticamente en http://localhost:8100
🎯 Cómo usar
Ingresa el nombre de una ciudad en el campo de texto
Presiona el botón "Consultar Clima"
Ve la temperatura actual y descripción del clima
Si la ciudad no existe, se mostrará un mensaje de error
📂 Estructura del Proyecto
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página principal con funcionalidad del clima
│   └── Home.css        # Estilos de la página principal
├── theme/              # Variables de tema y estilos globales
└── App.tsx             # Componente principal de la aplicación
🛠️ Desarrollo
Para contribuir al proyecto:

Fork el repositorio
Crea una rama para tu feature (git checkout -b feature/nueva-funcionalidad)
Realiza tus cambios y commit (git commit -m 'Agrega nueva funcionalidad')
Push a la rama (git push origin feature/nueva-funcionalidad)
Abre un Pull Request
📱 Compilación para dispositivos móviles
Para generar una APK o IPA:


# Agregar plataforma Android
ionic capacitor add android

# Agregar plataforma iOS
ionic capacitor add ios

# Compilar para Android
ionic capacitor build android

# Compilar para iOS
ionic capacitor build ios
🌍 API Utilizada
Este proyecto utiliza la OpenWeatherMap API para obtener datos meteorológicos en tiempo real.

📄 Licencia
Este proyecto está bajo la Licencia MIT. Ve el archivo LICENSE para más detalles.

👨‍💻 Autor
JhonLegionn - GitHub
