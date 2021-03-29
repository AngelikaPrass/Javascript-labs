const status = "x";
switch(status) {
    case 'Completed':
        runFunc();
    break;
    case 'Running': 
        runFunc2();
    break;
}
function runFunc(){
    console.log("Hello World!");
}
function runFunc2(){
    console.log("Hi World!");
}
