
// this is for ajax navbar 


$(document).ready(function () {
  $("#navbar-container").load("navbar.html");
});

// this is for ajax footer 

$(document).ready(function () {
  $("#footer-container").load("footer.html");
});

$(document).ready(function () {
  $("#laoding-container").load("loading.html");
});


// this is for the btn effect of client page start
let see_btn = document.querySelector("#see-more")
let review_btn = document.querySelector("#add-review-btn")
  
function see_more_mouseenter(){

  review_btn.style.background ='#B78500';
  review_btn.style.color = '#fff';
}
function see_more_mouseleave(){

  review_btn.style.background ='#fff';
  review_btn.style.color = '#B78500';
}

function add_more_mouseenter(){

  see_btn.style.background ='#fff';
  see_btn.style.color = '#B78500';
  see_btn.style.border = '1px solid #B78500';
}
function add_more_mouseleave(){

  see_btn.style.background ='#B78500';
  see_btn.style.color = '#fff';
}

// this is for the btn effect of client page end

// this is for the accordion of FAQS page 

let accordion = document.getElementsByClassName("faqs-accordion");
let default_open = document.getElementsByClassName("default-open")[0];
let i;

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var icon = this.querySelector(".triangle-icon i");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon.classList.remove("active");
            icon.classList.add("inactive");
        } else {
            panel.style.display = "block";
            icon.classList.remove("inactive");
            icon.classList.add("active");
            default_open.classList.remove("default-open");
        }
    });
}

// Simulate a click on the default-open element
if (default_open) {
    default_open.click();
}




// this is for sign up form 
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  // this is for the validation of name 
  const name_validation = /^[a-zA-Z]{2,}$/;

  // this is for the validation of email 
  const email_validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A simple regex for validating email addresses

  // this is for validation of pakistani phone number 
  const Phone_validation = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
  
  // this is for the validation of message  
  const message_Validation = /^.*[.?!][^]*$/;

 




// this is a validation contact form on the home page 

$(document).ready(function() {

let currentUrl = window.location.href;
if (currentUrl.indexOf('index.html') > -1 || currentUrl.indexOf('contact-us.html') > -1 || currentUrl.indexOf('properties-details.html') > -1 ) {
  function formvalidation(){
    const first_name = document.querySelector("#first-name-input");
    const last_name = document.querySelector("#last-name-input");
    const email_address = document.querySelector("#email-input");
    const phone_number = document.querySelector("#phone-input");
    const message = document.querySelector("#message-input");

    if(!name_validation.test(first_name.value.trim())){
      first_name.style.border = "1px solid red"
      first_name.previousElementSibling.innerText = "Please write a valid name*"
      first_name.previousElementSibling.style.color = "red"
      first_name.focus();
      return false ;
    }else if(!name_validation.test(last_name.value.trim())){
      last_name.style.border = "1px solid red"
      last_name.previousElementSibling.innerText = "Please write a valid name*"
      last_name.previousElementSibling.style.color = "red"
      last_name.focus();
      return false ;
    }else if(!email_validation.test(email_address.value.trim())){
      email_address.style.border = "1px solid red"
      email_address.previousElementSibling.innerText = "Please enter a valid email address*"
      email_address.previousElementSibling.style.color = "red"
      email_address.focus();
      return false ;
    }else if(!Phone_validation.test(phone_number.value.trim())){
      phone_number.style.border = "1px solid red"
      phone_number.previousElementSibling.innerText = "Please enter a valid Phone number*"
      phone_number.previousElementSibling.style.color = "red"
      phone_number.focus();
      return false ;
    }else if(!message_Validation.test(message.value.trim())){
      message.style.border = "1px solid red"
      message.previousElementSibling.innerText = "Please enter a message of at least one sentence*"
      message.previousElementSibling.style.color = "red"
      message.focus();
      return false ;
    }else {
      confirm("We have recieved your message we will contact you as soon as possible Thank you for chosing us")
      // this is for first name 
      first_name.style.border = "none"
      first_name.previousElementSibling.innerText = "Fisrt Name*"
      first_name.previousElementSibling.style.color = "#4F4E4E"

      // this is for last name 
      last_name.style.border = "none"
      last_name.previousElementSibling.innerText = "Last Name*"
      last_name.previousElementSibling.style.color = "#4F4E4E"

      // this is for email address
      email_address.style.border = "none"
      email_address.previousElementSibling.innerText = "Email Address*"
      email_address.previousElementSibling.style.color = "#4F4E4E"

      // this is for phone number 
      phone_number.style.border = "none"
      phone_number.previousElementSibling.innerText = "Phone Number*"
      phone_number.previousElementSibling.style.color = "#4F4E4E"

      // this is for message 
      message.style.border = "none"
      message.previousElementSibling.innerText = "Message*"
      message.previousElementSibling.style.color = "#4F4E4E"

      const contact_info = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email_address.value,
        phone_number: phone_number.value,
        message: message.value
      };
    console.log(contact_info);
    $.ajax({
      url: 'database.php', // Replace with the actual URL of your server-side script
      method: 'POST',
      data: {add_contact_info: JSON.stringify(contact_info) },
      
      success: function(response) {
        // Handle the success response

      },
      error: function(xhr, status, error) {
        // Handle the error response
        console.error('Error saving add_listing_messag:', error);
      }
    });

      form_container.reset();
      return true;
    }
  }
  }


const form_container = document.querySelector("#contact-form");
if (form_container) {
  // run code that references form_container
  form_container.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the default form submission
    formvalidation(); // call the form validation function
  });
  
}

});


// this is form validation of schedule tour 

$(document).ready(function() {
let currentUrl = window.location.href;

if (currentUrl.indexOf('properties-details.html') > -1 ) {

  function schedule_form_validation(){
    const first_name = document.querySelector("#schedule-first-name");
    const last_name = document.querySelector("#schedule-last-name");
    const email_address = document.querySelector("#schedule-email");
    const phone_number = document.querySelector("#schedule-phone");
    const date = document.querySelector('#date-info');
    const selectedDay = document.querySelector('#day-info');
    const year = document.querySelector('#year-info');
    const time = document.querySelector('#time-info');
    const message = document.querySelector("#schedule-message");



    if(!name_validation.test(first_name.value.trim())){
      first_name.style.border = "1px solid red"
      first_name.previousElementSibling.innerText = "Please write a valid name*"
      first_name.previousElementSibling.style.color = "red"
      
      first_name.focus();
      
      return false ;
    }else if(!name_validation.test(last_name.value.trim())){
      last_name.style.border = "1px solid red"
      last_name.previousElementSibling.innerText = "Please write a valid name*"
      last_name.previousElementSibling.style.color = "red"
      last_name.focus();
      return false ;
    }else if(!email_validation.test(email_address.value.trim())){
      email_address.style.border = "1px solid red"
      email_address.previousElementSibling.innerText = "Please enter a valid email address*"
      email_address.previousElementSibling.style.color = "red"
      email_address.focus();
      return false ;
    }else if(!Phone_validation.test(phone_number.value.trim())){
      phone_number.style.border = "1px solid red"
      phone_number.previousElementSibling.innerText = "Please enter a valid Phone number*"
      phone_number.previousElementSibling.style.color = "red"
      phone_number.focus();
      return false ;
    }else if(date.value === 'Date'){
      date.style.border = "1px solid red"
      date.previousElementSibling.innerText = "Please Select Date*"
      date.previousElementSibling.style.color = "red"
      date.focus();
      return false ;
    }else if(selectedDay.value === 'Days'){
      selectedDay.style.border = "1px solid red"
      selectedDay.previousElementSibling.innerText = "Please Select Day*"
      selectedDay.previousElementSibling.style.color = "red"
      selectedDay.focus();
      return false ;
    }else if(time.value === 'Select a time'){
      time.style.border = "1px solid red"
      time.previousElementSibling.innerText = "Please Select time*"
      time.previousElementSibling.style.color = "red"
      time.focus();
      return false ;
    }
    else if(!message_Validation.test(message.value.trim())){
      message.style.border = "1px solid red"
      message.previousElementSibling.innerText = "Please enter a message of at least one sentence*"
      message.previousElementSibling.style.color = "red"
      message.focus();
      return false ;
    }else {
      confirm("We have recieved your message we will contact you as soon as possible Thank you for chosing us")

            // this is for first name 
            first_name.style.border = "none"
            first_name.previousElementSibling.innerText = "Fisrt Name*"
            first_name.previousElementSibling.style.color = "#4F4E4E"

            // this is for last name 
            last_name.style.border = "none"
            last_name.previousElementSibling.innerText = "Last Name*"
            last_name.previousElementSibling.style.color = "#4F4E4E"
      
            // this is for email address
            email_address.style.border = "none"
            email_address.previousElementSibling.innerText = "Email Address*"
            email_address.previousElementSibling.style.color = "#4F4E4E"
      
            // this is for phone number 
            phone_number.style.border = "none"
            phone_number.previousElementSibling.innerText = "Phone Number*"
            phone_number.previousElementSibling.style.color = "#4F4E4E"
            
            // this is for phone number 
            date.style.border = "none"
            date.previousElementSibling.innerText = "Select Date*"
            date.previousElementSibling.style.color = "#4F4E4E"

            // this is for phone number 
            selectedDay.style.border = "none"
            selectedDay.previousElementSibling.innerText = "Select Day*"
            selectedDay.previousElementSibling.style.color = "#4F4E4E"

            // this is for phone number 
            time.style.border = "none"
            time.previousElementSibling.innerText = "Select Time*"
            time.previousElementSibling.style.color = "#4F4E4E"
      
            // this is for message 
            message.style.border = "none"
            message.previousElementSibling.innerText = "Message*"
            message.previousElementSibling.style.color = "#4F4E4E"

            const Schedule_contact_info = {
              first_name: first_name.value,
              last_name: last_name.value,
              email: email_address.value,
              phone_number: phone_number.value,
              date: date.value,
              selectedDay: selectedDay.value,
              year: year.value,
              time: time.value,
              message: message.value
            };
          console.log(Schedule_contact_info);
          $.ajax({
            url: 'database.php', // Replace with the actual URL of your server-side script
            method: 'POST',
            data: {add_Schedule_contact_info: JSON.stringify(Schedule_contact_info) },
            
            success: function(response) {
              // Handle the success response
      
            },
            error: function(xhr, status, error) {
              // Handle the error response
              console.error('Error saving add_Schedule_contact_info:', error);
            }
          });

      form_container.reset();
      return true;
    }
  }

const form_container = document.querySelector("#schedule-form");
if (form_container) {
  // run code that references form_container
  form_container.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the default form submission
    schedule_form_validation() // call the form validation function
  });
  
}
}
});

// this is form validation of schedule end 



// this is form validation of contact us page end



// this is to make modal dynamically work  for view more btn on the card

$('.view-profile').on('click', function(e) {
  e.preventDefault();
  var img = $(this).data('img');
  var title = $(this).data('title');
  var description = $(this).data('description');
  var phone_no = $(this).data('phone_no');
  var email = $(this).data('email');

  $('#exampleModal img').attr('src', img);
  $('#exampleModal .modal-title').text(title);
  $('#exampleModal .modal-body .indiviual-description').text(description);
  $('#exampleModal .modal-body .phone-no').text(phone_no);
  $('#exampleModal .modal-body .email').text(email);
  $('#exampleModal .modal-body .email').attr('href', `mailto:${email}`);
  $('#exampleModal .modal-body .phone-no').attr('href', `tel:${phone_no}`);
});
// this is to make modal dynamically work  for view more btn on the card

$('.view-more').on('click', function(e) {
  e.preventDefault();
  var img = $(this).data('img');
  var title = $(this).data('title');
  var description = $(this).data('description');
  var phone_no = $(this).data('phone_no');
  var email = $(this).data('email');

  $('#serviceModal img').attr('src', img);
  $('#serviceModal .modal-title').text(title);
  $('#serviceModal .modal-body .indiviual-description').text(description);
  $('#serviceModal .modal-body .phone-no').text(phone_no);
  $('#serviceModal .modal-body .email').text(email);
  $('#serviceModal .modal-body .email').attr('href', `mailto:${email}`);
  $('#serviceModal .modal-body .phone-no').attr('href', `tel:${phone_no}`);
});




let selectedStars = 0;
let currentUrl = window.location.href;
if (currentUrl.indexOf('clientreviewform.html') > -1) {
const form_container1 = document.querySelector('.ratting-form-container');
const stars = form_container1.querySelectorAll('.rating i');

// this is a funciton for rating control 
function rateStars(starNumber) {

  selectedStars = starNumber;

    for (let i = 0; i < stars.length; i++) {
      if (i < starNumber) {
        stars[i].classList.add('fas');
        stars[i].classList.remove('far');
      } else {
        stars[i].classList.add('far');
        stars[i].classList.remove('fas');
      }
    }
  }
}




  function submit_review(event){
    event.preventDefault();
    let name = document.querySelector('#review-name').value;
    let status = document.querySelector("#review-status").value;
    let complement = document.querySelector("#review-complement").value;
    let description = document.querySelector('#review-description').value;
    let imgInput = document.querySelector('#review-img');
    
    const nameregex = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/g;

    const statusregex = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/g;

    const complementregex = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/g;

    // this is to select the label of all input field to show the error 
   let namelabel = document.querySelector('#name-label');
   let statuslabel = document.querySelector('#status-label');
   let rattinglabel = document.querySelector('#ratting-label');
   let complementlabel = document.querySelector('#complement-label');
   let reviewlabel = document.querySelector('#review-label');
   let imglabel = document.querySelector('#img-label');

  //  this is for the validation of the name 
   if(!nameregex.test(name.trim())){
    namelabel.innerText = "Please write a valid status (e.g Happy Seller)";
    namelabel.style.color = "red";
    document.querySelector('#review-name').style.border= " 3px solid red"
    
    return false;
  }else{
    namelabel.innerText = "Name*";
    namelabel.style.color = "rgba(255, 255, 255, 0.8)";
    document.querySelector('#review-name').style.border= " 3px solid green"
  }

// this is for the valdition of client status
   if(!statusregex.test(status.trim())){
    statuslabel.innerText = "Please write a valid status (e.g Happy Seller)";
    statuslabel.style.color = "red";
    document.querySelector("#review-status").style.border= " 3px solid red"
    return false;
  }else{
    statuslabel.innerText = "Status*";
    statuslabel.style.color = "rgba(255, 255, 255, 0.8)";
    document.querySelector("#review-status").style.border= " 3px solid green"
  }

  // this is for the validation of client complement 
   if(!complementregex.test(complement)){
    complementlabel.innerText = "Please write a valid complement  (e.g Quality Work)";
    complementlabel.style.color = "red";
    document.querySelector("#review-complement").style.border= " 3px solid red"
    return false;
  }else{
    complementlabel.innerText = "Complement*";
    complementlabel.style.color = "rgba(255, 255, 255, 0.8)";
    document.querySelector("#review-complement").style.border= " 3px solid green"
  }

  // this is for the validation of client rating
if(selectedStars === 0){
  rattinglabel.innerText = "Please fill your rating ";
  rattinglabel.style.color = "red";
  document.querySelector("#review-rating").style.border= " 3px solid red"
  return false;
}
else{
  rattinglabel.innerText = "Your Rating*";
  rattinglabel.style.color = "rgba(255, 255, 255, 0.8)";
  document.querySelector("#review-rating").style.border= " 3px solid green"
}

//  this is for the validation of client message 
if(description.trim().length < 120  ){
  reviewlabel.innerText = `${'Please write a review with atleast 120 words. Your current word count is' + ' ' + description.trim().length+ '.' }`;
  reviewlabel.style.color = "red";
  document.querySelector("#review-description").style.border= " 3px solid red "  
  return false;
}else if(description.trim().length > 170){
  reviewlabel.innerText = `${'Please write a review with a maximum of 170 words.  Your current word count is' + ' ' + description.trim().length + '.'} `;
  reviewlabel.style.color = "red";
  document.querySelector("#review-description").style.border= " 3px solid red "  
} else{
  reviewlabel.innerText = "Description*";
  reviewlabel.style.color = "rgba(255, 255, 255, 0.8)";
  document.querySelector("#review-description").style.border= " 3px solid green "  
}

    const reader = new FileReader();

    // this is for the validation of input image
if (imgInput.files && imgInput.files[0]) {
  imglabel.innerText = "Image";
  imglabel.style.color = "rgba(255, 255, 255, 0.8)";
  document.querySelector("#review-img").style.border= " 3px solid green "  

} else {
  imglabel.innerText = "Please choose an image first";
  imglabel.style.color = "red";
  document.querySelector("#review-img").style.border= " 3px solid red "  

}
      reader.addEventListener('load', function() {

        let review = {
          img: reader.result,
          name: name,
          status: status,
          complement: complement,
          review: description,
          rating: selectedStars,
        };
        console.log(review)
        $.ajax({
          url: 'database.php', // Replace with the actual URL of your server-side script
          method: 'POST',
          data: { review: JSON.stringify(review) },
          success: function(response) {
            // Handle the success response
            confirm(`${'Your Review has been saved successfully. You can see it on the page and if you do not see it please try pressing "window logo + R" or refresh the page'}`);
            location.href = 'index.html';
          },
          error: function(xhr, status, error) {
            // Handle the error response
            console.error('Error saving review:', error);
          }
        });

      });
      reader.readAsDataURL(imgInput.files[0]);
    }


    // this is for add property form 
    
  function submit_add_listing(event){
    event.preventDefault();
    let listing_name = document.querySelector('#listing-name');
    let listing_email = document.querySelector("#listing-email");
    let listing_phone = document.querySelector("#listing-phone");
    let listing_location = document.querySelector('#listing-location');
    let listing_concern = document.querySelector('#listing-description');
    
    const nameregex = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/g;

    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

    const phoneregex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;

    // this is to select the label of all input field to show the error 
   let namelabel = document.querySelector('#name-label1');
   let emaillabel = document.querySelector('#email-label');
   let phonelabel = document.querySelector('#phone-label');
   let locationlabel = document.querySelector('#loction-label');
   let concernlabel = document.querySelector('#concern-label');


  //  this is for the validation of the name 
   if(!nameregex.test(listing_name.value.trim())){
    namelabel.innerText = "Please write your full name";
    namelabel.style.color = "red";
    listing_name.style.border= " 3px solid red"
    
    return false;
  }else{
    namelabel.innerText = "Name*";
    namelabel.style.color = "rgba(255, 255, 255, 0.8)";
    listing_name.style.border= " 3px solid green"
  }

// this is for the valdition of client status
   if(!emailregex.test(listing_email.value.trim())){
    emaillabel.innerText = "Enter valid Email Address";
    emaillabel.style.color = "red";
    listing_email.style.border= " 3px solid red"
    return false;
  }else{
    emaillabel.innerText = "Email*";
    emaillabel.style.color = "rgba(255, 255, 255, 0.8)";
    listing_email.style.border= " 3px solid green"
  }

  // this is for the validation of client complement 
   if(!phoneregex.test(listing_phone.value.trim())){
    phonelabel.innerText = "Please write a valid Phone number";
    phonelabel.style.color = "red";
    listing_phone.style.border= " 3px solid red"
    return false;
  }else{
    phonelabel.innerText = "Phone Number*";
    phonelabel.style.color = "rgba(255, 255, 255, 0.8)";
    listing_phone.style.border= " 3px solid green"
  }
  // console.log(listing_location.value.trim())
   if(listing_location.value.trim() === ""){
    locationlabel.innerText = "Please enter the location of the property (e.g Quality Work)";
    locationlabel.style.color = "red";
    listing_location.style.border= " 3px solid red"
  
    return false;
  }else{
    locationlabel.innerText = "Enter property location*";
    locationlabel.style.color = "rgba(255, 255, 255, 0.8)";
    listing_location.style.border= " 3px solid green"
  }
//  this is for the validation of client message 
if(listing_concern.value.trim().length < 120  ){
  concernlabel.innerText = `${'Please write a concern with atleast 120 words. Your current word count is' + ' ' + listing_concern.value.trim().length+ '.' }`;
  concernlabel.style.color = "red";
 listing_concern.style.border= " 3px solid red "  
  return false;
}else{
  concernlabel.innerText = "Please enter your concern*";
  concernlabel.style.color = "rgba(255, 255, 255, 0.8)";
  listing_concern.style.border= " 3px solid green "  
}



//       reader.addEventListener('load', function() {

        let add_listing_message = { 
          listing_name: listing_name.value,
          listing_email: listing_email.value,
          listing_phone: listing_phone.value,
          location: listing_location.value,
          concern: listing_concern.value,
        };
        console.log(add_listing_message)
        $.ajax({
          url: 'database.php', // Replace with the actual URL of your server-side script
          method: 'POST',
          data: { add_listing_message1: JSON.stringify(add_listing_message) },
          
          success: function(response) {
            // Handle the success response
            confirm(`${'Thank you for your message. We have received it and will get back to you within two to three business days.'}`);
            location.href = 'properties.html';
          },
          error: function(xhr, status, error) {
            // Handle the error response
            console.error('Error saving add_listing_messag:', error);
          }
        });
      };
      // });
    // }
  

    // to handle the search on the properties page 

// filter for products

function Sale() {
  let cardbody = document.getElementsByClassName('card-p');
  Array.from(cardbody).forEach(function (element) {
    element.style.display = 'none';
    if (element.classList.contains('Sale')) {
      element.style.display = 'block';
    }
  });
};
function Rent() {
  let cardbody = document.getElementsByClassName('card-p');
  Array.from(cardbody).forEach(function (element) {
    element.style.display = 'none';
    if (element.classList.contains('Rent')) {
      element.style.display = 'block';
    }
  });
};

function Flat() {
  let cardbody = document.getElementsByClassName('card-p');
  Array.from(cardbody).forEach(function (element) {
    element.style.display = 'none';
    if (element.classList.contains('Bungalow')) {
      element.style.display = 'block';
    }
  });
};

function Appartment() {
  let cardbody = document.getElementsByClassName('card-p');
  Array.from(cardbody).forEach(function (element) {
    element.style.display = 'none';
    if (element.classList.contains('Apartment')) {
      element.style.display = 'block';
    }
  });
};

function allcollection() {
  let cardbody = document.getElementsByClassName('card-p');
  Array.from(cardbody).forEach(function (element) {
    element.style.display = 'block';

  });
};






$(document).ready(function (){
  const urlParams = new URLSearchParams(window.location.search);
const primarykey = urlParams.get('data');

const primary_no = JSON.parse((primarykey));

  const main_data_base = fetch('database.php')
.then(response => response.json())
.then(data => { 
// this is for images 
  const all_images = data.all_sql_property_images;

  // this is for overview section 
  const property_overview = data.all_sql_property_overview;

  // this is for overview section 
const property_google_location = data.all_sql_property_google_location;

  // this is for overview section 
  const detail_description = data.all_sql_detail_description;

  // this is for overview section 
  const property_location = data.all_sql_property_location;

  // this is for overview section 
  const property_details = data.all_sql_property_details;

  // this is for overview section 
  const interior_details = data.all_sql_interior_details;

  // this is for overview section 
  const outdoor_details = data.all_sql_outdoor_details;
  // this is for overview section 
  const property_utilities = data.all_sql_property_utilities;
  // this is for overview section 
  const properties_other_features = data.all_sql_properties_other_features;
  // this is for overview section 
  const property_past_prices = data.all_sql_property_past_prices;



const img1 = document.getElementById('sub-img1');
const img2 = document.getElementById('sub-img2');
const img3 = document.getElementById('sub-img3');
const img4 = document.getElementById('sub-img4');
const img5 = document.getElementById('sub-img5');

const carousel_item = document.getElementsByClassName('carousel-item');

if(primary_no){

for(let i = 0; i < all_images.length; i++){
  if (primary_no == all_images[i].all_properties_id){
    
    const images = all_images[i];
    const imagecount = [];
    for(let j = 0; j < 4; j++){

    const current_img = `image${j + 1}_url`;
    console.log(current_img);
 

    // this is for carousel images
    if (images[current_img] !== '') {
      imagecount.push(images[current_img]);
      console.log(imagecount);
      console.log(Object.keys(imagecount).length)
    } else {
      console.log('error')
    }
 
  
}
console.log(imagecount)
for(let x = 0; x < Object.keys(imagecount).length; x++){
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (x === 0) {
    carouselItem.classList.add('active');
  }

  const carouselOverlay = document.createElement('div');
  carouselOverlay.classList.add('carousel-overlay');

  const carouselImg = document.createElement('img');
  carouselImg.classList.add('d-block', 'w-100', 'img-fluid');
  carouselImg.id = `carousel-img${x + 1}`;
  carouselImg.src = imagecount[x];
  carouselImg.style.maxHeight = '90vh';
  carouselImg.alt = '...';

  const carouselCaption = document.createElement('div');
  carouselCaption.classList.add('carousel-caption', 'd-none', 'd-md-block', 'd-flex', 'align-items-center', 'justify-content-center');

  carouselItem.appendChild(carouselOverlay);
  carouselItem.appendChild(carouselImg);
  carouselItem.appendChild(carouselCaption);

  // Append the carousel item to the container
  const carouselContainer = document.getElementById('carousel-inner-items');
  carouselContainer.appendChild(carouselItem);
}
const carousel_prev_btn = document.getElementById('carousel_prev_btn');
const carousel_next_btn = document.getElementById('carousel_next_btn');

if(Object.keys(imagecount).length === 1){
  carousel_prev_btn.style.display = "none";
  carousel_next_btn.style.display = "none";
}else{
  carousel_prev_btn.style.display = "block";
  carousel_next_btn.style.display = "block";
}
  }
  }
const updated_on = document.querySelector('#Updated-on');
const Bedrooms = document.querySelector('#Bedrooms')
const Bathrooms = document.querySelector('#Bathrooms');
const Garages = document.querySelector('#Garages')
const sqft = document.querySelector('#sqft')

for(let i = 0 ; i < property_overview.length ; i++){
  const overview = property_overview[i];
  if(primary_no === overview.all_properties_id){
    updated_on.innerHTML = 	overview.Updated_on;
    Bedrooms.innerHTML = 	`${overview.Bedrooms} Bedrooms`;
    Bathrooms.innerHTML = 	`${overview.Bathrooms} Bedrooms`;
    Garages.innerHTML = 	`${overview.Garages} Garages`;
    sqft.innerHTML = 	overview.sqft;
  }

}

const google_location = document.querySelector('#google-location')

for(let i = 0 ; i < property_google_location.length ; i++){

  const location = property_google_location[i];
  if(primary_no === location.all_properties_id){
    google_location.src = location.src;
  }

}

const property_detail_description = document.querySelector('#detail-description')

for(let i = 0 ; i < detail_description.length ; i++){

  const description = detail_description[i];
  if(primary_no === description.all_properties_id){
    property_detail_description.innerHTML = description.detail_description;
  }

}

const address = document.querySelector('#Address');
const City = document.querySelector('#City');
const Area = document.querySelector('#Area');
const Country = document.querySelector('#Country');
const State = document.querySelector('#State');
const Zip = document.querySelector('#Zip');

for(let i = 0 ; i < property_location.length ; i++){
  let location = property_location[i];
  if (primary_no === location.all_properties_id){
    address.innerHTML = '\u00A0' + location.address;
    City.innerHTML = '\u00A0' + location.city;
    Area.innerHTML = '\u00A0' + location.area;
    Country.innerHTML = '\u00A0' + location.country;
    State.innerHTML = '\u00A0' + location.state;
    Zip.innerHTML = '\u00A0' + location.zip;
  }
}

const Lot_Size = document.querySelector('#Lot-Size');
const detail_bath = document.querySelector('#detail-bath');
const detail_garage = document.querySelector('#detail-garage');
const basement = document.querySelector('#basement');
const roofing = document.querySelector('#roofing');

const detail_price = document.querySelector('#detail-price');
const detail_room = document.querySelector('#detail-room');
const garage_size = document.querySelector('#garage-size');
const externnal_construction = document.querySelector('#externnal-construction');
const structure_type = document.querySelector('#structure-type');

const property_size = document.querySelector('#property-size');
const detail_beds = document.querySelector('#detail-beds');
const detail_year_built = document.querySelector('#detail-year-built');
const exterior_material = document.querySelector('#exterior-material');
const floor_no = document.querySelector('#floor-no');

for(let i = 0 ; i < property_details.length ; i++){
  let details = property_details[i];
  if(primary_no === details.all_properties_id){
    Lot_Size.innerHTML = details.Property_Lot_Size;
    detail_bath.innerHTML = details.Bathrooms;
    detail_garage.innerHTML = details.Garages;
    basement.innerHTML = details.Basement;
    roofing.innerHTML = details.Roofing;
    detail_price.innerHTML = details.Price;
    detail_room.innerHTML = details.Rooms;
    garage_size.innerHTML = details.Garage_Size;
    externnal_construction.innerHTML = details.External_Construction;
    structure_type.innerHTML = details.Structure_Type;
    property_size.innerHTML = details.Property_Size;
    detail_beds.innerHTML = details.Bedrooms;
    detail_year_built.innerHTML = details.Year_Built;
    exterior_material.innerHTML = details.Exterior_Material;
    floor_no.innerHTML = details.Floors_No;
  }
}

const interior_detail1 = document.querySelector('#interior-deteail1') 
const interior_detail2 = document.querySelector('#interior-deteail2')
const interior_detail3 = document.querySelector('#interior-deteail3')
const interior_detail4 = document.querySelector('#interior-deteail4')

for(let i = 0 ; i <interior_details.length; i++){
  const interior_detail = interior_details[i];
  if(primary_no === interior_detail.all_properties_id){
  interior_detail1.innerHTML =  interior_detail.Interior_Details1;
  interior_detail2.innerHTML =  interior_detail.Interior_Details2;
  interior_detail3.innerHTML =  interior_detail.Interior_Details3;
  interior_detail4.innerHTML =  interior_detail.Interior_Details4;
}
}

const outdoor_detail1 = document.querySelector('#outdoor-deteail1') 
const outdoor_detail2 = document.querySelector('#outdoor-deteail2')
const outdoor_detail3 = document.querySelector('#outdoor-deteail3')
const outdoor_detail4 = document.querySelector('#outdoor-deteail4')
const outdoor_detail5 = document.querySelector('#outdoor-deteail5')

for(let i = 0 ; i <outdoor_details.length; i++){
  const outdoor_detail = outdoor_details[i];
  if(primary_no === outdoor_detail.all_properties_id){
    outdoor_detail1.innerHTML =  outdoor_detail.Outdoor_Details1;
    outdoor_detail2.innerHTML =  outdoor_detail.Outdoor_Details2;
    outdoor_detail3.innerHTML =  outdoor_detail.Outdoor_Details3;
    outdoor_detail4.innerHTML =  outdoor_detail.Outdoor_Details4;
    outdoor_detail5.innerHTML =  outdoor_detail.Outdoor_Details5;
}
}

const utilities_detail1 = document.querySelector('#utilities-deteail1') 
const utilities_detail2 = document.querySelector('#utilities-deteail2')
const utilities_detail3 = document.querySelector('#utilities-deteail3')
const utilities_detail4 = document.querySelector('#utilities-deteail4')
const utilities_detail5 = document.querySelector('#utilities-deteail5')
const utilities_detail6 = document.querySelector('#utilities-deteail6')

for(let i = 0 ; i <property_utilities.length; i++){
  const utilities_detail = property_utilities[i];
  if(primary_no === utilities_detail.all_properties_id){
    utilities_detail1.innerHTML =  utilities_detail.utilities1;
    utilities_detail2.innerHTML =  utilities_detail.utilities2;
    utilities_detail3.innerHTML =  utilities_detail.utilities3;
    utilities_detail4.innerHTML =  utilities_detail.utilities4;
    utilities_detail5.innerHTML =  utilities_detail.utilities5;
    utilities_detail6.innerHTML =  utilities_detail.utilities6;
}
}

const other_detail1 = document.querySelector('#other-deteail1') 
const other_detail2 = document.querySelector('#other-deteail2')
const other_detail3 = document.querySelector('#other-deteail3')
const other_detail4 = document.querySelector('#other-deteail4')
const other_detail5 = document.querySelector('#other-deteail5')
const other_detail6 = document.querySelector('#other-deteail6')

for(let i = 0 ; i <properties_other_features.length; i++){
  const other_features = properties_other_features[i];
  if(primary_no === other_features.all_properties_id){
    other_detail1.innerHTML =  other_features.Other_Features1;
    other_detail2.innerHTML =  other_features.Other_Features2;
    other_detail3.innerHTML =  other_features.Other_Features3;
    other_detail4.innerHTML =  other_features.Other_Features4;
    other_detail5.innerHTML =  other_features.Other_Features5;
    other_detail6.innerHTML =  other_features.Other_Features6;
}
}
let currentUrl = window.location.href;
if (currentUrl.indexOf('properties-details.html') > -1 ) {
  
 for(let i = 0; i < property_past_prices.length; i++){
 const past_price = property_past_prices[i]
 if(primary_no === past_price.all_properties_id){
  // this is for the graph price of properties 
  const xArray = [past_price.price_date1, past_price.price_date2, past_price.price_date3];
  const yArray = [past_price.price_value1, past_price.price_value2, past_price.price_value3];
  
  const graph_data = [{
    x:xArray,
    y:yArray,
    type:"bar"
  }];

  Plotly.newPlot("myPlot", graph_data);
}
}
  
  
 


}

}
})
})