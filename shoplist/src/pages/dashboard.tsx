import { useNavigate } from "react-router-dom"
import cart from "../assets/images/shopping-cart-add.png"
import profileImg from "../assets/images/icons8-profile-100.png"


export default function Dashboard(){
    const navigate = useNavigate()
    const now = new Date()
    const formatted = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(now)

    return(
        <div className="min-h-screen bg-white px-6 py-8">
            <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
                <div className="mb-5">
                    <h1 className="text-4xl font-bold">Back at it, John Doe</h1>
                    <p className="text-sm text-start text-gray-500 mt-2">{formatted}</p>
                </div>
                <button 
                    onClick={() => navigate('/profile')}
                    className="h-14 w-14 rounded-full border-2 border-black flex items-center justify-center">
                    <img src={profileImg} alt="profileIng" />
                </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Your Grocery Lists */}
                <div className="lg:col-span-2 border-2 border-black">
                    <div className="rounded-xl bg-gray-100 p-6">
                        <h2 className="text-2xl font-bold mb-2">Your Grocery Lists</h2>
                        <div className="h-px bg-gray-300 mb-4" />

                        <div className="space-y-4 w-full">
                            <div className="rounded-lg bg-gray-200 p-4">
                                <p className="font-semibold text-gray-800">New health diet</p>
                                <p className="text-xs text-gray-600 mt-1">23 September 2024</p>
                            </div>

                            <div className="rounded-lg bg-gray-200 p-4">
                                <p className="font-semibold text-gray-800">Baking List</p>
                                <p className="text-xs text-gray-600 mt-1">23 September 2024</p>
                            </div>

                            <div className="rounded-lg bg-gray-200 p-4">
                                <p className="font-semibold text-gray-800">Weekly Grocery</p>
                                <p className="text-xs text-gray-600 mt-1">23 September 2024</p>
                            </div>
                            <div className="rounded-lg bg-gray-200 p-4">
                                <p className="font-semibold text-gray-800">Weekly Grocery</p>
                                <p className="text-xs text-gray-600 mt-1">23 September 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 ">

                    <button
                        type="button"
                        onClick={() => navigate('/lists/new')}
                        className="rounded-xl bg-gray-100 border-2 border-black p-6 w-full text-left flex items-center gap-4 hover:bg-gray-200 transition"
                    >
                        <div className="h-16 w-16 flex items-center justify-center">
                            <img src={cart} alt="cart" />
                        </div>
                        <p className="font-semibold text-gray-700">Add New List</p>
                    </button>

                    <div className="rounded-xl h-full border-2 border-black bg-gray-100 p-6">
                        <div className="flex items-center justify-center">
                            
                        </div>
                        <p className="text-center text-sm text-gray-700 mt-3"></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}