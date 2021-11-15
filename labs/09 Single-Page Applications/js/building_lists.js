
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var table = document.createElement('table');
let hkolumn = document.createElement("tr");
table.appendChild(hkolumn);
let header1 = document.createElement("th");
header1.innerHTML = "Title";
let header2 = document.createElement("th");
header2.innerHTML = "Year";
let header3 = document.createElement("th");
header3.innerHTML = "ISBN";
let header4 = document.createElement("th");
header4.innerHTML = "Authors";

hkolumn.appendChild(header1);
hkolumn.appendChild(header2);
hkolumn.appendChild(header3);
hkolumn.appendChild(header4);


for (let i=0; i < books.length; i++) {
	let tr = document.createElement("tr");
	let title = document.createElement('td');
	title.innerHTML = books[i].title;
	tr.appendChild(title);

	let year = document.createElement('td');
	year.innerHTML = books[i].year;
	tr.appendChild(year);

	let isbn = document.createElement('td');
	isbn.innerHTML = books[i].isbn;
	tr.appendChild(isbn);

	let authors = document.createElement('td');
	authors.innerHTML = books[i].authors;
	tr.appendChild(authors);
	table.appendChild(tr);
	tr.setAttribute("id","tr" + i);
}
document.body.appendChild(table);

for(let i=0; i<books.length;i++) {
	document.getElementById("tr" + i).onclick = function() {
		document.querySelector("h1").innerHTML = books[i].title;
	}
}