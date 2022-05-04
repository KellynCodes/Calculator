let outputScreen =  document.getElementById('outputscreen');
 

function display(kelly){
    outputScreen.value += kelly;
}

function calculate(){
   try{ outputScreen.value = eval (outputScreen.value)
}catch (err){
    alert("invalid number");
 }
}

function sliceAll(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}