const body=document.querySelector('body')
const form=document.querySelector('form');
const tbody=document.querySelector('tbody');
const colm_4=document.querySelector('.colm-4');
const btn_sort=document.createElement('button');
const btn_remove=document.createElement('button');
btn_sort.classList.add('btn_sort');
btn_remove.classList.add('btn_remove');
colm_4.append(btn_sort);
colm_4.append(btn_remove);
btn_sort.innerText='>';
btn_remove.innerText='<';
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const tr=document.createElement('tr');
    tbody.append(tr);
    const td=document.createElement('td'); 
    td.classList.add('td_List')
    const td_btn=document.createElement('td');
    td_btn.classList.add('td_button')
    tr.append(td,td_btn);
    const btn_cancel=document.createElement('button');
    td_btn.append(btn_cancel);
    td_btn.innerText= 'X';
    td.innerText=event.target.username.value;
    td_btn.addEventListener('click',()=>{
        tr.remove();
    })
})
btn_sort.addEventListener('click',()=>{
    event.preventDefault();
    let array=[];
   const td_list=document.querySelectorAll('.td_List');
   td_list.forEach(item=>{
        array.push(item.innerText);
        array.sort((a,b)=>{
            return a.charCodeAt()-b.charCodeAt()
        });
   })
   for(let i=0;i<array.length;i++){
    td_list[i].innerText=array[i];
    console.log(td_list[i]);
   }
   console.log(array);
})
btn_sort.addEventListener('click',()=>{
    event.preventDefault();
    let array=[];
   const td_list=document.querySelectorAll('.td_List');
   td_list.forEach(item=>{
        array.push(item.innerText);
        array.sort((a,b)=>{
            return b.charCodeAt()-a.charCodeAt()
        });
   })
   for(let i=0;i<array.length;i++){
    td_list[i].innerText=array[i];
    console.log(td_list[i]);
   }
   console.log(array);
})