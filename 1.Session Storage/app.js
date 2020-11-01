//Session oturum anlamına gelir. Oturumun açık kaldığı sürece session'da depolanan veriler kalır. fakat sekmeyi browseri kapatırsak bu veriler siliniyor.
//Session Storage - key and value --> yani eklemek için key anahtar ve value değer verirsin. bunlarıda işte application sessionstoregede görürsün

//butonları seçme

const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");

//Inputlar

const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);//butona tıklayınca
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){//butona tıklanınca
 sessionStorage.setItem(addkey.value,addvalue.value);//sessionstoregeye= addkey inputunu ve 
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}

console.log(window);