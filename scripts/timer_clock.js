function startTimer(m,s)
{
  document.getElementById('timer').innerHTML= m+":"+s;
  if (s==0)
  {
    if (m == 0)
    {
      clearTimeout(t);
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