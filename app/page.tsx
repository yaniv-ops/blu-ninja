import Button from '@/components/buttons/Button'
import '@/app/globals.css'
import Image  from 'next/image';
import LogoImg  from '@/public/Logo.png'
import LogoWord from '@/public/LogoWord.png' 

export default function Home() {
  return (
    <>
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
    <div className="main bg-white [background:radial-gradient(125%_125%_at_50%_100%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_100%,#000_40%,#63e_100%)]">
      <div className='header-wrapper'>
      </div>
    </div>
    <div className='main'></div>
    </>
  );
}
