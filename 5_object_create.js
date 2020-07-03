//object of protos
const bookProtos={
	getSummary: function(){
		return`${this.title} was written by ${this.author} in ${this.year}`;

	},
getAge: function(){
const years=new Date().getFullYear()-this.year;
	return`${this.title} is ${years} years old`
	}
};


//create object
/*const book1=Object.create(bookProtos);
book1.title='Book One';
book1.author='sad'
book1.year='1998';*/

const book1=Object.create(bookProtos,{
	title:{value: 'Book One'},
	author: {value: 'sadhu'},
	year:{value:'1989'}
});



console.log(book1);