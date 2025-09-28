import React from "react";
import { useTheme } from "../../../ThemeProvider/Layer";

const ButtonPrimary = ({
    children,
    onClick,
    type = "button",
    className = "",
    bgColor,      // optional prop for background color
    textColor,    // optional prop for text color
}) => {
    const theme = useTheme();

    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                backgroundColor: bgColor || theme.colors.primary, // use custom color if provided
                color: textColor || theme.colors.text,           // use custom text color if provided
                padding: theme.spacing.md,
                borderRadius: theme.borderRadius.md,
                fontWeight: "600",
                fontFamily: theme.fontFamily.sans,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
            }}
            className={`hover:scale-105 text-xl hover:text-2xl ${className}`}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;
