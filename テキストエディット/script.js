document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirmButton');
    const messageDisplay = document.getElementById('message');

    confirmButton.addEventListener('click', () => {
        // ここでは「はい」が押されたら次のページへ遷移するシンプルなロジック
        // より厳密な年齢確認（生年月日入力など）が必要な場合は、ここを改変します。

        // 次に遷移するページのURLを指定
        const nextPageUrl = 'main.html'; // 例: メインコンテンツのページ

        // ページを遷移
        window.location.href = nextPageUrl;
    });

    // 「いいえ」の選択肢を設ける場合や、
    // 未成年がアクセスした場合の処理も追加できます。
    // 例: 「いいえ」ボタンを追加し、クリックしたらエラーメッセージ表示や別ページへリダイレクト
});