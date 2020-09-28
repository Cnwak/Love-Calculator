class UI {
  constructor() {
    this.display = document.getElementById('modalresult');
  }

  displayResult(data) {
    this.display.style.backgroundColor = 'pink';
    this.display.innerHTML = `
    
    <div class="modal-content">
                    <h4>${data.response.percentage}% chance of success</h4>

                    <div style="height:150px;"></div>
                    <h4>${data.response.result}</h4>

                    <div style="height:100px;"></div>
                  
                  
                    <button
                      class="btn brown waves-effect waves-red modal-close"
                    ><i class="material-icons red-text">close</i>
                  </button>
    
    
                  </div>
    `;
  }

  showError() {
    this.display.style.backgroundColor = 'pink';
    this.display.innerHTML = `<div class="modal-content">
    <div style="height:200px;"></div>
    <h4>Kindly fill all the fields to find out!</h4>
    <div style="height:200px;"></div>
    </div>`;
  }
}
