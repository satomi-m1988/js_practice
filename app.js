
var hello = "Hello, World";
alert(hello);

// 整数を代入する varは変数定義する時に使用 intはintegerの略 varはvariable(変数)の略
var int1 = 1;
// 負数を代入する
var int2 = -10;
// 小数点を代入する
var float1 = 3.14;
// 文字列を代入 strはstringの略
var str1 = 'JavaScriptを覚えよう'

// 四則演算
// 足し算
alert(4 + 3);
// 引き算
alert(8 - 5);
// 掛け算
alert(2 * 6);
// 割り算
alert(10 / 2);

// 文字列の結合
alert('Hello' + 'World');
// 変数を利用して結合する
var str2 = 'Hello';
var str3 = 'World!!';
alert(str2 + str3);

// 条件分岐
var orange = 100;
var apple = 120;

if (orange < apple){
	alert('みかんの値段がりんごより安い');
}
else if(orange == apple){
	alert('みかんとりんごが同じ値段');
}
else{
	alert('みかんの値段がりんごより高い');
}

// 繰り返し処理
var max = 100;
var num = 1;
var count = 0;
// while文は条件がtrueの場合繰り返される. do..while文だとtrue/falseに関わらず最初の１回は処理が行われる
while(num < max){
	num = num * 2;
	count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 変数iを定義
var i;
// 変数numを定義して、初期値を0に設定
var num = 0;
// for文は決まった回数繰り返す
// for ( 初期値; 条件式; 増減値 ){
	// 繰り返し処理
// }
// i++は　i+1と同じ意味
for(i = 1; i < 11; i++){
	num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');

// 関数
// alertStringは変数です
var alertString;
// alertStringに引数を代入する
alertString = addString("WebCamp");
// alertStringを呼び出す
alert(alertString);
// 下記４行で関数を作成している
function addString(strA){
	var addStr = "Hello" + strA;
	return addStr;
}
// 入力できる関数
// prompt:促す
// promptStrにprompt関数を代入する
var promptStr = prompt('何か好きな文字を入力してください。');
// promptStr変数を呼び出す
alert(promptStr);
