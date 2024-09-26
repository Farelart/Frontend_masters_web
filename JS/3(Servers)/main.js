//JSON
const responseFromServer = `{"name":"luna", "age": 10, "breed":"Havanese", "location":{"city":"Seattle", "state":"WA"}}`;
console.log(responseFromServer); // the server doesn't send object. It sends String
const responseObject = JSON.parse(responseFromServer);
console.log(responseObject);
console.log(responseObject.name);
console.log(responseObject.location.city);


//JSON Stringify
const dog = {
    name: "Luna",
    age: 10,
    breed: "Havanese",
    location: {
        city: "Seattle",
        state: "WA"
    }
}
const objString = JSON.stringify(dog, null, 6);
console.log(objString);

//API

/* const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dogButton = document.querySelector(".dog-btn");
const dogTarget = document.querySelector(".dog-target");
dogButton.addEventListener("click", () => {
    const promise = fetch(DOG_URL);

    promise
        .then((response) => {
            const processingPromise = response.text();
            console.log(processingPromise);
            return processingPromise;
        })
        .then((processedPromise) => {
            const dogObject = JSON.parse(processedPromise);
            const img = document.createElement("img");
            img.src = dogObject.message;
            img.alt = "Cute doggo";
            dogTarget.appendChild(img);
        })
}) */

const dogURL = "https://dog.ceo/api/breeds/image/random";
const dogButton = document.querySelector(".dog-btn");
const dogTarget = document.querySelector(".dog-target");

function addNewDoggos () {
    const promise = fetch(dogURL);

    promise
        .then((response) => {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then((processingPromise) => {
            const img = document.createElement("img");
            img.src = processingPromise.message,
            img.alt = "Cute Dog";
            dogTarget.appendChild(img);
        });
}

/* dogButton.addEventListener("click", addNewDoggos); */

// Async Await
async function addNewDoggo() {
    const promise = await fetch(dogURL);
    const processedResponse = await promise.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute Dog";
    dogTarget.appendChild(img);
}
dogButton.addEventListener("click", addNewDoggo);
