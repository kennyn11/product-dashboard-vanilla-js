const url = "https://www.course-api.com/javascript-store-products";

// step 3
function fetchProductsThen() {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            console.log("--- Products from .then() ---");
            data.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.error("FetchThen Error:", error);
        });
}

// step 4
async function fetchProductsAsync() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");
        
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// step 5
function displayProducts(products) {
    const container = document.getElementById('product-container');
    // selects only the first 5 products
    const featuredProducts = products.slice(0, 5);
    const { name, price, image } = product.fields;
    // finds data from the API
        const imgUrl = image[0].url;
    // formatting price
        const formattedPrice = `$${(price / 100).toFixed(2)}`;

        return `
            <div class="product-card">
                <img src="${imgUrl}" alt="${name}">
                <h3>${name}</h3>
                <p>${formattedPrice}</p>
            </div>
        `;
    }.join('');

// step 6
function handleError(error) {
    console.log('An error has occured: ${error.message}');
    const container = document.getElementById('product-container');
    container.innerHTML = '<p style="color: red; text-align: center;">Unable to load products.</p>';
}

//step 7
fetchProductsThen();
fetchProductsAsync();