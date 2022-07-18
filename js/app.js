const REQUEST_URL = "https://icanhazdadjoke.com/";

const getDadJoke = async url => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    const jsonJokeData = await response.json();
    const joke = jsonJokeData.joke;
    postJoke(joke);
};

const postJoke = joke => {
    let jokeDiv = document.querySelector('.joke-text');
    jokeDiv.innerText = joke;
};

const processJokeRequest = async () => {
    const requestUrl = REQUEST_URL;
    await getDadJoke(requestUrl);
};

processJokeRequest();

let btn = document.querySelector('button');
btn.addEventListener("click", processJokeRequest);

// let infoBox = document.querySelector('.site-info');

// let infoBtn = document.querySelector('i');
// infoBtn.addEventListener("mouseover", () => {
//     infoBox.style.display = "block";
// });

