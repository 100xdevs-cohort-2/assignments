class Inventory {
    constructor(){

        this.inventory = []
    }
    addProduct(product){

        this.inventory.push(product)
    }
    removeProduct(productName) {
        const index = this.inventory.findIndex(product => product.getName() === productName);
        try {
            if (index !== -1) {
                this.inventory.splice(index, 1);
            } else {
                throw new Error("Product not found");
            }
        } catch (error) {
            throw new Error("Error removing product: " + error.message);
        }
    }
    
    getTotalValue(){
        return this.inventory.reduce((total, product) => total + product.getPrice() * product.getQuantity(), 0);
    }
    getProductByName(productName){
        return this.inventory.find(product => product.getName() === productName)
    }
}

module.exports = Inventory