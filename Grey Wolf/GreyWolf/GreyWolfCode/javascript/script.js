function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function dropDown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Get the img object using its Id 
img = document.getElementById("img1");
hdr = document.getElementById("head");
btn = document.getElementById("shirtBtn");

// Function to increase image size
function enlargeImg() { 
  // Set image size to 1.5 times original 
  img.style.transform = "scale(1.9)"; 
  // Animation effect  
  img.style.transition = "transform 0.25s ease";
  hdr.style.display = "none";
  btn.style.display = "block";
} 

// Function to reset image size
function resetImg() { 
  // Set image size to original
  img.style.transform = "scale(1)"; 
  img.style.transition = "transform 0.25s ease";
  hdr.style.display = "block";
  btn.style.display = "none";
}