// problems on NUMBER(factor sum)

function Sumfactor(iNo)
{  
    let iSum = 0;
    let iCnt = 0;
   
    for(iCnt = 1; iCnt <= (iNo / 2) ;iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            iSum = iSum + iCnt;
        }
    }
     return iSum; 
}

function main()
{
    let iRet = 0;
    
    iRet = Sumfactor(12);
    
    console.log("Summation of factor:",iRet)
}
main();