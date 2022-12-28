class Ticket {
    constructor(destination, price, status){
        this.destination = destination;
        this.price = +price;
        this.status = status;
    }
}

// let tickets = reciveTickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// );

let tickets = reciveTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.98|sold',
'Boston|126.20|departed'],
'price'
);

printTickets(tickets);


function printTickets(tickets){
    tickets.forEach(t => {
        console.log(`${t.constructor.name} ${JSON.stringify(t)}`)
    })
}

function reciveTickets(arr, criteria){
    let tickets = [];
     arr.forEach(e => {
       let arr = e.split("|").map(x => x.trim())
        let ticket = new Ticket(arr[0], arr[1], arr[2]);
        tickets.push(ticket);
     });

     let sortingFunc = eval(`${criteria}Sorting`);
      
     tickets.sort(sortingFunc);

 return tickets;
};

function destinationSorting(a, b){
    return a.destination.localeCompare(b.destination);
}

function statusSorting(a, b){
    return a.status.localeCompare(b.status);
}

function priceSorting(a, b){
    return a.price - b.price;
}

    