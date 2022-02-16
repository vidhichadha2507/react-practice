import React, {useState } from 'react';
import "./style.css";
const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const[items,setItems]=useState([]);


    const addItem=()=> {
        if(!inputdata){
          alert('plz fill the data')

        }
        else{

            const myNewInputData ={
                id:new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData ]);
             setInputData("");
        }
    }

    const deleteItem=(index)=>
    {
        const updatedItems=items.filter((curElem)=>
        {
return curElem.id!== index;
        })

        setItems(updatedItems);
    }
  return <>
  <div className="main-div">
      <div className="child-div">
          <figure>
              <img src="./images/todo.svg" alt="todo logo"  />
       <figcaption>TO DO LIST</figcaption>
       
       
          </figure>
          <div className="addItems">
              <input type="text"
              placeholder = "😎👏 Add Item"
              className="form-control"
            value={inputdata}
            onChange={(event)=> setInputData(event.target.value)}
              
              
              
              />

          <i className="fa fa-plus add-btn" onClick={addItem}></i>

          </div>
           <div className="showItems">

            {
                items.map((curElem, index)=>{
                    return(<div className ="eachItem" key={curElem.id}>
    <h3>{curElem.name}</h3>
    <div className="todo-btn">
  <i className="far fa-edit add-btn"></i>
  <i className="far fa-trash-alt add-btn" onClick={()=>
deleteItem(curElem.id)}></i>

    </div>



</div>)
                })
            }






           </div>




          <div className="showItems">
              <button className="btn effect04" data-sm-link-text="Remove All">
                  <span> CHECK LIST</span>
              </button>
          </div>

      </div>
      </div></>;
};

export default Todo;
