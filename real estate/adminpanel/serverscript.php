<?php
session_start();

// Replace the database credentials with your own
$servername = "localhost";
$username = "u886318321_Nabisalay";
$password = "Nabisalayroot1";
$dbname = "u886318321_bw_property_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the username and password are provided in the POST request
if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Prepare and bind the statement to prevent SQL injection
  $stmt = $conn->prepare("SELECT * FROM admin_panel_pass WHERE username = ? AND password = ?");
  $stmt->bind_param("ss", $username, $password);

  // Execute the statement
  $stmt->execute();

  // Get the result
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    // The credentials are valid

    // Generate a session token
    function generateSessionToken() {
      $length = 32;
      $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $token = '';

      for ($i = 0; $i < $length; $i++) {
        $randomIndex = mt_rand(0, strlen($characters) - 1);
        $token .= $characters[$randomIndex];
      }

      return $token;
    }

    // Set the session variables
    $_SESSION['loggedin'] = true;
    $_SESSION['sessionToken'] = generateSessionToken();

    // Return the success response with the session token
    echo json_encode(['success' => true, 'sessionToken' => $_SESSION['sessionToken']]);
    exit;
  } else {
    // The credentials are invalid
    echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
    exit;
  }
}
// this is for the contact us form 
// Run the SQL query to get the client reviews from the database
$sql_contact_form = "SELECT * FROM contact_us_form_info ";
$result_contact_form = $conn->query($sql_contact_form);

// Create an array to hold the properties data
$contact_form_info = array();

// Check if the query returned any results
if ($result_contact_form->num_rows > 0) {
  // Loop through the results and add each property to the array
  while($row = $result_contact_form->fetch_assoc()) {
    $contact_form_info[] = $row;
  }
}

// this is for the shcdeule form 
// Run the SQL query to get the client reviews from the database
$sql_Schedule_form = "SELECT * FROM tour_contact_info ";
$result_Schedule_form = $conn->query($sql_Schedule_form);

// Create an array to hold the properties data
$Schedule_form_info = array();

// Check if the query returned any results
if ($result_Schedule_form->num_rows > 0) {
  // Loop through the results and add each property to the array
  while($row = $result_Schedule_form->fetch_assoc()) {
    $Schedule_form_info[] = $row;
  }
}

// this is for the news letter form 
// Run the SQL query to get the client reviews from the database
$sql_newsletter_subscription = "SELECT * FROM newsletter_subscription ";
$result_newsletter_form = $conn->query($sql_newsletter_subscription);

// Create an array to hold the properties data
$newsletter_form_info = array();

// Check if the query returned any results
if ($result_newsletter_form->num_rows > 0) {
  // Loop through the results and add each property to the array
  while($row = $result_newsletter_form->fetch_assoc()) {
    $newsletter_form_info[] = $row;
  }
}

// this is for the add listing msg form 
// Run the SQL query to get the client reviews from the database
$sql_listing_info = "SELECT * FROM property_listing_contact_info ";
$result_listing_info = $conn->query($sql_listing_info);

// Create an array to hold the properties data
$listing_form_info = array();

// Check if the query returned any results
if ($result_listing_info->num_rows > 0) {
  // Loop through the results and add each property to the array
  while($row = $result_listing_info->fetch_assoc()) {
    $listing_form_info[] = $row;
  }
}

// Set the content type header to application/json
header('Content-Type: application/json');

$contact_form_data = array(
  'contact_form_info' => $contact_form_info,
  'Schedule_form_info' => $Schedule_form_info,
  'newsletter_form_info' => $newsletter_form_info,
  'listing_form_info' => $listing_form_info
);
echo json_encode($contact_form_data);
// Close the database connection
$conn->close();
?>
