const initialFreelancers = [
  { name: "Alice", startingPrice: 30, occupation: "Writer" },
  { name: "Bob", startingPrice: 50, occupation: "Teacher" },
  { name: "Carol", startingPrice: 70, occupation: "Programmer" },
];

let freelancers = [...initialFreelancers];

const randomUser = [
  { name: "James", startingPrice: 90, occupation: "Chemist" },
  { name: "Jennifer", startingPrice: 65, occupation: "Artist" },
  { name: "Mandy", startingPrice: 40, occupation: "Tutor" },
];

const freelancersList = document.getElementById("freelancersList");
const averagePrice = document.getElementById("avgPrice");
const addRandomUser = document.getElementById("addUser");
const resetUserList = document.getElementById("resetUsers");

const displayFreelancers = () => {
  freelancersList.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const li = document.createElement("li");
    li.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
    freelancersList.appendChild(li);
  });
};

const updateDisplay = () => {
  displayFreelancers();
  averagePrice.textContent = calcAvg();
};

const randGen = () => {
  const randNum = Math.floor(Math.random() * randomUser.length);
  freelancers.push(randomUser[randNum]);
  updateDisplay();
};

const calcAvg = () => {
  const totalPrice = freelancers.reduce(
    (sum, freelancers) => sum + freelancers.startingPrice,
    0
  );
  return totalPrice / freelancers.length;
};

const resetUsers = () => {
  freelancers = [...initialFreelancers];
  updateDisplay();
};

updateDisplay();

addRandomUser.addEventListener("click", randGen);
resetUserList.addEventListener("click", resetUsers);
