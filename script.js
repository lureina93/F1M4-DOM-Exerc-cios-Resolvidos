var elementos = document.getElementsByTagName('*');
document.write("Quatidade de elementos: " + elementos.length);

var todosElementos = "";

for (let e of elementos){
  //document.write("p" + e.tagName);
  todosElementos = todosElementos + "<br>" + e.tagName;
  
}

document.write(todosElementos);