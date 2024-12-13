import signupImg from "../assets/Images/signup.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join others in learning to code with CodingBits"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup