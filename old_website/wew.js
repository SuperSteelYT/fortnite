function wew()
{
  const d = new Date();
  const y = d.getFullYear();
  document.getElementById("wew").innerHTML = "(c) " + y.toString() + " gay ip logger";
}

function startWew()
{
   setInterval(wew, 100);
}
