import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useReducer } from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { Context } from '../contexts/AppContext';

const initialState = [{company : "Company", name : "Your Name", id : 0}]
export default function BuildModal () {
  const {setShowModal} = useContext(Context)
  const reducer = (state,action) =>{
    switch (action.type) {
      case "ADD_INPUT":
        return [
            ...state,
            {
              ...action.payoad,
              id : state.length === 0 ? 0 : state[state.length - 1].id + 1
            }
        ]
      case "REMOVE_INPUT":
        const filterdState = state?.filter(item => action.payload !== item.id);
        console.log("filter", filterdState)

        return filterdState;
        case "REMOVE_ALL":
          return []
      default:
        break;
    }
  }
const [currentState, dispatch] = useReducer(reducer,initialState);

  return (
    <AnimatePresence mode='wait'>
      <motion.div 
      id ="modal"
      initial ={{opacity : 0, scale : 0}}
      animate ={{opacity : 1, scale : 1}} 
      transition={{duration: 0.2, ease :'easeIn'}}
      exit={{opacity: 0, scale : 0,}}
      
      className=' bg-white shadow-xl rounded-lg w-[50%] m-auto h-[40rem] fixed top-[15rem] z-[1000] p-8 max-[720px]:w-[90%] max-[720px]:top-[10rem] max-[720px]:h-[60%] overflow-auto'>
        <div className=' flex flex-col gap-6'>
        <div className=' flex flex-col gap-3'>
        <h1 className=' text-3xl font-semibold'>Build a team</h1>
        <p>We specialize in helping you build a team.</p>
        </div>
        <div className=' flex w-[50%] shadow-md max-[720px]:w-full'>
          <button className=' bg-[#F99600] p-3 flex-1 rounded-tl-lg rounded-bl-lg' onClick={() =>{
            dispatch({type : "ADD_INPUT", payoad : {company : 'Company', name : "Your Name", id : 0}})
            //console.log("CLickced4 :", container)
          }}>Add</button>
          <button onClick={() =>{
            dispatch({type : "REMOVE_ALL"})
          }} className='bg-white p-3 flex-1 rounded-tr-lg rounded-br-lg'>Remove</button>
        </div>
        {
          currentState.map(item =>{
            return  <form className=' flex flex-col justify-between gap-8 max-[720px]:flex-col' id='form-container'>
            <div className='flex justify-between gap-8 max-[720px]:flex-col items-center'>
            <div className=' flex flex-col gap-3 w-full flex-1'>
                <label htmlFor="company" className=' font-semibold'>{item.company}</label>
                <input type="text" name="company" id="company" className=' border-[#C5E0FF] border h-[3rem] p-2 ' placeholder="Enter your company's name" />
              </div>
              <div className=' flex flex-col gap-3 w-full flex-1'>
                <label htmlFor="name" className=' font-semibold'>{item.name}</label>
                <input type="text" name="name" id="name" className=' border-[#C5E0FF] border h-[3rem] p-2' placeholder=' Enter your name' />
              </div>
              <CiCircleMinus className=' size-7 translate-y-4 max-[720px]:translate-y-0' onClick={() =>{
                dispatch({type : "REMOVE_INPUT", payload : item.id })
              }}  />
            </div>
          </form>
          })
        }
        {
          currentState.length === 0 ? null : (  <button className=' p-3  bg-gradient-to-tr from-[#FF9900] to-[#F2CB00] rounded-md text-white' onClick={() =>{
            setShowModal(false)
          }}> Build</button>)
        }
       
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
