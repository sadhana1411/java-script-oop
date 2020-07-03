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

function Magazine(title,author,year,month){
Book.call(this,title,author,month);
this.month=month;

}
//Instantiate Magazine obj
const mag1=new Magazine('maga1','sss','1990','jan');


//inherit prototype
Magazine.prototype=Object.create(Book.prototype);

//magazine object

Magazine.prototype.constructor=Magazine;
console.log(mag1);