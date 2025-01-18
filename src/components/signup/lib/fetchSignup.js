import axios from "axios";
export async function fetchSignup(data) {
  const response = await axios.post(
    `${process.env.BASE_URL}/user/signup`,
    data
  );

  console.log(response);
}
