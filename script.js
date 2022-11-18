function returnFamilyProperty() {
  const family = {};
  for (let i = 0; i < 3; i++) {
    let key = prompt("Enter name");
    let member = prompt("Enter member type");
    if (
      isNaN(key) === true &&
      key !== null &&
      key !== "" &&
      isNaN(member) === true &&
      member !== null &&
      member !== ""
    ) {
      family[key] = member;
    }
  }
  return family;
}
const content = returnFamilyProperty();

for (const key in content) {
  console.log(`${key} is a ${content[key]}`);
}
