import { useState } from "react";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://microanpr.xyz/", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <main>
      <ul role="list" className="link-card-grid">
        <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="text-center">
              <h1 className="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight">
                Contact us
              </h1>
              <p
                className="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
                Have questions or want to discuss a project? Reach
                out, and let's craft the perfect solution with our
                services.
              </p>
            </div>
            <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                  <div className="grid gap-4">

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" ><input type="text" id="first-name" placeholder="First Name"
                          className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                          name="first-name" autoComplete="first-name" required /></label>
                      </div>
                      <div>

                        <label htmlFor="last-name"><input type="text" id="last-name" placeholder="Last Name"
                          className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                          name="last-name" autoComplete="last-name" required /></label>
                      </div>
                    </div>
                    <label htmlFor="email"><input type="email" id="email" placeholder="Email"
                      className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                      name="email" autoComplete="email" required /></label>
                    <label htmlFor="phone"><input type="phone" id="phone" placeholder="Phone Number"
                      className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"

                      name="phone" autoComplete="phone" required /></label>
                    <label htmlFor="company"><input type="company" id="company" placeholder="Company"
                      className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                      name="company" autoComplete="company" required /></label>
                    <label htmlFor="message">
                      <textarea id="message" placeholder="Details" name="message" autoComplete="off" required
                        className="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"
                      />
                    </label>
                    <div className="mt-4 grid">
                      <button className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-yellow-400 px-4 py-3 text-sm font-bold text-neutral-700 outline-none ring-zinc-500 transition duration-300 hover:bg-yellow-500 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base">Send Message</button>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        We'll get back to you in 1-3
                        Hours.
                      </p>
                    </div>
                    {responseMessage && <p>{responseMessage}</p>}
                  </div>
                </form>
              </div>
              <div className="divide-y divide-neutral-300 dark:divide-neutral-700">
                <div className="flex gap-x-7 py-6">
                  <div className="grow">
                    <h3
                      className="font-bold text-neutral-700 dark:text-neutral-300"
                    >
                      FAQ
                    </h3><p
                      className="mt-1 text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      Explore our FAQ for quick, clear answers
                      to common queries.
                    </p><a
                      className="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-zinc-600 outline-none ring-zinc-500 transition duration-300 hover:text-zinc-800 focus-visible:ring dark:text-zinc-400 dark:ring-zinc-200 dark:hover:text-zinc-200 dark:focus:outline-none dark:focus:ring-1"
                      href="#"
                    >Visit FAQ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ul>
    </main>
  );
}