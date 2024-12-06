/*
The tast:

1. Find 5 most often occuring words
2. Highlight them
3. if One of the most often occuring word start with capital we will underline it.

*/

/*
Our Algorithm:

1- Store the paragraph in to a variable
2- Convert that variable to array
3- Find the frequency of each word
4. Select 5 most occuring
5. Highligt them 
6. if they start with capital we'll underline them.

*/

const paragraph = document.getElementById('myParagraph');

const paragraphContent =paragraph.textContent;