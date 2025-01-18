import { SignBox } from "../../components/signup/SignBox";
import { useState } from "react";
import { JobBox } from "../../components/signup/JobBox";
import { Datebox } from '../../components/signup/Datebox';
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
  const [theme,setTheme] = useState(4);
  return (
    <>
    {(theme !== 3) && (theme !== 4) && (
    <SignBox theme = {theme} setTheme = {setTheme} info = {info} setInfo={setInfo}/>
    )}
    {theme === 3 && <JobBox theme = {theme} setTheme = {setTheme} info = {info} setInfo={setInfo}/>}
    {theme === 4 && <Datebox theme = {theme} setTheme = {setTheme} info = {info} setInfo={setInfo}/>}

    </>
  );
}

export default SignUp;
