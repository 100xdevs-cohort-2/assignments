import {useState, useEffect} from "react"
import axios from "axios"
import '@radix-ui/themes/styles.css';
import {Theme, Button, Text, Flex} from '@radix-ui/themes'

export function Cards(){
    const [info, setInfo] = useState([{
        name: "",
        group: "",
        interest: ""
    }
    ])
    useEffect(()=>{
        axios.get("http://localhost:3001/cards").then(function(res){
            setInfo(res.data.cards)

            console.log(res.data.cards)
        })
    }, [])

    return(
        <>
            {info.map(function(todo){
                return(
                    <Flex key={todo.cardId} >
                        <CardTemplate  cardId = {todo.cardId} name = {todo.name} group = {todo.group} interest = {todo.interest}/>  
                    </Flex>
                )
            })}
        </>
    )
}

function CardTemplate({id, name, group, interest}){
    return(
        <div>
            <Text as = "div" color="gray" size="2">
                {name}
            </Text>
            <Text as = "div" color="gray" size="2">
                {group}
            </Text>
            <Text as = "div" color="gray" size="2">
                {interest}
            </Text>
            <Button>
                LinkedIn
            </Button>
            <Button>
                Twitter
            </Button>
        </div>
    )
}