const ui = new UI();
const storage = new Storage();

document.querySelector('.btn1').addEventListener('click', function onSubmit(e) {
  const yourName = document.getElementById('yname').value;
  const crushName = document.getElementById('cname').value;
  const eyeColor = document.getElementById('ename').value;

  const loveCalcu = new LoveCalc(yourName, crushName);

  console.log(yourName, crushName);

  //

  if (yourName !== '' && crushName !== '' && eyeColor !== '') {
    loveCalcu.getPercentage().then((data) => {
      ui.displayResult(data);
      //
      console.log(data);
      // storage.getStorage(yourName, crushName);

      // //
      // if (localStorage.getItem('yourname') !== null) {
      //   yournames = JSON.parse(localStorage.getItem('yourname'));
      // }
      // if (localStorage.getItem('crushname') !== null) {
      //   crushnames = JSON.parse(localStorage.getItem('crushname'));
      // }
      // localStorage.setItem('yourname', JSON.stringify(yournames));
      // localStorage.setItem('crushname', JSON.stringify(crushnames));
      storage.getStorage(yourName, crushName);

      const check = localStorage.getItem('yourname');
      console.log(check);
    });
  } else {
    ui.showError();
  }

  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', displayValue);
function displayValue() {
  const check = JSON.parse(localStorage.getItem('yourname'));
  console.log(check);
  const yourNames = document.getElementById('yname');

  yourNames.value = check;
}
