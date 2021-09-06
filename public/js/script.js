$(function (){
  let myForm =$('#form');
  let myWord =$('#formMot');
  let countLeft = 5;
  let guessWord = null;
  let letters = [];
  $('#historique').append('historique des propositions : ');

  myForm.submit(function (e) {
    e.preventDefault();

    if (countLeft>0){
      let formUrl = $(this).attr('action');
      let formMethod = $(this).attr('method');
      let formData = $(this).serialize();
      
      let txt = $('#txt').val();
      letters += $('#txt').val();
      localStorage.setItem('proposition', txt);
      $('#historique').append(localStorage.getItem('proposition') + ' ');
      $('#result').html('');

      countLeft--;
      if (countLeft == '0'){
        console.log(countLeft + ' end');
        $('#nbrLeft').html('');
      }
      else{
        console.log(countLeft);
        $('#nbrLeft').html(countLeft + ' propositions restantes'); 
      }
      
      
      sendPseudo();
      function sendPseudo (lettre){
        $.ajax({
          type: formMethod,
          url: formUrl,
          data: formData,
        }).done(function(response){
          $('#result').html('');
          $('#result').append(response);
        });
      }
    }
    else{
      $('#result').html('Nombre de tentative épuisée');
      let WordSplits = guessWord.split('');
      // console.log(WordSplits);
      console.log(guessWord);
      // foreach (WordSplits in WordSplit){
      //   console.log(WordSplit);
      // }
      let countLetters = 0
      for (let WordSplit of WordSplits) {
        for (let i=0;i<letters.length;i++){
          if (WordSplit == letters[i]){
            console.log('good');
            console.log(letters[i]);
            countLetters++;
          }
        }
      }
      console.log(countLetters, guessWord.length);
      if (countLetters == guessWord.length){
        console.log('gagné')
        $('#resultat').html('gagné, le mot est '+guessWord);

      }
      else{
        $('#resultat').html('perdu, le mot est '+guessWord);
      }
      // console.log(letters);

    }

  });

  myWord.submit(function (e) {
    e.preventDefault();
    guessWord = $('#subWord').val();
    console.log(guessWord);
    $('#subWord').val('');
    console.log('here')

    
    let formWordUrl = $(this).attr('action');
    let formWordMethod = $(this).attr('method');
    let formWordData = $(this).serialize();
    
    sendWord();
    function sendWord (){
      $.ajax({
        type: formWordMethod,
        url: formWordUrl,
        data: formWordData,
      }).done(function(response){
      });
    }

  });

  

});