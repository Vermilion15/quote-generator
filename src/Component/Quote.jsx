
const Quote = ( { onHandleRandom, data }) => {
  return (
    <>
    <h1>Project : Quote Generator</h1>
      <div className="quote-container">
        <button onClick={ onHandleRandom }>Generate Quote</button>
        <h2 style={{color:'white'}}>{ data?.text }</h2>
        <h4 style={{color:"white"}}>{ data?.author }</h4>
      </div>
    </>
    
  ) 
}

export default Quote
