function sentenceToUpperCase(str) 
{
  var a = str.split(" ");
   
  for(var i=0; i < a.length; i++)
  {
    a[i] = a[i].replace(a[i][0],a[i][0].toUpperCase());
  }
 return a.join(" ");
};

module.exports = sentenceToUpperCase;

