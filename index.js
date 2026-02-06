// =============================================================================================================================================
// Activity 2: Create a counter app and design it.
// useState()-------------------------------------------------------
// =============================================================================================================================================

function Counter(){
    const [count,setCount] = React.useState(0);
    let handleDec = ()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    let handleInc = ()=>{
        setCount(count+1);
    }

    let handleReset = ()=>{
        setCount(0);
    }


    return(
        <section className="min-h-screen bg-gradient-to-br from-purple-300 to-purple-600 flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 bg-gradient-to-l from-purple-50 to-purple-100">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Counter App
                    </h1>
                    <p className="text-gray-500 mt-2">Click buttons to modify the value</p>
                </div>

                {/* Counter Display */}
                <div className="flex justify-center items-center mb-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-md opacity-30"></div>
                        <div className="relative bg-white rounded-3xl border-2 border-gray-200 px-12 py-8 shadow-lg">
                            <p className="text-7xl font-bold text-gray-800 text-center">{count}</p>
                        </div>
                    </div>
                </div>

                {/* Counter Controls */}
                <div className="flex justify-center items-center space-x-8 mb-10">
                    <button 
                        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                            count === 0 
                            ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
                            : 'bg-gradient-to-br from-red-500 to-pink-500 text-white hover:shadow-xl'
                        }`}
                        onClick={handleDec}
                        disabled={count === 0}
                    >
                        <span className="text-3xl font-bold">-</span>
                    </button>

                    <div className="text-center">
                        <p className="text-sm text-gray-500 font-medium mb-1">Current Value</p>
                        <p className="text-lg font-semibold text-gray-700">{count}</p>
                    </div>

                    <button 
                        className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl active:scale-95"
                        onClick={handleInc}
                    >
                        <span className="text-3xl font-bold">+</span>
                    </button>
                </div>

                {/* Reset Button */}
                <div className="text-center">
                    <button 
                        className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:scale-95"
                        onClick={handleReset}
                    >
                        <span className="flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                            </svg>
                            Reset Counter
                        </span>
                    </button>
                </div>

                {/* Counter Stats */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-xl text-center">
                            <p className="text-sm text-blue-600 font-medium">Status</p>
                            <p className="text-lg font-bold text-gray-800">
                                {count === 0 ? 'Zero' : count > 10 ? 'High' : 'Low'}
                            </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl text-center">
                            <p className="text-sm text-purple-600 font-medium">Type</p>
                            <p className="text-lg font-bold text-gray-800">
                                {count % 2 === 0 ? 'Even' : 'Odd'}
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Instructions */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>• Click + to increment</p>
                    <p>• Click - to decrement (minimum 0)</p>
                    <p>• Use Reset to return to zero</p>
                </div>
            </div>
        </section>
    )
}



let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter></Counter>)