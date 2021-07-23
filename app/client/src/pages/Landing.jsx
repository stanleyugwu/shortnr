import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSpinner, faAngleDown, faCopy } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {Form, FormControl, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import shortenerAdapter from '../adapters/shortenerAdapter';
import ShortenedList from '../components/ShortenedList';

const Landing = (props) => {
    const [shortening, setShortening] = useState(false);
    const [url, setUrl] = useState('');
    const [urlInvalid, setUrlInvalid] = useState(false);
    const [requestError, setRequestError] = useState('');
    const [shortenedUrls, setShortenedUrls] = useState([]);

    const _handleShorten = async (evt) => {
        evt.preventDefault();
        const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;
        let URL = url.trim();

        if(!URL || !urlRegex.test(URL)) return setUrlInvalid(true)
        else setUrlInvalid(false)

        setShortening(true);
        setRequestError('');

        let shortened = await shortenerAdapter(URL);

        if(shortened.error){
            setRequestError(shortened.error);
            setShortening(false);
            return
        }

        setShortenedUrls([{ originalUrl: URL, shortenedUrl: shortened.url }, ...shortenedUrls]);
        setShortening(false);
        setUrl('');

    }

    return (
        <main className="row flex-column">
            <div className="text-center col-12">
                <h2 className="mb-0">Welcome to Shortnr</h2>
                <p className="mt-0">Your Saucy URL-Shortner</p>
            </div>

            <Form className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto mt-4">
                <FormControl
                    type="text"
                    placeholder="Paste Link to Shorten.." 
                    className="p-3 rounded-0 shadow"
                    onInput={e => urlInvalid && setUrlInvalid(false)}
                    onChange={evt => setUrl(evt.target.value)}
                    required
                    value={url}
                />
                <p className={`text-danger pt-2 pb-0 text-center`}>
                    {urlInvalid && (!url.trim() ? `You Didn't Enter Any Url` : 'You Entered Invalid Url')}
                </p>
                {
                    requestError && <p className="text-danger py-2 text-center">{requestError}</p>
                }
                <Button
                    variant="primary"
                    className="col-10 col-md-6 mx-auto d-block py-2 mt-3"
                    type="submit"
                    onClick={_handleShorten}
                    disabled={shortening}
                >
                    {
                        shortening ? <Icon icon={faSpinner} spin className="fs-3"/> : 'Shorten'
                    }
                </Button>
            </Form>
            <ShortenedList list={shortenedUrls}/>
            
        </main>
    )
}

export default Landing