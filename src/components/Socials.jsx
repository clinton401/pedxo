import { useState } from "react";
import googleLogo from "../assets/svg/google-logo.svg";
import GitHubLogo from "../assets/svg/githubLogo.svg";
import { baseURL } from "../api";
import toast from "react-hot-toast";

const Socials = ({ isRegisterPage = false }) => {
  const [loading, setLoading] = useState(false);

  const oAuthHandler = async (type) => {
    if (type !== "google") {
      toast.error("Unsupported login method");
      return;
    }

    try {
      setLoading(true);

      await fetch(baseURL, { method: "GET" });

      window.location.href = `${baseURL}/auth/google`;
    } catch (err) {
      console.error("Error waking backend:", err);
      window.location.href = `${baseURL}/auth/google`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex sm:space-x-4 sm:flex-row flex-col space-x-0 relative">
      <button
        className="w-full flex items-center justify-center p-2 gap-[5px] sm:gap-[1-px] border-[2px] overview-expense-bg rounded-lg mb-[15px]"
        onClick={() => oAuthHandler("github")}
        disabled={loading}
      >
        <img src={GitHubLogo} alt="github logo" className="w-6 h-6" />
        <span className="font-medium text-xs sm:text-sm">
          {!isRegisterPage && "Continue with"} Github
        </span>
      </button>

      <button
        className="w-full flex items-center justify-center p-2 gap-[5px] sm:gap-[1-px] border-[2px] overview-expense-bg rounded-lg mb-[15px] relative"
        onClick={() => oAuthHandler("google")}
        disabled={loading}
      >
        <img src={googleLogo} alt="google logo" />
        <span className="font-medium text-xs sm:text-sm">
          {!isRegisterPage && "Continue with"} Google
        </span>

        {loading && (
          <span className="absolute right-3">
            <svg
              className="animate-spin h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              ></path>
            </svg>
          </span>
        )}
      </button>
    </div>
  );
};

export default Socials;
