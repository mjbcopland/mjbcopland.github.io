export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-10 py-20 min-h-screen">
      <h1 className="font-bold font-serif italic my-10 text-9xl drop-shadow-lg">
        Hi.{" "}
        <span aria-hidden role="img">
          👋
        </span>
      </h1>
      <h2 className="my-5 text-5xl">I&apos;m Michael.</h2>
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
    </main>
  );
}
