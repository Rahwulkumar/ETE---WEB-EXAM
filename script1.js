fetch('breeds.json')
            .then(response => response.json())
            .then(data => {
                const breedsListDiv = document.getElementById('breedsList');
                data.forEach(breed => {
                    const breedCard = document.createElement('div');
                    breedCard.className = 'breed-card';
                    breedCard.innerHTML = `
                        <h2>${breed.breedName}</h2>
                        <img src="${breed.imageUrl}" alt="${breed.breedName}">
                        <p><strong>ID:</strong> ${breed.breedId}</p>
                        <p><strong>Description:</strong> ${breed.description}</p>
                        <p><strong>Size:</strong> ${breed.size}</p>
                        <p><strong>Lifespan:</strong> ${breed.lifespan}</p>
                        <p><strong>Origin:</strong> ${breed.origin}</p>
                    `;
                    breedsListDiv.appendChild(breedCard);
                });
            })
            .catch(error => console.error('Error:', error));