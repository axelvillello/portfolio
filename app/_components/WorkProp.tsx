const WorkProp = (props) => {
    return (
        <div className="p-8">
            <h1><b>{props.role}</b></h1>
            <h2>{props.company}</h2>
            <h3>{props.startDate} - {props.endDate}</h3>
            <ul className="list-disc mt-2 ml-6">
                {props.items.map((item, index) => (
                    <li key = {index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkProp;