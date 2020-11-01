//Local Storage
//yine aynı applicationda bu localstorage yapısı sessiona benziyo key valu değeriyle verimizi depolarız.Verilerimi ister applicationdan ister jsden silerim aksi taktirde kapansa bile verilerimiz orada kalmaya devam eder.
//Dikkat: sessionda tarayıcıyı kapatınca uçar giderdi veriler ama local storagede gitmez.

//setItem
/*
localStorage.setItem("Harekek","burpee");
localStorage.setItem("Tekrar",50);//number 50 yazsam bile bunu string olarak kayıt eder;
*/

//hatta number olduğunu görelim
/*
const value=localStorage.getItem("Tekrar");//getle getir dedim ve yukarıda tanımladığım Tekrarı yazdım bu zaten localde kayıtlı artık
console.log(value);
console.log(typeof value);//ve değeri string :)*/

//Clear Local Storage-- hepsini silme
// localStorage.clear();


// localStorage.setItem("Harekek","burpee");
// localStorage.setItem("Tekrar",50);

/* 
-- console.log(localStorage.getItem("sport"))//getıtem sayesinde bir anahtarı sorgulayalım sonuç: böyle bir değer yok consolede null geldi

if(localStorage.getItem("Harekek")===null)
{
    console.log("Sorguladğınız veri yok");
}
else
{
    console.log("Veri bulunuyor");
}*/

 /*Local storage Array yazma
//string olarak yazmak ve almak istiyorum bunun için json içindeki 2 fonksiynumuzu kullanıcaz

const todos=["Todo 1","Todo 2","Todo 3"];
//localStorage.setItem("todos",JSON.stringify(todos));
//const value=JSON.parse(localStorage.getItem("todos"));//json.pars kullandım her bir elemanımı alıp arrye dönüştürecek
//console.log(value);
   //yani biz array yazarken ve okurken json.stringify yada json.parse kullanacağız */

//---------------------------------

 // Bunlarla iligli örnek alalım todolist projemizde aldığımız veriler iarreye atiycez ordanda localstaregeye
 
const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit",addTodo);//formum submit olduğunda addTodo çalışsın

function addTodo(e){
    
    const value=todoInput.value;//o anki değerimi aldım;
    //aldığım değeri arrayi yazmam lazım. Eğer localstoragede o arry varsa onu ilkbaşt aelde edip onun üzerine bu rrayi yazmam gerekiyo eğer yoksa onu oluşturmam gerekiyor;
    let todos;
    //bu keyimiz burda varmı bakalım
    if(localStorage.getItem("todos")===null){//localstoragedeki todosu kontrol eder.
        todos=[];//nullsa boş başlatmak istiyorum. İlk başta tabi boş başlar direk todos.pusha gider value ekler
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));//biz array olarak aldık json.pars ile 
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();//kullandımki submit olunca kendi sayfama gitmesin
}

