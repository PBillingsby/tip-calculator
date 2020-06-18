document.addEventListener('DOMContentLoaded', () =>)
const newForm = `<form action="#" class="worker-form">
<div class="form-group">
  <input type="text" name="worker" class="" placeholder="Worker Name">
</div>
<div class="form-group">
  <input type="number" name="hours" placeholder="Hours Worked">
</div>
</form>`;

function addWorker() {
  document.getElementById('add-worker').addEventListener("click", (e) => {
    document.getElementById('form-block').innerHTML += newForm
  })
}
