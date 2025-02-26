import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd");
  const [To , setTo] = useState("inr")
  const [convertedAmt , setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  // swap
  const swap = () => {
    setFrom(To)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {
    setConvertedAmt(amount*currencyInfo[To])
  }

  return (
    <div
        className="w-[1500px] h-[800px] flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s')`,
        }}
    >
        <div className="w-[60%]">
            <div className="w-full text-black max-w-md mx-auto border border-gray-60 rounded-lg p-2 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()              
                    }}
                >
                    <div className="w-full mb-1 bg-amber-700">
                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(from)}
                            selectCurrency = {from}
                            onAmountChange={(amount) => setAmount(amount)}
                            // amountDisable      
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onclick = {swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmt}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency = {To}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to  {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
