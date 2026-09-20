function firstFail(marks,passMark=40)
{
    for(let i=0;i<4;i++)
    {
        if (marks[i]>passMark)
        {
            return -1;
        }
        else
        {
            return i;
        }
    }
}
