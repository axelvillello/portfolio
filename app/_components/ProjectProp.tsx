const ProjectProp = (props) => {
    return (
        <div className="p-8">
            <h1><b>{props.title}</b></h1>
            <h2>Status: {props.status}</h2>
            <div className="flex flex-wrap gap-2">
                <h3>Technologies: </h3>
                {props.technologyItems.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
            <ul className="list-disc mt-2 ml-6">
                {props.featureItems.map((item, index) => (
                    <li key = {index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectProp;