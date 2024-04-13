const baseURL = 'https://api.nasa.gov/planetary/apod';
const apiKey = 'zKa9egJdgeObHYnJgBOAKngZIjBIIWxdV0Mux97z';
const date = document.querySelector('#date');
const img = document.querySelector('#apodImg')
const imgTitle = document.querySelector('#imgTitle');
const author = document.querySelector('#author');
const explanation = document.querySelector("#explanation");
date.addEventListener('change', changeDate);

function changeDate(event){
    event.preventDefault();
    console.log(url);
    if (date.value !== ''){
        url = `${baseURL}?api_key=${apiKey}&date=${date.value}`;
    }
    fetch(url).then(response => response.json()).then(json => displayApod(json));
};

function displayApod(json){
    
    console.log(json);
    imgTitle.textContent = json.title;
    author.textContent = `by ${json.copyright}`;
    explanation.textContent = json.explanation;
    img.src = json.hdurl;
    if (json.code === 400){
        imgTitle.textContent = '';
        author.textContent = '';
        explanation.textContent = json.msg;
    };
};

url = `${baseURL}?api_key=${apiKey}`;
fetch(url).then(response => response.json()).then(json => displayApod(json));