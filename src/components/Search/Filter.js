import React, { Fragment, Suspense, useState } from 'react';

const filter = (props) => {
    return (
        <div className="filter__container">
            <div className="filter__heading">
                Filters:
            </div>
            <div className="filters">
                <div className="filters__heading"> Filter Heading 1</div>
                <div className="filters__body">Filter Body 1</div>
            </div>
            <div className="filters">
                <div className="filters__heading"> Filter Heading 2</div>
                <div className="filters__body">Filter Body 2</div>
            </div>
            <div className="filters">
                <div className="filters__heading"> Filter Heading 3</div>
                <div className="filters__body">Filter Body 3</div>
            </div>
            <div className="filters">
                <div className="filters__heading"> Filter Heading 4</div>
                <div className="filters__body">Filter Body 4</div>
            </div>
            <div className="filters">
                <div className="filters__heading"> Filter Heading 5</div>
                <div className="filters__body">Filter Body 5</div>
            </div>

        </div>
    );
};

export default filter;