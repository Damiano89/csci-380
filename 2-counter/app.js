// set inital value to zero
let count = 0;
// select value and buttons
const outputDiv = document.querySelector("#output");
const btns = document.querySelectorAll(".btn");

const companies = ["Uber", "Lyft", "Google", "Apple", "SpaceX", "Tinder"]
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]
const vowels = ["A", "E", "I", "O", "U"]

console.log(btns)

// for (let i = 0; i < btns.length; i++) {
//   // btn.addEventListener()
// }

function addCompany(){
  const companyName = companies[Math.floor(Math.random() * companies.length)]
  const firstLetter = companyName.charAt(0)
  const companyString = "My company is a" + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ") + companyName + " for " + animals[Math.floor(Math.random() * animals.length)] + "s!<br />"
  outputDiv.innerHTML = companyString
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
          addCompany()  
    } else if (styles.contains("increase")) {
          addCompany() 
    } else {
      const companyString = " "
      outputDiv.innerHTML = companyString
      
    }
  });
});
