/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

let itemsPerPage = 9;

function showPage(list, page) {
   // variables of the index of the first and last student
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = (page * itemsPerPage);
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = "";
   // a loop through the data array to display the students objects and append it to the UL element in the HTML index
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentItem = `
         <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
          </div>
        </li>`;
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }

}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // variable of the number of buttons basen on the number of students on the page (42/9)
   let numOfPages = Math.ceil(list.length / itemsPerPage);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = "";
   // looping over numOfPages variable to display the buttons with [i] index from (1 to 5) and display each button after each loop
   for (let i = 1; i <= numOfPages; i++) {
      let button = `
         <li>
            <button type="button">${i}</button>
         </li>
      `
      linkList.insertAdjacentHTML("beforeend", button); // append the buttons to the linklist UL in the HTML page
      let firstButton = document.querySelector('button');
      firstButton.className = "active";
      linkList.addEventListener("click", (e) => {
         // select the event target and store it in a variable
         let chosen = e.target;
         if (chosen.tagName === 'BUTTON') {
            // if the first event target tag's name is button we remove the active class, and put the active class when we click on the next button
            let active = document.querySelector('.active')
            active.className = "";
            chosen.className = "active"
            showPage(list, chosen.textContent) // show the student page with data array and the textcontent of the event target
         }
      })
   }

}

// call functions
showPage(data, 1)
addPagination(data);