// A function named `fetchData` which returns a Promise
const fetchData = () => {

    return new Promise((resolve, reject) => {

      // the fetch API to retrieve data from the specified file
      fetch("https://dummyjson.com/products")
        .then((response) => {


          // If the API response is successful, resolve the Promise with the JSON data
          if (response.ok) {
            resolve(response.json());
          } 
          
          else {
            // Otherwise, reject the Promise with an error message
            reject(new Error("Failed to retrieve data from API"));
          }
        })
        .catch((error) => {
          // Catch any network or fetch-related errors and reject the Promise with the error
          reject(error);
        });
    });
  };
  
  // Call the `fetchData` function
  fetchData()
    .then((data) => {

        // console.log the data and see how it is for better understanding
        console.log(data);


      // If the Promise returned by `fetchData` is resolved, the code inside this block will be executed
      // Use the data retrieved from the API

      // select container which is an html element 
      const productContainer = document.querySelector(".product-container");


      // Iterate over the products in the data and create a product element for each one
      data.products.forEach((product) => {


        // creating product element 
        const productElement = document.createElement("div");
        productElement.classList.add("product");
  
        // Create the HTML for the product element using template literals
        productElement.innerHTML = 
         `<img src="${product.thumbnail}" alt="${product.title}" class="product-image">
          <h3 class="product-font">${product.title}</h3>         
          <p class="product-font">Brand: ${product.brand}</p>
          <p class="product-font">Price: ${product.price}</p>
          <p class="product-font">Rating: ${product.rating}</p>
          <p class="product-font">Stock: ${product.stock}</p>`
        ;
  
        // Append the product element to the product container
        productContainer.appendChild(productElement);

      });
    })
    .catch((error) => {
      // If the Promise returned by `fetchData` is rejected, the code inside this block will be executed
      // Handle any errors that occurred during the API call
      console.error(error);
    });