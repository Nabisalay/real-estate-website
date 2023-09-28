function login(event) {
  event.preventDefault();

  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');

  // Make a POST request to the server with the login credentials
  fetch('serverscript.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=${usernameInput.value}&password=${passwordInput.value}`
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Store the session tokSen in localStorage
      sessionStorage.setItem('sessionToken', data.sessionToken);
      confirm('login Successfully');
      passwordInput.style.border = "1px solid green";
      usernameInput.style.border = "1px solid green";

      // Redirect the user to the admin panel
      window.location.href = 'admin-panel.html';
    } else {
      // Display an error message
      confirm(data.error);
      passwordInput.style.border = "1px solid red";
      usernameInput.style.border = "1px solid red";
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// this is to show the password1
function showpassword(){
  document.getElementById('password').type = 'text'
};
// this is to hide the password1

function hidepassword(){
  document.getElementById('password').type = 'password'
};
// this is to show the password2

// this is for trending properties on the home page 

function clientreview() {
fetch('../database.php')
  .then(response => response.json())
  .then(data => {

          // Get the left-side-container element
          const leftSideContainer = document.getElementById('left-side-container');

          // Clear the container before appending the table
          leftSideContainer.innerHTML = '';

          const dashbord = document.querySelector('.dashbord');

          dashbord.innerHTML = 'Client Reviews';

          const leftsidewrapper = document.querySelector('.left-side');

          leftsidewrapper.style.overflow = 'scroll';

    // Access the client data
    const client_reviews = data.client_reviews;

    // Create the table element
    const table = document.createElement('table');

    // Create the table header
    const tableHeader = document.createElement('tr');
    const headers = ['Id no', 'Client Name', 'Status', 'Complement', 'Rating', 'Review', 'Image'];

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      tableHeader.appendChild(header);
    });

    // Append the table header to the table
    table.appendChild(tableHeader);

    // Create the table body
    const tableBody = document.createElement('tbody');

    // Create a row for each data entry
    client_reviews.forEach(review => {
      // Create a row for each review
      const row = document.createElement('tr');

      // Create cells for each column
      const idCell = document.createElement('td');
      idCell.textContent = review.review_id;
      row.appendChild(idCell);

      const clientNameCell = document.createElement('td');
      clientNameCell.textContent = review.name;
      row.appendChild(clientNameCell);

      const statusCell = document.createElement('td');
      statusCell.textContent = review.status;
      row.appendChild(statusCell);

      const complementCell = document.createElement('td');
      complementCell.textContent = review.complement;
      row.appendChild(complementCell);

      const ratingCell = document.createElement('td');
      ratingCell.textContent = review.ratting;
      row.appendChild(ratingCell);

      const reviewCell = document.createElement('td');
      reviewCell.textContent = review.review;
      row.appendChild(reviewCell);

      const imageCell = document.createElement('td');
      imageCell.textContent = review.image ? 'Yes' : 'No';
      row.appendChild(imageCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });

    // Append the table body to the table
    table.appendChild(tableBody);



    // Append the table to the left-side-container
    leftSideContainer.appendChild(table);

  })
  .catch(error => console.error(error));
}


// this is for the contact us form info 
function contactform() {
const main_data_base = fetch('serverscript.php')
  .then(response => response.json())
  .then(contact_form_data => {

          // Get the left-side-container element
          const leftSideContainer = document.getElementById('left-side-container');

          // Clear the container before appending the table
          leftSideContainer.innerHTML = '';

          const dashbord = document.querySelector('.dashbord');

          dashbord.innerHTML = 'Contact Form';

          const leftsidewrapper = document.querySelector('.left-side');

          leftsidewrapper.style.overflow = 'scroll';

    // Access the client data
    const contact_form = contact_form_data.contact_form_info;

    // Create the table element
    const table = document.createElement('table');

    // Create the table header
    const tableHeader = document.createElement('tr');
    const headers = ['Customer Id', 'First Name', 'Last Name', 'Email Address', 'Phone No', 'Message'];

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      tableHeader.appendChild(header);
    });

    // Append the table header to the table
    table.appendChild(tableHeader);

    // Create the table body
    const tableBody = document.createElement('tbody');

    // Create a row for each data entry
    contact_form.forEach(contact => {
      // Create a row for each review
      const row = document.createElement('tr');

      // Create cells for each column
      const idCell = document.createElement('td');
      idCell.textContent = contact.customer_id ;
      row.appendChild(idCell);

      const clientNameCell = document.createElement('td');
      clientNameCell.textContent = contact.first_name;
      row.appendChild(clientNameCell);

      const statusCell = document.createElement('td');
      statusCell.textContent = contact.last_name;
      row.appendChild(statusCell);

      const complementCell = document.createElement('td');
      complementCell.textContent = contact.email;
      row.appendChild(complementCell);

      const ratingCell = document.createElement('td');
      ratingCell.textContent = contact.Phone_no;
      row.appendChild(ratingCell);

      const reviewCell = document.createElement('td');
      reviewCell.textContent = contact.message;
      row.appendChild(reviewCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });

    // Append the table body to the table
    table.appendChild(tableBody);



    // Append the table to the left-side-container
    leftSideContainer.appendChild(table);

  })
  .catch(error => console.error(error));
}

// this is for the Schedule Form info 
function Scheduleform() {
const main_data_base = fetch('serverscript.php')
  .then(response => response.json())
  .then(contact_form_data => {

          // Get the left-side-container element
          const leftSideContainer = document.getElementById('left-side-container');

          // Clear the container before appending the table
          leftSideContainer.innerHTML = '';

          const dashbord = document.querySelector('.dashbord');

          dashbord.innerHTML = 'Schedule Form';

          const leftsidewrapper = document.querySelector('.left-side');
          
          leftsidewrapper.style.overflow = 'scroll'

    // Access the client data
    const Schedule_form = contact_form_data.Schedule_form_info;

    // Create the table element
    const table = document.createElement('table');

    // Create the table header
    const tableHeader = document.createElement('tr');
    const headers = ['Customer Id', 'First Name', 'Last Name', 'Email Address', 'Phone No', 'Date', 'Day', 'year', 'time', 'Message'];

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      tableHeader.appendChild(header);
    });

    // Append the table header to the table
    table.appendChild(tableHeader);

    // Create the table body
    const tableBody = document.createElement('tbody');

    // Create a row for each data entry
    Schedule_form.forEach(Schedule => {
      // Create a row for each review
      const row = document.createElement('tr');

      // Create cells for each column
      const idCell = document.createElement('td');
      idCell.textContent = Schedule.tour_customer_id;
      row.appendChild(idCell);

      const clientNameCell = document.createElement('td');
      clientNameCell.textContent = Schedule.first_name;
      row.appendChild(clientNameCell);

      const statusCell = document.createElement('td');
      statusCell.textContent = Schedule.last_name;
      row.appendChild(statusCell);

      const complementCell = document.createElement('td');
      complementCell.textContent = Schedule.email;
      row.appendChild(complementCell);

      const ratingCell = document.createElement('td');
      ratingCell.textContent = Schedule.phone_no;
      row.appendChild(ratingCell);

      const dateCell = document.createElement('td');
      dateCell.textContent = Schedule.date;
      row.appendChild(dateCell);

      const dayCell = document.createElement('td');
      dayCell.textContent = Schedule.day;
      row.appendChild(dayCell);

      const yearCell = document.createElement('td');
      yearCell.textContent = Schedule.year;
      row.appendChild(yearCell);

      const timeCell = document.createElement('td');
      timeCell.textContent = Schedule.time;
      row.appendChild(timeCell);

      const reviewCell = document.createElement('td');
      reviewCell.textContent = Schedule.message;
      row.appendChild(reviewCell);

      // Append the row to the table body
      tableBody.appendChild(row);

     

    });

    // Append the table body to the table
    table.appendChild(tableBody);



    // Append the table to the left-side-container
    leftSideContainer.appendChild(table);

  })
  .catch(error => console.error(error));
}

// this is for the news letter Form info 
function newsletter() {
const main_data_base = fetch('serverscript.php')
  .then(response => response.json())
  .then(contact_form_data => {

          // Get the left-side-container element
          const leftSideContainer = document.getElementById('left-side-container');

          // Clear the container before appending the table
          leftSideContainer.innerHTML = '';

          const dashbord = document.querySelector('.dashbord');

          dashbord.innerHTML = 'News Letter Subscription';

          const leftsidewrapper = document.querySelector('.left-side');
          
          leftsidewrapper.style.overflow = 'scroll'

    // Access the client data
    const newsletter_info = contact_form_data.newsletter_form_info;

    // Create the table element
    const table = document.createElement('table');

    // Create the table header
    const tableHeader = document.createElement('tr');
    const headers = ['Customer Id', 'Email Address'];

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      tableHeader.appendChild(header);
    });

    // Append the table header to the table
    table.appendChild(tableHeader);

    // Create the table body
    const tableBody = document.createElement('tbody');

    // Create a row for each data entry
    newsletter_info.forEach(newsletter => {
      // Create a row for each review
      const row = document.createElement('tr');

      // Create cells for each column
      const idCell = document.createElement('td');
      idCell.textContent = newsletter.subscription_id ;
      row.appendChild(idCell);


      const complementCell = document.createElement('td');
      complementCell.textContent = newsletter.email_address;
      row.appendChild(complementCell);


      // Append the row to the table body
      tableBody.appendChild(row);

     

    });

    // Append the table body to the table
    table.appendChild(tableBody);



    // Append the table to the left-side-container
    leftSideContainer.appendChild(table);

  })
  .catch(error => console.error(error));
}

// this is for the add listing Form info 
function addlistinginfomsg() {
const main_data_base = fetch('serverscript.php')
  .then(response => response.json())
  .then(contact_form_data => {

          // Get the left-side-container element
          const leftSideContainer = document.getElementById('left-side-container');

          // Clear the container before appending the table
          leftSideContainer.innerHTML = '';

          const dashbord = document.querySelector('.dashbord');

          dashbord.innerHTML = 'Listing Form';

          const leftsidewrapper = document.querySelector('.left-side');
          
          leftsidewrapper.style.overflow = 'scroll';

          

    // Access the listing data form
    const listing_info = contact_form_data.listing_form_info;

    // Create the table element
    const table = document.createElement('table');

    // Create the table header
    const tableHeader = document.createElement('tr');
    const headers = ['Customer Id', 'Customer Name', 'Email Address', 'Phone No', 'Property Location', 'Concern'];

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      tableHeader.appendChild(header);
    });

    // Append the table header to the table
    table.appendChild(tableHeader);

    // Create the table body
    const tableBody = document.createElement('tbody');

    // Create a row for each data entry
    listing_info.forEach(listing => {
      // Create a row for each review
      const row = document.createElement('tr');

      // Create cells for each column
      const idCell = document.createElement('td');
      idCell.textContent = listing.listing_msg_id ;
      row.appendChild(idCell);


      const nameCell = document.createElement('td');
      nameCell.textContent = listing.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement('td');
      emailCell.textContent = listing.email;
      row.appendChild(emailCell);

      const phone_numberCell = document.createElement('td');
      phone_numberCell.textContent = listing.phone_number;
      row.appendChild(phone_numberCell);

      const property_locationCell = document.createElement('td');
      property_locationCell.textContent = listing.property_location;
      row.appendChild(property_locationCell);

      const concernCell = document.createElement('td');
      concernCell.textContent = listing.concern;
      row.appendChild(concernCell);


      // Append the row to the table body
      tableBody.appendChild(row);


    });

    // Append the table body to the table
    table.appendChild(tableBody);



    // Append the table to the left-side-container
    leftSideContainer.appendChild(table);

  })
  .catch(error => console.error(error));
}
function viewlistinginfo(){

             // Get the left-side-container element
             const leftSideContainer = document.getElementById('left-side-container');

             // Clear the container before appending the table
             leftSideContainer.innerText = '';
 
             const dashbord = document.querySelector('.dashbord');
 
             dashbord.innerHTML = 'See Properties Listing';
// Create the container element
const container = document.createElement('div');
container.classList.add('add-listing-container', 'd-flex', 'justify-content-around');

// Create the "Add property to trending list" div
const trendingPropertyDiv = document.createElement('div');
trendingPropertyDiv.classList.add('trending-property', 'p-2', 'listing-btn');
trendingPropertyDiv.textContent = 'See trending list ';
trendingPropertyDiv.onclick = function(event) {
viewlisting(event);
};

// Create the "Add property to Listing" div
const propertyListingDiv = document.createElement('div');
propertyListingDiv.classList.add('property-listing', 'p-2', 'listing-btn');
propertyListingDiv.textContent = 'See all List';
propertyListingDiv.onclick = function(event) {
viewlisting(event);
};

// Append the div elements to the container
container.appendChild(trendingPropertyDiv);
container.appendChild(propertyListingDiv);

// Append the container to the desired parent element in your HTML
    // Append the table to the left-side-container

    leftSideContainer.appendChild(container);
}


// this is for to watch the list of property avaiable

function viewlisting(event) {
fetch('../database.php')
   .then(response => response.json())
   .then(data => {

    let clickedElement = event.target;
           // Get the left-side-container element
           const leftSideContainer = document.getElementById('left-side-container');

           // Clear the container before appending the table
           leftSideContainer.innerText = '';

           const dashbord = document.querySelector('.dashbord');


           const leftsidewrapper = document.querySelector('.left-side');

           leftsidewrapper.style.overflow = 'scroll';

           let trending_list = document.querySelector('.trending-property');

           let all_listing = document.querySelector('.property-listing');

     // Access the client data
     let view_listing; 
     
     if (clickedElement.classList.contains('trending-property')) {
      view_listing = data.properties;
      dashbord.innerHTML = 'Trending Listing';
    } else if (clickedElement.classList.contains('property-listing')) {
      view_listing = data.all_properties_data;
      dashbord.innerHTML = 'All properties Listing';
    }

     // Create the table element
     const table = document.createElement('table');

     // Create the table header
     const tableHeader = document.createElement('tr');
     const headers = ['Id', 'Property title', 'Price', 'Description', 'Beds', 'Baths', 'Square feet', 'Status', 'Seller Name', 'Seller Image', 'Property Image'];

     headers.forEach(headerText => {
       const header = document.createElement('th');
       header.textContent = headerText;
       tableHeader.appendChild(header);
     });

     // Append the table header to the table
     table.appendChild(tableHeader);

     // Create the table body
     const tableBody = document.createElement('tbody');

     // Create a row for each data entry
     view_listing.forEach(listing => {
       // Create a row for each review
       const row = document.createElement('tr');

       // Create cells for each column
       const idCell = document.createElement('td');
       if (clickedElement.classList.contains('trending-property')) {
        idCell.textContent = listing.id;
      } else if (clickedElement.classList.contains('property-listing')) {
        idCell.textContent = listing.all_properties_id;
      }
       row.appendChild(idCell);

       const NameCell = document.createElement('td');
       NameCell.textContent = listing.name;
       row.appendChild(NameCell);

       const priceCell = document.createElement('td');
       priceCell.textContent = listing.price;
       row.appendChild(priceCell);

       const descriptionCell = document.createElement('td');
       descriptionCell.textContent = listing.small_description	;
       row.appendChild(descriptionCell);

       const 	bathsCell = document.createElement('td');
       bathsCell.textContent = listing.baths;
       row.appendChild(bathsCell);

       const bedsCell = document.createElement('td');
       bedsCell.textContent = listing.beds;
       row.appendChild(bedsCell);

       const 	sqftCell = document.createElement('td');
       sqftCell.textContent = listing.sqft;
       row.appendChild(sqftCell);

       const statusCell = document.createElement('td');
       statusCell.textContent = listing.status;
       row.appendChild(statusCell);

       const seller_nameCell = document.createElement('td');
       seller_nameCell.textContent = listing.seller_name;
       row.appendChild(seller_nameCell);


       const sellerimageCell = document.createElement('td');
       sellerimageCell.textContent = listing.seller_img ? 'Yes' : 'No';
       row.appendChild(sellerimageCell);

       const imageCell = document.createElement('td');
       imageCell.textContent = listing.image ? 'Yes' : 'No';
       row.appendChild(imageCell);

       // Append the row to the table body
       tableBody.appendChild(row);
     });

     // Append the table body to the table
     table.appendChild(tableBody);



     // Append the table to the left-side-container
     leftSideContainer.appendChild(table);

   })
   .catch(error => console.error(error));
}


function addlistinginfo(event){


// Get the left-side-container element
const leftSideContainer = document.getElementById('left-side-container');

// Clear the container before appending the table
leftSideContainer.innerText = '';


const dashbord = document.querySelector('.dashbord');

dashbord.innerHTML = 'Add Properties Listing';
// Create the container element
const container = document.createElement('div');
container.classList.add('add-listing-container', 'd-flex', 'justify-content-around');

// Create the "Add property to trending list" div
const trendingPropertyDiv = document.createElement('div');
trendingPropertyDiv.classList.add('trending-property', 'p-2', 'listing-btn');
trendingPropertyDiv.textContent = 'Add to trending list ';
trendingPropertyDiv.onclick = function(event) {
addlistingform(event);
};

// Create the "Add property to Listing" div
const propertyListingDiv = document.createElement('div');
propertyListingDiv.classList.add('property-listing', 'p-2', 'listing-btn');
propertyListingDiv.textContent = 'Add to all properties List';
propertyListingDiv.onclick = function(event) {
addlistingform(event);
};

// Append the div elements to the container
container.appendChild(trendingPropertyDiv);
container.appendChild(propertyListingDiv);

// Append the container to the desired parent element in your HTML
// Append the table to the left-side-container

leftSideContainer.appendChild(container);
}

function addlistingform(event){

let clickedElement = event.target;

  // Get the left-side-container element
  const leftSideContainer = document.getElementById('left-side-container');

  // Clear the container before appending the table
  leftSideContainer.innerText = '';

  // const dashbord = document.querySelector('.dashbord');

  // dashbord.innerHTML = 'Add Properties Listing';
  const leftsidewrapper = document.querySelector('.left-side');

  leftsidewrapper.style.overflow = 'scroll';

const container = document.createElement('div');  
container.classList.add('add-listing-input-field');

// Create a new form element
const form = document.createElement("form");
form.classList.add('listing-form-container');
form.id = 'listing-form-special'
container.appendChild(form);


// Create a new form element
const form_group1 = document.createElement('div');
form_group1.classList.add('form-group', 'row', 'contact-row')

// Create a new form element
const form_group2 = document.createElement('div');
form_group2.classList.add('form-group', 'row', 'contact-row')

// Create a new form element
const form_group3 = document.createElement('div');
form_group3.classList.add('form-group', 'row', 'contact-row')


// Create a new form element
const form_group4 = document.createElement('div');
form_group4.classList.add('form-group', 'row', 'contact-row')


// Create a new form element
const form_group5 = document.createElement('div');
form_group5.classList.add('form-group', 'mb-4')

// Create a new form element
const btn_container = document.createElement('div');
btn_container.classList.add('container', 'd-flex', 'justify-content-center')

form.appendChild(form_group1);
form.appendChild(form_group2);
form.appendChild(form_group3);
form.appendChild(form_group4);
form.appendChild(form_group5);
form.appendChild(btn_container);


// Create a name container element
const namecontainer = document.createElement('div');
namecontainer.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// create a price container element 
const pricecontainer = document.createElement('div');
pricecontainer.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// append them to the first form group
form_group1.appendChild(namecontainer);
form_group1.appendChild(pricecontainer);

// Create a status container element
const statuscontainer = document.createElement('div');
statuscontainer.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// create a price container element 
const seller_namecontainer = document.createElement('div');
seller_namecontainer.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// append them to the second form group
form_group2.appendChild(statuscontainer);
form_group2.appendChild(seller_namecontainer);

// Create a bed container element
const bedcontainer = document.createElement('div');
bedcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a bath container element 
const bathcontainer = document.createElement('div');
bathcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a sqft container element 
const sqftcontainer = document.createElement('div');
sqftcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// append them to the second form group
form_group3.appendChild(bedcontainer);
form_group3.appendChild(bathcontainer);
form_group3.appendChild(sqftcontainer);

// Create a status container element
const sellerimgcontainer = document.createElement('div');
sellerimgcontainer.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// create a price container element 
const imgcontainer = document.createElement('div');
imgcontainer.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// append them to the second form group
form_group4.appendChild(sellerimgcontainer);
form_group4.appendChild(imgcontainer);


const namelabel = document.createElement('label');
namelabel.classList.add('mb-1');
namelabel.innerText = 'Enter Property title*';
namelabel.id = 'titlelabel';

const nameinput = document.createElement('input');
nameinput.classList.add('add-listing-input');
nameinput.type = 'text';
nameinput.placeholder = 'Property title';
nameinput.id = 'titleinput';

namecontainer.appendChild(namelabel);
namecontainer.appendChild(nameinput);

const pricelabel = document.createElement('label');
pricelabel.classList.add('mb-1');
pricelabel.innerText = 'Enter the Price*';
pricelabel.id = 'pricelabel';

const priceinput = document.createElement('input');
priceinput.classList.add('add-listing-input');
priceinput.type = 'text';
priceinput.placeholder = 'Property price'
priceinput.id = 'priceinput';

pricecontainer.appendChild(pricelabel);
pricecontainer.appendChild(priceinput);


const Statuslabel = document.createElement('label');
Statuslabel.classList.add('mb-1');
Statuslabel.innerText = 'Enter Status*';
Statuslabel.id = 'statuslabel';

const statusinput = document.createElement('input');
statusinput.classList.add('add-listing-input');
statusinput.type = 'text';
statusinput.placeholder = 'Property status'
statusinput.id = 'statusinput';

statuscontainer.appendChild(Statuslabel);
statuscontainer.appendChild(statusinput);

const seller_namelabel = document.createElement('label');
seller_namelabel.classList.add('mb-1');
seller_namelabel.innerText = 'Enter seller name*';
seller_namelabel.id = 'seller_namelabel';

const seller_nameinput = document.createElement('input');
seller_nameinput.classList.add('add-listing-input');
seller_nameinput.type = 'text';
seller_nameinput.placeholder = 'Seller Name'
seller_nameinput.id = 'seller_nameinput';

seller_namecontainer.appendChild(seller_namelabel);
seller_namecontainer.appendChild(seller_nameinput);

const bedlabel = document.createElement('label');
bedlabel.classList.add('mb-1');
bedlabel.innerText = 'Bedrooms*';
bedlabel.id = 'bedlabel';

const bedinput = document.createElement('input');
bedinput.classList.add('add-listing-input');
bedinput.type = 'text';
bedinput.placeholder = 'bedrooms'
bedinput.id = 'bedinput';

bedcontainer.appendChild(bedlabel);
bedcontainer.appendChild(bedinput);

const bathlabel = document.createElement('label');
bathlabel.classList.add('mb-1');
bathlabel.innerText = 'Bathrooms*';
bathlabel.id = 'bathlabel';

const bathinput = document.createElement('input');
bathinput.classList.add('add-listing-input');
bathinput.type = 'text';
bathinput.placeholder = 'bathrooms'
bathinput.id = 'bathinput';

bathcontainer.appendChild(bathlabel);
bathcontainer.appendChild(bathinput);

const sqftlabel = document.createElement('label');
sqftlabel.classList.add('mb-1');
sqftlabel.innerText = 'Square Feet*';
sqftlabel.id = 'sqftlabel';

const sqftinput = document.createElement('input');
sqftinput.classList.add('add-listing-input');
sqftinput.type = 'text';
sqftinput.placeholder = 'Square Feet'
sqftinput.id = 'sqftinput';

sqftcontainer.appendChild(sqftlabel);
sqftcontainer.appendChild(sqftinput);

const seller_imglabel = document.createElement('label');
seller_imglabel.classList.add('mb-1');
seller_imglabel.innerText = 'Enter Seller Image*';
seller_imglabel.id = 'seller_imglabel';

const seller_imgnput = document.createElement('input');
seller_imgnput.classList.add('add-listing-input');
seller_imgnput.type = 'file';
seller_imgnput.id = 'seller_imgnput';

sellerimgcontainer.appendChild(seller_imglabel);
sellerimgcontainer.appendChild(seller_imgnput);

const imglabel = document.createElement('label');
imglabel.classList.add('mb-1');
imglabel.innerText = 'Enter property Image*';
imglabel.id = 'imglabel';

const imginput = document.createElement('input');
imginput.classList.add('add-listing-input');
imginput.type = 'file';
imginput.id = 'imginput';

imgcontainer.appendChild(imglabel);
imgcontainer.appendChild(imginput);


const concernlabel = document.createElement('label');
concernlabel.classList.add('mb-1');
concernlabel.innerText = 'Please enter your concern*';
concernlabel.id = 'concernlabel';

const textarea = document.createElement('textarea');
textarea.classList.add('form-control');
textarea.id = "add-listing-description";
textarea.placeholder = "Enter your message";
// append them to the second form group
form_group5.appendChild(concernlabel);
form_group5.appendChild(textarea);

const btn = document.createElement('button');
if (clickedElement.classList.contains('trending-property')) {
btn.classList.add('submit-btn', 'p-2', 'add-to-trending');

} else if (clickedElement.classList.contains('property-listing')) {
btn.classList.add('submit-btn', 'p-2', 'add-to-all-collection');

}
btn.innerText = 'Add Further details';
btn.onclick = function(event) {
addpropertylisting(event);
};

btn_container.appendChild(btn);

leftSideContainer.appendChild(container)

};

function addpropertylisting(event) {
event.preventDefault();
let clickedElement = event.target;
let tableName;
if (clickedElement.classList.contains('add-to-trending')) {
  tableName = 'properties_collection_basic';
  console.log(tableName);

} else if (clickedElement.classList.contains('add-to-all-collection')) {
  tableName = 'main_properties_collection';
  console.log(tableName);
}

let inputfield = document.getElementsByClassName('add-listing-input');
let concernmsg = document.querySelector('#add-listing-description')

for (let i = 0; i < inputfield.length; i++) {
  if (inputfield[i].value.trim() === '') {
    inputfield[i].previousElementSibling.textContent = 'Please fill this field*';
    inputfield[i].previousElementSibling.style.color = 'red';
    inputfield[i].style.border = "1px solid red";
    return false;
  }else{
    inputfield[i].previousElementSibling.textContent = 'Good*';
    inputfield[i].previousElementSibling.style.color = 'green';
    inputfield[i].style.border = "1px solid green";
  }
}
if(concernmsg.value.trim()===''){
  concernmsg.previousElementSibling.textContent = 'Please fill this field*';
  concernmsg.previousElementSibling.style.color = 'red';
  concernmsg.style.border = "1px solid red";
  return false;
}else{
  concernmsg.previousElementSibling.textContent = 'Good*';
  concernmsg.previousElementSibling.style.color = 'green';
  concernmsg.style.border = "1px solid green";
}

const reader1 = new FileReader();
const reader2 = new FileReader();
let image1 ;
let image2 ;

const listingdata = {
property_title: inputfield[0].value,
property_price: inputfield[1].value,
property_status: inputfield[2].value,
property_seller_name: inputfield[3].value,
property_bed: inputfield[4].value,
property_bath: inputfield[5].value,
property_sqft: inputfield[6].value,
property_seller_img: '',
property_img: '',
property_concern: concernmsg.value,
table_name: tableName
}


reader1.addEventListener('load', function() {
 image1 = reader1.result
 console.log(image1)
 listingdata.property_seller_img = image1;

 processListingData();
});

reader1.readAsDataURL(inputfield[7].files[0]);
// console.log( `error123 ${image1}`)


reader2.addEventListener('load', function() {
 image2 = reader2.result
 listingdata.property_img = image2;

 processListingData();

})



reader2.readAsDataURL(inputfield[8].files[0]);
function processListingData() {
  // Check if both images have been loaded
  if (image1 && image2 && tableName) {
    $.ajax({
      url: '../database.php',
      method: 'POST',
      data: { listingdata: JSON.stringify(listingdata) },
      success: function(response) {
        // Handle the success response
        confirm('Your Review has been saved successfully. You can see it on the page and if you do not see it, please try refreshing the page.');
        console.log(`This is json img: ${JSON.stringify(listingdata['property_seller_img'])}`);
const form = document.getElementById('listing-form-special')
if(form){
form.reset();

const leftSideContainer = document.getElementById('left-side-container');
leftSideContainer.innerText = '';

  // dashbord.innerHTML = 'Add Properties Listing';
  const leftsidewrapper = document.querySelector('.left-side');

  leftsidewrapper.style.overflow = 'scroll';

const dashbord = document.querySelector('.dashbord');

dashbord.innerHTML = 'Add Further Details';
const container = document.createElement('div');  
container.classList.add('add-listing-input-field');

// Create a new form element
const form1 = document.createElement("form");

form1.classList.add('listing-form-container');
form1.id = 'listing-form-special'
container.appendChild(form1);


// Create a new form element
const form_group1 = document.createElement('div');
form_group1.classList.add('form-group', 'row', 'contact-row')

// Create a new form element
const btn_container = document.createElement('div');
btn_container.classList.add('container', 'd-flex', 'justify-content-center')


form1.appendChild(form_group1);

form1.appendChild(btn_container);

// Create a status container element
const img1container = document.createElement('div');
img1container.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// create a price container element 
const img2container = document.createElement('div');
img2container.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

const img3container = document.createElement('div');
img3container.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// create a price container element 
const img4container = document.createElement('div');
img4container.classList.add('col-sm-6', 'mb-1', 'mb-sm-3');

// append them to the second form group
form_group1.appendChild(img1container);
form_group1.appendChild(img2container);
form_group1.appendChild(img3container);
form_group1.appendChild(img4container);

const img1label = document.createElement('label');
img1label.classList.add('mb-1');
img1label.innerText = 'add first image*';
img1label.id = 'img1label';

const img1nput = document.createElement('input');
img1nput.classList.add('add-listing-input');
img1nput.type = 'file';
img1nput.id = 'img1input';

img1container.appendChild(img1label);
img1container.appendChild(img1nput);

const img2label = document.createElement('label');
img2label.classList.add('mb-1');
img2label.innerText = 'add second image*';
img2label.id = 'img2label';

const img2input = document.createElement('input');
img2input.classList.add('add-listing-input');
img2input.type = 'file';
img2input.id = 'img2input';

img2container.appendChild(img2label);
img2container.appendChild(img2input);

const img3label = document.createElement('label');
img3label.classList.add('mb-1');
img3label.innerText = 'add third image*';
img3label.id = 'img3label';

const img3nput = document.createElement('input');
img3nput.classList.add('add-listing-input');
img3nput.type = 'file';
img3nput.id = 'img3input';

img3container.appendChild(img3label);
img3container.appendChild(img3nput);

const img4label = document.createElement('label');
img4label.classList.add('mb-1');
img4label.innerText = 'add fourth image*';
img4label.id = 'img4label';

const img4input = document.createElement('input');
img4input.classList.add('add-listing-input');
img4input.type = 'file';
img4input.id = 'img4input';

img4container.appendChild(img4label);
img4container.appendChild(img4input);


const btn = document.createElement('button');
btn.classList.add('submit-btn', 'p-2')
btn.innerText = 'Add Further details';
btn.onclick = function(event) {
addpropertyimages(event);
};

btn_container.appendChild(btn);


leftSideContainer.appendChild(container)
}
      },
      error: function(xhr, status, error) {
        // Handle the error response
        console.error('Error property listing review:', error);
        
        // Access the XHR object
        var xhrResponse = xhr.response;
        var xhrResponseType = xhr.responseType;
        
        console.log('XHR Response:', xhrResponse);
        console.log('XHR Response Type:', xhrResponseType);
      }
    });
  }
}

return true;

}

function addpropertyimages(event) {
event.preventDefault();

const imageFiles = [];

const img1input = document.getElementById('img1input');
const img2input = document.getElementById('img2input');
const img3input = document.getElementById('img3input');
const img4input = document.getElementById('img4input');



function readImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

async function processImage(input) {
  if (input.files.length > 0) {
    const file = input.files[0];
    const imageData = await readImage(file);
    imageFiles.push(imageData);
  }
}

const promises = [
  processImage(img1input),
  processImage(img2input),
  processImage(img3input),
  processImage(img4input)
];

Promise.all(promises)
.then(() => {
  // All images have been read and stored in the imageFiles array
  console.log(imageFiles);
  if(imageFiles.length > 0){
  // Send imageFiles data to PHP file using AJAX
  $.ajax({
    url: '../database.php',  // Replace with the actual path to your PHP file
    method: 'POST',
    data: { imageFiles: JSON.stringify(imageFiles) },  // Convert imageFiles array to JSON string
    success: function(response) {
      // Handle the success response
      console.log('Data sent successfully!');
      console.log(response);  // Optionally, log the response from the PHP file
      const form = document.getElementById('listing-form-special')
if(form){
form.reset();
const leftSideContainer = document.getElementById('left-side-container');
leftSideContainer.innerText = '';

    // dashbord.innerHTML = 'Add Properties Listing';
    const leftsidewrapper = document.querySelector('.left-side');

    leftsidewrapper.style.overflow = 'scroll';

const dashbord = document.querySelector('.dashbord');

dashbord.innerHTML = 'Add Further Details';
const container = document.createElement('div');  
container.classList.add('add-listing-input-field');

// Create a new form element
const form1 = document.createElement("form");

form1.classList.add('listing-form-container');
form1.id = 'listing-form-special'
container.appendChild(form1);


// Create a new form element
const form_group1 = document.createElement('div');
form_group1.classList.add('form-group', 'row', 'contact-row')

const form_group2 = document.createElement('div');
form_group2.classList.add('form-group', 'row', 'contact-row')

const form_group3 = document.createElement('div');
form_group3.classList.add('form-group', 'row', 'contact-row')

const form_group4 = document.createElement('div');
form_group4.classList.add('form-group', 'row', 'contact-row')

// Create a new form element
const btn_container = document.createElement('div');
btn_container.classList.add('container', 'd-flex', 'justify-content-center')

form1.appendChild(form_group1);
form1.appendChild(form_group2);
form1.appendChild(form_group3);
form1.appendChild(form_group4);

form1.appendChild(btn_container);

const datecontainer = document.createElement('div');
datecontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a bath container element 
const bedcontainer = document.createElement('div');
bedcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a sqft container element 
const bathcontainer = document.createElement('div');
bathcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

const garagecontainer = document.createElement('div');
garagecontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a bath container element 
const sqftcontainer = document.createElement('div');
sqftcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a sqft container element 
const yearcontainer = document.createElement('div');
yearcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// append them to the second form group
form_group1.appendChild(datecontainer);
form_group1.appendChild(bedcontainer);
form_group1.appendChild(bathcontainer);
form_group1.appendChild(garagecontainer);
form_group1.appendChild(sqftcontainer);
form_group1.appendChild(yearcontainer);

const datelabel = document.createElement('label');
datelabel.classList.add('mb-1');
datelabel.innerText = 'Date*';
datelabel.id = 'datelabel';

const dateinput = document.createElement('input');
dateinput.classList.add('add-listing-input');
dateinput.type = 'text';
dateinput.placeholder = 'Date'
dateinput.id = 'dateinput';

datecontainer.appendChild(datelabel);
datecontainer.appendChild(dateinput);

const bedlabel = document.createElement('label');
bedlabel.classList.add('mb-1');
bedlabel.innerText = 'Bedrooms*';
bedlabel.id = 'bedlabel';

const bedinput = document.createElement('input');
bedinput.classList.add('add-listing-input');
bedinput.type = 'text';
bedinput.placeholder = 'Bedrooms'
bedinput.id = 'bedinput';

bedcontainer.appendChild(bedlabel);
bedcontainer.appendChild(bedinput);

const bathlabel = document.createElement('label');
bathlabel.classList.add('mb-1');
bathlabel.innerText = 'Bathrooms*';
bathlabel.id = 'bathlabel';

const bathinput = document.createElement('input');
bathinput.classList.add('add-listing-input');
bathinput.type = 'text';
bathinput.placeholder = 'Bathrooms'
bathinput.id = 'bathinput';

bathcontainer.appendChild(bathlabel);
bathcontainer.appendChild(bathinput);

const garagelabel = document.createElement('label');
garagelabel.classList.add('mb-1');
garagelabel.innerText = 'Garage*';
garagelabel.id = 'garagelabel';

const garageinput = document.createElement('input');
garageinput.classList.add('add-listing-input');
garageinput.type = 'text';
garageinput.placeholder = 'Garage'
garageinput.id = 'garageinput';

garagecontainer.appendChild(garagelabel);
garagecontainer.appendChild(garageinput);

const sqftlabel = document.createElement('label');
sqftlabel.classList.add('mb-1');
sqftlabel.innerText = 'Square Feet*';
sqftlabel.id = 'sqftlabel';

const sqftinput = document.createElement('input');
sqftinput.classList.add('add-listing-input');
sqftinput.type = 'text';
sqftinput.placeholder = 'Square Feet'
sqftinput.id = 'sqftinput';

sqftcontainer.appendChild(sqftlabel);
sqftcontainer.appendChild(sqftinput);

const builtyearlabel = document.createElement('label');
builtyearlabel.classList.add('mb-1');
builtyearlabel.innerText = 'Built Year*';
builtyearlabel.id = 'builtyearlabel';

const builtyearinput = document.createElement('input');
builtyearinput.classList.add('add-listing-input');
builtyearinput.type = 'text';
builtyearinput.placeholder = 'Built Year'
builtyearinput.id = 'builtyearinput';

yearcontainer.appendChild(builtyearlabel);
yearcontainer.appendChild(builtyearinput);

const googlelocation = document.createElement('div');

form_group2.appendChild(googlelocation);


const locationlabel = document.createElement('label');
locationlabel.classList.add('mb-1');
locationlabel.innerText = 'Location url*';
locationlabel.id = 'locationlabel';

const locationinput = document.createElement('input');
locationinput.classList.add('add-listing-input');
locationinput.type = 'text';
locationinput.placeholder = 'Location URL'
locationinput.id = 'locationinput';

googlelocation.appendChild(locationlabel);
googlelocation.appendChild(locationinput);

const detaillabel = document.createElement('label');
detaillabel.classList.add('mb-1');
detaillabel.innerText = 'Please enter description*';
detaillabel.id = 'detaillabel';

const textarea = document.createElement('textarea');
textarea.classList.add('form-control');
textarea.id = "detailed-description";
textarea.placeholder = "Please enter the detailed description";
// append them to the second form group
form_group3.appendChild(detaillabel);
form_group3.appendChild(textarea);

const addresscontainer = document.createElement('div');
addresscontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a bath container element 
const citycontainer = document.createElement('div');
citycontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a sqft container element 
const areacontainer = document.createElement('div');
areacontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

const countrycontainer = document.createElement('div');
countrycontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a bath container element 
const statecontainer = document.createElement('div');
statecontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// create a sqft container element 
const zipcontainer = document.createElement('div');
zipcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');

// append them to the second form group
form_group4.appendChild(addresscontainer);
form_group4.appendChild(citycontainer);
form_group4.appendChild(areacontainer);
form_group4.appendChild(countrycontainer);
form_group4.appendChild(statecontainer);
form_group4.appendChild(zipcontainer);

const addresslabel = document.createElement('label');
addresslabel.classList.add('mb-1');
addresslabel.innerText = 'Address*';
addresslabel.id = 'addresslabel';

const addressinput = document.createElement('input');
addressinput.classList.add('add-listing-input');
addressinput.type = 'text';
addressinput.placeholder = 'Address'
addressinput.id = 'addressinput';

addresscontainer.appendChild(addresslabel);
addresscontainer.appendChild(addressinput);

const citylabel = document.createElement('label');
citylabel.classList.add('mb-1');
citylabel.innerText = 'City*';
citylabel.id = 'citylabel';

const cityinput = document.createElement('input');
cityinput.classList.add('add-listing-input');
cityinput.type = 'text';
cityinput.placeholder = 'City'
cityinput.id = 'cityinput';

citycontainer.appendChild(citylabel);
citycontainer.appendChild(cityinput);

const arealabel = document.createElement('label');
arealabel.classList.add('mb-1');
arealabel.innerText = 'Area*';
arealabel.id = 'arealabel';

const areainput = document.createElement('input');
areainput.classList.add('add-listing-input');
areainput.type = 'text';
areainput.placeholder = 'Area'
areainput.id = 'areainput';

areacontainer.appendChild(arealabel);
areacontainer.appendChild(areainput);

const countrylabel = document.createElement('label');
countrylabel.classList.add('mb-1');
countrylabel.innerText = 'Country*';
countrylabel.id = 'countrylabel';

const countryinput = document.createElement('input');
countryinput.classList.add('add-listing-input');
countryinput.type = 'text';
countryinput.placeholder = 'Country'
countryinput.id = 'countryinput';

countrycontainer.appendChild(countrylabel);
countrycontainer.appendChild(countryinput);

const statelabel = document.createElement('label');
statelabel.classList.add('mb-1');
statelabel.innerText = 'Province*';
statelabel.id = 'statelabel';

const stateinput = document.createElement('input');
stateinput.classList.add('add-listing-input');
stateinput.type = 'text';
stateinput.placeholder = 'Province'
stateinput.id = 'stateinput';

statecontainer.appendChild(statelabel);
statecontainer.appendChild(stateinput);

const ziplabel = document.createElement('label');
ziplabel.classList.add('mb-1');
ziplabel.innerText = 'Zip*';
ziplabel.id = 'ziplabel';

const zipinput = document.createElement('input');
zipinput.classList.add('add-listing-input');
zipinput.type = 'text';
zipinput.placeholder = 'Zip'
zipinput.id = 'zipinput';

zipcontainer.appendChild(ziplabel);
zipcontainer.appendChild(zipinput);

const btn = document.createElement('button');
btn.classList.add('submit-btn', 'p-2')
btn.innerText = 'Add Further details';
btn.onclick = function(event) {
  addFurtherInfo(event);
  };

btn_container.appendChild(btn);

leftSideContainer.appendChild(container);

}
    },
    error: function(xhr, status, error) {
      // Handle the error response
      console.error('Error sending data:', error);
    }
  });
} else {
  alert('Please select at least one image.');
}
})
.catch((error) => {
  console.error('Error reading images:', error);
});
}



function isDataValid(data) {
for (const prop in data) {
  if (Array.isArray(data[prop])) {
    // Check if any value in the array is empty
    if (data[prop].some(value => value.trim() === '')) {
      return false;
    }
  } else {
    // Check if the value is empty
    if (data[prop].trim() === '') {
      return false;
    }
  }
}
return true;
}

function addFurtherInfo(event){
event.preventDefault();
const date = document.getElementById('dateinput').value;
const bed = document.getElementById('bedinput').value;
const bath = document.getElementById('bathinput').value;
const garage = document.getElementById('garageinput').value
const sqft = document.getElementById('sqftinput').value;
const builtyear = document.getElementById('builtyearinput').value;
const googlelocation = document.getElementById('locationinput').value;
const detaileddescription = document.getElementById('detailed-description').value;
const address = document.getElementById('addressinput').value;
const city = document.getElementById('cityinput').value;
const area = document.getElementById('areainput').value;
const country = document.getElementById('countryinput').value;
const state = document.getElementById('stateinput').value;
const zip = document.getElementById('zipinput').value;

const furtherinfoData = {
  overview: [date,
  bed,
  bath,
  garage,
  sqft,
  builtyear],
 geolocation: googlelocation,
 description: detaileddescription,    
 address: [address, 
  city, 
  area, 
  country, 
  state, 
  zip], 
}

if (isDataValid(furtherinfoData)) {
  // All input fields have values, proceed with sending the data
  $.ajax({
    url: '../database.php',
    method: 'POST',
    data: {locationInfo: JSON.stringify(furtherinfoData)},
    success: function(response) {
      // Handle success response
      console.log('Data sent successfully!');
      console.log(response);
      const form = document.getElementById('listing-form-special')
      if(form){
        form.reset();
        const leftSideContainer = document.getElementById('left-side-container');
        leftSideContainer.innerText = '';
        
            // dashbord.innerHTML = 'Add Properties Listing';
            const leftsidewrapper = document.querySelector('.left-side');
        
            leftsidewrapper.style.overflow = 'scroll';
        
        const dashbord = document.querySelector('.dashbord');
        
        dashbord.innerHTML = 'Add Further Details';
        const container = document.createElement('div');  
        container.classList.add('add-listing-input-field');
        
        // Create a new form element
        const form1 = document.createElement("form");
        
        form1.classList.add('listing-form-container');
        form1.id = 'listing-form-special'
        container.appendChild(form1);
        
        
        // Create a new form element
        const form_group1 = document.createElement('div');
        form_group1.classList.add('form-group', 'row', 'contact-row')
        
        
        // Create a new form element
        const btn_container = document.createElement('div');
        btn_container.classList.add('container', 'd-flex', 'justify-content-center')
        
        form1.appendChild(form_group1);
      
        form1.appendChild(btn_container);
        
        const proprty_lot_size = document.createElement('div');
        proprty_lot_size.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a bath container element 
        const bathcontainer = document.createElement('div');
        bathcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        const garagecontainer = document.createElement('div');
        garagecontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');
      
          // create a sqft container element 
          const basement = document.createElement('div');
          basement.classList.add('col-md-4', 'col-sm-6', 'mb-3');
          
        
        // create a bath container element 
        const roofing = document.createElement('div');
        roofing.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a sqft container element 
        const price = document.createElement('div');
        price.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // append them to the second form group
        form_group1.appendChild(proprty_lot_size);
        form_group1.appendChild(bathcontainer);
        form_group1.appendChild(garagecontainer);
        form_group1.appendChild(basement);
        form_group1.appendChild(roofing);
        form_group1.appendChild(price);
        
        const lotSize_label = document.createElement('label');
        lotSize_label.classList.add('mb-1');
        lotSize_label.innerText = 'Property Lot Size*';
        lotSize_label.id = 'lotSizelabel';
        
        const lotSize_input = document.createElement('input');
        lotSize_input.classList.add('add-listing-input');
        lotSize_input.type = 'text';
        lotSize_input.placeholder = 'Property Lot Size'
        lotSize_input.id = 'lotSizeinput';
        
        proprty_lot_size.appendChild(lotSize_label);
        proprty_lot_size.appendChild(lotSize_input);
        
        const bathlabel = document.createElement('label');
        bathlabel.classList.add('mb-1');
        bathlabel.innerText = 'Bathrooms*';
        bathlabel.id = 'bathlabel';
        
        const bathinput = document.createElement('input');
        bathinput.classList.add('add-listing-input');
        bathinput.type = 'text';
        bathinput.placeholder = 'Bathrooms'
        bathinput.id = 'bathinput';
        
        bathcontainer.appendChild(bathlabel);
        bathcontainer.appendChild(bathinput);
        
        const garagelabel = document.createElement('label');
        garagelabel.classList.add('mb-1');
        garagelabel.innerText = 'Garages*';
        garagelabel.id = 'garagelabel';
        
        const garageinput = document.createElement('input');
        garageinput.classList.add('add-listing-input');
        garageinput.type = 'text';
        garageinput.placeholder = 'Garages'
        garageinput.id = 'garageinput';
        
        garagecontainer.appendChild(garagelabel);
        garagecontainer.appendChild(garageinput);
        
        const baselabel = document.createElement('label');
        baselabel.classList.add('mb-1');
        baselabel.innerText = 'Basement*';
        baselabel.id = 'baselabel';
        
        const baseinput = document.createElement('input');
        baseinput.classList.add('add-listing-input');
        baseinput.type = 'text';
        baseinput.placeholder = 'Basement'
        baseinput.id = 'baselabel';
        
        basement.appendChild(baselabel);
        basement.appendChild(baseinput);
        
        const rooflabel = document.createElement('label');
        rooflabel.classList.add('mb-1');
        rooflabel.innerText = 'Roofing*';
        rooflabel.id = 'rooflabel';
        
        const roofinput = document.createElement('input');
        roofinput.classList.add('add-listing-input');
        roofinput.type = 'text';
        roofinput.placeholder = 'Roofing'
        roofinput.id = 'roofinput';
        
        roofing.appendChild(rooflabel);
        roofing.appendChild(roofinput);
        
        const pricelabel = document.createElement('label');
        pricelabel.classList.add('mb-1');
        pricelabel.innerText = 'Price*';
        pricelabel.id = 'pricelabel';
        
        const priceinput = document.createElement('input');
        priceinput.classList.add('add-listing-input');
        priceinput.type = 'text';
        priceinput.placeholder = 'Price'
        priceinput.id = 'priceinput';
        
        price.appendChild(pricelabel);
        price.appendChild(priceinput);
        
        
        const roomscontainer = document.createElement('div');
        roomscontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a bath container element 
        const garageSize = document.createElement('div');
        garageSize.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a sqft container element 
        const exConstruction = document.createElement('div');
        exConstruction.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        const strucType  = document.createElement('div');
        strucType.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a bath container element 
        const proprtySize = document.createElement('div');
        proprtySize.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a sqft container element 
        const bedcontainer = document.createElement('div');
        bedcontainer.classList.add('col-md-4', 'col-sm-6', 'mb-3');
      
        const builtYear = document.createElement('div');
        builtYear.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a bath container element 
        const exMaterial = document.createElement('div');
        exMaterial.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // create a sqft container element 
        const floorNos = document.createElement('div');
        floorNos.classList.add('col-md-4', 'col-sm-6', 'mb-3');
        
        // append them to the second form group
        form_group1.appendChild(roomscontainer);
        form_group1.appendChild(garageSize);
        form_group1.appendChild(exConstruction);
        form_group1.appendChild(strucType);
        form_group1.appendChild(proprtySize);
        form_group1.appendChild(bedcontainer);
        form_group1.appendChild(builtYear);
        form_group1.appendChild(exMaterial);
        form_group1.appendChild(floorNos);
        
        const roomlabel = document.createElement('label');
        roomlabel.classList.add('mb-1');
        roomlabel.innerText = 'Rooms*';
        roomlabel.id = 'roomlabel';
        
        const roominput = document.createElement('input');
        roominput.classList.add('add-listing-input');
        roominput.type = 'text';
        roominput.placeholder = 'Rooms'
        roominput.id = 'roominput';
        
        roomscontainer.appendChild(roomlabel);
        roomscontainer.appendChild(roominput);
        
        const garSizelabel = document.createElement('label');
        garSizelabel.classList.add('mb-1');
        garSizelabel.innerText = 'Garage Size*';
        garSizelabel.id = 'garSizelabel';
        
        const garSizeinput = document.createElement('input');
        garSizeinput.classList.add('add-listing-input');
        garSizeinput.type = 'text';
        garSizeinput.placeholder = 'Garage Size'
        garSizeinput.id = 'garSizeinput';
        
        garageSize.appendChild(garSizelabel);
        garageSize.appendChild(garSizeinput);
        
        const exConstlabel = document.createElement('label');
        exConstlabel.classList.add('mb-1');
        exConstlabel.innerText = 'External Construction*';
        exConstlabel.id = 'exConstlabel';
        
        const exConstinput = document.createElement('input');
        exConstinput.classList.add('add-listing-input');
        exConstinput.type = 'text';
        exConstinput.placeholder = 'External Construction'
        exConstinput.id = 'exConstinput';
        
        exConstruction.appendChild(exConstlabel);
        exConstruction.appendChild(exConstinput);
        
        const strucTypelabel = document.createElement('label');
        strucTypelabel.classList.add('mb-1');
        strucTypelabel.innerText = 'Structure Type*';
        strucTypelabel.id = 'strucTypelabel';
        
        const strucTypeinput = document.createElement('input');
        strucTypeinput.classList.add('add-listing-input');
        strucTypeinput.type = 'text';
        strucTypeinput.placeholder = 'Structure Type'
        strucTypeinput.id = 'strucTypeinput';
        
        strucType.appendChild(strucTypelabel);
        strucType.appendChild(strucTypeinput);
        
        const pSizelabel = document.createElement('label');
        pSizelabel.classList.add('mb-1');
        pSizelabel.innerText = 'Property Size*';
        pSizelabel.id = 'pSizelabel';
        
        const pSizeinput = document.createElement('input');
        pSizeinput.classList.add('add-listing-input');
        pSizeinput.type = 'text';
        pSizeinput.placeholder = 'Property Size'
        pSizeinput.id = 'pSizeinput';
        
        proprtySize.appendChild(pSizelabel);
        proprtySize.appendChild(pSizeinput);
        
        const bedlabel = document.createElement('label');
        bedlabel.classList.add('mb-1');
        bedlabel.innerText = 'Bedrooms*';
        bedlabel.id = 'bedlabel';
        
        const bedinput = document.createElement('input');
        bedinput.classList.add('add-listing-input');
        bedinput.type = 'text';
        bedinput.placeholder = 'Bedrooms'
        bedinput.id = 'bedinput';
        
        bedcontainer.appendChild(bedlabel);
        bedcontainer.appendChild(bedinput);
      
        const bYearlabel = document.createElement('label');
        bYearlabel.classList.add('mb-1');
        bYearlabel.innerText = 'Year Built*';
        bYearlabel.id = 'bYearlabel';
        
        const bYearinput = document.createElement('input');
        bYearinput.classList.add('add-listing-input');
        bYearinput.type = 'text';
        bYearinput.placeholder = 'Year Built'
        bYearinput.id = 'bYearinput';
        
        builtYear.appendChild(bYearlabel);
        builtYear.appendChild(bYearinput);
        
        const exMaterlabel = document.createElement('label');
        exMaterlabel.classList.add('mb-1');
        exMaterlabel.innerText = 'Exterior Material*';
        exMaterlabel.id = 'exMaterlabel';
        
        const exMaterinput = document.createElement('input');
        exMaterinput.classList.add('add-listing-input');
        exMaterinput.type = 'text';
        exMaterinput.placeholder = 'Exterior Material'
        exMaterinput.id = 'exMaterinput';
        
        exMaterial.appendChild(exMaterlabel);
        exMaterial.appendChild(exMaterinput);
        
        const floorlabel = document.createElement('label');
        floorlabel.classList.add('mb-1');
        floorlabel.innerText = 'Floors No*';
        floorlabel.id = 'floorlabel';
        
        const floorinput = document.createElement('input');
        floorinput.classList.add('add-listing-input');
        floorinput.type = 'text';
        floorinput.placeholder = 'Floors No'
        floorinput.id = 'floorinput';
        
        floorNos.appendChild(floorlabel);
        floorNos.appendChild(floorinput);
        
        const btn = document.createElement('button');
        btn.classList.add('submit-btn', 'p-2')
        btn.innerText = 'Add Further details';
        btn.onclick = function(event) {
          addFurtherdetail(event);
          };
        
        btn_container.appendChild(btn);
        
        leftSideContainer.appendChild(container);
       
      
      }
    },
    error: function(xhr, status, error) {
      // Handle error response
      console.error('Error sending data:', error);
    }
  });
} else {
  alert('Please fill in all the required fields.');
  const inputs = document.querySelectorAll('input');
  for (const input of inputs) {
    if (input.value.trim() === '') {
      input.style.border = '1px solid red';
      input.focus();
      break;
    } else {
      input.style.border = '1px solid green';
    }
  }
}
console.log(furtherinfoData);

}



function addFurtherdetail(event) {
  event.preventDefault();
  const inputValues = document.querySelectorAll('input');
  // console.log(inputValues);
  const furtherInfoDetail = [];
  for (let i = 0; i < inputValues.length; i++) {
    if (inputValues[i].value.trim() !== '') {
      inputValues[i].style.border =  '1px solid green'
      furtherInfoDetail.push(inputValues[i].value.trim());
    }else {
      inputValues[i].focus();
      inputValues[i].style.border =  '1px solid red'
      alert('Please fill the all given fields correctly')
      return;
    }

  }
  if (furtherInfoDetail) {
    $.ajax({
      url: '../database.php',
      method: 'POST',
      data: {proprtyDetailInfo:  JSON.stringify(furtherInfoDetail)},
      success: function(response) {
        // Handle success response
        console.log('Data sent successfully!');
        console.log(response);
    
          const form = document.getElementById('listing-form-special');
          if (form) {
            form.reset();

            const leftSideContainer = document.getElementById('left-side-container');
            leftSideContainer.innerText = '';
            
                // dashbord.innerHTML = 'Add Properties Listing';
                const leftsidewrapper = document.querySelector('.left-side');
            
                leftsidewrapper.style.overflow = 'scroll';
            
            const dashbord = document.querySelector('.dashbord');
            
            dashbord.innerHTML = 'Add Interior Details';
            const container = document.createElement('div');  
            container.classList.add('add-listing-input-field');
            
            // Create a new form element
            const form1 = document.createElement("form");
            
            form1.classList.add('listing-form-container');
            form1.id = 'listing-form-special'
            container.appendChild(form1);
            
            
            // Create a new form element
            const form_group1 = document.createElement('div');
            form_group1.classList.add('form-group', 'row', 'contact-row')
            
            
            // Create a new form element
            const btn_container = document.createElement('div');
            btn_container.classList.add('container', 'd-flex', 'justify-content-center')
            
            form1.appendChild(form_group1);
          
            form1.appendChild(btn_container);
            
            const interiorDetail1 = document.createElement('div');
            interiorDetail1.classList.add('col-md-4', 'col-sm-6', 'mb-3');
            
            // create a bath container element 
            const interiorDetail2 = document.createElement('div');
            interiorDetail2.classList.add('col-md-4', 'col-sm-6', 'mb-3');
            
            const interiorDetail3 = document.createElement('div');
            interiorDetail3.classList.add('col-md-4', 'col-sm-6', 'mb-3');
          
              // create a sqft container element 
              const interiorDetail4 = document.createElement('div');
              interiorDetail4.classList.add('col-md-4', 'col-sm-6', 'mb-3');
              
            
            // create a bath container element 
            const interiorDetail5 = document.createElement('div');
            interiorDetail5.classList.add('col-md-4', 'col-sm-6', 'mb-3');
            
            // create a sqft container element 
            const interiorDetail6 = document.createElement('div');
            interiorDetail6.classList.add('col-md-4', 'col-sm-6', 'mb-3');
            
            // append them to the second form group
            form_group1.appendChild(interiorDetail1);
            form_group1.appendChild(interiorDetail2);
            form_group1.appendChild(interiorDetail3);
            form_group1.appendChild(interiorDetail4);
            form_group1.appendChild(interiorDetail5);
            form_group1.appendChild(interiorDetail6);
            
            const intDetail1label = document.createElement('label');
            intDetail1label.classList.add('mb-1');
            intDetail1label.innerText = 'Interior Detail*';
            intDetail1label.id = 'lotSizelabel';
            
            const intDetail1input = document.createElement('input');
            intDetail1input.classList.add('add-listing-input');
            intDetail1input.type = 'text';
            intDetail1input.placeholder = 'Interior Detail'
            intDetail1input.id = 'lotSizeinput';
            
            interiorDetail1.appendChild(intDetail1label);
            interiorDetail1.appendChild(intDetail1input);
            
            const intDetail2label = document.createElement('label');
            intDetail2label.classList.add('mb-1');
            intDetail2label.innerText = 'Interior Detail*';
            intDetail2label.id = 'bathlabel';
            
            const intDetail2input = document.createElement('input');
            intDetail2input.classList.add('add-listing-input');
            intDetail2input.type = 'text';
            intDetail2input.placeholder = 'Interior Detail'
            intDetail2input.id = 'bathinput';
            
            interiorDetail2.appendChild(intDetail2label);
            interiorDetail2.appendChild(intDetail2input);
            
            const intDetail3label = document.createElement('label');
            intDetail3label.classList.add('mb-1');
            intDetail3label.innerText = 'Interior Detail*';
            intDetail3label.id = 'garagelabel';
            
            const intDetail3input = document.createElement('input');
            intDetail3input.classList.add('add-listing-input');
            intDetail3input.type = 'text';
            intDetail3input.placeholder = 'Interior Detail'
            intDetail3input.id = 'garageinput';
            
            interiorDetail3.appendChild(intDetail3label);
            interiorDetail3.appendChild(intDetail3input);
            
            const intDetail4label = document.createElement('label');
            intDetail4label.classList.add('mb-1');
            intDetail4label.innerText = 'Interior Detail*';
            intDetail4label.id = 'baselabel';
            
            const intDetail4input = document.createElement('input');
            intDetail4input.classList.add('add-listing-input');
            intDetail4input.type = 'text';
            intDetail4input.placeholder = 'Interior Detail'
            intDetail4input.id = 'baselabel';
            
            interiorDetail4.appendChild(intDetail4label);
            interiorDetail4.appendChild(intDetail4input);
            
            const intDetail5label = document.createElement('label');
            intDetail5label.classList.add('mb-1');
            intDetail5label.innerText = 'Interior Detail*';
            intDetail5label.id = 'rooflabel';
            
            const intDetail5input = document.createElement('input');
            intDetail5input.classList.add('add-listing-input');
            intDetail5input.type = 'text';
            intDetail5input.placeholder = 'Interior Detail'
            intDetail5input.id = 'roofinput';
            
            interiorDetail5.appendChild(intDetail5label);
            interiorDetail5.appendChild(intDetail5input);
            
            const intDetail6label = document.createElement('label');
            intDetail6label.classList.add('mb-1');
            intDetail6label.innerText = 'Interior Detail*';
            intDetail6label.id = 'pricelabel';
            
            const intDetail6input = document.createElement('input');
            intDetail6input.classList.add('add-listing-input');
            intDetail6input.type = 'text';
            intDetail6input.placeholder = 'Interior Detail'
            intDetail6input.id = 'priceinput';
            
            interiorDetail6.appendChild(intDetail6label);
            interiorDetail6.appendChild(intDetail6input);
        
            const btn = document.createElement('button');
            btn.classList.add('submit-btn', 'p-2')
            btn.innerText = 'Add Further details';
            btn.onclick = function(event) {
              addinteriordetail(event);
              };
            
            btn_container.appendChild(btn);  
            
            leftSideContainer.appendChild(container);
        
          }
        },
        error: function(xhr, status, error) {
          // Handle error response
          console.error('Error sending data:', error);
        }
})
    
    };
  }




  function addinteriordetail(event) {
    event.preventDefault();
  
    let inputvalues = document.querySelectorAll('input');
    let interior_details = [];
  
    for (let i = 0; i < inputvalues.length; i++) {
      if (inputvalues[i].value.trim() !== '') {
        interior_details.push(inputvalues[i].value.trim());
      }
    }
  
    if (interior_details.length !== 0) {
      console.log(interior_details);
      $.ajax({
        url: '../database.php',
        method: 'POST',
        data: {interiorDetails:  JSON.stringify(interior_details)},
        success: function(response) {
          // Handle success response
          console.log('Data sent successfully!');
          console.log(response);
      
            const form = document.getElementById('listing-form-special');
            if (form) {
              form.reset();

              
  const leftSideContainer = document.getElementById('left-side-container');
  leftSideContainer.innerText = '';
  
      // dashbord.innerHTML = 'Add Properties Listing';
      const leftsidewrapper = document.querySelector('.left-side');
  
      leftsidewrapper.style.overflow = 'scroll';
  
  const dashbord = document.querySelector('.dashbord');
  
  dashbord.innerHTML = 'Add Outdoor Details';
  const container = document.createElement('div');  
  container.classList.add('add-listing-input-field');
  
  // Create a new form element
  const form1 = document.createElement("form");
  
  form1.classList.add('listing-form-container');
  form1.id = 'listing-form-special'
  container.appendChild(form1);
  
  
  // Create a new form element
  const form_group1 = document.createElement('div');
  form_group1.classList.add('form-group', 'row', 'contact-row')
  
  
  // Create a new form element
  const btn_container = document.createElement('div');
  btn_container.classList.add('container', 'd-flex', 'justify-content-center')
  
  form1.appendChild(form_group1);

  form1.appendChild(btn_container);
  
  const interiorDetail1 = document.createElement('div');
  interiorDetail1.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // create a bath container element 
  const interiorDetail2 = document.createElement('div');
  interiorDetail2.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  const interiorDetail3 = document.createElement('div');
  interiorDetail3.classList.add('col-md-4', 'col-sm-6', 'mb-3');

    // create a sqft container element 
    const interiorDetail4 = document.createElement('div');
    interiorDetail4.classList.add('col-md-4', 'col-sm-6', 'mb-3');
    
  
  // create a bath container element 
  const interiorDetail5 = document.createElement('div');
  interiorDetail5.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // create a sqft container element 
  const interiorDetail6 = document.createElement('div');
  interiorDetail6.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // append them to the second form group
  form_group1.appendChild(interiorDetail1);
  form_group1.appendChild(interiorDetail2);
  form_group1.appendChild(interiorDetail3);
  form_group1.appendChild(interiorDetail4);
  form_group1.appendChild(interiorDetail5);
  form_group1.appendChild(interiorDetail6);
  
  const intDetail1label = document.createElement('label');
  intDetail1label.classList.add('mb-1');
  intDetail1label.innerText = 'Outdoor Detail*';
  intDetail1label.id = 'lotSizelabel';
  
  const intDetail1input = document.createElement('input');
  intDetail1input.classList.add('add-listing-input');
  intDetail1input.type = 'text';
  intDetail1input.placeholder = 'Outdoor Detail'
  intDetail1input.id = 'lotSizeinput';
  
  interiorDetail1.appendChild(intDetail1label);
  interiorDetail1.appendChild(intDetail1input);
  
  const intDetail2label = document.createElement('label');
  intDetail2label.classList.add('mb-1');
  intDetail2label.innerText = 'Outdoor Detail*';
  intDetail2label.id = 'bathlabel';
  
  const intDetail2input = document.createElement('input');
  intDetail2input.classList.add('add-listing-input');
  intDetail2input.type = 'text';
  intDetail2input.placeholder = 'Outdoor Detail'
  intDetail2input.id = 'bathinput';
  
  interiorDetail2.appendChild(intDetail2label);
  interiorDetail2.appendChild(intDetail2input);
  
  const intDetail3label = document.createElement('label');
  intDetail3label.classList.add('mb-1');
  intDetail3label.innerText = 'Outdoor Detail*';
  intDetail3label.id = 'garagelabel';
  
  const intDetail3input = document.createElement('input');
  intDetail3input.classList.add('add-listing-input');
  intDetail3input.type = 'text';
  intDetail3input.placeholder = 'Outdoor Detail'
  intDetail3input.id = 'garageinput';
  
  interiorDetail3.appendChild(intDetail3label);
  interiorDetail3.appendChild(intDetail3input);
  
  const intDetail4label = document.createElement('label');
  intDetail4label.classList.add('mb-1');
  intDetail4label.innerText = 'Outdoor Detail*';
  intDetail4label.id = 'baselabel';
  
  const intDetail4input = document.createElement('input');
  intDetail4input.classList.add('add-listing-input');
  intDetail4input.type = 'text';
  intDetail4input.placeholder = 'Outdoor Detail'
  intDetail4input.id = 'baselabel';
  
  interiorDetail4.appendChild(intDetail4label);
  interiorDetail4.appendChild(intDetail4input);
  
  const intDetail5label = document.createElement('label');
  intDetail5label.classList.add('mb-1');
  intDetail5label.innerText = 'Outdoor Detail*';
  intDetail5label.id = 'rooflabel';
  
  const intDetail5input = document.createElement('input');
  intDetail5input.classList.add('add-listing-input');
  intDetail5input.type = 'text';
  intDetail5input.placeholder = 'Outdoor Detail'
  intDetail5input.id = 'roofinput';
  
  interiorDetail5.appendChild(intDetail5label);
  interiorDetail5.appendChild(intDetail5input);
  
  const intDetail6label = document.createElement('label');
  intDetail6label.classList.add('mb-1');
  intDetail6label.innerText = 'Outdoor Detail*';
  intDetail6label.id = 'pricelabel';
  
  const intDetail6input = document.createElement('input');
  intDetail6input.classList.add('add-listing-input');
  intDetail6input.type = 'text';
  intDetail6input.placeholder = 'Outdoor Detail'
  intDetail6input.id = 'priceinput';
  
  interiorDetail6.appendChild(intDetail6label);
  interiorDetail6.appendChild(intDetail6input);

  const btn = document.createElement('button');
  btn.classList.add('submit-btn', 'p-2')
  btn.innerText = 'Add Further details';
  btn.onclick = function(event) {
    addOutdoordetail(event);
    };
  
  btn_container.appendChild(btn);  
  
  leftSideContainer.appendChild(container);
            }
          },
          error: function(xhr, status, error) {
            // Handle error response
            console.error('Error sending data:', error);
          }
})
    } else {
      alert('Please enter at least one interior detail');
    }
  
  }
  

  function addOutdoordetail(event){
    event.preventDefault();
  
    let inputvalues = document.querySelectorAll('input');
    let Outdoor_details = [];
  
    for (let i = 0; i < inputvalues.length; i++) {
      if (inputvalues[i].value.trim() !== '') {
        Outdoor_details.push(inputvalues[i].value.trim());
      }
    }
  
    if (Outdoor_details.length !== 0) {
      console.log(Outdoor_details);
      $.ajax({
        url: '../database.php',
        method: 'POST',
        data: {OutdoorDetails:  JSON.stringify(Outdoor_details)},
        success: function(response) {
          // Handle success response
          console.log('Data sent successfully!');
          console.log(response);
      
            const form = document.getElementById('listing-form-special');
            if (form) {
              form.reset();

              
  const leftSideContainer = document.getElementById('left-side-container');
  leftSideContainer.innerText = '';
  
      // dashbord.innerHTML = 'Add Properties Listing';
      const leftsidewrapper = document.querySelector('.left-side');
  
      leftsidewrapper.style.overflow = 'scroll';
  
  const dashbord = document.querySelector('.dashbord');
  
  dashbord.innerHTML = 'Add Utilities Details';
  const container = document.createElement('div');  
  container.classList.add('add-listing-input-field');
  
  // Create a new form element
  const form1 = document.createElement("form");
  
  form1.classList.add('listing-form-container');
  form1.id = 'listing-form-special'
  container.appendChild(form1);
  
  
  // Create a new form element
  const form_group1 = document.createElement('div');
  form_group1.classList.add('form-group', 'row', 'contact-row')
  
  
  // Create a new form element
  const btn_container = document.createElement('div');
  btn_container.classList.add('container', 'd-flex', 'justify-content-center')
  
  form1.appendChild(form_group1);

  form1.appendChild(btn_container);
  
  const interiorDetail1 = document.createElement('div');
  interiorDetail1.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // create a bath container element 
  const interiorDetail2 = document.createElement('div');
  interiorDetail2.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  const interiorDetail3 = document.createElement('div');
  interiorDetail3.classList.add('col-md-4', 'col-sm-6', 'mb-3');

    // create a sqft container element 
    const interiorDetail4 = document.createElement('div');
    interiorDetail4.classList.add('col-md-4', 'col-sm-6', 'mb-3');
    
  
  // create a bath container element 
  const interiorDetail5 = document.createElement('div');
  interiorDetail5.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // create a sqft container element 
  const interiorDetail6 = document.createElement('div');
  interiorDetail6.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // append them to the second form group
  form_group1.appendChild(interiorDetail1);
  form_group1.appendChild(interiorDetail2);
  form_group1.appendChild(interiorDetail3);
  form_group1.appendChild(interiorDetail4);
  form_group1.appendChild(interiorDetail5);
  form_group1.appendChild(interiorDetail6);
  
  const intDetail1label = document.createElement('label');
  intDetail1label.classList.add('mb-1');
  intDetail1label.innerText = 'Utilities Detail*';
  intDetail1label.id = 'lotSizelabel';
  
  const intDetail1input = document.createElement('input');
  intDetail1input.classList.add('add-listing-input');
  intDetail1input.type = 'text';
  intDetail1input.placeholder = 'Utilities Detail'
  intDetail1input.id = 'lotSizeinput';
  
  interiorDetail1.appendChild(intDetail1label);
  interiorDetail1.appendChild(intDetail1input);
  
  const intDetail2label = document.createElement('label');
  intDetail2label.classList.add('mb-1');
  intDetail2label.innerText = 'Utilities Detail*';
  intDetail2label.id = 'bathlabel';
  
  const intDetail2input = document.createElement('input');
  intDetail2input.classList.add('add-listing-input');
  intDetail2input.type = 'text';
  intDetail2input.placeholder = 'Utilities Detail'
  intDetail2input.id = 'bathinput';
  
  interiorDetail2.appendChild(intDetail2label);
  interiorDetail2.appendChild(intDetail2input);
  
  const intDetail3label = document.createElement('label');
  intDetail3label.classList.add('mb-1');
  intDetail3label.innerText = 'Utilities Detail*';
  intDetail3label.id = 'garagelabel';
  
  const intDetail3input = document.createElement('input');
  intDetail3input.classList.add('add-listing-input');
  intDetail3input.type = 'text';
  intDetail3input.placeholder = 'Utilities Detail'
  intDetail3input.id = 'garageinput';
  
  interiorDetail3.appendChild(intDetail3label);
  interiorDetail3.appendChild(intDetail3input);
  
  const intDetail4label = document.createElement('label');
  intDetail4label.classList.add('mb-1');
  intDetail4label.innerText = 'Utilities Detail*';
  intDetail4label.id = 'baselabel';
  
  const intDetail4input = document.createElement('input');
  intDetail4input.classList.add('add-listing-input');
  intDetail4input.type = 'text';
  intDetail4input.placeholder = 'Utilities Detail'
  intDetail4input.id = 'baselabel';
  
  interiorDetail4.appendChild(intDetail4label);
  interiorDetail4.appendChild(intDetail4input);
  
  const intDetail5label = document.createElement('label');
  intDetail5label.classList.add('mb-1');
  intDetail5label.innerText = 'Utilities Detail*';
  intDetail5label.id = 'rooflabel';
  
  const intDetail5input = document.createElement('input');
  intDetail5input.classList.add('add-listing-input');
  intDetail5input.type = 'text';
  intDetail5input.placeholder = 'Utilities Detail'
  intDetail5input.id = 'roofinput';
  
  interiorDetail5.appendChild(intDetail5label);
  interiorDetail5.appendChild(intDetail5input);
  
  const intDetail6label = document.createElement('label');
  intDetail6label.classList.add('mb-1');
  intDetail6label.innerText = 'Utilities Detail*';
  intDetail6label.id = 'pricelabel';
  
  const intDetail6input = document.createElement('input');
  intDetail6input.classList.add('add-listing-input');
  intDetail6input.type = 'text';
  intDetail6input.placeholder = 'Utilities Detail'
  intDetail6input.id = 'priceinput';
  
  interiorDetail6.appendChild(intDetail6label);
  interiorDetail6.appendChild(intDetail6input);

  const btn = document.createElement('button');
  btn.classList.add('submit-btn', 'p-2')
  btn.innerText = 'Add Further details';
  btn.onclick = function(event) {
    addutilitiesdetail(event);
    };
  
  btn_container.appendChild(btn);  
  
  leftSideContainer.appendChild(container);
            }
          },
          error: function(xhr, status, error) {
            // Handle error response
            console.error('Error sending data:', error);
          }
})
    } else {
      alert('Please enter at least one interior detail');
    } 
  }

  

  function addutilitiesdetail(event){
    event.preventDefault();
  
    let inputvalues = document.querySelectorAll('input');
    let Utilities_details = [];
  
    for (let i = 0; i < inputvalues.length; i++) {
      if (inputvalues[i].value.trim() !== '') {
        Utilities_details.push(inputvalues[i].value.trim());
      }
    }
  
    if (Utilities_details.length !== 0) {
      console.log(Utilities_details);
      $.ajax({
        url: '../database.php',
        method: 'POST',
        data: {UtilitiesDetails: JSON.stringify(Utilities_details)},
        success: function(response) {
          // Handle success response
          console.log('Data sent successfully!');
          console.log(response);
      
            const form = document.getElementById('listing-form-special');
            if (form) {
              form.reset();

              
  const leftSideContainer = document.getElementById('left-side-container');
  leftSideContainer.innerText = '';
  
      // dashbord.innerHTML = 'Add Properties Listing';
      const leftsidewrapper = document.querySelector('.left-side');
  
      leftsidewrapper.style.overflow = 'scroll';
  
  const dashbord = document.querySelector('.dashbord');
  
  dashbord.innerHTML = 'Add Other Features';

  const container = document.createElement('div');  
  container.classList.add('add-listing-input-field');
  
  // Create a new form element
  const form1 = document.createElement("form");
  
  form1.classList.add('listing-form-container');
  form1.id = 'listing-form-special'
  container.appendChild(form1);
  
  
  // Create a new form element
  const form_group1 = document.createElement('div');
  form_group1.classList.add('form-group', 'row', 'contact-row')
  
  
  // Create a new form element
  const btn_container = document.createElement('div');
  btn_container.classList.add('container', 'd-flex', 'justify-content-center')
  
  form1.appendChild(form_group1);

  form1.appendChild(btn_container);
  
  const interiorDetail1 = document.createElement('div');
  interiorDetail1.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // create a bath container element 
  const interiorDetail2 = document.createElement('div');
  interiorDetail2.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  const interiorDetail3 = document.createElement('div');
  interiorDetail3.classList.add('col-md-4', 'col-sm-6', 'mb-3');

    // create a sqft container element 
    const interiorDetail4 = document.createElement('div');
    interiorDetail4.classList.add('col-md-4', 'col-sm-6', 'mb-3');
    
  
  // create a bath container element 
  const interiorDetail5 = document.createElement('div');
  interiorDetail5.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // create a sqft container element 
  const interiorDetail6 = document.createElement('div');
  interiorDetail6.classList.add('col-md-4', 'col-sm-6', 'mb-3');
  
  // append them to the second form group
  form_group1.appendChild(interiorDetail1);
  form_group1.appendChild(interiorDetail2);
  form_group1.appendChild(interiorDetail3);
  form_group1.appendChild(interiorDetail4);
  form_group1.appendChild(interiorDetail5);
  form_group1.appendChild(interiorDetail6);
  
  const intDetail1label = document.createElement('label');
  intDetail1label.classList.add('mb-1');
  intDetail1label.innerText = 'Other Features*';
  intDetail1label.id = 'lotSizelabel';
  
  const intDetail1input = document.createElement('input');
  intDetail1input.classList.add('add-listing-input');
  intDetail1input.type = 'text';
  intDetail1input.placeholder = 'Other Features'
  intDetail1input.id = 'lotSizeinput';
  
  interiorDetail1.appendChild(intDetail1label);
  interiorDetail1.appendChild(intDetail1input);
  
  const intDetail2label = document.createElement('label');
  intDetail2label.classList.add('mb-1');
  intDetail2label.innerText = 'Other Features*';
  intDetail2label.id = 'bathlabel';
  
  const intDetail2input = document.createElement('input');
  intDetail2input.classList.add('add-listing-input');
  intDetail2input.type = 'text';
  intDetail2input.placeholder = 'Other Features'
  intDetail2input.id = 'bathinput';
  
  interiorDetail2.appendChild(intDetail2label);
  interiorDetail2.appendChild(intDetail2input);
  
  const intDetail3label = document.createElement('label');
  intDetail3label.classList.add('mb-1');
  intDetail3label.innerText = 'Other Features*';
  intDetail3label.id = 'garagelabel';
  
  const intDetail3input = document.createElement('input');
  intDetail3input.classList.add('add-listing-input');
  intDetail3input.type = 'text';
  intDetail3input.placeholder = 'Other Features'
  intDetail3input.id = 'garageinput';
  
  interiorDetail3.appendChild(intDetail3label);
  interiorDetail3.appendChild(intDetail3input);
  
  const intDetail4label = document.createElement('label');
  intDetail4label.classList.add('mb-1');
  intDetail4label.innerText = 'Other Features*';
  intDetail4label.id = 'baselabel';
  
  const intDetail4input = document.createElement('input');
  intDetail4input.classList.add('add-listing-input');
  intDetail4input.type = 'text';
  intDetail4input.placeholder = 'Other Features'
  intDetail4input.id = 'baselabel';
  
  interiorDetail4.appendChild(intDetail4label);
  interiorDetail4.appendChild(intDetail4input);
  
  const intDetail5label = document.createElement('label');
  intDetail5label.classList.add('mb-1');
  intDetail5label.innerText = 'Other Features*';
  intDetail5label.id = 'rooflabel';
  
  const intDetail5input = document.createElement('input');
  intDetail5input.classList.add('add-listing-input');
  intDetail5input.type = 'text';
  intDetail5input.placeholder = 'Other Features'
  intDetail5input.id = 'roofinput';
  
  interiorDetail5.appendChild(intDetail5label);
  interiorDetail5.appendChild(intDetail5input);
  
  const intDetail6label = document.createElement('label');
  intDetail6label.classList.add('mb-1');
  intDetail6label.innerText = 'Other Features*';
  intDetail6label.id = 'pricelabel';
  
  const intDetail6input = document.createElement('input');
  intDetail6input.classList.add('add-listing-input');
  intDetail6input.type = 'text';
  intDetail6input.placeholder = 'Other Features'
  intDetail6input.id = 'priceinput';
  
  interiorDetail6.appendChild(intDetail6label);
  interiorDetail6.appendChild(intDetail6input);

  const btn = document.createElement('button');
  btn.classList.add('submit-btn', 'p-2')
  btn.innerText = 'Add Further details';
  btn.onclick = function(event) {
    addOtherFeature(event);
    };
  
  btn_container.appendChild(btn);  
  
  leftSideContainer.appendChild(container);

            }
          },
          error: function(xhr, status, error) {
            // Handle error response
            console.error('Error sending data:', error);
          }
})
    } else {
      alert('Please enter at least one interior detail');
    } 
  }

  

  function addOtherFeature(event){
    event.preventDefault();
  
    let inputvalues = document.querySelectorAll('input');
    let  other_features = [];
  
    for (let i = 0; i < inputvalues.length; i++) {
      if (inputvalues[i].value.trim() !== '') {
        other_features.push(inputvalues[i].value.trim());
      }
    }
  
    if (other_features.length !== 0) {
      console.log(other_features);
      $.ajax({
        url: '../database.php',
        method: 'POST',
        data: {otherFeatures: JSON.stringify(other_features)},
        success: function(response) {
          // Handle success response
          alert('your property has been listed successfully you can see it on the website')
          console.log('Data sent successfully!');
          console.log(response);
      
            const form = document.getElementById('listing-form-special');
            if (form) {
              form.reset();

              const leftSideContainer = document.getElementById('left-side-container');
              leftSideContainer.innerText = '';
                     
  const dashbord = document.querySelector('.dashbord');
  
  dashbord.innerHTML = 'Add Other Features';
            }
          },
          error: function(xhr, status, error) {
            // Handle error response
            console.error('Error sending data:', error);
          }
})
    } else {
      alert('Please enter at least one interior detail');
    }  
  }