// some code I picked up on W3 schools to help stick headers
//         // When the user scrolls the page, execute myFunction
//         window.onscroll = function() {myFunction()};

//         // Get the header
//         var titlebox = document.getElementById("title-box");

//         // Get the offset position of the navbar
//         var sticky = titlebox.offsetTop;

//         // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//         function myFunction() {
//         if (window.pageYOffset > sticky) {
//             titlebox.classList.add("sticky");
//         } else {
//             titlebox.classList.remove("sticky");
//         }
//         }