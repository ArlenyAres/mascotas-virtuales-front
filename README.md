

## I LOVE ... PETS



Esta aplicación es un proyecto desarrollado con **React**, **Vite**, y **Axios** que permite a los usuarios registrarse, iniciar sesión, y gestionar una lista de mascotas virtuales. La aplicación incluye autenticación, un sistema de protección de rutas, y una API para manejar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de las mascotas.

## Características

- **Autenticación de usuarios:** Registro, inicio de sesión y cierre de sesión.
- **Gestión de mascotas:** Crear, personalizar, ver, actualizar y eliminar mascotas.
- **Protección de rutas:** Acceso restringido a ciertas rutas si no se ha iniciado sesión.
- **Interfaz interactiva:** Navegación fluida entre las diferentes páginas de la aplicación.

## Requisitos

- Node.js y npm (Node Package Manager)
- Vite (como herramienta de construcción de la aplicación)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/ArlenyAres/mascotas-virtuales-front
   ```

2. **Instalar las dependencias:**

   Navega a la carpeta del proyecto y ejecuta:

   ```bash
   npm install
   ```

3. **Configuración del servidor:**

   Asegúrate de que el servidor de la API esté ejecutándose en `http://localhost:8080` o cambia la `baseURL` en el archivo `services.js` si el servidor está en una URL diferente.

## Ejecución del Proyecto

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm run dev
```

Esto iniciará la aplicación en `http://localhost:3000`.

## Estructura del Proyecto

- **`services.js`**: Contiene los servicios que interactúan con la API utilizando Axios. Aquí se configuran las solicitudes HTTP y se gestionan las operaciones CRUD para la autenticación y las mascotas.

- **`App.js`**: Configura las rutas de la aplicación utilizando React Router y protege ciertas rutas para que solo los usuarios autenticados puedan acceder a ellas.

- **`components/`**: Contiene componentes reutilizables como `ProtectedRoute`, `ActionButton`, y `ProgressBar`.

- **`pages/`**: Contiene las páginas principales de la aplicación como `LoginPage`, `RegisterPage`, `UserMenuPage`, `CustomizePetPage`, y más.

- **`assets/`**: Contiene recursos estáticos como imágenes y estilos CSS.

## Uso de la Aplicación

### Autenticación

1. **Registro:**
   - Dirígete a la página de registro y crea una nueva cuenta.
   
2. **Iniciar Sesión:**
   - Inicia sesión con las credenciales creadas durante el registro.

3. **Cerrar Sesión:**
   - Al cerrar sesión, el token de autenticación se elimina del almacenamiento local.

### Gestión de Mascotas

- **Crear una Mascota:**
  - Después de iniciar sesión, navega a la opción "NEW PET" para crear una nueva mascota.
  
- **Personalizar una Mascota:**
  - Ingresa el nombre y selecciona un color para tu mascota. Luego, guarda los cambios.

- **Ver Mis Mascotas:**
  - Desde el menú del usuario, selecciona "MY PETS" para ver una lista de todas tus mascotas.

- **Actualizar o Eliminar Mascotas:**
  - Selecciona una mascota de la lista para actualizar sus detalles o eliminarla.

## Protección de Rutas

Algunas rutas están protegidas para que solo los usuarios autenticados puedan acceder a ellas. Si un usuario intenta acceder a una ruta protegida sin estar autenticado, será redirigido a la página de inicio de sesión.

## Personalización

Puedes modificar los estilos CSS y los componentes según sea necesario. El archivo `styles` en cada página contiene las definiciones de estilo para esa página.

## Dependencias

- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **Vite**: Herramienta de desarrollo rápida para proyectos de frontend.
- **React Router**: Para manejar la navegación en la aplicación.

## Contribución

Si deseas contribuir al proyecto, realiza un fork del repositorio, crea una nueva rama para tus cambios, y abre un pull request una vez que hayas terminado.

