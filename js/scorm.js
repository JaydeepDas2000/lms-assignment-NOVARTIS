function uploadSCORM() {
    // Get the SCORM package file.
    var file = document.getElementById("scormFile").files[0];
  
    // Create a new XMLHttpRequest object.
    var xhr = new XMLHttpRequest();
  
    // Set the request method and URL.
    xhr.open("POST", "/upload/scorm");
  
    // Set the request headers.
    xhr.setRequestHeader("Content-Type", "application/zip");
  
    // Set the response type.
    xhr.responseType = "text";
  
    // Send the request.
    xhr.send(file);
  
    // Handle the response.
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The SCORM package was uploaded successfully.
        document.getElementById("message").innerHTML = "SCORM package uploaded successfully!";
      } else {
        // The SCORM package upload failed.
        document.getElementById("message").innerHTML = "SCORM package upload failed!";
      }
    };
  }