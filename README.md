## Startup

# Startup Application:

Worldwide Unified website.

Elevator pitch:
We are a Worldwide, interfaith community whose mission is to be Unified in helping with the spiritual, emotional and temporal needs of others. Most often, the spiritual and emotional needs involve prayer, love and belonging, while the temporal needs are focused on clean water, nutrition and shelter.

Key features:
- Home page access.
- About us tab.
- Page where users can make donations.
- Contact us tab.
- Store.
- A visit Instagram tab.
- A visit Facebook group tab.
- A tab for sponsors.
- A tab for podcasts.
- A tab for devotionals.
- A tab where users can vote on which fundraising they want to participate.
- A tab for a chat where users can ask about the organization.

Rough sketch of application:
https://docs.google.com/document/d/1l9PTP6-puRSGgUjiRkHOBAn3HpsmFUCm/edit?usp=sharing&ouid=109902910171935569066&rtpof=true&sd=true
GitHub Assignment Notes:

I have been using GitHub for some time now, and I really like it. I use it to keep track of my learning progress and also to be on top of the most recent changes on my school projects. It makes the developing and learning process much more efficient.

Notes from AWS DNS DNS means Domain Name System. Every website has an IP, but most people show a domain name instead. Example: 128.187.16.184 is BYU’s IP. The name is byu.edu.

How to find an IP address using the Console: dig Examples: dig byu.edu //128.187.16.184 dig lds.org //216.49.176.20 Amazon Web Services (AWS) Renting a Web Server Amazon Web Services has a really good and reliable one. Use theirs. For more info, see: .github/amazonWebServicesEc2.md at main · webprogramming260/.github AMI

We have created an Amazon Machine Image (AMI) for you to use as the base for your server. It has Ubuntu, Node.js, NVM, Caddy Server, and PM2 built right in so that you do not have to install them. Paste this AMI ID (ami-0b41d83057f814e3a) into the search box and press enter. Then select the Community AMIs tab. If no matches are found, make sure that your region is set to US East (Ohio) - us-east-2 (You can check this by looking in the top right corner of the page). Accessing inConsole

ssh -i ~/downloads/PairKeyHere.pem ubuntu@IPHere (Our Elastic IP Address is 3.134.121.57) Paying for AWS .github/amazonWebServicesEc2.md at main · webprogramming260/.github

# Notes from Simon CSS:

Playing around with the example file made me have a better understanding of how HTML and CSS communicate. I do think that I have to be better at keep tracking of the changes I make on the files.

# Startup CSS and HTML Deliverable Notes:

- We learned a lot by doing this project, for example:
    - How to make clickable images.
    - How to open a new tab when clicking a link. 
    - How to match gradient colors by looking at the HEX value of each one of them.
    - Under the contact us page, we created an image that reacts to the click by opening an email prompt.
    
# Simon JavaScript Notes:

    - JSON: JavaScript Object Notation.
    - windon.location.href -> location where you can find the window for the input.
    - document.createElement() -> creates HTML element.
    - .this -> object being used in the current piece of the code. 
    - Using async in some portions of the game.
    - await gets the value from a promise fulfillment.
    - How to center text and images. 
    - How to  center text and images.
    - How to acces images from GitHub.
    - GitHub repository link is under the "Contact Us" tab.

# Simon Service Notes:

    - When we use endpoints, we can use operation provided by the service we are wanting to use.
    - We use fetch to return the value from the server.
    - Service makes the application dynamic. 
    - Exchange data between applications and systems. 

# Simon DB:

    - Databases are used to store and organize data.
    - A database is a collection of information.
    - Provides a central place for information.
    - Benefits of databases:
        - Reliability.
        - Accessibility.
        - Security.

# Simon Login:
    
    - Mongo is used to store user data.
    - For simon, we need to return some of the user's information to the scores tab.
    - new MongoClient(url) -> creates a new mongo object.
    - DetMe -> data retrieval. 