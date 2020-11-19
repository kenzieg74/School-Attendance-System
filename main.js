var schoolroster = {
  "schoolname": "PCS",
  "students": [
    {
      "firstname":"Kenzie",
      "lastname":"Gill",
      "grade":"10",
      "studentID": 1559,
      "img": "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
    },
    {
      "firstname":"Mina",
      "lastname":"Barivan",
      "grade":"10",
      "studentID": 1234,
      "img":"https://metro.co.uk/wp-content/uploads/2019/03/GettyImages-911518004.jpg?quality=90&strip=all&crop=0px%2C0px%2C4052px%2C2129px&resize=1200%2C630"
    },
    {
      "firstname":"Lila",
      "lastname":"Wright",
      "grade":"10",
      "studentID": 1337,
      "img": "https://hope1032.com.au/wp-content/uploads/2019/10/Waiting-for-friends-1200-x-480.png"
    },
    {
      "firstname":"Sophia",
      "lastname":"Wright",
      "grade":"12",
      "studentID": 1008,
      "img": "https://i.insider.com/5c005d9bac00e20fe169f725?width=1100&format=jpeg&auto=webp"
    },
    {
      "firstname":"Mateo",
      "lastname":"Livingstone",
      "grade":"11",
      "studentID": 1576,
      "img": "https://cdn.geekwire.com/wp-content/uploads/2019/08/A9_06020.jpg"
    },
    {
      "firstname":"Ava",
      "lastname":"Livingstone",
      "grade":"10",
      "studentID": 1248,
      "img": "https://lumiere-a.akamaihd.net/v1/images/ct_frozen_elsa_18466_22a50822.jpeg"
    }
  ]
}

getStudents();

function getStudents(){
  var studentCount = 0;
  var students = schoolroster["students"]
  for(student of students){
    var studentCard = createStudentCard(student.firstname, student.lastname, student.grade, student.studentID, student.img)
    var cellNum = calculateCellNum(studentCount)
    var rowNum = parseInt(studentCount / 3)
    
    
    if(cellNum == 0){
      var row = document.createElement('div')
      row.classList.add("row")
      row.setAttribute("id", rowNum)
      var studentDiv = document.getElementById('students')
      studentDiv.appendChild(row)
    }
    
    var colDiv = document.createElement('div')
    colDiv.classList.add('col')
    colDiv.appendChild(studentCard)
    var rowElement = document.getElementById(rowNum)
    console.log(rowNum)
    console.log(studentCount)
    console.log(rowElement)
    rowElement.appendChild(colDiv)
    
    
    
    studentCount = studentCount + 1
  }
}

function calculateCellNum(studentCount){
  if(studentCount%3 == 0){
    return 0
  }
  
  if(studentCount%3 == 1){
    return 1
  }
  
  if(studentCount%3 == 2){
    return 2
  }

}

function createStudentCard(firstname, lastname, grade, studentID, img){

  var cardDiv = document.createElement('div');
  cardDiv.classList.add('card')
  
  var imgElement = document.createElement('img');
  imgElement.classList.add('card-img-top')
  imgElement.src= img
  cardDiv.appendChild(imgElement)
  
  var paragraph = document.createElement('p');
  paragraph.innerHTML = "what goes here"
  var bodyDiv = document.createElement('div');
  bodyDiv.classList.add('card-body')
  
  var header = document.createElement('h4');
  header.classList.add('card-title');
  header.innerHTML = firstname + " " + lastname
  bodyDiv.appendChild(header)
  var paragraph = document.createElement('p')
  paragraph.innerHTML = "<strong>Student ID:</strong> " + studentID + " " + "<br ><strong>Grade Level:</strong> " + grade  
  bodyDiv.appendChild(paragraph)
  
  var checkButton = document.createElement('input')
  checkButton.setAttribute("type", "checkbox");
  checkButton.setAttribute("id", studentID)
  checkButton.setAttribute("value", firstname + " " + lastname)
  bodyDiv.appendChild(checkButton)
  
  cardDiv.appendChild(bodyDiv)
  
  return cardDiv
  
}

function getAbsentStudents(){
  //array of checkbox elements
  var checkboxes = document.getElementsByTagName("input");
  var absentStudents = new Array()
  //<input type="checkbox" id="vehicle1" value="Bike">
  for(checkbox of checkboxes){
    if(checkbox.checked == false){
      absentStudents.push(checkbox.value)
    }
  }
  showAbsentStudents(absentStudents)
}

function showAbsentStudents(absentStudents){
  document.getElementById("students").style.display = "none"
  document.getElementById("buttonDiv").style.display = "none"
  
  var absentStudentDiv = document.createElement('div')
  absentStudentDiv.setAttribute("id", "absentStudents")
  
  var header = document.createElement('h5')
  header.innerHTML = "Absent Students:"
  absentStudentDiv.appendChild(header)
  
  for(absentStudent of absentStudents){
    var paragraph = document.createElement('p')
    paragraph.innerHTML = absentStudent
    absentStudentDiv.appendChild(paragraph)
  } 
  document.body.appendChild(absentStudentDiv)
}

//button dissapear
//student id and grade level 
//all images the same size

// class Student {
//   constructor(firstname, lastname, grade, studentId, image) {
//     this.firstname = firstname
//     this.lastname = lastname
//     this.grade = grade
//     this.studentId = studentId
//     this.image = image
//   }
  
//   fullName() {
//     return this.firstname + " " + this.lastname
//   }
// }

//console.log(schoolroster["students"][0]["firstname"] + " " + schoolroster["students"][0]["lastname"])
