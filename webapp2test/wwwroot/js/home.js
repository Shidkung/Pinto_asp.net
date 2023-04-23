/*function createCard(num){

  const filterDiv = document.createElement('div');
  filterDiv.classList.add('filterdiv' + num);
  console.log(filterDiv.className);

  // Create a new card div element
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '15rem';

  // Create a new image element
  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = '...';
  img.alt = 'Card image cap';

  // Create a new card body div element
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  // Create a new card title element
  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = 'Card ' + num;

  // Create a new card text element
  const text = document.createElement('p');
  text.classList.add('card-text');
  text.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

  // Create a new link element
  const link = document.createElement('a');
  link.classList.add('btn', 'btn-primary');
  link.href = '#';
  link.textContent = 'Go somewhere';

  // Append the image, title, text, and link elements to the card body
  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(link);

  // Append the image and card body to the card
  card.appendChild(img);
  card.appendChild(cardBody);

  filterDiv.appendChild(card);

  return filterDiv;
}
const container = document.getElementById('card-container');

const grid = document.createElement('grid');
grid.classList.add('grid');
var i;
for (i = 1; i <= 6; i++) {
  const newCard = createCard(i.toString());
  grid.appendChild(newCard);
}

container.appendChild(grid);*/

//filter
filterSelection("all");
function filterSelection(c) {
  var x, y, i, j;
  x = document.getElementsByClassName("filterDiv");
  y = document.getElementsByClassName("numPage");
  if (c == "all"){
    c = '1 2';
    AddClass(y[0], "show");
  }
  else RemoveClass(y[0], "show");
  c = c.split(" ");
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    for (j = 0; j < c.length; j++) {
      if (x[i].className.slice(10) === c[j])
        AddClass(x[i], "show");
    }
  }
}

function pageSelection(c) {
  filterSelection(c);
  y = document.getElementsByClassName("numPage");
  AddClass(y[0], "show");
}

function AddClass(element, name) {
  var arr1;
  arr1 = element.className.split(" ");
    if (arr1.indexOf(name) == -1)
      element.className += " " + name;
}

function RemoveClass(element, name) {
  var arr1;
  arr1 = element.className.split(" ");
    while (arr1.indexOf(name) > -1) {
      arr1.splice(arr1.indexOf(name), 1);     
    }
  element.className = arr1.join(" ");
}

//button click active
/*var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/

//log in
$('#categoryFilter').on('change', function() {
  var selectedCategory = $(this).val();
  if (selectedCategory == 'all') {
    $('#cardContainer').children().show();
  } else {
    $('#cardContainer').children().hide();
    $('#cardContainer').children('.' + selectedCategory).show();
  }
});

$(document).ready(function(){
$('#signInModal').modal('show');
});

// Load the HTML content from another file
/*fetch('map/map.html')
  .then(response => response.text())
  .then(data => {
    // Create a new element to hold the loaded HTML content
    const container = document.createElement('div');
    container.innerHTML = data;

    // Find the element where you want to insert the HTML content
    const targetElement = document.querySelector('#target-element');

    // Append the loaded HTML content to the target element
    targetElement.appendChild(container);
  })
  .catch(error => console.error(error));*/