$(function () {
    // ボタンアニメーション
    $('.button-more').on('mouseover', function () {
      $(this).animate({
        opacity: 0.5,
        marginLeft: 20,
      }, 100);
    });

    $('.button-more').on('mouseout', function () {
        $(this).animate({
          opacity: 1.0,
          marginLeft: 0,
        }, 300);
  });

//カルーセル
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    });

  //AjacksでSTATIC FORMSにデータを送信
  $('#submit').on('click' , function (event) {
    //formタグによる送信を拒否
    event.preventDefault();

    //入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();
  });

  //フォーカスが外れた時に(blur)にフォームの入力チェックをする
  $('#name').blur(function () {
    inputCheck();
  });
  $('#furigana').blur(function () {
    inputCheck();
  });

  $('#email').blur(function () {
    inputCheck();
  });

  $('#tel').blur(function () {
    inputCheck();
  });

  $('#message').blur(function () {
    inputCheck();
  });

  $('#agree').click(function () {
    inputCheck();
  });




  //お問い合わせフォームの入力チェック
  function inputCheck() {
    //エラーのチェック結果
    let result;

    //エラーメッセージのテキスト
    let messsage = '';

    //エラーがなければfalse、エラーがあればtrue
    let error = false;

    //お名前のチェック
    if ($('#name').val() == '') {
      //エラーあり
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。/n';
    } else {
      //エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    //ふりがなのチェック
    if ($('#furigana').val() == '') {
      //エラーあり
      $('#furigana').css('background-color', '#f79999');
      error = true;
      messsage += 'ふりがなを入力してください。/n';
    } else {
      //エラーなし
      $('#furigana').css('background-color', '#fafafa');
    }

    //お問い合わせのチェック
    if ($('#message').val() == '') {
      //エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      messsage += 'ふりがなを入力してください。/n';
    } else {
      //エラーなし
      $('#message').css('background-color', '#fafafa');
    }

    // メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }
        
  }
});


