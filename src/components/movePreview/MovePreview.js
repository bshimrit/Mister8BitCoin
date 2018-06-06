import React, { Component } from 'react';

import './movePreview.css'

const MovePreview = ({move}) => {
    var n =  new Date(move.at);
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
        return (
        <div className="move-preview flex-wrap">
            <div className="flex flex-column align-start move-info">
                <div>To: {move.to}</div>
                <div>Amount: {move.amount}</div>
                <div>At: {d + "/" + m + "/" + y}</div>
            </div>
        </div>
        );
    }

export default MovePreview;
