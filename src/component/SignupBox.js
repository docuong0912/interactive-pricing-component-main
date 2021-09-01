import { useEffect,useState } from 'react';
import check from '../images/icon-check.svg';
export default function SignupBox(){
    const defaultView = 0;
    const views = ["10K","50K","100K","500K","1M"];
    const fee = [8,12,16,24,36];
    const [range,setRange] = useState(defaultView);
    const [discount,setDiscount] = useState (false);
    const discounts = fee.map(x=>(x-(x*25/100)).toFixed(2));
    const value = range <=25 ? 0 : range <=50 ? 1 : range <=75 ? 2: range<100 ? 3 : 4;
    const inputVal =  range <25 ? 0 : range <50 ? 25 : range <75 ? 50: range<100 ? 75 : 100;
    return(
        <div className="box-container">
            <h4>{views[value]} Pageview</h4>
            <input defaultValue={defaultView} type="range" onChange={e=>{
                setRange(e.target.value);
                e.target.value = inputVal;
            }}/>
            <div className="price">
                <h1>${discount ? discounts[value]: fee[value].toFixed(2)}</h1>
                <p>/month</p>
            </div>
            <div className="discount1">
                <p>Monthly Billing</p>
                <div className="switch">
                    <input type= "checkbox" onChange={()=>setDiscount(!discount)}/>
                    <div className="toggle-btn"></div>
                </div>
                
                <p>Yearly Billing</p>
                <p className="yearly-discount">-25%</p>
            </div>
            <hr/>
            <div className="discount2">
                <img src={check} alt="check"/>
                <p>Unlimited websites</p>
            </div>
            <div className="discount2">
                <img src={check} alt="check"/>
                <p>100% data ownership</p>
            </div>
            <div className="discount2">
                <img src={check} alt="check"/>
                <p>Email report</p>
            </div>
            <button type="button"> Start my trial </button>
        </div>
    )
}