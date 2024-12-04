import React from 'react'

const About = () => {
  return (
    <div>
      <section className="bg-cover bg-center text-white p-8 sm:p-20 flex justify-start items-center h-screen text-lg" style={{ backgroundImage: "url(about-bg1.png)" }}>
        <div className="max-w-2xl bg-black bg-opacity-60 p-8 rounded-xl w-full">
          <h2 className="text-2xl sm:text-3xl mb-4 fade-in">About Us</h2>
          <p className="text-base sm:text-xl pt-5">
            Welcome to our store, where you’ll find a wide range of stylish and reliable watches. From classic designs to modern trends, we have something for everyone. Our collection is perfect for any occasion, whether it’s casual, formal, or sporty. Discover quality timepieces that combine fashion and functionality. Visit us to find your perfect watch today!
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
