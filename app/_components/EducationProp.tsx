const EducationProp = (props) => {
    return (
        <div className="p-8">
            <h1><b>{props.award}</b></h1>
            <h2>{props.institution}</h2>
            <h3>{props.awardDate}</h3>
        </div>
    );
}

export default EducationProp;