const body=document.querySelector('body')
const form=document.querySelector('form');
const tbody=document.querySelector('tbody');
const colm_4=document.querySelector('.colm-4');
const btn_up=document.querySelector('.sekil1')
const btn_down=document.querySelector('.sekil2')
form.addEventListener('submit',(event)=>{
    if(event.target.username.value.length==0){
        alert('Input daxil edin')
    }else{
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
}
})
btn_up.addEventListener('click',()=>{
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
btn_down.addEventListener('click',()=>{
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

