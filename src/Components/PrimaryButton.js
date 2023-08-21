function PrimaryButton({ onPressed, text, style, props }) {
    return (
        <button aria-label="On Click" onClick={onPressed} style={{
            width: "200px",
            height: "60px",
            borderRadius: "16px",
            border: "none",
            ...style,
        }} {...props} className="yellowBackground buttonText">{text}</button>
    )
}

export default PrimaryButton;