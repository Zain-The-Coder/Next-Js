import Link from "next/link";

export default function Signup({para}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <form className="bg-white text-black p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">{para ? "Sign Up" : "Sign In"}</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {para ?
        <p>Already Have An Account ? <Link href='/login'>Login</Link></p> :
        <p>Don't Have An Account ? <Link href="/">Sign Up</Link></p>
        }
        

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
         {para ? "Sign Up" : "Sign In"}
        </button>
      </form>

    </div>
  );
}
