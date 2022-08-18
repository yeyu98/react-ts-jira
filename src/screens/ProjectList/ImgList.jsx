import React, { useState } from 'react';
import useMount from 'utils/hooks/useMount';

function ImgList(props) {
    const [imgList, setImgList] = useState([])


    useMount(() => {
        fetch(`/api/v1/vertical/category/4e4d610cdf714d2966000000/vertical`).then(res=>res.json()).then(
            res => {
                if(res.msg === 'success') {
                    const vertical = res?.res?.vertical;
                    const _vertical = [...vertical]
                    const data = _vertical.map(item => {
                        return item.img
                    })
                    setImgList(data)
                }
            }
        )
    })

    return (
        <div>
            
            <div className='wrapper'>
                {
                    imgList.map(item => {
                        return <img style={{margin: '5px'}} src={item} alt={''} width='250' height='450'/>
                    })
                }
            </div>
        </div>
    );
}

export default ImgList;