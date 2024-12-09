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

// The selection of the paragraphe in a variable

let para = document.getElementById('myParagraph');
para = para.textContent;

// Convert the string in to an an array

let array = para.split('\n');

let string = array.join('');

//remove the special characters
string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}""]/g,);

array = string.split(' ');

// the object to store each word with it occurrence frequency
let frequency = {};

const n = array.length;
let count;
for(let i= 0; i < n; i++)
{
    if(frequency[array[i]] === undefined)
        {  
                count = 1;
             for(let j = i+1; j < n; j++)
             {
                if(array[i] === array[j])
                {
                    count +=1;
                }
            }
     frequency[array[i]] = count;
     }
}

console.log(array);
console.log(frequency);


// Sort the object elements

// console.log(sortable);

let sorted = Object.keys(frequency).sort(function(a,b){return frequency[b] - frequency[a]});

// Keep just the top five
let mostFrequency = sorted.slice(0,6);


// Display those most frequency words
console.log(mostFrequency);