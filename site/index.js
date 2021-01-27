// function to perform a get request
function changeDogImage(dogUrl)
{
  let dogRequest = new Request(dogUrl);
  
  fetch(dogRequest)
  .then(function(response) {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(function(data) {
    var image = document.getElementById('dogImage');
    image.src = data.message;
  });
}

// function to get a random image
function getRandom()
{
  let breed = document.getElementById('randomDog').dataset.breed;
  let breedUrl = new URL(breed + "/", "https://dog.ceo/api/breed/");
  let randomImageUrl = new URL("images/random", breedUrl);
  changeDogImage(randomImageUrl);
}