import Image from './Image'
import movies from '../data/movies'

function Content() {
    return (
        <div className="bg-black-500 min-h-screen flex justify-between">
            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="md:w-1/2  p-4 min-h-[500px] ">
                        <h1 className="text-3xl font-semibold mb-4">Movie Blaze description</h1>
                        <p className="text-gray-700 mb-4">

                        United they stand, invincible they soar, the Avengers epitomize the strength of unity against the darkness that threatens our world.
                        </p>

                        <p className="text-gray-700 mb-4">
                        Heroes forged in fire, {"Earth's"} mightiest protectors. Bound by honor, they rise, unyielding, against the tide of chaos, defending humanity with unwavering courage.
                        </p>

                    </div>
                    <div className="md:w-1/2 relative flex justify-center top-2">
                        <div className="bg-blue-500 h-[360px] w-[360px] rounded-full overflow-hidden ">
                        <Image url={movies.url} alt={movies.alt}  />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Content