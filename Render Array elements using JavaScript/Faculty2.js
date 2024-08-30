var Faculty=[
              ['Raj','Rabadiya','Raj@123gmail.com',23010101215],
              ['Vivek','Sudani','Vivek@123gmail.com',23010101115],
              ['Mihir','Kacha','Mihir@123gmail.com',23010101015],
	         ]

function getDetail(faculty) {
    var row=`<tr><th>Sr no.</th>
       <th>First Name :</th>
		<th>Last Name :</th>
		<th>Email :</th>
		<th>Enrollment Number :</th>
		<th>Action</th>
	</tr>`;
    Faculty.forEach(function(Faculty,i){
    	row+=`<tr><td>${i+1}</td><td>${Faculty[0]}</td><td>${Faculty[1]}</td><td>${Faculty[2]}</td><td>${Faculty[3]}</td><td><a href="#" onclick=del(${i})><i class="bi bi-trash-fill"></i></a> &nbsp;&nbsp;&nbsp; <a href="#" onclick=edit(${i})><i class="bi bi-pencil-square" ></i></a></tr>`
    })
    document.getElementById('tbl').innerHTML=row;
}

function edit(i){
	var faculty=Faculty[i];
	document.getElementById('FirstName').value=faculty[0];
	document.getElementById('LastName').value=faculty[1];
	document.getElementById('Email').value=faculty[2];
	document.getElementById('Enrollment').value=faculty[3];
	document.getElementById('btn-Faculty').innerHTML="Update";
	document.getElementById('index').value=i;
}
function del(i){
	event.preventDefault();
	Faculty.splice(i,1);
	getDetail(Faculty);
}
function AddData(){
	var FirstName=document.getElementById('FirstName').value;
	var LastName=document.getElementById('LastName').value;
	var Email=document.getElementById('Email').value;
	var Enrollment=document.getElementById('Enrollment').value;
	var index=document.getElementById('index').value;
	var faculty=[FirstName,LastName,Email,Enrollment];
	console.log("index=",index)
	if(index=="" || index==undefined){
		Faculty.push(faculty);
	}else{
      Faculty.splice(index,1,faculty);
      document.getElementById('btn-Faculty').innerHTML="Add Data";
	}
	getDetail(Faculty);
	ClearForm();
}

document.getElementById('btn-Faculty').addEventListener('click',AddData);

function ClearForm(){
	document.getElementById('FirstName').value="";
	document.getElementById('LastName').value="";
	document.getElementById('Email').value="";
	document.getElementById('Enrollment').value="";
}

getDetail(Faculty);
