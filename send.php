 <?php error_reporting(0);
$servername = "dd15412.kasserver.com";
$username = "d0222dcd";
$password = "test1234!";
$dbname = "d0222dcd";
$professions = $_POST[Profession];
$serializedprofessions = serialize($professions);

$languages = $_POST[Language];
$serializedlanguages = serialize($languages);

$food = $_POST[Food];
$serializedfood = serialize($food);

$hobby = $_POST[Hobby];
$serializedhobbys = serialize($hobby);

$citys = $_POST[City];
$serializedcitys = serialize($citys);




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO userdata (Name, Firstname, Gender, Mail, Picture, Motto, Profession, Language, Food, Hobby, City)
VALUES ('$_POST[Name]','$_POST[firstName]',  '$_POST[Gender]', '$_POST[Mail]', '$_POST[img_link]', '$_POST[Motto]', '$serializedprofessions', '$serializedlanguages','$serializedfood','$serializedhobbys','$serializedcitys')";

if ($conn->query($sql) === TRUE) {
require('success.html');

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

error_reporting(0);
echo($_PRINT);
 
?> 