import { useEffect, useState } from 'react'

const UseEffect = () => {
    const [effect, setEffect] = useState(false)
    useEffect(() => {
        if (effect) alert('Content button Clicked')
    }, [effect])

    return (
        <div>
            {effect ? (<p>Eiusmod non elit ex ea minim ex id fugiat deserunt mollit ipsum. Ea dolor in voluptate occaecat ad. In non dolor non ea. Incididunt dolore ad ex commodo laboris ea sit nisi eiusmod officia dolore. Incididunt ullamco culpa cillum est sunt. Ut ut culpa incididunt incididunt ea. Aliquip ipsum duis esse amet irure irure sint ullamco occaecat nulla esse officia veniam sunt.</p>) : null}
            <button onClick={() => setEffect(!effect)}>Content</button>
        </div>
    )
}

export default UseEffect