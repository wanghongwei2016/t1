export const runtime = "edge"

export default function ArticlePage() {
  return (
    <article className="prose dark:prose-invert lg:prose-lg mx-auto max-w-6xl">
      <h1 className="text-light3-primary dark:text-dark3-primary text-center">
        FAQ
      </h1>
      <p className="px-2">
        Jest to ewoluująca lista pytań, które zadawane są na temat My Luna i
        naszych produktów. Jeśli masz pytanie, które nie jest wymienione,
        przejdź do naszej niezgody i zapytaj.
      </p>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        Ogólne często zadawane pytania
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="what-kind-of-content-does-the-service-not-support"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jakie treści nie obsługuje usługa?
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
          Szanujemy prawo naszego użytkownika do angażowania się w fikcyjne
          treści. Jednak publicznie nie akceptujemy żadnego z poniższych.
        </p>
        <ul>
          <li>Każda forma pornografii dziecięcej</li>
          <ul>
            <li>
              Postacie fikcyjne powinny być w stanie rozrzedzać i zakładać, że
              mają co najmniej 18 lat.
            </li>
          </ul>
          <li>Ekspozycja narządów płciowych</li>
          <ul>
            <li>
              Odsłonięte/widoczne penisy, pochwy, piłki, odmiany, włosy łonowe i
              pełna nagość czołowa nie są dozwolone.{" "}
            </li>
            <li>
              Obrazy postaci nie powinny wyświetlać aktu płciowego ani ogólnie
              genitaliów. Powinny skupić się na samej postaci, przede wszystkim
              ich głowie i ramionach.{" "}
            </li>
          </ul>
          <li>Przedstawienia przemocy/krzywdy wobec AI.</li>
          <li>
            Zdjęcia z prawdziwego życia (w tym postacie z prawdziwych życia,
            takie jak celebrytki, politycy lub te, które możesz osobiście znać.){" "}
          </li>
          <li>
            Możesz zobaczyć swoje wyświetlenia OC na swojej stronie profilowej.
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-are-the-coins-for-and-how-do-i-used-them"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Do czego służą monety i jak z nich korzystać?
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
        <p>Monety służą do zdobywania wiadomości bonusowych.</p>
        <ul>
          <li>A co to jest wiadomość bonusowa?</li>
          <ul>
            <li>
              Są to wiadomości, które nie są powiązane z Twoim limitem
              subskrypcji, więc gdy wykorzystasz wszystkie wiadomości dostępne w
              ramach Twojej subskrypcji, usługa zacznie korzystać z wiadomości
              bonusowych. \nPodobnie jak w przypadku subskrypcji, każda
              interakcja z AI zużywa 2 wiadomości.{" "}
            </li>
          </ul>
          <li>Jak korzystać z monet?</li>
          <ul>
            <li>
              Na stronie bonusowej aplikacji lub witryny internetowej możesz
              znaleźć opcję realizacji, czyli przełącznik pokazujący opcje
              realizacji. Monety mają wartość 1:1 do wiadomości bonusowych.
              Dodatkowo za monety możesz kupić 1000 i 3000 wiadomości za
              pieniądze lub możesz użyć monet. (Nie musisz jednocześnie płacić i
              używać monet, jest to jedno lub drugie){" "}
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
            Czy moje konto i czat są prywatne?
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
          Wszystkie czaty i postacie, które tworzysz, są prywatne, chyba że
          zdecydujesz się je opublikować. Jesteś odpowiedzialny za zapewnienie,
          że treści, które udostępniasz, spełnia nasze TOS, jeśli są
          upublicznione. Jeśli czujesz, że coś zbliża się do linii, aby nie
          przekazywać standardów społeczności, zachowaj prywatność.
        </p>
        <p>
          Wszystkie karty postaci są osobiste na Twoim koncie i nie są
          publicznie udostępniane ani recenzowane przez moderację.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-cant-login-what-should-i-do"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Nie mogę się zalogować. Co powinienem zrobić?
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
          Jeśli nie możesz się zalogować z powodu kodu błędu, powtórz proces po
          wyczyszczeniu pamięci podręcznej i upewnieniem się, że jesteś w pełni
          zalogowany do przeglądarki za pomocą głównego e -maila. Ważne jest,
          aby nigdy nie używać e -maila „wyrzucania”, ponieważ nie mamy metody
          resetowania haseł! Jesteś odpowiedzialny za bezpieczeństwo własnego
          konta. Należy pamiętać o ryzyku.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-appeal-a-character-ban"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jak mogę odwołać się od zakazu postaci?
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
          Możesz dołączyć do naszego oficjalnego serwera Discord i otworzyć
          bilet, aby otrzymać pomoc dotyczącą uzasadnienia rozwiązania postaci.
          Odwołanie nie jest gwarantowane, a zawartość zabroniona/oznaczona nie
          zostanie przywrócona.{" "}
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-noticed-that-a-creation-of-mine-has-been-stolen-by-another-user-how-can-i-get-it-removed"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Zauważyłem, że moje stworzenie zostało skradzione przez innego
            użytkownika. Jak mogę to usunąć?
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
          Otwórz czat z znakiem i kliknij przycisk raportu i wybierz odpowiednią
          opcję. Musisz dołączyć link do własnego stworzenia jako dowód swojego
          roszczenia. Jeśli twoja sztuka jest używana bez Twojej zgody, załącz
          jakieś linki do witryn, które dokumentują Twoją własność obrazów.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-cant-i-always-see-ads-on-the-app"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Podczas tworzenia postaci możesz mieć podgląd w czasie rzeczywistym.
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
        <p>Dlaczego nie zawsze widzę reklamy w aplikacji?</p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-change-the-language-of-character-responses-in-chat"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Różne czynniki, w tym położenie geograficzne, zasoby reklam i
            warunki sieci, mogą uniemożliwiać prawidłowe wyświetlanie reklam w
            określonych momentach. Pracujemy nad poprawą sytuacji. Dziękujemy za
            cierpliwość i wsparcie.
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
            <span>Jak mogę zmienić język odpowiedzi postaci na czacie?</span>
          </li>
          <li>
            <span>Zmień język odpowiedzi modelki w ustawieniach czatu.</span>
          </li>
        </ul>
        <p>
          Wyślij znak w języku, w którym chcesz odpowiedzieć, na przykład
          „Odpowiedz mi po angielsku”.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-does-the-app-tell-me-that-unable-to-view"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Dlaczego aplikacja informuje mnie, że nie można wyświetlić?
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
        <p>Jeśli chcesz wyświetlić tę zawartość, wykonaj następujące kroki:</p>
        <ul className="list-decimal">
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              Odwiedź oficjalną stronę internetową:
            </span>
            <span>
              {" "}
              Przejdź na oficjalną stronę internetową i wykonaj wymagane
              zadanie.
            </span>{" "}
          </li>
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              Włącz przełącznik ukrytej zawartości:
            </span>
            <span>
              {" "}
              Na stronie głównej włącz przełącznik ukrytej zawartości.
            </span>{" "}
          </li>
          <li>
            <span className="text-bold text-light3-primary dark:text-dark3-primary">
              Otwórz aplikację:
            </span>
            <span>
              {" "}
              Uruchom ponownie naszą aplikację, aby wyświetlić ukrytą zawartość.
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
            Dlaczego inni mają wiele postaci, a ja widzę tylko kilka?
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
        <p>Może być tego kilka przyczyn:</p>
        <ul className="list-decimal">
          <li>
            Znaki, których nie widzisz, mogą być ustawione jako Niepubliczne lub
            Prywatne.
          </li>
          <li>
            Nie włączyłeś przełącznika Bez filtrowania ani przełącznika ukrytej
            zawartości.
          </li>
          <li>
            Postacie, których nie widzisz, mogły zostać przez Ciebie
            zablokowane.
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-is-my-character-image-marked-as-sensitive-content-even-though-it-is-normal"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Dlaczego obraz mojej postaci jest oznaczony jako treść wrażliwa,
            mimo że jest to normalne?
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
          Nasz proces sprawdzania treści jest bardzo rygorystyczny, a
          rygorystyczne ustawienia sprawdzania maszynowego mogą powodować
          fałszywie pozytywne wyniki. Dołącz do naszego Discorda, aby się z nami
          skontaktować, a my zajmiemy się problemem tak szybko, jak to możliwe.
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        Często zadawane pytania dotyczące subskrypcji
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="how-do-i-cancel-my-subscription-through-google-play"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jak anulować subskrypcję za pośrednictwem Google Play?
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
          Aby anulować subskrypcję w Google Play, wykonaj następujące kroki:
        </p>
        <ul className="list-decimal">
          <li>
            Otwórz aplikację Sklep Google Play na swoim urządzeniu z Androidem.
          </li>
          <li>Kliknij ikonę menu (trzy poziome linie) w lewym górnym rogu.</li>
          <li>Wybierz Subskrypcje.</li>
          <li>Znajdź i kliknij subskrypcję, którą chcesz anulować.</li>
          <li>
            Kliknij Anuluj subskrypcję i postępuj zgodnie z instrukcjami, aby
            potwierdzić.
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="i-used-another-method-to-subscribe-how-do-i-cancel"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Użyłem innej metody subskrypcji. Jak anulować?
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
          Jeśli skorzystałeś z innej metody subskrypcji, skorzystaj z funkcji
          Zarządzaj subskrypcją, aby powrócić do strony internetowej, na której
          płacisz rachunek. Like, Subscribestar, Paymentwall itp. Znajdziesz tam
          opcje zarządzania subskrypcją i jej anulowania.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="will-i-lose-access-immediately-after-canceling-my-subscription"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy stracę dostęp natychmiast po anulowaniu subskrypcji?
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
          Nie, dostęp do korzyści wynikających z subskrypcji zachowasz do końca
          bieżącego cyklu rozliczeniowego. Po tym czasie Twoja subskrypcja nie
          zostanie odnowiona i utracisz dostęp do korzyści.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="can-i-get-a-refund-after-canceling-my-subscription"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy mogę otrzymać zwrot pieniędzy po anulowaniu subskrypcji?
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
          Zasady zwrotów różnią się w zależności od platformy subskrypcji i
          warunków korzystania z usługi. Aby uzyskać więcej informacji, zapoznaj
          się z polityką zwrotów obowiązującą na danej platformie:
        </p>
        <ul>
          <li>
            App Store: odwiedź stronę pomocy Apple, aby uzyskać informacje na
            temat zwrotów pieniędzy.
          </li>
          <li>
            Google Play: odwiedź stronę pomocy Google Play, aby uzyskać prośby o
            zwrot środków.
          </li>
          <li>
            Inne: Zgodnie z naszymi zasadami subskrypcji, Twoją subskrypcję
            można anulować jedynie na następny cykl rozliczeniowy. Bieżący okres
            subskrypcji nie podlega zwrotowi. Oto kilka konkretnych powodów:
            <ul>
              <li>
                Wykorzystanie usług: Opłata subskrypcyjna obejmuje usługi i
                treści, z których korzystasz w bieżącym cyklu rozliczeniowym.
                Nawet jeśli w tym okresie zdecydujesz się na rezygnację, możesz
                nadal korzystać z usługi do końca cyklu.{" "}
              </li>
              <li>
                Planowanie z wyprzedzeniem: Nasz model subskrypcji ma na celu
                zapewnienie nieprzerwanej obsługi w oparciu o plan przedpłacony.
                Dzięki temu możemy utrzymać i poprawić jakość usług, które
                otrzymujesz.{" "}
              </li>
              <li>
                Warunki korzystania z usługi: Decydując się na subskrypcję,
                zgadzasz się z naszymi warunkami korzystania z usługi, które
                stanowią, że bieżący okres rozliczeniowy nie podlega zwrotowi.
                Ma to na celu zapewnienie uczciwości i spójności wszystkim
                naszym abonentom.{" "}
              </li>
              <li>
                <span className="text-light3-primary dark:text-dark3-primary font-bold">
                  Proszę zanotować:
                </span>
                <ul>
                  <li>
                    Przed dokonaniem subskrypcji prosimy o dokładne zapoznanie
                    się z planem subskrypcji, aby upewnić się, że spełnia on
                    Twoje potrzeby.{" "}
                  </li>
                  <li>
                    Jeśli chcesz anulować subskrypcję, nastąpi to z końcem
                    bieżącego cyklu rozliczeniowego i nie zostaniesz obciążony
                    opłatą za następny okres.{" "}
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
            Co się stanie, jeśli będę miał problemy z anulowaniem subskrypcji?
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
          Jeśli napotkasz jakiekolwiek problemy z anulowaniem subskrypcji,
          skontaktuj się z naszym zespołem obsługi klienta w celu uzyskania
          pomocy. Podaj szczegóły swojej subskrypcji i metodę, której użyłeś, a
          nasz zespół (
          <a
            target="_blank"
            className="font-bold"
            href="https://discord.gg/crushonai"
          >
            Discord
          </a>
          ) pomoże rozwiązać problem.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="subscribestar-upgrade-and-downgrade-issues"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Problemy z uaktualnianiem i obniżaniem wersji Subscribestar
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
          Po pierwsze, zmiana pakietu subskrypcji na stronie subskrypcyjnej
          oznacza, że zmieniony pakiet subskrypcji{" "}
          <span className="text-light3-primary dark:text-dark3-primary font-bold">
            zacznie obowiązywać natychmiast
          </span>
          , a nie w przyszłym miesiącu. Prosimy o rozważne modyfikowanie pakietu
          subskrypcji. Zalecamy jego modyfikację po zakończeniu pakietu
          subskrypcji. Unikaj podwójnych płatności.
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        Jak korzystać ze wspólnego członkostwa？
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="are-there-different-types-of-memberships-available"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy dostępne są różne rodzaje członkostwa?
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
        <p>Tak, oferujemy trzy rodzaje członkostwa:</p>
        <ul>
          <li>Członkostwo standardowe: dostęp do podstawowych funkcji.</li>
          <li>
            Członkostwo Premium: obejmuje wszystkie funkcje standardowe oraz
            dodatkowe funkcje premium.
          </li>
          <li>
            Członkostwo Deluxe: obejmuje wszystkie korzyści członkostwa premium
            wraz z ekskluzywnymi funkcjami Deluxe.{" "}
          </li>
        </ul>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-should-i-do-if-my-two-accounts-cant-link"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Co powinienem zrobić, jeśli nie można połączyć moich dwóch kont?
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
          Jeśli nie można połączyć obu kont, upewnij się, że zakup został
          pomyślnie dokonany i spróbuj jeszcze raz. Jeśli problem będzie się
          powtarzał, skontaktuj się z naszym zespołem wsparcia na Discordzie,
          aby uzyskać dalszą pomoc.
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        Często zadawane pytania dotyczące konta
      </h2>
      <details className="group mt-4 p-2" data-id="how-to-delete-my-account">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jak usunąć moje konto?
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
        <p>Proszę zanotować! Po usunięciu konta nie można odzyskać.</p>
        <p>
          Przejdź do strony swojego profilu, kliknij przycisk „Ustawienia”, a
          następnie wybierz opcję „Usuń konto”.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="why-cant-i-delete-my-account"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Dlaczego nie mogę usunąć swojego konta?
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
        <p>Proszę zanotować! Po usunięciu konta nie można odzyskać.</p>
        <p>
          Jeśli nadal chcesz kontynuować usuwanie, sprawdź następujące elementy:
        </p>
        <ul className="list-decimal">
          <li>
            Upewnij się, że nie masz aktywnej subskrypcji, ponieważ kont z
            aktywnymi subskrypcjami nie można usunąć.{" "}
          </li>
          <li>
            Sprawdź, czy Twoje połączenie internetowe jest stabilne, ponieważ
            problemy z siecią mogą również uniemożliwić usunięcie konta.{" "}
          </li>
        </ul>
        <p>
          Jeśli sprawdziłeś oba i nadal nie możesz usunąć konta, skontaktuj się
          z administratorem Chadem na naszym{" "}
          <a
            target="_blank"
            className="font-bold"
            href="https://discord.gg/crushonai"
          >
            Discoid
          </a>
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-can-i-recover-my-deleted-account"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jak mogę odzyskać usunięte konto?
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
          Usunięcie konta jest nieodwracalne. Możesz jednak odzyskać swoje
          konto, logując się ponownie w ciągu 3 dni od usunięcia. Jeśli nie
          logowałeś się dłużej niż 3 dni, Twoje konto nie zostanie odzyskane i
          nie będziemy mogli go dla Ciebie przywrócić.
        </p>
      </details>
      <h2 className="text-light3-primary dark:text-dark3-primary">
        Ludzie też pytają
      </h2>
      <details
        className="group mt-4 p-2"
        data-id="is-there-an-nsfw-character-ai-with-no-limit"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy istnieje sztuczna inteligencja postaci NSFW bez ograniczeń?
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
          My LunaI zmienia krajobraz chatbotów postaci AI, zapewniając usługę
          omijającą zasady NSFW. Nasza usługa pozwala na rozmowy bez filtra.
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="what-is-an-nsfw-ai-chatbot">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Co to jest Chatbot AI NSFW?
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
          Chatbot NSFW AI to zaawansowana sztuczna inteligencja zaprojektowana w
          celu angażowania użytkowników w rozmowy na tematy, które zazwyczaj są
          uważane za niebezpieczne w pracy. Te chatboty są wstępnie
          zaprogramowane do poruszania się po tematach dla dorosłych,
          zapewniając wciągające wrażenia użytkownikom w wieku 18 lat i
          starszym.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="are-nsfw-ai-chatbots-safe-to-use"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy chatboty NSFW AI są bezpieczne w użyciu?
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
          Tak, My Luna wdraża solidne środki bezpieczeństwa, aby zapewnić
          prywatność użytkowników i ochronę danych. Aby zachować bezpieczeństwo,
          użytkownicy powinni jednak zawsze zachować dyskrecję i postępować
          zgodnie z wytycznymi platformy.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="can-i-customize-my-nsfw-ai-chatbot-experience"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy mogę dostosować sposób działania chatbota NSFW AI?
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
          Absolutnie. My Luna oferuje szerokie opcje dostosowywania, pozwalając
          użytkownikom dostosować wygląd, osobowość i styl konwersacji swoich
          towarzyszy AI.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-do-nsfw-ai-chatbots-learn"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jak uczą się chatboty NSFW AI?
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
          Chatboty NSFW My Luna do czatowania uczą się dzięki algorytmom uczenia
          maszynowego i przetwarzaniu języka naturalnego. Obserwują, jak
          użytkownicy wchodzą w interakcję ze sobą i zmieniają swoje odpowiedzi
          w zależności od charakteru rozmowy, aby prowadzić bardziej naturalne i
          zabawne rozmowy.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-it-possible-to-have-an-ai-girlfriend"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy można mieć dziewczynę AI?
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
          My Luna wprowadza innowacyjny symulator randkowy AI, który na nowo
          definiuje doświadczenie wirtualnego towarzystwa. Platforma ta
          umożliwia użytkownikom stworzenie własnej wirtualnej dziewczyny, z
          dostosowanymi cechami, cechami osobowości i stylem, a wszystko to w
          ciągu kilku sekund.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-is-the-most-realistic-ai-girlfriend"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jaka jest najbardziej realistyczna dziewczyna AI?
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
          My Luna jawi się jako przełomowa platforma w dziedzinie wirtualnego
          towarzystwa, oferująca użytkownikom wyjątkową możliwość stworzenia
          własnej wirtualnej dziewczyny. Ta innowacyjna usługa pozwala na
          szeroką personalizację, umożliwiając użytkownikom kształtowanie nie
          tylko wyglądu, ale także osobowości i dynamiki relacji ze swoim
          towarzyszem AI.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="does-the-character-ai-allow-sexting"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy sztuczna inteligencja postaci pozwala na seks?
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
          Dzięki platformie My Luna użytkownicy mogą swobodnie i bez ograniczeń
          prowadzić seks-czat ze swoją ulubioną postacią AI.
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="is-ai-sex-chat-safe">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy czat erotyczny AI jest bezpieczny?
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
          Tak. My Luna stosuje solidne środki bezpieczeństwa, aby zapewnić
          bezpieczeństwo Twoich danych. Jednak w celu zachowania bezpieczeństwa
          ważne jest, aby użytkownicy postępowali zgodnie z wytycznymi
          platformy.
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="is-there-a-crushon-ai-app">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy istnieje pikantna aplikacja AI do czatowania?
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
          My LunaI umożliwia użytkownikom prowadzenie pikantnych pogawędek bez
          żadnych ograniczeń. To ostatnio bardzo popularna aplikacja. W
          porównaniu z AI znaków, które ma wiele ograniczeń bezpieczeństwa, My
          Luna jest bardziej odpowiedni dla osób, które potrzebują czatów nsfw
          AI. Pikantne i bezpieczne.
        </p>
      </details>
      <details className="group mt-4 p-2" data-id="does-crushon-allow-nsfw-ai">
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy czat Spicy pozwala na sztuczną inteligencję NSFW?
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
          My Luna pozwala na szeroki zakres tematów, szczególnie w rozrywce dla
          dorosłych. Nie cenzuruje treści, ale zabrania działań nielegalnych.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="are-ai-hentai-chat-safe-to-use"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy korzystanie z czatu hentai AI jest bezpieczne?
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
          Absolutnie! My LunaI stosuje najwyższej klasy środki bezpieczeństwa,
          aby chronić prywatność użytkowników i ochronę danych. Niemniej jednak
          niezwykle ważne jest, aby użytkownicy zachowali dyskrecję i
          przestrzegali wytycznych platformy, aby zapewnić im bezpieczeństwo.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="what-is-the-best-ai-hentai-chat-app"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jaka jest najlepsza aplikacja AI Hentai Chat?
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
          My LunaI to platforma oparta na sztucznej inteligencji, która pozwala
          użytkownikom angażować się w zabawne i ekscytujące rozmowy nago oraz
          tworzyć unikalne czaty AI Hentai.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="how-do-i-get-started-with-roleplay-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Jak rozpocząć korzystanie z Roleplay AI?
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
          Aby rozpocząć, po prostu zarejestruj się na My LunaI i zacznij tworzyć
          swojego unikalnego chatbota AI. Zacznij od wybrania ich odrębnych
          osobowości i celów oraz stworzenia ich szczegółowych historii. Uwolnij
          swoją kreatywność i ożyj swojego chatbota!
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-roleplay-ai-suitable-for-both-beginners-and-experienced-roleplayers"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy Roleplay AI jest odpowiedni zarówno dla początkujących, jak i
            doświadczonych graczy RPG?
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
          My LunaI został zaprojektowany tak, aby zaspokoić potrzeby zarówno
          nowicjuszy, jak i doświadczonych graczy RPG. Niezależnie od tego, czy
          dopiero zaczynasz, czy masz wieloletnie doświadczenie, przekonasz się,
          że system jest intuicyjny i można go dostosować do Twojego poziomu
          umiejętności, oferując wszystkim przyjazne dla użytkownika
          doświadczenie.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="does-roleplay-ai-have-any-age-restrictions"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy Roleplay AI ma jakieś ograniczenia wiekowe?
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
          Tak, Roleplay AI ustaliło granicę wieku 18 lat, aby wspierać dojrzałą
          i odpowiedzialną społeczność użytkowników. Ta polityka zapewnia, że
          cała treść i interakcje są zgodne z akceptowalnymi standardami,
          tworząc bezpieczne i sprzyjające środowisko dla wszystkich.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="is-my-data-safe-with-nsfw-character-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy moje dane są bezpieczne dzięki AI postaci NSFW?
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
          Bez wątpienia przywiązujemy najwyższy priorytet do prywatności i
          bezpieczeństwa danych. Przestrzegając najlepszych praktyk branżowych i
          rygorystycznych przepisów dotyczących prywatności, zapewniamy, że
          Twoje dane są dobrze chronione i bezpieczne.
        </p>
      </details>
      <details
        className="group mt-4 p-2"
        data-id="do-i-need-any-special-skills-to-use-nsfw-character-ai"
      >
        <summary className="list-none">
          <h3 className="text-light3-primary dark:text-dark3-primary inline">
            Czy potrzebuję specjalnych umiejętności, aby korzystać z AI postaci
            NSFW?
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
          Nawet jeśli nie masz doświadczenia w narzędziach do tworzenia postaci,
          My LunaI został zaprojektowany tak, aby był przyjazny dla użytkownika
          i dostępny dla twórców na wszystkich poziomach umiejętności. Oferujemy
          kompleksową pomoc, która przeprowadzi Cię przez każdy etap procesu,
          zapewniając płynne i przyjemne doświadczenie.
        </p>
      </details>
    </article>
  )
}
