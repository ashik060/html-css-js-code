document.write('<div class="namta-main">');
for(let i=1;i<=100;i++){
  document.write('<div class="namta-con">');
    document.write('<h5>'+i+' এর নামতা </h5>');
  for(let j=1;j<=10;j++){
    document.write(i + ' <i class="fa-solid fa-xmark"></i> ' + j +' = '+ i*j +'<br>');
  }
  document.write('</div>');
}
document.write('</div>');