import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import TasksList from './components/TaskList'
import UserList from './components/UserList'
import CommentList from './components/CommentList'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<TasksList />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/comments' element={<CommentList />} />
      </Route>
    </Routes>
  )
}

export default App
