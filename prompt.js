var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
// prompt.get(["username", "email"], function (err, result) {
//   //
//   // Log the results.
//   //
//   console.log("Command-line input received:");
//   console.log("  username: " + result.username);
//   console.log("  email: " + result.email);
// });
async function testing() {
  const { username, email } = await prompt.get(["username", "email"]); // autre methode pour afficher sans utiliser colback
  console.log("fin", username);
}
testing();
