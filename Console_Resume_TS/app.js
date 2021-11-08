//let myName = "drew cleghorn"
//console.log("Name: " + myName.toUpperCase)
console.log("Name: " + "drew cleghorn".toUpperCase());
console.log("Career: Full Stack Engineer / Writer");
console.log("Description: Hi Garrett");
console.log("\n");
console.log("My Interests:");
console.log("* Rock Climbing");
console.log("* Vidya Gam");
console.log("* Anime");
console.log("* The defeat of the bourgeoisie");
console.log("\n");
console.log("My Previous Experience");
displayPosition("Bingus", "bongus", "great cat");
displayPosition("Funkus", "fonkus", "flinkus");
console.log("");
console.log("My Skills:");
displaySkill("Rock Climbing", true);
displaySkill("Writing", false);
function displayPosition(companyName, jobTitle, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
}
function displaySkill(skillName, coolOrNot) {
    if (coolOrNot) {
        console.log("BAM: " + skillName);
    }
    else {
        console.log(skillName);
    }
}
