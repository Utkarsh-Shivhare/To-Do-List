window.addEventListener('load', () => {
    const form = document.querySelector("#for-adding-new-to-do");
    const input = document.querySelector("#new-to-do");
    const list_el = document.querySelector("#lists");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert("Please enter something to add");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("list");

        const task_content_el = document.createElement('div');
        task_content_el.classList.add("content");

         task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

    
          task_content_el.appendChild(task_input_el);

          const task_action_el = document.createElement("div");
          task_action_el.classList.add('action');

          const task_edit_el = document.createElement("button");
          task_edit_el.classList.add("edit");
          task_edit_el.innerHTML="Edit"

          const task_done_el = document.createElement("button");
          task_done_el.classList.add("done");
          task_done_el.innerHTML="Done";

          task_action_el.appendChild(task_edit_el);
          task_action_el.appendChild(task_done_el);

          task_el.appendChild(task_action_el);




        list_el.appendChild(task_el);
        input.value="";

        task_edit_el.addEventListener('click',function(){
            if(task_edit_el.innerText=="EDIT"){
                task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText="SAVE";

            }else{
                task_input_el.setAttribute("readonly",true);
                task_edit_el.innerText="EDIT"
            }
        })
        task_done_el.addEventListener('click',function(){
            task_el.remove();
        
        })

    })

})