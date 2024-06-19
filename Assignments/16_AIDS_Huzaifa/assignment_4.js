// Node JS - File Cleaner:

/*Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is      Raman
```

After the program runs, the output should be

```
hello world my name is Raman
```
*/

const fs = require('fs');

const filename = 'input.txt'; // Replace with your file name

// Read the file
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    // Split the file content into lines
    const lines = data.split('\n');

    // Process each line
    const cleanedLines = lines.map(line => {
        // Remove extra spaces between words
        return line.trim().replace(/\s+/g, ' ');
    });

    // Join lines back together with newline characters
    const cleanedText = cleanedLines.join('\n');

    // Write back to the same file
    fs.writeFile(filename, cleanedText, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }
        console.log(`File '${filename}' has been successfully cleaned.`);
    });
});
