// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
let start = Date.now();
// apiUrls.forEach((endpoint)=>{
// 	fetchAll(endpoint);
// });

async function fetchAll(endpoint){
	try{
		const res = await Promise.all(apiUrls.forEach((endpoint)=>{
			fetchAll(endpoint);
		}));
		let data = await Promise.all(res.map(r=>{r.json()})); 
	}
	catch{
		throw Error("Promise failed");
	}
}
let timetaken = Date.now() - start;

let pall = document.getElementById("output-all");
pall.innerText = timetaken; 

start = Date.now();
async function fetchAll(endpoint){
	try{
		const res = await Promise.any(apiUrls.forEach((endpoint)=>{
			fetchAll(endpoint);
		}));
		let data = await Promise.any(res.map(r=>{r.json()})); 
	}
	catch{
		throw Error("Promise failed");
	}
}
timetaken = Date.now() - start;

 let pany = document.getElementById("output-any");
pany.innerText = timetaken; 