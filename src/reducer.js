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
    case "SEARCH_POST":
        return{
            ...state,
            query:action.payload
        }
case "NEXT_PAGE":
    let pageInc = state.page +1;
    if(pageInc > state.nbPages){
        pageInc = 0;
    }
    
    return {
        ...state,
        page:pageInc
    }


case "PREV_PAGE":
    let pageNum = state.page;
    if(pageNum <= 0){
        pageNum= 0;
    }
    else{
        pageNum =pageNum-1
    }

   
    return {
        ...state,
        page:pageNum
    }


          
    }
    return state;

}
export default reducer;