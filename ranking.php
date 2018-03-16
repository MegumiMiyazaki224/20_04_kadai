<?php
//1.  DB接続します
try {
  $pdo = new PDO('mysql:dbname=miyazaki_20_db_2;charset=utf8;host=localhost','root','');
} catch (PDOException $e) {
  exit('データベースに接続できませんでした。'.$e->getMessage());
}

//２．データ登録SQL作成
//作ったテーブル名を書く場所
$stmt = $pdo->prepare("SELECT * FROM miyazaki_20_table_2 ORDER BY score DESC LIMIT 10;");
$status = $stmt->execute();

//３．データ表示
// $view=""; //受け取るための変数を事前に作ります。
$view = "";
if($status==false){
  //execute（SQL実行時にエラーがある場合）
  $error = $stmt->errorInfo();
  exit("ErrorQuery:".$error[2]);

}else{
  //Selectデータの数だけ自動でループしてくれる
  while( $result = $stmt->fetch(PDO::FETCH_ASSOC)){

    // $view .= "<p>";
    // $view .= $result["score"].":".$result["name"].":".$result["memo"];
    // $view .= "<p>";

    // 色々関数挟んでやる方法もあるのですが、混乱するかと思いましたので元のベースを元にやってみましたー！
    // $view .= '<div class="wrap">';
    // $view .= '<div class="textbox">';
    // $view .= '<div class="shopname">'.$result["shopname"].'</div>';
    // $view .= '<div class="hyouka">'.$result["hyouka"].'</div>';
    // $view .= '<div>@'.$result["station"].'</div>';
    // $view .= '<div>'.$result["memo"].'<br><br></div>';
    // $view .= '<div>'.$result["indate"].'</div>';
    // $view .= '<div><a href="u_view_gone.php?id='.$result["id"].'">[更新]</a>　<a href="delete_gone.php?id='.$result["id"].'">[削除]</a></div>';
    // $view .= '</div>';
    // $view .= '</div>';

  $view .="<tr>";
  $view .="<td>".$result["score"]."</td>";
  $view .="<td>".$result["name"]."</td>";
  $view .="<td>".$result["memo"]."</td>";
  $view .="</tr>";
  }
}
?>


<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>【脳トレ】後出しジャンケン</title>
  <link rel="stylesheet" href="style.css">
  <!-- <style>
  .wrap {
    background: #fff;
    margin: 10px auto 0;
    padding: 65px 20px 77px 350px;
    box-sizing: border-box;
    border-radius: 20px;
    border: 2px solid #ccc;
    box-shadow: 1px 2px 3px 1px #ccc;
    position: relative;
}
  /*このafter要素というのを使う際にはcontent:"";は絶対にいります*/
  /*そしてpositionレイアウトで位置を決めてそこに「背景画像」を表示させている形です*/
  .wrap:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 270px;
    height: 270px;
    background: url(./img/curry.jpg);
    -webkit-background-size: cover;
    background-size: cover;
    border-radius: 19px 0 0 19px;
}

  .hyouka {
      color: yellow;
      text-shadow: 1px 2px 1px#000;
  }

  .shopname {
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    background: linear-gradient(transparent 40%, #ffff66 40%);
    font-family: cursive;
    letter-spacing: 3px;
  }
  </style> -->
</head>
<body>
  <div class="waku">


<!-- Main[Start] -->
<!-- ここからinsert.phpにデータを送ります -->
<div class="non-hide">
  <div class="title">
    <h2> TOP 10!</h2>
  </div>

    <!-- ここで先程の$viewを埋め込むことでHTML上に呼び出すことができます -->
        <div class="outer">
          <table class="rankingTable">
            <tr>
              <td>得点</td>
              <td>名前</td>
              <td>ひとこと</td>
            </tr>
            <?=$view?>
          </table>
        </div>

</div>
<!-- Main[End] -->

<a href="top.html"><button class="startBtn">TOPへ戻る</button></a>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="style.js" charset="utf-8"></script>

</body>
</html>
