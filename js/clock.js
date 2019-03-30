function clock()
{
	const d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let time = "AM";

	let timezone = "EST";
	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    let nd = new Date(utc + (3600000 * -4));
    if (nd.getHours() === d.getHours())
    {
    	timezone = "EDT";
    }

	if (h > 11)
	{
		time = "PM";
	}
	if (h > 12)
	{
		h = h - 12;
	}
	if (m < 10)
	{
		m = "0" + m;
	}
	document.getElementById("clock").innerHTML = `${h}:${m} ${time} ${timezone}`;
	let t = setInterval(clock, 100);
}