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
    

    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.getElementById("lottie"),
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "./Countdown.json",
        });
      }, []);


    return(
        <>
        <section className="min-h-screen bg-gradient-to-br from-purple-300 to-purple-600 flex flex-col items-center justify-center p-6">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="font-bold text-6xl bg-gradient-to-r from-gray-500 to-gray-800 bg-clip-text text-transparent">
                    Counter App
                </h1>
                <p className="text-black mt-2">Click buttons to modify the value</p>
            </div>
            <div id="lottie" style={{ width: "320px", marginBottom: "20px" }}></div>
            <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 bg-gradient-to-l from-purple-50 to-purple-100">

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
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 w-full">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side - Creator info */}
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-white font-semibold text-lg">
                            Created by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">Shivang Chaurasia</span>
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">React Counter App with Tailwind CSS</p>
                    </div>

                    {/* Center - Social links */}
                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                        <a 
                            href="https://github.com/ShivangChaurasia" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-white hover:text-blue-300 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/shivang-chaurasia-754232297" 
                            className="flex items-center text-white hover:text-purple-300 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            LinkedIn
                        </a>

                        <a 
                            href="https://shivangchaurasia.github.io/Portfolio-hcj/" 
                            className="flex items-center text-white hover:text-green-300 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Portfolio
                        </a>
                    </div>

                    {/* Right side - Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} All rights reserved
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Made with <span className="text-red-500">❤</span> using React & Tailwind
                        </p>
                    </div>
                </div>

                {/* Decorative border */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex justify-center">
                        <div className="flex space-x-3">
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}



let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter></Counter>)