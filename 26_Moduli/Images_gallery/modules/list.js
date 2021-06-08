// Import image
import generateImage from './general.js';

// Create ul
function generateList(parent) {
  let list = document.createElement('ul');
  list.style.overflow = 'hidden';
  list.style.listStyleType = 'none';
  parent.appendChild(list);
  return list;
}

// Create li
function generateListItem(parent, source) {
  let listItem = document.createElement('li');
  listItem.style.float = 'left';
  let image = generateImage(source);
  listItem.appendChild(image);
  parent.appendChild(listItem);
  return listItem;
}

// export ul and li
export { generateList, generateListItem };
