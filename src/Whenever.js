import React from 'react'

export default function Whenever() {
    const [value, setValue] = React.useState('here')
    const [name, setName] = React.useState('Katya')
    console.log(`Inside Whenever. Before setValue: Value: ${value}. Name: ${name}`)
    React.useEffect(() => {
        console.log(`Inside useEffect. Before setValue: Value: ${value}. Name: ${name}`)
        setValue('there')
        console.log(`Inside useEffect. After setValue. Before setName: Value: ${value}. Name: ${name}`)
        setName('Pere')
        console.log(`Inside useEffect. After setName: Value: ${value}. Name: ${name}`)
    }, [])
    return (
        <div>
            {`Value: ${value}. Name: ${name}`}
        </div>
    )
}
