
import NikiBackground from "../assets/NikiBackground.png";


export default function Home() {
    return (
        

        <div
            className="h-screen bg-cover bg-right flex justify-start items-center "
            style={{ backgroundImage: `url(${NikiBackground})` }} >
            <div className="bg-gray-500 bg-opacity-50 p-14 text-white max-w-xl mx-4 md:mx-12 rounded-lg text-start">
                <h1 className="text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Hi, I am</h1>
                <p className="text-5xl text-nowrap mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Nikoleta Kostadinova</p>
                <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">JavaScript Developer</p>

            </div>
        </div>
    )
}
