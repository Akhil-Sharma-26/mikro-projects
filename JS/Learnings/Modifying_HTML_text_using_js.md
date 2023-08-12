### The Differences Between innerHTML, innerText and textContent
1. The innerHTML property returns:
The text content of the element, including all spacing and inner HTML tags.
`let text = document.getElementById("myP").innerText;`
2. The innerText property returns:
Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
`let text = document.getElementById("myP").innerHTML;`
3. The textContent property returns:
The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.
`let text = document.getElementById("demo").textContent`

## UseCase:
### Counter App:
1. I used the innerText property to change the counter.