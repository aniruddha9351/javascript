// Structure related concept of c in javascript(jason)

class Demo
{

    constructor(A,B) 
    {
        this.No1 = A;
        this.No2 = B;
        console.log("Inside constructor:")
    }
    Display()
    {
        console.log("inside display")
    }
}
function main()
{   

    dobj = new Demo(11,201); 
    console.log(dobj.No1)
    console.log(dobj.No2)
    dobj.Display();
}
main()