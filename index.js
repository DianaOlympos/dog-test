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

// function to get a random Shiba image
function getRandomShiba()
{
  changeDogImage('https://dog.ceo/api/breed/shiba/images/random');
}