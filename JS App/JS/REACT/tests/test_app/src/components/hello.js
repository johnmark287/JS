import React from 'react';

const HelloQuan = () => {
    // return (
    //     <div>
    //         <h1>Hello Quan</h1>
    //     </div>
    // );
    return React.createElement(
            'div',
            {id: 'hello'}, 
            React.createElement('h1', null, 'Hello Quan')
        );
};

export default HelloQuan;
