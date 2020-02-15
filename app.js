function sleep(ms){
    return Promise(resolve => setTimeout(resolve, ms));
}

class order {
    delivered = false;
    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    summarize(){
        const summary = 'order id: ' + 
    this.id + 
    ', message: ' +
    this.message + 
    ', delivered: ' + 
    this.delivered;

    return summary
    }

    deliver = async () => {
        await sleep(2000);
        this.delivered = true;
    }


    // (parametrit, p2, ...) => {koodi}
    summarize_2 = async () => {
        await sleep(2000);

        const summary = 'order id: ' + 
        this.id + 
        ', message: ' +
        this.message + 
        ', delivered: ' + 
        this.delivered;
    
        return summary
    
    }
}

/*let order = {
    id: 31234,
    message: "my order",
    delivered: false
}*/

var order_id = 1234;
const order_message = 'my order';
var order_message1 = "my order";
var order_message2 = `my order: ${order_id}`;

let order_delivered = false;

/* function summarize_order (id, message, delivered){
    const summary = 'order id: ' + 
    id + 
    ', message: ' +
    message + 
    ', delivered: ' + 
    delivered;

    return summary
}*/

let order_obj = new order(1234, 'second order');

//const order_summary = summarize_order(order.id, order.message, order.delivered);
//const order_summary = summarize_order(order_obj.id, order_obj.message);
//console.log(order_summary);

const order_summary = order_obj.summarize();
console.log("Vaihe1");

order_obj.deliver()
    .then(() => {
        return order_obj.summarize_2();
    })
    .then( ())

order_obj.summarize_2()
    .then((summary) => {
        console.log(summary);
    })

//order_delivered = true;
//const order_summary_2 = summarize_order(order_id, order_message, order_delivered);
//console.log(order_summary_2);

//type error to const avriable
// order_id=121




