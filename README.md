# 💜 Amoori – Amar también es dar  
Sitio web responsivo para una tienda de detalles personalizados, creado para ofrecer una experiencia rápida, bonita y funcional a los clientes.  
Incluye catálogo, carrito de compras, buscador y páginas independientes por categoría.

---

## 🌸 Características principales

### 🛍️ Catálogo completo de productos  
- Productos organizados en tarjetas con imagen, nombre y precio  
- Botón para agregar al carrito  
- Diseño limpio y elegante  

### 🔎 Buscador integrado  
Permite buscar productos por nombre en tiempo real directamente en la página principal.

### 🛒 Carrito de compras dinámico  
- Se abre con un panel lateral animado  
- Total calculado automáticamente  
- Permite vaciar el carrito  
- Envía pedido por WhatsApp con los productos seleccionados  

### 📱 Menú hamburguesa responsivo  
En dispositivos móviles la navegación se adapta y muestra un menú tipo “drawer”.

### 🏷️ Categorías con páginas independientes  
Cada categoría cuenta con su propia página:

- Cajas  
- Camisetas  
- Rosas Eternas  
- Joyería  
- Stickers  

### 💬 Contacto directo  
Incluye enlaces a:  
- WhatsApp  
- Instagram  

---

## 🚀 Tecnologías utilizadas

- **HTML5**  
- **CSS3** (Grid, Flexbox, responsive design)  
- **JavaScript** para carrito, buscador y menús  
- **WhatsApp API** para enviar pedidos  

---

## 📁 Estructura del proyecto

/
├── index.html # Página principal
├── cajas.html # Página de categoría: Cajas
├── camisetas.html # Página de categoría: Camisetas
├── rosas.html # Página de categoría: Rosas Eternas
├── joyeria.html # Página de categoría: Joyería
├── stickers.html # Página de categoría: Stickers
├── styles.css # Estilos globales
├── script.js # Funciones JS (carrito, buscador, menú)
└── /img # Imágenes del sitio

yaml
Copiar código

---

## 🧠 Funcionamiento del carrito

1. Cada producto tiene un botón con atributos:
   ```html
   data-name=""
   data-price=""
Al hacer clic, se agrega al carrito.

El carrito se actualiza automáticamente.

Los productos se envían por WhatsApp usando un enlace dinámico.

📲 Responsividad
El sitio está optimizado para:

Computadoras

Tablets

Teléfonos pequeños y grandes

Se utiliza:

Menú hamburguesa

Ajuste automático de grids

Carrito responsive

Buscador flexible

🔧 Cómo agregar nuevos productos
Ve a la sección correspondiente (index o una categoría).

Copia este bloque:

html
Copiar código
<div class="producto-card">
    <img src="img/nombre.jpg">
    <h3>Nombre del producto</h3>
    <p class="price">$0.00</p>
    <button class="add-btn" data-name="Nombre" data-price="0.00">
        Agregar 🛒
    </button>
</div>
Cambia:

La imagen

El nombre

El precio

Y listo.

❤️ Créditos
Diseño y desarrollo: Jennifer Navarro
