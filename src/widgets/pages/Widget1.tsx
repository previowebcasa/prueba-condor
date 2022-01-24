import { useEffect, useState } from 'react';
import { getPrincipalSede } from '../../helpers/fetch';
import { Sede } from '../../interfaces/interface';


export const Widget1 = () => {
    
    
    const [principal, setPrincipal] = useState<Sede>();
   


    useEffect(() => {
        getPrincipalSede().then(principal=>{

            setPrincipal(principal)
        }
        );
     
    }, []);


  return (
        <>
        <div id="widget-header" className="widget-header">
            <div className="widget-header__container">
                <div className="widget-headquarter">
                    <i className="fas fa-map-marker-alt"></i>
                    <span >{principal?.name}</span>
                </div>
                <div className="widget-icon">
                <i className={`wi wi-day-${principal?.weather[0]?.icon}`}></i>
                </div>

                </div>

            <div className="widget-body">
                <p className="widget-body__temp" >{ principal?.main.temp && principal?.main.temp-273.15 } ° C</p>
                <div className="widget-body__container">
                    <span><i className="fa-solid fa-circle color-1"></i> {principal?.wind.deg} %</span>
                <span><i className="fa-solid fa-circle color-2"></i> {principal?.wind.speed} m/s</span>

                </div>

            </div>
            <div className="widget-footer">
            <h2 className="widget-footer_primary">Good morning, <p className="widget-footer_second">Condor!</p></h2>

            </div>
        </div>
        
        </>

    )
};
