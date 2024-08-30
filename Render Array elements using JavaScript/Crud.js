let data=[
        {id:1,name:"Rabadiya Raj",email:"Rabadiya@8160gmail.com",enrollment:23010101215,semester:3},
        {id:2,name:"Ayush Vasoya",email:"Vasoya@78956gmail.com",enrollment:2345671231,semester:3}
        ];
function readAll() {
	 localStorage.setItem("object",JSON.stringify(data));
	 var tabledata=document.querySelector(".table_data");

	 var object=localStorage.getItem('object');
	 var objectdata=JSON.parse(object);
	 var elements=" ";

	 objectdata.map(record=>{
	 	elements+= `<tr>
				 	<td>${record.name}</td>
				 	<td>${record.email}</td>
				 	<td>${record.enrollment}</td>
				 	<td>${record.semester}</td>
				 	<td>
				 	    <button class="delete"onclick=(delet(${record.id}))>Delete</button>
				 	    <button class="edit" onclick=(edit(${record.id}))>Edit</button>
				 	</td>
				 	</tr>`
	 });


     tabledata.innerHTML = elements;
}

function delet(id) {
	data=data.filter(rec=>rec.id!=id);
	readAll();
}
function create(){
	 document.querySelector(".Create_form").style.display = "block";
	  document.querySelector(".add_div").style.display = "none";
}
function add(){
	var name = document.querySelector(".name").value;
	var email = document.querySelector(".email").value;
	var enrollment = document.querySelector(".enrollment").value;
	var semester= document.querySelector(".semester").value;

	var newObj={id:3, name: name,email: email,enrollment: enrollment,semester: semester};

	data.push(newObj);

	  document.querySelector(".Create_form").style.display = "none";
	  document.querySelector(".add_div").style.display = "block";

	readAll();
}

function edit(id) {
	document.querySelector('.update_form').style.display="block";
	var  obj=data.find(rec=>rec.id == id);
	document.querySelector('.uname').value=obj.name;
	document.querySelector('.uemail').value=obj.email;
	document.querySelector('.uenrollment').value=obj.enrollment;
	document.querySelector('.id').value=obj.id;
	document.querySelector('.usemester').value=obj.semester;
}

function update(){
	var id=parseInt(document.querySelector('.id').value);
	var enrollment=document.querySelector('.uenrollment').value;
	var name=document.querySelector('.uname').value;
	var email=document.querySelector('.uemail').value;
	var semester=document.querySelector('.usemester').value;

	var index=data.findIndex(rec=>rec.id == id);

	data[index] ={id,name,email,enrollment,semester};
	document.querySelector('.update_form').style.display="none";

	readAll();
}