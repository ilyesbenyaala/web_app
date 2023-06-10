document.addEventListener('DOMContentLoaded', () => {
  const restaurantContainer = document.getElementById('restaurant-container');

  fetch('api/restaurants.json')
    .then((response) => response.json())
    .then((restaurants) => {
      restaurants.forEach((restaurant) => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.className = 'restaurant';

        const nameElement = document.createElement('h3');
        nameElement.textContent = restaurant.name;
        restaurantDiv.appendChild(nameElement);

        const imageElement = document.createElement('img');
        imageElement.src = restaurant.image;
        imageElement.style.width = '350px'; // Set the desired width
        imageElement.style.height = '350px'; // Set the desired height
        restaurantDiv.appendChild(imageElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = restaurant.description;
        restaurantDiv.appendChild(descriptionElement);

        const priceRangeElement = document.createElement('p');
        priceRangeElement.textContent = `Price Range: ${restaurant.priceRange}`;
        restaurantDiv.appendChild(priceRangeElement);

        const cuisineElement = document.createElement('p');
        cuisineElement.textContent = `Cuisine: ${restaurant.cuisine}`;
        restaurantDiv.appendChild(cuisineElement);

        const locationElement = document.createElement('p');
        locationElement.textContent = `Location: ${restaurant.location}`;
        restaurantDiv.appendChild(locationElement);

        restaurantContainer.appendChild(restaurantDiv);
      });
    })
    .catch((error) => {
      console.log('Error fetching restaurant data:', error);
    });
});

  
