
var restart=document.querySelector("#b");


var squares=document.querySelectorAll('td');


function clearboard()
{
  for(var i = 0; i < squares.length; i++)
  {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearboard)

function changemarker(){
  if(this.textContent===''){
    this.textContent='piu';
  }
  else if(this.textContent==='piu'){
    this.textContent='panu';
  }
  else {
    this.textContent='';
  }
}

for(var i = 0; i < squares.length; i++)
{
  squares[i].addEventListener('click',changemarker);
}
