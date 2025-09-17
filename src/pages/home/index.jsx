import Navbar from "../../components/navbar"
import laptop from "../.././assets/laptop.jpg";


const Home = () => {
    return (
        <div>
            <div>
                <h1 className=' font-bold font-serif text-zinc-600 text-center p-5 text-5xl cursor-default'>Hello World</h1>

                <Navbar />


                <div className='bg-zinc-300'>
                    <img src={laptop} width={"1000px"} className='flex ms-35 h-[500px]' />

                </div>
            </div>

        </div>
    )
}

export default Home
