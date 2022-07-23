
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {
    AsyncDecrementCreator,
    AsyncIncrementCreator,
    decrementCreator,
    incrementCreator
} from "./store/CountReducer";
import {AsyncFetchUsers} from "./store/userReducer";


function App() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)

  return (
      <div className='App'>
          <div style={{fontSize: 50}}>{count}</div>
          <button onClick={() => dispatch(AsyncIncrementCreator()) }>Increment</button>
          <button onClick={() => dispatch(AsyncDecrementCreator())} >Decrement</button>
          <button className='btn' onClick={() => dispatch(AsyncFetchUsers())}>Get Users</button>
          <div className='users'>
              {users.map(user =>
                  <div style={{border: '1px solid teal'}} key={user.id} className='user'>
                      {user.id}. {user.name}, {user.address.street}
                  </div>
              )}
          </div>
      </div>
)}

export default App;
