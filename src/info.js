import useInputs from "./useInputs";

const Info = () => {
    const [state, onChange] = useInputs({
        name: "",
        nickname: "",
    });
    const { name, nickname } = state;
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" onChange={onChange} value={nickname} />
            </div>
            <div>
                <b>name : {name}</b>
                <b>nickname : {nickname}</b>
            </div>
        </div>
    );
};

export default Info;
