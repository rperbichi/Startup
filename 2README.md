Useable notes for the midterm

Web 260 Topics
Provided by: Jaden Taylor
(code is printed in blue, notes are printed in black, important stuff is in red)

For Detailed instructions, see: .github/instructionTopics.md at main · webprogramming260/.github
Cloning from Github to VSCode
git clone [website link here]
Example:
git clone https://github.com/webprogramming260/simon-html.git

Committing to Github From VSCode
git add .  //Only do this once when first using the code in VSCode.
git commit -m “Insert some message here”
git push


Alternative way:
Step 1: Click Source Control

Step 2: Type your commit message and click Commit.

Step 3: Sync Changes

Console/Terminal
Commit
What: Commit is the same as saving progress
For sending commits through Git:
git add . //adds the file, ready to commit now
git commit -m “some memorable message here” //the -m stands for message

Comparing differences between old and new commits:
git diff HEAD HEAD~1 //compares original (HEAD) with 1 revision ago (HEAD~1)
//you can compare original with 2 revisions ago if you’d like (HEAD~2)
Branching
What: Allows you to work on a version of the code without messing up the main code. If you like it, you can merge it to the main code. If not, you can trash it.

For more info, see .github/git.md at main · webprogramming260/.github under branches.
Push
To send a commit to a repository on GitHub, do the following:
printf "Some cool text you want to add." >> README.md
git commit -am "some comment about the commit you sent"
git push

Good Practice:
Pull the repository's latest changes from GitHub (git pull)
Make changes to the code
Commit the changes (git commit)
Push the changes to GitHub (git push)
DNS
DNS means Domain Name System. Every website has an IP, but most people show a domain name instead. Example: 128.187.16.184 is BYU’s IP. The name is byu.edu.

How to find an IP address using the Console: dig
Examples: 
dig byu.edu //128.187.16.184
dig lds.org //216.49.176.20

Domain Name
Wanna see who owns a domain name? Type whois in front of a website name. Example:
whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025
Purchasing a Domain
Lots of places will offer them. Let’s use Amazon.
Open the AWS console in your browser and log in.
Navigate to the Route 53 service.
Select the Domains > Registered domains option from the menu on the left.
Push the Register Domain option.
Select the TLD that you want. AWS currently offers the .click TLD for $3 and .link for $5.
Put your desired root domain into the search box and press the Check button to see if it is available. Common one or two word phrases are almost always taken. For example, 260.click is taken, but webprogramming260.click is not. Keep searching until you find one you like.
Press Add to cart.
Managing DNS Records
.github/amazonWebServicesRoute53.md at main · webprogramming260/.github
Open the AWS console in your browser and log in.
Navigate to the Route 53 service.
Select the Hosted zones option from the menu on the left.
You should see your domain name listed here. If it doesn't then the registration did not complete, or it is still pending. In that case go review the information found under Domains > Pending requests.
Click on your domain name to view the details. This should display existing DNS records with types such as NS, and SOA.
First we will create our root domain DNS record. This will associate your domain name with your server's IP address and make it so you can use your domain name in the browser to navigate to your server.
Press the Create record button.
In the Value box enter the public IP address of your server.
Press Create records
A new A type record should appear in your list of records that represents the root domain name and your server's public IP address.
Next we will create a DNS record that will map to your server for any subdomain of your root domain name. This is made possible because DNS allows you to specify wildcards for a DNS record.
Press the Create record button.
In the Record name box enter the text *. This wildcard represents that any subdomain, that is not explicitly defined by another DNS record, will match this record.
In the Value box enter the public IP address of your server.
Press Create records
A new A type record should appear in your list of records that represents the wildcard subdomain name and your server's public IP address.
Your DNS records should look similar to the following when you are done.


Amazon Web Services (AWS)
Renting a Web Server
Amazon Web Services has a really good and reliable one. Use theirs.
For more info, see:
.github/amazonWebServicesEc2.md at main · webprogramming260/.github
AMI

We have created an Amazon Machine Image (AMI) for you to use as the base for your server. It has Ubuntu, Node.js, NVM, Caddy Server, and PM2 built right in so that you do not have to install them. Paste this AMI ID (ami-0b41d83057f814e3a) into the search box and press enter. Then select the Community AMIs tab. If no matches are found, make sure that your region is set to US East (Ohio) - us-east-2 (You can check this by looking in the top right corner of the page).
Accessing inConsole

ssh -i ~/downloads/PairKeyHere.pem ubuntu@IPHere
(Our Elastic IP Address is 3.134.121.57)
Paying for AWS
.github/amazonWebServicesEc2.md at main · webprogramming260/.github

Deploying a file
Create a file called deployFiles.sh and add it to your project.

Add the following code to the file:

#!/bin/bash









while getopts k:h:s: flag


do


   case "${flag}" in


       k) key=${OPTARG};;


       h) hostname=${OPTARG};;


       s) service=${OPTARG};;


   esac


done







if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then


   printf "\nMissing required parameter.\n"


   printf "  syntax: deployFiles.sh -k <pem key file> -h <hostname> -s <service>\n\n"


   exit 1


fi







printf "\n----> Deploying files for $service to $hostname with $key\n"







# Step 1


printf "\n----> Clear out the previous distribution on the target.\n"


ssh -i "$key" ubuntu@$hostname << ENDSSH


rm -rf services/${service}/public


mkdir -p services/${service}/public


ENDSSH







# Step 2


printf "\n----> Copy the distribution package to the target.\n"


scp -r -i "$key" * ubuntu@$hostname:services/$service/public

Lastly in your terminal, type ./deployFiles.sh -k ~/downloads/Securitykey.pem -h yourdomain.click -s simon
//the -s simon is an example of a root to the website. For example, this would show up as Simon-lights (worldwideunified.org)

Don’t forget to call the main html file as index.html, otherwise the website won’t know where to start.


HTML
Creating Tags
For Top level page structure, use <html>   </html>. Example:
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>

For metadata on page and page title, use <head>   </head>. 
For content, use <body>   </body>.
For paragraphs, use <p>   </p>. Example:
<p>Hello world</p>
Element Attributes
Each element can have personal attributes to give specific details.

The id attribute distinguishes the element from others. 
The class attribute classifies the element in a group of elements. Example:
<p id = "hello" class = "greeting">Hello world</p>

The top level content is body. Its 3 children are header, main and footer.

The header contains a paragraph with a span, and a navigation containing multiple divisions of sub-content.
The main contains multiple sections that contain either an unordered list (ul) or a table. Main also contains an aside for content that does not fit the content flow of the sections.
The footer has a content division with a single span.
Example:
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>


  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>


  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>


Which looks like:



Common Elements

element
meaning
html
The page container
head
Header information
title
Title of the page
meta
Metadata for the page such as character set or viewport settings
script
JavaScript reference. Either a external reference, or inline
include
External content reference
body
The entire content body of the page
header
Header of the main content
footer
Footer of the main content
nav
Navigational inputs
main
Main content of the page
section
A section of the main content
aside
Aside content from the main content
div
A block division of content
span
An inline span of content
h<1-9>
Text heading. From h1, the highest level, down to h9, the lowest level
p
A paragraph of text
b
Bring attention
table
Table
tr
Table row
th
Table header
td
Table data
ol,ul
Ordered or unordered list
li
List item
a
Anchor the text to a hyperlink
img
Graphical image reference
dialog
Interactive component such as a confirmation
form
A collection of user input
input
User input field
audio
Audio content
video
Video content
svg
Scalable vector graphic content
iframe
Inline frame of another HTML page


Element Hyperlinks
They have an anchor (a) element, containing the address of the hyperlink reference (href). Example:
<a href="https://byu.edu">Go to the Y</a>

Another example:
 <p class="myLearning">To see my notes, check <a href="https://docs.google.com/document/d/1XcvlYu0Nyb0sWxD6iOxS2NOwcJ75xeo_bsVtBCIPTUM/edit?usp=sharing">this</a> out.</p>
HTML Setup
Like #include in C++, HTML language needs a header. Common one is <!DOCTYPE html>. Example:
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>

PS: CodePen doesn’t need a header or the html (has one pre built in)
You can comment stuff using <!-- commented text -->.
Special Characters


Character
Entity
&
&amp;
<
&lt;
>
&gt;
"
&quot;
'
&apos;
😀
&#128512;


User Input

Element
Meaning
Example
form
Input container and submission
<form action="form.html" method="post">
fieldset
Labeled input grouping
<fieldset> ... </fieldset>
input
Multiple types of user input
<input type="" />
select
Selection dropdown
<select><option>1</option></select>
optgroup
Grouped selection dropdown
<optgroup><option>1</option></optgroup>
option
Selection option
<option selected>option2</option>
textarea
Multiline text input
<textarea></textarea>
label
Individual input label
<label for="range">Range: </label>
output
Output of input
<output for="range">0</output>
meter
Display value with a known range
<meter min="0" max="100" value="50"></meter>



More user input 

Type
Meaning
text
Single line textual value
password
Obscured password
email
Email address
tel
Telephone number
url
URL address
number
Numerical value
checkbox
Inclusive selection
radio
Exclusive selection
range
Range limited number
date
Year, month, day
datetime-local
Date and time
month
Year, month
week
Week of year
color
Color
file
Local file
submit
button to trigger form submission


Common attributes of inputs

Attribute
Meaning
name
The name of the input. This is submitted as the name of the input if used in a form.
disabled
Disables the ability for the user to interact with the input.
value
The initial value of the input.
required
Signifies that a value is required in order to be valid.


Thought: Back in the day, the form element was the only way to submit user input. Now we have JavaScript. Example:
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
Cool things I have found:
 inside of an element, placeholder=“ ” creates the example text inside of a box. Example: <input placeholder= “text here”> </input>
The for attribute highlights a button when clicked.
The new line element is <br>, making a break in a line/paragraph. 
Example:
<p> Howdy everyone, <br> today is going to be a good day. </p>
Adding images and Audio
The HTML elements that represent media include img, audio, video, svg, and canvas. The img, audio, and video elements are all simple references to an external file, but svg and canvas both contain code to render a visual image that can even be animated.

To include an image: use the img element and specify the src attribute with the URL to the source image. In order to support accessibility, you should also include an alt attribute that describes the image. Example:
<img
  alt="mountain landscape"
  src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg"
/>
Audio example:
<audio controls src="testAudio.mp3"></audio>
Video example:
 Note that you may need to include the crossorigin="anonymous" attribute if you are requesting files from a different domain than the one serving your content.
<video controls width="300" crossorigin="anonymous">
  <source
    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  />
</video>


Element tags in depth
Meta
<meta> is data about data. 
Has to be declared in the <head> </head> element, and tells the computer information about the webpage. Some useful <meta> tags are:
<meta charset=”UTF-8”>  <!-- the type of characters used, such as ASCII →
<meta name=”viewport” content=”width=device-width, initial-scale=1.0”> <!-- scales proportionately when viewing a website on a mobile device →

Td, Tr
<tr> </tr> is for creating rows of cells in a table. <td> </td> is for creating columns in a table. Example:
<!DOCTYPE html>  
<html>  
<head>  
    <title>HTML td tag</title>  
    <style>  
    th{  
     background-color: #6495ed;  
    }  
    th,td{  
        border: 1px solid black;  
        padding: 10px;  
        }  
    </style>  
</head>  
<body>  
  <h2>Example of td Tag</h2>  
  <table style=" border-collapse: collapse; background-color:#dcdcdc;">  
       <tr>  
    <th>Product</th>  
    <th>Quantity</th>  
    <th>Price</th>  
       </tr>  
  
    <tr>  
        <td>Books</td>    
        <td>5</td>  
         <td>589</td>  
    </tr>  
  
    <tr>  
       <td>T-shirt</td>   
       <td>5</td>  
       <td>3500</td>  
    </tr>  
              
            <tr>  
      <td>Jeans</td>      
        <td>2</td>  
       <td>5000</td>  
    </tr>  
  </table>  
</body>  
</html>  


To style a specific table, and to add more than one style element, do the following:
<menu>
          <table style="border-bottom-right-radius: 0cqmin;">
              <tr>
          <td style="border: 2px solid black; padding: 40px;" ><a href="Main.html">Home </a></td>
          <td style="border: 2px solid black; padding: 40px;" ><a href="playGame.html">Play </a></td>
          <td style="border: 2px solid black; padding: 40px;" ><a href="highScores.html">Scores </a></td>
          <td style="border: 2px solid black; padding: 40px;" ><a href="about.html">About </a></td>
              </tr>
          </table>
      </menu>

For more info, see HTML td Tag - javatpoint
Making shapes
SVG Path (w3schools.com)
Spacing in tables
Use style= “border-spacing:  ;” to stretch the spacing. Example:
<table style="border-spacing: 10px;">


CSS
Put this at the front of your html code to use CSS: <link rel="stylesheet" href="main.css" />



To use open source code, use Bootstrap: https://github.com/webprogramming260/.github/blob/main/profile/css/frameworks/frameworks.md
Tip: Create a main.css to hold all of the CSS stuff. A * means the entire website. Example:
*{
	padding = 20px;
}

If using generic element do something like:
p{
	text-align: center;
	align-items: center;
}
If using a specific element that has a class name, add a period to the front. Example:
.book-cover{
	width: 556px;
	height: 885px;
}
Style
Style allows the font or text boxes to be changed, and other stuff. Ways to implement styling:
Way 1: Inside the <head></head>. Example:
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
Way 2: Inside a <p></p>. Example:
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
Way 3: Inside a table, column, etc. Example:
   <tr>
                <td>1</td>
                <td style="background-color:gold">Jesus</td>
                <td>9999</td>
                <td>The beginning of time</td>
        </tr>
        <tr>
                <td>2</td>
                <td style="background-color:silver">Seth Williams</td>
                <td>68</td>
                <td>Feb 21, 2023</td>
        </tr>
Way 4: A link to the styling (preferred way). Example:
<link rel="stylesheet" href="styles.css" />


General Rule: Because elements inherit the rules applied to their parents you often end up with the same declaration property applied to a single element multiple times. For example, we might set color property for all body elements to be red, and then paragraph elements to be green, etc. Example:
body {
  color: red;
}
p {
  color: green;
}
span {
  color: blue;
}
In this case, the rules cascade down from the highest nodes in the DOM tree to the lowest level. Any declaration property defined at a lower level will override the higher declaration.
The Box Model
CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box.

Margin: Only represents whitespace
Border: properties like color, thickness and line style
Padding: background color
Innermost Box: element's content
Combinators
Descendants
Example Idea: we want to change the color of the second level headings (h2), but we only want to do that within the sections for each department. To make that happen we can provide a descendant combinator that is defined with a space delimited list of values where each item in the list is a descendant of the previous item.  So our selector would be all h2 elements that are descendants of section elements. How? Like this:
section h2 {
  color: #004400;
}
See results (result has other CSS stuff, just focus on the fact that there are two gray boxes instead of one):

(see full result here css: Selectors (codepen.io))
Other Combinators

We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading.
h2 ~ p {
  padding-left: 0.5em;
}
Selectors
Class Selector
ID Selector
Targets a specific element. Just add a hashtag(#). Example:
#physics {
  border-left: solid 1em purple;
}
Attribute Selector
Pseudo Selector
It’s based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. Tip: Has ability to have highlight bar to appear only when the mouse hovers over the text. Example:
section:hover {
  border-left: solid 1em purple;
}
List of CSS Declarations
.github/declarations.md at main · webprogramming260/.github
Unit Sizes
Some popular ones include px (pixels), in (inches), or rem (multiplier size of the root element).
Color Sizing
The HSL is the cool one, which allows transparent pictures, light gradient, etc. See more at css: Declarations (codepen.io).
Fonts
To use more fonts than what the standard library has, you can access Google’s wide list of fonts Browse Fonts - Google Fonts. Google font implementation example:
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
CSS Animation
Tip: Can align center, and zoom in to fit page size! Example Goal: We have a paragraph of centered text and we want it to zoom in until its size is 20% of the view height.
p {
  text-align: center;
  font-size: 20vh;
}
We can take it a step further and animate it, making the text grow or shrink. Example:
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
Take it a step further by having the text grow, bounce out, then shrink back just a little. Example:
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

@keyframes demo {
  from {
    font-size: 0vh;
  }
  95% {
    font-size: 21vh;
  }
  to {
    font-size: 20vh;
  }
}

Responsive Design
Flex
Example: .flex {
  display: flex;
  flex-direction: row;
}

Float
When a browser resizes, float will cause an element to float/respond to the resizing. Example:
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}



Media Queries
Tells us which side of the screen (technically the viewport) is the longest. A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. If it is then we transform all of our div elements by rotating them 270 degrees.
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
Great for video games that are played sideways, or videos that should be viewed sideways.
If something takes up too much room when making the screen smaller, use aside. Example:
@media (orientation: portrait) {
  aside {
    display: none;
  }
}

CSS Debugging
Step 1: Go live
Step 2: Open more tools (under the three dots)
Step 3: Open Developer tools
Step 4: Play around with it to see what affects what
UX Design
Typical design

Typical Line Length
Instead you want to specify a maximum width for your paragraphs. Usually a width of 60 to 80 characters is optimal. You can set this with the max-width property set to something like 35em. The em unit is the approximately the width of the m character in the font and so about half of an 'm' is about the average character width.

Security

Security walls occur when you have to interact with the user in order to authenticate them. The security walls you present should be proportional to the value of the resource you are trying to secure. Banking application should have strong security walls that provide actual protection for the user's data. An application that gives away free kitten videos should have a minimal security wall if any.
You need to consider both the frequency and complexity of your security wall. If the user feels that the security wall is too onerous for the value that the application is providing, they will find another solution. Likewise if the user feels that there is not enough security then they will not trust you with their data.
Here is an example of an application for learning how to code. They need a user's email so that they can store course progress, but they don't even ask for a password because the email address is enough to uniquely identify the user. Authentication occurs when the user provides the security code that is emailed to the address that they provided. From then on the application remembers the email address. If the user accesses the application on a different device then the user just needs to do another once-per-device authentication.

JavaScript
(To access previous JavaScript notes, see Learnjavascript)
Add JavaScript to HTML by either adding a src to an external JavaScript attribute, or include the script element like so:
<head>
  <script src="javascript.js"></script> //adding in JavaScript
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
Variables and Functions
Two variable declaration types: let, and const. (don’t ever do var)
let is a modifiable variable, const is not. Example:
let x = 1;
const y = 2;
Primitive data types:


Tip: use === and !== for strict equality operators.

For loops and Do while loops are the same in C++ as they are in JavaScript.
For in loop iterates over the names of an object. Example:
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
For of loop iterates over property values. Example:
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
Console
What: great for debugging. A couple tools in the console are:
Time and timeEnd, which let’s you see duration between time calls. Example:
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
And count, which shows you how often a block of code is called. Example:
console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
String
Different String abilities

In action:
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
Arrow Function
To remove clutter, you can replace the word function with =>. They mean the same thing. Great when only having one line of code returning. Example:

//basic way
function () {
	return 3; //returns 3
}

//arrow way
() => 3; //returns 3

//arrow way with curly braces
() => {
	return 3; //returns 3
}

Draw back: Arrow functions can’t iterate, or be constructors.
A good explanation: #26 Arrow function in JavaScript - YouTube

Another example:
//basic way
let datLength = function (aString) {
return aString.length;
}

console.log('The length of hi there is:');
console.log(datLength('hi there'));


//arrow way
let datLength = (aString) => aString.length;

console.log('The length of hi there is:');
console.log(datLength('hi there'));

Arrays
Example:
const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3

Great video: 8 Must Know JavaScript Array Methods - YouTube

Objects
Do more research on this
Classes
Example:
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer

Awesome video: What are Classes, Objects, and Constructors? - YouTube

JSON
Extremely used in programming!
JSON types:

JSON’s are most used for object, matching a key and a value.
Regular Expressions
Awesome video: Learn Regular Expressions In 20 Minutes - YouTube

Destructuring
Example:
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c); // OUTPUT: 1, 2

Can get the rest of the array by using … notation. Example:
const [d, …stuff] = a;
console.log(d, stuff); //returns 1 (3) [2, 4, 5]

Destructuring with Objects: Use curly braces instead of brackets. Example:
const someObject = {
    z: 'panda',
    y: 'snake',
    x: 'octopus',
    w: ['cat', 'lion']
};


const {first, fourth} = someObject;
console.log(first, fourth);

Reassigning variables: Instead of const, use let. Example:
let boy = ["male", "xy chromosomes"];
console.log(boy);
boy = ["female", "xy chromosomes"];


console.log(boy); //returns (2) [‘female’, ‘xy chromosomes’]

