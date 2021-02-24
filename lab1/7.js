let arr = ["kot", "pies", "chomik", "królik", "kot", "pies", "kot"];


function mostFrequent(arg) {
    let mfrequent = 1;
    let x = 0;
    for (i = 0; i < arg.length; i++) {
        for (j=i; j < arg.length; j++) {
            if (arg[i] == arg[j])
            x++;
            if (mfrequent < x) {
                mfrequent = x; 
                item = arr[i];
            }
        }
        x = 0;
    }
    return "najczęstszy element tablicy to " + item + ", pojawia się " + mfrequent + " razy."
}

console.log(mostFrequent(arr));