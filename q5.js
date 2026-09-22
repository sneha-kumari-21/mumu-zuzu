function checkpassward(password)
{
    let i=0;
    n=passwards.lengths;
    let target="1234"

    do
    {
        if(passwords[i]==="1234")
        {
            return "password correct";
            break;
        }
        i+=1;
        return "passward failed";
    }
    while(i<n)
}

console.log(checkpassward("111","5678","8549"))