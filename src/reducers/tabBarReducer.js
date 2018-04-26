export default (state = 'TAB_1',action)=>{
    switch(action.type){
      case 'selected_tab':
        return action.playload
      default:
        return state
    }
}