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
        for(let k = 1; k <= segments; k++){
            array[k] = 0;
        }
        const div = segments/10;
        const purpleSegment = 2 * div;
        for(let i = 1; i <= segments; i = i + segments/purpleSegment ){
            if(array[i] === 0){
                array[i] = <div key={i} style={{
                    backgroundColor: `${colorObj.purple}`,
                    width: `${width(segments)}`,
                    left: `${height(segments)}`,
                    transform: `rotate(${(360/segments) * (i - 1) }deg)`,
                 }}  className="s1"
                >
                </div>
            }
        }
        for(let i = 1; i <= segments; i++){
            if(array[i] !== 0){
                array[i+1] = <div key={i} style={{
                    backgroundColor: `${colorObj.green}`,
                    width: `${width(segments)}`,
                    left: `${height(segments)}`,
                    transform: `rotate(${(360/segments) * (i - 1) }deg)`,
                 }}  className="s1"
                >
                </div>
            }
        }

    }else if(risk === 'High'){

    }else{
        let count = 0;
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
                </div>
            }
        }
        for(let g = 2; g <= segments; g = g + 4){
            if(array[g] === 0){
                array[g] = <div key={g} style={{
                    backgroundColor: `${colorObj.green}`,
                    width: `${width(segments)}`,
                    left: `${height(segments)}`,
                    transform: `rotate(${(360/segments) * (g - 1) }deg)`,
                 }}  className="s1"
                >
                </div>
                count ++;
            }
            if(count === Math.floor((segments * 20)/100)){
                count = 0;
                break
            }
        }

        for(let m = 4; m <= segments; m++){
            if(array[m] === 0 && count === 0){
                array[m] = <div key={m} style={{
                    backgroundColor: `${colorObj.white}`,
                    width: `${width(segments)}`,
                    left: `${height(segments)}`,
                    transform: `rotate(${(360/segments) * (m - 1) }deg)`,
                 }}  className="s1"
                >
                </div>
                count = 1;
            }
            if(array[m] === 0 && count === 1){
                array[m] = <div key={m} style={{
                    backgroundColor: `${colorObj.yellow}`,
                    width: `${width(segments)}`,
                    left: `${height(segments)}`,
                    transform: `rotate(${(360/segments) * (m - 1) }deg)`,
                 }}  className="s1"
                >
                </div>
                count = 2;
            }
            if(array[m] === 0 && count === 2){
                array[m] = <div key={m} style={{
                    backgroundColor: `${colorObj.warning}`,
                    width: `${width(segments)}`,
                    left: `${height(segments)}`,
                    transform: `rotate(${(360/segments) * (m - 1) }deg)`,
                 }}  className="s1"
                >
                </div>
                count = 0;
            }
        }
        
    }
    return{
        wheelData : array
    }
} 