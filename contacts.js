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
        for (let i = 0; i < dataArr.length; i += 1) {
          dataArr[i].id = 1 + i;
        }
        fs.writeFile(contactsPath, JSON.stringify(dataArr), (error) => {
          if (error) throw error;
        });
      }
    });
    console.log("Contact remove success");
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const dataArr = JSON.parse(data);
    const id = dataArr.length + 1;
    const item = {
      id: id,
      name: `${name}`,
      email: `${email}`,
      phone: `${phone}`,
    };

    dataArr.push(item);
    fs.writeFile(contactsPath, JSON.stringify(dataArr), (error) => {
      if (error) throw error;
    });
    console.log("Contact add success");
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
