const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data).find((el) => el.id === contactId);
    console.table(result);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const dataArr = JSON.parse(data);

    dataArr.map((el) => {
      if (el.id === contactId) {
        const index = dataArr.indexOf(el);
        dataArr.splice(index, 1);
        fs.writeFile(contactsPath, JSON.stringify(dataArr));
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function addContact(name, email, phone) {
  try {
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
