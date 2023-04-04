let Buttons =document.getElementsByTagName('li');

for(let i=0;i<Buttons.length;i++)
{
    Buttons[i].addEventListener("click",()=>fetchData(Buttons[i].id))
   
}


