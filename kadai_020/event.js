// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

btn.addEventListener('click', () => {
      // 作成したh2要素に「ボタンがクリックされました」というテキストを追加する
      text.textContent = 'ボタンがクリックされました';
});
