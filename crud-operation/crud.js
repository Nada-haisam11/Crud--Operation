
// crud - create , retrieve , update , delete
var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCategoryInput=document.getElementById("productCategory");
var productDescriptionInput=document.getElementById("productDescription");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName("form-control");
var products;
var currentIndex=0;

if(localStorage.getItem('productList')==null)
{
     products=[];
}
else{
     products=JSON.parse(localStorage.getItem('productList'));
     displayData();
}



addBtn.onclick=function()
{
     if(addBtn.innerHTML=='add product'){
          addProduct();
     }
     else
     {
          updateProductBtn();
     };
     displayData();
     clearForm();
}


function addProduct()
{
          var product={
          name:productNameInput.value,
          price:productPriceInput.value,
          catecory:productCategoryInput.value,
          description:productDescriptionInput.value
     }
     products.push(product);
     localStorage.setItem('productList',JSON.stringify(products))
}

function displayData()
{
     console.log(products);

   var cartona='';
   for(var i=0;i<products.length;i++){
     cartona+=
     `<tr>
     <td>${products[i].name}</td>
     <td>${products[i].price}</td>
     <td>${products[i].catecory}</td>
     <td>${products[i].description}</td>
     <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>Delete</button></td>
     <td><button onclick="updateProduct(${i})" class='btn btn-warning'>Update</button></td>
     </tr>`
   }
   document.getElementById("tableBaody").innerHTML=cartona;
}


function clearForm()
{
 for(var i=0;i<inputs.length;i++)
 {
     inputs[i].value='';
 }
}

function deleteProduct(index)
{
    products.splice(index,1);
    displayData();
    localStorage.setItem('productList',JSON.stringify(products))
}


function search(searchTxt)
{
     var cartona='';
     for(var i=0;i<products.length;i++){
          if(products[i].name.includes(searchTxt)){
               cartona+=
               `<tr>
               <td>${products[i].name}</td>
               <td>${products[i].price}</td>
               <td>${products[i].catecory}</td>
               <td>${products[i].description}</td>
               <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>Delete</button></td>
               <td><button  class='btn btn-warning'>Update</button></td>
               </tr>`
     }
     }
     document.getElementById("tableBaody").innerHTML=cartona;

}

function updateProduct(index)
{
     currentIndex=index;
     var product=products[index];
     productNameInput.value=product.name;
     productPriceInput.value=product.price;
     productCategoryInput.value=product.catecory;
     productDescriptionInput.value=product.description;
     addBtn.innerHTML="update product";
}
          
   
function updateProductBtn(){
     var product={
          name:productNameInput.value,
          price:productPriceInput.value,
          catecory:productCategoryInput.value,
          description:productDescriptionInput.value
     }

     products[currentIndex].name=product.name;
     products[currentIndex].price=product.price;
     products[currentIndex].catecory=product.catecory;
     products[currentIndex].description=product.description;

     localStorage.setItem('productList',JSON.stringify(products))
}






















