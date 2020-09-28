const ui = new UI();

document.querySelector('.btn1').addEventListener('click', function onSubmit(e) {
  const yourName = document.getElementById('yname').value;
  const crushName = document.getElementById('cname').value;
  const eyeColor = document.getElementById('ename').value;

  const loveCalcu = new LoveCalc(yourName, crushName);

  console.log(yourName, crushName);

  if (yourName !== '' && crushName !== '' && eyeColor !== '') {
    loveCalcu.getPercentage().then((data) => {
      ui.displayResult(data);
      console.log(data);
    });
  } else {
    ui.showError();
  }

  e.preventDefault();
});
