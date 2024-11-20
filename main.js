 function displayContent(content){
    result.value += content
 }


 function calcClear(){
    result.value = ""
 }


 function calc(){
    try{
        result.value = eval(result.value)
    }
    catch{
        result.value = "SYNTAX ERROR"
    }
 }

 
 function backspace(){
    result.value = result.value.slice(0,-1)
 }