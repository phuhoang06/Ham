let products = [];
// ham de hien thi danh sach
function getProducts() {
    let contents = '';
    for (let i = 0; i < products.length; i++) {
        contents += `<tr>
        <td>${products[i]}</td>
        <td><button onclick="fixProduct(${i})">Edit</button></td>
        <td><button onclick="deleteProduct(${i})">Delete</button></td>
    </tr>`
    }
    document.getElementById("contents").innerHTML = contents;
// in lai du lieu vao trong bang
}
getProducts();
function addProduct() {
    //lay du lieu tu o input
    let product = document.getElementById('newProduct').value;
    // them du lieu vao mang
    products.push(product);
    // update lai bang
    getProducts();
    //xoa thong tin trong o input
    document.getElementById('newProduct').value='';

}
// Sua gia tri trong mang
function fixProduct(id) {
     let product = prompt('Sửa đi!')
    if (product !== null&& product.trim() !== '') {
        products[id]= product
    }
     getProducts();
}
// Xoa gia tri trong mang
function deleteProduct(id) {
    let check = confirm("are you sure you want to delete?");
    if (check) {
        products.splice(id, 1);
        getProducts();
    }
}
