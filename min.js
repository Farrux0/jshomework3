let obj = receipt()
let obj1 = receipt()



if(['Milk'] in obj){

    console.log(`вы заказали ${['Milk']} вид ${obj['Milk'].info} and ${['Sugar']} вид ${obj['Sugar'].info}  с вас ${(obj['Milk'].price + obj['Sugar'].price)} ` );
}else if(["Lavash"] in obj1){
    
    
    
    console.log(`вы заказали ${["Lavash"]} вид ${obj1["Lavash"].info} and ${['Hot-dog']} вид ${obj1['Hot-dog'].info}  так же ${['Cola']} большой ${obj1['Cola'].info} с вас ${(obj1["Lavash"].price + obj1['Hot-dog'].price + obj1['Cola'].price)} ` );

}else if (['Fanta'] in obj1){
    console.log(`вы заказали ${['Cola']} вид ${obj1['Cola'].info} and ${['Fanta']} вид ${obj1['Fanta'].info}  так же ${['Lipton']} большой ${obj1['Lipton'].info} еще и ${['Nestle']} большой 10 L с вас ${(obj1['Cola'].price + obj1['Fanta'].price + obj1['Lipton'].price + obj1['Nestle'].price )} ` );
}
    
  


