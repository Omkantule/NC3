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

const CHATBOT_SUGGESTIONS = [
    'How do I place an order?',
    'What payment methods are available?',
    'How is delivery fee calculated?',
    'How can I switch role?'
];

let products = [];
let cart = JSON.parse(localStorage.getItem('farmFreshCart')) || [];
let userLocation = localStorage.getItem('farmFreshLocation') || '';
let currentRole = localStorage.getItem(ROLE_STORAGE_KEY) || '';
let selectedCategory = 'all';
let selectedSort = 'featured';
let searchQuery = '';
let orderHistory = [];

// ===== UX UTILITY FUNCTIONS =====
// Toast Notification System
function showToast(message, type = 'info', duration = 3000) {
    const toastContainer = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        animation: slideIn 0.3s ease-out;
        margin-bottom: 10px;
        padding: 12px 16px;
        border-radius: 6px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        max-width: 400px;
        word-wrap: break-word;
        font-size: 14px;
    `;
    
    toastContainer.appendChild(toast);
    
    const timeout = setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, duration);
    
    toast.addEventListener('click', () => {
        clearTimeout(timeout);
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    });
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 9999;
        pointer-events: none;
    `;
    document.body.appendChild(container);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        .toast {
            pointer-events: all;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .toast:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
    `;
    document.head.appendChild(style);
    
    return container;
}

// Confirmation Dialog
function showConfirmation(message, onConfirm, onCancel) {
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.2s ease;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25);
        max-width: 400px;
        animation: popIn 0.3s ease;
    `;
    
    const title = document.createElement('h3');
    title.textContent = 'Confirm Action';
    title.style.marginBottom = '12px';
    
    const msg = document.createElement('p');
    msg.textContent = message;
    msg.style.cssText = 'margin-bottom: 24px; color: #666; line-height: 1.5;';
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'display: flex; gap: 12px; justify-content: flex-end;';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.cssText = `
        padding: 10px 20px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: #f5f5f5;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease;
    `;
    cancelBtn.onmouseover = () => cancelBtn.style.background = '#e0e0e0';
    cancelBtn.onmouseout = () => cancelBtn.style.background = '#f5f5f5';
    
    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.style.cssText = `
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        background: #4CAF50;
        color: white;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease;
    `;
    confirmBtn.onmouseover = () => confirmBtn.style.background = '#45a049';
    confirmBtn.onmouseout = () => confirmBtn.style.background = '#4CAF50';
    
    cancelBtn.onclick = () => {
        dialog.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => {
            dialog.remove();
            if (onCancel) onCancel();
        }, 200);
    };
    
    confirmBtn.onclick = () => {
        dialog.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => {
            dialog.remove();
            if (onConfirm) onConfirm();
        }, 200);
    };
    
    buttonContainer.appendChild(cancelBtn);
    buttonContainer.appendChild(confirmBtn);
    content.appendChild(title);
    content.appendChild(msg);
    content.appendChild(buttonContainer);
    dialog.appendChild(content);
    document.body.appendChild(dialog);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            from {
                transform: scale(0.7);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Loading Spinner
function setLoading(elementId, isLoading) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    if (isLoading) {
        element.disabled = true;
        element.style.opacity = '0.6';
        element.style.pointerEvents = 'none';
        element.innerHTML = `<span style="display: inline-block; animation: spin 1s linear infinite;">⏳</span> Loading...`;
    } else {
        element.disabled = false;
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }
}

// Validate Quantity
function validateQuantity(quantity, maxQuantity, productName) {
    if (quantity < 0) {
        showToast(`❌ Quantity cannot be negative`, 'error');
        return false;
    }
    if (quantity > maxQuantity) {
        showToast(`❌ Only ${maxQuantity} kg available for ${productName}`, 'error');
        return false;
    }
    if (quantity === 0) {
        showToast(`❌ Please select a valid quantity`, 'error');
        return false;
    }
    return true;
}

// Initialize Page
document.addEventListener('DOMContentLoaded', async function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    initHardcodedChatbot();
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
            showToast('❌ Please select a role to continue', 'error');
            return;
        }

        const roleLabel = getRoleLabel(selectedRole.value);
        showToast(`✅ Welcome, ${roleLabel}!`, 'success', 1500);
        
        setTimeout(() => {
            setRole(selectedRole.value);
            window.location.href = 'index.html';
        }, 500);
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
    showConfirmation('Are you sure you want to logout?', () => {
        localStorage.removeItem(ROLE_STORAGE_KEY);
        showToast('✅ Logged out successfully', 'success', 1500);
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 500);
    });
}

// Catalog Page Functions
function initCatalogPage() {
    syncCartWithInventory();
    initRoleSelector();
    initFarmerProductForm();
    initFilters();
    initSort();
    initSearch();
    renderCatalogProducts();
    updateRoleChip();
    loadOrderHistory().then(() => renderRecentOrderHistory());
}

function initSearch() {
    const searchBar = document.querySelector('.search-bar');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchBar || !searchBtn) return;
    
    function performSearch() {
        const query = searchBar.value.trim().toLowerCase();
        if (!query) {
            showToast('🔍 Please enter a search term', 'info', 2000);
            return;
        }
        
        const results = getVisibleMarketplaceProducts().filter(p => 
            p.name.toLowerCase().includes(query) || 
            (p.description && p.description.toLowerCase().includes(query)) ||
            (p.category && p.category.toLowerCase().includes(query))
        );
        
        if (results.length === 0) {
            showToast(`📭 No products found for "${query}"`, 'info', 3000);
        } else {
            showToast(`🎯 Found ${results.length} product${results.length !== 1 ? 's' : ''} matching "${query}"`, 'success', 2000);
        }
        
        // Filter by search query
        selectedCategory = 'all';
        searchQuery = query;
        renderCatalogProducts();
        
        // Smooth scroll to products
        setTimeout(() => {
            const productGrid = document.getElementById('productGrid');
            if (productGrid) {
                productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }
    
    // Search button click
    searchBtn.addEventListener('click', performSearch);
    
    // Enter key in search bar
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
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
            showToast('❌ Only farmers can upload products', 'error');
            return;
        }

        const submitBtn = farmerProductForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '⏳ Uploading...';
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

            showToast(`✅ ${newProduct.name} uploaded successfully!`, 'success', 3000);
        } catch (error) {
            showToast(`❌ Upload failed: ${error.message}`, 'error');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '🚀 Upload Product';
            }
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
    
    // Apply search filter
    if (searchQuery) {
        visibleProducts = visibleProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery) || 
            (product.description && product.description.toLowerCase().includes(searchQuery)) ||
            (product.category && product.category.toLowerCase().includes(searchQuery))
        );
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
    
    // Add visual feedback
    const filteredCount = getVisibleMarketplaceProducts().filter(p => {
        if (selectedCategory && p.category !== selectedCategory) return false;
        return true;
    }).length;
    
    if (filteredCount === 0) {
        showToast(`📭 No products found in ${category}`, 'info', 2000);
    } else {
        showToast(`🔍 Found ${filteredCount} product${filteredCount !== 1 ? 's' : ''} in ${category}`, 'success', 2000);
    }
    
    // Smooth scroll to products
    setTimeout(() => {
        const productGrid = document.getElementById('productGrid');
        if (productGrid) {
            productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);
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
    const sortLabels = {
        'recommended': '⭐ Recommended',
        'price-low': '💰 Price: Low to High',
        'price-high': '💸 Price: High to Low',
        'rating': '🌟 Top Rated',
        'new': '🆕 Newest First'
    };
    
    selectedSort = sortBy;
    renderCatalogProducts();
    
    showToast(`Sorted by ${sortLabels[sortBy] || sortBy}`, 'success', 2000);
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
        showToast('❌ This product is sold out or unavailable.', 'error', 3000);
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
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
        showToast('❌ This product is not available right now', 'error');
        return;
    }
    
    if (!validateQuantity(quantity, product.stockKg, product.name)) {
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    const existingQuantity = existingItem ? existingItem.quantity : 0;
    const requestedTotal = existingQuantity + quantity;

    if (requestedTotal > product.stockKg) {
        showToast(`❌ Only ${product.stockKg} kg available for ${product.name}`, 'error');
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
    
    showToast(`✅ ${product.name} added to cart! (${quantity} kg)`, 'success');
    
    // Animate cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.animation = 'pulse 0.6s ease';
        setTimeout(() => cartBtn.style.animation = '', 600);
    }
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
        showToast(`❌ ${cart[index].name} is no longer available`, 'error');
        removeFromCart(index);
        return;
    }
    
    if (newQuantity < 0.25) {
        showConfirmation(`Remove ${cart[index].name} from cart?`, () => {
            removeFromCart(index);
            showToast(`✅ Item removed from cart`, 'info');
        });
        return;
    }

    if (newQuantity > product.stockKg) {
        showToast(`❌ Maximum ${product.stockKg} kg available`, 'error');
        return;
    }
    
    cart[index].quantity = Math.round(newQuantity * 100) / 100; // Round to 2 decimals
    saveCart();
    displayCartItems();
    updateCartSummary();
    showToast(`✅ Quantity updated to ${cart[index].quantity} kg`, 'success', 2000);
}

function removeFromCart(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    displayCartItems();
    updateCartSummary();
    showToast(`🗑️ ${itemName} removed from cart`, 'info', 2000);
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
        showToast('❌ Your cart is empty. Add items first!', 'error');
        return;
    }
    
    // Validate form
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    
    if (!fullName || !phone || !address || !city || !pincode) {
        showToast('❌ Please fill in all required fields', 'error');
        return;
    }
    
    // Validate phone number
    if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        showToast('❌ Please enter a valid phone number', 'error');
        return;
    }
    
    // Validate pincode
    if (!/^\d{6}$/.test(pincode)) {
        showToast('❌ Please enter a valid 6-digit pincode', 'error');
        return;
    }

    for (const item of cart) {
        const product = findProductById(item.id);
        if (!product || product.listedBy !== 'farmer' || product.stockKg <= 0) {
            showToast(`❌ ${item.name} is no longer available`, 'error');
            syncCartWithInventory();
            window.location.href = 'cart.html';
            return;
        }

        if (item.quantity > product.stockKg) {
            showToast(`❌ Only ${product.stockKg} kg of ${item.name} left`, 'error');
            syncCartWithInventory();
            window.location.href = 'cart.html';
            return;
        }
    }

    let orderId = '';
    
    // Show loading state
    const submitBtn = document.querySelector('.btn-place-order');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '⏳ Processing Order...';
    }

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
        showToast(`❌ Order failed: ${error.message}`, 'error');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Place Order';
        }
        return;
    }
    
    // Show success modal
    const successModal = document.getElementById('successModal');
    document.getElementById('orderId').textContent = '#' + orderId;
    successModal.style.display = 'flex';
    
    showToast(`✅ Order placed successfully! Order ID: ${orderId}`, 'success', 4000);
    
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
    const locationInput = document.getElementById('locationInput');
    
    if (locationBtn) {
        locationBtn.onclick = () => {
            if (locationModal) {
                locationModal.classList.add('active');
                locationInput.focus();
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
            const location = locationInput.value.trim();
            if (!location) {
                showToast('❌ Please enter a location', 'error');
                locationInput.focus();
                return;
            }
            
            if (location.length < 3) {
                showToast('❌ Location must be at least 3 characters', 'error');
                return;
            }
            
            userLocation = location;
            localStorage.setItem('farmFreshLocation', location);
            displayCurrentLocation();
            locationModal.classList.remove('active');
            locationInput.value = '';
            showToast(`✅ Location updated: ${location}`, 'success', 2000);
        };
    }
    
    // Allow Enter key to save
    if (locationInput) {
        locationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveLocation.click();
            }
        });
    }
    
    // Close modal on outside click
    if (locationModal) {
        locationModal.onclick = (e) => {
            if (e.target === locationModal) {
                locationModal.classList.remove('active');
                locationInput.value = '';
            }
        };
    }
}

function displayCurrentLocation() {
    const currentLocation = document.getElementById('currentLocation');
    if (currentLocation && userLocation) {
        currentLocation.textContent = `📍 Current location: ${userLocation}`;
    }
}

// Hardcoded Chatbot
function initHardcodedChatbot() {
    if (document.getElementById('ffChatbotWrap')) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'ffChatbotWrap';
    wrapper.className = 'ff-chatbot-wrap';
    wrapper.innerHTML = `
        <button id="ffChatbotToggle" class="ff-chatbot-toggle" aria-label="Open chat assistant">💬 Help</button>
        <section id="ffChatbotPanel" class="ff-chatbot-panel" aria-live="polite">
            <header class="ff-chatbot-header">
                <div>
                    <h3>FarmFresh Assistant</h3>
                    <p>Quick answers for your shopping flow</p>
                </div>
                <button id="ffChatbotClose" class="ff-chatbot-close" aria-label="Close chat">×</button>
            </header>
            <div id="ffChatbotMessages" class="ff-chatbot-messages"></div>
            <div id="ffChatbotSuggestions" class="ff-chatbot-suggestions"></div>
            <form id="ffChatbotForm" class="ff-chatbot-form">
                <input id="ffChatbotInput" type="text" placeholder="Type your question..." maxlength="220" autocomplete="off" />
                <button type="submit">Send</button>
            </form>
        </section>
    `;

    document.body.appendChild(wrapper);

    const toggleBtn = document.getElementById('ffChatbotToggle');
    const panel = document.getElementById('ffChatbotPanel');
    const closeBtn = document.getElementById('ffChatbotClose');
    const messages = document.getElementById('ffChatbotMessages');
    const suggestions = document.getElementById('ffChatbotSuggestions');
    const form = document.getElementById('ffChatbotForm');
    const input = document.getElementById('ffChatbotInput');

    if (!toggleBtn || !panel || !closeBtn || !messages || !suggestions || !form || !input) return;

    appendChatMessage(messages, 'bot', 'Hi! I am your FarmFresh helper. Ask me about orders, roles, cart, and checkout.');

    CHATBOT_SUGGESTIONS.forEach(question => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'ff-chatbot-suggestion';
        button.textContent = question;
        button.addEventListener('click', () => {
            appendChatMessage(messages, 'user', question);
            appendChatMessage(messages, 'bot', getHardcodedChatReply(question));
            scrollChatToBottom(messages);
        });
        suggestions.appendChild(button);
    });

    const openChat = () => {
        panel.classList.add('active');
        toggleBtn.classList.add('hidden');
        input.focus();
        scrollChatToBottom(messages);
    };

    const closeChat = () => {
        panel.classList.remove('active');
        toggleBtn.classList.remove('hidden');
    };

    toggleBtn.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);

    form.addEventListener('submit', event => {
        event.preventDefault();
        const question = input.value.trim();
        if (!question) return;

        appendChatMessage(messages, 'user', question);
        appendChatMessage(messages, 'bot', getHardcodedChatReply(question));
        input.value = '';
        scrollChatToBottom(messages);
    });
}

function appendChatMessage(container, sender, text) {
    const message = document.createElement('div');
    message.className = `ff-chatbot-message ${sender}`;
    message.textContent = text;
    container.appendChild(message);
}

function scrollChatToBottom(container) {
    container.scrollTop = container.scrollHeight;
}

function getHardcodedChatReply(question) {
    const q = question.toLowerCase();

    if (q.includes('order') || q.includes('buy')) {
        return 'To place an order: open a product, add quantity to cart, go to cart, then checkout and submit your address/payment details.';
    }

    if (q.includes('payment') || q.includes('upi') || q.includes('card') || q.includes('cod')) {
        return 'Available payment methods are UPI, Credit/Debit Card, and Cash on Delivery on the checkout page.';
    }

    if (q.includes('delivery') || q.includes('fee') || q.includes('shipping')) {
        return 'Delivery fee is ₹50, but it becomes FREE for orders above ₹500.';
    }

    if (q.includes('role') || q.includes('farmer') || q.includes('customer') || q.includes('wholesaler')) {
        return 'You can switch role from the role selector on the home page. Farmers can upload products; customers and wholesalers can buy farmer products.';
    }

    if (q.includes('cart') || q.includes('remove') || q.includes('quantity')) {
        return 'Use + and - buttons in cart to adjust quantity. You can remove items and proceed to checkout from the cart page.';
    }

    if (q.includes('login') || q.includes('logout')) {
        return 'Login by selecting a role on the login page. Use the Logout button in the header to sign out.';
    }

    return 'I can help with orders, cart, checkout, delivery fee, payments, and role switching. Try one of the quick suggestion buttons.';
}
