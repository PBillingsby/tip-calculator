function addWorker(value) {
  const form = document.getElementById('form-block');
  form.addEventListener("submit", () => {
    event.preventDefault();
  })
  // document.getElementById('form-block').innerHTML = `<input type="number" placeholder="Cash Amount" id="cashTips">`;
  for (i = 0; i < value; i++) {
    
    const newForm = `
  <div id="worker[${i + 1}]" class="worker-div">
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
  let workers = [];
  let cashTip = parseInt(document.getElementById('cashTips').value)
  for (let i = 0; i < document.getElementsByClassName('worker-div').length; i++) {
    let workerInfo = {
      name: document.getElementById(`worker[${i + 1}]`).querySelector('input').value,
      hours: parseInt(document.getElementById(`worker[${i + 1}]`).querySelectorAll('input')[1].value) // Multiply by hourly 
    }
    workers.push(workerInfo) 
  }
  returnTips(workers, cashTip);
}

function returnTips(arr, cashTips) {
  let count = 0;
  arr.forEach(obj => count += obj.hours)
  const hourly = cashTips / count;
  arr.forEach(worker => {
    document.getElementById('results').innerHTML += `<h4>${worker.name} you made $${parseFloat(worker.hours * hourly).toFixed(2)}</h4>`;
  })
  document.getElementById('results').innerHTML += ` <button type="submit" onclick="location.reload()">Reload</button>`
}