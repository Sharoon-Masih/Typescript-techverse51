let firstName: string = "Techverse"; //explicit typing or strong typing

firstName = "piaic"
firstName = "sharoon"
firstName = "haisam"

const age: number = 20;
const PI: number = 3.14;
const cnic: number = 42301222;
const gravity: number = 9.8;

var lastName: string = "diet";
var lastName: string = "diet3";

//let and const

//block-scope with let
//main block
{
    let tower: boolean = true //global scope //out of the box

    //block1
    {
        tower = false
        let test: boolean = false; //local scope  //in the box
        let fullName: string = "shah"//local scope

    }

    //block2
    {

        tower = true
        let check: boolean = true; //local scope
        check = false;//local scope
        let test2: boolean = true;//local scope

    }

    tower = false
}
// tower //error
//block-scope with const
{
    const tower1: boolean = true //global scope //out of the box

    //block1
    {
        tower1
        let test: boolean = false; //local scope  //in the box
        let fullName: string = "shah"//local scope

    }

    //block2
    {

        tower1
        let check: boolean = true; //local scope
        check = false;//local scope
        let test2: boolean = true;//local scope

    }

    tower1
}
// tower1 //error
//var its not block-scope
{
    var tower2: boolean = true //global scope //out of the box

    //block1
    {
        tower2
        let test: boolean = false; //local scope  //in the box
        let fullName: string = "shah"//local scope

    }

    //block2
    {

        tower2
        let check: boolean = true; //local scope
        check = false;//local scope
        let test2: boolean = true;//local scope

    }

    tower2
}

tower2 = false; //no error





