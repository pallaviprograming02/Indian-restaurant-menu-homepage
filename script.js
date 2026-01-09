
// Menu Data
const menuData = {
    'veg-starters': [
        { name: 'Samosa (4 pieces)', description: 'Crispy potato & peas pastry', price: '₹120', emoji: '🥟', spicy: true },
        { name: 'Paneer Tikka', description: 'Marinated cottage cheese kebab', price: '₹220', emoji: '🧀', spicy: true },
        { name: 'Vegetable Pakora', description: 'Mixed veggie fritters in batter', price: '₹140', emoji: '🥦', spicy: true },
        { name: 'Aloo Tikki', description: 'Crispy potato patties with chutney', price: '₹100', emoji: '🥔', spicy: false },
        { name: 'Mushroom Fry', description: 'Crispy fried mushroom pieces', price: '₹180', emoji: '🍄', spicy: true },
        { name: 'Spinach Cheese Ball', description: 'Palak paneer croquettes', price: '₹160', emoji: '🧅', spicy: false }
    ],
    'non-veg-starters': [
        { name: 'Chicken Tikka', description: 'Tandoori marinated chicken pieces', price: '₹280', emoji: '🍗', spicy: true },
        { name: 'Fish Fry', description: 'Crispy batter-fried fish pieces', price: '₹320', emoji: '🐟', spicy: true },
        { name: 'Tandoori Prawns', description: 'Grilled king prawns with spices', price: '₹380', emoji: '🦐', spicy: true },
        { name: 'Mutton Seekh Kebab', description: 'Spiced minced mutton kebab', price: '₹290', emoji: '🍖', spicy: true },
        { name: 'Chicken 65', description: 'Crispy spiced chicken bites', price: '₹250', emoji: '🍗', spicy: true },
        { name: 'Egg Curry Pakora', description: 'Boiled eggs in special batter', price: '₹200', emoji: '🥚', spicy: false }
    ],
    'main-course': [
        { name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', price: '₹380', emoji: '🍛', spicy: false },
        { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich cream sauce', price: '₹320', emoji: '🧀', spicy: false },
        { name: 'Chole Bhature', description: 'Chickpea curry with fried bread', price: '₹220', emoji: '🫘', spicy: true },
        { name: 'Rogan Josh', description: 'Aromatic lamb curry with tomatoes', price: '₹420', emoji: '🍖', spicy: true },
        { name: 'Chana Masala', description: 'Spiced chickpea curry', price: '₹180', emoji: '🫘', spicy: true },
        { name: 'Fish Curry', description: 'Traditional coconut fish gravy', price: '₹350', emoji: '🐟', spicy: true },
        { name: 'Biryani (Chicken)', description: 'Fragrant rice with spiced chicken', price: '₹300', emoji: '🍚', spicy: false },
        { name: 'Biryani (Mutton)', description: 'Fragrant rice with spiced mutton', price: '₹380', emoji: '🍚', spicy: true }
    ],
    'breads': [
        { name: 'Naan', description: 'Traditional tandoori bread', price: '₹50', emoji: '🥖', spicy: false },
        { name: 'Garlic Naan', description: 'Naan with garlic & butter', price: '₹70', emoji: '🥖', spicy: false },
        { name: 'Kulcha', description: 'Stuffed Indian bread', price: '₹60', emoji: '🥖', spicy: false },
        { name: 'Paratha', description: 'Layered buttered bread', price: '₹50', emoji: '🥞', spicy: false },
        { name: 'Roti', description: 'Plain wheat bread', price: '₹20', emoji: '🫔', spicy: false },
        { name: 'Basmati Rice', description: 'Steamed fragrant rice', price: '₹80', emoji: '🍚', spicy: false }
    ],
    'desserts': [
        { name: 'Gulab Jamun', description: 'Sweet fried milk solids in syrup', price: '₹120', emoji: '🍡', spicy: false },
        { name: 'Kheer', description: 'Rice pudding with milk & nuts', price: '₹100', emoji: '🍮', spicy: false },
        { name: 'Barfi', description: 'Milk fudge with almonds', price: '₹150', emoji: '🍫', spicy: false },
        { name: 'Jalebi', description: 'Orange crispy sweet coil', price: '₹90', emoji: '🌀', spicy: false },
        { name: 'Rasgulla', description: 'Soft cheese balls in sugar syrup', price: '₹110', emoji: '⚪', spicy: false }
    ],
    'beverages': [
        { name: 'Mango Lassi', description: 'Yogurt & mango blend', price: '₹80', emoji: '🥤', spicy: false },
        { name: 'Chaach', description: 'Spiced buttermilk', price: '₹50', emoji: '🥛', spicy: false },
        { name: 'Sweet Lassi', description: 'Yogurt drink with cardamom', price: '₹70', emoji: '🥛', spicy: false },
        { name: 'Masala Chai', description: 'Traditional spiced tea', price: '₹40', emoji: '☕', spicy: false },
        { name: 'Fresh Lime Soda', description: 'Refreshing lime drink', price: '₹60', emoji: '🍋', spicy: false }
    ]
};

let currentFilter = 'all';

// Function to render menu
function renderMenu(filter = 'all', searchTerm = '') {
    const menuContent = document.getElementById('menuContent');
    let html = '';

    const categoriesMap = {
        'veg-starters': 'Vegetarian Starters',
        'non-veg-starters': 'Non-Vegetarian Starters',
        'main-course': 'Main Course',
        'breads': 'Breads & Rice',
        'desserts': 'Desserts',
        'beverages': 'Beverages'
    };

    let hasResults = false;

    Object.keys(menuData).forEach(category => {
        if (filter !== 'all' && filter !== category) return;

        const items = menuData[category].filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (items.length > 0) {
            hasResults = true;
            html += `<h2 class="category-title">${categoriesMap[category]}</h2>`;
            html += `<div class="items-grid">`;

            items.forEach(item => {
                const spicyBadge = item.spicy ? '<span class="spicy-badge">🌶️ SPICY</span>' : '';
                html += `
                            <div class="menu-card">
                                <div class="card-image">${item.emoji}</div>
                                <div class="card-content">
                                    <div class="card-title">
                                        ${item.name}
                                        ${spicyBadge}
                                    </div>
                                    <p class="card-description">${item.description}</p>
                                    <div class="card-footer">
                                        <span class="card-price">${item.price}</span>
                                        <button class="add-btn" onclick="addToCart('${item.name}', '${item.price}')">Add</button>
                                    </div>
                                </div>
                            </div>
                        `;
            });

            html += `</div>`;
        }
    });

    if (!hasResults) {
        html = `<div class="no-results">
                    <p>😔 No items found for "${searchTerm}"</p>
                    <p style="font-size: 16px; margin-top: 10px;">Try searching with different keywords</p>
                </div>`;
    }

    menuContent.innerHTML = html;
}

// Filter button event listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.getAttribute('data-filter');
        const searchTerm = document.getElementById('searchInput').value;
        renderMenu(currentFilter, searchTerm);
    });
});

// Search input event listener
document.getElementById('searchInput').addEventListener('input', function (e) {
    const searchTerm = e.target.value;
    renderMenu(currentFilter, searchTerm);
});

// Add to cart function
function addToCart(itemName, price) {
    alert(`✅ "${itemName}" (${price}) added to cart!\n\nThank you for ordering at Spice Hub! 🍛`);
}

// Initial render
renderMenu();
