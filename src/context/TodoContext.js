import React, { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todd:"clean stuffs",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    upadateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togoleTodo:(id)=>{}
})



export default function useTodo(){
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider