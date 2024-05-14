const h1 = () => {
  const header1 = document.createElement("h1");
  header1.id = "main-heading";
  header1.textContent = "Hello World!";
  document.body.append(header1);
};

const p = () => {
  const p1 = document.createElement("p");
  p1.classList = "boring-text";
  p1.id = "main-text";
  p1.textContent = "Look, I'm some text!";
  document.body.append(p1);
};

h1();
p();
