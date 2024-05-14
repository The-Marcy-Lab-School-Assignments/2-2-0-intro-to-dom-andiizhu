const getMainHeadingText = () => {
  console.log(document.querySelector("h1").textContent);
};

const getAllMainText = () => {
  const text = document.querySelectorAll(".main-text");
  console.log([...text].map((node) => node.textContent).join(","));
};

const setSubtitleText = () => {
  const subtitle = document.querySelector("#subtitle");
  subtitle.textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const div = document.querySelector("#modify-classes").classList;
  div.add("new-class");
  div.remove("bad-class");
};

const addH2 = () => {
  const h2 = document.createElement("h2");
  h2.id = "h2-test";
  h2.textContent = "Another one!";
  document.body.append(h2);
};

const removeOldInfo = () => {
  const remove = document.querySelector("#old-info");
  remove.remove();
};

const makeAlphabet = () => {
  const alphabet = document.querySelector("#alphabet");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numOfChar = alphabet.dataset.numLetters;
  for (let i = 0; i < numOfChar; i++) {
    let li = document.createElement(`li`);
    li.textContent = `${letters[i]} is letter #${i + 1} in the alphabet`;
    alphabet.append(li);
  }
};

const makeBio = () => {
  const bio = document.querySelector("#my-bio");
  bio.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main();
