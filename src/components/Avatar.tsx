import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarComponent = () => {
    return (
        <Avatar className="w-[270px] h-[270px] bg-white/10 backdrop-blur-l border border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
            <AvatarImage src='https://avatars.githubusercontent.com/u/175429655?v=4' />
            <AvatarFallback>VP</AvatarFallback>
        </Avatar>
    );
};

export default AvatarComponent;