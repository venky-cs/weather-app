import React,{useState,useEffect} from 'react'
import SideBar from './SideBar';
import DetailBar from './DetailBar'

function Main() {
    const [state, setState] = useState('');
    // useEffect(() => {
    // }, [state])
    return (
        <div className="main">
            <SideBar result={getLocation}/>
            <DetailBar value={state}/>
        </div>
    )

    async function getLocation(value) {
        let a = await value;
        if(a.length > 1){
            setState(a)
        }else{
            console.log('error')
        }
    }
}

export default Main
