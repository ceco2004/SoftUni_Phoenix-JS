
toHTML([`[{"name":"Pesho","score":479},
{"name":"Gosho","score":205}]`]
);

toHTML([`[{"name":"Pesho & Kiro",
"score":479
},
{"name":"Gosho, Maria & Viki",
"score":205
}]`]
);


function toHTML(stringJSON){
    let objects = JSON.parse(stringJSON);
    const htmlArr = [];
    htmlArr.push("<table>");
    htmlArr.push("<tr><th>name</th><th>score</th></tr>");
    objects.forEach(o => {
        let name = escape(o.name);
        let score = escape(o.score);
        let line = `<tr><td>${name}</td><td>${score}</td></tr>`;
        htmlArr.push(line);
    })
    htmlArr.push('</table>');

    console.log(htmlArr.join("\n"));
}

function escape(text){
    return text.toString()
    .replaceAll(/&/g, "&amp;")
    .replaceAll(/</g, "&lt;")
    .replaceAll(/>/g, "&gt;")
    .replaceAll(/"/g, "&quot;")
    .replaceAll(/'/g, "&#039;");
}