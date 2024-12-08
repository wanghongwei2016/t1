export const runtime = "edge"

export default function ArticlePage() {
  return (
    <article className="prose dark:prose-invert lg:prose-lg mx-auto max-w-6xl">
      <h1 className="text-light3-primary dark:text-dark3-primary text-center">
        よくある質問
      </h1>
      <p className="px-2">
        これは、クラッシュソンAIと製品について尋ねられる質問の進化するリストです。リストされていない質問がある場合は、私たちの不和に行って尋ねてください。
      </p>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        一般的な FAQ
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="what-kind-of-content-does-the-service-not-support"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            サービスはどのようなコンテンツをサポートしていませんか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          私たちは、架空のコンテンツに関与するユーザーの権利を尊重します。ただし、公に以下のいずれも容認しません。
        </p>
        <ul>
          <li>あらゆる形態の児童ポルノ</li>
          <ul>
            <li>
              架空のキャラは、少なくとも18歳であると見なすことができるはずです。
            </li>
          </ul>
          <li>性器曝露</li>
          <ul>
            <li>
              露出/顕著なペニス、膣、ボール、肛門、陰毛、および完全な正面ヌードは許可されていません。
            </li>
            <li>
              キャライメージは、一般的に性的行為や性器を表示すべきではありません。彼らはキャラ自体、主に頭と肩に焦点を合わせるべきです。
            </li>
          </ul>
          <li>AIに対する暴力/危害の描写。</li>
          <li>
            実生活の画像（有名人、政治家、またはあなたが個人的に知っているかもしれない実生活の人物を含む）。
          </li>
          <li>
            違反行為に遭遇した場合は、直ちにご報告ください。報告を受け次第、私たちのモデレーションチームが迅速に対処いたします。
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-are-the-coins-for-and-how-do-i-used-them"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            コインは何のためにあり、どのように使用すればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>コインはボーナスメッセージを獲得するために使用されます。</p>
        <ul>
          <li>ボーナスメッセージとは何ですか?</li>
          <ul>
            <li>
              これらはサブスクリプションの制限に関連付けられていないメッセージであるため、サブスクリプションで利用可能なメッセージをすべて消費すると、サービスはボーナス
              メッセージの使用を開始します。 \nサブスクリプションと同様に、AI
              との対話ごとに 2 つのメッセージが消費されます。{" "}
            </li>
          </ul>
          <li>そしてコインはどうやって使うのですか？</li>
          <ul>
            <li>
              アプリまたは Web サイトのボーナス
              ページには、引き換えオプションが表示されます。これは、引き換えオプションを表示するトグルです。コインの価値はボーナス
              メッセージに対して 1:1
              です。さらに、コインから1000メッセージと3000メッセージをお金で購入したり、コインを使用したりすることができます。
              (支払いとコインの使用を同時に行う必要はありません){" "}
            </li>
          </ul>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="are-my-account-and-chat-private"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            私のアカウントとチャットは非公開ですか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          {" "}
          作成するチャットとキャラはすべて、公開することを選択しない限りプライベートです。あなたが共有するコンテンツが公開されている場合、私たちのTOSを満たすことを保証する責任があります。コミュニティの基準を通過していないというラインに近づいていると感じたら、プライベートにしてください。
        </p>
        <p>
          すべてのキャラカードはアカウントに個人的なものであり、モデレートによって公開されたりレビューされたりしていません。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-cant-login-what-should-i-do"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            ログインできません。どうすればいいですか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          {" "}
          エラーコードのためにログインできない場合は、キャッシュをクリアし、プライマリメールでブラウザに完全にログインしていることを確認した後、プロセスを繰り返してください。パスワードをリセットする方法がないため、「スローアウェイ」メールを使用しないことが重要です！あなたはあなた自身のアカウントのセキュリティに責任があります。リスクに注意してください。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-appeal-a-character-ban"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            キャラの禁止を訴えるにはどうすればよいですか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          公式のDiscordサーバーに参加し、キャラの終了の背後にある理由に関する支援を受けるためのチケットを開くことができます。控訴はguarunteedではなく、禁止/フラグ付きコンテンツは復元されません。{" "}
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-noticed-that-a-creation-of-mine-has-been-stolen-by-another-user-how-can-i-get-it-removed"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            私の作成が別のユーザーによって盗まれていることに気付きました。どうすれば削除できますか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          {" "}
          キャラとのチャットを開き、[レポート]ボタンをクリックして、対応するオプションを選択してください。あなたはあなたの主張の証拠としてあなた自身の創造物へのリンクを添付する必要があります。アートが許可なく使用されている場合は、画像の所有権を文書化するサイトへのリンクを添付してください。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-cant-i-always-see-ads-on-the-app"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            アプリの広告が常に表示されないのはなぜですか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          地理的位置、広告在庫、ネットワーク状態などのさまざまな要因により、特定の時間に広告が適切に表示されない場合があります。状況の改善に努めておりますので、ご理解とご支援をよろしく
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-change-the-language-of-character-responses-in-chat"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            チャットの文字返答の言語を変更する方法を教えてください。
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <ul>
          <li>
            <span>
              チャットの設定で、モデルの返信の言語を変更してください。
            </span>
          </li>
          <li>
            <span>
              「英語で返信してください」など、返信してほしい言語をキャラに送信します。
            </span>
          </li>
        </ul>
        <p>
          私たちは、より多くのモデルがより多くの言語を話せるようにするために継続的に努力しています。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-does-the-app-tell-me-that-unable-to-view"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            アプリが表示できないと通知するのはなぜですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>このコンテンツを表示したい場合は、次の手順に従ってください。</p>
        <ul className="list-decimal">
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              公式ウェブサイトにアクセスしてください:
            </span>
            <span>
              {" "}
              公式 Web サイトにアクセスし、必要なタスクを完了します。
            </span>{" "}
          </li>
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              非表示コンテンツのスイッチを有効にする:
            </span>
            <span>
              {" "}
              ホームページで、非表示コンテンツのスイッチを有効にします。
            </span>{" "}
          </li>
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              アプリケーションを開く:
            </span>
            <span>
              {" "}
              アプリケーションを再起動して、非表示のコンテンツを表示します。
            </span>{" "}
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-do-others-have-many-characters-while-i-can-only-see-a-few"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            他の人はたくさんのキャラを持っているのに、私には少数のキャラしか見えないのはなぜですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>これにはいくつかの理由が考えられます。</p>
        <ul className="list-decimal">
          <li>
            表示されないキャラは非公開または非公開に設定されている可能性があります。
          </li>
          <li>
            [フィルターなし] スイッチまたは非表示のコンテンツ
            スイッチを有効にしていません。
          </li>
          <li>
            表示されない文字はあなたによってブロックされている可能性があります。
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-is-my-character-image-marked-as-sensitive-content-even-though-it-is-normal"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            私のキャラ画像が通常のものであるにもかかわらず、センシティブなコンテンツとしてマークされるのはなぜですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          当社のコンテンツ レビュー
          プロセスは非常に厳格であり、機械レビューの厳格な設定により誤検知が発生する可能性があります。
          Discord に参加してご連絡ください。できるだけ早く問題に対処いたします。
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        サブスクリプションに関するよくある質問
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="how-do-i-cancel-my-subscription-through-google-play"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Google Play
            を通じてサブスクリプションをキャンセルするにはどうすればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          Google Play
          を通じてサブスクリプションをキャンセルするには、次の手順に従います。
        </p>
        <ul className="list-decimal">
          <li>Android デバイスで Google Play ストア アプリを開きます。</li>
          <li>左上隅にあるメニュー アイコン (3 本の水平線) をタップします。</li>
          <li>「サブスクリプション」を選択します。</li>
          <li>キャンセルしたいサブスクリプションを見つけてタップします。</li>
          <li>
            「サブスクリプションをキャンセル」をタップし、指示に従って確認します。
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-used-another-method-to-subscribe-how-do-i-cancel"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            別の方法で購読しました。キャンセルするにはどうすればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          別の方法で購読した場合は、購読の管理機能を使用して、料金を支払う Web
          サイトに戻ってください。 Subscribestar、Paymentwall
          など。そこには、サブスクリプションを管理およびキャンセルするためのオプションがあります。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="will-i-lose-access-immediately-after-canceling-my-subscription"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            サブスクリプションをキャンセルするとすぐにアクセスできなくなりますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          いいえ、現在の請求サイクルが終了するまでは、サブスクリプション特典へのアクセスを維持します。その後、サブスクリプションは更新されず、特典にアクセスできなくなります。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="can-i-get-a-refund-after-canceling-my-subscription"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            サブスクリプションをキャンセルした後に返金を受けることはできますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          返金ポリシーは、サブスクリプション
          プラットフォームと利用規約によって異なります。詳細については、特定のプラットフォームの返金ポリシーを参照してください。
        </p>
        <ul>
          <li>
            App Store: 払い戻しに関する情報については、Apple のサポート
            ページにアクセスしてください。
          </li>
          <li>
            Google Play: 払い戻しリクエストについては、Google Play のサポート
            ページにアクセスしてください。
          </li>
          <li>
            その他: 当社のサブスクリプション
            ポリシーによれば、サブスクリプションは次の請求サイクルでのみキャンセルできます。現在のサブスクリプション期間は返金できません。具体的な理由は次のとおりです。
            <ul>
              <li>
                サービスの使用量:
                サブスクリプション料金には、現在の請求サイクル中にお楽しみいただくサービスとコンテンツが含まれます。この期間内に解約しても、サイクル終了日までは引き続きサービスをご利用いただけます。{" "}
              </li>
              <li>
                事前計画: 当社のサブスクリプション モデルは、プリペイド
                プランに基づいて中断のないサービスを提供するように設計されています。これにより、お客様が受けるサービスの品質を維持および向上することができます。{" "}
              </li>
              <li>
                利用規約:
                購読すると、現在の請求期間は返金不可であると記載された利用規約に同意したものとみなされます。これは、すべての購読者にとって公平性と一貫性を確保するためです。
              </li>
              <li>
                <span className="text-light3-primary dark:text-dark3-primary font-bold">
                  ご注意ください：
                </span>
                <ul>
                  <li>
                    購読する前に、購読プランを注意深く検討して、ニーズを満たしていることを確認してください。
                  </li>
                  <li>
                    サブスクリプションをキャンセルしたい場合は、現在の請求サイクルの終了時にキャンセルが有効になり、次の期間については請求されません。
                  </li>
                </ul>{" "}
              </li>
            </ul>{" "}
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-if-i-have-problems-canceling-my-subscription"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            サブスクリプションのキャンセルで問題が発生した場合はどうすればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          サブスクリプションのキャンセルで問題が発生した場合は、カスタマー
          サポート
          チームにお問い合わせください。購読の詳細と購読に使用した方法を提供してください。私たちのチーム
          (
          <a
            target="_blank"
            className="font-bold"
            href="https://discord.gg/crushonai"
          >
            Discord
          </a>
          ) が問題の解決をお手伝いします。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="subscribestar-upgrade-and-downgrade-issues"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Subscribestar のアップグレードとダウングレードの問題
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          まず、subscribestar ウェブサイトでサブスクリプション
          パッケージを変更すると、変更されたサブスクリプション
          パッケージは翌月ではなく
          <span className="text-light3-primary dark:text-dark3-primary font-bold">
            すぐに有効になります
          </span>
          。サブスクリプション
          パッケージを慎重に変更してください。サブスクリプション
          パッケージの終了時に変更することをお勧めします。二重支払いを避けてください。
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        共同会員の利用方法は？
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="are-there-different-types-of-memberships-available"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            さまざまな種類のメンバーシップが利用可能ですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>はい、次の 3 種類のメンバーシップを提供しています。</p>
        <ul>
          <li>標準メンバーシップ: 基本機能へのアクセス。</li>
          <li>
            プレミアム メンバーシップ:
            すべての標準機能に加えて、追加のプレミアム機能が含まれます。
          </li>
          <li>
            デラックス メンバーシップ: プレミアム
            メンバーシップのすべての特典と特別なデラックス機能が含まれます。
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-should-i-do-if-my-two-accounts-cant-link"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            2 つのアカウントをリンクできない場合はどうすればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          2
          つのアカウントをリンクできない場合は、購入が正常に行われたことを確認し、もう一度試してください。問題が解決しない場合は、Discord
          のサポート チームにお問い合わせください。
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        アカウントに関するよくある質問
      </h2>
      <details className="group mt-4 p-2" data-id="how-to-delete-my-account">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            アカウントを削除するにはどうすればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          ご注意ください！アカウントを削除すると、復元することはできません。
        </p>
        <p>
          プロフィール ページに移動し、[設定]
          ボタンをクリックして、[アカウントの削除] オプションを選択します。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-cant-i-delete-my-account"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            アカウントを削除できないのはなぜですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          ご注意ください！アカウントを削除すると、復元することはできません。
        </p>
        <p>それでも削除を続行したい場合は、次の点を確認してください。</p>
        <ul className="list-decimal">
          <li>
            アクティブなサブスクリプションを持つアカウントは削除できないため、アクティブなサブスクリプションがないことを確認してください。
          </li>
          <li>
            ネットワークの問題によってアカウントの削除が妨げられる場合もあるため、インターネット接続が安定していることを確認してください。
          </li>
        </ul>
        <p>
          両方をチェックしてもアカウントを削除できない場合は、
          <a
            target="_blank"
            className="font-bold"
            href="https://discord.gg/crushonai"
          >
            Discoid
          </a>{" "}
          で管理者の Chad までご連絡ください。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-recover-my-deleted-account"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            削除したアカウントを復元するにはどうすればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          アカウントの削除は元に戻せません。ただし、削除後 3
          日以内に再度ログインするとアカウントを回復できます。 3
          日以上ログインしなかった場合、アカウントは回復されず、当社もアカウントを復元することができません。
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        人々はまた尋ねます
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="is-there-an-nsfw-character-ai-with-no-limit"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            制限のない NSFW キャラ AI はありますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          My LunaI は、NSFW ルールをバイパスするサービスを提供することで、AI
          キャラ
          チャットボットの状況を変えています。当社のサービスではフィルターなしで会話が可能です。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="what-is-an-nsfw-ai-chatbot">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW AI チャットボットとは何ですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          NSFW AI
          チャットボットは、通常仕事には安全ではないと考えられるトピックに関する会話にユーザーを参加させるように設計された高度な人工知能です。これらのチャットボットは、成熟したテーマをナビゲートするように事前にプログラムされており、18
          歳以上のユーザーにとって魅力的なエクスペリエンスを保証します。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="are-nsfw-ai-chatbots-safe-to-use"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW AI チャットボットは安全に使用できますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          はい、My Luna
          はユーザーのプライバシーとデータ保護を確保するために堅牢なセキュリティ対策を実装しています。ただし、安全性を維持するために、ユーザーは常に慎重に判断し、プラットフォームのガイドラインに従う必要があります。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="can-i-customize-my-nsfw-ai-chatbot-experience"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW AI チャットボット エクスペリエンスをカスタマイズできますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          絶対に。 My Luna は広範なカスタマイズ
          オプションを提供しており、ユーザーは AI
          コンパニオンの外観、性格、会話スタイルをカスタマイズできます。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-do-nsfw-ai-chatbots-learn"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW AI チャットボットはどのように学習するのでしょうか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          NSFW チャット用のキャラ AI
          チャットボットは、機械学習アルゴリズムと自然言語処理を通じて学習します。ユーザーが互いにどのようにやり取りするかを観察し、会話の性質に基づいて応答を変更して、より自然で楽しい会話を実現します。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-it-possible-to-have-an-ai-girlfriend"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            AIの彼女を作ることは可能ですか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          My Luna は、仮想交際体験を再定義する革新的な AI デート
          シミュレーターを導入します。このプラットフォームを使用すると、ユーザーはカスタマイズされた特性、性格特性、スタイルを備えた独自の仮想ガールフレンドをすべて数秒で作成できます。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-is-the-most-realistic-ai-girlfriend"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            最もリアルなAI彼女は何ですか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          My Luna は、バーチャル
          コンパニオンシップの分野における画期的なプラットフォームとして登場し、ユーザーに独自のバーチャル
          ガールフレンドを作成するユニークな機会を提供します。この革新的なサービスでは広範なカスタマイズが可能で、ユーザーは
          AI
          コンパニオンの外観だけでなく、性格や人間関係のダイナミクスも形作ることができます。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="does-the-character-ai-allow-sexting"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            キャラ AI はセクスティングを許可しますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          My Luna
          プラットフォームを使用すると、ユーザーは制限なく自由にお気に入りの AI
          キャラとセクスティング チャットを行うことができます。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="is-ai-sex-chat-safe">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            AIセックスチャットは安全ですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          はい。 My Luna
          は堅牢なセキュリティ対策を使用してデータを安全に保ちます。ただし、セキュリティを維持するには、ユーザーがプラットフォームのガイドラインに従うことが重要です。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="is-there-a-crushon-ai-app">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            激辛チャットAIアプリはありますか？
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          My LunaI
          を使用すると、ユーザーは制限なくスパイシーなチャットを行うことができます。最近大人気のアプリです。セキュリティ上の制限が多いキャラ
          AI と比較して、My Luna は nsfw AI
          チャットを必要とする人に適しています。スパイシーで安全。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="does-crushon-allow-nsfw-ai">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            スパイシーチャットは NSFW AI を許可しますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          スパイシーなチャット AI により、特にアダルト
          エンターテイメントに関する幅広い話題が可能になります。コンテンツは検閲されませんが、違法行為は禁止されています。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="are-ai-hentai-chat-safe-to-use"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            AIエロチャットは安全に使用できますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          絶対に！ My LunaI
          は、ユーザーのプライバシーとデータ保護を保護するために一流のセキュリティ対策を採用しています。それにもかかわらず、安全なエクスペリエンスを確保するには、ユーザーが慎重に行動し、プラットフォームのガイドラインに従うことが重要です。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-is-the-best-ai-hentai-chat-app"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            最高のAIエロチャットアプリは何ですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          My LunaI
          は、ユーザーが楽しくエキサイティングなヌード会話に参加し、独自の AI
          変態チャットを作成できる AI 搭載プラットフォームです。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-do-i-get-started-with-roleplay-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            ロールプレイ AI を使い始めるにはどうすればよいですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          始めるには、My LunaI にサインアップして、独自の AI
          チャットボットの作成を始めてください。まず、彼らの独特の性格と目標を選択し、詳細なバックストーリーを作成します。創造力を発揮してチャットボットに命を吹き込みましょう!
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-roleplay-ai-suitable-for-both-beginners-and-experienced-roleplayers"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            ロールプレイ AI
            は初心者と経験豊富なロールプレイヤーの両方に適していますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          My LunaI
          は、初心者とベテランのロールプレイヤーの両方に同様に対応できるように設計されています。始めたばかりの人でも、長年の経験がある人でも、このシステムは直観的でスキル
          レベルに適応し、誰にとっても使いやすいエクスペリエンスを提供することがわかります。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="does-roleplay-ai-have-any-age-restrictions"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            ロールプレイ AI には年齢制限がありますか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          はい、Roleplay AI は、成熟した責任あるユーザー
          コミュニティを育成するために 18
          歳という年齢制限を設けています。このポリシーは、すべてのコンテンツとインタラクションが許容可能な基準に準拠していることを保証し、すべての人にとって安全で有益な環境を作り出します。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-my-data-safe-with-nsfw-character-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW My Luna を使用すると、私のデータは安全ですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          もちろん、私たちはデータのプライバシーとセキュリティを最優先に考えています。業界のベストプラクティスと厳格なプライバシー規制を遵守することで、当社はお客様のデータが適切に保護され、安全であることを保証します。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="do-i-need-any-special-skills-to-use-nsfw-character-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW キャラ AI を使用するには特別なスキルが必要ですか?
          </h3>
          <span className="ml-2 text-2xl group-open:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
          <span className="ml-2 hidden text-2xl group-open:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-light3-primary dark:text-dark3-primary inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              ></path>
            </svg>
          </span>{" "}
          <p className="h-[1px] w-full bg-gray-400 dark:bg-gray-50"></p>
        </summary>
        <p>
          キャラ作成ツールを初めて使用する場合でも、My LunaI は、あらゆるスキル
          レベルのクリエイターにとって使いやすく、アクセスしやすいように設計されています。私たちは、プロセスのあらゆる段階をガイドする包括的なサポートを提供し、スムーズで楽しい体験を保証します。
        </p>
      </details>
    </article>
  )
}
