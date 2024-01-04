import React,{useState} from 'react'

const Game = () => {
    const [control, setControl] = useState('Manual')
    const [wheel ,setWheel] = useState([])
    const [risk ,setRisk] = useState('Medium');
    const [segments, setSegments] = useState(10)
    console.log(risk, segments)

  return (
    <div className="w-full border-t-[3px] px-6 h-[100vh]  flex items-start justify-center  border-secondary  bg-primary">
      <div className='md:w-[75%] h-[100%]  w-full justify-center  item-center flex flex-col gap-4'>
        <div className='w-[35%] h-[100%]  py-6  px-4  bg-secondary items-center  flex flex-col'>
            <div data-aos='zoom-in' className='flex border-[1px] w-full  border-neutral-600  gap-2 items-center justify-center my-4 p-[6px]  bg-secondary rounded-full'>
                <button onClick={() => setControl('Manual')} className={` ${ control === 'Manual' ? 'bg-primary text-white ' : 'bg-secondary text-white'}  py-2 px-4 font-inter rounded-full w-[100px]`}>Manual</button>
                <button onClick={() => setControl('auto')} className={` ${ control === 'auto' ? 'bg-primary text-white ' : 'bg-secondary text-white'} py-2 px-4 font-inter rounded-full w-[100px]`}>Auto</button>
            </div>
            <div className='flex w-full  justify-between items-center '>
                <p className='font-inter text-white'>Bet Amount</p>
                <p className='font-inter text-white'>KES 100</p>
            </div>
            <div className='rounded-md items-center w-full flex'>
                <input type='number'  className='bg-primary focus:outline-none focus:ring-1 focus:ring-accentColor  text-white font-inter text-sm py-3 px-3 rounded-xl' placeholder='Enter your bet amount' />
                <div className='shadow-md py-4'>
                    <button className='font-inter tex-sm text-white px-2'>1/2</button>
                    <button className='font-inter tex-sm text-white px-2'>x2</button>
                </div>    
            </div>
            <div className='flex justify-start w-full  items-start py-3  flex-col'>
                <p className='font-inter font-semibold text-white text-lg'>Risk</p>
                <select value={risk} onChange={(event) => setRisk(event.target.value)}  className="w-full bg-primary border border-neutral-600  focus:border-accentColor font-inter  text-white text-sm rounded-lg focus:ring-accentColor focus:border-none block w-full p-2.5 ">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div className='flex justify-start w-full  items-start py-3  flex-col'>
                <p className='font-inter font-semibold text-white text-lg'>Segments</p>
                    <select value={segments} onChange={(event)=>setSegments(event.target.value)} className="w-full bg-primary border border-neutral-600  focus:border-accentColor font-inter  text-white text-sm rounded-lg focus:ring-accentColor focus:border-none block w-full p-2.5 ">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
            </div>
            <div className={`${ control === 'auto' ? 'flex' : 'hidden'  } justify-start py-3 flex-col w-full`}>
                <p className='font-inter font-semibold text-white'>Number of bets</p>
                <input type='number'  className='form-control focus:outline-none focus:border-none focus:ring-1 focus:ring-accentColor text-white  font-inter text-sm py-2.5 px-4 bg-primary border-[1px] border-neutral-600  rounded-lg' placeholder='Enter number of bets'/>
            </div>
            { control === 'auto' ?  <button className='font-inter text-primary bg-accentColor font-medium  w-full py-2 rounded-lg'>Auto Start</button> : 
            <button className='font-inter text-primary font-medium  bg-accentColor w-full py-2 rounded-lg'>Place Bet</button>}
        </div>
        <div id='game-bar'  className='w-[70%]'>

        </div>
      </div>
    </div>
  )
}

export default Game