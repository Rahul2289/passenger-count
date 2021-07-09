let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save");
count=0
function incbtn()  {
   count += 1
   console.log(count)
   countEl.innerHTML=count
}
function savebtn(){
  let saveEle = count + " - "
  saveEl.innerHTML += saveEle
}
