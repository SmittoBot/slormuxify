/* Larmallah */

// makes cursor start in the input swag
window.onload = function() {
  document.getElementById("input-swag").focus();
};

var input_swag  = document.getElementById("input-swag");
var output_swag = document.getElementById("output-swag");

function setOutputSwag(text) {
  output_swag.textContent = larmuxify(text)
}

function larmuxify(input_text) {

    do {
      var words = input_text.split(" ");
      var output_text = [];
      const larmallah = 'larmallah ';
      var dictionary = {'please':'plix', 'moon':'luneplop', 'dog':'dorgle', 'cat':'catsyprip'};
      for (word of words) {
          const num = Math.random();
          // console.log(num);
          var lastChar = word.substr(word.length - 1);
          var word_length = word.length - 1;

          if (word in dictionary) {
              word = dictionary[word];
          }
          else if (lastChar == '.' && num > 0.75) {
              if (num > 0.95) {
                  word = word.concat(' Swag swag!');
              }
              else if (num > 0.9) {
                  word = word.concat(' Plix.');
              }
              else {
                  word = word.concat(' Swag.');
              }
          }
          else if (num > 0.97) {
              word = larmallah.concat(word).concat('bar');
          }
          else if (num > 0.92) {
              word = word.concat('bles');
          }
          else if (num > 0.87) {
              word = word.concat('zorz');
          }
          else if (num > 0.82) {
              word = word.concat('sles');
          }
          else if (num > 0.77) {
              word = word.concat('sies');
          }

          if (word.charAt(word_length) == ',') {
              word = word.replace(',','');
              word = word.concat(',');
          }
          output_text.push(word);

      }
      output = output_text.join(' ');

      // if the output hasn't been changed at all, run algorithm again
      // until it's changed
    } while (output == input_text);

    return output;
}
