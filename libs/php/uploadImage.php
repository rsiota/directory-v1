<?php

if(isset($_FILES['file']['name'])){


   /* Getting file name */
   $filename = $_FILES['file']['name'];

   /* Getting id of user */
   $id = $_POST['id'];

   $temp = explode('.', $_FILES['file']['name']);
   $newFilename = $id . '.' .end($temp);

   /* Location */
   $location = "../images/faces/".$newFilename;
   $imageFileType = pathinfo($location,PATHINFO_EXTENSION);
   $imageFileType = strtolower($imageFileType);

   /* Valid extensions */
   $valid_extensions = array("jpg","jpeg","png");

   /* Check file extension */
   if(in_array(strtolower($imageFileType), $valid_extensions)) {
      /* Upload file */
      if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
         $response = $newFilename;
      }
   }

   echo $response;
   exit;
}

echo 0;

?>
