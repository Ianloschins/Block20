// Access the root element using JavaScript.
const root = document.getElementById('root')
// Create an h1 element with the name of a famous piece of art.
const h1 = document.createElement('h1');
h1.innerHTML = 'Mona Lisa';
// Add (append) the h1 element to the root element.
root.appendChild(h1)
// Set the image asset and add thisLinks to an external site. image to the root element.
const img = document.createElement('img');
img.src = 'https://drive.google.com/file/d/1A_VCH7UUCfnUVs-RxST7lgra_MdP62X8/view';
root.appendChild(img);
// Add a p element description to the root element. Description should read.
const p = document.createElement('p')
p.innerText = "The Mona Lisa is a famous painting.";
root.appendChild(p);
