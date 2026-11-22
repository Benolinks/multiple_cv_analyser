import { PiToolboxFill } from "react-icons/pi";
import { Link } from "react-router-dom";



const Signup = () => {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-10">
      <section className="w-full max-w-md rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
        <Link to="/" className="mx-auto flex w-fit items-center gap-2 text-slate-900">
          <span className="grid size-11 place-items-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
            <PiToolboxFill className="size-7" />
          </span>
          <span className="text-xl font-bold tracking-tight">
            CV <span className="text-blue-700">Analyzer</span>
          </span>
        </Link>

        <div className="mt-7 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Create account</h1>
          <p className="mt-2 text-sm text-slate-500">
            Enter your details to create a new account.
          </p>
        </div>

        <form action="/register" method="post" className="mt-7 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              autoFocus
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="password_confirmation" className="mb-2 block text-sm font-semibold text-slate-700">
              Confirm password
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              autoComplete="new-password"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Sign up
          </button>
        </form>

        <div className="border rounded-xl
         hover:text-white hover:bg-blue-800
          py-3 my-3 mt-8 transition-all duration-500">
            <Link 
            className=" flex items-center justify-center"
            to="/login">
          ALREADY HAVE AN ACCOUNT? LOGIN 
        </Link>
        </div> 
      </section>
    </main>
  );
};

export default Signup;
