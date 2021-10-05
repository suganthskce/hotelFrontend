import React from 'react';
import ProgressiveImage from 'react-progressive-image';

const image = (props) => {
    const {
        className = '',
        alt = '',
        height = '',
        width = '',
        url = '',
        id = '',
        handeleOnClick = () => { } } = props;
    return (
        <React.Suspense maxDuration={200} fallback={<img data-id={id} src={url} alt={alt} className={`${className}__preview`} height={height} width={width} onClick={handeleOnClick} />} >
            <ProgressiveImage src={url} placeholder={''} height={height} width={width} >
                {(src, loading) => (
                    <img data-id={id} style={{ opacity: loading ? 0.5 : 1 }} src={src} alt={alt} height={height} width={width} onClick={handeleOnClick} className={className} />
                )}
            </ProgressiveImage>
        </React.Suspense>
    );
}

export default image;
