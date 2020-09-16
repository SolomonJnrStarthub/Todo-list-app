var g = document.querySelector('.h');
g.classList.remove("h")
var button = document.getElementById("button");
button.addEventListener('click',function(event){

    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");


    var newText = document.createElement("li");
    newText.style.listStyle="none"
    newText.classList.add("todoList")
    var x = document.getElementById("input").value;
    var Textnode = document.createTextNode(x);
    newText.appendChild(Textnode);
    todoDiv.appendChild(newText)

    // var div = document.getElementById("div1");
    // div.appendChild(newText);

    // Clear and focus Input
    document.getElementById("input").value = "";
 
    //invalidate button
    var t = document.createElement("button");
    t.classList.add("buttons")
    t.style.border="none";
    t.style.backgroundColor="transparent"
    t.innerHTML = "<i class='fas fa-minus'></i>";
    todoDiv.appendChild(t);

    //invalidate button-replacement
    var tr = document.createElement("button");
    tr.classList.add("buttons")
    tr.style.border="none";
    tr.style.backgroundColor="transparent"
    tr.innerHTML = "<i class='fas fa-plus'></i>";
    todoDiv.appendChild(tr);
    tr.style.display="none"

    //delete button
    var t1 = document.createElement("button");
    t1.addEventListener('click',function(){
        todoDiv.classList.add("t")
        todoDiv.addEventListener('animationend',function(){
            t.style.display="none"
            tr.style.display="none"
            newText.style.display="none"
            t1.style.display="none"
            todoDiv.classList.remove("todoDiv")
        })
    })
    t1.classList.add("buttons")
    t1.style.border="none";
    t1.style.backgroundColor="transparent"
    t1.innerHTML = "<i class='fas fa-trash'></i>";
    todoDiv.appendChild(t1);

    var n = document.getElementById("every")
    n.appendChild(todoDiv)



    if( x != ""){
        n.appendChild(todoDiv)
     }
     else{
        n.removeChild(todoDiv)
    }

    t.addEventListener('click',function(){
        newText.style.textDecorationLine="line-through";
        t.style.display="none"
        tr.style.display=""
        tr.addEventListener('click',function(){
            newText.style.textDecorationLine="none";
            t.style.display=""
            tr.style.display="none"
        })
        
    })    
})
