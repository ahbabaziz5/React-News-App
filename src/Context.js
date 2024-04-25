//create context
//provider
//usecontext hook
import React, { createContext,useContext,useReducer,useEffect } from 'react'
import reducer from './reducer';

const initialState = {
  query:"html",
  nbPages:0,
  page:0,
  hits:[]
}



const AppContext = createContext();

const AppProvider = ({children})=>{
const[state,dispatch] = useReducer(reducer,initialState)
let API ="https://hn.algolia.com/api/v1/search"


const FetchApiData=async(url)=>{
  dispatch({
    type:"SET_LOADING"
  })
try{
const res = await fetch(url)
const data = await res.json()
console.log(data);
dispatch({
  type:"GET_STORIES",
  payload  :{
    isloading:true,
    hits : data.hits,
    nbPages:data.nbPages,
  }
})
}
catch(e){
console.log(e);
}





}
const removePost =(RemoveId)=>{
  dispatch({
    type:"REMOVE_POST",
    payload:RemoveId

  })
}

useEffect(()=>{

FetchApiData(`${API}?query=${state.query}&page=${state.page}`)

},[])

    return(
  <AppContext.Provider value={{...state,removePost}}>
    {children}
    </AppContext.Provider>


    )

}


//custom hook

const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useGlobalContext}
