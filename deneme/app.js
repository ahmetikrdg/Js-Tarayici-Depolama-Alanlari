//     //buton 
// const btnadd=document.querySelector("#add");
// const btndelete=document.querySelector("#delete")
// const btnclear=document.querySelector("#clear");

//     //input
// const addkey=document.querySelector("#addkey");
// const addvalue=document.querySelector("#addvalue");
// const deletekey=document.querySelector("#deletekey");

// btnadd.addEventListener("click",runadd);
// btndelete.addEventListener("click",rundelete);
// btnclear.addEventListener("click",runclear);

// function runadd(e){
//     sessionStorage.setItem(addkey.value,addvalue.value);
// }

// function rundelete(e){
//     sessionStorage.removeItem(addkey.value);
// }

// function runclear(e){
//     sessionStorage.clear();
// }

//Inputtaki değerleri arrye atıp sonra localstrgeye yadırma

const todoForm=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

todoForm.addEventListener("submit",run);

function run(e){
    const value=todoInput.value;//o anki değerimi aldım;
    //aldığım değeri arrayi yazmam lazım. Eğer localstoragede o arry varsa onu ilkbaşt aelde edip onun üzerine bu rrayi yazmam gerekiyo eğer yoksa onu oluşturmam gerekiyor;
    let todoz;
    //bu keyimiz burda varmı bakalım
    if(localStorage.getItem("todoz")===null){//localstoragedeki todosu kontrol eder.
        todoz=[];//nullsa boş başlatmak istiyorum
    }
    else{
        todoz=JSON.parse(localStorage.getItem("todoz"));//biz array olarak aldık
    }
    todoz.push(value);
    localStorage.setItem("todoz",JSON.stringify(todoz));

    e.preventDefault();//kullandımki submit olunca kendi sayfama gitmesin
}
