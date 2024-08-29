let string="";
let buttons = document.querySelectorAll("button");
console.log(buttons)
let arr=Array.from(buttons); 

arr.forEach((button)=>{
	 console.log("Hello")
	button.addEventListener('onClick',(e)=>{
		if (e.target.innerHTML == '=') {
			string=eval(string);
			document.querySelector('.input').value = string;
		}else if(e.target.innerHTML== 'C'){
			string="";
			document.querySelector('.input').value = string;
		}else{
		console.log(e.target);
		string = string + e.target.innerHTML;
		document.querySelector('input').value = string;
		}
	})
})