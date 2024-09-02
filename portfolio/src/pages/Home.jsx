import N from '../assets/N.png';

export default function Home() {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
                {/* left side */}
                <div className="flex-2">
                    <h1>Hello</h1>
                    <div className="flex items-center space-x-2">
                        <h2 className="text-lg font-semibold">I am</h2>
                        <span className="text-lg font-medium">Nikolet Kostadinova</span>
                    </div>
                    <p className="text-sm mt-2">
                        JavaScript Developer
                    </p>

                </div>
                {/* right side */}
                <div className="flex-1">

                    <div className="flex gap-2 text-sm mt-2">
                        <img src={N} alt="Hero Section" />
                    </div>
                </div>

            </div>
        </div>
    )
}
