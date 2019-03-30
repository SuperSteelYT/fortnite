let element = document.getElementById("secret");
element.addEventListener("click", function() 
{
	const text = document.getElementById("secrettext");
	const resp = document.getElementById("resp");
	if (text.value === "ggc4life")
	{
		location.href = "ggc.html";
		resp.innerHTML = "correct. welcome!";
	}
	else
	{
		resp.innerHTML = "incorrect. try again";
	}
});