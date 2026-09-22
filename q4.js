function findnumber(numbers,target)
{
    let n=numbers.length;

    for(let i=0;i<n;i++)
    {
        if(numbers[i]<0)
        {
            continue;
        }
        if(numbers[i]==target)
        {
            return "found";
            break;
        }
    }
    return "not found";
}
console.log(findnumber([1,2,3,4,6,7,8,9],5));