import {useEffect, useState} from 'react';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState(['shailesh']);

    const fetchList = async () => {
        setLoading(true);
        setList('Dragon');
    };

    useEffect(()=>{fetchList()},[]);
    return {loading, list};
};