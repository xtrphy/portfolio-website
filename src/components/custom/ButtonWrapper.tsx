import React, { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ButtonTooltipProps {
    children: ReactNode;
    content: ReactNode;
}

const ButtonWrapper = ({ children, content }: ButtonTooltipProps) => {
    return (
        <Tooltip>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default ButtonWrapper;