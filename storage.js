class Storage {
  constructor() {}

  getStorage(yournames, crushnames) {
    // if (localStorage.getItem('yourname') !== null) {
    //   yournames = JSON.parse(localStorage.getItem('yourname'));
    // } else {
    //   localStorage.getItem('yourname') === [];
    // }
    // if (localStorage.getItem('crushname') !== null) {
    //   crushnames = JSON.parse(localStorage.getItem('crushname'));
    // } else {
    //   localStorage.getItem('crushname') === [];
    // }
    localStorage.setItem('yourname', JSON.stringify(yournames));
    localStorage.setItem('crushname', JSON.stringify(crushnames));

    const check = JSON.parse(localStorage.getItem('yourname'));
    console.log(check);
  }

  // setStorage(yourname, crushname) {
  //   localStorage.setItem('yourname', yourname);
  //   localStorage.setItem('crushname', crushname);
  // }
}
