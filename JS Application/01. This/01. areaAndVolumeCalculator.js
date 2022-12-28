function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

function solve(area, vol, input) {
    let result = [];
   
    input.forEach(obj => {
        let {x, y, z} = obj;
        let o = {
            x: x, y: y, z: z
        };
        let a = area.call(o);
        let v = vol.call(o);
        result.push({area: a, volume: v});
    });

    console.log(JSON.stringify(result));

};


solve(area, vol, 
[{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}]);

solve(area, vol, 
    [{"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}]);