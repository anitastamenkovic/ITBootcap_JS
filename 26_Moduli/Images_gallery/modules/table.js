// Import image
import generateImage from './general.js';

// Create table
function generateTable(parent) {
  let table = document.createElement('table');
  parent.appendChild(table);
  return table;
}

// Create tr
function generateTableRow(parent) {
  let tr = document.createElement('tr');
  parent.appendChild(tr);
  return tr;
}

// Create td
function generateTableItem(parent, source) {
  let td = document.createElement('td');
  let image = generateImage(source);
  td.appendChild(image);
  parent.appendChild(td);
  return td;
}

// Export table, tr, td
export { generateTable, generateTableRow, generateTableItem };
