var alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ., ";
//параметры таблицы
var rows = 6;
var cols = 6;
//выводит таблицу
function createTable() {
var k = 0;
  for (var i = 0; i < rows; i++) {
    tr = document.createElement('tr');
      etable.appendChild(tr);
    for (var j  = 0; j < cols; j++) {
       td = document.createElement('td');
       td.innerHTML = alphabet[j+k];
       tr.appendChild(td);
      }
      k = k + cols;
  }
}
