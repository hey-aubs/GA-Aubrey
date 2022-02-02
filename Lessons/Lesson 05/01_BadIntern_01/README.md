#FEWD: Bad Intern Troubleshooting #1


---


###Exercise Problem 

Your client has had an intern work on a content page and something has gone horribly wrong.  They are now in a panic and have asked you to try to repair the damaged page.  They have identified the followng problems:

* - The first image is broken
    Answer: update the image path
    
* - The second image seems to be stretched. Images that are smaller than the width of the content box should center.
    Answer: set max width and update margins
        .oldTimeNewsPaper-corestyles-contentImage {
        max-width: 100%;
        border: 1px solid rgb(155,155,155);
        margin: 16px auto 16px auto;
        display:block;
        }

* - The paragraphs are all slurred together. There should be 20px of space between them.
    Answer: put a margin-bottom of 20px on the p
        .oldTimeNewsPaper-corestyles p {
        font-size: 20px;
        margin-bottom: 20px;
        }

* - The other articles column is appearing below the article column. It should be to the right
    Answer: instructor: adjust the margins of the sections below 960px
    Answer (mine): make the outer container a flex container
        .outer-container {
        width: 960px;
        margin: 0 auto;
        display: flex;
        }

* - There is a horrible line that is appearing next to the text starting around halfway down
    Answer: close the blockqote tag in the HTML

* - The blockquote's border should be flush with the left edge of the content box and there should be space between it and the quote's text
    Answer: add 30px of padding to the blockquote
        .oldTimeNewsPaper-corestyles blockquote {
        font-size: 20px;
        margin-bottom: 20px;
        font-style: italic;
        padding-left: 30px;
        border-left: 8px solid black;
        }

* - The other articles column seems to have inconsistent color formatting. The middle article is blue.
    Answer: close the hyperlink tag in the HTML

The client is extremely distressed and needs help! (They are sitting in the conference room pacing and the project manager is trying to keep them calm) Think through the troubleshooting process... what are the most likely causes of the errors?  Is one thing broken or are there many?