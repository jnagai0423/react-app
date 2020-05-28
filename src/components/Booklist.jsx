import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
            <ul>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        // : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.title}</li>)

                        : bookData.data.items.map((x, index) => 
                            <li key={index}>
                                {x.volumeInfo.title}
                                ( {x.volumeInfo.publisher} )<br/>
                                <img src={x.volumeInfo.imageLinks.thumbnail} /><br/>

                                {x.volumeInfo.authors}<br/>
                            </li>
                            )
                }
            </ul>
        </div>
    );
}

export default Booklist;