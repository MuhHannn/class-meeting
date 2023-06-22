import Heroimg from "./../assets/heroimg.png";

function Hero() {
  return (
    <div
      className="d-flex justify-content-center align-content-center mb-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Heroimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "170px 0",
      }}
    >
      <div className="container">
        <div className="d-flex text-white py-5 px-lg-5 px-3">
          <div className="text-center text-lg-start">
            <h1 className="mb-2">Pusat Pendidikan Al-Quran Al Mahir</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
