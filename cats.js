document.addEventListener('DOMContentLoaded', function () {
  const dogContainer = document.getElementById('dogContainer');

  const exampleImageUrls = [
    'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1570824104453-508955ab713e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHN8ZW58MHx8MHx8fDA%3D',
  ];
  // Fetch dog facts from the API
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((dog, index) => {
        const exampleImageUrl =
          exampleImageUrls[index % exampleImageUrls.length];

        const imgElement = document.createElement('img');
        imgElement.src = exampleImageUrl;
        imgElement.alt = 'Dog';

        const factElement = document.createElement('p');
        factElement.textContent = dog.text;

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image-container');
        imgDiv.appendChild(imgElement);

        const factDiv = document.createElement('div');
        factDiv.classList.add('fact-container');
        factDiv.appendChild(factElement);

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        cardContainer.appendChild(imgDiv);
        cardContainer.appendChild(factDiv);

        dogContainer.appendChild(cardContainer);
      });
    })
    .catch((error) => console.error('Error fetching dog facts:', error));
});
