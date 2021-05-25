function startTimer(m,s)
{
  document.getElementById('timer').innerHTML= m+":"+s;
  if (s==0)
  {
    if (m == 0)
    {
      return(t); //to stop the timer use return rather than function...
    }
    else if (m != 0)
    {
      m = m-1;
      s = 60;
    }
  }
  s = s-1;
  t=setTimeout(function(){startTimer(m,s)},1000);
}

//add function for radio button choosen