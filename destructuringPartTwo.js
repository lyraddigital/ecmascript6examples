function setThemeSettings({ themeColor: c, backgroundThemeColor: b }) {
    //var c = settings.themeColor;
    //var b = settings.backgroundThemeColor;

    console.log(`Color: ${c}, Background Color: ${b}`);
}

function printCoordinate([x,y,z]) {
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
}

function failSoftFunction({ a, b, c = 3, d }) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

setThemeSettings({ themeColor: 'red', backgroundThemeColor: 'white' });
printCoordinate([50,100,200]);
failSoftFunction({a:1, b:4});
failSoftFunction({a:1, b:4, c:7});
failSoftFunction({a:1, b:4, d:15});