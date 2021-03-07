function spr(arg) {
    if (typeof arg == "string"){
        console.log("typ string - tak");
        if (arg != ""){
            console.log("niepusty");
        }
        else {
            console.log("pusty");
        }
    }
    else{
        console.log("typu string - nie")
    }
}
spr(1)
spr("abc")
spr("")