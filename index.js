const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    //   case "get":
    //     // ... id
    //     break;

    //   case "add":
    //     // ... name email phone
    //     break;

    //   case "remove":
    //     // ... id
    //     break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction({ action: "listContacts" });
