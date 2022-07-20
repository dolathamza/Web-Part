import {useEffect} from 'react'
import Router from 'next/router'
import {useSelector} from 'react-redux';


export function useUser({redirectTo, redirectIfFound} = {}) {
    const Auth = useSelector(state => state.User);
    const {isAuthenticated, loading} = Auth;
    // const finished = Boolean(loading)
    // const hasUser = Boolean(user)

    useEffect(() => {
        if (loading) return;
        if (!redirectIfFound && redirectTo && !loading && !isAuthenticated) {
            Router.push(redirectTo)
        }
        if (redirectIfFound && !loading && isAuthenticated) {
            Router.push(redirectTo)
        }
    }, [redirectTo, redirectIfFound, loading, isAuthenticated])

    return Auth
}