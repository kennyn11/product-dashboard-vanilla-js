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