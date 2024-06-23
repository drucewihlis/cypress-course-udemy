// npm run runner
describe('template spec', () => {
  it('passes', () => {
    cy.log("hlowrld")
  })
  it('TypeScript intro', () => {
    let stringVar: string = "9";
    let numberVar: number = 10;
    let boolVar: boolean = false;
    let anyVar: any = 99;

    function addTwoNums(a:number, b:number):number {
      return a + b;
    }

    interface User{
      username: string;
      password: string;
    }

    function returnUserInfo(user: User):void{
      console.log("This is the username" + user.username)
      console.log("This is the pass" + user.password)
    }
  });
});