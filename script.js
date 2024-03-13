    function nextPage(pageName) {
        // You can customize the navigation logic here
        // For example, you can use window.location.href to navigate to a specific page
        window.history.back();
        window.location.href = pageName+'.html';
    }

   // change color
function changeThemeColor(newColor) {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', newColor);

    var topbar = document.querySelector('.topbar');
    topbar.style.backgroundColor = newColor;
    topbar.style.boxShadow = '0 8px 100px ' + newColor;
}



// JavaScript to handle scrolling and show/hide the tag navigator
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const tagNavigator = document.querySelector('.tag-navigatorx');

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up, show the tag navigator
    tagNavigator.style.display = 'flex';

  } else {
    // Scrolling down, hide the tag navigator
    tagNavigator.style.display = 'none'; // You can adjust the value as needed
  }

  prevScrollpos = currentScrollPos;
};





       //function to filter items
       function filterProjects(tag) {




        
       // Change the color of the clicked button to red and others to blue
       const tagButtons = document.querySelectorAll('.tag-filterx');
       tagButtons.forEach(button => {
         if (button.textContent.toLowerCase() === tag.toLowerCase()) {
           button.style.backgroundColor = '#fff'; // Change to blue
           button.style.color = '#000'; // Change to white
         } else {
           button.style.backgroundColor = '#e7e7e76f'; // Change to grey
           button.style.color = '#000000'; // Change to black
         }
       }); 

       }