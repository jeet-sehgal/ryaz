// Make the function async to handle the fetch
async function executeCode() {
    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        script: "print('hi')\na=input(print('enter'))\nprint(a)",
        language: "python3",
        versionIndex: "3",
        clientId: "c1278a6a3f935c5953f6077ea5144b68",
        clientSecret: "bdbead16346fb998c1a5efa07d9f5f8f2c4bcd27f404666e7a533206b41cc0f9",
        stdin:"///"
      })
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Failed to execute code:", response.statusText);
    }
  }
  
  // Call the function
  executeCode();
  