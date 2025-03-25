var image    =   new Image();
var Images   =   new Array('1.jpg','2.jpg','3.jpg');


function change(target)
{
   from       =   (document.images[target].src).lastIndexOf("/")+1;
   imageName    =   (document.images[target].src).substring(from,(document.images[target].src).length);
   current    =   IndexOf(Images,imageName);
   if (current+1 == Images.length)
   {
      current   =   0;
   }
   else
   {
      current++;
   }
   image.src    =   Images[current];
   document.images[target].src = image.src;
}

function IndexOf (haystack,needle)
{
   if (!isIE()) // IE don't supported indexOf because SUCKS!
   {
      return haystack.indexOf(needle);
   }
   var total   =   haystack.length;
   for ( i=0 ; i< total ; i++ )
   {
      if (haystack[i] == needle)
      {
         return i;
      }
   }
   return -1;
}

function isIE()
{
    var userAgent   =   navigator.userAgent.toLowerCase();
    return (document.all && userAgent.indexOf('msie')!=-1);
}