document.addEventListener("DOMContentLoaded", () => {
})
const newForm = `
<h4>Worker</h4>
<div class="form-group">
  <input type="text" name="worker" class="" placeholder="Worker Name">
</div>
<div class="form-group">
  <input type="number" name="hours" placeholder="Hours Worked">
</div>`;
document.addEventListener('DOMContentLoaded', () => {
  
})

function addWorker(value) {
  document.getElementById('form-block').innerHTML = "";

  for (i = 0; i < value; i++) {
    document.getElementById('form-block').innerHTML += newForm;
  }
}


function calculateTips() {
  cashTip = parseInt(document.getElementById('cashTips').value)
  debugger
}

// FIX TO ADD WORKER WITHOUT