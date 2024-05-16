document.addEventListener("DOMContentLoaded",function(){
      const list = document.querySelector("#cars ul");
      const forms = document.forms;
      const addForms = forms["add-car"];

      //delete cars
      list.addEventListener("click", (e)=>{
            if(e.target.className == "delete"){
                  const li = e.target.parentElement;
                  li.parentNode.removeChild(li);
            }
      });

      //add cars
      addForms.addEventListener("submit", (e)=>{
            e.preventDefault();
            //validation
            if (addForms.querySelector('input[type="text"]').value==""){
                  swal({
                        title:"error",
                        text:"please enter type of car",
                        icon:"error",
                        button:"ok"
                  });
                  return;
            }

            //create elements
            const value = addForms.querySelector("input[type='text']").value;
            const li = document.createElement("li");
            const carName = document.createElement("span");
            const deleteBtn = document.createElement("span");
            //add text content
            carName.textContent = value;
            deleteBtn.textContent = "delete";

            //add classes
            carName.classList.add("name");
            deleteBtn.classList.add("delete");

            //append to DOM
            li.appendChild(carName);
            li.appendChild(deleteBtn);
            list.appendChild(li);
      
            swal({
                  title:"success",
                  text:"car added successfully",
                  icon:"success",
                  button:"ok"
            });

            //clear input
            addForms.querySelector("input[type='text']").value = "";

      });
});
