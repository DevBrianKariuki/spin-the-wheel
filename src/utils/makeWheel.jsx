const width = (s) =>{
    if(s === 30) return '33px'
    else if(s === 20) return '50px'
    else if (s === 50) return '19px'
    else return ''
}

const height = (s) =>{
    if(s === 30) return '143px'
    else if(s === 20) return '135px'
    else if (s === 50) return '150px'
    else return ''
}

export const makeWheel = (segments, risk, colorObj) =>{
    let degArray = [];
    let array = [];
    let count = 0;

    if(risk === 'Low'){

    }else if(risk === 'High'){

    }else{
        for (let k = 0; k <= segments; k++) {
            array[k] = 0;
        }
        for( let i = 1; i <= segments; i = i + 2){
            if(array[i] === 0){
                array[i] = <div key={i} style={{
                    backgroundColor: `${colorObj.purple}`,
                    width: `${width(segments)}`,
                    left: `${height(segments)}`,
                    transform: `rotate(${(360/segments) * (i - 1) }deg)`,
                 }}  className="s1"
                >
                    {i}
                </div>
            }
        }
        for(let g = 2; g <= segments; g = g + 4){
            
        }
    }
    return{
        wheelData : array
    }
} 