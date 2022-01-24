import { Sede } from '../interfaces/interface';


export const getSedes = async()=>{

    const url= 'https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582';
    const resp = await fetch(url);
    const {places}=await resp.json();
    return places;


}

export const getPrincipalSede = async()=>{

    const url= 'https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582';
    const resp = await fetch(url);
    const {places}=await resp.json();
    const principal =   await places.filter((item:Sede)=>item.main_headquarter)
    return principal[0];
    


}