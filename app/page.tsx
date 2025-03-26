import Script from 'next/script';
import Button from '@/components/buttons/Button'
import '@/app/globals.css'
import Image  from 'next/image';
import LogoImg  from '@/public/Logo.png'
import LogoWord from '@/public/LogoWord.png' 
import Ticker from '@/components/ticker-slider/ticker';

export default async function Home() {
  
  return (
    <>
    <Ticker />
    <div className="main bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className='header-wrapper'>
        <div className='image-wrapper'>
          <div className="ninja">
            <Image className="image-glow image-main" src={LogoImg} alt="Logo Image" />
          </div>
          <div className="logo-word">
            <Image className="image-glow" src={LogoWord} alt="Logo Image" />
          </div>
        </div>
        <div className='testing'>
          <div className='buttons-strip'>
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
        </div>
        </div>
    </div>
    <div className="main main-secondary bg-white [background:radial-gradient(125%_125%_at_50%_100%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_100%,#000_40%,#63e_100%)]">
      <p className='type-reveal-1 type-reveal'>
      בבלו נינג&apos;ה, אנחנו מתמחים בבניית אתרים שממוקדים ביצירת עניין ותוכן איכותי.
       אנחנו מאמינים שאתר הוא יותר מסתם כרטיס ביקור דיגיטלי;
        הוא חייב להיות חווייתי, מעניין ומסקרן. לכן, אנו משקיעים זמן ומאמץ בהבנת הצרכים והשאיפות של הלקוחות שלנו,
         כדי ליצור תוכן שיתפוס את תשומת הלב של המבקרים. כל אתר שאנחנו מפתחים נבנה עם חשיבה על חוויית המשתמש,
          כך שהלקוחות שלכם ירצו לחזור אליו שוב ושוב.
          אנו מתמקדים בעיצוב ויזואלי מושך, תכנים מרתקים ואופטימיזציה למנועי חיפוש,
         כדי להבטיח שהאתר שלכם יהיה לא רק יפה, אלא גם פונקציונלי. עם בלו נינג&apos;ה,
         אתם יכולים להיות בטוחים שהאתר שלכם יהיה בולט בשוק וימשוך לקוחות חדשים
      </p>
      <p className='type-reveal'>
      לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש שמחויט
      אני דווקא אתחיל מהסוף : אם האתר של העסק שלכם משעמם אתכם ,הוא גם ישעמם את הקהל שלכם,
       ולא יעזרו כל המושגים הערטילאיים כמו : קידום אורגני, מילות חיפוש  
       וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, 
       צמוקו בלוקריה שיצמה ברורק. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ,
        ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש.
       תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
      </p>
    </div>
    <div className="test_div">
      
    </div>
    <Script src='./app.js' />
    </>
  );
}
