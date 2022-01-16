let tasodifSon = Math.trunc(Math.random()*30)+1;
let rekordDaraja = 0;
let imkoniyatlar = 10;

document.querySelector('.inputButton').addEventListener('click' , function(){

let taxminSon = Number (document.querySelector('.inputGroup').value);

 if(!taxminSon){
    document.querySelector('.inputNatija').textContent = "Son kiritilmadi !";
 }else if(taxminSon === tasodifSon){
     document.querySelector('.inputNatija').textContent = 'Tasodifiy son topildi';
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.inputNatija').style.backgroundColor = '#60b347';
     document.querySelector('.gameSharti').textContent = tasodifSon;

     if(imkoniyatlar>rekordDaraja){
        rekordDaraja = imkoniyatlar;
        document.querySelector('.balandDaraja').textContent = rekordDaraja;
     }
 }else if(taxminSon > tasodifSon){
     if(imkoniyatlar>1){
        document.querySelector('.inputNatija').textContent = 'Katta son kiritildi';
        imkoniyatlar = imkoniyatlar-1;
        document.querySelector('.imkoniyatlarDarajasi').textContent = imkoniyatlar;
     }else{ document.querySelector('.inputNatija').textContent = 'Yutqazdingiz (: !';
    }
}else if(taxminSon < tasodifSon){
    if(imkoniyatlar>1){
        document.querySelector('.inputNatija').textContent = 'Kichik son kiritildi';
        imkoniyatlar = imkoniyatlar-1;
        document.querySelector('.imkoniyatlarDarajasi').textContent = imkoniyatlar;
    }else{
        document.querySelector('.inputNatija').textContent = 'Yutqazdingiz (: !';
    }
}
});

document.querySelector('.resultButton').addEventListener('click' , function(){
    imkoniyatlar = 10;
    tasodifSon = Math.trunc(Math.random()*20)+1;
    document.querySelector('.imkoniyatlarDarajasi').textContent = imkoniyatlar;

    document.querySelector('.inputNatija').textContent = 'Oyinni boshlang...';
    document.querySelector('.gameSharti').textContent ="1 va 30 o'rtasida son o'ylayabman topa olasizmi ? ? ?";
    document.querySelector('.inputGroup').value = "";
    document.querySelector('body').style.backgroundColor = "#e9e3e3";


});