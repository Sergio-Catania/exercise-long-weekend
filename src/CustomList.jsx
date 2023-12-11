export default function({type, list, buttons, onDelete, onEdit}) {

    const Lista = ({children}) => type === 'ul' ?
        <ul>{children}</ul> :
        <ol>{children}</ol>

    return (
        <Lista type={type}>
            {list.map((text, index)=>(
                <li key={`li${index}`}>
                {text}
                {buttons.map((text, b)=>(
                    <button 
                        key={`button${b}`}
                        onClick={()=>{
                            if(text === 'Elimina'){
                                onDelete(index);
                            }else if(text === 'Modifica'){
                                onEdit(index);
                            }
                        }}
                    >{text}</button>
                ))}
            </li>
            ))}
        </Lista>
    )    

}