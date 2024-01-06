var btn = document.getElementById('btn');
function openNav() {
  document.getElementById("hide2").style.width = "100%";
  btn.classList.toggle('hide');
}

function closeNav() {
  document.getElementById("hide2").style.width = "0%";
  btn.classList.remove('hide');
}