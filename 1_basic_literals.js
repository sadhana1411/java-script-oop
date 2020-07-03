/*const s1= 'hello'
console.log(typeof s1);

const s2=new String('Hello');
console.log(typeof s2);*/

//console.log(navigator.appVersion);


const book1={
	title: 'Book one',
	author:'sadhana',
	year:'1997',
	getSummary: function(){
		return`${this.title} was written by ${this.author} in ${this.year}`;
	}
};

console.log(book1.getSummary());

const book2={
	title: 'Book two',
	author:'icegola',
	year:'1996',
	getSummary: function(){
		return`${this.title} was written by ${this.author} in ${this.year}`;
	}
};

console.log(Object.values(book1));
console.log(Object.keys(book1));



