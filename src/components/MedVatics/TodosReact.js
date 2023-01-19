import React, { useState ,useEffect} from 'react'
import './style.css'

const TodosReact = () => {
    // FETCHING DATA FROM LOCAL STORAGE
    const LocalStorageData = ()=>{
        const list = localStorage.getItem("medvaticsTodo")
        if(list){
            return JSON.parse(list)
        }else{
            return [];
        }
    }
    const [inputData , setInputData]=useState("")
    const [newItems ,setNewItems]=useState(LocalStorageData)
    const [isEditItem , setIsEditItem]=useState("")
    const [toggleButton , setToggleButton]=useState(false)

    // STORING DATA INTO LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem("medvaticsTodo",JSON.stringify(newItems))
    }, [newItems])

    const addItem=()=>{
        if(!inputData){
            alert('Please enter something to add.')
        }
        else if(inputData && toggleButton){
            setNewItems(    
                newItems.map((currentElement)=>{
                    if (currentElement.id === isEditItem) {
                        return {...currentElement,name:inputData}
                    }
                    return currentElement
                 })
        )
        setInputData('')
        setIsEditItem(null)
        setToggleButton(false)
    }
        else{
            const newInputDataBundle = {
                id:new Date().getTime().toString(),
                name:inputData
            }
            setNewItems([...newItems,newInputDataBundle])
            setInputData('')
        }
    }

    const editItem = (index)=>{
        const item_todo_edited = newItems.find((currentElement)=>{
            return currentElement.id === index
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index)
        setToggleButton(true)
    }

    // DELETE TODOS
    const deleteItem=(index)=>{
        const remainingTodos = newItems.filter((currentElement)=>{
            return currentElement.id !==index
        })
        setNewItems(remainingTodos)
    }
    const RemoveAll = ()=>{
        setNewItems([])
    }

    // save data into local storage
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/logo.svg" alt="todoLogo" />
                    <figcaption>Medvatics LLP</figcaption>
                </figure>
                <div className="AddItem">
                    <input type="text" 
                            placeholder='✍️ Add here...' 
                            className='form-control'
                            value={inputData} 
                            onChange={(event)=>setInputData(event.target.value)}
                    />
                    {
                        toggleButton ?
                        (<i className="fa fa-edit add-btn" onClick={addItem}></i>):
                        (<i className="fa fa-plus add-btn" onClick={addItem}></i>) 
                    }
                    {/* <i className="fa fa-plus add-btn" onClick={addItem}></i> */}
                </div>
                    <div className="showItems">
                        {
                            newItems.map((currentElement)=>{
                             return(
                                <div className="eachItem" key={currentElement.id}>
                                <h3>{currentElement.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn" onClick={()=>editItem(currentElement.id)}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currentElement.id)  }></i>
                                    </div>
                                </div>
                            ) 
                            })
                        }
                    </div>

                <div className="showItems">
                    <button className="btn effect04" data-sm-link-teXt="REMOVE ALL" onClick={RemoveAll}>
                        <span>CHECK LIST</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodosReact
