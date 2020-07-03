function Book(title,author,year){
	this.title=title;
	this.author=author;
	this.year=year;
	
}

//get summary
Book.prototype.getSummary=function(){
	this.getSummary=function(){
		return`${this.title} was written by ${this.author} in ${this.year}`;
	}
}
//get age
Book.prototype.getAge=function(){
	const years=new Date().getFullYear()-this.year;
	return`${this.title} is ${years} years old`;
};
//get revised
Book.prototype.revise=function(newyear){
	this.year=newyear;
	this.revised=true;
}
//Instantiate an object
const book1=new Book('book1','sadh','1997');
const book2=new Book('book2','buj','1996');
console.log(book1.getAge());
book2.revise('2000');