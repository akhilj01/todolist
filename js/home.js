var count=0;
var id=0;
date(); 

// -----------------------------AJAX call for todo list------------------------------

function ajax() {

  document.getElementById("status").style.display="block";
  document.getElementById("landing").style.display="none";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var output = "";
      response.forEach((element) => {
        
          output += `<tr id="check${element.id}">
          <td class="checkIcon"id="toggle${element.id}"><i onclick="completed(${element.id})" onmouseover="highlight(${element.id})" onmouseout="normal(${element.id})"class="far fa-square check" id="checkIcon${element.id}" ></i></td>
          <td class="items">${element.title}</td>
          <td class="deleteIcon" ><i onmouseover="highlight(${element.id})" onmouseout="normal(${element.id})" onclick="deleted(${element.id})"class="far fa-trash-alt" id="delete${element.id}" class="delete"></i></td> </tr>`;
        
          

        
      });
      
      
      document.getElementById("table").innerHTML = `${output}`;

      // -------------------------if completed=true,disable checking----------------------------
      response.forEach((element) => {
        if (element.completed==true) {
          document.getElementById(`check${element.id}`).style.textDecoration="line-through";
          document.getElementById(`check${element.id}`).style.color="#b8b894";
          document.getElementById(`check${element.id}`).style.pointerEvents="none";
          var checked=document.getElementById(`checkIcon${element.id}`);
  
          checked.classList.remove("fa-square");
          checked.classList.remove("far");

          checked.classList.add("fas");
          checked.classList.add("fa-check-double");

          // -------------------------if completed=true,disable checking----------------------------
        }
        
        
      });
      
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhr.send();


  //-------------- input field appended
  var table=document.getElementById("table");
  var list=document.getElementById("list")
  document.getElementById("main").innerHTML='<table><tbody><tr><td style="width:70vw"><div id="input" contenteditable="true"></div></td><td><i id="add" onclick="add()" class="far fa-plus-square"></i></td></tbody><table><br><br>'
  document.getElementById("main").appendChild(list);
  list.appendChild(table);

  // ----------status completion---------------




}


// -------------ajax call^-------------------------


// --------------------------------Completed tasks----------------------------------

function completed(id){
  // ---------check------------
  var checked=document.getElementById(`checkIcon${id}`)
  if(checked.classList.contains("fa-square")){
    document.getElementById(`check${id}`).style.textDecoration="line-through";
     checked.classList.remove("fa-square");
    checked.classList.add("fa-check-square");
    count++;
    console.log(count);
    var length=document.getElementsByClassName("fa-check-square").length;
    if(length==5){
      swal("Congrats!Achieved today's goal",`5 Tasks have been Successfully Completed` , "success");
      
    }
   
}
// ----------uncheck--------------
  
  else if(checked.classList.contains("fa-check-square")){
    
      checked.classList.remove("fa-check-square");
          checked.classList.add("fa-square");
          document.getElementById(`check${id}`).style.textDecoration="none";
          if(count>0){
            count--;
          }
  }

  // ------alert for each 5-------------
  leng();

}
// -----------delete----------------------------
function deleted(id){
    var r = confirm("Are you sure to delete this task?");
  if (r == true) {
    document.getElementById(`check${id}`).style.display="none";
    document.getElementById(`checkIcon${id}`).className="";
  }
leng();
}

// -------------ADD TASKS-------------------------
function add(){
 var input=document.getElementById("input").innerText;
 
 id -=1;                    //set id less than the ids already provided
 if(input!=""){
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);                                    //creating new rows and columns
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell2.classList.add("items");
  
  
  cell1.innerHTML = `<i onclick="completed(${id})"  onmouseover="highlight(${id})" onmouseout="normal(${id})" class="far fa-square check" id="checkIcon${id}" ></i>`;
  cell2.innerHTML = input;
  cell3.innerHTML = `<i onclick="deleted(${id})" onmouseover="highlight(${id})" onmouseout="normal(${id})" class="far fa-trash-alt" id="delete${id}" class="delete"></i>`;
  var rows=document.querySelectorAll("tr");
  var newRow=rows[1]
  newRow.setAttribute("id",`check${id}`)
  document.getElementById("input").innerText="";                    //empty input field after adding

  leng();

 }


 }
// -------------updating status completion-------

 function leng(){
  var lengcomplete=document.getElementsByClassName("fa-check-square").length;
  var lenguncomplete=document.getElementsByClassName("fa-square").length;
  var lengcompleted=document.getElementsByClassName("fa-check-double").length;
  var completed=document.getElementById("completed");
  var completedToday=document.getElementById("completedToday");
  var uncomplete=document.getElementById("uncomplete");

  completedToday.innerHTML=lengcomplete;
  if(lengcomplete>4){
    completedToday.innerHTML=lengcomplete+"!";
  }
  uncomplete.innerHTML=lenguncomplete;
  completed.innerHTML=lengcompleted+lengcomplete

  var completed1=document.getElementById("completed1");
  var completedToday1=document.getElementById("completedToday1");
  var uncomplete1=document.getElementById("uncomplete1");

  completedToday1.innerHTML=lengcomplete;
  if(lengcomplete>4){
    completedToday1.innerHTML=lengcomplete+"!";
  }
  uncomplete1.innerHTML=lenguncomplete;
  completed1.innerHTML=lengcompleted+lengcomplete
  
  }


  // -----------date-----------

 
  function date(){
      var today = new Date();
    var dat = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let day = days[today.getDay()];
let time=(today.getHours()<10?'0':'')+today.getHours()+":"+(today.getMinutes()<10?'0':'') + today.getMinutes()+":"+(today.getSeconds()<10?'0':'') + today.getSeconds()
document.getElementById("currentDate").innerHTML= dat;
document.getElementById("currentDay").innerHTML= day;
document.getElementById("currentTime").innerHTML= time;

document.getElementById("currentDate1").innerHTML= dat;
document.getElementById("currentDay1").innerHTML= day;
document.getElementById("currentTime1").innerHTML= time;
    setTimeout(date,1000)
    }

function highlight(id){
    document.getElementById(`check${id}`).style.color="#b8b894";
    
}
function normal(id){
    document.getElementById(`check${id}`).style.color="rgb(221, 220, 220)"
}