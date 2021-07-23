import React, { useEffect, useRef, useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCopy, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ShortenedListItem = (props) => {
    let {originalUrl, shortenedUrl} = props;
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);

    const _handleCopyLink = () => {
        let temp_input = document.createElement('textarea');
        temp_input.innerText = 'https://short.nr/'+shortenedUrl;

        //target/focus on input
        document.body.appendChild(temp_input);
        temp_input.focus();
        temp_input.select();

        //execute copy
        let copied = document.execCommand('copy')
        if(copied){
            setLinkCopied(true);
        }

        //remove textarea from body
        document.body.removeChild(temp_input);
    }

    useEffect(()=>{
        setTimeout(() => {
            setLinkCopied(false);
        }, 1000)
    },[linkCopied])

    return (
        <div className="pb-3">
            <ListGroupItem className="d-flex align-items-center justify-content-between p-0 bg-dark">
                <div className="p-2 ps-2 border-end border-0">
                    <Icon 
                        icon={dropDownVisible ? faAngleUp : faAngleDown} 
                        onClick={e => setDropDownVisible(!dropDownVisible)}
                        className="text-light "
                    />
                </div>
                <span className="text-light">http://short.nr/{shortenedUrl}</span> 
                <div className="border-0 p-2 border-start pe-2">
                    {
                        linkCopied ? (
                            <span className="text-light small">Copied</span>
                        ) : (
                            <Icon icon={faCopy} className="text-light" onClick={_handleCopyLink}/>
                        )
                    }
                </div>
            </ListGroupItem>
            {
                dropDownVisible && (
                    <ListGroupItem className="bg-dark text-white border-0 border-top">
                        {originalUrl}
                    </ListGroupItem>
                )
            }
        </div>
    )
}

export default ShortenedListItem