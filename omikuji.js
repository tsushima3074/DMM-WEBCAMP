document.addEventListener("DOMContentLoaded", () => {
    // テキストではletを使っているが、usernameとuserresultは読み込み時に代入するのでconstの方が望ましい
    // constでは資料のような定義ができないので処理を変更
    // jsはキャメルケースでの記述が推奨されているので変数名を少し改良
    const userName = prompt("お名前を教えてください。");
    // 入力された名前の表示　未入力の場合は`名無し`と表示
    document.getElementById("name").innerHTML = userName !== "" ? userName : "名無し"; 

    // 乱数の生成
    // const rand = Math.floor(Math.random() * 5);

    // テキストでは`==`を使っているが、jsでは型の比較までをしないので厳密に書くのであれば`===`を使った方がよい
    // 0~4を生成するのであれば、配列を作成しておき、添え字として使った方が簡単なので処理を変更
    const userResult = ["大吉", "中吉", "小吉", "吉", "凶"];
    // さらにこの方法を使えば`rand`という変数を使う必要がなくなるのでメモリを食わなくなる方法に変更できる
    // 結果の表示
    document.getElementById("result").innerHTML = userResult[Math.floor(Math.random() * 5)];
}, false);
