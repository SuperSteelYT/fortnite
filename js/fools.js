function fools()
{
	const d = new Date();

	const m = d.getMonth() + 1;
	const date = d.getDate();

	if (m === 4 && date === 1)
	{
		const oldlink = document.getElementsByTagName("link").item(0);
		const link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
    	link.setAttribute("type", "text/css");
    	link.setAttribute("href", "css/fools.css");
    	document.getElementsByTagName("head").item(0).replaceChild(link, oldlink);
	}

	let t = setInterval(fools, 500);
}