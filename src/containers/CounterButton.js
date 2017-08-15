import {connect} from 'react-redux';
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch){
  return {
     incresase:function(){
     let action = increaseCounter();
     dispatch(action);
},
     decrease:function(){
     let action = decreaseCounter();
     dispatch(action);
   }
  }
}
//there is some way to return both functions in this container but I dont yet know how
//8/14 7pm removed txt being passed in to mapDispatch functions
//figured it out, was the comma line 11
export default connect(null,mapDispatchToProps)(CounterButton);
