# Community Futures, Community Lore Website

## Our Project
This is the website repository for Community Futures, Community Lore. We are an online resource dedicated to making culturally-rooted, youth participatory action research (YPAR) resources available for free.

This site was started in the summer of 2019, and it has come a long way since then. We are currently in version 1.0.0, and making edits for 1.1.0. 

This document is mainly for future web designers and developers who work on the project. If this isn't you, no worries! Feel free to take a look around anyway.

If you have questions, feel free to email drritchie[at]ucdavis[dot]edu.

## High Level Decisions

### Domain and Hosting
We chose to use GitHub Pages to host the site, as the vast majority of the content is static and front-end. There may be a need to migrate off GitHub Pages in the future (see Recommendations below) but for now it works excellently. You can check on this status under the "Settings" tab of the repository, scrolling down to the "GitHub Pages" section. The "Custom Domain" section is the important part, because that is how we have our domain name (ypar.cfcl.ucdavis.edu) attached to the site. The CNAME record also needs to contain a line with this domain on it. **Do not remove the CNAME record or remove the domain from the GitHub pages section of the settings page without informing UC Davis.** This would allow anyone to host their site at github pages under that domain, which we do not want. To be safe, just don't disable to domain name at all.

The domain name is registered with UC Davis. Email Scott Kirkland (srkirkland@ucdavis.edu) or Steven Barkley (sjbarkey@ucdavis.edu) to inquire about the domain name on the UC Davis side.

### HTML and CSS

The site is mainly built on HTML and CSS. For positioning, we have used a lot of <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">FlexBox</a>. Other than that, all of the elements are simple with few tricks. The exceptions will be noted below, where we have used React or JavaScript.

### React and JavaScript

React is used to handle the navigation toolbar at the bottom of the stepping stone pages. You can learn more about it <a href="https://reactjs.org/tutorial/tutorial.html">here</a>. It allows the user to click on the arrows to the left and right to scroll through the stepping stones, to jump forward or backward as many as they want.

Plain JavaScript is used to handle the FAQ page (to add the ability to expand and contract the question answers) and to handle the COVID banner (to allow it to go away when you click the "X"). For the FAQ, you can add or remove questions in the HTML without modifying the JavaScript, as long as you make sure you use the same HTML template for each question.

### Git and GitHub

We're using GitHub as a repository, not only because we're using it to host the site. Generally, we have made a new branch for a new set of tasks, and we push commits to that branch. Then, when we are satisfied with what we have on the branch, we merge the branch with the master branch, which pushes the changes to the actual live site. 

### Mobile Version

For the mobile version of the site, we mainly took elements that were displayed next to each other horizontally, and changed them to display vertically instead, since mobile sites are much thinner, but more easy to scroll through. In a few cases, images that wouldn't translate well were removed, but we tried to keep the design as consistent to the desktop version as possible.

## Tour of the Project

### Web Pages

Each web page is in the root directory of the project (not contained in a folder, same as this document). This includes the homepage, the Our Approach page, the Stories page, the FAQ, the About page, and all of the stepping stones. This is necessary so that they can be reached easily through the domain name. 

### Assets

The assets folder of the project contains all of the images and PDFs that are displayed or downloaded from the website. In general, there is a sub-folder for the assets used for each page, with extra sub-folders for the fonts and logos. A few items that don't really belong in any of the sub-folders are just in the main folder, like the Remote YPAR tips and the hamburger icon for mobile navigation.

### Styles

The styles folder contains all of the style cheets (CSS files) for the website. Generally, the files are named with the first letter of the corresponding page followed by "Style". For example, "OAStyle.css" is the style for the Our Approach Page. "SSCommon.css" is for styles common to all the stepping stones. Individual stepping stone style sheets are in the sub-folder "StoneStyles". "common.css" comtains styles common to all of the pages, like font weights, font families, and headers and footer styles.

### Scripts

The scripts (.js files) for the FAQ and Covid banner are in the main directory. The scripts for the toolbars of the stepping stones are in the ssScripts folder. The main toolbar code is in "sstones.js" while each stepping stone has its own script to insert the code for "sstones.js".

### Resources

This contains some extra resources that we wanted to be able to link to. There should be no need to edit this folder other than to remove, add, or replace the pdfs in it.

## Recommendations for Updating and Future Tasks

### Stories Database

The least complete part of the site right now is the stories page. Right now, you will have to manually go in and change the HTML to edit the stories. Ideally, there would be a way for Brandon and Kristen to do this without any HTML knowledge. But, this would require a database, which would require a server. So, you will have to look into server-side technologies on how to implement this. It would be similar to a blog, which should be fairly simple, as far as full-stack website engineering goes. This way, you could have a database of stories similar to the spreadsheet that we currently have, and the site would automatically pull a select few. We would need to create a new page that would allow Brandon and Kristen to modify the database.

### Interactive Stories Page

In addition to a database, adding more interactivity to the stories page could be a possible future step. You'll want to use something like React or Angular to allow users to click around, and maybe move around a "map" of the different featured stories.

### Interactive Stepping Stones

The stepping stone pages are extremely important, as they actually teach the information that CFCL wants to disseminate. I think that adding more interactivity, making each one more of a lesson, would be a really cool addition to the site, and would make the site more of a learning tool than just a place to download the stepping stone PDFs. These activities would have to be guided heavily by the PDFs, but it would make them much more engaging and content-rich.

### Improving Google Analyics Implementation

Currently, Google analyics is tracking site usage for each page. Using this
free technology we can monitor how many users we have coming in per day and
their activity on the site. We also implemented custom scripts to track PDF
downloads on each of the Stepping Stone pages.
Behavior (side bar) -> Events -> Pages will find data on individual pages.
Google analytics ->  Realtime (side bar) -> Events will find live view of events.


## Contributors

Daniel Ritchie

Peregrine Rolland