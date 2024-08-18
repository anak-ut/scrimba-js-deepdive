const user = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
      title: "Programmer"
    }
  };

  function displayUser(){
    console.log(`username: ${user.username} | email: ${user.email}`);
  }

  displayUser();
  // kendalanya adalah, kita harus repeat obj referens tiap mw panggil value nya

  // mari kita destructuring
  const pengguna = {
    nama: "Reed",
    usernama: "Reedbarger",
    mail: "reed@gmail.com",
    detil: {
      judul: "Programmer"
    }
  };

  const {nama,usernama, mail} = pengguna; // ambil sesuaikan dg key pada objek yg mw di destruk

  function displayPengguna(){
    console.log(`nama user: ${usernama} -- email: ${mail}`);
  }
const {judul} = pengguna.detil;

  displayPengguna();

  function displayJudul(){
    console.log(`nama: ${nama} : role: ${judul}`)
  };
  displayJudul();