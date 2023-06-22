import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Unit() {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column my-5 mx-3"
      id="unit"
    >
      <div className="mb-4">
        <h2>Unit</h2>
      </div>
      <div className="d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center gap-3 text-center">
        <Card className="col-lg-3 col-12 text-white" bg="primary">
          <Card.Body>
            <Card.Title>TPA Al Mahir</Card.Title>
            <Card.Text className="text-start">
              <ul>
                <li>Anak-anak usia 6-13 tahun</li>
                <li>
                  Materi Pokok:{" "}
                  <ul>
                    <li>Karimah dasar & tahsin</li>
                    <li>Tilawah Al Quran</li>
                    <li>Hafalan juz 30</li>
                  </ul>
                </li>
                <li>
                  Materi Penunjang:{" "}
                  <ul>
                    <li>Aqidah</li>
                    <li>Doa</li>
                    <li>Dzikir & Adap Harian</li>
                    <li>Fiqih ibadah</li>
                    <li>Siroh</li>
                    <li>Bahasa Arab Dasar</li>
                    <li>Hadits-hadits Pilihan</li>
                    <li>Kitabah/Khat</li>
                  </ul>
                </li>
                <li>Masa Pendidikan 2 tahun</li>
                <li>Ujian & terima Raport setiap 1 semester(6 bulan)</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-lg-3 col-12 text-white" bg="primary">
          <Card.Body>
            <Card.Title>PPQ IT Al Mahir</Card.Title>
            <Card.Text className="text-start">
              <ul>
                <li>Pondok IT setara SLTA(Khusus ikhwan)</li>
                <li>Karantina Bahasa Arab & Bahasa Inggris</li>
                <li>
                  Materi diniyyah :{" "}
                  <ul>
                    <li>Aqidah</li>
                    <li>Fiqih</li>
                    <li>Siroh</li>
                    <li>Imla</li>
                    <li>Khat</li>
                    <li>DLL</li>
                  </ul>
                </li>
                <li>Tahfidz</li>
                <li>Materi IT berbasis project (FrontEnd, BackEnd, Mobile)</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="d-flex flex-column col-lg-3 m-0 gap-3">
          <Card className="col-lg-12 col-12 text-white" bg="primary">
            <Card.Body>
              <Card.Title>Reguler Tahsin</Card.Title>
              <Card.Text className="text-start">
                <ul>
                  <li>Kelas privat maupun reguler</li>
                  <li>Kelas ikhwan ataupun akhwat</li>
                  <li>Menggunakan metode karimah</li>
                  <li>
                    Dibimbing langsung oleh Asatidzah yang terlatih mengajarkan
                    metode Karimah
                  </li>
                  <li>3 bulan masa pengajaran</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-lg-12 col-12 text-white" bg="primary">
            <Card.Body>
              <Card.Title>Reguler Bahsa Arab</Card.Title>
              <Card.Text className="text-start">
                <ul>
                  <li>Durusullughah</li>
                  <li>Nahwu & Shorof</li>
                  <li>Khusus ikhwan</li>
                  <li>Periode belajar 6 bulan</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-lg-12 col-12 text-white" bg="primary">
            <Card.Body>
              <Card.Title>Kelas Tahfidz</Card.Title>
              <Card.Text className="text-start">
                <ul>
                  <li>Setoran hafalan juz 1-3 & 28-30</li>
                  <li>Pembelajaran sepekan 2x</li>
                  <li>Periode belajar 6 bulan</li>
                  <li>Target 6 bulan hafal 3 juz</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Unit;
