// global var(s)
var form = document.getElementById('addForm'); // contains submit and input feild
var itemList = document.getElementById('items'); // container of <li>'s
var filter = document.getElementById('filter');
// form submit event

form.addEventListener('submit', addItem);
// filter
filter.addEventListener('keyup', filterItems);
  function filterItems(e){
    // convert text to lowerCase
    var text = e.target.value.toLowerCase();
    // gets <LIS>
    var items = itemList.getElementsByTagName('li');
    // conveett to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
//
//delete event:
itemList.addEventListener('click', removeItem);

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('are you sure you want to do this?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

// add item
function addItem(e) {
  e.preventDefault();
  // get input val
  var newItem = document.getElementById('item').value;
  // create new li element
  var li = document.createElement('li');
  // add class name
  li.className = 'list-group-item';
  // adds text node to input
  li.appendChild(document.createTextNode(newItem));
  // create de button element
  var deleteButton = document.createElement('button');
  // add classes to delete btn
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  deleteButton.appendChild(document.createTextNode('X'));
  // li appending child 
  li.appendChild(deleteButton);
  // li to list
  itemList.appendChild(li);
}