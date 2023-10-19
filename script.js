const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInput = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

//array of countries
let countries = ["Albania", "Argentina", "Bahrain", "Belgium", "Brazil","Canada", "Denmark", "Finland","Georgia",
                 "Honduras", "Indonesia","Kyrgyzstan", "Malawi", "Maldives","Namibia", "Palau", "Slovakia","Togo", "Uruguay", "Venezuela","Yemen", "Zambia", "Zimbabwe"];

function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach(country => { //add countries inside li
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`; //add background color to selected country
    options.insertAdjacentHTML("beforeend", li);
  })
}
addCountry();

function updateName(selectedLi) {
  searchInput.value =""; 
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup", () => {
  let arr =[]; //empty array
  let searchedVal = searchInput.value.toLowerCase();
  arr = countries.filter(data => {
    return data.toLowerCase().startsWith(searchedVal); //return countries with user search value
  }).map(data =>`<li onclick="updateName(this)">${data}</li>`).join(""); //return country(ies) with li and joining them
  options.innerHTML = arr ? arr : `<p>Country not found..</p>`;
});

//select button transform and event
selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});
