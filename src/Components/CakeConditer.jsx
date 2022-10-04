import React from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

const CakeConditer = (props) => {
  console.log(props.numOfCakes);
  return (
    <div>
        <h2>Number of cakes{props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake </button>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    numOfCakes:state.numOfCakes
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps,mapDispatchToProps) (CakeConditer)