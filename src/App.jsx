
import './App.css'
import Forms from './components/Forms'
import Input from './components/Input'
import Password from './components/Password'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import RegisterForm from './components/RegisterForm'

function App() {


  return (
    <div>
      <Input />
      <Password />
      <Forms />
      <Checkbox />
      <Radio />
      <hr />
      <h1>Register Here</h1>
      <RegisterForm />
    </div >
  )
}
export default App
