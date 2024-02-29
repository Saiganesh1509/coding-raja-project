
// delete the container
function onDeleteTodo(mainCon, expId){
    let workingExperineceObj = document.getElementById(mainCon);
    let containerEle = document.getElementById(expId);
    workingExperineceObj.removeChild(containerEle);
}

// skills genrator
let num9 = 1;
function genreateNewSkill(mainId, className){
    
    let skillObj = document.getElementById(mainId);

    let skillcontainerEleObj = document.createElement("div");
    let skillid = "skills" + num9;
    skillcontainerEleObj.id = skillid;

    let skilllebelEle = document.createElement("label");
    let skilllabelForId = "skillField" + num3;
    skilllebelEle.setAttribute("for", skilllabelForId);
    skilllebelEle.textContent = "Skill";

    skillcontainerEleObj.appendChild(skilllebelEle);


    let skillnewNode = document.createElement("input");
    skillnewNode.classList.add("form-control", className);
    skillnewNode.setAttribute("type", "text");
    skillnewNode.setAttribute("placeholder", "Enter here...");
    skillnewNode.id = skilllabelForId;

    skillcontainerEleObj.appendChild(skillnewNode);

    skillObj.appendChild(skillcontainerEleObj);

    

    let skilldeleteIcon = document.createElement("button");
    skilldeleteIcon.classList.add("btn", "btn-danger", "mt-2");
    skilldeleteIcon.textContent = "Delete";

    skillcontainerEleObj.appendChild(skilldeleteIcon);

    

    skilldeleteIcon.onclick = function () {
        onDeleteTodo(mainId, skillid);
    };

    num9 = num9 + 1;
    
}

function addNewSkillField2(){
    genreateNewSkill("sk2", "skField2");
}

function addNewSkillField(){
    genreateNewSkill("sk", "skField");
    
}
// ACHIEVEMENTS genrator
let num3 = 1; 
function genrateNewACHFied(mainId, className){
    let achObj = document.getElementById(mainId);

    let achcontainerEleObj = document.createElement("div");
    let achid = "ach" + num3;
    achcontainerEleObj.id = achid;

    let achlebelEle = document.createElement("label");
    let achlabelForId = "achField" + num3;
    achlebelEle.setAttribute("for", achlabelForId);
    achlebelEle.textContent = "Achievement";

    achcontainerEleObj.appendChild(achlebelEle);


    let achnewNode = document.createElement("input");
    achnewNode.classList.add("form-control", className);
    achnewNode.setAttribute("type", "text");
    achnewNode.setAttribute("placeholder", "Enter here...");
    achnewNode.id = achlabelForId;

    achcontainerEleObj.appendChild(achnewNode);

    achObj.appendChild(achcontainerEleObj);

    

    let deleteIcon = document.createElement("button");
    deleteIcon.classList.add("btn", "btn-danger", "mt-2");
    deleteIcon.textContent = "Delete";

    achcontainerEleObj.appendChild(deleteIcon);


    deleteIcon.onclick = function () {
        onDeleteTodo(mainId, achid);
    };

    num3 = num3 + 1;
    
}

function addNewachField(){
    genrateNewACHFied("ach", "acField");
}
function addNewachField2(){
    genrateNewACHFied("ach2", "acField2");
}

// adding Work Experience
let num = 1; 
function genrateNewWEField(mainId, className){
    
    let workingExperineceObj = document.getElementById(mainId);

    let containerEleObj = document.createElement("div");
    let expId = "workExp" + num;
    containerEleObj.id = expId;

    let lebelEle = document.createElement("label");
    let labelForId = "workField" + num;
    lebelEle.setAttribute("for", labelForId);
    lebelEle.textContent = "Work Experience";

    containerEleObj.appendChild(lebelEle);


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", className, "mt-2");
    newNode.setAttribute("rows", "5");
    newNode.setAttribute("placeholder", "Enter here...");
    newNode.id = "workField" + num;

    containerEleObj.appendChild(newNode);

    workingExperineceObj.appendChild(containerEleObj);

    num = num + 1;

    let deleteIcon = document.createElement("button");
    deleteIcon.classList.add("btn", "btn-danger", "mt-2");
    deleteIcon.textContent = "Delete";

    containerEleObj.appendChild(deleteIcon);

    

    deleteIcon.onclick = function () {
        onDeleteTodo(mainId, expId);
    };
    
}

function addNewWEField(){
    genrateNewWEField("we", "weField");
}
function addNewWEField2(){
    genrateNewWEField("we2", "weField2");
}

// adding Acadamic Qulifications
let num2 = 1;
function genreateAcField(mainId, className){
    
    let workingExperineceObj = document.getElementById(mainId);

    let containerEleObj = document.createElement("div");
    let expId = "acaQul" + num2;
    containerEleObj.id = expId;

    let lebelEle = document.createElement("label");
    let labelForId = "aqField" + num2;
    lebelEle.setAttribute("for", labelForId);
    lebelEle.textContent = "Acadamic Qulifications";

    containerEleObj.appendChild(lebelEle);


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", className, "mt-2");
    newNode.setAttribute("rows", "5");
    newNode.setAttribute("placeholder", "Enter here...");
    newNode.id = "aqField" + num2;

    containerEleObj.appendChild(newNode);

    workingExperineceObj.appendChild(containerEleObj);

    num2 = num2 + 1;

    let deleteIcon = document.createElement("button");
    deleteIcon.classList.add("btn", "btn-danger", "mt-2");
    deleteIcon.textContent = "Delete";

    containerEleObj.appendChild(deleteIcon);

    let mainCon = "aq";

    deleteIcon.onclick = function () {
        onDeleteTodo(mainId, expId);
    }; 
}
function addNewAQField(){
    genreateAcField("aq", "eqField")
}
function addNewAQField2(){
    genreateAcField("aq2", "eqField2")
}


// main genrating cv 

function mainGenrateCV(nameT, nameFile, contactT, contactFile, addressT, adreeFiled, linedkInT, linkedinField, gitT, gitField, portfolioT, portfolioField, objectiveT, objectiveField, skField, skillsT, achField, achT, weField, weT, eqField, aqT, photoField, imageT){

    
    document.getElementById(nameT).innerHTML = document.getElementById(nameFile).value;

    document.getElementById(contactT).innerHTML = document.getElementById(contactFile).value;
    document.getElementById(addressT).innerHTML = document.getElementById(adreeFiled).value;


    document.getElementById(linedkInT).innerHTML = document.getElementById(linkedinField).value;
    document.getElementById(gitT).innerHTML = document.getElementById(gitField).value;
    document.getElementById(portfolioT).innerHTML = document.getElementById(portfolioField).value;


    document.getElementById(objectiveT).innerHTML = document.getElementById(objectiveField).value;

    //adding skills
    let skill = document.getElementsByClassName(skField);
    let str3 = "";

    for (let e3 of skill){
        str3 = str3 + `<li> ${e3.value} </li>`;
    }

    document.getElementById(skillsT).innerHTML = str3;

    //adding Achievements
    let Achievement = document.getElementsByClassName(achField);
    let str4 = "";

    for (let e4 of Achievement){
        str4 = str4 + `<li> ${e4.value} </li>`;
    }

    document.getElementById(achT).innerHTML = str4;


    // adding work expriences
    let wes = document.getElementsByClassName(weField);
    let str = "";

    for (let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById(weT).innerHTML = str;

    // adding acadamic experiences 
    let eq1 = document.getElementsByClassName(eqField);
    let str2 = "";

    for (let e1 of eq1){
        str2 = str2 + `<li> ${e1.value} </li>`;
    }

    document.getElementById(aqT).innerHTML = str2;


    // setting image
    let fileobj = document.getElementById(photoField).files[0];

    let reader = new FileReader();
    reader.readAsDataURL(fileobj);

    reader.onloadend = function(){
        document.getElementById(imageT).src = reader.result;
    }

}


//generate cv 1

function generateCV(){
    mainGenrateCV("nameT", "nameField",  "contactT", "contactField", "addressT","addressField", "linedkInT", "linkedinField", "gitT", "gitField", "portfolioT", "portfolioField","objectiveT", "objectiveField", "skField", "skillsT", "acField", "achT", "weField", "weT", "eqField", "aqT", "photoField", "imageT");
}


// genrate cv 2
function generateCV2(){
    mainGenrateCV("nameT2", "nameField2",  "contactT2", "contactField2", "addressT2","addressField2", "linedkInT2", "linkedinField2", "gitT2", "gitField2", "portfolioT2", "portfolioField2","objectiveT2", "objectiveField2", "skField2", "skillsT2", "acField2", "achT2", "weField2", "weT2", "eqField2", "aqT2", "photoField2", "imageT2");
}


// printing functions 

// print CV1
let printObj = document.getElementById("printCV");
printObj.addEventListener('click', function(){
    print();
    let 
})

// print CV2
let printObj2 = document.getElementById("printCV2");
printObj2.addEventListener('click', function(){
    print();
    let 
})



