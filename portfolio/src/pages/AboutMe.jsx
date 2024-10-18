
import Niki from '../assets/Niki.png';
import NikiBackground from "../assets/NikiBackground.png";

export default function AboutMe() {
  return (




    <div className="h-screen bg-cover bg-right flex justify-start items-center "
      style={{
        backgroundImage: `url(${NikiBackground})`,
        transform: 'rotate(180deg) scaleX(-1)',
        position: 'relative'
      }} >

      <h1 className="text text-6xl ml-32 z-40 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">About Me</h1>
      <img src={Niki} alt="Niki" 
        className="z-50 absolute grayscale hover:grayscale-0
"
        style={{
          transform: 'rotate(180deg) scaleX(-1)',
          top: '100px', /* Adjust the vertical position */
          left: '100px', /* Adjust the horizontal position */
          width: '350px', /* Adjust the size of the image */
          height: 'auto',
        }}
      />
      <div className="bitten outer z-30"     >

        <div className="blurred">

          <div className="bitten " >

          </div>
        </div>
      </div>


    </div>

  );
}

