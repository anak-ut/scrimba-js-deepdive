const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    verified: true
  }

  const newUser = {
    username: 'jowkonto',
    email: 'jokonto@gmail.com',
    password: '12345'
  }

  // utk merge newUser dan user. user adalah sbg model
  // menggunakan Object.assign(user,newUser);

  // Object.assign(user,newUser);
  // masalahnya adalah, object user menjadi sama dg hasil assign
  // console.log(user);
  // maka dari itu kita ingin model kita tidak terganggu
  // karna objek pass the reference not the value
  // cara pertama, kita assign newUser ke user, lalu pass ke objek kosong
  console.log(Object.assign({},user,newUser));



  // maka objek user yg dalam hal ini adalah model, tidak terganggu
  console.log(user);

  // tetapi menggunakan cara diatas ( empty objek) bukan cara yg baik
  // sebaiknya pake spread operator three dots ' . . . '

  const createdUser = {... user, ... newUser}
  console.log(createdUser);
  console.log(user); // ojek user tidak terganggu
  // menggunakan spread tidak mengganggu referensi, hanya copy value


  // kita tambah value baru berupa boolean verified
  createdUser.verified = false;
  console.log(createdUser);
  console.log(newUser);