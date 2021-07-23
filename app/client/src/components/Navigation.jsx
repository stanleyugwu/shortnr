import React from 'react';
import { Button } from 'react-bootstrap';

const NAV_ITEMS = [
    {text:'About Us',url:'/about.html'},
    {text:'Login',url:'/login'}, 
    {text:'Sign Up',url:'/signup'}
]

const Navigation = (props) => {
    let {mobileView} = props;

    return (
        <nav className={mobileView ? 'd-block w-100 bg-primary' : 'd-inline'}>
            <ul className="pb-0 list-inline d-inline">
                {
                    NAV_ITEMS.map(item => {
                        let {text, url} = item;
                        return (
                            <li className={mobileView ? 'd-block pb-1 text-center' : 'd-inline pe-2'}>
                                {
                                    mobileView ? (
                                        <Button href={url} color="white">{text}</Button>
                                    ) : (
                                        <Button
                                            href={text == 'Login' || text == 'Sign Up' ? false : url}
                                            variant={text == 'Login' ? 'outline-primary' : text == 'Sign Up' ? 'primary' : false}
                                            className={text != 'Sign Up' && text != 'Login' ? 'text-primary' : null}
                                        >
                                            {text}
                                        </Button>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation