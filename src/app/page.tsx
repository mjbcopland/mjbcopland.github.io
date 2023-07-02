export default function Home() {
  return (
    <main className="relative mx-10 min-h-screen max-w-screen-lg lg:mx-auto">
      <div className="absolute inset-0 bottom-[33%] grid place-items-center">
        <div className="flex w-full max-w-prose flex-row items-center justify-between space-x-10">
          <div>
            <h1 className="my-5">Hi, I&apos;m Michael.</h1>
            <p className="leading-loose">
              Find me on{" "}
              <a href="https://github.com/mjbcopland" target="_blank" rel="noreferrer">
                GitHub
              </a>
              ,{" "}
              <a href="https://www.linkedin.com/in/mjbcopland" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              , or{" "}
              <a href="mailto:mjbcopland@gmail.com" target="_blank" rel="noreferrer">
                email
              </a>
              .
              <br />
              Looking for something printable?{" "}
              <a href="/static/michael_copland_cv.pdf" target="_blank" rel="noreferrer">
                Here&apos;s my CV
              </a>
              .
            </p>
          </div>
          <div aria-hidden role="img" className="text-8xl">
            👋
          </div>
        </div>
      </div>
    </main>
  );
}
