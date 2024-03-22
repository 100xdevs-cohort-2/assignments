// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function cleaner(file_path) {
    fs.readFile(file_path, 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        const cleaned_data = data.replace(/\s+/g, ' ').trim();

      
        console.log(cleaned_data);

     
        fs.writeFile(file_path, cleaned_data, 'utf8', function (err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File cleaned and updated successfully.');
        });
    });
}

cleaner('file.txt');
