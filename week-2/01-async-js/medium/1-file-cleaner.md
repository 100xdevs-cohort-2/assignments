## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

NOTE: read a file using node-fs

- METHOD1:

```js
'hello     world    my    name   is       raman Raman RAMAN'
  .match(/\w+\s?/g)
  .join('');
```

- METHOD2:

```js
'hello     world    my    name   is       raman'
  .split(/\s/g)
  .filter(Boolean)
  .join(' ');
```
