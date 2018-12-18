![Screenshot](Screenshot.jpg)

## Menu Widget with Links

Instruction:

On the localhost:

- **npm start** 
the open browserify generated local url

On the web:

- host the **dist/assets** folder on the web
- use any your website or host the demo site (dist/index.html & dist/site-sample-assets)
- insert **widget code** in the demo

Widget code:

<script src="(nothing for local or your-web-host-url)/assets/scripts/widget.min.js"
		center=	"true"
		theme = "dark"
		left=	'[["linkL1|http://l1.html"],["linkL1|http://l1.html"],["Dropdown1", "linkL2|http://l2.html","linkL3|http://l3.html"], 						["linkL4|http://l1.html"], ["LinkSet", "linkL2|http://l2.html","linkL3|http://l3.html"]]'
		right=	'[["linkR1|http://r1.html"],["linkR2|http://r2.html"], ["Dropdown2", "linkL2|http://l2.html","linkL3|http://l3.html"]]'>
</script>


where

- **center** can be "true" or "false", true - will center left and right urls bars
- **theme** can be "dark" and "light", for dark and light appearance
- **left** and rigth links - put the link names and urls, also make dropdowns with links
