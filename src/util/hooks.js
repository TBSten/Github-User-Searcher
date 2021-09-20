import { useState, useEffect, } from "react" ;

export function useInputText(init){
    const [value, setValue ] = useState(init);
    function onChange(e){
        setValue(e.target.value);
    }
    return [value, setValue, onChange] ;
}

export function useUserSearch(initQ){
    const [q, setQ] = useState(initQ);
    const [users, setUsers] = useState([]);
    const [status,setStatus] = useState("wait");
    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=${q}`).then((res)=>res.json())
            .then((res)=>{
                const newUsers = [] ;
                if(res.items){
                    res.items.forEach(el=>{
                        newUsers.push(el);
                    });
                }
                setUsers(newUsers);
                setStatus("success");
            }).catch((error)=>{
                console.error(error);
                setStatus("error");
            });
        return ()=>{
            setUsers([]);
        } ;
    }, [q]);
    return {
        q,
        setQ,
        users,
        status,
    } ;
}


