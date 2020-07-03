function Book(title,author,year){
	this.title=title;
	this.author=author;
	this.year=year;
	this.getSummary=function(){
		return`${this.title} was written by ${this.author} in ${this.year}`;
	}
}
//Instantiate an object
const book1=new Book('book1','sadh','1997');
const book2=new Book('book2','buj','1996');
console.log(book1);
console.log(book1.author);
console.log(book2);
console.log(book1.getSummary());