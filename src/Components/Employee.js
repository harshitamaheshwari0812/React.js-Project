import React from 'react';

export default function Employee(prop) {
    if(prop.name ==='joker')
        throw new Error("not an employee name")
    else
        return <div><h2>{prop.name}</h2>{prop.children}</div>;
}
