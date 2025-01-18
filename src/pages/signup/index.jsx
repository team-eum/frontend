import { SignBox } from "../../components/signup/SignBox";
import { useState } from "react";
import { JobBox } from "../../components/signup/JobBox";
import { Datebox } from '../../components/signup/DateBox';
function SignUp() {
  const [info, setInfo] = useState({
    id: '',
    password: '',
    name:'',
    age: null,
    phoneNumber: '',
    region: '',
    gender:'',
    date: '',
    job: '',
  });
  const [theme,setTheme] = useState(3);
  return (
    <>
    {(theme !== 3) && (
    <SignBox theme = {theme} setTheme = {setTheme} info = {info} setInfo={setInfo}/>
    )}
    {theme === 3 && <JobBox theme = {theme} setTheme = {setTheme} info = {info} setInfo={setInfo}/>}
    {theme === 4 && <Datebox theme = {theme} setTheme = {setTheme} info = {info} setInfo={setInfo}/>}

    </>
  );
}

export default SignUp;
