
let todoList=[];
displayItems();

function addTodo()
{
    let ipEle=document.querySelector('#todo-ip');
    let ipDate=document.querySelector('#todo-date');
    let todoItem=ipEle.value;
    let todoDate=ipDate.value;
    console.log(todoItem);
    todoList.push(
            {
                item:todoItem,
                date:todoDate
            }
    );
    console.log(todoList);
    ipEle.value='';
    ipDate.value='';
    displayItems();
}

function displayItems()
{
    let conEle=document.querySelector('.todo-container');
    let newHtml='';
   
    for(let i=0;i<todoList.length;i++)
    {
        newHtml+=`
        
        <span>${todoList[i].item}</span>
        <span>${todoList[i].date}</span>

        <button id='done' onclick="todoList.splice(${i},1);
        displayItems();">Done</button>
      
        `;
       
    }
    conEle.innerHTML=newHtml;

}