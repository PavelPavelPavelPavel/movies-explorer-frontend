import { useState, useEffect } from "react";
import {
    SCREEN_SM,
    SCREEN_MD,
    SCREEN_LG,
    SCREEN_XS,
    SCREEN_XL,
    SCREEN_XXL,
} from '../constants'

function useResize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        width,
        isScreenSm: width >= SCREEN_SM,
        isScreenMd: width >= SCREEN_MD,
        isScreenXs: width >= SCREEN_XS,
        isScreenLg: width >= SCREEN_LG,
        isScreenXl: width >= SCREEN_XL,
        isScreenXxl: width >= SCREEN_XXL,
    };
};

export default useResize;
