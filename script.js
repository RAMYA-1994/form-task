const form=document.getElementById('data');
const tbody=document.getElementById('table');
const collection = document.getElementsByClassName("food");



form.addEventListener('submit',function(e){
  e.preventDefault();
  let val=""
  console.log(collection);
  for(let i=0;i<collection.length;i++){
if(collection[i].checked){
  val= val+" "+collection[i].value 

}
  }


const firstName=document.getElementById('first name').value;
const lastName=document.getElementById('last name').value;
const Address=document.getElementById('Address').value;
const pincode=document.getElementById('pincode').value;
const Gender=document.getElementById('Gender').value;
// const Food=document.getElementById('Food').value;
const Country=document.getElementById('Country').value;
const State=document.getElementById('State').value;

const newRow=tbody.insertRow();

const cell1=newRow.insertCell(0);
const cell2=newRow.insertCell(1);
const cell3=newRow.insertCell(2);
const cell4=newRow.insertCell(3);
const cell5=newRow.insertCell(4);
const cell6=newRow.insertCell(5);
const cell7=newRow.insertCell(6);
const cell8=newRow.insertCell(7);

cell1.textContent=firstName;
cell2.textContent=lastName;
cell3.textContent=Address;
cell4.textContent=pincode;
cell5.textContent=Gender;
cell6.textContent=val;
cell7.textContent=Country;
cell8.textContent=State;

})


