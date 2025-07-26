//Terminals
/**
 * In windows on our CMD all the standard linux commands do not work for that we need to install wsl,windows subsystem for linux
 */

/**
 * Some popular commands
 * pwd :- Present Working Directory
 * cd :- Change Directory , to come back cd ..
 * ls :- List all the files in the current dir , dir in windows
 * mkdir :- Make Directory
 * touch :- Create an empty file
 * cat :- Shows the contents of a file
 * 
 * 
 * vi :- This is for editing a file in terminal using vim
 * Fact about vim , you can only edit a file when you are in inset mode (Press I)
 * To exit vim , come out of insert mode then press Esc , then press :q!
 * The above will help to quit vim
 * 
 * mv :- Used to moves file and folders from one place to other
 * Syntax , mv path1(to move) path2(where to move)
 * 
 * cp :- Used to copy a file or dir 
 * Syntax , cp fileName pathtoCopy , Just in case we are copying a dir we need to make use of -r flag
 * cp -r dirName pathWhereToMove , this is as we need to sometimes copy a lot of things recursively
 * 
 * 
 * npm - Node Package Manager
 * node - runtime for node
 * nvm - Node Version Manager
 * 
 * rm - Deletes a file
 * rm -r - Delete a directory as we need to do that also recursively
 * 
 * 
 * chmod - Modify the read , write and execute permissions of a file
 * Syntax chmod ugo-rwx 
 * The above mean u for user , g for group , o for others -(is for minus) r for read , w for write,x for execute
 * So in case i have to give the user write permission for a particular file then i'll do 
 * chmod u+w a.txt
 * If i want to remove execute permission for a group then I will do
 * chmod g-x a.txt
 * If i want to do the same to a folder then 
 * chmode -r u+x boomBam
 * IMP -> There is also a numeric way to do so , 4 is for read , 2 is for write and 1 is for execute
 * Ex to add write permission to group but to keep others as read and write we can do
 * chmod 626 a.txt
 * 
 * 
 * echo :- To display something on your command prompt we make use of this
 * echo 'Hello World!!'
 * 
 * head - to see the top 10 rows of a file
 * tail - to see the last 10 rows of a file
 * head +20 fileName - to see the top20 rows of the file
 * tail -20 fileName - to see the last20 rows of the file
 * We can see a particular part of a pile using two commands together with the help of a pipe operator
 * tail -n +25 a.txt | head -n 10
 * 
 * wc - This gives us the rowCount , numberofWords , numberOFChars in a file
 * wc a.txt
 * 
 * grep - This is used to get all the occurence or instances of a particular phrase or word in a file or directory
 * grep "one" a.txt
 * grep "one" a.txt | wc    
 * -c - This flag is to count the number of occurence of the search term
 * -h - This flag is to get the lines where our search term is present
 * -hi - Means same as above just ignore the case as well
 * 
 * history - to show all the commands that one has executed in the current session
 */