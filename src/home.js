const body = document.querySelector('body');
export const brandName = document.createElement('h1');
brandName.textContent = "Komal's Kitchen";
body.appendChild(brandName);
export const brandContent = document.createElement('div');
const textForBrand1 = "Welcome to Komal's Kitchen: Authentic Non-Veg Delights"
const textForBrand2 = "We are proud to offer freshly prepared, hygienic, and delicious non-vegetarian meals and supplies made with love and care"
brandContent.textContent = textForBrand1;
brandContent.textContent = textForBrand2;
body.appendChild(brandContent);