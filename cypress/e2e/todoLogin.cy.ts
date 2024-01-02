const todo=require("../fixtures/todo.json")
import { loginPage,general,text } from "../support/todoSelectors";
import Todo from "../models/Todo"

describe('todo login and aplication',{retries:1}, () => {
const data=new Todo()

    it('login and aplication', () => {
        //Login tek metod olarak oluşturuması gerekir
        cy.visit(todo.urlLogin)
        cy.sendKeys(loginPage.inputEmail,todo.email)
        cy.sendKeys(loginPage.inputPassword,data.getPassword())
        cy.clickk(loginPage.loginButton)
        //Assert
        cy.assertGetByText(general.welcome,data.getfirstName())
        cy.assertGetByText(general.newTodo,text.newTodoText)
        //Add todo
        cy.clickk(general.addButton)
        //Assert
        cy.assertGetByText(general.headers,text.createTodoText)
        //create and delete
        cy.sendKeys(general.textBox,todo.message)
        cy.clickk(general.createButton)
        cy.clickk(general.deleteButton)
        
    });
    
});