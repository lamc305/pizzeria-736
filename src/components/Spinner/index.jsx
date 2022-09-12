import './spinner.css'

export function Spinner() {
  return (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  )
}


function SpinnerWait() {
  return (
    <div className='spinner__container'>
      <Spinner/>
    </div>
  )


}

export default SpinnerWait