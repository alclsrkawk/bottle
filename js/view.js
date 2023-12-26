
const elExpand = document.querySelector('.expand'),
      elFold = document.querySelector('.fold'),
      elExImg = document.querySelector('.img_ex');

      console.log(elExImg)


      elExpand.onclick = function(e){
        e.preventDefault();
        elExpand.style.display= 'none';
        elFold.style.display= 'block';
        elExImg.style.height = 'auto'

      }
      elFold.onclick = function(e){
        e.preventDefault();
        elExpand.style.display= 'block';
        elFold.style.display= 'none';
        elExImg.style.height = '2051px'

      }
        

