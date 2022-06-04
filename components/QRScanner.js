import { useState } from "react"
import QRCode from "react-qr-code";

export default function QRScanner() {
const [number, setNumber] = useState("")
const [qrVisivle, setQrVisivle] = useState(false)

const handleSubmit = () => {
    if (number === null || number === undefined) {
        alert("Please enter a valid number")
    } else if(number.length < 10) {
        alert("Please enter full number")
    } else {
        setQrVisivle(true)
    }
}

  return (
    <>
    {qrVisivle  === true ?
        <div className="relative flex flex-col md:items-center items-center text-white gap-2 md:gap-12 justify-center bg-gray-800 overflow-hidden h-screen">
                <h2 className="text-2xl md:text-4xl font-semibold">Your QR Code is</h2>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 rounded-lg">
                    <div className="bg-white space-y-5 md:px-10 rounded-xl flex flex-col items-center justify-center md:py-10 p-4 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                        <QRCode value={`https://wa.me/+91${number}`} />
                    </div>
                </div>
      
      </div>: 
        <div className="relative flex items-start md:items-center justify-center bg-gray-800 overflow-hidden h-screen">
        <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
            <svg
            className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
            width={364}
            height={384}
            viewBox="0 0 364 384"
            fill="none"
            >
            <defs>
                <pattern
                id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
                >
                <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                </pattern>
            </defs>
            <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
            </svg>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
            <main className="mt-16 sm:mt-24">
                <div className="mx-auto max-w-7xl">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                        <div>
                        <a
                            href="#"
                            className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                        >
                            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                            Get the best service 
                            </span>
                        </a>
                        <h1 className="mt-4 text-2xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                            <div className="md:block">QR Code of</div>
                            <div className="text-indigo-400 md:block">Success</div>
                        </h1>
                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            Enter your phone number and get your own qr-scanner that links to your whatsapp account.
                        </p>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 rounded-lg">
                        <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                        <div className="px-4 py-8 sm:px-10">
                            <p className="text-xl font-medium text-gray-700">Enter Your Phone number</p>
                        

                            <div className="mt-6 relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            </div>

                            <div className="mt-6">
                            <form action="#" method="POST" className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
                                <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="text"
                                    name="text"
                                    type="tel"
                                    maxLength={10}
                                    value={number}
                                    onChange={(e)=>{setNumber(e.target.value)}}
                                    placeholder="Phone number eg. 9955678934"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                />
                                </div>

                                <div>
                                <button
                                onClick={handleSubmit}
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Create your QRScanner
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
      </div>
      }
       
    </>
  )
}
