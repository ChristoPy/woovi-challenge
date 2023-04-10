import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
      style={{
        maxWidth: '1600px',
        height: '32rem',
        backgroundImage: "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
          <h1 className="text-black text-2xl my-4">Kit ZigZag</h1>
          <Link className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" to="#">Ver</Link>
        </div>
      </div>
    </section>
  );
};
