function color()
{
	// define a list of characters that will determine a random colour
	const chars = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	// define the element
	const element = document.getElementById("color");

	// give the element a random colour
	element.style.color = "#" +
			chars[Math.floor(Math.random() * chars.length)] +
			chars[Math.floor(Math.random() * chars.length)] +
			chars[Math.floor(Math.random() * chars.length)] +
			chars[Math.floor(Math.random() * chars.length)] +
			chars[Math.floor(Math.random() * chars.length)] +
			chars[Math.floor(Math.random() * chars.length)];
	var t = setInterval(color, 300);
}