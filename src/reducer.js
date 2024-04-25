const reducer = (state,action)=>{
    switch(action.type){

 case "SET_LOADING":
    return{
        ...state,
        isloading:true
    }



        case "GET_STORIES":
            return{
                ...state,
                hits:action.payload.hits,
                isloading:false,
                nbPages: action.payload.nbPages
            }
case "REMOVE_POST":
    return {
        ...state,
        hits:state.hits.filter(
            (removeEle) => removeEle.objectID !==  action.payload
    )}



          
    }
    return state;

}
export default reducer;