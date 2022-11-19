let arr = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'];

converToTable(arr);


function converToTable(arr){
    const objects =[];
    arr.forEach(line => {
        let obj = JSON.parse(line);
        objects.push(obj);
    })
    const tableArr = [];
    tableArr.push("<table>");
    objects.forEach(obj => {
        tableArr.push("	<tr>");
        tableArr.push(`		<td>${obj.name}</td>`);
        tableArr.push(`		<td>${obj.position}</td>`);
        tableArr.push(`		<td>${obj.salary}</td>`);
        tableArr.push(" </tr>");
    })
    tableArr.push("</table>");

    console.log(tableArr.join("\n"));
}