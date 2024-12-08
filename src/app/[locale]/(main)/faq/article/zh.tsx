export const runtime = "edge"

export default function ArticlePage() {
  return (
    <article className="prose dark:prose-invert lg:prose-lg mx-auto max-w-6xl">
      <h1 className="text-light3-primary dark:text-dark3-primary text-center">
        常問問題
      </h1>
      <p className="px-2">
        這是一個不斷更新的關於 My Luna 和我們的產品的問題清單。
      </p>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        一般常見問題解答
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="what-kind-of-content-does-the-service-not-support"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            該服務不支援哪些內容？
          </h3>{" "}
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
          我們尊重使用者參與虛構內容的權利。但是，在公開場合，我們不容許以下任何行為。
        </p>
        <ul>
          <li>任何形式的兒童色情製品</li>
          <ul>
            <li>虛構角色應該一眼就能看出年齡至少 18 歲。</li>
          </ul>
          <li>生殖器暴露</li>
          <ul>
            <li>不允許暴露/突出的陰莖、陰道、睪丸、肛門、陰毛和正面全裸。</li>
            <li>
              角色圖像一般不應顯示性行為或生殖器。他們應該關注角色本身，主要是他們的頭部和肩膀。
            </li>
          </ul>
          <li>對AI的暴力/傷害的描述。</li>
          <li>
            現實生活中的圖像（包括現實生活中的人物，如名人、政治家或您可能認識的人。）
          </li>
          <li>
            如果您發現任何違規行為，請立即向我們舉報。我們的審核團隊將在收到舉報後立即解決這些問題。
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
            這些硬幣有什麼用以及如何使用它們？
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
        <p>這些硬幣用於獲取獎勵訊息。</p>
        <ul>
          <li>什麼是獎勵訊息？</li>
          <ul>
            <li>
              它們是與您的訂閱限制無關的訊息，因此當您消耗完可用於訂閱的所有訊息時，服務將開始使用獎勵訊息。
              \n與您的訂閱類似，每次與 AI 的互動都會消耗 2 個訊息。
            </li>
          </ul>
          <li>以及如何使用這些硬幣？</li>
          <ul>
            <li>
              在應用程式或網站的獎勵頁面中，您可以找到兌換選項，這是一個向您顯示兌換選項的切換開關。硬幣與獎勵訊息的價值為
              1:1。此外，您可以使用硬幣購買 1000 條和 3000
              條訊息，也可以使用硬幣。
              （您不需要同時支付和使用硬幣，兩者擇其一）{" "}
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
            我的帳號和聊天是私密的嗎？
          </h3>{" "}
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
          您創建的所有聊天和角色都是私人的，除非您選擇發布它們。如果您分享的內容被公開，您有責任確保其符合我們的服務條款。如果您覺得某些事情接近不符合我們的社區標準，請保密。
        </p>
        <p>所有角色卡均屬於您的帳戶個人所有，不會公開分享或經過審核。</p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-cant-login-what-should-i-do"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            我無法登入。我該怎麼辦？
          </h3>{" "}
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
          如果您因錯誤代碼而無法登錄，請清除快取並確保您使用主電子郵件完全登入瀏覽器後重複此程序。切勿使用「一次性」電子郵件，這一點很重要，因為我們無法重設您的密碼！您對自己帳戶的安全負責。請注意風險。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-appeal-a-character-ban"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            我該如何對角色禁令提出申訴？
          </h3>{" "}
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
          您可以加入我們的官方 Discord
          伺服器並開啟一張票，以獲得有關角色終止原因的協助。不保證上訴，並且禁止/標記的內容將不會被恢復。{" "}
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-noticed-that-a-creation-of-mine-has-been-stolen-by-another-user-how-can-i-get-it-removed"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            我注意到我的創作已被其他用戶竊取。我怎樣才能將其刪除？
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
          請開啟與該角色的聊天，然後按一下檢舉按鈕並選擇相應的選項。您必須附上您自己創作的連結作為您的主張的證據。如果您的藝術作品在未經您許可的情況下被使用，請附上記錄您對圖像所有權的網站連結。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-cant-i-always-see-ads-on-the-app"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            為什麼我在應用程式上總是看不到廣告？
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
          各種因素（包括地理位置、廣告庫存和網路狀況）可能會導致廣告在某些時間無法正常顯示。我們正在努力改善這種情況，感謝您的耐心和支持。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-change-the-language-of-character-responses-in-chat"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            如何更改聊天中角色回應的語言？
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
            <span>在聊天設定中更改模特兒回覆的語言。</span>
          </li>
          <li>
            <span>向角色發送您希望其回复的語言，例如“請用英語回复我”。</span>
          </li>
        </ul>
        <p>我們不斷努力讓更多的模型能講更多的語言。</p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-does-the-app-tell-me-that-unable-to-view"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            為什麼應用程式告訴我無法查看？
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
        <p>如果您想查看此內容，請按以下步驟操作：</p>
        <ul className="list-decimal">
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              訪問官方網站:
            </span>
            <span> 前往官方網站並完成所需任務。</span>{" "}
          </li>
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              啟用隱藏內容開關:
            </span>
            <span> 在主頁上，啟用隱藏內容開關。</span>{" "}
          </li>
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              打開應用程式:
            </span>
            <span> 重新啟動我們的應用程式即可查看隱藏內容。</span>{" "}
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
            為什麼別人的字符很多，而我只能看到幾個？
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
        <p>造成這種情況的原因可能有以下幾個：</p>
        <ul className="list-decimal">
          <li>您看不到的字元可能被設定為“不公開”或“私有”。</li>
          <li>您尚未啟用“未過濾”開關或“隱藏內容”開關。</li>
          <li>您看不到的字元可能已被您封鎖。</li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-is-my-character-image-marked-as-sensitive-content-even-though-it-is-normal"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            為什麼我的角色圖片是正常的，卻被標記為敏感內容？
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
          我們的內容審核流程非常嚴格，機器審核的嚴格設定可能會導致誤報。請加入我們的
          Discord 與我們聯繫，我們將盡快解決問題。
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        訂閱常見問題解答
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="how-do-i-cancel-my-subscription-through-google-play"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            如何透過 Google Play 取消訂閱？
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
        <p>若要透過 Google Play 取消訂閱，請依照以下步驟操作：</p>
        <ul className="list-decimal">
          <li>在 Android 裝置上開啟 Google Play 商店應用程式。</li>
          <li>點選左上角的選單圖示（三條水平線）。</li>
          <li>選擇訂閱。</li>
          <li>找到並點擊您要取消的訂閱。</li>
          <li>點擊取消訂閱並依照指示確認。</li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-used-another-method-to-subscribe-how-do-i-cancel"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            我用了另一種方法來訂閱。我該如何取消？
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
          如果您使用其他方式訂閱，請使用管理訂閱功能返回您支付帳單的網站。例如，Subscribestar、Paymentwall
          等。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="will-i-lose-access-immediately-after-canceling-my-subscription"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            取消訂閱後我會立即失去存取權限嗎？
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
          不需要，您將保留對訂閱權益的存取權限，直到目前計費週期結束。此後，您的訂閱將不會續訂，您將無法享受這些福利。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="can-i-get-a-refund-after-canceling-my-subscription"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            取消訂閱後我可以獲得退款嗎？
          </h3>{" "}
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
        <p>退款政策因訂閱平台和服務條款而異。詳情請參閱具體平台的退款政策：</p>
        <ul>
          <li>App Store：造訪 Apple 的支援頁面以獲取有關退款的資訊。</li>
          <li>Google Play：請造訪 Google Play 的支援頁面申請退款。</li>
          <li>
            其他：根據我們的訂閱政策，您的訂閱只能在下一個計費週期內取消。目前訂閱期不可退款。以下是一些具體原因：
            <ul>
              <li>
                服務使用：訂閱費用涵蓋您在目前計費週期內享有的服務和內容。即使您決定在此期間取消，您也可以繼續使用服務，直到週期結束。
              </li>
              <li>
                提前規劃：我們的訂閱模式旨在根據預付費方案提供不間斷的服務。這使我們能夠維持和提高您所獲得的服務品質。
              </li>
              <li>
                服務條款：當您訂閱時，您同意我們的服務條款，其中規定當前計費週期不可退款。這是為了確保我們所有訂閱者的公平性和一致性。
              </li>
              <li>
                <span className="text-light3-primary dark:text-dark3-primary font-bold">
                  請注意：
                </span>
                <ul>
                  <li>訂閱前，請仔細查看訂閱計劃，確保其滿足您的需求。</li>
                  <li>
                    如果您希望取消訂閱，它將在當前計費週期結束時生效，並且不會向您收取下一個週期的費用。
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
            如果我在取消訂閱時遇到問題怎麼辦？
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
          如果您在取消訂閱時遇到任何問題，請聯絡我們的客戶支援團隊尋求協助。提供您的訂閱詳細資訊以及您用於訂閱的方法，我們的團隊
          (
          <a
            target="_blank"
            className="font-bold"
            href="https://discord.gg/crushonai"
          >
            Discord
          </a>
          ) 將協助解決問題。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="subscribestar-upgrade-and-downgrade-issues"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            Subscribestar升級與降級問題
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
          首先，當您在subscribestar網站上更改訂閱套餐時，表示更改後的訂閱套餐
          <span className="text-light3-primary dark:text-dark3-primary font-bold">
            立即生效
          </span>
          ，而不是下個月。請仔細修改您的訂閱套餐。我們建議您在訂閱套餐結束後進行修改。避免雙重付款。{" "}
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        如何使用聯合會員？
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="are-there-different-types-of-memberships-available"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            是否有不同類型的會員資格？
          </h3>{" "}
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
        <p>是的，我們提供三種類型的會員資格：</p>
        <ul>
          <li>標準會員：使用基本功能。</li>
          <li>高級會員：包括所有標準功能以及附加高級功能。</li>
          <li>豪華會員資格：包括高級會員資格的所有福利以及獨家豪華功能。</li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-should-i-do-if-my-two-accounts-cant-link"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            如果我的兩個帳戶無法關聯，我該怎麼辦？
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
          如果您的兩個帳戶無法關聯，請確保您的購買已成功完成，然後再嘗試幾次。如果問題仍然存在，請聯絡我們的
          Discord 支援團隊以獲得進一步協助。
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        帳戶常見問題
      </h2>
      <details className="group mt-4 p-2" data-id="how-to-delete-my-account">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            如何刪除我的帳戶？
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
        <p>請注意！一旦刪除，該帳戶將無法恢復。</p>
        <p>前往您的個人資料頁面，點擊“設定”按鈕，然後選擇“刪除帳戶”選項。</p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-cant-i-delete-my-account"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            為什麼我無法刪除我的帳戶？
          </h3>{" "}
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
        <p>請注意！一旦刪除，該帳戶將無法恢復。</p>
        <p>如果您仍希望繼續刪除，請檢查以下內容：</p>
        <ul className="list-decimal">
          <li>確保您沒有有效訂閱，因為具有有效訂閱的帳戶無法刪除。</li>
          <li>驗證您的網路連線是否穩定，因為網路問題也會阻止帳戶被刪除。</li>
        </ul>
        <p>
          如果您已檢查了兩者，但仍無法刪除帳戶，請透過我們的{" "}
          <a
            target="_blank"
            className="font-bold"
            href="https://discord.gg/crushonai"
          >
            Discoid
          </a>{" "}
          聯絡管理員 Chad
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-recover-my-deleted-account"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            如何恢復已刪除的帳戶？
          </h3>{" "}
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
          帳戶刪除是不可逆的。但是，您可以在刪除後 3
          天內重新登入來恢復您的帳戶。如果您超過3天未登錄，您的帳戶將無法恢復，我們將無法為您恢復您的帳戶。
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">人們還問</h2>
      <details
        className="group mt-4 p-2"
        data-id="is-there-an-nsfw-character-ai-with-no-limit"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            是否存在沒有限制的 NSFW 角色 AI？
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
          My LunaI 正在透過提供繞過 NSFW 規則的服務來改變 AI
          角色聊天機器人的格局，我們的服務允許無過濾器的對話。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="what-is-an-nsfw-ai-chatbot">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            什麼是 NSFW 人工智慧聊天機器人？
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
          NSFW
          人工智慧聊天機器人是一種複雜的人工智慧，旨在讓用戶參與通常被認為不適合工作的主題的對話。這些聊天機器人經過預先編程，可以導航成熟的主題，確保為
          18 歲及以上的用戶提供引人入勝的體驗。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="are-nsfw-ai-chatbots-safe-to-use"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW 人工智慧聊天機器人可以安全使用嗎？
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
          是的，My Luna
          實施了強大的安全措施來確保用戶隱私和資料保護。但是，使用者應始終謹慎行事並遵循平台指南以維護安全。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="can-i-customize-my-nsfw-ai-chatbot-experience"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            我可以自訂我的 NSFW AI 聊天機器人體驗嗎？
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
          絕對地。 My Luna 提供廣泛的自訂選項，可讓使用者自訂 AI
          同伴的外觀、個性和對話風格。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-do-nsfw-ai-chatbots-learn"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW 人工智慧聊天機器人如何學習？
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
          用於聊天的 NSFW 角色 AI
          聊天機器人透過機器學習演算法和自然語言處理進行學習。他們觀察使用者如何相互交互，並根據對話的性質改變他們的反應，以進行更自然和有趣的對話。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-it-possible-to-have-an-ai-girlfriend"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            有可能有AI女友嗎？
          </h3>{" "}
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
          推出了創新的人工智慧約會模擬器，重新定義了虛擬陪伴體驗。該平台使用戶能夠在幾秒鐘內創建自己的虛擬女友，並具有自訂的特徵、個性特徵和風格。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-is-the-most-realistic-ai-girlfriend"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            最真實的AI女友是什麼樣的？
          </h3>{" "}
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
          已成為虛擬伴侶領域的突破性平台，為使用者提供創建自己的虛擬女友的獨特機會。這項創新服務允許廣泛的定制，使用戶不僅可以塑造人工智慧伴侶的外觀，還可以塑造其個性和關係動態。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="does-the-character-ai-allow-sexting"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            角色AI允許髮色情簡訊嗎？
          </h3>{" "}
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
          透過 My Luna 平台，使用者可以自由地與自己喜歡的 AI
          角色進行色情聊天，沒有任何限制。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="is-ai-sex-chat-safe">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            AI 性愛聊天安全嗎？
          </h3>{" "}
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
          是的。 My Luna
          使用強大的安全措施來確保您的資料安全。然而，使用者遵循平台指南以維護安全非常重要。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="is-there-a-crushon-ai-app">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            有沒有辣辣的聊天AI應用？
          </h3>{" "}
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
          My
          LunaI讓使用者可以不受任何限制地進行刺激的聊天。這是最近很流行的一個應用程式。與有許多安全限制的角色ai相比，My
          Luna更適合需要nsfw ai聊天的人。麻辣又安全。
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="does-crushon-allow-nsfw-ai">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Spicy 聊天是否允許 NSFW AI？
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
          麻辣聊天AI允許的話題範圍很廣，尤其是在成人娛樂方面。它不審查內容，但禁止非法活動。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="are-ai-hentai-chat-safe-to-use"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            AI 無盡聊天可以安全使用嗎？
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
          絕對地！ My LunaI
          採用一流的安全措施來保護使用者隱私和資料。儘管如此，使用者必須謹慎行事並遵守平台指南，以確保安全的體驗。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-is-the-best-ai-hentai-chat-app"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            {" "}
            最好的人工智慧成人聊天應用程式是什麼？
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
          是一個由人工智慧驅動的平台，允許用戶參與有趣和令人興奮的裸體對話，並創建獨特的人工智慧無盡聊天。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-do-i-get-started-with-roleplay-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            如何開始使用 Roleplay AI？
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
          首先，只需註冊 My LunaI 並開始創建您獨特的 AI
          聊天機器人。首先選擇他們獨特的個性和目標，並製作他們詳細的背景故事。釋放您的創造力，讓您的聊天機器人栩栩如生！
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-roleplay-ai-suitable-for-both-beginners-and-experienced-roleplayers"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Roleplay AI 適合初學者和經驗豐富的角色玩家嗎？
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
          旨在滿足新手和經驗豐富的角色扮演者的需求。無論您是剛起步還是擁有多年經驗，您都會發現該系統直觀且適合您的技能水平，為所有人提供用戶友好的體驗。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="does-roleplay-ai-have-any-age-restrictions"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Roleplay AI 有年齡限制嗎？
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
          是的，Roleplay AI 設定了 18
          歲的年齡限制，以培養成熟且負責任的使用者社群。該政策確保所有內容和互動都遵循可接受的標準，為每個人創造一個安全和有利的環境。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-my-data-safe-with-nsfw-character-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            NSFW My Luna 的資料安全嗎？
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
          當然，我們將資料隱私和安全放在首位。透過遵守業界最佳實踐和嚴格的隱私法規，我們確保您的資料得到良好的保護和安全。
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="do-i-need-any-special-skills-to-use-nsfw-character-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            我需要任何特殊技能才能使用 NSFW 角色 AI 嗎？
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
          即使您是角色創建工具的新手，My LunaI
          的設計也易於使用，適合所有技能水平的創作者使用。我們提供全面的幫助來引導您完成整個過程的每一步，確保您獲得順利和愉快的體驗。
        </p>
      </details>
    </article>
  )
}
