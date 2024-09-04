const userData = {
    username: 'Reed',
    title: 'JS programmer',
    getBio(){
        console.log(`User ${this.username} is a ${this.title}`);
    },
    askToFriend(){
        /*
        setTimeout(function(){
             console.log(`berkawan yok ${this.username}`)
         },2000);
        */ // bentuk sebelum pake arrow utk mengakali this bisa menjangkau parent
        setTimeout(()=> { // modif pakai arrow func
            console.log(`berkawan yok dg si ${this.username}`);
        },2500);
    }
}

// 'this' itu reference ke (data) objek.
// bentuk dasarnya adalah userData.username
// ada konsep' this' biar kita ga ngetik berulang2 nama objek
userData.getBio(); // output : User Reed is a JS programmer

// this ini tergantung konteks,karena sifatnya dinamis
// kalo kita panggil --> this.getBio() ga akan bs karna this nya
// reference ke objek window, bukan ke userData

userData.askToFriend(); // output: hasil undefined karna this kehilangan bindingnya
// terjadi karna fungsi yang dipanggil ada didalam fungsi
// this kehilangan reference ke userData

// setelah dimodif jadi arrow, berhasil
// output : berkawan yok dg si Reed
