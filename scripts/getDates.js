const d = new Date();
let year = d.getFullYear();
document.querySelector('#year').innerHTML = year;

const modifiedDate = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = `Last Modification: ${modifiedDate}`;