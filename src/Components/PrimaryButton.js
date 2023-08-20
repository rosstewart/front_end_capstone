function PrimaryButton({ text, style }) {
    return (
        <button style={{
            width: "200px",
            height: "60px",
            borderRadius: "16px",
            border: "none",
            ...style,
        }} className="yellowBackground buttonText">{text}</button>
    )
}

export default PrimaryButton;