export default function Footer() {
  return (
    <article className="w-full flex items-center justify-center mt-24">
      <p className="text-white">
        Made by {' '}
        <a className="font-black" href="https://www.linkedin.com/in/alcantara2509/" target="_blank" rel="noreferrer">
          Thiago Alcântara {' '}
        </a>
        using {' '}
        <a className="font-black" href="https://nextjs.org/blog/next-13" target="_blank" rel="noreferrer">
          Next.Js 13
        </a>
      </p>
    </article>
  );
}
