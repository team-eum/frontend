import axios from "axios"
export async function fetchSignup (data) {
  const response = await axios.post("https://prod.eum-backend.scdn.pw/user/signup", data);

  return response;
}