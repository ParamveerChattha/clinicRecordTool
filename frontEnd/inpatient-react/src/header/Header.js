import React from 'react';
import { useFetch } from '../hooks';

const url = 'http://localhost:3000/'

function Header() {
    const responseStatus = useFetch(url, []);

    return (
        <div>
            {
                responseStatus.map(result => {
                    const { status } = result;
                    if (status === 'connected') {
                        return (
                            <div key = {status}>

                                <h1>Param's Dental Clinic</h1>
                                
                            </div>
                        )
                    }
                    return (
                        <div> <h1>not connected</h1> </div>
                    )
                })
            }

        </div>
    )
}

export default Header;