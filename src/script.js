document.addEventListener('DOMContentLoaded', () => {
  addWorker(1);
})

function addWorker(value) {
  document.getElementById('form-block').innerHTML = "";
  for (i = 0; i < value; i++) {
    const newForm = `
  <div id="worker[${i + 1}]">
    <h4>Worker ${i + 1}</h4>
    <div class="form-group">
      <input type="text" name="worker" class="" placeholder="Worker Name">
    </div>
    <div class="form-group">
      <input type="number" name="hours" placeholder="Hours Worked">
    </div>
  </div>`;
    document.getElementById('form-block').innerHTML += newForm;
  }
}


function calculateTips() {
  let cashTip = parseInt(document.getElementById('cashTips').value)
  let openHours = parseInt(document.getElementById('openHours').value)
  debugger
  let formBlockCount = document.getElementById(`form-block`);
  for (let i = 0; i < formBlockCount.childElementCount; ++i) {
    console.log(document.getElementById(`worker[${i}]`))
  }
}

// FIX TO ADD WORKER WITHOUT