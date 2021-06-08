// Import image, list and table
import generateImage from './modules/general.js';
import * as List from './modules/list.js';
import * as Table from './modules/table.js';

// Images Array
let images = [
  './images/photo1.jpg',
  './images/photo2.jpg',
  './images/photo3.jpg',
];

// Create images
images.forEach(img => {
  document.body.appendChild(generateImage(img));
});

// Create List
function createList() {
  let ul = List.generateList(document.body);
  images.forEach(img => {
    List.generateListItem(ul, img);
  });
}
createList();

// Create Table
function createTable() {
  let table = Table.generateTable(document.body);
  let tr = Table.generateTableRow(table);
  images.forEach(img => {
    Table.generateTableItem(tr, img);
  });
}
createTable();
