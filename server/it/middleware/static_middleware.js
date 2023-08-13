// You can use the express.static middleware to serve static files, including your images, CSS and JavaScript (static() is the only middleware function that is actually part of Express).

app.use(express.static("public")); // using public folder for static css,images etc

// Any files in the public directory are served by adding their filename (relative to the base "public" directory) to the base URL. So for example:

// http://localhost:3000/images/dog.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/about.html

app.use(express.static("media")); // To add more direcotry

// You can also create a virtual prefix for your static URLs, rather than having the files added to the base URL. For example, here we specify a mount path so that the files are loaded with the prefix "/media":


app.use("/media", express.static("public"));

// Now, you can load the files that are in the public directory from the /media path prefix.

// http://localhost:3000/media/images/dog.jpg
// http://localhost:3000/media/video/cat.mp4
// http://localhost:3000/media/cry.mp3