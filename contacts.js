const fs = require("fs/promises");
/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
async function listContacts() {
  const result = await fs.readFile("./db/contacts.json", "utf-8");
  return result;
}

async function getContactById(contactId) {
  // ...твой код
}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
