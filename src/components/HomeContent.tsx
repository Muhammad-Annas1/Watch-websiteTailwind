import React from 'react';

const HomeContent = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex justify-start items-center text-left text-white pl-16"
      style={{ backgroundImage: "url(/header-bg.png)" }}
    >
      <div>
        <h1 className="text-5xl text-shadow-md">Welcome to Our Store</h1>
        <p className="text-4xl mt-2 max-w-2xl">Custom Watches For Any Occasion</p>
        <button className="mt-5 px-5 py-2 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg cursor-pointer transition-colors duration-200 hover:bg-yellow-500 hover:text-white hover:border-black">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HomeContent;
