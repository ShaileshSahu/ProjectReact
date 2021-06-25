

export const insertJSON = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getJSON = (key)=> {
    return JSON.parse(localStorage.getItem(key));
};

