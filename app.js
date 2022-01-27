// this list of variable declarations will selectively feed into the formatting machine functions to format info. 
let myName = "Jake Sims";
let company1 ="The Essential";
let company2 ="Little Donkey";
let company3 ="Sweet Home Food Bar";
let title1 ="chef-de-partie";
let title2 ="line leader";
let title3 ="linecook";
let des1 ="- linechef responsibilities, a lot of sauté work.";
let des2 ="- oh boy, I did lots of stuff here. Food truck management, shift leading, expo, invoices, whatever.";
let des3 ="- roundsman, meaning I prepped and linecooked and worked about every station.";

//this obnoxious list of logs prints every line in the console that isn't formatted with functions.
console.log("Name: " + myName.toUpperCase()); // produces my name formatted in all caps
console.log("Career: Cooking");
console.log("Description: I've been cooking for about seventeen years okay? I don't write my stuff anymore, I just kick it from my head you know what I'm saying... ");
console.log("");
console.log("My Interests:");
console.log("* pocket protection");
console.log("* shoe shining");
console.log("* minding my manners");
console.log("* complaining (moderate intensity)");
console.log(""); 
console.log("My Previous Experience:");

displayPosition(company1, title1, des1);  
displayPosition(company2, title2, des2);
displayPosition(company3, title3, des3); // these calls cause the displayPosition function to print the relevant strings with appropriate formatting. It summons predefined variables.

console.log("");
console.log("My Skills: ")

displaySkill("reading", false); // these calls cause the displaySkill to format skills. It uses a string and boolean as an argument rather than summoning a predefined variable. 
displaySkill("seeing through corners", true);
displaySkill("reverse empath (I know how I feel)", false);
displaySkill("shape identification", false);
displaySkill("tuvan throat singing", true); 
displaySkill("can and will make hollandaise hundreds of times", false);
displaySkill("psychoanalytic dream interpretation", true); 
function displayPosition(company, title, description) {
    console.log("* " + title + " at " + company + ": " + description);
} // this will just concatenate variables into a coherent sentence to be logged. 

function displaySkill(skill, coolVal) {
    if (coolVal == true) {
        console.log("* BAM: " + skill);
    }
    else { 
        console.log("* " + skill); 
    }
} // this function not only formats the skill list but also reads whether the skill is cool or not to determine if it gets a BAM. 



