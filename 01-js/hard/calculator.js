/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result;

  constructor() {
      this.result = 0;
  }

  add(a) {
      this.result += a;
  }

  subtract(a){
      this.result-=a;
  }

  divide(a){
      if(a===0)
      {
          this.throw_error();
      }
      this.result/=a;
  }

  multiply(a){
      this.result*=a;
  }
  
  clear(){
      this.result=0;
  }

  getResult(){
      return this.result;
  }

  throw_error()
  {
      throw new Error();
  }

  #findoperand(s,idx,dir)
  {
      let operand="";
      for(let i=idx;i>=0 && i<s.length;i+=dir)
      {
          if(s[i]=='.' || !isNaN(s[i]))
          {
              operand+=s[i];
          }
          else 
          {
              break;
          }
      }
      if(dir==-1) operand=operand.split('').reverse().join('');
      return operand;
  }

  #check(s)
  {
      let operand="+-*/().";
      let cnt=0;
      for(let i=0;i<s.length;i++)
      {
          if(s[i]=='(')
          {
              cnt++;
          }
          else if(s[i]==')')
          {
              cnt--;
          }
          if(cnt<0)
          {
              this.throw_error();
          }
          if(operand.includes(s[i]) || !isNaN(s[i]))
          {
              continue;
          }
          this.throw_error();
      }
  }

  #evaluate(operand1,operand2,operator)
  {
      if(operator=='/')
      {
          if(operand2===0) 
          {
              this.throw_error();
          }
          return operand1/operand2;
      }
      else if(operator=='*')
      {
          return operand1*operand2;
      }
      else if(operator=='+')
      {
          return operand1+operand2;
      }
      else
      {
          return operand1-operand2;
      }
  }

  calculate(s){
      s=s.replaceAll(" ","");
      let open=[];
      this.#check(s);
      s='('+s+')';
      for(let i=0;i<s.length;i++)
      {
          if(s[i]=='(')
          {
              open.push(i);
          }
          else if(s[i]==')')
          {
              let curr="";
              if(open.length==0)
              {
                  this.throw_error();
              }
              for(let j=open[open.length-1]+1;j<i;j++)
              {
                  curr+=s[j];
              }
              let operands=['/','-','*','+'];
              for(let j=0;j<4;j++)
              {
                  let idx=curr.indexOf(operands[j]);
                  while(idx!=-1)
                  {
                      let left_oper=this.#findoperand(curr,idx-1,-1);
                      let right_oper=this.#findoperand(curr,idx+1,1);
                      let val=this.#evaluate(+left_oper,+right_oper,operands[j]);
                      curr=curr.slice(0,idx-left_oper.length)+val+curr.slice(idx+1+right_oper.length);
                      idx=curr.indexOf(operands[j]);
                  }
              }
              s=s.slice(0,open[open.length-1])+curr+s.slice(i+1);
              i=open[open.length-1]-1;
              open.pop();
          }
      }
      if(open.length)
      {
          this.throw_error();
      }
      this.result=+s;
      return s;
  }
}

module.exports = Calculator;
