#!/usr/bin/env node
import inquirer from 'inquirer'


let todos :string[] = ['Go to Home', 'Go to School']
async function Todo() {
  let todo = await inquirer.prompt([{
    name : 'task',
    type:'list',
    message: 'Select operation which you want to perfoam',
    choices : ['Show todo','Add todo','Delete Todo']

  }])
 if (todo.task==='Show todo'){
  console.log(todos)
 }
 else if (todo.task==='Add todo'){
  let addTodos = await inquirer.prompt([{
    name : 'addtodo',
    type:'input',
    message:'Enter your Todo'
  }])
  todos.push(addTodos.addtodo)
  todos=todos
  console.log(todos)  
 }
 else if (todo.task==='Delete Todo'){
  todos.pop()
  console.log(todos) 
 }
}


async function restart() {
 
  do{
    await Todo()
    var question = await inquirer.prompt([{
      name :'que',
      type :'input',
      message : 'Do you want to perfoam more operation. if YES type [Y]',
    }])
    
  }
  while(question.que==='Y')
   
   

  
  
}
 restart()