import { db, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "./firebase.js";


const userCollection = collection(db, "users");
const inputField = document.querySelector(".form-control");
let cardparent = document.querySelector(".cardparent");


const addData = async () => {

  try {


    if (!inputField.value) {
      alert("Please Enter Value!");
      return
    };


    if (inputField.value.length < 3) {
      alert("Enter value is Grater Than 3 Words!");
      inputField.value = "";
      return
    };


    const userObj = {
      value: inputField.value
    };


    const respons = await addDoc(userCollection, userObj);
    const uid = respons.id;
    console.log(userObj);

    inputField.value = "";

    getData()




  } catch (error) {
    alert(error.message);
  }
};



const getData = async () => {
  try {
    const querySnapshot = await getDocs(userCollection);
    let emptyArr = [];
    cardparent.innerHTML = "";

    querySnapshot.forEach((doc) => {

      const obj = {
        id: doc.id,
        ...doc.data()
      };
      console.log(obj);
      emptyArr.push(obj)
      console.log(emptyArr);
      cardparent.innerHTML += `<div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
aria-labelledby="ex1-tab-1">
<ul class="list-group mb-0">
<li class="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
style="background-color: #f4f6f7;">
<div>
<i class="btn fa-solid fa-check fw-bold text-success" onclick="todoComplete(this)"></i>
${obj.value}
</div>
<div>
<button class="btn btn-outline-primary border-0 fw-bold" type="button" id=${obj.id} onclick="editTode(this)"> <i class="fa-solid fa-pen"></i>
</button>
<button class="btn btn-outline-danger border-0 fw-bold" type="button" id=${obj.id} onclick="delTode(this)"><i
class="fa-solid fa-xmark"></i></button>
</div>
</li>
</ul>
</div>`
    });
  } catch (error) {
    alert(error.message)
  };
};


const delTode = async (ele) => {
  // console.log(ele.id);
  try {
    await deleteDoc(doc(db, "users", ele.id));
    getData();
  } catch (error) {
    alert(error.message);
  };
};


const editTode = async (ele) => {

  try {
    const editValue = prompt("Enter New Value!");

    await updateDoc(doc(db, "users", ele.id), {
      value: editValue,
    });
    getData();

  } catch (error) {
    alert(error.message)
  }

};

const todoComplete = (ele) => {
  let todoLi = document.querySelector(".fa-check");
  console.log(todoLi);
  ele.parentNode.parentNode.style.background = "lightblue";
};



window.addData = addData
window.addEventListener("load", getData)
window.delTode = delTode
window.editTode = editTode
window.todoComplete = todoComplete