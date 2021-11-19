document.addEventListener("DOMContentLoaded", () => {
    // テキストではletを使っているが、usernameとuserresultは読み込み時に代入するのでconstの方が望ましい
    // constでは資料のような定義ができないので処理を変更
    // jsはキャメルケースでの記述が推奨されているので変数名を少し改良
    const userName = prompt("お名前を教えてください。");
}, false);
