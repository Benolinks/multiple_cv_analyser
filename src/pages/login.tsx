import { PiToolboxFill } from "react-icons/pi";
import { Link } from "react-router-dom";


const csrfToken =
  document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? "";

const Login = () => {
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
          <h1 className="text-2xl font-bold text-slate-900">Sign in</h1>
          <p className="mt-2 text-sm text-slate-500">
            Enter your account details to continue.
          </p>
        </div>

        <form action="/login" method="post" className="mt-7 space-y-5">
          <input type="hidden" name="_token" value={csrfToken} />

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
              autoFocus
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              placeholder="Enter your password"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              name="remember"
              value="1"
              className="size-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
            />
            Remember me
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Sign in
          </button>
        </form>
            
        <div className="border
         rounded-xl hover:text-white
          hover:bg-blue-800 py-3  my-3 mt-8
          transition-all duration-500">
            <Link 
            className=" flex items-center justify-center"
            to="/signup">
          CREATE AN ACCOUNT 
        </Link>
        </div> 
      </section>
    </main>
  );
};

export default Login;
