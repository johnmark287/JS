// //DOM Manipulation

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// adding elements
const ul = document.querySelector('ul');
console.log(ul);
const li = document.createElement('li');

ul.append(li);
// // modifying the text
li.innerText = 'Transporter';



// // Modifying attributes & classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('main-heading');

// console.log(title.getAttribute('id'));

li.classList.add('list-item');
li.classList.remove('list-item');

// // Remove elements
li.remove();
