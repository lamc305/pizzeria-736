import './spinner.css'


export function SpinnerFallback() {
  return (
    <div className='spinner__container' >
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )


}

export function SpinnerMenu() {
  return (
    <div className='spinnerMenu'>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}