let element = document.getElementById("ggc");
element.addEventListener("click", function() 
{
	const text = document.getElementById("ggct");
	if (text.value === "ggc4life")
	{
		location.href = "ggc.html";
	}
	else
	{
		document.getElementById("bruh").innerHTML = "nah you got it wrong bruh";
	}
});
