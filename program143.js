//accept number user and determine it even or odd

function Checkeven(iNo)
{
    if(iNo % 2 ==0)
    {
        console.log("It is even number");
    }
    else
    {
        console.log("It is odd number");
    }
}
function main()
{
    let iValue = 11;

    Checkeven(iValue)
    
}
main();