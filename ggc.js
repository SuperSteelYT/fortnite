let element = document.getElementById("s");
element.addEventListener("click", function() 
{
	const text = document.getElementById("st");
	if (text.value === "ggc4life")
	{
		location.href = "secret.html";
	}
	else
	{
		document.getElementById("bruh").innerHTML = "nah you got it wrong bruh";
	}
});
