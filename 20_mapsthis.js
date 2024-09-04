const userData = {
    username: 'Reed',
    title: 'JS programmer',
    getBio(){
        console.log(`User ${this.username} is a ${this.title}`);
    }
}

// 'this' itu reference ke (data) objek.
// bentuk dasarnya adalah userData.username
// ada konsep' this' biar kita ga ngetik berulang2 nama objek
userData.getBio();