const { program } = require("commander");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "getContactById":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
      break;

    case "addContact":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "removeContact":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a,--action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(process.argv);
const options = program.opts();
invokeAction(options);
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "9" });
// invokeAction({
//   action: "addContact",
//   name: "Pasha",
//   email: "plobtsov@gmail.com",
//   phone: "(093) 487-7197",
// });
// invokeAction({ action: "removeContact", id: "62b843d77b0a7161f86071c9" });
