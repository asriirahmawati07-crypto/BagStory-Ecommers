// Sample product data
const products = [
    {
        id: 1,
        name: "Classic Leather Handbag",
        price: 2250000,
        category: "handbags",
        description: "Elegant leather handbag perfect for professional settings. Made with genuine leather and featuring multiple compartments.",
        image: "https://th.bing.com/th/id/OIP.hpWJvhYYc6Einnjl24ltgwHaHa?w=218&h=218&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        featured: true
    },
    {
        id: 2,
        name: "Urban Adventure Backpack",
        price: 1350000,
        category: "backpacks",
        description: "Durable backpack designed for city adventures. Water-resistant with laptop compartment and ergonomic design.",
        image: "https://cdn-s3.touchofmodern.com/products/001/173/512/7ad4258dc121269d3ca02f932d91338e_large.jpg?1533759174",
        featured: true
    },
    {
        id: 3,
        name: "Spacious Canvas Tote",
        price: 900000,
        category: "totes",
        description: "Large canvas tote bag ideal for shopping or beach trips. Eco-friendly material with sturdy construction.",
        image: "https://img.freepik.com/premium-psd/olive-green-canvas-tote-bag-with-reinforced-handles-spacious-interior-transparent-backgroud_1111860-8948.jpg",
        featured: true
    },
    {
        id: 4,
        name: "Evening Elegance Clutch",
        price: 1200000,
        category: "clutches",
        description: "Sophisticated clutch bag for special occasions. Features metallic accents and removable chain strap.",
        image: "https://tse1.mm.bing.net/th/id/OIP.xhXE-ZPRpAa90CcD7j_1EgHaHa?w=620&h=621&rs=1&pid=ImgDetMain&o=7&rm=3",
        featured: false
    },
    {
        id: 5,
        name: "Professional Briefcase",
        price: 3000000,
        category: "handbags",
        description: "Premium leather briefcase for business professionals. Multiple organizational compartments and laptop sleeve.",
        image: "https://th.bing.com/th/id/OIP.FDN_mMi_v2_oVL2jobnxBAHaEo?w=316&h=197&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        featured: false
    },
    {
        id: 6,
        name: "Travel Duffel Bag",
        price: 1950000,
        category: "backpacks",
        description: "Versatile duffel bag perfect for weekend trips. Convertible straps allow backpack or shoulder carry.",
        image: "https://th.bing.com/th/id/OIP.ESfqpUsUZJ4113NFVcGSPwHaHa?w=204&h=204&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        featured: true
    },
    {
        id: 7,
        name: "Minimalist Crossbody",
        price: 1050000,
        category: "handbags",
        description: "Sleek crossbody bag with minimalist design. Perfect size for essentials with adjustable strap.",
        image: "https://th.bing.com/th/id/OIP.8zv00w6zFWCBEkqZKBzgewHaJ3?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        featured: false
    },
    {
        id: 8,
        name: "Beach Tote Deluxe",
        price: 1350000,
        category: "totes",
        description: "Premium beach tote with waterproof interior. Includes insulated pocket and removable pouch.",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1715880446-waterproof-beach-tote-woman-s-day-best-beac-totes-664641da83e09.jpg?crop=0.878xw:0.770xh;0.0577xw,0.115xh&resize=980:*",
        featured: false
    },
    {
        id: 9,
        name: "Vintage Style Satchel",
        price: 1800000,
        category: "handbags",
        description: "Classic satchel with vintage-inspired design. Genuine leather with brass hardware and adjustable strap.",
        image: "https://th.bing.com/th/id/OIP.E5MQpSifikN7jYfPhOMyywHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        featured: true
    },
    {
        id: 10,
        name: "Designer Evening Clutch",
        price: 2400000,
        category: "clutches",
        description: "Luxury evening clutch with crystal embellishments. Includes detachable chain for versatile styling.",
        image: "https://th.bing.com/th/id/OIP.XHr7wqA9GPWRmqoHKer_FwHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        featured: false
    },
    {
        id: 11,
        name: "Hiking Backpack Pro",
        price: 2700000,
        category: "backpacks",
        description: "Professional hiking backpack with 35L capacity. Features hydration system compatibility and rain cover.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        featured: false
    },
    {
        id: 12,
        name: "Casual Day Tote",
        price: 750000,
        category: "totes",
        description: "Lightweight tote perfect for daily use. Multiple pockets and comfortable handles for all-day carry.",
        image: "https://i.pinimg.com/originals/30/2d/02/302d02873b69d594a552e8df71dbdcaa.jpg",
        featured: true
    }
];

// Shopping cart
let cart = [];

// DOM elements
let featuredProductsContainer, allProductsContainer, cartCount, cartItems, cartTotal, cartSidebar, cartOverlay;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('BagStory website loaded!');
    
    // Get DOM elements
    featuredProductsContainer = document.getElementById('featured-products');
    allProductsContainer = document.getElementById('all-products');
    cartCount = document.getElementById('cart-count');
    cartItems = document.getElementById('cart-items');
    cartTotal = document.getElementById('cart-total');
    cartSidebar = document.getElementById('cart-sidebar');
    cartOverlay = document.getElementById('cart-overlay');
    
    // Initialize components
    loadFeaturedProducts();
    loadAllProducts();
    setupEventListeners();
    updateCartDisplay();
    setupNavigation();
});

// Load featured products
function loadFeaturedProducts() {
    const featuredProducts = products.filter(product => product.featured);
    featuredProductsContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
    });
}

// Load all products
function loadAllProducts() {
    allProductsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        allProductsContainer.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">
                <span class="price">Rp ${product.price.toLocaleString('id-ID')}</span>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
    
    // Add click event to open product modal
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart')) {
            openProductModal(product);
        }
    });
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Cart icon click
    document.getElementById('cart-icon').addEventListener('click', toggleCart);
    
    // Close cart
    document.querySelector('.close-cart').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    // Category filter
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    
    // Price filter
    document.getElementById('price-filter').addEventListener('change', filterProducts);
    
    // Search
    document.getElementById('search-input').addEventListener('input', searchProducts);
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const category = e.currentTarget.getAttribute('data-category');
            filterByCategory(category);
        });
    });
    
    // Contact form
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
    
    // Modal close
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('product-modal').addEventListener('click', (e) => {
        if (e.target.id === 'product-modal') {
            closeModal();
        }
    });
    
    // Color swatches
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
    // Add to cart from modal
    document.getElementById('add-to-cart-modal').addEventListener('click', addToCartFromModal);
    
    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', handleCheckout);
}

// Setup navigation
function setupNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = ['home', 'shop', 'about', 'contact'];
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (section && navLink) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Filter products
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    let filteredProducts = products;
    
    // Filter by category
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Filter by price (converted to Rupiah ranges)
    if (priceFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            switch(priceFilter) {
                case '0-50':
                    return product.price >= 0 && product.price <= 1000000; // 0-1jt
                case '50-100':
                    return product.price > 1000000 && product.price <= 2000000; // 1-2jt
                case '100-200':
                    return product.price > 2000000 && product.price <= 3000000; // 2-3jt
                case '200+':
                    return product.price > 3000000; // 3jt+
                default:
                    return true;
            }
        });
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFilteredProducts(filteredProducts);
}

// Search products
function searchProducts() {
    filterProducts();
}

// Filter by category
function filterByCategory(category) {
    document.getElementById('category-filter').value = category;
    filterProducts();
    scrollToSection('shop');
}

// Display filtered products
function displayFilteredProducts(filteredProducts) {
    allProductsContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        allProductsContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #7f8c8d; font-size: 1.2rem;">No products found matching your criteria.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        allProductsContainer.appendChild(productCard);
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showAddToCartMessage(product.name);
}

// Add to cart from modal
function addToCartFromModal() {
    const productId = parseInt(document.getElementById('add-to-cart-modal').getAttribute('data-product-id'));
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    closeModal();
    showAddToCartMessage(product.name);
}

// Show add to cart message
function showAddToCartMessage(productName) {
    // Create temporary message
    const message = document.createElement('div');
    message.className = 'cart-message';
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    message.textContent = `${productName} added to cart!`;
    
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${product ? product.image : ''}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                    <p class="cart-item-price">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString('id-ID');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Toggle cart
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

// Close cart
function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
}

// Open product modal
function openProductModal(product) {
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-price').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-image').alt = product.name;
    document.getElementById('add-to-cart-modal').setAttribute('data-product-id', product.id);
    document.getElementById('quantity').value = 1;
    
    document.getElementById('product-modal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Change quantity in modal
function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let newQuantity = parseInt(quantityInput.value) + change;
    
    if (newQuantity < 1) newQuantity = 1;
    if (newQuantity > 10) newQuantity = 10;
    
    quantityInput.value = newQuantity;
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);
    
    // Reset form
    document.getElementById('contact-form').reset();
}

// Handle checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your purchase! Total: Rp ${total.toLocaleString('id-ID')}\n\nThis is a demo - no actual payment was processed.`);
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    closeCart();
}

// Mobile menu toggle (for future implementation)
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('mobile-active');
});