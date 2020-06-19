document.addEventListener("DOMContentLoaded", () => {
})
document.addEventListener('DOMContentLoaded', () => {
  
})

function addWorker(value) {
  document.getElementById('form-block').innerHTML = "";
  for (i = 0; i < value; i++) {
    const newForm = `
  <h4>Worker ${i + 1}</h4>
  <div class="form-group">
    <input type="text" name="worker" class="" placeholder="Worker Name">
  </div>
  <div class="form-group">
    <input type="number" name="hours" placeholder="Hours Worked">
  </div>`;
    document.getElementById('form-block').innerHTML += newForm;
  }
}


function calculateTips() {
  cashTip = parseInt(document.getElementById('cashTips').value)
  document.querySelectorAll('input').forEach(obj => console.log(obj.value))
}

// FIX TO ADD WORKER WITHOUT