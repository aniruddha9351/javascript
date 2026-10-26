// problems on NUMBER

function Displayfactor(iNo)
{
    let iCnt = 0;
    console.log("Factor is :",iNo)
    for(iCnt = 1; iCnt <= (iNo / 2) ;iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            console.log(iCnt)
        }
    }
      
}

function main()
{
   Displayfactor(12);
}
main();