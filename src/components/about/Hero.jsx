function Hero({ imgSrc, imgAlt }) {
  return (
    <div className="flex py-8 px-12 flex-col md:flex-row justify-center gap-8 text-justify">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full md:w-1/2 xl :w-1/3 max-h-[70vh] rounded aspect-[8/9] object-cover"
      />
      <div className="container flex flex-col gap-4 py-4">
        <h4 className="text-4xl">Brief History</h4>
        <p>
          Founded in 2013, Ceraworld Chandwani Tiles has grown from a humble
          beginning to a leading provider of premium tiles, sanitary fittings,
          and hardware. Nestled in Halondi on the Kolhapur Sangli Road, our
          company has consistently prioritized quality and customer
          satisfaction. Over the past decade, we have expanded our product range
          to meet the diverse needs of our clients, from homeowners to large
          construction firms. Our commitment to excellence has established us as
          a trusted name in the industry, known for our reliability, innovation,
          and superior customer service. With a focus on staying ahead of
          industry trends, Ceraworld continues to evolve, offering the latest in
          design and technology. Our team of experienced professionals is
          dedicated to helping clients achieve their vision, providing expert
          advice and personalized service. Whether you're embarking on a new
          construction project or renovating an existing space, Ceraworld
          Chandwani Tiles is your partner for high-quality materials and
          exceptional service.
        </p>
      </div>
    </div>
  );
}

export default Hero;
