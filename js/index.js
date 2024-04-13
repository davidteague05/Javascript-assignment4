//api is APOD: Astronomy Picture Of The Day
//api and key from https://api.nasa.gov/
//help and guide from https://wilsjame.github.io/how-to-nasa/
//help with the date format from the github pages

//set the variables
const baseURL = 'https://api.nasa.gov/planetary/apod';
const apiKey = 'zKa9egJdgeObHYnJgBOAKngZIjBIIWxdV0Mux97z';
const date = document.querySelector('#date');
const img = document.querySelector('#apodImg')
const imgTitle = document.querySelector('#imgTitle');
const author = document.querySelector('#author');
const explanation = document.querySelector("#explanation");
const id = document.querySelector('#studentId');
const dateDisplay = document.querySelector('#dateDisplay');
//event listener for when the date in the box changes
date.addEventListener('change', changeDate);
//function for when the date is changed
function changeDate(event){
    event.preventDefault();
    id.style.visibility = "visible";
    console.log(url);
    if (date.value !== ''){
        url = `${baseURL}?api_key=${apiKey}&date=${date.value}`;
    }
    fetch(url).then(response => response.json()).then(json => displayApod(json));
};
//function to grab the response from the api and put it on the page
function displayApod(json){
    console.log(json);
    //set the html elements to the respective values from the api
    imgTitle.textContent = json.title;
    author.textContent = `by ${json.copyright}`;
    dateDisplay.textContent = `${json.date}`
    explanation.textContent = json.explanation;
    img.src = json.hdurl;
    //if the date is not valid it returns a status of 400, so set the html elements 
    //to empty and disply the message
    if (json.code === 400){
        imgTitle.textContent = '';
        author.textContent = '';
        explanation.textContent = json.msg;
        img.src = '';
    };
};
//set the default page to today's picture
url = `${baseURL}?api_key=${apiKey}`;
fetch(url).then(response => response.json()).then(json => displayApod(json));