const cuisineContainer = document.getElementById('cuisine-container');

fetch('cuisines.json')
  .then(response => response.json())
  .then(data => {
    data.cuisines.forEach(cuisine => {
      const cuisineItem = document.createElement('li');
      cuisineItem.classList.add('cuisine-item');

      const cuisineName = document.createElement('h3');
      cuisineName.textContent = cuisine.name;

      const cuisineImage = document.createElement('img');
      cuisineImage.src = cuisine.image;
      cuisineImage.style.width = '350px'; // Set the desired width
      cuisineImage.style.height = '350px'; // Set the desired height
      cuisineImage.alt = cuisine.name;

      const cuisineDescription = document.createElement('p');
      cuisineDescription.textContent = cuisine.description;

      cuisineItem.appendChild(cuisineName);
      cuisineItem.appendChild(cuisineImage);
      cuisineItem.appendChild(cuisineDescription);

      cuisineContainer.appendChild(cuisineItem);
    });
  })
  .catch(error => {
    console.error('Error fetching cuisine data:', error);
  });
