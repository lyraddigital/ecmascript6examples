function testScopes() {
    let letLocalScope = 1;
    let letGlobalScope = 9;

    if(true) {
        var varLocalScope = 3;
        var varLocalScope = 4;
        let letLocalScope = 2;

        {
            let innerBlockScope = 6;
            console.log(innerBlockScope);
        }

        //console.log(innerBlockScope);
        console.log(letGlobalScope);
        console.log(letLocalScope);
    }

    console.log(varLocalScope);
    console.log(letLocalScope);
}

testScopes();

/*for(var i = 0; i < 10; i++) {
    //setTimeout(function() { console.log(i)}, 1000);

    (function(index) {
        setTimeout(function() { console.log(index)}, 1000);
    }(i))
}*/

for(let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i)}, 1000);
}