🛒 Ecommerce Vidriería Garatea
Sistema web de comercio electrónico para la venta de artículos de ferretería, vidrios, accesorios y servicios personalizados. Cuenta con un modo Usuario y un modo Administrador, permitiendo tanto compras como gestión total del catálogo y usuarios.

# 👤 Modo Usuario (Cliente)
El usuario puede navegar, registrarse, comprar productos y hacer seguimiento de sus pedidos.


## 1. 🏠 Página de inicio
Información institucional con lema: “Calidad, seriedad y garantía”.

Botón de navegación a tienda y proyectos.

Imagen de fondo tipo fachada de vidrio..

📷 ![image](https://github.com/user-attachments/assets/f925cbbd-f243-4a39-b27a-39708d3d28e5)

## 2. 🛍️ Tienda por categorías
Filtros por categoría (Siliconas, Puertas, Ferretería, etc.).

Cada producto muestra:

- **Imagen**
- **Nombre**
- **Precio**
- **Botón** `"Agregar al carrito"`

📷 ![image](https://github.com/user-attachments/assets/a58f0664-e49f-41f1-b478-9112b9c4128e)

## 3. 🛒 Carrito de compras
Vista lateral del carrito (tipo off-canvas).

Permite aumentar o disminuir cantidad de productos.

Muestra total a pagar.

📷 ![image](https://github.com/user-attachments/assets/b40d3556-6963-46e3-bb92-d31099dfe9c9)


## 4. 📦 Seguimiento de pedidos
Panel "Mis pedidos" con pestañas: Pendientes, Completados, Cancelados.

Detalles como número de pedido, ciudad de envío, monto total.

📷 ![image](https://github.com/user-attachments/assets/81890b0b-62e5-4957-820e-a2d4ef3adcb6)

## 5. ⚙️ Configuración de cuenta
Editar nombre, apellidos y correo electrónico.

📷 ![image](https://github.com/user-attachments/assets/178028cf-8d48-4a3d-9934-8b895032d910)

# 🧑‍💼 Modo Administrador
Permite gestionar productos, usuarios y pedidos. Acceso restringido por rol.

## 1. 🖥️ Dashboard
Acceso rápido a secciones principales.

Vista del clima actual (ejemplo: "Nvo. Chimbote, 19°C").

📷 Ver imagen: dashboard_admin.png

## 2. 📦 Gestión de productos
Tabla de productos con columnas:

- **Nombre**
- **Categoría**
- **Stock**
- **Precio**
- **Estado** (Habilitado/Deshabilitado)
- **Botón para editar**

Filtro por categoría y estado.

📷 ![image](https://github.com/user-attachments/assets/b6c67e22-6e7e-4df7-837d-c3c8d40e2865)

## 3. 👥 Gestión de usuarios
Listado de todos los usuarios registrados.

Se muestra: ID, nombre, apellido, correo y rol.

Al seleccionar un usuario, se muestra resumen: total de pedidos, rol, y comportamiento de compra.

📷 ![image](https://github.com/user-attachments/assets/c0d5cf1e-30fa-4b28-b01b-f4aeb48cd085)


🌐 Otros módulos
📍 Sección Contacto
Mapa integrado con ubicación exacta (Google Maps).

Botón de contacto por WhatsApp.

📷 Ver imagen: contacto.png

## 4. 🏢 Sección Proyectos
Muestra trabajos realizados en diferentes categorías:

- **Residenciales**
- **Instituciones**
- **Comerciales**
- **Baños**

📷 Ver imagen: proyectos.png

# 🔐 Seguridad y control
Autenticación por email.

Diferenciación de roles: Admin vs User.

Dark mode habilitado.

# 🧰 Tecnologías utilizadas

- **Frontend:** React.js
- **Backend:** C# y .NET
- **Base de datos:** MySQL
- **UI:** Tailwind CSS
- **Control de estado:** Context API
- **Extras:** Gestión de pedidos, carrito y usuarios en tiempo real.
