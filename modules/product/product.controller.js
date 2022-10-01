const productService= require('./product.services')

async function getAllProducts(){
    return await productService.getAllProducts();
}
async function getProductById(id){
    return await productService.getProductById({_id:id});
}
async function createProduct(product){
    return await productService.createProduct(product);
}
async function deleteProduct(id){
    return await productService.deleteProduct({_id:id});
}

module.exports={getAllProducts, getProductById, createProduct, deleteProduct}