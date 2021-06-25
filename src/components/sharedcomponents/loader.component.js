import {primary, smallSize} from '../../constant';


export const LoaderSpinner = (property) => {
    // default property;
    const style = {
        fontSize: property.size || smallSize,
        color: property.color || primary
    }

    return (
    <div className='loader-spinner' style={style} >
        
    </div>);
}

export const LoaderLinear = (property) => {
    // default property;
    const style = {
        fontSize: property.size || smallSize,
        color: property.color || primary
    }

    return (
    <div className='loader-linear' style={style} >
        
    </div>);
}