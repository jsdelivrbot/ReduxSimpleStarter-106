//Every Reducer takes 2 arguments, state and action.//
//The state in this sense, is not the application state but only the state this reducer is responsible for//

export default function(state = '', action){
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}