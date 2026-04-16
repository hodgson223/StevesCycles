import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP login (no backend yet)
    localStorage.setItem("isAdmin", "true");

    navigate("/Admin/blog");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-8 space-y-5"
      >
        <h1 className="text-2xl font-semibold text-center">
          Admin Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-3 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 py-3 rounded-md font-semibold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}