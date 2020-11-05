import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyPen } from '../redux';
function PenContainer(props) {
    const[number, setNumber]=useState(1)
    return (
    <div>
      <h1>Pencomponent container</h1>
          <h1>Number of Pens - {props.numberOfPens}</h1>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value )}/>
          <button onClick={()=>props.buyPen(number)}>Buy {number} Pen</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numberOfPens: state.numberOfPens,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buyPen: function (number) {
      dispatch(buyPen(number));
    },
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(PenContainer);
