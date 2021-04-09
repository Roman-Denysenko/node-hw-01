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

function getContactById(contactId) {
  try {
  } catch (error) {
    console.log(error);
  }
}

function removeContact(contactId) {
  try {
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
