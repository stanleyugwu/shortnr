import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ShortenedListItem from './ShortenedListItem';


const ShortenedList = (props) => {
    let {list:shortenedUrls} = props;
    
    return (
        <ListGroup className="px-2 mt-5 col-12 col-md-8 col-lg-6 mx-auto">
            <h6>Shortened Links:</h6>
            {
                !shortenedUrls.length && (
                    <p className="small text-center">You haven't shortened any links yet.</p>
                )
            }
            {
                shortenedUrls.map(urlObject => {
                    let {originalUrl,shortenedUrl} = urlObject;
                    return (
                        <ShortenedListItem originalUrl={originalUrl} shortenedUrl={shortenedUrl} />
                    )
                })
            }
        </ListGroup>
    )
}

export default ShortenedList