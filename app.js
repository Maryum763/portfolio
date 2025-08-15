// 

// Select elements
const barEle = document.querySelector(".bar");
const hideEle = document.querySelector(".hide");
const closeEle = document.querySelector(".close");

// Show the element when "bar" is clicked
barEle.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default behavior, if any
  hideEle.style.display = "block";
});

// Hide the element when "close" is clicked
closeEle.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default behavior, if any
  hideEle.style.display = "none";
});

// color change of h2 in sevice section
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach((item) => {
  const heading = item.querySelector('h2');

  item.addEventListener('mouseover', () => {
    heading.style.color = 'yellow';
  });

  // Reset color on mouseout
  item.addEventListener('mouseout', () => {
    heading.style.color = '';
  });
});


//link ---->  _blank ke liye
const links = document.querySelectorAll('a');
links.forEach(link => {
  if (!link.href.includes('#')) {
    link.target = '_blank'
  }

})

// reset form 

  window.addEventListener('pageshow', function (event) {
    if (event.persisted || window.performance.getEntriesByType("navigation")[0].type === "back_forward") {
      const form = document.querySelector("form");
      if (form) form.reset();
    }
  });



