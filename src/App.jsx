import  {Input} from "./components"
import useCurrencyinfo from "./hooks/useCurrencyinfo"
import {useState}  from "react"

function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("inr")
  const [to , setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZXl8ZW58MHx8MHx8fDA%3D')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >

                    <div className="w-full mb-1">
                      <Input
                        label="From"
                        amount= {amount}
                        currencyOption = {options}
                        onChangeCurrency = {(currency) => {setFrom(currency)
                          
                        }}
                        selectCurrency = {from}
                        onAmountChange={(amount) => setAmount(amount)}
                      />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                          label="To"
                          amount= {convertedAmount}
                          currencyOption = {options}
                          onChangeCurrency = {(currency) => setTo(currency)}
                          selectCurrency = {to}
                          amountDisable
                            
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toLowerCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
