- Error I faced while setting up test environment

```js

node '/Users/.../01-js/node_modules/jest/
bin/jest.js' '/Users/.../01-js/tests/calculator.test.js' -t 'Calculator'
node:internal/modules/cjs/loader:1147
  throw err;
  ^

Error: Cannot find module '/Users/s.../01-js/node_modules/jest/bin/jest.js'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

```

Solved installing jest in local project environment:

```sh
npm install --save-dev jest
```

- [100xdevs ChatGPT Help](https://chat.openai.com/share/0ff16721-2edc-451d-883b-3c2c9104ee68)

- `Do not outsource the art of problem solving without thinking and also at initial process`.

- Do not outsource the art of problem solving.

- Usefull >>> Dificult

- Hard Assignments
  - `Calculator`: requires converting infix expression to postfix expresion.
    Done with chat GPT help asking directly for infix to either postfix or
    prefix conversion alogrithm.
    `Learned about Shunting Yard Algo for converting infix to postfix`. Also
    about Postfix expression evalutation and reasons for using this approach and
    over prefix expression.
  -

## Resources/References

- [A Great Resource and notes on Shunting Yard Algo by aquarchitect&swift-algorithm-club](https://aquarchitect.github.io/swift-algorithm-club/Shunting%20Yard/)
