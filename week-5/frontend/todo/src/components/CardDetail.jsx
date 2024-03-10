import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function CardDetail(){
    const {id} = useParams()

    const [selectedTodo,setSelectedTodo] = useState(null)
    useEffect(() => {
        axios
          .get(`/api/todos/${id}`)
          .then((response) => {
            setSelectedTodo(response.data[0]);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []);
    console.log(selectedTodo)
    return(<>{selectedTodo ? <><h1> {"Title:" + selectedTodo.title}</h1><h2> {"Description:" + selectedTodo.description}</h2></>: "Is Loading"}</>)
}
export default CardDetail;