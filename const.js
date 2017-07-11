const aConst = 1;

function testConst() {
    const aConst = 5;
    console.log(aConst);

    {
        const blockedConst = 'daryl';
        console.log(blockedConst);
    }

    //console.log(blockedConst);

    {
        let aConst = 5;
        console.log(aConst);
    }

    {
        //var aConst = 5;
    }
}

console.log(aConst);
testConst();