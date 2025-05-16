/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You've been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    if(!fileName){
      throw new Error(`File name is missing!`);
    }
    if(typeof fileData !== 'string'){
      throw new Error(`File data must be a string!`);
    }
    if(fileData === ""){
      throw new Error(`File data cannot be empty!`);
    }

    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    
    // TODO: Add simulated file operations (reading/writing)
  } catch (err) {
    // TODO: Implement error handling4
    console.error(err);
  } finally {
    console.log(`Closing File... 
      Cleaning Up....`);
  }
  // TODO: Implement a finally block to close resources
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt2", 0); // ❌ TypeError: File data must be a string
processFile("myFile.txt3", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt4", "Hello, world!"); // ✅ Should process successfully
