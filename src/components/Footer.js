import { Form } from "react-bootstrap";
import Footerimg from "./../assets/ppq-p.png";
import BSI from "./../assets/BSI.png";

function Footer() {
  return (
    <div className="bg-black text-white pt-5 pb-lg-3 pb-4 px-3">
      <div className="d-flex justify-content-lg-around flex-column flex-lg-row">
        <div className="col-lg-5 mb-3">
          <img
            src={Footerimg}
            className="mb-3"
            style={{ width: "250px" }}
          ></img>
          <p>
            PPQIT Al Mahir adalah pondok pesantren tahfidzul quran dan
            pendidikan IT. Mencetak hafidz quran, mandiri, profesional, dan
            mahir dalam teknologi informasi.
          </p>
        </div>
        <div className="col-lg-3 mb-3 px-lg-5">
          <h3 className="mb-2">Kontak</h3>
          <p>
            Email: <a href="">ppqita@gmail.com</a>
          </p>
          <p>
            Whatsapp: <a href="">08654321876</a>
          </p>
        </div>
        <div className="col-lg-3 mb-3">
          <h2>Donasi</h2>
          <img src={BSI} className="w-50 mb-2"></img>
          <h5>6565698893</h5>
          <div>
            <p className="m-0">Konfirmasi donasi :</p>
            <a href="">+62 812-3210-4431</a>
          </div>
        </div>
      </div>
      <hr className=""></hr>
      <div className="d-flex flex-column text-center align-items-center justify-content-center mt-4">
        <div className="mb-2">
          <a href="" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-instagram-line" style={{ fontSize: "25px" }}></i>
          </a>
          <a href="" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-facebook-box-line" style={{ fontSize: "25px" }}></i>
          </a>
          <a href="" style={{ color: "white", textDecoration: "none" }}>
            <i class="ri-youtube-line" style={{ fontSize: "25px" }}></i>
          </a>
        </div>
        <h6> Copyright &copy; by Hanan</h6>
      </div>
    </div>
  );
}

export default Footer;
