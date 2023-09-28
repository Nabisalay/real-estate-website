
// this is for trending properties on the home page 
$(document).ready(function (){
  const main_data_base = fetch('database.php')
.then(response => response.json())
.then(data => { 
      // Access the properties data
      const properties = data.properties;


  let currentUrl = window.location.href;
  const indexfile = document.querySelector('.main-file');

  if(currentUrl.indexOf('index.html') > -1 || indexfile){
const tranding_properties = document.getElementById("tranding-properties");


  for (let i = 0; i < 4 ; i++) {
    const property = properties[i];

const cardCol = document.createElement("div");
cardCol.className = "col card-p";
cardCol.addEventListener('click', function() {
  // Navigate to the description page with the product's ID in the URL
  window.location.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
});

const card = document.createElement("div");
card.className = "card h-100";

const cardBodyPosition = document.createElement("div");
cardBodyPosition.className = "position-relative card-body-p";

const cardImageLink = document.createElement("a");
cardImageLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;


const cardImage = document.createElement("img");
cardImage.src = property.image;
cardImage.className = "card-img-top img-box";
cardImage.alt = "Property Image";

const featuresBadge = document.createElement("span");
featuresBadge.className = "badge bg-primary badge-p position-absolute top-0 start-0 m-3";
featuresBadge.innerText = "Features";

const saleBadge = document.createElement("span");
saleBadge.className = "badge bg-success badge-p position-absolute top-0 end-0 m-3";
saleBadge.innerText = property.status;

cardImageLink.appendChild(cardImage);
cardBodyPosition.appendChild(cardImageLink);
cardBodyPosition.appendChild(featuresBadge);
cardBodyPosition.appendChild(saleBadge);

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const cardTitleLink = document.createElement("a");
cardTitleLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
cardTitleLink.innerHTML = `<h4 class="card-title collection-card-title card-theme-p mt-1">${property.name}</h4>`;

const cardSubtitle = document.createElement("h6");
cardSubtitle.className = "card-subtitle collection-card-price card-theme-price mt-2";
cardSubtitle.innerText = property.price;

const cardDescription = document.createElement("p");
cardDescription.className = "card-text mt-2 collection-card-description text-color";
cardDescription.innerText = property.small_description;

const propertyDetails = document.createElement("div");
propertyDetails.className = "d-flex align-items-center";

const bedsIcon = document.createElement("i");
bedsIcon.className = "fa-solid fa-bed sub-text";

const bedsNumber = document.createElement("span");
bedsNumber.className = "me-4 sub-text";
bedsNumber.innerText = '\u00A0\u00A0' + property.beds;

const bathsIcon = document.createElement("i");
bathsIcon.className = "fa-solid fa-bath sub-text";

const bathsNumber = document.createElement("span");
bathsNumber.className = "me-4 sub-text";
bathsNumber.innerText = '\u00A0\u00A0' + property.baths;

const sqftIcon = document.createElement("i");
sqftIcon.className = "fa-regular fa-square sub-text";

const sqftNumber = document.createElement("span");
sqftNumber.className = "me-4 sub-text";
sqftNumber.innerText = '\u00A0\u00A0' + property.sqft;

propertyDetails.appendChild(bedsIcon);
propertyDetails.appendChild(bedsNumber);
propertyDetails.appendChild(bathsIcon);
propertyDetails.appendChild(bathsNumber);
propertyDetails.appendChild(sqftIcon);
propertyDetails.appendChild(sqftNumber);

const cardSeparator = document.createElement("hr");

const sellerDetails = document.createElement("div");
sellerDetails.className = "d-flex align-items-center";

const sellerImg = document.createElement("img");
sellerImg.src = property.seller_img;
sellerImg.className = "rounded-circle seller-profile me-4";
sellerImg.alt = "Seller Image";
const sellerName = document.createElement("div");
sellerName.className = "fw-bold seller-name";
sellerName.innerText = property.seller_name;

sellerDetails.appendChild(sellerImg);
sellerDetails.appendChild(sellerName);


cardBody.appendChild(cardTitleLink);
cardBody.appendChild(cardSubtitle);
cardBody.appendChild(cardDescription);
cardBody.appendChild(propertyDetails);
cardBody.appendChild(cardSeparator);
cardBody.appendChild(sellerDetails);

card.appendChild(cardBodyPosition);
card.appendChild(cardBody);

cardCol.appendChild(card);

tranding_properties.appendChild(cardCol);
}
}
})
.catch(error => console.error(error));

});

let a;
let property_iterationCount = 4;

// this is for all collection properties  
$(document).ready(function (){ 
  const main_data_base = fetch('database.php')
  .then(response => response.json())
  .then(data => { 
        // Access the properties data
        const all_properties = data.all_properties_data;

        console.log(all_properties)

        let currentUrl = window.location.href;
        
        if(currentUrl.indexOf('properties.html') > -1){
          const location  = document.querySelector('#select-location');
          const Prices  = document.querySelector('#select-prices');
          const Bed_Rooms  = document.querySelector('#select-bedrooms');
          const Bath_Rooms  = document.querySelector('#select-bathrooms');

          for (let x = 0; x < all_properties.length; x++) {
            const priceOption = document.createElement('option');
            priceOption.value = all_properties[x].price;
            priceOption.textContent = all_properties[x].price;
            Prices.appendChild(priceOption);

            const bedroomoption = document.createElement('option');
            bedroomoption.value = all_properties[x].beds;
            bedroomoption.textContent = all_properties[x].beds;
            Bed_Rooms.appendChild(bedroomoption);

            const bathroomoption = document.createElement('option');
            bathroomoption.value = all_properties[x].baths;
            bathroomoption.textContent = all_properties[x].baths;
            Bath_Rooms.appendChild(bathroomoption);
          }
          
        }
        
        const tranding_properties = document.getElementById("property-collection");
  //
  const indexfile = document.querySelector('.main-file');

  if (currentUrl.indexOf('index.html') > -1 || indexfile || currentUrl.indexOf('properties.html') > -1 || currentUrl.indexOf('properties-details.html') > -1){


  for (a = 0; a < property_iterationCount ; a++) {
    const property = all_properties[a];

    
const cardCol = document.createElement("div");
cardCol.className = "col card-p";
// this status class has been added for filter purpose on the all collection page

console.log(property.status)
if(property.status === 'Sale'){
  cardCol.className = 'col card-p Sale'
}else if (property.status === 'Rent'){
  cardCol.className = 'col card-p Rent'
}else if(property.status === 'Bungalow'){
  cardCol.className = 'col card-p Bungalow'
}else if(property.status === 'Apartment'){
  cardCol.className = 'col card-p Apartment'
}
cardCol.addEventListener('click', function() {
  // Navigate to the description page with the product's ID in the URL
  window.location.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
});

const card = document.createElement("div");
card.className = "card h-100";

const cardBodyPosition = document.createElement("div");
cardBodyPosition.className = "position-relative card-body-p";

const cardImageLink = document.createElement("a");
cardImageLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;

const cardImage = document.createElement("img");
cardImage.src = property.image;
cardImage.className = "card-img-top img-box";
cardImage.alt = "Property Image";

const featuresBadge = document.createElement("span");
featuresBadge.className = "badge bg-primary badge-p position-absolute top-0 start-0 m-3";
featuresBadge.innerText = "Features";

const saleBadge = document.createElement("span");
saleBadge.className = "badge bg-success badge-p position-absolute top-0 end-0 m-3";
saleBadge.innerText = property.status;

cardImageLink.appendChild(cardImage);
cardBodyPosition.appendChild(cardImageLink);
cardBodyPosition.appendChild(featuresBadge);
cardBodyPosition.appendChild(saleBadge);

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const cardTitleLink = document.createElement("a");
cardTitleLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
cardTitleLink.innerHTML = `<h4 class="card-title collection-card-title card-theme-p mt-1">${property.name}</h4>`;

const cardSubtitle = document.createElement("h6");
cardSubtitle.className = "card-subtitle collection-card-price card-theme-price mt-2";
cardSubtitle.innerText = property.price;
// console.log(property.price)

const cardDescription = document.createElement("p");
cardDescription.className = "card-text mt-2 collection-card-description text-color";
cardDescription.innerText = property.small_description;

const propertyDetails = document.createElement("div");
propertyDetails.className = "d-flex align-items-center";

const bedsIcon = document.createElement("i");
bedsIcon.className = "fa-solid fa-bed sub-text";

const bedsNumber = document.createElement("span");
bedsNumber.className = "me-4 sub-text";
bedsNumber.innerText = '\u00A0\u00A0' + property.beds;

const bathsIcon = document.createElement("i");
bathsIcon.className = "fa-solid fa-bath sub-text";

const bathsNumber = document.createElement("span");
bathsNumber.className = "me-4 sub-text";
bathsNumber.innerText = '\u00A0\u00A0' + property.baths;

const sqftIcon = document.createElement("i");
sqftIcon.className = "fa-regular fa-square sub-text";

const sqftNumber = document.createElement("span");
sqftNumber.className = "me-4 sub-text";
sqftNumber.innerText = '\u00A0\u00A0' + property.sqft;

propertyDetails.appendChild(bedsIcon);
propertyDetails.appendChild(bedsNumber);
propertyDetails.appendChild(bathsIcon);
propertyDetails.appendChild(bathsNumber);
propertyDetails.appendChild(sqftIcon);
propertyDetails.appendChild(sqftNumber);

const cardSeparator = document.createElement("hr");

const sellerDetails = document.createElement("div");
sellerDetails.className = "d-flex align-items-center";

const sellerImg = document.createElement("img");
sellerImg.src = property.seller_img;
sellerImg.className = "rounded-circle seller-profile me-4";
sellerImg.alt = "Seller Image";
const sellerName = document.createElement("div");
sellerName.className = "fw-bold seller-name";
sellerName.innerText = property.seller_name;

sellerDetails.appendChild(sellerImg);
sellerDetails.appendChild(sellerName);


cardBody.appendChild(cardTitleLink);
cardBody.appendChild(cardSubtitle);
cardBody.appendChild(cardDescription);
cardBody.appendChild(propertyDetails);
cardBody.appendChild(cardSeparator);
cardBody.appendChild(sellerDetails);

card.appendChild(cardBodyPosition);
card.appendChild(cardBody);

cardCol.appendChild(card);

tranding_properties.appendChild(cardCol);
}
}
})
});

// // this is a load more btn for all collection properties  on the collection page
function laodmore_properties(event){
  event.preventDefault();
  const main_data_base = fetch('database.php')
  .then(response => response.json())
  .then(data => { 
        // Access the properties data
        const all_properties = data.all_properties_data;


        const tranding_properties = document.getElementById("property-collection");

  let currentUrl = window.location.href;
  for (a ; a < all_properties.length; a++) {
    const property = all_properties[a];

const cardCol = document.createElement("div");

if(property.status === 'Sale'){
  cardCol.className = 'col card-p Sale'
}else if (property.status === 'Rent'){
  cardCol.className = 'col card-p Rent'
}else if(property.status === 'Flat'){
  cardCol.className = 'col card-p Flat'
}else if(property.status === 'Apartment'){
  cardCol.className = 'col card-p Apartment'
}

cardCol.addEventListener('click', function() {
  // Navigate to the description page with the product's ID in the URL
  window.location.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
});


const card = document.createElement("div");
card.className = "card h-100";

const cardBodyPosition = document.createElement("div");
cardBodyPosition.className = "position-relative card-body-p";

const cardImageLink = document.createElement("a");
cardImageLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;

const cardImage = document.createElement("img");
cardImage.src = property.image;
cardImage.className = "card-img-top img-box";
cardImage.alt = "Property Image";

const featuresBadge = document.createElement("span");
featuresBadge.className = "badge bg-primary badge-p position-absolute top-0 start-0 m-3";
featuresBadge.innerText = "Features";

const saleBadge = document.createElement("span");
saleBadge.className = "badge bg-success badge-p position-absolute top-0 end-0 m-3";
saleBadge.innerText = property.status;

cardImageLink.appendChild(cardImage);
cardBodyPosition.appendChild(cardImageLink);
cardBodyPosition.appendChild(featuresBadge);
cardBodyPosition.appendChild(saleBadge);

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const cardTitleLink = document.createElement("a");
cardTitleLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
cardTitleLink.innerHTML = `<h4 class="card-title collection-card-title card-theme-p mt-1">${property.name}</h4>`;

const cardSubtitle = document.createElement("h6");
cardSubtitle.className = "card-subtitle collection-card-price card-theme-price mt-2";
cardSubtitle.innerText = property.price;
// console.log(property.price)

const cardDescription = document.createElement("p");
cardDescription.className = "card-text mt-2 collection-card-description text-color";
cardDescription.innerText = property.small_description;

const propertyDetails = document.createElement("div");
propertyDetails.className = "d-flex align-items-center";

const bedsIcon = document.createElement("i");
bedsIcon.className = "fa-solid fa-bed sub-text";

const bedsNumber = document.createElement("span");
bedsNumber.className = "me-4 sub-text";
bedsNumber.innerText = '\u00A0\u00A0' + property.beds;

const bathsIcon = document.createElement("i");
bathsIcon.className = "fa-solid fa-bath sub-text";

const bathsNumber = document.createElement("span");
bathsNumber.className = "me-4 sub-text";
bathsNumber.innerText = '\u00A0\u00A0' + property.baths;

const sqftIcon = document.createElement("i");
sqftIcon.className = "fa-regular fa-square sub-text";

const sqftNumber = document.createElement("span");
sqftNumber.className = "me-4 sub-text";
sqftNumber.innerText = '\u00A0\u00A0' + property.sqft;

propertyDetails.appendChild(bedsIcon);
propertyDetails.appendChild(bedsNumber);
propertyDetails.appendChild(bathsIcon);
propertyDetails.appendChild(bathsNumber);
propertyDetails.appendChild(sqftIcon);
propertyDetails.appendChild(sqftNumber);

const cardSeparator = document.createElement("hr");

const sellerDetails = document.createElement("div");
sellerDetails.className = "d-flex align-items-center";

const sellerImg = document.createElement("img");
sellerImg.src = property.seller_img;
sellerImg.className = "rounded-circle seller-profile me-4";
sellerImg.alt = "Seller Image";
const sellerName = document.createElement("div");
sellerName.className = "fw-bold seller-name";
sellerName.innerText = property.seller_name;

sellerDetails.appendChild(sellerImg);
sellerDetails.appendChild(sellerName);


cardBody.appendChild(cardTitleLink);
cardBody.appendChild(cardSubtitle);
cardBody.appendChild(cardDescription);
cardBody.appendChild(propertyDetails);
cardBody.appendChild(cardSeparator);
cardBody.appendChild(sellerDetails);

card.appendChild(cardBodyPosition);
card.appendChild(cardBody);

cardCol.appendChild(card);

tranding_properties.appendChild(cardCol);

}
  
})
};





// this if for testominal 


 let iterationCount = 4;


$(document).ready(function (){ 

  const main_data_base = fetch('database.php')
  .then(response => response.json())
  .then(data => { 
        // Access the review data
        const client_review_data = data.client_reviews;
        

  let currentUrl = window.location.href;
  if (currentUrl.indexOf('testimonials.html') > -1) {
  const client_reiview = document.querySelector("#client-review-container");

     
  for (i = 0; i < iterationCount ; i++) {
      const $_client_review = client_review_data[i];
  
      const col = document.createElement("div");
      col.classList.add("col");
  
// create a div element with classes "card" and "client-card"
const card = document.createElement("div");
card.classList.add("card", "client-card");
  
// create a div element with classes "card-body" and "client-card-body"
const cardBody = document.createElement("div");
cardBody.classList.add("card-body", "client-card-body");
  
const paragraph_tag = document.createElement("p");


// create an img element with class "border"
const img = document.createElement("img");
img.classList.add("border");
img.src = $_client_review.image;
img.alt = "Customer Picture";
  
// create a div element with class "card-title" and text "Shirley John"
const cardTitle1 = document.createElement("div");
cardTitle1.classList.add("card-title", "pg-client-name");
cardTitle1.textContent = $_client_review.name;
  
// create a div element with class "card-title" and text "Happy Seller"
const cardTitle2 = document.createElement("div");
cardTitle2.classList.add("card-title", "pg-client-status");
cardTitle2.textContent = $_client_review.status;
  
// create a span element with class "pg-client-text" and text content
const text = document.createElement("span");
text.classList.add("pg-client-text");
text.textContent = $_client_review.review;

const rough_para = document.createElement("p");
  
// create a div element with class "rating"
const rating = document.createElement("div");
rating.classList.add("rating", "client-rating");
  
// create five i elements with classes "fa-sharp", "fa-solid", and "fa-star"
for (let i = 0; i < 5; i++) {
  const star = document.createElement("i");
  star.classList.add("fa-sharp", "fa-solid", "fa-star");
    // Check if the current star should be yellow or black
    if (i < $_client_review.ratting) {
      star.classList.add("fas1"); // Apply yellow color class
    } else {
      star.classList.add("fas5"); // Apply black color class
    }
  rating.appendChild(star);
}
  
// append all elements to the card
paragraph_tag.appendChild(img)
cardBody.appendChild(paragraph_tag);
cardBody.appendChild(cardTitle1)
cardBody.appendChild(cardTitle2)
cardBody.appendChild(text);
cardBody.appendChild(rough_para);
cardBody.appendChild(rating);
card.appendChild(cardBody);
col.appendChild(card);

  
// append the card to the container element
client_reiview.appendChild(col);
  
  
  }
}

})
  });

  // i = iterationCount;



// // this if for loadmore 

function loadmore(event){
  event.preventDefault();

  const main_data_base = fetch('database.php')
  .then(response => response.json())
  .then(data => { 
        // Access the review data
        const client_review_data = data.client_reviews;

  let currentUrl = window.location.href;
  if (currentUrl.indexOf('testimonials.html') > -1) {
  const client_reiview = document.getElementById("client-review-container");
  if(iterationCount += 4 >= client_review_data.length){
iterationCount +=4
  }else{
    iterationCount = client_review_data.length;
    document.querySelector('#see-more').classList.add('disabled');
  }
     
  for (i ; i < iterationCount ; i++) {
      const $_client_review = client_review_data[i];
  
      const col = document.createElement("div");
      col.classList.add("col");
  
// create a div element with classes "card" and "client-card"
const card = document.createElement("div");
card.classList.add("card", "client-card");
  
// create a div element with classes "card-body" and "client-card-body"
const cardBody = document.createElement("div");
cardBody.classList.add("card-body", "client-card-body");
  
const paragraph_tag = document.createElement("p");


// create an img element with class "border"
const img = document.createElement("img");
img.classList.add("border");
img.src = $_client_review.image;
img.alt = "Customer Picture";
  
// create a div element with class "card-title" and text "Shirley John"
const cardTitle1 = document.createElement("div");
cardTitle1.classList.add("card-title", "pg-client-name");
cardTitle1.textContent = $_client_review.name;
  
// create a div element with class "card-title" and text "Happy Seller"
const cardTitle2 = document.createElement("div");
cardTitle2.classList.add("card-title", "pg-client-status");
cardTitle2.textContent = $_client_review.status;
  
// create a span element with class "pg-client-text" and text content
const text = document.createElement("span");
text.classList.add("pg-client-text");
text.textContent = $_client_review.review;

const rough_para = document.createElement("p");
  
// create a div element with class "rating"
const rating = document.createElement("div");
rating.classList.add("rating", "client-rating");
  
// create five i elements with classes "fa-sharp", "fa-solid", and "fa-star"
for (let i = 0; i < 5; i++) {
  const star = document.createElement("i");
  star.classList.add("fa-sharp", "fa-solid", "fa-star");
    // Check if the current star should be yellow or black
    if (i < $_client_review.ratting) {
      star.classList.add("fas1"); // Apply yellow color class
    } else {
      star.classList.add("fas5"); // Apply black color class
    }
  rating.appendChild(star);
}
  
// append all elements to the card
paragraph_tag.appendChild(img)
cardBody.appendChild(paragraph_tag);
cardBody.appendChild(cardTitle1)
cardBody.appendChild(cardTitle2)
cardBody.appendChild(text);
cardBody.appendChild(rough_para);
cardBody.appendChild(rating);
card.appendChild(cardBody);
col.appendChild(card);

  
// append the card to the container element
client_reiview.appendChild(col);
  
  
  }
}

})


 } ;
 


 // this if for home page review 

$(document).ready(function (){ 
  const main_data_base = fetch('database.php')
.then(response => response.json())
.then(data => { 
      // Access the properties data
      const client_review_data = data.client_reviews;

   

  let currentUrl = window.location.href;
  const indexfile = document.querySelector('.main-file');

  
  if (currentUrl.indexOf('index.html') > -1 || indexfile) {
  const client_reiview = document.getElementById("client-review-container");
   
    for (let i = 0; i < 4 ; i++) {
      const $_client_review = client_review_data[i];
  
      const col = document.createElement("div");
      col.classList.add("col-md-6", "mb-4", "client-container");
  
// create a div element with classes "card" and "client-card"
const card = document.createElement("div");
card.classList.add("card", "p-sm-4", "px-3", "p-4");
  
// create a div element with classes "card-body" and "client-card-body"
const cardBody = document.createElement("div");
cardBody.classList.add("text-center", "mb-4");
  


// create an img element with class "border"
const img = document.createElement("img");
img.classList.add("img-fluid", "rounded-circle", "client-img");
img.src = $_client_review.image;
img.alt = "Client";

cardBody.appendChild(img)
  
// create a div element with class "card-title" and text "Shirley John"
const cardBody2 = document.createElement("div");
cardBody2.classList.add("text-center",  "mb-4");
  
// create a div element with class "card-title" and text "Happy Seller"
const heading4 = document.createElement("h4");
heading4.classList.add("client-review");
heading4.textContent = $_client_review.complement;

// create a div element with class "rating"
const rating = document.createElement("div");
rating.classList.add("rating");
  
// create five i elements with classes "fa-sharp", "fa-solid", and "fa-star"
for (let i = 0; i < 5; i++) {
  const star = document.createElement("i");
  star.classList.add("fas", "fa-star");
  // Check if the current star should be yellow or black
  if (i < $_client_review.ratting) {
    star.classList.add("fas1"); // Apply yellow color class
  } else {
    star.classList.add("fas5"); // Apply black color class
  }
  rating.appendChild(star);
}

cardBody2.appendChild(heading4);
cardBody2.appendChild(rating);

  
const paragraph_tag = document.createElement("p");
paragraph_tag.classList.add("client-text", "mb-4");
paragraph_tag.textContent = $_client_review.review;

// create a div element with class "card-title" and text "Happy Seller"
const d_flex = document.createElement("div");
d_flex.classList.add("d-flex");

// create a div element with class "card-title" and text "Happy Seller"
const client_name = document.createElement("div");
client_name.classList.add("client-name");
client_name.textContent = `${$_client_review.name},`;



// create a div element with class "card-title" and text "Happy Seller"
const client_status = document.createElement("div");
client_status.classList.add("mx-3", "client-status");
client_status.textContent = $_client_review.status;



d_flex.appendChild(client_name);
d_flex.appendChild(client_status);

  

  
// append all elements to the card
card.appendChild(cardBody);
card.appendChild(cardBody2);
card.appendChild(paragraph_tag);
card.appendChild(d_flex);
col.appendChild(card);

  
// append the card to the container element
client_reiview.appendChild(col);
  
  
  }

  // create anchor element
const anchor = document.createElement('a');

// set the text and href attributes
anchor.textContent = 'Rate Your Experience';
anchor.href = 'index.html';

// add the necessary classes and data-bs attributes
anchor.classList.add('text-center', 'theme-text');
anchor.setAttribute('href', 'clientreviewform.html');

// create the h3 element and append the anchor
const heading = document.createElement('h3');
heading.classList.add('text-center');
heading.appendChild(anchor);

// add the heading to the DOM

client_reiview.appendChild(heading);

}

  })
.catch(error => console.error(error));
  
  });

// this is for the search option of properties page 




function searchcontrol(event){
  event.preventDefault()
  const main_data_base = fetch('database.php')
  .then(response => response.json())
  .then(data => { 
        // Access the properties data
        let matchCount = 0;
        const properties = data.all_properties_data;
        const tranding_properties = document.getElementById("property-collection");
        const search_form_container = document.getElementById("search-form-container");
        const location  = document.querySelector('#select-location');
        const Prices  = document.querySelector('#select-prices');
        const Bed_Rooms  = document.querySelector('#select-bedrooms');
        const Bath_Rooms  = document.querySelector('#select-bathrooms');
        let currentUrl = window.location.href;
        if(currentUrl.indexOf('properties.html') > -1){

  if(Prices.value === 'Prices'){
    Prices.style.border = "1px solid red"
    Prices.focus();
    return false ; 
  }
  else if(Bed_Rooms.value === 'Bed Rooms'){
    Bed_Rooms.style.border = "1px solid red"
    Bed_Rooms.focus();
    return false ; 
  }
  else if(Bath_Rooms.value === 'Bath Rooms'){
    Bath_Rooms.style.border = "1px solid red"
    Bath_Rooms.focus();
    return false ; 
  }else{
    Bath_Rooms.style.border = "none"
    Bed_Rooms.style.border = "none"
    Prices.style.border = "none"
    tranding_properties.innerHTML = '';
 
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];

      console.log('Search Criteria:', {
        bath: Bath_Rooms.value,
        bed: Bed_Rooms.value,
        price: Prices.value
      }); 
      console.log('Property:', property); // Check each property

      if (property.baths === Bath_Rooms.value || property.beds === Bed_Rooms.value || property.price === Prices.value) {
        matchFound = true;
        matchCount++;
  const cardCol = document.createElement("div");
cardCol.className = "col card-p";
cardCol.addEventListener('click', function() {
  // Navigate to the description page with the product's ID in the URL
  window.location.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
});

const card = document.createElement("div");
card.className = "card h-100";

const cardBodyPosition = document.createElement("div");
cardBodyPosition.className = "position-relative card-body-p";

const cardImageLink = document.createElement("a");
cardImageLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;

const cardImage = document.createElement("img");
cardImage.src = property.image;
cardImage.className = "card-img-top img-box";
cardImage.alt = "Property Image";

const featuresBadge = document.createElement("span");
featuresBadge.className = "badge bg-primary badge-p position-absolute top-0 start-0 m-3";
featuresBadge.innerText = "Features";

const saleBadge = document.createElement("span");
saleBadge.className = "badge bg-success badge-p position-absolute top-0 end-0 m-3";
saleBadge.innerText = property.status;

cardImageLink.appendChild(cardImage);
cardBodyPosition.appendChild(cardImageLink);
cardBodyPosition.appendChild(featuresBadge);
cardBodyPosition.appendChild(saleBadge);

const cardBody = document.createElement("div");
cardBody.className = "card-body";

const cardTitleLink = document.createElement("a");
cardTitleLink.href = `properties-details.html?data=${encodeURIComponent(JSON.stringify(property.all_properties_id))}`;
cardTitleLink.innerHTML = `<h4 class="card-title collection-card-title card-theme-p mt-1">${property.name}</h4>`;

const cardSubtitle = document.createElement("h6");
cardSubtitle.className = "card-subtitle collection-card-price card-theme-price mt-2";
cardSubtitle.innerText = property.price;
// console.log(property.price)

const cardDescription = document.createElement("p");
cardDescription.className = "card-text mt-2 collection-card-description text-color";
cardDescription.innerText = property.small_description;

const propertyDetails = document.createElement("div");
propertyDetails.className = "d-flex align-items-center";

const bedsIcon = document.createElement("i");
bedsIcon.className = "fa-solid fa-bed sub-text";

const bedsNumber = document.createElement("span");
bedsNumber.className = "me-4 sub-text";
bedsNumber.innerText = '\u00A0\u00A0' + property.beds;

const bathsIcon = document.createElement("i");
bathsIcon.className = "fa-solid fa-bath sub-text";

const bathsNumber = document.createElement("span");
bathsNumber.className = "me-4 sub-text";
bathsNumber.innerText = '\u00A0\u00A0' + property.baths;

const sqftIcon = document.createElement("i");
sqftIcon.className = "fa-regular fa-square sub-text";

const sqftNumber = document.createElement("span");
sqftNumber.className = "me-4 sub-text";
sqftNumber.innerText = '\u00A0\u00A0' + property.sqft;

propertyDetails.appendChild(bedsIcon);
propertyDetails.appendChild(bedsNumber);
propertyDetails.appendChild(bathsIcon);
propertyDetails.appendChild(bathsNumber);
propertyDetails.appendChild(sqftIcon);
propertyDetails.appendChild(sqftNumber);

const cardSeparator = document.createElement("hr");

const sellerDetails = document.createElement("div");
sellerDetails.className = "d-flex align-items-center";

const sellerImg = document.createElement("img");
sellerImg.src = property.seller_img;
sellerImg.className = "rounded-circle seller-profile me-4";
sellerImg.alt = "Seller Image";
const sellerName = document.createElement("div");
sellerName.className = "fw-bold seller-name";
sellerName.innerText = property.seller_name;

sellerDetails.appendChild(sellerImg);
sellerDetails.appendChild(sellerName);


cardBody.appendChild(cardTitleLink);
cardBody.appendChild(cardSubtitle);
cardBody.appendChild(cardDescription);
cardBody.appendChild(propertyDetails);
cardBody.appendChild(cardSeparator);
cardBody.appendChild(sellerDetails);

card.appendChild(cardBodyPosition);
card.appendChild(cardBody);

cardCol.appendChild(card);

tranding_properties.appendChild(cardCol);

}
}
if (matchCount === 0) {
  confirm("Sorry, we haven't found any results related to your search query");
}
}

}
       



})
};

