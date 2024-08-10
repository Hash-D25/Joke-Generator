const joke=document.querySelector('.js-joke');
const newJokeBtn=document.querySelector('.js-new-joke-btn');

const url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,sexist&type=single';

const getJoke = () =>{
    joke.classList.remove("fade");
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        joke.textContent=`${item.joke}`;
        joke.classList.add("fade");
    })
}
getJoke();
newJokeBtn.addEventListener("click",getJoke);

