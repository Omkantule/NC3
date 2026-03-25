// Product Database
const seedProducts = [
    {
        id: 1,
        name: "Fresh Tomatoes",
        category: "vegetables",
        price: 40,
        originalPrice: 60,
        discount: 33,
        rating: 4.5,
        reviews: 128,
        shelfLife: "5-7 days",
        location: "Anand Market Yard",
        distance: "2.5 km",
        icon: "🍅",
        images: ["🍅", "🍅", "🍅", "🍅"],
        farmer: {
            name: "Ramesh Patel",
            avatar: "👨‍🌾",
            rating: 4.8,
            experience: 15,
            products: 12,
            orders: 850,
            bio: "Experienced organic farmer specializing in fresh vegetables. Using traditional farming methods combined with modern sustainable practices."
        },
        description: "Fresh, locally grown tomatoes. Perfect for salads, cooking, and sauces."
    },
    {
        id: 2,
        name: "Organic Spinach",
        category: "vegetables",
        price: 30,
        originalPrice: 45,
        discount: 33,
        rating: 4.7,
        reviews: 95,
        shelfLife: "3-4 days",
        location: "Gandhinagar Farm",
        distance: "3.8 km",
        icon: "🥬",
        images: ["🥬", "🥬", "🥬"],
        farmer: {
            name: "Kavita Sharma",
            avatar: "👩‍🌾",
            rating: 4.9,
            experience: 10,
            products: 8,
            orders: 620,
            bio: "Certified organic farmer dedicated to growing pesticide-free leafy vegetables."
        }
    },
    {
        id: 3,
        name: "Fresh Carrots",
        category: "vegetables",
        price: 35,
        originalPrice: 50,
        discount: 30,
        rating: 4.6,
        reviews: 110,
        shelfLife: "7-10 days",
        location: "Mehsana Mandi",
        distance: "5.2 km",
        icon: "🥕",
        images: ["🥕", "🥕", "🥕"],
        farmer: {
            name: "Suresh Kumar",
            avatar: "👨‍🌾",
            rating: 4.7,
            experience: 20,
            products: 15,
            orders: 1200,
            bio: "Third generation farmer with expertise in root vegetables and sustainable farming."
        }
    },
    {
        id: 4,
        name: "Red Apples",
        category: "fruits",
        price: 120,
        originalPrice: 150,
        discount: 20,
        rating: 4.8,
        reviews: 200,
        shelfLife: "10-15 days",
        location: "Kashmir Fruit Market",
        distance: "1.5 km",
        icon: "🍎",
        images: ["🍎", "🍎", "🍎", "🍎"],
        farmer: {
            name: "Mohammad Iqbal",
            avatar: "👨‍🌾",
            rating: 4.9,
            experience: 25,
            products: 20,
            orders: 1500,
            bio: "Kashmir-based fruit farmer known for premium quality apples and cherries."
        }
    },
    {
        id: 5,
        name: "Fresh Bananas",
        category: "fruits",
        price: 50,
        originalPrice: 65,
        discount: 23,
        rating: 4.4,
        reviews: 156,
        shelfLife: "5-7 days",
        location: "Surat Market",
        distance: "4.1 km",
        icon: "🍌",
        images: ["🍌", "🍌", "🍌"],
        farmer: {
            name: "Lakshmi Naidu",
            avatar: "👩‍🌾",
            rating: 4.6,
            experience: 12,
            products: 6,
            orders: 780,
            bio: "Specializing in tropical fruits with focus on quality and freshness."
        }
    },
    {
        id: 6,
        name: "Sweet Mangoes",
        category: "fruits",
        price: 180,
        originalPrice: 220,
        discount: 18,
        rating: 4.9,
        reviews: 245,
        shelfLife: "7-10 days",
        location: "Ratnagiri Bazaar",
        distance: "3.3 km",
        icon: "🥭",
        images: ["🥭", "🥭", "🥭", "🥭"],
        farmer: {
            name: "Ganesh Desai",
            avatar: "👨‍🌾",
            rating: 5.0,
            experience: 18,
            products: 10,
            orders: 950,
            bio: "Alphonso mango specialist with generations of expertise in mango cultivation."
        }
    },
    {
        id: 7,
        name: "Wheat Grains",
        category: "grains",
        price: 25,
        originalPrice: 30,
        discount: 17,
        rating: 4.5,
        reviews: 89,
        shelfLife: "6-12 months",
        location: "Punjab Grain Market",
        distance: "6.5 km",
        icon: "🌾",
        images: ["🌾", "🌾", "🌾"],
        farmer: {
            name: "Harpreet Singh",
            avatar: "👨‍🌾",
            rating: 4.7,
            experience: 22,
            products: 8,
            orders: 1100,
            bio: "Punjab-based grain farmer with expertise in wheat, rice, and millets."
        }
    },
    {
        id: 8,
        name: "Basmati Rice",
        category: "grains",
        price: 90,
        originalPrice: 110,
        discount: 18,
        rating: 4.7,
        reviews: 167,
        shelfLife: "12-18 months",
        location: "Haryana Wholesale",
        distance: "7.2 km",
        icon: "🍚",
        images: ["🍚", "🍚", "🍚"],
        farmer: {
            name: "Vijay Yadav",
            avatar: "👨‍🌾",
            rating: 4.8,
            experience: 16,
            products: 5,
            orders: 890,
            bio: "Premium basmati rice cultivator with focus on aromatic varieties."
        }
    },
    {
        id: 9,
        name: "Fresh Milk",
        category: "dairy",
        price: 60,
        originalPrice: 70,
        discount: 14,
        rating: 4.6,
        reviews: 134,
        shelfLife: "2-3 days",
        location: "Kaira Dairy",
        distance: "2.0 km",
        icon: "🥛",
        images: ["🥛", "🥛"],
        farmer: {
            name: "Priya Mehta",
            avatar: "👩‍🌾",
            rating: 4.8,
            experience: 8,
            products: 4,
            orders: 720,
            bio: "Operating a small-scale dairy farm with focus on animal welfare and quality."
        }
    },
    {
        id: 10,
        name: "Farm Fresh Eggs",
        category: "dairy",
        price: 80,
        originalPrice: 95,
        discount: 16,
        rating: 4.7,
        reviews: 178,
        shelfLife: "15-20 days",
        location: "Anand Poultry",
        distance: "3.5 km",
        icon: "🥚",
        images: ["🥚", "🥚", "🥚"],
        farmer: {
            name: "Deepak Joshi",
            avatar: "👨‍🌾",
            rating: 4.7,
            experience: 10,
            products: 3,
            orders: 650,
            bio: "Free-range poultry farmer committed to ethical farming practices."
        }
    },
    {
        id: 11,
        name: "Green Capsicum",
        category: "vegetables",
        price: 45,
        originalPrice: 60,
        discount: 25,
        rating: 4.3,
        reviews: 76,
        shelfLife: "7-10 days",
        location: "Vadodara Mandi",
        distance: "4.5 km",
        icon: "🫑",
        images: ["🫑", "🫑", "🫑"],
        farmer: {
            name: "Ramesh Patel",
            avatar: "👨‍🌾",
            rating: 4.8,
            experience: 15,
            products: 12,
            orders: 850,
            bio: "Experienced organic farmer specializing in fresh vegetables."
        }
    },
    {
        id: 12,
        name: "Fresh Strawberries",
        category: "fruits",
        price: 200,
        originalPrice: 250,
        discount: 20,
        rating: 4.9,
        reviews: 189,
        shelfLife: "3-5 days",
        location: "Mahabaleshwar Market",
        distance: "8.5 km",
        icon: "🍓",
        images: ["🍓", "🍓", "🍓", "🍓"],
        farmer: {
            name: "Amit Patil",
            avatar: "👨‍🌾",
            rating: 4.9,
            experience: 12,
            products: 7,
            orders: 560,
            bio: "Specializing in premium berries and exotic fruits with controlled environment farming."
        }
    }
];

// Sample Reviews
const reviewsData = {
    1: [
        { name: "Priya S.", rating: 5, date: "2 days ago", text: "Excellent quality tomatoes! Very fresh and juicy. Perfect for making curry." },
        { name: "Rahul M.", rating: 4, date: "5 days ago", text: "Good product but delivery was slightly delayed. Overall satisfied with the quality." },
        { name: "Anjali K.", rating: 5, date: "1 week ago", text: "Best tomatoes I've bought online. Will definitely order again!" }
    ],
    2: [
        { name: "Sneha P.", rating: 5, date: "1 day ago", text: "Super fresh spinach! Loved the organic quality." },
        { name: "Amit R.", rating: 5, date: "4 days ago", text: "Healthy and green. Kavita's farm products are always great!" }
    ]
};

// App State
const PRODUCT_STORAGE_KEY = 'farmFreshProducts';
const ROLE_STORAGE_KEY = 'farmFreshRole';
const ORDER_HISTORY_KEY = 'farmFreshOrderHistory';
const API_BASE_URL = '/api';

let products = [];
let cart = JSON.parse(localStorage.getItem('farmFreshCart')) || [];
let userLocation = localStorage.getItem('farmFreshLocation') || '';
let currentRole = localStorage.getItem(ROLE_STORAGE_KEY) || '';
let selectedCategory = 'all';
let selectedSort = 'featured';
let orderHistory = [];

// Initialize Page
document.addEventListener('DOMContentLoaded', async function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    await loadProducts();

    if (currentPage === 'login.html') {
        initLoginPage();
        return;
    }

    if (!isAuthenticatedRole(currentRole)) {
        window.location.href = 'login.html';
        return;
    }
    
    // Common initialization
    updateCartCount();
    initLocationButton();
    
    // Page-specific initialization
    if (currentPage === 'index.html' || currentPage === '') {
        initCatalogPage();
    } else if (currentPage === 'product-detail.html') {
        initProductDetailPage();
    } else if (currentPage === 'cart.html') {
        initCartPage();
    } else if (currentPage === 'checkout.html') {
        initCheckoutPage();
    }
    
    displayCurrentLocation();
});

window.addEventListener('pageshow', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'checkout.html') {
        resetCheckoutSuccessModal();
    }
});

async function apiRequest(path, options = {}) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'API request failed.');
    }

    return data;
}

function isAuthenticatedRole(role) {
    return ['farmer', 'wholesaler', 'customer'].includes(role);
}

function initLoginPage() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedRole = document.querySelector('input[name="role"]:checked');
        if (!selectedRole) {
            alert('Please select a user category.');
            return;
        }

        setRole(selectedRole.value);
        window.location.href = 'index.html';
    });
}

function updateRoleChip() {
    const roleChip = document.getElementById('activeRoleChip');
    if (!roleChip) return;

    roleChip.textContent = `Role: ${getRoleLabel(currentRole)}`;
}

function getRoleLabel(role) {
    if (role === 'farmer') return 'Farmer';
    if (role === 'wholesaler') return 'Wholesaler';
    return 'Customer';
}

function logoutUser() {
    localStorage.removeItem(ROLE_STORAGE_KEY);
    window.location.href = 'login.html';
}

// Catalog Page Functions
function initCatalogPage() {
    syncCartWithInventory();
    initRoleSelector();
    initFarmerProductForm();
    initFilters();
    initSort();
    renderCatalogProducts();
    updateRoleChip();
    loadOrderHistory().then(() => renderRecentOrderHistory());
}

async function loadProducts() {
    try {
        const response = await apiRequest('/products');
        products = normalizeProducts(response.products || []);
    } catch (error) {
        alert('Unable to connect to database server. Please start backend server.');
        products = [];
    }
}

function saveProducts() {
    return;
}

async function loadOrderHistory() {
    if (!isAuthenticatedRole(currentRole)) {
        orderHistory = [];
        return;
    }

    try {
        const response = await apiRequest(`/orders/recent?role=${currentRole}&hours=24`);
        orderHistory = response.orders || [];
    } catch (error) {
        orderHistory = [];
    }
}

function saveOrderHistory() {
    return;
}

function pruneOrderHistory() {
    return;
}

function recordOrderHistory(orderId, buyerName, items) {
    return;
}

function getRecentOrdersForRole(role) {
    return orderHistory;
}

function renderRecentOrderHistory() {
    const historyPanelTitle = document.getElementById('historyPanelTitle');
    const historyPanelSubtitle = document.getElementById('historyPanelSubtitle');
    const historyList = document.getElementById('historyList');

    if (!historyList) return;

    const roleLabel = getRoleLabel(currentRole);
    const roleOrders = getRecentOrdersForRole(currentRole);

    if (currentRole === 'farmer') {
        historyPanelTitle.textContent = 'Farmer - Last 24 Hours Purchases';
        historyPanelSubtitle.textContent = 'Orders placed by customers and wholesalers in the last 24 hours.';
    } else {
        historyPanelTitle.textContent = `${roleLabel} - Last 24 Hours Purchases`;
        historyPanelSubtitle.textContent = `Items purchased by ${roleLabel.toLowerCase()} in the last 24 hours.`;
    }

    if (roleOrders.length === 0) {
        historyList.innerHTML = '<p class="history-empty">No purchases in the last 24 hours.</p>';
        return;
    }

    historyList.innerHTML = '';
    roleOrders.slice(0, 20).forEach(order => {
        const historyCard = document.createElement('div');
        historyCard.className = 'history-item';
        const orderTime = new Date(order.timestamp).toLocaleString();

        historyCard.innerHTML = `
            <div class="history-main">
                <h4>${order.productName}</h4>
                <p>Order #${order.orderId} • ${order.quantity} kg • ₹${order.totalPrice.toFixed(2)}</p>
            </div>
            <div class="history-meta">
                <span>${orderTime}</span>
                ${currentRole === 'farmer' ? `<span>Buyer: ${getRoleLabel(order.buyerRole)} (${order.buyerName})</span>` : ''}
            </div>
        `;

        historyList.appendChild(historyCard);
    });
}

function normalizeProducts(rawProducts) {
    return rawProducts.map(product => {
        const normalized = { ...product };

        if (!normalized.listedBy) {
            const looksLikeOldFarmerUpload = normalized.id > seedProducts.length || normalized.farmer?.name === 'Current Farmer';
            normalized.listedBy = looksLikeOldFarmerUpload ? 'farmer' : 'seed';
        }

        if (typeof normalized.stockKg !== 'number') {
            normalized.stockKg = normalized.listedBy === 'farmer' ? 100 : 0;
        }

        if (normalized.stockKg < 0) {
            normalized.stockKg = 0;
        }

        return normalized;
    });
}

function getVisibleMarketplaceProducts() {
    return products.filter(product => product.listedBy === 'farmer' && product.stockKg > 0);
}

function findProductById(id) {
    return products.find(product => String(product.id || product._id) === String(id));
}

function getProductKey(product) {
    return String(product.id || product._id);
}

function syncCartWithInventory() {
    let changed = false;

    cart = cart
        .map(item => {
            const product = findProductById(item.id);
            if (!product || product.listedBy !== 'farmer' || product.stockKg <= 0) {
                changed = true;
                return null;
            }

            if (item.quantity > product.stockKg) {
                changed = true;
                return { ...item, quantity: product.stockKg };
            }

            return item;
        })
        .filter(Boolean);

    if (changed) {
        saveCart();
    }
}

function initRoleSelector() {
    const roleSelector = document.getElementById('roleSelector');
    if (roleSelector) {
        roleSelector.value = currentRole;
        roleSelector.addEventListener('change', function() {
            setRole(this.value);
        });
    }

    refreshRoleUI();
}

function setRole(role) {
    currentRole = role;
    localStorage.setItem(ROLE_STORAGE_KEY, role);

    const roleSelector = document.getElementById('roleSelector');
    if (roleSelector) {
        roleSelector.value = role;
    }

    refreshRoleUI();
    renderCatalogProducts();
    updateRoleChip();
    loadOrderHistory().then(() => renderRecentOrderHistory());
}

function refreshRoleUI() {
    const roleDescription = document.getElementById('roleDescription');
    const catalogTitle = document.getElementById('catalogTitle');
    const farmerUploadPanel = document.getElementById('farmerUploadPanel');
    const farmerPreviewActions = document.getElementById('farmerPreviewActions');

    if (currentRole === 'farmer') {
        if (roleDescription) {
            roleDescription.textContent = 'Farmer can upload products and access both customer and wholesaler views.';
        }
        if (catalogTitle) {
            catalogTitle.textContent = 'Farmer Marketplace - Your products are visible to customer and wholesaler';
        }
        if (farmerUploadPanel) {
            farmerUploadPanel.style.display = 'block';
        }
        if (farmerPreviewActions) {
            farmerPreviewActions.style.display = 'flex';
        }
        return;
    }

    if (currentRole === 'wholesaler') {
        if (roleDescription) {
            roleDescription.textContent = 'Wholesaler can view farmer products and place bulk orders.';
        }
        if (catalogTitle) {
            catalogTitle.textContent = 'Wholesaler Interface - Farmer products in bulk';
        }
    } else {
        if (roleDescription) {
            roleDescription.textContent = 'Customer can view and buy only farmer listed products.';
        }
        if (catalogTitle) {
            catalogTitle.textContent = 'Customer Interface - Products listed by farmers';
        }
    }

    if (farmerUploadPanel) {
        farmerUploadPanel.style.display = 'none';
    }
    if (farmerPreviewActions) {
        farmerPreviewActions.style.display = 'none';
    }
}

function initFarmerProductForm() {
    const farmerProductForm = document.getElementById('farmerProductForm');
    if (!farmerProductForm) return;

    farmerProductForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        if (currentRole !== 'farmer') {
            alert('Only farmer can upload products.');
            return;
        }

        const newProduct = createFarmerProductFromForm();
        try {
            await apiRequest('/products', {
                method: 'POST',
                body: JSON.stringify(newProduct)
            });

            await loadProducts();
            renderCatalogProducts();
            farmerProductForm.reset();
            document.getElementById('farmerProductIcon').value = '🌾';

            alert('Product uploaded to database. It is now visible to customer and wholesaler.');
        } catch (error) {
            alert(error.message);
        }
    });
}

function createFarmerProductFromForm() {
    const name = document.getElementById('farmerProductName').value.trim();
    const category = document.getElementById('farmerProductCategory').value;
    const price = Number(document.getElementById('farmerProductPrice').value);
    const originalPriceValue = document.getElementById('farmerProductOriginalPrice').value;
    const originalPrice = originalPriceValue ? Number(originalPriceValue) : null;
    const stockKg = Number(document.getElementById('farmerProductStock').value);
    const icon = document.getElementById('farmerProductIcon').value.trim() || '🌾';
    const shelfLife = document.getElementById('farmerProductShelfLife').value.trim();
    const location = document.getElementById('farmerProductLocation').value.trim();
    const distance = document.getElementById('farmerProductDistance').value.trim();

    const discount = originalPrice && originalPrice > price
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    return {
        name,
        category,
        price,
        originalPrice,
        discount,
        rating: 4.5,
        reviews: 0,
        shelfLife,
        location,
        distance,
        stockKg,
        icon,
        images: [icon, icon, icon],
        listedBy: 'farmer',
        farmer: {
            name: 'Current Farmer',
            avatar: '👨‍🌾',
            rating: 4.8,
            experience: 10,
            products: products.length + 1,
            orders: 0,
            bio: 'Verified farmer using sustainable farming methods.'
        },
        description: `${name} freshly listed by farmer.`
    };
}

function getNextProductId() {
    if (products.length === 0) {
        return 1;
    }

    return Math.max(...products.map(product => product.id)) + 1;
}

function renderCatalogProducts() {
    let visibleProducts = [...getVisibleMarketplaceProducts()];

    if (selectedCategory !== 'all') {
        visibleProducts = visibleProducts.filter(product => product.category === selectedCategory);
    }

    switch (selectedSort) {
        case 'price-low':
            visibleProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            visibleProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            visibleProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'distance':
            visibleProducts.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
            break;
        default:
            break;
    }

    displayProducts(visibleProducts);
}

function displayProducts(productsToDisplay) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p class="empty-products-message">No farmer products are listed right now. Farmer can upload products from this dashboard.</p>';
        return;
    }
    
    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    const productKey = getProductKey(product);
    card.onclick = () => viewProduct(productKey);
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    const isWholesaler = currentRole === 'wholesaler';
    const addQty = isWholesaler ? 25 : 1;
    const buyQty = isWholesaler ? 50 : 1;
    const addLabel = isWholesaler ? 'Add 25kg Bulk' : 'Add to cart';
    const buyLabel = isWholesaler ? 'Buy 50kg' : 'Buy Now';
    
    card.innerHTML = `
        <div class="product-image">
            <span>${product.icon}</span>
            ${product.discount ? `<span class="discount-badge">${product.discount}% OFF</span>` : ''}
            ${isWholesaler ? '<span class="bulk-badge">Bulk</span>' : ''}
        </div>
        <div class="product-details">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-meta">
                <div class="rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
            </div>
            <div class="price-section">
                <span class="current-price">₹${product.price}/kg</span>
                ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                ${product.discount ? `<span class="discount">${product.discount}% off</span>` : ''}
            </div>
            <div class="product-info-row">
                <span class="info-label">Shelf Life:</span>
                <span class="info-value">${product.shelfLife}</span>
            </div>
            <div class="product-info-row">
                <span class="info-label">Location:</span>
                <span class="info-value">${product.distance}</span>
            </div>
            <div class="product-info-row">
                <span class="info-label">Stock:</span>
                <span class="info-value">${product.stockKg} kg</span>
            </div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${productKey}', ${addQty})">${addLabel}</button>
                <button class="btn-buy-now" onclick="event.stopPropagation(); buyNow('${productKey}', ${buyQty})">${buyLabel}</button>
            </div>
        </div>
    `;
    
    return card;
}

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    selectedCategory = category;
    renderCatalogProducts();
}

function initSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.value = selectedSort;
    
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        sortProducts(sortValue);
    });
}

function sortProducts(sortBy) {
    selectedSort = sortBy;
    renderCatalogProducts();
}

// Product Detail Page Functions
function initProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        displayProductDetail(productId);
    } else {
        window.location.href = 'index.html';
    }
}

function displayProductDetail(productId) {
    const product = getVisibleMarketplaceProducts().find(p => String(p.id || p._id) === String(productId));
    if (!product) {
        alert('This product is sold out or unavailable.');
        window.location.href = 'index.html';
        return;
    }
    
    // Update breadcrumb
    document.getElementById('productName').textContent = product.name;
    
    // Update main image
    document.getElementById('mainImage').innerHTML = `<span style="font-size: 150px">${product.icon}</span>`;
    
    // Update thumbnails
    const thumbnails = document.getElementById('thumbnails');
    product.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<span style="font-size: 40px">${img}</span>`;
        thumb.onclick = () => {
            document.getElementById('mainImage').innerHTML = `<span style="font-size: 150px">${img}</span>`;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        thumbnails.appendChild(thumb);
    });
    
    // Update product info
    document.getElementById('detailProductName').textContent = product.name;
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    document.getElementById('detailStars').textContent = stars;
    document.getElementById('detailRating').textContent = `(${product.reviews} reviews)`;
    document.getElementById('detailPrice').textContent = `₹${product.price}/kg`;
    document.getElementById('detailOriginalPrice').textContent = product.originalPrice ? `₹${product.originalPrice}` : '';
    document.getElementById('detailDiscount').textContent = product.discount ? `${product.discount}% off` : '';
    document.getElementById('detailShelfLife').textContent = product.shelfLife;
    document.getElementById('detailLocation').textContent = product.location;
    document.getElementById('detailDistance').textContent = product.distance;
    const availability = document.querySelector('.stock-available');
    if (availability) {
        availability.textContent = `${product.stockKg} kg available`;
    }

    applyRoleSpecificDetailUI();
    
    // Quantity selector
    const qtyButtons = document.querySelectorAll('.qty-btn');
    qtyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            qtyButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('customQty').value = this.getAttribute('data-qty');
        });
    });
    
    // Farmer info
    document.getElementById('farmerName').textContent = product.farmer.name;
    document.getElementById('farmerAvatar').textContent = product.farmer.avatar;
    const farmerStars = '★'.repeat(Math.floor(product.farmer.rating)) + '☆'.repeat(5 - Math.floor(product.farmer.rating));
    document.getElementById('farmerStars').textContent = farmerStars;
    document.getElementById('farmerRating').textContent = `${product.farmer.rating} rating`;
    document.getElementById('farmerExperience').textContent = product.farmer.experience;
    document.getElementById('farmerProducts').textContent = product.farmer.products;
    document.getElementById('farmerOrders').textContent = product.farmer.orders;
    document.getElementById('farmerBio').textContent = product.farmer.bio;
    
    // Reviews
    displayReviews(productId);
    
    // Add to cart button
    document.getElementById('addToCartBtn').onclick = () => {
        const quantity = parseFloat(document.getElementById('customQty').value);
        addToCart(productId, quantity);
    };
    
    // Buy now button
    document.getElementById('buyNowBtn').onclick = () => {
        const quantity = parseFloat(document.getElementById('customQty').value);
        buyNow(productId, quantity);
    };
}

function applyRoleSpecificDetailUI() {
    const qtyButtons = document.querySelectorAll('.qty-btn');
    const customQty = document.getElementById('customQty');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');

    if (!qtyButtons.length || !customQty || !addToCartBtn || !buyNowBtn) return;

    if (currentRole === 'wholesaler') {
        const bulkOptions = [10, 25, 50, 100, 250];
        qtyButtons.forEach((button, index) => {
            const qty = bulkOptions[index];
            if (qty) {
                button.setAttribute('data-qty', String(qty));
                button.textContent = `${qty} kg`;
                button.style.display = 'inline-block';
            } else {
                button.style.display = 'none';
            }
        });

        customQty.value = '25';
        customQty.min = '10';
        customQty.step = '5';
        addToCartBtn.textContent = 'Add Bulk to Cart';
        buyNowBtn.textContent = 'Buy Bulk Now';
        return;
    }

    const defaultLabels = ['250g', '500g (1/2 kg)', '1 kg', '2 kg', '5 kg'];
    const defaultValues = ['0.25', '0.5', '1', '2', '5'];

    qtyButtons.forEach((button, index) => {
        button.style.display = 'inline-block';
        button.setAttribute('data-qty', defaultValues[index]);
        button.textContent = defaultLabels[index];
    });

    customQty.value = '1';
    customQty.min = '0.25';
    customQty.step = '0.25';
    addToCartBtn.textContent = '🛒 Add to Cart';
    buyNowBtn.textContent = '⚡ Buy Now';
}

function displayReviews(productId) {
    const reviews = reviewsData[productId] || [];
    const reviewsList = document.getElementById('reviewsList');
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p style="text-align: center; color: var(--text-light);">No reviews yet. Be the first to review!</p>';
        return;
    }
    
    reviewsList.innerHTML = '';
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        reviewCard.innerHTML = `
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-rating">
                <span class="stars">${stars}</span>
            </div>
            <p class="review-text">${review.text}</p>
        `;
        reviewsList.appendChild(reviewCard);
    });
}

// Cart Functions
function addToCart(productId, quantity = 1) {
    const product = findProductById(productId);
    if (!product || product.listedBy !== 'farmer' || product.stockKg <= 0) {
        alert('This product is not available right now.');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    const existingQuantity = existingItem ? existingItem.quantity : 0;
    const requestedTotal = existingQuantity + quantity;

    if (requestedTotal > product.stockKg) {
        alert(`Only ${product.stockKg} kg is available for ${product.name}.`);
        return;
    }
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            icon: product.icon,
            location: product.location,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
    
    alert(`${product.name} added to cart!`);
}

function buyNow(productId, quantity = 1) {
    addToCart(productId, quantity);
    window.location.href = 'cart.html';
}

function saveCart() {
    localStorage.setItem('farmFreshCart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function viewProduct(productId) {
    window.location.href = `product-detail.html?id=${encodeURIComponent(productId)}`;
}

// Cart Page Functions
function initCartPage() {
    syncCartWithInventory();
    displayCartItems();
    updateCartSummary();
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.onclick = () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            window.location.href = 'checkout.html';
        };
    }
    
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    if (applyPromoBtn) {
        applyPromoBtn.onclick = applyPromoCode;
    }
}

function displayCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        cartItemsList.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    cartItemsList.style.display = 'block';
    emptyCart.style.display = 'none';
    cartItemsList.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = createCartItem(item, index);
        cartItemsList.appendChild(cartItem);
    });
}

function createCartItem(item, index) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    
    div.innerHTML = `
        <div class="cart-item-image">
            <span>${item.icon}</span>
        </div>
        <div class="cart-item-details">
            <h3 class="cart-item-name">${item.name}</h3>
            <p class="cart-item-info">₹${item.price}/kg</p>
            <p class="cart-item-info">📍 ${item.location}</p>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="qty-decrease" onclick="updateQuantity(${index}, -0.25)">-</button>
                    <span class="qty-value">${item.quantity} kg</span>
                    <button class="qty-increase" onclick="updateQuantity(${index}, 0.25)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
            </div>
        </div>
        <div class="cart-item-price">
            <div class="item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `;
    
    return div;
}

function updateQuantity(index, change) {
    const newQuantity = cart[index].quantity + change;
    const product = findProductById(cart[index].id);

    if (!product || product.listedBy !== 'farmer' || product.stockKg <= 0) {
        alert('This product is no longer available.');
        removeFromCart(index);
        return;
    }
    
    if (newQuantity < 0.25) {
        if (confirm('Remove this item from cart?')) {
            removeFromCart(index);
        }
        return;
    }

    if (newQuantity > product.stockKg) {
        alert(`Maximum available quantity is ${product.stockKg} kg.`);
        return;
    }
    
    cart[index].quantity = Math.round(newQuantity * 100) / 100; // Round to 2 decimals
    saveCart();
    displayCartItems();
    updateCartSummary();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    displayCartItems();
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 500 ? 0 : 50;
    const discount = 0; // Can be updated with promo code
    const total = subtotal + deliveryFee - discount;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('deliveryFee').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`;
    document.getElementById('discount').textContent = `-₹${discount.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

function applyPromoCode() {
    const promoInput = document.getElementById('promoInput');
    const code = promoInput.value.trim().toUpperCase();
    
    if (code === 'FRESH50') {
        alert('Promo code applied! ₹50 discount added.');
        // Update discount in summary
    } else if (code === '') {
        alert('Please enter a promo code.');
    } else {
        alert('Invalid promo code.');
    }
}

// Checkout Page Functions
function initCheckoutPage() {
    syncCartWithInventory();
    resetCheckoutSuccessModal();
    displayCheckoutSummary();
    initPaymentMethods();

    const successContinueBtn = document.querySelector('#successModal .btn-primary');
    if (successContinueBtn) {
        successContinueBtn.onclick = function() {
            window.location.replace('index.html');
        };
    }
    
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.onsubmit = handleCheckout;
    }
}

function resetCheckoutSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (!successModal) return;

    successModal.style.display = 'none';
}

function displayCheckoutSummary() {
    const summaryItems = document.getElementById('summaryItems');
    
    if (summaryItems) {
        summaryItems.innerHTML = '';
        cart.forEach(item => {
            const summaryItem = document.createElement('div');
            summaryItem.className = 'summary-item';
            summaryItem.innerHTML = `
                <div class="summary-item-image">
                    <span>${item.icon}</span>
                </div>
                <div class="summary-item-info">
                    <div class="summary-item-name">${item.name}</div>
                    <div class="summary-item-qty">${item.quantity} kg × ₹${item.price}</div>
                </div>
                <div class="summary-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
            `;
            summaryItems.appendChild(summaryItem);
        });
    }
    
    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 500 ? 0 : 50;
    const discount = 0;
    const total = subtotal + deliveryFee - discount;
    
    if (document.getElementById('checkoutSubtotal')) {
        document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toFixed(2)}`;
        document.getElementById('checkoutDelivery').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`;
        document.getElementById('checkoutDiscount').textContent = `-₹${discount.toFixed(2)}`;
        document.getElementById('checkoutTotal').textContent = `₹${total.toFixed(2)}`;
    }
}

function initPaymentMethods() {
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Hide all payment details
            document.querySelectorAll('.payment-details').forEach(detail => {
                detail.style.display = 'none';
            });
            
            // Show selected payment details
            if (this.value === 'upi') {
                document.getElementById('upiDetails').style.display = 'block';
            } else if (this.value === 'card') {
                document.getElementById('cardDetails').style.display = 'block';
            }
        });
    });
}

async function handleCheckout(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    
    // Validate form
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;
    
    if (!fullName || !phone || !address || !city || !pincode) {
        alert('Please fill in all required fields.');
        return;
    }

    for (const item of cart) {
        const product = findProductById(item.id);
        if (!product || product.listedBy !== 'farmer' || product.stockKg <= 0) {
            alert(`${item.name} is no longer available. Please review cart.`);
            syncCartWithInventory();
            window.location.href = 'cart.html';
            return;
        }

        if (item.quantity > product.stockKg) {
            alert(`${item.name} has only ${product.stockKg} kg left. Please update cart.`);
            syncCartWithInventory();
            window.location.href = 'cart.html';
            return;
        }
    }

    let orderId = '';

    try {
        const response = await apiRequest('/orders', {
            method: 'POST',
            body: JSON.stringify({
                buyerRole: currentRole,
                buyerName: fullName,
                items: cart
            })
        });

        orderId = response.orderId;
        products = normalizeProducts(response.products || []);
        await loadOrderHistory();
    } catch (error) {
        alert(error.message);
        return;
    }
    
    // Show success modal
    const successModal = document.getElementById('successModal');
    document.getElementById('orderId').textContent = '#' + orderId;
    successModal.style.display = 'flex';
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    
    return false;
}

// Location Functions
function initLocationButton() {
    const locationBtn = document.getElementById('locationBtn');
    const locationModal = document.getElementById('locationModal');
    const closeModal = document.getElementById('closeModal');
    const saveLocation = document.getElementById('saveLocation');
    
    if (locationBtn) {
        locationBtn.onclick = () => {
            if (locationModal) {
                locationModal.classList.add('active');
            }
        };
    }
    
    if (closeModal) {
        closeModal.onclick = () => {
            locationModal.classList.remove('active');
        };
    }
    
    if (saveLocation) {
        saveLocation.onclick = () => {
            const location = document.getElementById('locationInput').value;
            if (location) {
                userLocation = location;
                localStorage.setItem('farmFreshLocation', location);
                displayCurrentLocation();
                locationModal.classList.remove('active');
                alert('Location saved successfully!');
            }
        };
    }
    
    // Close modal on outside click
    if (locationModal) {
        locationModal.onclick = (e) => {
            if (e.target === locationModal) {
                locationModal.classList.remove('active');
            }
        };
    }
}

function displayCurrentLocation() {
    const currentLocation = document.getElementById('currentLocation');
    if (currentLocation && userLocation) {
        currentLocation.textContent = `Current location: ${userLocation}`;
    }
}
