import axios from "axios";
import { useEffect, useState } from "react";

const useNumber = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        axios.get("")
            .then(data => setNumber(data.data));
    }, [])
    return number;
};

export default useNumber;