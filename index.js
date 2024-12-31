function downloadCV() {
  // Create a temporary link element
  const link = document.createElement("a");

  // Set the href attribute to the file path
  link.href = "images/GayatriUpdatedResume.pdf";

  // Set the download attribute to specify the file name
  link.download = "Gayatri_Rokade_CV.pdf";

  // Add the link to the DOM temporarily
  document.body.appendChild(link);

  // Programmatically click the link to start download
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
}
