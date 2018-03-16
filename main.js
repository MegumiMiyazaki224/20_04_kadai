$(document).ready(function(){

// 主な変数の設定------------------------------------
  var gametype = Math.floor( Math.random() * 2 + 1);　// 指示を決める（勝つor負ける）
  var com      = Math.floor( Math.random() * 3 + 1);　// コンピューターの手札を決める（1:グー/2:チョキ/3:パー）
  var player;　// プレイヤー手札用の変数を宣言
  var score = 0 ;　  // 得点用の変数を宣言し、最初の値[0]を代入

// -------------------------------------------------

  $(".scoreBox").html("score: "+score);　// 最初のスコアをscoreBoxへ表示

// タイマーがスタートするよ-----------
  $(function(){
  	$('.timer').startTimer();
  });
// -------------------------------



// よく使う関数を作成するよん-----------

// 勝ったときの処理関数
function seikai(){
  $(".resultBox").html('<img class="hyouzi" src="img/seikai.png" alt="正解" width="500px">');
  score += 100;
  $(".scoreBox").html("score: "+score);
  $(".resultBox").fadeOut(2000);
}

// 負けたときの処理関数
function machigai(){
  $(".resultBox").html('<img class="hyouzi" src="img/machigai.png" alt="まちがい" width="400px">');
  score -=50;
  $(".scoreBox").html("score: "+score);
  $(".resultBox").fadeOut(2000);
}


// １回目と同じ処理をrestartに突っ込めはできるのか？？
// 指示と手札は変わったけど、以下２点がおかしい。
// １）◯か✕の判定が２回目以降出てこない
// ２）スコアのカウントが１回目のままで固定になっている（２回目以降指示通りにやってもカウントがおかしい）
  function restart(){
    // $(".resultBox").fadeOut(2000);
    var gametype = Math.floor( Math.random() * 2 + 1);　// 指示を決める（勝つor負ける）
    var com      = Math.floor( Math.random() * 3 + 1);　// コンピューターの手札を決める（1:グー/2:チョキ/3:パー）

    // 勝つタイプか、負けるタイプかをif文で
    if(gametype==1){
      // $(".gametypeBox").html('<img src="img/win_pattern.png" alt="勝ってね">');
        $(".gametypeBox").html('<img src="img/pattern'+gametype+'.png" alt="勝ってね">');
    }else{
      // $(".gametypeBox").html('<img src="img/lose_pattern.png" alt="負けてね">');
      $(".gametypeBox").html('<img src="img/pattern'+gametype+'.png" alt="負けてね">');
    }

    // コンピューターの手札を表示
    if(com==1){
      // $(".comChoice").html('<img src="img/koupen-guu.png" alt="相手：グー" width="400px">');
      $(".comChoice").html('<img src="img/koupen'+com+'.png" alt="相手：グー" width="400px">');
    }else if(com==2){
      // $(".comChoice").html('<img src="img/koupen-choki.png" alt="相手：チョキ" width="400px">');
      $(".comChoice").html('<img src="img/koupen'+com+'.png" alt="相手：チョキ" width="400px">');
    }else if(com==3){
      // $(".comChoice").html('<img src="img/koupen-paa.png" alt="相手：パー" width="400px">');
      $(".comChoice").html('<img src="img/koupen'+com+'.png" alt="相手：パー" width="400px">');
    }


    // // プレイヤーがグーをクリックしたときは、変数playerに1を代入
    // $(".guu").on("click", function(){
    //   player = 1;
    //   if(gametype==1){
    //     // 【勝つ】タイプの後出しジャンケン
    //     if(com==1 && player==3){
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==2 && player==1) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==3 && player==2) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else{
    //       // $(".resultBox").html("<p>不正解！-50Pt…</p>");
    //       machigai();
    //       // restart();
    //     }
    //
    //   }else{
    //     // 【負ける】タイプの後出しジャンケン
    //     if(com==1 && player==2){
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==2 && player==3) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==3 && player==1) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else{
    //       // $(".resultBox").html("<p>不正解！-50Pt…</p>");
    //       machigai();
    //       // restart();
    //     }
    //   }
    //   // alert(player);
    // });
    //
    // // プレイヤーがチョキをクリックしたときは、変数playerに2を代入
    // $(".choki").on("click", function(){
    //   player = 2;
    //   if(gametype==1){
    //     // 【勝つ】タイプの後出しジャンケン
    //     if(com==1 && player==3){
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==2 && player==1) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==3 && player==2) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else{
    //       // $(".resultBox").html("<p>不正解！-50Pt…</p>");
    //       machigai();
    //       // restart();
    //     }
    //
    //   }else{
    //     // 【負ける】タイプの後出しジャンケン
    //     if(com==1 && player==2){
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==2 && player==3) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==3 && player==1) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else{
    //       // $(".resultBox").html("<p>不正解！-50Pt…</p>");
    //       machigai();
    //       // restart();
    //     }
    //   }
    //   // alert(player);
    // });
    //
    // // プレイヤーがパーをクリックしたときは、変数playerに3を代入
    // $(".paa").on("click", function(){
    //   player = 3;
    //   if(gametype==1){
    //     // 【勝つ】タイプの後出しジャンケン
    //     if(com==1 && player==3){
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==2 && player==1) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==3 && player==2) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else{
    //       // $(".resultBox").html("<p>不正解！-50Pt…</p>");
    //       machigai();
    //       // restart();
    //     }
    //
    //   }else{
    //     // 【負ける】タイプの後出しジャンケン
    //     if(com==1 && player==2){
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==2 && player==3) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else if(com==3 && player==1) {
    //       // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
    //       seikai();
    //       // restart();
    //     }else{
    //       // $(".resultBox").html("<p>不正解！-50Pt…</p>");
    //       machigai();
    //       // restart();
    //     }
    //   }
    // });
  }

// -------------------------------


  // １回目の処理
  // 勝つタイプか、負けるタイプかをif文で
  if(gametype==1){
    // $(".gametypeBox").html('<img src="img/win_pattern.png" alt="勝ってね">');
      $(".gametypeBox").html('<img src="img/pattern'+gametype+'.png" alt="勝ってね">');
  }else{
    // $(".gametypeBox").html('<img src="img/lose_pattern.png" alt="負けてね">');
    $(".gametypeBox").html('<img src="img/pattern'+gametype+'.png" alt="負けてね">');
  }

  // コンピューターの手札を表示
  if(com==1){
    // $(".comChoice").html('<img src="img/koupen-guu.png" alt="相手：グー" width="400px">');
    $(".comChoice").html('<img src="img/koupen'+com+'.png" alt="相手：グー" width="400px">');
  }else if(com==2){
    // $(".comChoice").html('<img src="img/koupen-choki.png" alt="相手：チョキ" width="400px">');
    $(".comChoice").html('<img src="img/koupen'+com+'.png" alt="相手：チョキ" width="400px">');
  }else if(com==3){
    // $(".comChoice").html('<img src="img/koupen-paa.png" alt="相手：パー" width="400px">');
    $(".comChoice").html('<img src="img/koupen'+com+'.png" alt="相手：パー" width="400px">');
  }


  // プレイヤーがグーをクリックしたときは、変数playerに1を代入
  $(".guu").on("click", function(){
    player = 1;
    if(gametype==1){
      // 【勝つ】タイプの後出しジャンケン
      if(com==1 && player==3){
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==2 && player==1) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==3 && player==2) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else{
        // $(".resultBox").html("<p>不正解！-50Pt…</p>");
        machigai();
        // restart();
      }

    }else{
      // 【負ける】タイプの後出しジャンケン
      if(com==1 && player==2){
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==2 && player==3) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==3 && player==1) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else{
        // $(".resultBox").html("<p>不正解！-50Pt…</p>");
        machigai();
        // restart();
      }
    }
    restart();
  });

  // プレイヤーがチョキをクリックしたときは、変数playerに2を代入
  $(".choki").on("click", function(){
    player = 2;
    if(gametype==1){
      // 【勝つ】タイプの後出しジャンケン
      if(com==1 && player==3){
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==2 && player==1) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==3 && player==2) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else{
        // $(".resultBox").html("<p>不正解！-50Pt…</p>");
        machigai();
        // restart();
      }

    }else{
      // 【負ける】タイプの後出しジャンケン
      if(com==1 && player==2){
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==2 && player==3) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==3 && player==1) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else{
        // $(".resultBox").html("<p>不正解！-50Pt…</p>");
        machigai();
        // restart();
      }
    }
    restart();
    // alert(player);
  });

  // プレイヤーがパーをクリックしたときは、変数playerに3を代入
  $(".paa").on("click", function(){
    player = 3;
    if(gametype==1){
      // 【勝つ】タイプの後出しジャンケン
      if(com==1 && player==3){
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==2 && player==1) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==3 && player==2) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else{
        // $(".resultBox").html("<p>不正解！-50Pt…</p>");
        machigai();
        // restart();
      }

    }else{
      // 【負ける】タイプの後出しジャンケン
      if(com==1 && player==2){
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==2 && player==3) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else if(com==3 && player==1) {
        // $(".resultBox").html("<p>正解！100Ptゲット！</p>");
        seikai();
        // restart();
      }else{
        // $(".resultBox").html("<p>不正解！-50Pt…</p>");
        machigai();
        // restart();
      }
    }
    restart();
  });
  // restart();






// 60秒後に終了と表示
setTimeout(function(){
  // $(".resultBox").html('<p>FINISH!!</p>');
  // $(".resultBox").css("backgroundColor","#fa807254");
  // $(".resultBox").css("fontSize","50px");
  $(".resultBox").html('<img class="hyouzi" src="./img/finish.png" width="800px">');
}, 60000);

// 63秒後に結果ページへ表示
setTimeout(function(){
  window.location.href = 'result.html';
}, 63000);


// ここから結果ページへ。スコア表示をしてデータ登録
$(".kekkaBox").fadeIn(3000);
$(".kekkaBox").html("<p>"+score+"</p>");





});
