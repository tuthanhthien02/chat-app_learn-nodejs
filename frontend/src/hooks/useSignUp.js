import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async (signUpProps) => {
    const { fullName, username, gender, password, confirmPassword } =
      signUpProps;
    const success = handleInputError(signUpProps);
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          gender,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};

export default useSignUp;

function handleInputError(signUpProps) {
  const { fullName, username, password, confirmPassword } = signUpProps;
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
}
