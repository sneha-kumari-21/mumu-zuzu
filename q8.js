function checkEntry(age,hasID)
{
    if(age>=18 && hasID==True)
    {
        return "Allowed";
    }
    else if(age>=18 && hasID==False)
    {
        return "ID Required";
    }
    else
    {
        return "Too Young";
    }
}

console.log(checkEntry(18,False))
