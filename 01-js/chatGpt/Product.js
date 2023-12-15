class Product {

    constructor(name, price, quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    getName(){
        return this.name 
    }

    getPrice(){
        return this.price 
    }
    getQuantity(){
        return this.quantity
    }
    setPrice(newPrice){
        this.price = newPrice
    }
    setQuantity(newQuantity){
        this.quantity = newQuantity
    }
}

module.exports = Product