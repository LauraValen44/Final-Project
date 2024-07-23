import { useState } from 'react';

const useLoading = ({ defaultLoading = false }) => {
    const [loading, setLoading] = useState(defaultLoading);

    const onStart = () => setLoading(true);

    const onEnd = () => setLoading(false);

    return { 
        loading,
        onEnd,
        onStart
    };
};

export default useLoading;