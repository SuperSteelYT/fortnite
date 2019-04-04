let element = document.getElementById("secret");
element.addEventListener("click", function() 
{
	const text = document.getElementById("secrettext");
	const resp = document.getElementById("resp");
	if (text.value === "sfipl")
	{
		location.href = "ggc.html";
		resp.innerHTML = "correct. welcome!";
	}
	else
	{
		resp.innerHTML = "incorrect. try again";
	}
});

function toggleVisibility()
{
	const toggle = document.getElementById("secrettext");
	if (toggle.type === "password")
	{
		toggle.type = "text";
	}
	else
	{
		toggle.type = "password";
	}
}
