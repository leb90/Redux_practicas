export default (state = '',action)=>{
    switch(action.type){
      case 'selected_tab':
        return action.playload
      default:
        return state
    }
}