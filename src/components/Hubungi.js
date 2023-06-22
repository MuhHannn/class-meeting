function Hubungi() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-content-center mx-4 my-5"
      id="hubungi"
    >
      <h1 className="text-center m-0 mt-5">Hubungi Kami</h1>
      <div className="d-flex justify-content-center mb-5">
        <hr className="w-25" style={{ color: "#0d6efd" }}></hr>
      </div>
      <div className="d-flex flex-column flex-lg-row gap-4 mt-3 mb-5">
        <div className="col-lg-5">
          <h2 className="mb-3">Lokasi Kami</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3768798415545!2d110.75908037385646!3d-7.533809492479414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a147e46eda873%3A0xd2f585378cd3f5e3!2sPPQ%20AL-MAHIR!5e0!3m2!1sid!2sid!4v1687320648347!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ height: "300px" }}
            className="w-100"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-lg-7">
          <h2 className="mb-3">Kontak Kami</h2>
          <div className="d-flex gap-3 mb-2">
            <div className="d-flex justify-content-center align-items-center">
              <i class="ri-mail-line" style={{ fontSize: "40px" }}></i>
            </div>
            <div>
              <p className="m-0">Email</p>
              <a href="">ppqita@gmail.com</a>
            </div>
          </div>
          <div className="d-flex gap-3 mb-2">
            <div className="d-flex justify-content-center align-items-center">
              <i class="ri-map-line" style={{ fontSize: "40px" }}></i>
            </div>
            <div>
              <p className="m-0">Alamat</p>
              <p>
                PPQ AL Mahir, Jl. Adi Sumarmo 200, Krobyongan, Gawanan,
                Colomadu, Karanganyar{" "}
              </p>
            </div>
          </div>
          <div className="d-flex gap-3 mb-2">
            <div className="d-flex justify-content-center align-items-center">
              <i class="ri-whatsapp-line" style={{ fontSize: "40px" }}></i>
            </div>
            <div>
              <p className="m-0">Whatsapp</p>
              <a href="">+62 821-3327-7548</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hubungi;
