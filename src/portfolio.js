var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
             event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        
        }
// -----------------------------------------------------------------------------
        document.addEventListener("DOMContentLoaded", function() {
            var sidemenu = document.getElementById("sidemenu");

        
            function openmenu() {
                sidemenu.style.right = "0"; // Open menu
            }
        
            function closemenu() {
                sidemenu.style.right = "-200px"; // Close menu
            }
        
            // Assign functions to buttons
            document.querySelector(".bi-list").onclick = openmenu;
            document.querySelector(".bi-x").onclick = closemenu;
        });

       

        // ----------------------- popup--------------------- 

        // function openPopup() {
        //     window.open("../public/onlineBookStore.html", "popupWindow", "width=600,height=400");
        // }

        function openModal() {
            document.getElementById("modal-frame").src = "onlineBookStore.html"; // Load external modal content
            document.getElementById("modal-container").style.display = "flex"; // Show modal
            document.body.style.overflow = "hidden"; // Prevent background scrolling

        }
        
        function closeModal() {
            document.getElementById("modal-container").style.display = "none"; // Hide modal
            document.body.style.overflow = "auto"; // Restore scrolling

        }


        //------------
        function openRumanoProject() {
            document.getElementById("modal-frame").src = "projectAtRumango.html"; // Load external modal content
            document.getElementById("modal-container").style.display = "flex"; // Show modal
            document.body.style.overflow = "hidden"; // Prevent background scrolling

        }
        
        function closeRumanoProject() {
            document.getElementById("modal-container").style.display = "none"; // Hide modal
            document.body.style.overflow = "auto"; // Restore scrolling

        }
        
        