import React from "react";
import clsx from "clsx";

/**
 * Reusable Glass component
 * Props:
 *  - as: HTML element type (div, button, section, etc.)
 *  - className: additional Tailwind classes
 *  - bgColor: background color (default: 'bg-white/5')
 *  - hoverBgColor: background color on hover (default: 'hover:bg-white/10')
 *  - rounded: border radius (default: 'rounded-lg')
 *  - border: border class (default: 'border border-white/30')
 *  - shadow: shadow class (default: 'shadow-lg hover:shadow-xl')
 *  - children: content
 *  - ...props: any HTML attributes
 */
const Glass = ({
    as: Component = "div",
    className = "",
    bgColor = "bg-white/5",
    hoverBgColor = "hover:bg-white/10",
    rounded = "rounded-lg",
    border = "border border-white/30",
    shadow = "shadow-lg hover:shadow-xl",
    children,
    ...props
}) => {
    const classes = clsx(
        bgColor,
        hoverBgColor,
        rounded,
        border,
        shadow,
        "backdrop-blur-md text-white transition duration-300 ease-in-out",
        className
    );

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

export default Glass;
